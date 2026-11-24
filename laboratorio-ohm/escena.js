(() => {
  const positions = {
    p: [-4.56,.41,.16], n: [-3.74,.41,.16], r1: [-2.74,.47,1.26],
    r2: [-.77,.47,1.26], l1: [1.03,.47,1.47], l2: [3.64,.47,1.47]
  };
  const wireColors = [0xec694a, 0x3fc7e8, 0xffbb5f, 0xc08cf7, 0x6cd4a6, 0xff7e9c];
  const endName = id => window.OhmCircuit.terminals.find(([key]) => key === id)[1];

  function create(canvas, actions) {
    const T = window.THREE;
    const scene = new T.Scene();
    const renderer = new T.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
    renderer.setClearColor(0, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = T.PCFSoftShadowMap;
    renderer.shadowMap.autoUpdate = false;
    renderer.shadowMap.needsUpdate = true;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    const camera = new T.PerspectiveCamera(36, 1, .1, 100);
    const target = new T.Vector3(0,.18,.15);
    const starting = { azimuth: .16, elevation: .65, zoom: 1, x:0, y:.57, z:.14 };
    let view = { ...starting };
    let panMode=false;
    const hemi = new T.HemisphereLight(0xcbdfff, 0x524039, 1.5);
    const key = new T.DirectionalLight(0xffe4c4, 2.8);
    key.position.set(-3,9,5);
    key.castShadow = true;
    key.shadow.mapSize.set(2048,2048);
    Object.assign(key.shadow.camera, { left:-8, right:8, top:7, bottom:-7, near:.5, far:23 });
    key.shadow.normalBias = .026;
    key.shadow.bias = -.00014;
    const rim = new T.DirectionalLight(0x83c6ff, 1.7);
    rim.position.set(5,4,-6);
    scene.add(hemi,key,rim);

    const mat = (color, roughness = .5, metalness = .05, extra = {}) =>
      new T.MeshStandardMaterial({ color, roughness, metalness, ...extra });
    const shell = mat(0x2e3b4c,.31,.35);
    const face = mat(0x17212b,.66);
    const bevel = mat(0x657686,.36,.42);
    const rubber = mat(0x141a1c,.95);
    const solder = mat(0xc4d5dc,.26,.64);
    const gold = mat(0xd4994a,.28,.57);
    const board = mat(0x153931,.76);
    const tag = mat(0x273c45,.52);
    const orange = mat(0xd05b3e,.5);
    const blue = mat(0x217a98,.5);
    const plastic = mat(0xdec294,.86);
    const lightMetal = mat(0xa6aeb3,.3,.55);
    const ridges = mat(0x4b5966,.54);
    function mesh(geometry, material, x, y, z, parent = scene, cast = true) {
      const object = new T.Mesh(geometry, material);
      object.position.set(x,y,z);
      object.castShadow = cast;
      object.receiveShadow = true;
      parent.add(object);
      return object;
    }
    function box(w,h,d,material,x,y,z,parent,cast) {
      return mesh(new T.BoxGeometry(w,h,d),material,x,y,z,parent,cast);
    }
    function cyl(top,bottom,h,material,x,y,z,parent,segments = 32) {
      return mesh(new T.CylinderGeometry(top,bottom,h,segments),material,x,y,z,parent);
    }
    function rod(a,b,r,material,parent) {
      const av = new T.Vector3(...a), bv = new T.Vector3(...b);
      const delta = bv.clone().sub(av);
      const middle = av.clone().addScaledVector(delta,.5);
      const object = cyl(r,r,delta.length(),material,...middle.toArray(),parent,12);
      object.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),delta.normalize());
      return object;
    }
    function proceduralTexture(kind) {
      const c = document.createElement('canvas');
      c.width = 1024; c.height = 512;
      const ctx = c.getContext('2d');
      let n = 1582;
      const random = () => ((n = (1664525*n+1013904223) >>> 0) / 4294967296);
      ctx.fillStyle = kind === 'wood' ? '#8f624b' : '#233647';
      ctx.fillRect(0,0,c.width,c.height);
      for (let i=0;i<2300;i++) {
        const x = random()*1024, y = random()*512;
        ctx.fillStyle = random() > .52 ? '#ffffff' : '#17140e';
        ctx.globalAlpha = random() * (kind === 'wood' ? .22 : .12);
        ctx.fillRect(x,y,kind === 'wood' ? 20+random()*370 : 1+random()*4,.4+random()*1.9);
      }
      ctx.globalAlpha = 1;
      if (kind === 'mat') {
        ctx.strokeStyle = '#5b809044';
        for (let i=0;i<1024;i+=32) { ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,512); ctx.stroke(); }
        for (let i=0;i<512;i+=32) { ctx.beginPath(); ctx.moveTo(0,i); ctx.lineTo(1024,i); ctx.stroke(); }
        ctx.fillStyle = '#83a6b7'; ctx.font = '14px monospace';
        for (let i=0;i<960;i+=64) ctx.fillText(String(i/8),i+18,489);
      }
      const texture = new T.CanvasTexture(c);
      texture.colorSpace = T.SRGBColorSpace;
      texture.anisotropy = Math.min(8,renderer.capabilities.getMaxAnisotropy());
      return texture;
    }
    const wood = mat(0xffffff,.66,.02,{ map:proceduralTexture('wood') });
    const workMat = mat(0xffffff,.86,0,{ map:proceduralTexture('mat') });
    box(12,.35,7.15,wood,0,-.2,0);
    box(11.91,.19,7.05,mat(0x67402a,.63),0,-.34,0);
    for (const x of [-5.42,5.42]) for (const z of [-2.8,2.8]) {
      box(.45,1,.47,shell,x,-.95,z);
      box(.51,.11,.53,rubber,x,-1.44,z);
    }
    const floor = mesh(new T.PlaneGeometry(28,24),new T.ShadowMaterial({opacity:.3}),0,-1.505,0,scene,false);
    floor.rotation.x=-Math.PI/2;
    box(10.9,.03,5.85,workMat,0,-.005,.15);

    function texture(w,h,paint) {
      const canvas = document.createElement('canvas'); canvas.width=w; canvas.height=h;
      const ctx = canvas.getContext('2d');
      const map = new T.CanvasTexture(canvas); map.colorSpace=T.SRGBColorSpace;
      const update = (...args) => { ctx.clearRect(0,0,w,h); paint(ctx,w,h,...args); map.needsUpdate=true; };
      update();
      return { map, update };
    }
    function print(text,w,h,x,y,z,parent=scene,flat=false,color='#dfebf3') {
      const display = texture(728,125,(ctx,ww,hh) => {
        ctx.font='600 81px system-ui'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillStyle=color;
        ctx.fillText(text,ww/2,hh/2,ww-15);
      });
      const object = mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map:display.map,transparent:true,depthWrite:false}),x,y,z,parent,false);
      if (flat) object.rotation.x=-Math.PI/2;
    }
    function screw(x,y,z,parent=scene) {
      cyl(.057,.057,.028,solder,x,y,z,parent,12);
      box(.082,.004,.014,rubber,x,y+.016,z,parent,false);
    }
    const interactives = [];
    function register(object, equipment, control) {
      object.userData.equipment=equipment;
      object.userData.control=control;
      interactives.push(object);
      return object;
    }
    function device(x,z,width,height,depth,title,equipment) {
      const group=new T.Group(); group.position.set(x,.62,z); scene.add(group);
      register(box(width,height,depth,shell,0,height/2+.12,0,group),equipment);
      box(width-.07,height-.07,.1,bevel,0,height/2+.12,depth/2,group);
      box(width-.15,height-.15,.04,face,0,height/2+.12,depth/2+.052,group);
      box(width-.07,.038,depth-.06,ridges,0,height+.125,0,group);
      print(title,width-.28,.19,0,height-.02,depth/2+.08,group);
      for (const legX of [-width*.33,width*.33]) for (const legZ of [-depth*.32,depth*.32]) {
        cyl(.14,.16,.12,rubber,legX,.061,legZ,group,14);
      }
      for (let i=0;i<11;i++) box(.052,.01,.38,rubber,(i-5)*.092,height+.149,-depth*.18,group,false);
      return group;
    }
    const screens = {};
    function screen(parent,key,w,h,x,y,z,color) {
      const scope = key === 'scope';
      const display = texture(768,scope?390:330,(ctx,ww,hh,data={}) => {
        const gradient = ctx.createLinearGradient(0,0,ww,hh);
        gradient.addColorStop(0,'#152d35'); gradient.addColorStop(1,'#07141d');
        ctx.fillStyle=gradient; ctx.fillRect(0,0,ww,hh);
        if (scope) {
          ctx.strokeStyle='#41616b'; ctx.lineWidth=2;
          for (let col=1;col<10;col++) {ctx.beginPath();ctx.moveTo(ww*col/10,0);ctx.lineTo(ww*col/10,hh);ctx.stroke();}
          for (let row=1;row<8;row++) {ctx.beginPath();ctx.moveTo(0,hh*row/8);ctx.lineTo(ww,hh*row/8);ctx.stroke();}
          ctx.strokeStyle=color;ctx.lineWidth=8;ctx.beginPath();
          let pen=false;
          for (let i=0;i<(data.history || []).length;i++) {
            const value=data.history[i];
            if (value === null) { pen=false; continue; }
            const x=ww*i/Math.max(data.history.length-1,1), y=hh*(.5-value/58);
            if (pen) ctx.lineTo(x,y); else ctx.moveTo(x,y);
            pen=true;
          }
          ctx.stroke();
          ctx.font='600 35px system-ui';ctx.fillStyle=color;
          ctx.fillText(data.held?'TRAZA FIJA':'CC · 8 s',22,43);
        } else {
          ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=color;
          ctx.font='600 124px Consolas, monospace';ctx.fillText(data.value || '—',ww/2,hh*.48,ww-38);
          ctx.font='600 48px Consolas, monospace';ctx.fillText(data.label || '',ww/2,hh*.79,ww-32);
        }
      });
      box(w+.1,h+.105,.07,rubber,x,y,z-.02,parent);
      register(mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({ map:display.map, toneMapped:false }),x,y,z+.02,parent,false),key);
      screens[key]=display;
    }
    box(10.96,.19,1.98,bevel,0,.53,-2.03);
    for (const x of [-4.84,4.84]) box(.34,.42,1.72,shell,x,.24,-2.03);
    box(1.81,.17,.76,tag,-4.15,.137,.12);
    box(1.43,.15,.58,tag,-1.46,.11,-.43);
    const probeOrigins=[[-1.83,.32,-.33],[-1.09,.32,-.33]];
    for(const [i,[x,y,z]] of probeOrigins.entries()) cyl(.105,.116,.16,i===0?orange:rubber,x,y-.065,z);
    print('SALIDA CC',1.28,.18,-4.15,.231,.37,scene,true);
    print('SONDAS',1.14,.16,-1.46,.191,-.23,scene,true);
    function instrumentButton(parent,equipment,control,text,x,y,z,width=.72) {
      register(box(width,.18,.08,blue,x,y,z,parent),equipment,control);
      print(text,width-.07,.115,x,y,z+.043,parent);
    }
    const supply = device(-4,-2.05,2.43,1.46,1.87,'FUENTE CC','source');
    screen(supply,'source',1.39,.54,-.34,.9,1.017,'#85f3c0');
    const knob = new T.Group(); knob.position.set(.72,.87,1.075); supply.add(knob);
    const dial = cyl(.255,.29,.22,ridges,0,0,0,knob);dial.rotation.x=Math.PI/2;
    const pointer = box(.043,.148,.014,solder,0,.133,.118,knob,false);
    for(let i=0;i<16;i++){
      const a=i*Math.PI/8;
      cyl(.023,.023,.195,rubber,.267*Math.sin(a),.267*Math.cos(a),0,knob,6).rotation.x=Math.PI/2;
    }
    instrumentButton(supply,'source','power','CC',.72,.39,1.033);
    const dmmA = device(-1.46,-1.97,2.14,1.26,1.45,'VOLTÍMETRO','volts');
    const dmmB = device(.86,-1.97,2.14,1.26,1.45,'AMPERÍMETRO','amps');
    screen(dmmA,'volts',1.75,.55,0,.77,.811,'#76eaff');
    screen(dmmB,'amps',1.75,.55,0,.77,.811,'#ffd29b');
    instrumentButton(dmmA,'volts','swap','ROJA ↔ NEGRA',0,.35,.827,1.28);
    instrumentButton(dmmB,'amps','units','A / mA',0,.35,.827,1.06);
    const scope = device(3.76,-1.98,3.21,1.52,1.63,'OSCILOSCOPIO · CC','scope');
    screen(scope,'scope',2.21,.89,-.33,.83,.908,'#76eaff');
    instrumentButton(scope,'scope','hold','TRAZA',1.11,.73,.937,.68);

    for (const x of [-1.75,2.33]) {
      const w=x<0?3.29:3.54;
      box(w,.10,1.57,tag,x,.096,1.55);
      register(box(w-.08,.048,1.49,board,x,.166,1.55),x<0?'resistor':'lamp');
      for (const dx of [-w/2+.2,w/2-.2]) for (const z of [.91,2.2]) screw(x+dx,.204,z);
      print(x<0?'MÓDULO RESISTIVO':'PORTALÁMPARAS INTERCAMBIABLE',w-.45,.23,x,.195,2.08,scene,true,'#cae5dd');
    }
    const resistor = new T.Group();scene.add(resistor);
    rod([-2.74,.32,1.26],[-.77,.32,1.26],.046,solder,resistor);
    const body = register(cyl(.223,.223,1.24,plastic,-1.755,.34,1.26,resistor),'resistor');body.rotation.z=Math.PI/2;
    const bands = [];
    for (const x of [-2.15,-1.94,-1.73,-1.34]) {
      const ring=cyl(.227,.227,.093,mat(0xffffff,.72),x,.34,1.26,resistor);ring.rotation.z=Math.PI/2;bands.push(ring);
    }
    const pot = new T.Group();scene.add(pot);
    box(1.42,.19,.54,bevel,-1.755,.29,1.26,pot);
    box(1.16,.023,.064,rubber,-1.755,.396,1.26,pot);
    const potSlide=box(.21,.15,.37,blue,-1.78,.46,1.26,pot);
    cyl(.29,.37,.22,rubber,2.31,.29,1.47);
    cyl(.225,.28,.255,lightMetal,2.31,.51,1.47);
    for(let y=.435;y<.61;y+=.039) mesh(new T.TorusGeometry(.245,.017,8,28),solder,2.31,y,1.47).rotation.x=Math.PI/2;
    const glass=mat(0xffcc9a,.21,.05,{transparent:true,opacity:.25,depthWrite:false,side:T.FrontSide});
    const envelope=mesh(new T.SphereGeometry(.43,32,24),glass,2.31,.91,1.47,scene,false);
    register(envelope,'lamp');
    envelope.scale.y=1.19;
    const filamentMat=mat(0xb36c42,.52,.18,{ emissive:0xff8e3e, emissiveIntensity:0 });
    rod([2.17,.57,1.47],[2.17,.9,1.47],.021,solder);
    rod([2.45,.57,1.47],[2.45,.9,1.47],.021,solder);
    const filament = [];
    for(let i=0;i<=42;i++) {
      const a=i/42*Math.PI*10;
      filament.push(new T.Vector3(2.17+.28*i/42,.91+.039*Math.sin(a),1.47+.037*Math.cos(a)));
    }
    mesh(new T.TubeGeometry(new T.CatmullRomCurve3(filament),48,.017,8),filamentMat,0,0,0,scene,false);
    const glow=new T.PointLight(0xffa44c,0,3.4,2);glow.position.set(2.31,.94,1.47);scene.add(glow);
    const haloTexture=texture(128,128,(ctx,w,h)=>{
      const gradient=ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);
      gradient.addColorStop(0,'#ffdc9edc');gradient.addColorStop(.24,'#ffb35f8a');gradient.addColorStop(1,'#ff9c3200');
      ctx.fillStyle=gradient;ctx.fillRect(0,0,w,h);
    });
    const halo=new T.Sprite(new T.SpriteMaterial({map:haloTexture.map,transparent:true,depthWrite:false,opacity:0,blending:T.AdditiveBlending}));
    halo.scale.set(1.9,1.9,1);halo.position.copy(glow.position);scene.add(halo);
    const bulbTag=texture(640,150,(ctx,w,h,data={})=>{
      ctx.fillStyle='#101923';ctx.fillRect(0,0,w,h);
      ctx.strokeStyle=data.color || '#71869b';ctx.lineWidth=5;ctx.strokeRect(3,3,w-6,h-6);
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillStyle='#edf4fc';ctx.font='700 55px system-ui';ctx.fillText(data.label || 'BOMBILLO 12 V · 3 W',w/2,53,w-28);
      ctx.fillStyle=data.color || '#aebed1';ctx.font='600 31px system-ui';ctx.fillText(data.status || 'SIN ALIMENTACIÓN',w/2,111,w-28);
    });
    const bulbTagPlane=mesh(new T.PlaneGeometry(2.17,.51),new T.MeshBasicMaterial({map:bulbTag.map}),2.31,.217,.82,scene,false);
    bulbTagPlane.rotation.x=-Math.PI/2;

    // Recessed gold sockets and clip tips are also the raycast targets.
    const terminals = [], tips = [], wireTips=[];
    for (const [id,point] of Object.entries(positions)) {
      const [x,y,z]=point;
      cyl(.164,.184,.17,id==='p'?orange:id==='n'?rubber:gold,x,y-.105,z);
      cyl(.096,.084,.019,rubber,x,y-.016,z);
      const hit=mesh(new T.CylinderGeometry(.21,.21,.16,14),new T.MeshBasicMaterial({visible:false}),x,y-.058,z,scene,false);
      hit.userData.terminal=id;terminals.push(hit);
    }
    print('A',.31,.16,-2.74,.197,1.69,scene,true);
    print('B',.31,.16,-.77,.197,1.69,scene,true);
    print('A',.31,.16,1.03,.197,1.78,scene,true);
    print('B',.31,.16,3.64,.197,1.78,scene,true);
    print('+',.26,.19,-4.56,.23,-.13,scene,true);
    print('−',.26,.19,-3.74,.23,-.13,scene,true);
    const flowMat=new T.MeshBasicMaterial({color:0x91fcff});
    const flowGeo=new T.SphereGeometry(.049,9,7);
    const arrowMat=new T.MeshStandardMaterial({
      color:0x66e9f6,emissive:0x174d5c,emissiveIntensity:1.25,roughness:.28,metalness:.08
    });
    const arrowGeo=new T.ConeGeometry(.092,.25,10);
    const arrowAxis=new T.Vector3(0,1,0);
    const wireGroup=new T.Group(), probeGroup=new T.Group();
    scene.add(wireGroup,probeGroup);
    let cables=[], previousWires='', previousProbes='', sample=null, state=null, lastTime=0;
    let selected=null, gesture=null, dirty=true;
    const cursor = new T.Vector2(), ray=new T.Raycaster(), previewPlane=new T.Plane(new T.Vector3(0,1,0),-.58);
    const preview = new T.Line(new T.BufferGeometry(),new T.LineDashedMaterial({color:0x79edfb,dashSize:.14,gapSize:.08,transparent:true,opacity:.85}));
    preview.frustumCulled=false;preview.visible=false;scene.add(preview);
    const highlight=new T.Mesh(new T.TorusGeometry(.196,.032,8,24),new T.MeshBasicMaterial({color:0x73edff, depthTest:false}));
    highlight.rotation.x=-Math.PI/2;highlight.visible=false;highlight.renderOrder=9;scene.add(highlight);
    function setSelected(id) {
      selected=id; highlight.visible=!!id;
      if (id) highlight.position.set(...positions[id]);
      dirty=true;
    }
    function clearWiring(group) {
      for (const object of [...group.children]) {
        group.remove(object);
        if (object.geometry && object.geometry !== flowGeo && object.geometry !== arrowGeo) object.geometry.dispose();
        if (object.material && object.material !== flowMat && object.material !== arrowMat) object.material.dispose();
      }
    }
    function cable(a,b,color,group,lane) {
      const start=new T.Vector3(...a), end=new T.Vector3(...b);
      const points = lane===null
        ? [start, new T.Vector3(start.x,.15,start.z+.23), new T.Vector3(end.x,.16,end.z-.26), end]
        : [start, new T.Vector3(start.x,.27,start.z+.31),
          new T.Vector3(T.MathUtils.lerp(start.x,end.x,.2),.12,lane),
          new T.Vector3(T.MathUtils.lerp(start.x,end.x,.8),.12,lane),
          new T.Vector3(end.x,.27,end.z+.29),end];
      const curve=new T.CatmullRomCurve3(points);
      mesh(new T.TubeGeometry(curve,56,.04,10),mat(color,.35,.03),0,0,0,group);
      return curve;
    }
    function updateWires(wires, probes) {
      const wireKey=JSON.stringify(wires), probeKey=JSON.stringify(probes);
      if (wireKey !== previousWires) {
        clearWiring(wireGroup);wireTips.length=0;
        const stacks={};
        cables=wires.map(([a,b],i)=>{
          const color=wireColors[i%wireColors.length];
          const ends=[a,b].map((id,side)=>{
            const [x,y,z]=positions[id];
            const slot=stacks[id] || 0;stacks[id]=slot+1;
            const clip=cyl(.073,.067,.12,mat(color,.44),x,y+.046+slot*.115,z,wireGroup,12);
            clip.userData={wireIndex:i,side,terminal:id};
            wireTips.push(clip);
            return clip.position.toArray();
          });
          const lane=2.53+(i%7)*.12;
          const curve=cable(...ends,color,wireGroup,lane);
          const dots=Array.from({length:Math.max(4,Math.ceil(curve.getLength()*2.9))},()=>mesh(flowGeo,flowMat,0,0,0,wireGroup,false));
          const arrows=Array.from({length:Math.min(5,Math.max(2,Math.round(curve.getLength()/2.25)))},
            ()=>mesh(arrowGeo,arrowMat,0,0,0,wireGroup,false));
          return {curve,dots,arrows,phase:0,arrowPhase:0,length:curve.getLength()};
        });
        previousWires=wireKey;
        renderer.shadowMap.needsUpdate=true;
      }
      if (probeKey !== previousProbes) {
        clearWiring(probeGroup); tips.length=0;
        probes.forEach((id,i)=>{
          const [x,y,z]=positions[id];const color=i===0?0xe24947:0x303943;
          const tip=[x+(i===0?-.21:.21),y+.065,z-.06];
          cable(probeOrigins[i],tip,color,probeGroup,null);
          const plug=cyl(.076,.047,.23,mat(color),...tip,probeGroup,14);
          plug.rotation.x=-.49;plug.userData.probe=i;tips.push(plug);
        });
        previousProbes=probeKey;
        renderer.shadowMap.needsUpdate=true;
      }
    }
    function update(snapshot,result,history) {
      state=snapshot; sample=result;
      updateWires(state.wires,state.probes);
      canvas.dataset.arrows=String(state.arrows);
      canvas.dataset.electronDirections=JSON.stringify(sample.flows.map(amps=>Math.abs(amps)>1e-8?-Math.sign(amps):0));
      knob.rotation.z=2.32-state.voltage/24*4.64;
      const showPot=state.resistor==='pot', slideX=-2.24+(state.pot-1)/47*.965;
      if(pot.visible!==showPot || potSlide.position.x!==slideX) renderer.shadowMap.needsUpdate=true;
      pot.visible=showPot;resistor.visible=!showPot;
      potSlide.position.x=slideX;
      window.OhmCircuit.bands(state.resistance).forEach((band,i)=>bands[i].material.color.set(band.color));
      const bright=state.bulbState==='nominal' ? 1-Math.exp(-Math.max(0,state.bulbBrightness)*2.3) : 0;
      glow.intensity=bright*10;halo.material.opacity=bright*.56;
      filamentMat.emissiveIntensity=bright*5;
      const bulb=window.OhmCircuit.BULBS[state.bulbId] || window.OhmCircuit.BULBS['12v'];
      const bulbVisual={
        nominal:{status:'VOLTAJE ADECUADO · ENCENDIDO',color:'#6fe5b6',glass:0xffcc9a},
        under:{status:'SUBTENSIÓN · BLOQUEADO',color:'#67e5f5',glass:0xaedcf0},
        over:{status:'SOBRETENSIÓN · BLOQUEADO',color:'#ff969a',glass:0xffa2a8},
        disconnected:{status:'SIN ALIMENTACIÓN',color:'#aebed1',glass:0xd7e1e8}
      }[state.bulbState] || {status:'SIN ALIMENTACIÓN',color:'#aebed1',glass:0xd7e1e8};
      glass.color.setHex(bulbVisual.glass);
      bulbTag.update({label:'BOMBILLO '+bulb.nominalVoltage+' V · '+bulb.nominalPower+' W',status:bulbVisual.status,color:bulbVisual.color});
      hemi.intensity=state.light*.018;key.intensity=state.light*.033;
      const num=(v,digits)=>v===null?'—':v.toLocaleString('es-CO',{minimumFractionDigits:digits,maximumFractionDigits:digits});
      screens.source.update({ value:num(sample.mode==='corto'?0:state.power?state.voltage:0,1)+' V', label:sample.mode==='corto'?'PROTECCIÓN':state.power?'SALIDA CC':'APAGADA' });
      screens.volts.update({ value:num(sample.probeV,3)+' V', label:'SONDAS' });
      const current=sample.i===null?null:sample.i*(state.milliamps?1000:1);
      screens.amps.update({ value:num(current,state.milliamps?1:3)+(state.milliamps?' mA':' A'), label:'CORRIENTE TOTAL' });
      updateScope(history);
    }
    function updateScope(history) { screens.scope.update({history,held:state.scopeHeld});dirty=true; }
    function updateCamera() {
      const width=canvas.clientWidth,height=canvas.clientHeight;
      if (!width || !height) return;
      camera.aspect=width/height;
      const dist=Math.max(15.4,(width<500?21:17)/camera.aspect)*view.zoom;
      const h=dist*Math.cos(view.elevation);
      target.set(view.x,view.y,view.z);
      camera.position.set(target.x+Math.sin(view.azimuth)*h,target.y+dist*Math.sin(view.elevation),target.z+Math.cos(view.azimuth)*h);
      camera.lookAt(target);camera.updateProjectionMatrix();camera.updateMatrixWorld();
      dirty=true;
    }
    function size() {
      if (!canvas.clientWidth || !canvas.clientHeight) return;
      renderer.setSize(canvas.clientWidth,canvas.clientHeight,false);
      updateCamera();
    }
    new ResizeObserver(size).observe(canvas);size();
    const zoomBy=factor=>{view.zoom=T.MathUtils.clamp(view.zoom*factor,.27,1.8);updateCamera();};
    function pan(base, distance) {
      view.x=T.MathUtils.clamp(base.x+Math.cos(base.azimuth)*distance,-6.4,6.4);
      view.z=T.MathUtils.clamp(base.z-Math.sin(base.azimuth)*distance,-4,4);
      updateCamera();
    }
    const closeups={
      source:[-4,1.43,-1.25,.34], volts:[-1.46,1.41,-1.23,.30],
      amps:[.86,1.41,-1.23,.30], scope:[3.62,1.43,-1.13,.36],
      resistor:[-1.75,.30,1.45,.43], lamp:[2.33,.48,1.58,.42]
    };
    function focus(equipment) {
      panMode=false;
      canvas.classList.remove('is-panning');
      if (!equipment) view={...starting};
      else {
        const [x,y,z,zoom]=closeups[equipment];
        const component=equipment==='resistor' || equipment==='lamp';
        view={x,y,z,zoom,azimuth:0,elevation:component?.86:.30};
      }
      updateCamera();
    }
    function cameraAction(action) {
      if (action==='left' || action==='right') {
        view.azimuth+=(action==='left'?-1:1)*Math.PI/9;
        updateCamera();
      }
      if (action==='closer') zoomBy(.86);
      if (action==='farther') zoomBy(1.16);
      if (action==='pan-left') pan({...view},-1.25);
      if (action==='pan-right') pan({...view},1.25);
      if (action==='pan-mode') {
        panMode=!panMode;
        canvas.classList.toggle('is-panning',panMode);
        return panMode;
      }
    }
    canvas.addEventListener('wheel',event=>{event.preventDefault();zoomBy(Math.exp(event.deltaY*.001));},{passive:false});
    function setRay(event) {
      const rect=canvas.getBoundingClientRect();
      cursor.set((event.clientX-rect.left)/rect.width*2-1,1-(event.clientY-rect.top)/rect.height*2);
      ray.setFromCamera(cursor,camera);
    }
    const terminalHit=()=>ray.intersectObjects(terminals)[0]?.object.userData.terminal;
    function endConnection(a,b) { if (a && b && a!==b) actions.connect(a,b);setSelected(null); }
    canvas.addEventListener('pointerdown',event=>{
      if (gesture || event.button!==0 || !state) return;
      setRay(event);
      const pickables=[...tips,...wireTips,...terminals,...interactives.filter(item=>item!==body || resistor.visible),dial,pointer];
      if (pot.visible) pickables.push(potSlide);
      const object=panMode || event.shiftKey?null:ray.intersectObjects(pickables)[0]?.object;
      const hit=object?.userData || {};
      let type='camera';
      if (panMode || event.shiftKey) type='pan';
      else if (Object.hasOwn(hit,'probe')) type='probe';
      else if (Object.hasOwn(hit,'wireIndex')) type='move';
      else if (hit.terminal) type='wire';
      else if (object===potSlide) type='pot';
      else if (object===dial || object===pointer) type='voltage';
      gesture={type,hit,pointerId:event.pointerId,x:event.clientX,y:event.clientY,moved:false,view:{...view},value:type==='pot'?state.pot:state.voltage};
      canvas.setPointerCapture(event.pointerId);
    });
    canvas.addEventListener('pointermove',event=>{
      if (!gesture || gesture.pointerId!==event.pointerId) return;
      const dx=event.clientX-gesture.x,dy=event.clientY-gesture.y;
      if (Math.hypot(dx,dy)>4) gesture.moved=true;
      if (!gesture.moved) return;
      if (gesture.type==='pan') {
        const distance=2*Math.tan(T.MathUtils.degToRad(camera.fov)/2)*camera.position.distanceTo(target);
        pan(gesture.view,-dx*distance/canvas.clientHeight);
      } else if (gesture.type==='camera') {
        view.azimuth=gesture.view.azimuth-dx*.009;
        view.elevation=Math.max(.25,Math.min(1.42,gesture.view.elevation+dy*.007));
        updateCamera();
      } else if (gesture.type==='voltage' || gesture.type==='pot') {
        actions.adjust(gesture.type,gesture.value+dx*(gesture.type==='pot'?.4:.18));
      } else {
        setRay(event);
        const from=gesture.type==='probe'?state.probes[gesture.hit.probe]:gesture.hit.terminal;
        const vec=ray.ray.intersectPlane(previewPlane,new T.Vector3());
        if (!vec) return;
        const to=terminalHit();
        preview.geometry.dispose();
        preview.geometry=new T.BufferGeometry().setFromPoints([new T.Vector3(...positions[from]),to?new T.Vector3(...positions[to]):vec]);
        preview.computeLineDistances();preview.visible=true;dirty=true;
      }
    });
    canvas.addEventListener('pointerup',event=>{
      if (!gesture || gesture.pointerId!==event.pointerId) return;
      setRay(event);
      const terminal=terminalHit();
      const {hit}=gesture;
      if (gesture.type==='probe' && gesture.moved && terminal) actions.probe(hit.probe,terminal);
      if (gesture.type==='wire' || gesture.type==='move') {
        if (gesture.moved && gesture.type==='move' && terminal) {
          actions.moveWire(hit.wireIndex,hit.side,terminal);setSelected(null);
        } else if (gesture.moved && gesture.type==='wire') endConnection(hit.terminal,terminal);
        else if (gesture.moved) setSelected(null);
        else if (selected) endConnection(selected,hit.terminal);
        else {setSelected(hit.terminal);actions.hint(endName(selected)+' seleccionado. Toca el otro borne.');}
      } else if (!gesture.moved) {
        if (hit.equipment) actions.inspect(hit.equipment,hit.control);
        else if (gesture.type==='voltage') actions.inspect('source');
        else if (gesture.type==='pot') actions.inspect('resistor');
      }
      gesture=null;preview.visible=false;dirty=true;
    });
    canvas.addEventListener('lostpointercapture',event=>{
      if(gesture?.pointerId!==event.pointerId)return;
      gesture=null;preview.visible=false;dirty=true;
    });
    window.addEventListener('keydown',event=>{if(event.key==='Escape'){setSelected(null);actions.hint();}});
    let visible=true;
    new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)dirty=true;}).observe(canvas);
    const temp=new T.Vector3();
    function render(now) {
      requestAnimationFrame(render);
      const dt=lastTime?Math.min(.05,Math.max(0,(now-lastTime)*.001)):0;lastTime=now;
      if (!visible || document.hidden || !state) return;
      const hasCurrent=sample.flows.some(amps=>Math.abs(amps)>1e-8);
      const flowing=state.motion && hasCurrent;
      const movingArrows=state.arrows && state.arrowMotion && hasCurrent;
      if (!flowing && !movingArrows && !dirty &&
          cables.every(({dots,arrows})=>dots.every(dot=>!dot.visible) && arrows.every(arrow=>!arrow.visible))) return;
      for (let i=0;i<cables.length;i++) {
        const { curve,dots,arrows,length }=cables[i];
        // Electron drift runs opposite to the signed conventional branch current.
        const amps=sample?.flows[i] || 0;
        const electronDirection=-Math.sign(amps);
        cables[i].phase=(cables[i].phase-dt*amps*.55/length)%1;
        if(state.arrowMotion) cables[i].arrowPhase=(cables[i].arrowPhase+dt*electronDirection*Math.min(.26,.08+Math.abs(amps)*.045)/length)%1;
        for (let j=0;j<dots.length;j++) {
          dots[j].visible=state.motion && Math.abs(amps)>1e-8;
          if (!dots[j].visible) continue;
          const t=((j/dots.length+cables[i].phase)%1+1)%1;
          dots[j].position.copy(curve.getPointAt(t,temp));dots[j].position.y+=.051;
        }
        for(let j=0;j<arrows.length;j++) {
          const arrow=arrows[j];
          arrow.visible=state.arrows && Math.abs(amps)>1e-8;
          if(!arrow.visible) continue;
          const t=((.12+j/arrows.length*.76+cables[i].arrowPhase)%1+1)%1;
          arrow.position.copy(curve.getPointAt(t,temp));arrow.position.y+=.115;
          const direction=curve.getTangentAt(t,new T.Vector3()).multiplyScalar(electronDirection).normalize();
          arrow.quaternion.setFromUnitVectors(arrowAxis,direction);
        }
      }
      renderer.render(scene,camera);
      dirty=false;
    }
    requestAnimationFrame(render);
    return {update,updateScope,cameraAction,setSelected,focus};
  }
  window.OhmScene={create};
})();
