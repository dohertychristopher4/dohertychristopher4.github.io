const __vite__fileDeps=["../nodes/0.MKrxsx3-.js","../chunks/scheduler.Cs0xm5t1.js","../chunks/index.P-NFKvyc.js","../chunks/each.D6YF6ztN.js","../chunks/stores.C0mI-dHR.js","../chunks/index.FyvAgSb3.js","../chunks/stores.v-OHfK-E.js","../chunks/entry._i104wor.js","../nodes/8.kPxoEYD3.js","../assets/8.BqMV0m7g.css","../nodes/2.CODN2xe8.js","../nodes/4.Bx6DPS4y.js","../nodes/5.CUzDunBq.js","../nodes/10.CRrmzxj4.js","../assets/10.DV1bNRDK.css","../nodes/9.BrZIiVnW.js","../nodes/3.BXpd9Crw.js","../nodes/1.D8eTTij2.js","../nodes/6.BSVq9r8E.js","../nodes/7.D0uXlmRp.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as q,e as B,o as U,f as I,t as j}from"../chunks/scheduler.Cs0xm5t1.js";import{S as z,i as W,s as F,y as h,f as G,g as v,n as g,o as A,p as w,d as E,e as H,c as J,a as K,l as O,z as d,t as Q,b as X,j as Y,m as D,x as R,r as P,u as T,v as L,w as y}from"../chunks/index.P-NFKvyc.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},V={},p=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),o=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(s=>{if(s=M(s,i),s in V)return;V[s]=!0;const f=s.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let b=_.length-1;b>=0;b--){const k=_[b];if(k.href===s&&(!f||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":Z,f||(u.as="script",u.crossOrigin=""),u.href=s,o&&u.setAttribute("nonce",o),document.head.appendChild(u),f)return new Promise((b,k)=>{u.addEventListener("load",b),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${s}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},oe={};function $(a){let e,n,i;var r=a[1][0];function _(t,o){return{props:{data:t[3],form:t[2]}}}return r&&(e=R(r,_(a)),a[12](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,o){e&&L(e,t,o),v(t,n,o),i=!0},p(t,o){if(o&2&&r!==(r=t[1][0])){if(e){D();const s=e;g(s.$$.fragment,1,0,()=>{y(s,1)}),A()}r?(e=R(r,_(t)),t[12](e),P(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const s={};o&8&&(s.data=t[3]),o&4&&(s.form=t[2]),e.$set(s)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&E(n),a[12](null),e&&y(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,o){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=R(r,_(a)),a[11](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,o){e&&L(e,t,o),v(t,n,o),i=!0},p(t,o){if(o&2&&r!==(r=t[1][0])){if(e){D();const s=e;g(s.$$.fragment,1,0,()=>{y(s,1)}),A()}r?(e=R(r,_(t)),t[11](e),P(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const s={};o&8&&(s.data=t[3]),o&8215&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&E(n),a[11](null),e&&y(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,o){return{props:{data:t[4],form:t[2]}}}return r&&(e=R(r,_(a)),a[10](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,o){e&&L(e,t,o),v(t,n,o),i=!0},p(t,o){if(o&2&&r!==(r=t[1][1])){if(e){D();const s=e;g(s.$$.fragment,1,0,()=>{y(s,1)}),A()}r?(e=R(r,_(t)),t[10](e),P(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const s={};o&16&&(s.data=t[4]),o&4&&(s.form=t[2]),e.$set(s)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&E(n),a[10](null),e&&y(e,t)}}}function S(a){let e,n=a[6]&&C(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=K(e);n&&n.l(r),r.forEach(E),this.h()},h(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,r){v(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=C(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&E(e),n&&n.d()}}}function C(a){let e;return{c(){e=Q(a[7])},l(n){e=X(n,a[7])},m(n,i){v(n,e,i)},p(n,i){i&128&&Y(e,n[7])},d(n){n&&E(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],o=[];function s(l,m){return l[1][1]?0:1}e=s(a),n=o[e]=t[e](a);let f=a[5]&&S(a);return{c(){n.c(),i=F(),f&&f.c(),r=h()},l(l){n.l(l),i=G(l),f&&f.l(l),r=h()},m(l,m){o[e].m(l,m),v(l,i,m),f&&f.m(l,m),v(l,r,m),_=!0},p(l,[m]){let u=e;e=s(l),e===u?o[e].p(l,m):(D(),g(o[u],1,1,()=>{o[u]=null}),A(),n=o[e],n?n.p(l,m):(n=o[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=S(l),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i(l){_||(w(n),_=!0)},o(l){g(n),_=!1},d(l){l&&(E(i),E(r)),o[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:o}=e,{data_0:s=null}=e,{data_1:f=null}=e;B(i.page.notify);let l=!1,m=!1,u=null;U(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),j().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),c});function b(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function k(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function N(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,r=c.page),"constructors"in c&&n(1,_=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,o=c.form),"data_0"in c&&n(3,s=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,o,s,f,l,m,u,i,r,b,k,N]}class se extends z{constructor(e){super(),W(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>p(()=>import("../nodes/0.MKrxsx3-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),()=>p(()=>import("../nodes/1.D8eTTij2.js"),__vite__mapDeps([17,1,2,6,7,5]),import.meta.url),()=>p(()=>import("../nodes/2.CODN2xe8.js"),__vite__mapDeps([10,1,2,4,5]),import.meta.url),()=>p(()=>import("../nodes/3.BXpd9Crw.js"),__vite__mapDeps([16,1,2,4,5]),import.meta.url),()=>p(()=>import("../nodes/4.Bx6DPS4y.js"),__vite__mapDeps([11,1,2,4,5]),import.meta.url),()=>p(()=>import("../nodes/5.CUzDunBq.js"),__vite__mapDeps([12,1,2,3,4,5]),import.meta.url),()=>p(()=>import("../nodes/6.BSVq9r8E.js"),__vite__mapDeps([18,1,2]),import.meta.url),()=>p(()=>import("../nodes/7.D0uXlmRp.js"),__vite__mapDeps([19,1,2]),import.meta.url),()=>p(()=>import("../nodes/8.kPxoEYD3.js"),__vite__mapDeps([8,1,2,4,5,9]),import.meta.url),()=>p(()=>import("../nodes/9.BrZIiVnW.js"),__vite__mapDeps([15,1,2,3,4,5]),import.meta.url),()=>p(()=>import("../nodes/10.CRrmzxj4.js"),__vite__mapDeps([13,1,2,3,4,5,14]),import.meta.url)],le=[],fe={"/":[2],"/contact":[3],"/education":[4],"/experience":[5],"/footer":[6],"/header":[7],"/personal":[8],"/projects":[9],"/skills":[10]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,oe as matchers,ae as nodes,se as root,le as server_loads};