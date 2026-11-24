(() => {
  const terminals = [
    ['p', 'Fuente +'], ['n', 'Fuente −'], ['r1', 'Resistencia A'],
    ['r2', 'Resistencia B'], ['l1', 'Bombillo A'], ['l2', 'Bombillo B']
  ];
  const BULBS = {
    '5v': { id:'5v', label:'Bombillo 5 V · 1 W', nominalVoltage:5, nominalPower:1, resistance:25, tolerance:.1 },
    '12v': { id:'12v', label:'Bombillo 12 V · 3 W', nominalVoltage:12, nominalPower:3, resistance:48, tolerance:.1 }
  };
  const bandColors = ['#241f1b','#714325','#d63f36','#ec802a','#f4d04f','#3d9656','#2962ce','#9759b7','#7e8185','#f7f3de'];
  const bandNames = ['negro','marrón','rojo','naranja','amarillo','verde','azul','violeta','gris','blanco'];
  function bands(value) {
    const digits = [Math.floor(value * (value < 10 ? 10 : 1) / 10), (value < 10 ? value * 10 : value) % 10];
    return [
      ...digits.map(i => ({ color: bandColors[i], name: bandNames[i] })),
      value < 10 ? { color: '#b59239', name: 'dorado · ×0,1' } : { color: bandColors[0], name: 'negro · ×1' },
      { color: '#b59239', name: 'dorado · ±5 %' }
    ];
  }
  function preset(lamp = false) {
    return lamp ? [['p','l1'], ['l2','n']] : [['p','r1'], ['r2','n']];
  }
  function gaussian(matrix) {
    for (let column = 0; column < matrix.length; column++) {
      let pivot = column;
      for (let row = column + 1; row < matrix.length; row++) {
        if (Math.abs(matrix[row][column]) > Math.abs(matrix[pivot][column])) pivot = row;
      }
      [matrix[pivot], matrix[column]] = [matrix[column], matrix[pivot]];
      const divisor = matrix[column][column];
      matrix[column] = matrix[column].map(value => value / divisor);
      for (let row = 0; row < matrix.length; row++) {
        if (row === column) continue;
        const factor = matrix[row][column];
        matrix[row] = matrix[row].map((value, i) => value - matrix[column][i] * factor);
      }
    }
    return matrix.map(row => row.at(-1));
  }
  function solve({ wires, voltage, resistance, power, probes, bulbId = '12v' }, blockLamp = false) {
    const bulb = BULBS[bulbId] || BULBS['12v'];
    const ids = terminals.map(([id]) => id);
    const parent = Object.fromEntries(ids.map(id => [id, id]));
    const group = id => parent[id] === id ? id : (parent[id] = group(parent[id]));
    const tree = Object.fromEntries(ids.map(id => [id, []]));
    wires.forEach(([a,b], index) => {
      if (group(a) === group(b)) return;
      parent[group(b)] = group(a);
      tree[a].push({ to: b, index, direction: 1 });
      tree[b].push({ to: a, index, direction: -1 });
    });
    const branches = [['r1','r2',resistance]];
    if(!blockLamp) branches.push(['l1','l2',bulb.resistance]);
    const networks = [...new Set(ids.map(group))];
    const edges = Object.fromEntries(networks.map(id => [id, []]));
    for (const [a,b,r] of branches) {
      if (group(a) === group(b)) continue;
      edges[group(a)].push([group(b), 1/r]);
      edges[group(b)].push([group(a), 1/r]);
    }
    const positive = group('p'), negative = group('n');
    const connected = new Map();
    function visit(node, root) {
      if (connected.has(node)) return;
      connected.set(node, root);
      for (const [neighbor] of edges[node]) visit(neighbor, root);
    }
    for (const node of networks) visit(node, node);
    const hasPath = connected.get(positive) === connected.get(negative);
    const shorted = positive === negative;
    if (power && shorted) {
      return { mode: 'corto', i: null, probeV: 0, equivalent: 0, lampPower: 0,
        lampVoltage:0, lampCurrent:0, flows: wires.map(() => 0) };
    }
    const unitVoltage = new Map([[negative,0]]);
    if (!shorted) unitVoltage.set(positive,1);
    const poweredIsland = key => connected.get(key) === connected.get(positive) || connected.get(key) === connected.get(negative);
    const unknown = networks.filter(key => poweredIsland(key) && !unitVoltage.has(key));
    const equations = unknown.map((key, j) => {
      const row = Array(unknown.length + 1).fill(0);
      for (const [neighbor, conductance] of edges[key]) {
        row[j] += conductance;
        if (unitVoltage.has(neighbor)) row[unknown.length] += conductance * unitVoltage.get(neighbor);
        else row[unknown.indexOf(neighbor)] -= conductance;
      }
      return row;
    });
    gaussian(equations).forEach((value, j) => unitVoltage.set(unknown[j], value));
    const unit = terminal => unitVoltage.get(group(terminal)) ?? 0;
    const v = power ? voltage : 0;
    const currentPerVolt = hasPath && !shorted ? edges[positive].reduce((sum, [neighbor, conductance]) =>
      sum + (1 - unitVoltage.get(neighbor)) * conductance, 0) : 0;
    const i = v * currentPerVolt;
    const injections = Object.fromEntries(ids.map(id => [id, 0]));
    injections.p = i;
    injections.n = -i;
    let lampPower = 0, lampVoltage = 0, lampCurrent = 0;
    for (const [a,b,r] of branches) {
      const amps = v * (unit(a) - unit(b)) / r;
      injections[a] -= amps;
      injections[b] += amps;
      if (a === 'l1') {
        lampCurrent = amps;
        lampVoltage = Math.abs(v * (unit(a) - unit(b)));
        lampPower = amps * amps * r;
      }
    }
    lampVoltage = Math.abs(v * (unit('l1') - unit('l2')));
    const minimum=bulb.nominalVoltage*(1-bulb.tolerance);
    const maximum=bulb.nominalVoltage*(1+bulb.tolerance);
    if(!blockLamp && power && Math.abs(lampCurrent)>1e-8 && (lampVoltage<minimum || lampVoltage>maximum)) {
      return solve({ wires, voltage, resistance, power, probes, bulbId }, true);
    }
    const flows = wires.map(() => 0);
    const seen = new Set();
    function trace(node) {
      seen.add(node);
      let total = injections[node];
      for (const { to, index, direction } of tree[node]) {
        if (seen.has(to)) continue;
        const downstream = trace(to);
        flows[index] = -direction * downstream;
        total += downstream;
      }
      return total;
    }
    for (const id of ids) if (!seen.has(id)) trace(id);
    const [red, black] = probes;
    const sameIsland = connected.get(group(red)) === connected.get(group(black));
    const defined = sameIsland || (power && poweredIsland(group(red)) && poweredIsland(group(black)));
    const probeV = defined ? v * (unit(red) - unit(black)) : null;
    return {
      mode: !power ? 'apagado' : blockLamp && !hasPath ? 'protegido' : hasPath ? 'cerrado' : 'abierto',
      i, probeV, equivalent: currentPerVolt > 0 ? 1/currentPerVolt : shorted ? 0 : Infinity,
      lampPower, lampVoltage, lampCurrent, bulbBlocked:blockLamp, flows
    };
  }
  window.OhmCircuit = { solve, terminals, BULBS, preset, bands };
})();
