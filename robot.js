import * as THREE from './assets/vendor/three.module.js';

// The CSS mascot remains available if WebGL cannot initialize.
const host = document.getElementById('robot');
let renderer;
try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); }
catch { console.info('Using the CSS robot fallback.'); }
if (renderer) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, .1, 40);
  camera.position.set(0, .35, 10.2); camera.lookAt(0, .15, 0);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0, 0); renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.45;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.append(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0xe6f5ff, 0x615427, 2.6));
  for (const [color, power, x, y, z] of [[0xffffff,65,-4,6,5],[0x9bdccc,35,4,2,-3],[0xfff5cc,18,3,0,5]]) {
    const light = new THREE.PointLight(color,power); light.position.set(x,y,z); scene.add(light);
  }
  const shell = new THREE.MeshStandardMaterial({color:0x22282c,metalness:.62,roughness:.29});
  const joint = new THREE.MeshStandardMaterial({color:0x58626a,metalness:.8,roughness:.32});
  const glass = new THREE.MeshStandardMaterial({color:0x050e10,metalness:.32,roughness:.16});
  const green = new THREE.MeshStandardMaterial({color:0x33d487,emissive:0x33d487,emissiveIntensity:1.1,roughness:.28});
  const body = new THREE.Group(); scene.add(body);
  function ellipsoid(parent,material,x,y,z,sx,sy,sz) {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(1,40,28),material);
    mesh.position.set(x,y,z); mesh.scale.set(sx,sy,sz); parent.add(mesh); return mesh;
  }
  function rounded(parent, material, w,h,d,r,x,y,z) {
    const shape = new THREE.Shape(); const a=-w/2,b=-h/2;
    shape.moveTo(a+r,b);shape.lineTo(a+w-r,b);shape.quadraticCurveTo(a+w,b,a+w,b+r);
    shape.lineTo(a+w,b+h-r);shape.quadraticCurveTo(a+w,b+h,a+w-r,b+h);
    shape.lineTo(a+r,b+h);shape.quadraticCurveTo(a,b+h,a,b+h-r);
    shape.lineTo(a,b+r);shape.quadraticCurveTo(a,b,a+r,b);
    const mesh=new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:d,bevelEnabled:true,bevelSegments:5,steps:1,bevelSize:.065,bevelThickness:.065,curveSegments:16}),material);
    mesh.position.set(x,y,z-d/2);parent.add(mesh);return mesh;
  }
  ellipsoid(body,shell,0,-.12,0,.91,.94,.62);
  const head=new THREE.Group();head.position.y=1.12;body.add(head);
  rounded(head,shell,1.64,1.2,.85,.34,0,0,0);
  rounded(head,joint,1.43,.54,.09,.23,0,.03,.49);
  rounded(head,glass,1.34,.45,.10,.19,0,.035,.555);
  const eyes=[];
  for(const x of [-.34,.34]) eyes.push(rounded(head,green,.23,.105,.025,.05,x,.065,.63));
  rounded(head,joint,.32,.055,.03,.02,0,-.32,.52);
  const antenna=new THREE.Mesh(new THREE.CylinderGeometry(.035,.045,.3,16),joint);antenna.position.set(0,.77,0);head.add(antenna);
  ellipsoid(head,green,0,.96,0,.11,.11,.11);
  for(const x of [-.9,.9]) ellipsoid(head,joint,x,0,0,.12,.27,.29);
  const badgeCanvas=document.createElement('canvas');badgeCanvas.width=256;badgeCanvas.height=256;
  const ctx=badgeCanvas.getContext('2d');ctx.fillStyle='#101010';ctx.fillRect(0,0,256,256);ctx.strokeStyle='#65726d';ctx.lineWidth=8;ctx.strokeRect(9,9,238,238);ctx.fillStyle='#ffdf00';ctx.font='900 115px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('HH',128,132);
  const badgeTexture=new THREE.CanvasTexture(badgeCanvas);badgeTexture.colorSpace=THREE.SRGBColorSpace;
  rounded(body,glass,.51,.49,.04,.08,0,-.06,.62);
  const badgeFace=new THREE.Mesh(new THREE.PlaneGeometry(.44,.42),new THREE.MeshStandardMaterial({map:badgeTexture,roughness:.5}));badgeFace.position.set(0,-.06,.71);body.add(badgeFace);
  for(let i=0;i<3;i++)rounded(body,joint,.28,.026,.025,.01,0,-.46-i*.065,.56);
  const arms=[];
  for(const side of [-1,1]) {
    const arm=new THREE.Group();arm.position.set(side*.91,.32,0);body.add(arm);arms.push(arm);
    ellipsoid(arm,joint,0,0,0,.23,.23,.23);
    ellipsoid(arm,shell,side*.08,-.43,0,.24,.48,.25);
    ellipsoid(arm,joint,side*.08,-.82,0,.18,.18,.18);
    ellipsoid(arm,shell,side*.08,-1.02,.035,.28,.27,.29);
    rounded(arm,joint,.27,.035,.035,.015,side*.08,-1.05,.3);
  }
  for(const side of [-1,1]) {
    ellipsoid(body,joint,side*.45,-.96,0,.23,.22,.24);
    rounded(body,shell,.57,.55,.67,.16,side*.46,-1.25,.09);
    rounded(body,joint,.58,.09,.7,.035,side*.46,-1.52,.11);
  }
  // Soft contact shadow, independent of the floating body.
  const shadowCanvas=document.createElement('canvas');shadowCanvas.width=128;shadowCanvas.height=128;
  const sc=shadowCanvas.getContext('2d'),gradient=sc.createRadialGradient(64,64,5,64,64,64);
  gradient.addColorStop(0,'rgba(0,0,0,.32)');gradient.addColorStop(1,'rgba(0,0,0,0)');sc.fillStyle=gradient;sc.fillRect(0,0,128,128);
  const shadow=new THREE.Mesh(new THREE.PlaneGeometry(3.5,.6),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}));
  shadow.position.set(0,-1.9,-.6);scene.add(shadow);
  const hero=document.querySelector('.hero-scroll'),headline=hero.querySelector('h1');
  let px=0,py=0,turn=-.22,tilt=0,scroll=0,wave=0,time=0,last=performance.now(),frame=0,inView=true;
  const enabled=()=>!document.body.classList.contains('paused');
  function resize(){const width=host.clientWidth,height=host.clientHeight;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();wake();}
  function wake(){if(!frame&&!document.hidden&&inView) {last=performance.now();frame=requestAnimationFrame(tick);}}
  function tick(now){
    frame=0;const dt=Math.min((now-last)/1000,.05);last=now;const active=enabled();
    const target=Math.min(1,Math.max(0,-hero.getBoundingClientRect().top/Math.max(1,hero.offsetHeight-innerHeight)));
    const ease=1-Math.exp(-8*dt);
    if(active){time+=dt;scroll+=(target-scroll)*ease;turn+=(-.22+px*.35+scroll*1.3-turn)*ease;tilt+=(-py*.09-tilt)*ease;wave=Math.max(0,wave-dt);}
    body.rotation.set(tilt,turn,active?Math.sin(time*.85)*.035:body.rotation.z);
    body.position.y=active?Math.sin(time*1.65)*.085:body.position.y;
    if(active)head.rotation.y=(turn+.22-scroll*1.3)*.28;
    if(active)arms[0].rotation.z=-.12+Math.sin(time*1.65+.6)*.055;
    const waveProgress=1-wave/2.2;
    const envelope=wave>0?Math.sin(Math.PI*Math.min(1,waveProgress))*1.8:0;
    if(active)arms[1].rotation.z=.12+Math.sin(time*1.65)*.055+envelope*(1+.15*Math.sin(waveProgress*Math.PI*10));
    if(active){const blink=Math.pow(Math.max(0,Math.cos(time*1.1)),70);eyes.forEach(eye=>eye.scale.y=1-.88*blink);headline.style.transform=`translateX(${-scroll*18}vw)`;shadow.scale.setScalar(1-body.position.y*.3);}
    renderer.render(scene,camera);
    if(active)frame=requestAnimationFrame(tick);
  }
  addEventListener('pointermove',e=>{px=e.clientX/innerWidth*2-1;py=e.clientY/innerHeight*2-1;wake();},{passive:true});
  document.documentElement.addEventListener('pointerleave',()=>{px=py=0;wake();});
  host.addEventListener('click',()=>{if(enabled()){wave=2.2;wake();}});
  addEventListener('scroll',wake,{passive:true});addEventListener('resize',resize);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else wake();});
  new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;if(inView)wake();else{cancelAnimationFrame(frame);frame=0;}},{threshold:0}).observe(hero);
  new MutationObserver(wake).observe(document.body,{attributes:true,attributeFilter:['class']});
  renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();cancelAnimationFrame(frame);frame=0;host.classList.remove('has-3d');});
  renderer.domElement.addEventListener('webglcontextrestored',()=>{host.classList.add('has-3d');wake();});
  resize();renderer.render(scene,camera);host.classList.add('has-3d');wake();
}
