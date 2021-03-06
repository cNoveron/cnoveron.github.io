(this["webpackJsonpfloating-diamonds"]=this["webpackJsonpfloating-diamonds"]||[]).push([[0],{21:function(e,n,t){e.exports=t.p+"static/media/diamond.ab7b6e3a.glb"},22:function(e,n,t){e.exports=t.p+"static/media/233.1600b9e7.jpg"},26:function(e,n,t){e.exports=t(33)},30:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(0),o=t(1),i=t.n(o),c=t(19),l=t.n(c),s=t(9),m=t(20),d=t(5),f=t(6),u=t(7),v=t(8),h=function(e){Object(u.a)(t,e);var n=Object(v.a)(t);function t(e){return Object(f.a)(this,t),n.call(this,{vertexShader:"varying vec3 worldNormal;\n      void main() {\n\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n\n        worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"varying vec3 worldNormal;\n      void main() {\n        gl_FragColor = vec4(worldNormal, 1.0);\n      }",side:r.BackSide})}return Object(d.a)(t)}(r.ShaderMaterial),p=function(e){Object(u.a)(t,e);var n=Object(v.a)(t);function t(e){var a;return Object(f.a)(this,t),(a=n.call(this,{vertexShader:"varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      void main() {\n\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n\n        vec4 worldPosition = modelMatrix * vec4( position, 1.0);\n        worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;\n        viewDirection = normalize(worldPosition.xyz - cameraPosition);;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"uniform sampler2D envMap;\n      uniform sampler2D backfaceMap;\n      uniform vec2 resolution;\n      \n      varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      \n      float ior = 1.5;\n      float a = 0.33;\n      \n      vec3 fogColor = vec3(1.0);\n      vec3 reflectionColor = vec3(1.0);\n      \n      float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {\n        return pow( 1.08 + dot( viewDirection, worldNormal), 10.0 );\n      }\n      \n      void main() {\n        // screen coordinates\n        vec2 uv = gl_FragCoord.xy / resolution;\n      \n        // sample backface data from texture\n        vec3 backfaceNormal = texture2D(backfaceMap, uv).rgb;\n      \n        // combine backface and frontface normal\n        vec3 normal = worldNormal * (1.0 - a) - backfaceNormal * a;\n      \n        // calculate refraction and apply to uv\n        vec3 refracted = refract(viewDirection, normal, 1.0/ior);\n        uv += refracted.xy;\n      \n        // sample environment texture\n        vec4 tex = texture2D(envMap, uv);\n      \n        // calculate fresnel\n        float fresnel = fresnelFunc(viewDirection, normal);\n      \n        vec4 color = tex;\n      \n        // apply fresnel\n        color.rgb = mix(color.rgb, reflectionColor, fresnel);\n      \n        gl_FragColor = vec4(color.rgb, 1.0);\n      }"})).uniforms={envMap:{value:e.envMap},backfaceMap:{value:e.backfaceMap},resolution:{value:e.resolution}},a}return Object(d.a)(t)}(r.ShaderMaterial),b=t(21),g=t.n(b),M=t(22),w=t.n(M);t(30);function x(){var e=Object(s.d)(),n=e.viewport,t=e.aspect,a=Object(s.c)(r.TextureLoader,w.a);Object(o.useMemo)((function(){return a.minFilter=r.LinearFilter}),[]);var c=3800*(t>5e3/3800?n.width/5e3:n.height/3800),l=5e3*(t>5e3/3800?n.width/5e3:n.height/3800);return i.a.createElement("mesh",{layers:1,scale:[l,c,1]},i.a.createElement("planeBufferGeometry",{attach:"geometry"}),i.a.createElement("meshBasicMaterial",{attach:"material",map:a,depthTest:!1}))}function N(){var e=Object(s.d)(),n=e.size,t=e.viewport,c=e.gl,l=e.scene,d=e.camera,f=e.clock,u=Object(o.useRef)(),v=Object(s.c)(m.a,g.a),b=Object(o.useMemo)((function(){var e=new r.WebGLRenderTarget(n.width,n.height),t=new r.WebGLRenderTarget(n.width,n.height);return[e,t,new h,new p({envMap:e.texture,backfaceMap:t.texture,resolution:[n.width,n.height]})]}),[n]),M=Object(a.a)(b,4),w=M[0],x=M[1],N=M[2],y=M[3],j=Object(o.useMemo)((function(){return new r.Object3D}),[]),E=Object(o.useMemo)((function(){return new Array(80).fill().map((function(e,n){return{position:[n<5?0:t.width/2-Math.random()*t.width,40-40*Math.random(),n<5?26:10-20*Math.random()],factor:.1+Math.random(),direction:Math.random()<.5?-1:1,rotation:[Math.sin(Math.random())*Math.PI,Math.sin(Math.random())*Math.PI,Math.cos(Math.random())*Math.PI]}}))}),[]);return Object(s.b)((function(){E.forEach((function(e,n){var a=f.getElapsedTime();e.position[1]-=e.factor/5*e.direction,(1===e.direction?e.position[1]<-50:e.position[1]>50)&&(e.position=[n<5?0:t.width/2-Math.random()*t.width,50*e.direction,e.position[2]]);var r=e.position,o=e.rotation,i=e.factor;j.position.set(r[0],r[1],r[2]),j.rotation.set(o[0]+a*i,o[1]+a*i,o[2]+a*i),j.scale.set(1+i,1+i,1+i),j.updateMatrix(),u.current.setMatrixAt(n,j.matrix)})),u.current.instanceMatrix.needsUpdate=!0,c.autoClear=!1,d.layers.set(1),c.setRenderTarget(w),c.render(l,d),d.layers.set(0),u.current.material=N,c.setRenderTarget(x),c.clearDepth(),c.render(l,d),d.layers.set(1),c.setRenderTarget(null),c.render(l,d),c.clearDepth(),d.layers.set(0),u.current.material=y,c.render(l,d)}),1),i.a.createElement("instancedMesh",{ref:u,args:[null,null,E.length]},i.a.createElement("bufferGeometry",Object.assign({dispose:!1,attach:"geometry"},v.__$[1].geometry)),i.a.createElement("meshBasicMaterial",{attach:"material"}))}function y(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{camera:{fov:50,position:[0,0,30]}},i.a.createElement(o.Suspense,{fallback:null},i.a.createElement(x,null),i.a.createElement(N,null))),i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,i.a.createElement("span",null,"Carlos Nover\xf3n")),i.a.createElement("pre",null,i.a.createElement("h2",null,"Crypto/Blockchain/DeFi/NFTs Engineer"))),i.a.createElement("a",{className:"leftSideFooting",href:"https://github.com/drcmda/react-three-fiber"},"Github"))}l.a.render(i.a.createElement(y,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0424b4ee.chunk.js.map