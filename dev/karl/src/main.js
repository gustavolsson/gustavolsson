import*as e from"../web_modules/three.js";import{GLTFLoader as m}from"../web_modules/three/examples/jsm/loaders/GLTFLoader.js";const r=new e.Scene,t=new e.PerspectiveCamera(70,window.innerWidth/window.innerHeight,.1,100);t.position.z=-5,t.rotateY(e.MathUtils.degToRad(180));const a=new e.WebGLRenderer;a.setSize(window.innerWidth/2,window.innerHeight/2,!1),a.shadowMap.enabled=!0,a.shadowMap.type=e.PCFShadowMap,document.body.appendChild(a.domElement);const i=new e.TextureLoader().load("floor.png");i.wrapS=e.RepeatWrapping,i.wrapT=e.RepeatWrapping,i.repeat.set(200,200);const f=new e.MeshStandardMaterial({color:16777215,map:i}),g=new e.MeshStandardMaterial({color:65280}),s=new e.Mesh(new e.BoxGeometry,g);s.castShadow=!0,r.add(s);const d=new e.Mesh(new e.PlaneGeometry(200,200,1,1),f);d.rotation.x=e.MathUtils.degToRad(-90),d.position.y=-2,d.receiveShadow=!0,r.add(d);const y=new e.HemisphereLight(16772785,3158064,2);r.add(y);const T=new m().load("room.glb",function(o){o.scene.position.set(-70,-2.01,-70),o.scene.scale.set(2,2,2),r.add(o.scene)},void 0,function(o){console.log("Could not load gltf!")});let c=new Map,n=new Map;function p(o){switch(o){case 17:return"ctrl";case 37:return"left";case 38:return"up";case 39:return"right";case 40:return"down";default:return""}}document.onkeydown=function(o){n.set(p(o.keyCode),!0)},document.onkeyup=function(o){n.set(p(o.keyCode),!1)};let l=!1;function w(){requestAnimationFrame(w),s.rotation.x+=.01,s.rotation.y+=.01;let o=new e.Vector3;t.getWorldDirection(o),o.multiplyScalar(.1),n.get("up")&&t.position.add(o),n.get("down")&&t.position.sub(o),n.get("right")&&t.rotateY(e.MathUtils.degToRad(-2)),n.get("left")&&t.rotateY(e.MathUtils.degToRad(2)),n.get("ctrl")&&!c.get("ctrl")&&(l=!l,console.log("crouch!")),l?t.position.y+=(-1-t.position.y)*.2:t.position.y+=(0-t.position.y)*.2,a.render(r,t),n.forEach((u,h)=>{c.set(h,u)})}w(),console.log("hello world");
