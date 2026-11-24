(() => {
  const { solve, bands, terminals, preset, BULBS } = window.OhmCircuit;
  const el = id => document.getElementById(id);
  const names = Object.fromEntries(terminals);
  const storageKey = 'banco-ohm-v1';
  const fmt = (value, digits = 0) => Number.isFinite(value)
    ? value.toLocaleString('es-CO',{minimumFractionDigits:digits,maximumFractionDigits:digits}) : '—';
  const time = value => new Date(value).toLocaleTimeString('es-CO',{hour12:false});
  const label = { cerrado:'Circuito cerrado', abierto:'Circuito abierto', protegido:'Bombillo protegido', corto:'Corto · protección activa', apagado:'Fuente apagada' };
  const initialHint = 'Arrastra el fondo para girar. Usa ← y → para desplazarte.';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const state = { voltage:12, resistor:'6', pot:6, resistance:6, bulbId:'12v', bulbState:'disconnected', bulbBrightness:0,
    power:true, light:85, motion:!reduced.matches,
    arrows:true, arrowMotion:!reduced.matches, probes:['p','n'], wires:preset(), milliamps:false, scopeHeld:false };
  const readings = [];
  const exercises = [
    { title:'Duplica la resistencia', question:'A 12 V y 6 Ω circulan 2 A. Si mantienes 12 V y cambias a 12 Ω, ¿cuánta corriente esperas?',
      answer:1, voltage:12, targetVoltage:12, targetResistance:12, targetMode:'cerrado',
      instruction:'Cambia la resistencia de 6 Ω a 12 Ω en Instrumentos. Mantén el voltaje en 12 V.',
      why:'12 V ÷ 12 Ω = 1 A. Al duplicar R con V fijo, la corriente se reduce a la mitad.',
      error:'Deja el voltaje en 12 V y divide por la nueva resistencia, 12 Ω.' },
    { title:'Duplica el voltaje', question:'A 6 V y 6 Ω circula 1 A. Si mantienes la resistencia y subes la fuente a 12 V, ¿cuánta corriente esperas?',
      answer:2, voltage:6, targetVoltage:12, targetResistance:6, targetMode:'cerrado',
      instruction:'Sube la fuente de 6 V a 12 V y mantén la resistencia en 6 Ω.',
      why:'12 V ÷ 6 Ω = 2 A. Al duplicar V con R fija, también se duplica la corriente.',
      error:'La resistencia se mantiene en 6 Ω. Divide el nuevo voltaje por ese valor.' },
    { title:'Abre el circuito', question:'La fuente marca 12 V. Si retiras el cable de retorno, ¿cuánta corriente circula?',
      answer:0, voltage:12, targetVoltage:12, targetResistance:6, targetMode:'abierto',
      instruction:'En Cableado y sondas, retira el cable de Resistencia B a Fuente −. Conserva la fuente encendida.',
      why:'Sin camino de retorno no circula corriente. Las sondas entre los bornes de la fuente aún leen 12 V.',
      error:'Para que circule corriente debe haber un camino de ida y retorno.' }
  ];
  let exerciseIndex = 0, predicted = false, prepared = false, verified = false;
  let sample, view, equipment='', history = [], curveV = [], curveR = [];
  const canvas = el('vista');
  const panButton=document.querySelector('[data-camera="pan-mode"]');
  const fullscreenTarget=el('banco-laboratorio');
  const fullscreenButton=el('pantalla-completa');
  function hint(message = initialHint) { el('accion-3d').textContent = message; }
  function wireHint(message) { el('mensaje-cable').textContent = message; hint(message); }
  function sameWire(wire,a,b) { return wire[0]===a && wire[1]===b || wire[0]===b && wire[1]===a; }
  function isPreset(lamp) {
    const guide=preset(lamp);
    return guide.length===state.wires.length && guide.every(([a,b])=>state.wires.some(wire=>sameWire(wire,a,b)));
  }
  function evaluateBulb() {
    const bulb=BULBS[state.bulbId] || BULBS['12v'];
    const volts=Math.abs(sample.lampVoltage || 0);
    const minimum=bulb.nominalVoltage*(1-bulb.tolerance);
    const maximum=bulb.nominalVoltage*(1+bulb.tolerance);
    let status='disconnected', title='Sin alimentación', message='Conecta el bombillo directamente a la fuente para probarlo.';
    const energized=isPreset(true) || Math.abs(sample.lampCurrent || 0)>1e-8;
    if(energized && state.power && sample.mode!=='corto') {
      if(volts<minimum) {
        status='under';title='Subtensión · bloqueado';
        message='La fuente ofrece '+fmt(volts,1)+' V; el portalámparas espera entre '+fmt(minimum,1)+' y '+fmt(maximum,1)+' V.';
      } else if(volts>maximum) {
        status='over';title='Sobretensión · bloqueado';
        message='La fuente ofrece '+fmt(volts,1)+' V; el portalámparas evita superar '+fmt(maximum,1)+' V.';
      } else {
        status='nominal';title='Voltaje adecuado · encendido';
        message='Recibe '+fmt(volts,1)+' V dentro de su rango seguro.';
      }
    }
    state.bulbState=status;
    state.bulbBrightness=status==='nominal'?Math.min(1,sample.lampPower/bulb.nominalPower):0;
    return { bulb, volts, minimum, maximum, status, title, message };
  }
  function connect(a,b) {
    if (a===b) { wireHint('Elige dos bornes distintos.');return; }
    if (state.wires.some(wire=>sameWire(wire,a,b))) { wireHint('Esos bornes ya están conectados.');return; }
    state.wires.push([a,b]); refresh(true); wireHint(names[a]+' conectado a '+names[b]+'.');
  }
  function moveWire(index,side,destination) {
    const wire=state.wires[index], other=wire[1-side];
    if (destination===wire[side]) return;
    if (other===destination){wireHint('Los extremos necesitan bornes distintos.');return;}
    if (state.wires.some((wire,i)=>i!==index && sameWire(wire,other,destination))) {wireHint('Esos bornes ya están conectados.');return;}
    wire[side]=destination;refresh(true);wireHint('Cable conectado a '+names[destination]+'.');
  }
  function changeProbe(index,id) {
    state.probes[index]=id; refresh(); wireHint('Sonda '+(index===0?'roja':'negra')+' en '+names[id]+'.');
  }
  function adjust(key,value) {
    if (key==='voltage') state.voltage=Math.min(24,Math.max(0,Math.round(value*2)/2));
    else state.pot=Math.min(48,Math.max(1,Math.round(value)));
    refresh();
  }
  function equipmentAction(action) {
    if (action==='power') state.power=!state.power;
    if (action==='swap') state.probes.reverse();
    if (action==='units') state.milliamps=!state.milliamps;
    if (action==='hold') state.scopeHeld=!state.scopeHeld;
    if (action==='resistor') { el('resistor').focus(); return; }
    if (action==='lamp') { loadPreset(!isPreset(true)); return; }
    refresh();
  }
  function inspect(key,action) {
    equipment=key;
    el('enfocar').value=key;
    view?.focus(key);
    if(panButton.getAttribute('aria-pressed')==='true') {
      panButton.setAttribute('aria-pressed','false');
      hint();
    }
    if(action) equipmentAction(action);
    else renderEquipment();
  }
  function renderEquipment() {
    el('detalle-equipo').hidden=!equipment;
    if(!equipment || !sample)return;
    const voltage=state.power && sample.mode!=='corto'?state.voltage:0;
    const scopeV=history.at(-1);
    const equipmentInfo = {
      source:[fmt(voltage,1)+' V',state.power?'Arrastra la perilla para ajustar el voltaje.':'Salida de la fuente apagada.',state.power?'Apagar fuente':'Encender fuente','power'],
      volts:[fmt(sample.probeV,3)+' V',el('lectura-sondas').textContent,'Invertir sondas','swap'],
      amps:[el('amperimetro').textContent,'Corriente total medida en la fuente.',state.milliamps?'Mostrar A':'Mostrar mA','units'],
      scope:[fmt(scopeV,3)+' V',state.scopeHeld?'Traza fija · 8 s guardados':'Traza en vivo · últimas muestras de las sondas.',state.scopeHeld?'Reanudar traza':'Fijar traza','hold'],
      resistor:[fmt(state.resistance)+' Ω',state.resistor==='pot'?'Arrastra el deslizador para variar la resistencia.':bands(state.resistance).map(band=>band.name).join(' / '),'Cambiar resistencia','resistor'],
      lamp:[fmt(sample.lampVoltage,1)+' V',BULBS[state.bulbId].label+' · '+el('estado-bombillo').querySelector('strong').textContent,
        isPreset(true)?'Usar resistencia sola':'Conectar a la fuente','lamp']
    };
    const [reading,info,button,action]=equipmentInfo[equipment];
    el('lectura-equipo').value=reading;el('info-equipo').textContent=info;
    el('accion-equipo').textContent=button;el('accion-equipo').dataset.equipmentAction=action;
  }
  el('enfocar').addEventListener('change',event=>inspect(event.target.value));
  el('accion-equipo').addEventListener('click',event=>equipmentAction(event.currentTarget.dataset.equipmentAction));
  try {
    view = window.OhmScene.create(canvas,{ connect, probe:changeProbe, moveWire, adjust, hint, inspect });
    canvas.dataset.renderer='webgl';
  } catch (error) {
    el('error-3d').hidden=false;
    el('error-3d').textContent='WebGL no está disponible. Usa los mandos y el panel Cableado y sondas para continuar.';
    el('cableado').open=true;
    el('enfocar').disabled=true;
    for (const button of document.querySelectorAll('[data-camera]')) button.disabled=true;
  }
  for (const button of document.querySelectorAll('[data-camera]')) button.addEventListener('click',()=>{
    const action=button.dataset.camera;
    if(action==='reset') { inspect('');return; }
    const panning=view?.cameraAction(action);
    if(action==='pan-mode') {
      button.setAttribute('aria-pressed',String(panning));
      hint(panning?'Modo desplazamiento. Arrastra a los lados y pulsa Desplazar para volver a manipular el circuito.':initialHint);
    }
  });
  function fullscreenElement() { return document.fullscreenElement || document.webkitFullscreenElement; }
  function syncFullscreenButton() {
    const active=fullscreenElement()===fullscreenTarget;
    fullscreenButton.setAttribute('aria-pressed',String(active));
    fullscreenButton.textContent=active?'Salir de pantalla completa':'Pantalla completa';
    fullscreenButton.title=active?'Volver a la vista normal':'Ampliar laboratorio';
  }
  fullscreenButton.addEventListener('click',async()=>{
    try {
      if(fullscreenElement()) await (document.exitFullscreen?.() || document.webkitExitFullscreen?.());
      else await (fullscreenTarget.requestFullscreen?.() || fullscreenTarget.webkitRequestFullscreen?.());
    } catch {
      hint('El navegador no permitió activar la pantalla completa.');
    }
  });
  document.addEventListener('fullscreenchange',syncFullscreenButton);
  document.addEventListener('webkitfullscreenchange',syncFullscreenButton);
  if(!document.fullscreenEnabled && !document.webkitFullscreenEnabled) {
    fullscreenButton.disabled=true;
    fullscreenButton.title='Pantalla completa no disponible en este navegador';
  }
  for (const key of ['desde','hasta','sonda-roja','sonda-negra']) {
    el(key).replaceChildren(...terminals.map(([id,name])=>new Option(name,id)));
  }
  el('hasta').value='r1';
  el('conectar').addEventListener('click',()=>connect(el('desde').value,el('hasta').value));
  el('sonda-roja').addEventListener('change',event=>changeProbe(0,event.target.value));
  el('sonda-negra').addEventListener('change',event=>changeProbe(1,event.target.value));
  function loadPreset(lamp) {
    state.wires=preset(lamp);state.probes=['p','n'];view?.setSelected(null);refresh(true);hint();
    el('mensaje-cable').textContent=lamp?'Bombillo conectado directamente a la fuente.':'Resistencia conectada directamente a la fuente.';
  }
  el('serie').addEventListener('click',()=>loadPreset(false));
  el('con-bombilla').addEventListener('click',()=>loadPreset(true));
  el('alternar-bombilla').addEventListener('click',()=>loadPreset(!isPreset(true)));
  el('fuente').addEventListener('click',()=>{state.power=!state.power;refresh();});
  el('voltaje').addEventListener('input',event=>adjust('voltage',Number(event.target.value)));
  el('resistor').addEventListener('change',event=>{state.resistor=event.target.value;refresh();});
  el('pot').addEventListener('input',event=>adjust('pot',Number(event.target.value)));
  el('bombillo').addEventListener('change',event=>{
    state.bulbId=event.target.value;
    refresh();
    hint((BULBS[state.bulbId] || BULBS['12v']).label+' instalado en el portalámparas.');
  });
  el('luz').addEventListener('input',event=>{state.light=Number(event.target.value);view?.update(state,sample,history);});
  el('flujo').checked=state.motion;
  el('flujo').addEventListener('change',event=>{state.motion=event.target.checked;});
  el('flechas').checked=state.arrows;
  el('flechas').addEventListener('change',event=>{state.arrows=event.target.checked;view?.update(state,sample,history);});
  reduced.addEventListener('change',event=>{
    state.arrowMotion=!event.matches;
    if(event.matches){state.motion=false;el('flujo').checked=false;}
    view?.update(state,sample,history);
  });

  function drawCableList() {
    const list = el('cables');
    const oldFocus = document.activeElement?.dataset.removeCable;
    const items=state.wires.map(([a,b],i)=>{
      const li=document.createElement('li');
      const text=document.createElement('span');text.textContent=names[a]+' ↔ '+names[b];
      const button=document.createElement('button');button.type='button';button.className='secondary';button.textContent='Retirar';
      button.setAttribute('aria-label','Retirar cable entre '+names[a]+' y '+names[b]);button.dataset.removeCable=i;
      button.addEventListener('click',()=>{state.wires.splice(i,1);refresh(true);wireHint('Cable retirado entre '+names[a]+' y '+names[b]+'.');});
      li.append(text,button);return li;
    });
    if (!items.length) {
      const li=document.createElement('li');li.textContent='Sin cables de circuito';li.className='hint';items.push(li);
    }
    list.replaceChildren(...items);
    if (oldFocus!==undefined) (list.querySelector('[data-remove-cable="'+oldFocus+'"]') || list.querySelector('button') || el('conectar')).focus();
  }
  function writeMeter(id,value,unit,digits=3) {
    const formatted=fmt(value,digits);
    const meter=el(id);
    if (meter.dataset.formatted===formatted+unit) return;
    meter.dataset.formatted=formatted+unit;
    const small=document.createElement('small');small.textContent=unit;
    meter.replaceChildren(document.createTextNode(formatted+' '),small);
  }
  function refresh(rebuildCables=false) {
    state.resistance=state.resistor==='pot'?state.pot:Number(state.resistor);
    sample=solve(state);
    const bulbResult=evaluateBulb();
    el('voltaje').value=state.voltage;el('valor-v').value=fmt(state.voltage,1)+' V';
    el('resistor').value=state.resistor;
    el('pot').value=state.pot;el('valor-pot').value=fmt(state.pot)+' Ω';
    el('pot-control').hidden=state.resistor!=='pot';
    el('bombillo').value=state.bulbId;
    el('valor-bombillo').value=fmt(bulbResult.bulb.nominalVoltage)+' V · '+fmt(bulbResult.bulb.nominalPower)+' W';
    const bulbStatus=el('estado-bombillo');
    bulbStatus.dataset.state=bulbResult.status;
    bulbStatus.querySelector('strong').textContent=bulbResult.title;
    bulbStatus.querySelector('span').textContent=bulbResult.message;
    el('fuente').setAttribute('aria-pressed',String(state.power));
    el('fuente').dataset.state=state.power?'on':'off';
    el('fuente').textContent=state.power?'Apagar circuito':'Encender circuito';
    el('sonda-roja').value=state.probes[0];el('sonda-negra').value=state.probes[1];
    const strip=document.createElement('span');strip.className='resistor-body';strip.ariaHidden='true';
    const labels=bands(state.resistance);
    labels.forEach(band=>{const item=document.createElement('i');item.style.background=band.color;strip.append(item);});
    el('bandas').replaceChildren(...(state.resistor==='pot'?['Pista deslizante · 1–48 Ω']:[strip,labels.map(band=>band.name).join(' / ')]));
    el('estado').dataset.mode=sample.mode;
    if (el('estado').lastElementChild.textContent!==label[sample.mode]) el('estado').lastElementChild.textContent=label[sample.mode];
    writeMeter('voltimetro',sample.probeV,'V');
    const current=sample.i===null?null:sample.i*(state.milliamps?1000:1);
    writeMeter('amperimetro',current,state.milliamps?'mA':'A',state.milliamps?1:3);
    el('lectura-sondas').textContent=sample.probeV===null?'Sondas en nodos sin referencia común':'Entre '+names[state.probes[0]]+' y '+names[state.probes[1]];
    const outputV=state.power && sample.mode!=='corto'?state.voltage:0;
    el('ecuacion').value=sample.mode==='corto'?'Salida desactivada por protección':sample.mode==='protegido'?'I = 0 A · bombillo fuera del rango seguro':sample.mode==='abierto'?'I = 0 A · R eq → ∞'
      :sample.mode==='apagado'?'Salida de la fuente apagada':fmt(outputV,1)+' V = '+fmt(sample.i,3)+' A × '+fmt(sample.equivalent,2)+' Ω';
    const sizes = [['formula-v',outputV,24], ['formula-i',sample.i,24], ['formula-r',sample.equivalent,48]];
    for (const [id,n,limit] of sizes) el(id).style.fontSize=(22+25*(Number.isFinite(n)?Math.max(0,Math.min(n/limit,1)):1))+'px';
    el('lampara').textContent=bulbResult.bulb.label+' · '+fmt(bulbResult.volts,1)+' V · '+
      (bulbResult.status==='nominal'?fmt(sample.lampPower,2)+' W':bulbResult.title);
    el('alternar-bombilla').textContent=isPreset(true)?'Usar resistencia':'Conectar bombillo';
    let route;
    if(sample.mode==='apagado') route='Fuente apagada. No existe desplazamiento neto de electrones.';
    else if(sample.mode==='protegido') route='Portalámparas protegido. El voltaje no coincide con el bombillo instalado y no circulan electrones por él.';
    else if(sample.mode==='abierto') route='Circuito abierto. Los electrones no tienen un recorrido completo de regreso a la fuente.';
    else if(sample.mode==='corto') route='Protección activa. La fuente detuvo el flujo por el cortocircuito.';
    else if(isPreset(true)) route='Electrones: Fuente − → bombillo '+fmt(bulbResult.bulb.nominalVoltage)+' V, donde transfieren energía en forma de luz y calor → Fuente +. Dentro de la fuente se restablece la separación de cargas y el ciclo continúa.';
    else if(isPreset(false)) route='Electrones: Fuente − → resistencia → Fuente +. La fuente mantiene la diferencia de potencial que sostiene el ciclo.';
    else route='Las flechas muestran el movimiento de electrones, del menor potencial hacia el mayor potencial, por cada rama con corriente.';
    el('ruta-electrones').textContent=route;
    canvas.setAttribute('aria-label','Simulación 3D del circuito. '+route);
    if(rebuildCables) drawCableList();
    if (!history.length) history=Array(80).fill(sample.probeV);
    el('cond-s').textContent=state.scopeHeld?'Traza fija · 8 s capturados':'Últimos 8 s · acoplamiento CC';
    renderEquipment();
    view?.update(state,sample,history);
    updateGraphs(outputV);
  }

  const chartCanvases=['graf-v','graf-r','graf-s'].map(el);
  function chart(canvas, options) {
    const cssWidth=canvas.clientWidth,cssHeight=canvas.clientHeight;
    if(!cssWidth || !cssHeight)return;
    const ratio=Math.min(devicePixelRatio || 1,2);
    const w=cssWidth,h=cssHeight;
    if (canvas.width!==Math.round(w*ratio) || canvas.height!==Math.round(h*ratio)) {
      canvas.width=Math.round(w*ratio);canvas.height=Math.round(h*ratio);
    }
    const ctx=canvas.getContext('2d');
    ctx.setTransform(ratio,0,0,ratio,0,0);ctx.clearRect(0,0,w,h);
    const { points,xMin,xMax,yMin,yMax,xTitle,yTitle,marker,color }=options;
    const left=52,top=22,width=w-left-13,height=h-61;
    const X=x=>left+(x-xMin)/(xMax-xMin)*width;
    const Y=y=>top+height-(y-yMin)/(yMax-yMin)*height;
    ctx.font='12px Segoe UI, system-ui';ctx.lineWidth=1;ctx.fillStyle='#aebed1';ctx.strokeStyle='#304152';
    ctx.fillText(yTitle,2,13);
    for (let i=0;i<=4;i++){
      const y=yMin+(yMax-yMin)*i/4;
      ctx.beginPath();ctx.moveTo(left,Y(y));ctx.lineTo(left+width,Y(y));ctx.stroke();
      ctx.textAlign='right';ctx.textBaseline='middle';ctx.fillText(fmt(y,yMax-yMin<4?2:(yMax-yMin<12?1:0)),left-6,Y(y));
      const x=xMin+(xMax-xMin)*i/4;
      ctx.beginPath();ctx.moveTo(X(x),top);ctx.lineTo(X(x),top+height);ctx.stroke();
      ctx.textAlign='center';ctx.textBaseline='top';ctx.fillText(fmt(x,Number.isInteger(x)?0:1),X(x),top+height+5);
    }
    ctx.textAlign='center';ctx.fillText(xTitle,left+width/2,h-14);
    ctx.beginPath();ctx.rect(left-5,top-5,width+10,height+10);ctx.save();ctx.clip();
    ctx.strokeStyle=color;ctx.lineWidth=2.1;ctx.beginPath();
    let drawing=false;
    for(const [x,y] of points) {
      if(!Number.isFinite(y)){drawing=false;continue;}
      if(drawing)ctx.lineTo(X(x),Y(y));else ctx.moveTo(X(x),Y(y));
      drawing=true;
    }
    ctx.stroke();
    if (marker && Number.isFinite(marker[1])) {
      ctx.fillStyle=color;ctx.beginPath();ctx.arc(X(marker[0]),Y(marker[1]),4.6,0,Math.PI*2);ctx.fill();
    }
    ctx.restore();
    if(!points.some(([,y])=>Number.isFinite(y))){ctx.fillStyle='#aebed1';ctx.textAlign='center';ctx.fillText('Sin lectura disponible',left+width/2,top+height/2);}
  }
  function yCeiling(points) {
    const max=Math.max(0,...points.map(([,y])=>y || 0));
    return max<=1?1:max<=2?2:max<=4?4:max<=8?8:max<=16?16:Math.ceil(max/8)*8;
  }
  function updateGraphs(outputV) {
    const analysis={...state,power:true};
    curveV=Array.from({length:49},(_,i)=>[i*.5,solve({...analysis,voltage:i*.5}).i]);
    curveR=Array.from({length:48},(_,i)=>[i+1,solve({...analysis,voltage:outputV,resistance:i+1}).i]);
    const bulb=BULBS[state.bulbId] || BULBS['12v'];
    el('cond-v').textContent=isPreset(true)
      ? bulb.label+' · R nominal = '+fmt(bulb.resistance)+' Ω'
      : 'R del módulo = '+fmt(state.resistance)+' Ω · cableado actual';
    el('cond-r').textContent=isPreset(true)
      ? 'Módulo resistivo desconectado · I no cambia al variar R'
      : 'V de la fuente = '+fmt(outputV,1)+' V · cableado actual';
    renderGraphs();
  }
  function renderGraphs() {
    chart(el('graf-v'),{points:curveV,xMin:0,xMax:24,yMin:0,yMax:yCeiling(curveV),xTitle:'Voltaje de fuente (V)',yTitle:'I (A)',marker:state.power?[state.voltage,sample.i]:null,color:'#67e5f5'});
    chart(el('graf-r'),{points:curveR,xMin:1,xMax:48,yMin:0,yMax:yCeiling(curveR),xTitle:'Resistencia del módulo (Ω)',yTitle:'I (A)',marker:[state.resistance,sample.i],color:'#ffbf75'});
    drawScope();
  }
  function drawScope() {
    const points=history.map((value,i)=>[-8+8*i/Math.max(1,history.length-1),value]);
    chart(el('graf-s'),{points,xMin:-8,xMax:0,yMin:-24,yMax:24,xTitle:'Tiempo relativo (s)',yTitle:'V (V)',color:'#91eaba'});
  }
  const observer=new ResizeObserver(()=>{if(sample)renderGraphs();});
  chartCanvases.forEach(canvas=>observer.observe(canvas));
  setInterval(()=>{
    if(document.hidden || !sample || state.scopeHeld)return;
    history.push(sample.probeV);if(history.length>80)history.shift();
    drawScope();view?.updateScope(history);
    if(equipment==='scope') el('lectura-equipo').value=fmt(sample.probeV,3)+' V';
  },100);

  function renderExercise() {
    const exercise=exercises[exerciseIndex];
    el('avance').textContent='RETO '+(exerciseIndex+1)+' DE '+exercises.length;
    el('reto-titulo').textContent=exercise.title;
    el('reto-pregunta').textContent=exercise.question;
    el('feedback').textContent='';delete el('feedback').dataset.correct;
    el('respuesta').value='';
    el('paso-practico').textContent='Primero haz tu predicción. Luego reproduce el experimento en el banco 3D.';
    el('preparar').disabled=true;
    el('verificar').hidden=true;
    el('siguiente').textContent=exerciseIndex===exercises.length-1?'Finalizar recorrido':'Siguiente reto';
    el('siguiente').disabled=true;
    predicted=false;prepared=false;verified=false;
  }
  function feedback(text,success) {el('feedback').textContent=text;el('feedback').dataset.correct=String(success);}
  el('responder').addEventListener('submit',event=>{
    event.preventDefault();
    const entered=el('respuesta').value.trim().replace(',','.');
    const exercise=exercises[exerciseIndex];
    if(!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(entered)){feedback('Escribe un número en amperios, por ejemplo 1,5.',false);return;}
    const correct=Math.abs(Number(entered)-exercise.answer)<.005;
    if(correct){predicted=true;el('preparar').disabled=false;}
    feedback(correct?exercise.why:exercise.error,correct);
  });
  el('preparar').addEventListener('click',()=>{
    if(!predicted)return;
    const exercise=exercises[exerciseIndex];
    state.voltage=exercise.voltage;state.resistor='6';state.power=true;
    loadPreset(false);el('cableado').open=exercise.targetMode==='abierto';
    prepared=true;verified=false;
    el('siguiente').disabled=true;el('verificar').hidden=false;el('verificar').disabled=false;
    el('paso-practico').textContent=exercise.instruction;
    feedback(exercise.instruction,true);
    el('inicio').scrollIntoView();
  });
  el('verificar').addEventListener('click',()=>{
    if(!prepared)return;
    const exercise=exercises[exerciseIndex];
    const rightCircuit=exercise.targetMode==='abierto'
      ? state.wires.length===1 && sameWire(state.wires[0],'p','r1')
      : isPreset(false);
    if(rightCircuit && sample.mode===exercise.targetMode && state.voltage===exercise.targetVoltage &&
       state.resistance===exercise.targetResistance && Math.abs(sample.i-exercise.answer)<.005) {
      verified=true;el('siguiente').disabled=false;el('verificar').disabled=true;
      feedback('Experimento verificado. '+exercise.why,true);
    } else feedback('Revisa las conexiones y los ajustes. '+exercise.instruction,false);
  });
  el('siguiente').addEventListener('click',()=>{
    if(!verified)return;
    if(exerciseIndex<exercises.length-1){exerciseIndex++;renderExercise();el('respuesta').focus();return;}
    el('avance').textContent='RECORRIDO COMPLETADO';
    el('reto-titulo').textContent='Tres experimentos verificados';
    el('reto-pregunta').textContent='Puedes registrar las lecturas de tus propios experimentos en la bitácora.';
    for(const id of ['responder','preparar','verificar','siguiente'])el(id).hidden=true;
    el('feedback').textContent='';
    el('paso-practico').textContent='A voltaje fijo, I disminuye cuando R aumenta. Con R fija, I aumenta en la misma proporción que V.';
  });

  function saveNotebook() {
    try {localStorage.setItem(storageKey,JSON.stringify({readings,student:el('estudiante').value}));}
    catch {el('mensaje-pdf').textContent='La bitácora está disponible en esta sesión. Descarga el PDF para conservarla.';}
  }
  try{
    const saved=JSON.parse(localStorage.getItem(storageKey) || 'null');
    if(saved && Array.isArray(saved.readings)){
      readings.push(...saved.readings.filter(row=>typeof row?.date==='string' && typeof row?.wires==='string').slice(0,300));
      el('estudiante').value=typeof saved.student==='string'?saved.student:'';
    }
  }catch{}
  el('estudiante').addEventListener('change',saveNotebook);
  function rowValues(row) {
    const bulbSummary=row.bulbLabel?' · '+row.bulbLabel+' · '+(row.bulbStateLabel || 'sin estado'):'';
    return [
      time(row.date),fmt(row.voltage,1)+' V',fmt(row.resistance)+' Ω',
      fmt(row.current,3)+(row.current===null?'':' A'),fmt(row.probe,3)+(row.probe===null?'':' V'),
      label[row.mode]+bulbSummary+(row.note?' · '+row.note:'')
    ];
  }
  function renderNotebook() {
    el('conteo').textContent=readings.length+(readings.length===1?' medición':' mediciones');
    el('exportar').disabled=!readings.length;
    el('exportar-bitacora').disabled=!readings.length;
    const tbody=el('mediciones');
    tbody.replaceChildren();
    if(!readings.length){const cell=tbody.insertRow().insertCell();cell.colSpan=7;cell.textContent='Registra una lectura para comenzar tu informe.';return;}
    readings.forEach((row,i)=>{
      const tr=tbody.insertRow();
      rowValues(row).forEach(text=>{tr.insertCell().textContent=text;});
      const button=document.createElement('button');button.className='secondary';button.type='button';button.textContent='Quitar';
      button.setAttribute('aria-label','Quitar medición '+(i+1));
      button.addEventListener('click',()=>{readings.splice(i,1);saveNotebook();renderNotebook();el('registrar').focus();});
      tr.insertCell().append(button);
    });
  }
  el('registrar').addEventListener('click',()=>{
    if(readings.length>=300){el('mensaje-pdf').textContent='La bitácora admite 300 mediciones. Descarga el PDF y quita alguna para continuar.';return;}
    const bulb=BULBS[state.bulbId] || BULBS['12v'];
    const bulbStateLabel=el('estado-bombillo').querySelector('strong').textContent;
    readings.push({
      date:new Date().toISOString(), voltage:state.power && sample.mode!=='corto'?state.voltage:0,
      setVoltage:state.voltage,resistance:state.resistance,current:sample.i,probe:sample.probeV,lampPower:sample.lampPower,
      lampVoltage:sample.lampVoltage,bulbId:bulb.id,bulbLabel:bulb.label,bulbState:state.bulbState,bulbStateLabel,
      mode:sample.mode, note:el('observacion').value.trim(), wires:state.wires.map(([a,b])=>names[a]+' / '+names[b]).join('; '),
      probes:state.probes.map(id=>names[id]).join(' / ')
    });
    el('observacion').value='';
    el('mensaje-pdf').textContent='Lectura registrada.';
    saveNotebook();renderNotebook();
  });
  function pdfText(text) {
    return String(text).replaceAll('Ω','ohm').replaceAll('−','-').replaceAll('∞','infinito');
  }
  function exportReport() {
    if(!readings.length)return;
    const PDF=window.jspdf?.jsPDF;
    if(!PDF){el('mensaje-pdf').textContent='La biblioteca de PDF no está disponible.';return;}
    const doc=new PDF({compress:true});
    doc.setProperties({title:'Informe de laboratorio - Ley de Ohm',subject:'Bitácora experimental de corriente continua'});
    const date=new Date().toLocaleDateString('es-CO');
    function head(continuation) {
      doc.setFillColor(17,30,48);doc.rect(0,0,210,36,'F');
      doc.setTextColor(224,245,251);doc.setFont('helvetica','bold');doc.setFontSize(19);doc.text('Informe de laboratorio',15,17);
      doc.setFontSize(10);doc.text('LEY DE OHM  /  CORRIENTE CONTINUA',15,26);
      doc.setTextColor(27,43,62);doc.setFontSize(10);doc.setFont('helvetica','normal');
      if(continuation)return 48;
      doc.text('Estudiante: '+(el('estudiante').value.trim() || 'Sin especificar'),15,45);
      doc.text('Fecha de exportación: '+date+'  |  '+readings.length+' mediciones',15,51);
      doc.text('Bombillos intercambiables de 5 V y 12 V, con tolerancia de encendido de +/-10 %.',15,57);
      return 68;
    }
    let y=head(false);
    readings.forEach((row,i)=>{
      const formattedDate=new Date(row.date).toLocaleDateString('es-CO');
      const bulbDetail=row.bulbLabel
        ? doc.splitTextToSize(pdfText(row.bulbLabel+' | V bombillo: '+fmt(row.lampVoltage,1)+' V | '+row.bulbStateLabel+' | P: '+fmt(row.lampPower,2)+' W'),174)
        : doc.splitTextToSize(pdfText('Bombillo: medición del modelo anterior | P: '+fmt(row.lampPower,2)+' W'),174);
      const detail=doc.splitTextToSize(pdfText('Cables: '+(row.wires || 'ninguno')+'. Sondas roja / negra: '+row.probes+'.'),174);
      const note=row.note?doc.splitTextToSize(pdfText('Observación: '+row.note),174):[];
      const block=26+(bulbDetail.length+detail.length+note.length)*5;
      if(y+block>279){doc.addPage();y=head(true);}
      doc.setFillColor(235,243,248);doc.roundedRect(15,y,180,8,2,2,'F');
      doc.setTextColor(20,43,64);doc.setFont('helvetica','bold');doc.setFontSize(10);
      doc.text('Medición '+(i+1)+'   |   '+formattedDate+'  '+time(row.date)+'   |   '+pdfText(label[row.mode]),18,y+5.5);
      doc.setFont('helvetica','normal');
      doc.text(pdfText('Ajuste: '+fmt(row.setVoltage,1)+' V   Salida: '+fmt(row.voltage,1)+' V   R: '+fmt(row.resistance)+' ohm   I: '+fmt(row.current,3)+' A'),18,y+15);
      doc.text(pdfText('V sondas: '+fmt(row.probe,3)+' V'),18,y+20);
      doc.text([...bulbDetail,...detail,...note],18,y+25,{lineHeightFactor:1.4});
      y+=block+3;
    });
    const total=doc.getNumberOfPages();
    for(let page=1;page<=total;page++){
      doc.setPage(page);doc.setFontSize(9);doc.setTextColor(85,105,124);doc.text(page+' / '+total,195,287,{align:'right'});
    }
    doc.save('informe-ley-de-ohm.pdf');
    el('mensaje-pdf').textContent='Informe PDF generado con '+readings.length+(readings.length===1?' medición.':' mediciones.');
  }
  el('exportar').addEventListener('click',exportReport);
  el('exportar-bitacora').addEventListener('click',exportReport);
  renderExercise();renderNotebook();refresh(true);
})();
