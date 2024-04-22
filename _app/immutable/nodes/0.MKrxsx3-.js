import{s as ee,c as Q,a as se,n as q,b as oe,u as le,g as ae,d as ce}from"../chunks/scheduler.Cs0xm5t1.js";import{S as te,i as ne,e as $,s as I,c as b,a as A,k as z,f as M,d as g,l as k,g as j,h as v,m as N,n as y,o as O,p as P,q as ie,r as V,u as G,v as x,w as T,x as R,y as U}from"../chunks/index.P-NFKvyc.js";import{e as X}from"../chunks/each.D6YF6ztN.js";import{c as re}from"../chunks/stores.C0mI-dHR.js";import{p as fe}from"../chunks/stores.v-OHfK-E.js";import{component as ue}from"./8.kPxoEYD3.js";import{component as _e}from"./2.CODN2xe8.js";import{component as pe}from"./4.Bx6DPS4y.js";import{component as me}from"./5.CUzDunBq.js";import{component as he}from"./10.CRrmzxj4.js";import{component as de}from"./9.BrZIiVnW.js";import{component as ge}from"./3.BXpd9Crw.js";const ve=!0,Ne=Object.freeze(Object.defineProperty({__proto__:null,prerender:ve},Symbol.toStringTag,{value:"Module"}));function Y(o,e,n){const t=o.slice();return t[0]=e[n],t}function Z(o){let e,n,t,l;return{c(){e=$("a"),n=$("img"),l=I(),this.h()},l(s){e=b(s,"A",{href:!0,class:!0});var r=A(e);n=b(r,"IMG",{src:!0,alt:!0}),l=M(r),r.forEach(g),this.h()},h(){se(n.src,t="svgs/"+o[0]+".svg")||k(n,"src",t),k(n,"alt",o[0]),k(e,"href",o[0]),k(e,"class","nav-link")},m(s,r){j(s,e,r),v(e,n),v(e,l)},p:q,d(s){s&&g(e)}}}function $e(o){let e,n="Loading...";return{c(){e=$("p"),e.textContent=n},l(t){e=b(t,"P",{"data-svelte-h":!0}),z(e)!=="svelte-qdsr2u"&&(e.textContent=n)},m(t,l){j(t,e,l)},p:q,i:q,o:q,d(t){t&&g(e)}}}function be(o){let e,n;return e=new ue({props:{$cvData:o[2]}}),{c(){V(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,l){x(e,t,l),n=!0},p(t,l){const s={};l&4&&(s.$cvData=t[2]),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function ke(o){let e,n="Loading...";return{c(){e=$("p"),e.textContent=n},l(t){e=b(t,"P",{"data-svelte-h":!0}),z(e)!=="svelte-qdsr2u"&&(e.textContent=n)},m(t,l){j(t,e,l)},p:q,i:q,o:q,d(t){t&&g(e)}}}function ye(o){let e,n,t;var l=o[1];function s(r,c){return{props:{cvData:re}}}return l&&(e=R(l,s())),{c(){e&&V(e.$$.fragment),n=U()},l(r){e&&G(e.$$.fragment,r),n=U()},m(r,c){e&&x(e,r,c),j(r,n,c),t=!0},p(r,c){if(c&2&&l!==(l=r[1])){if(e){N();const i=e;y(i.$$.fragment,1,0,()=>{T(i,1)}),O()}l?(e=R(l,s()),V(e.$$.fragment),P(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}},i(r){t||(e&&P(e.$$.fragment,r),t=!0)},o(r){e&&y(e.$$.fragment,r),t=!1},d(r){r&&g(n),e&&T(e,r)}}}function Pe(o){let e,n,t,l='<img src="svgs/about.svg" alt="about"/>',s,r,c,i,m,H,D,h,d,S,E=X(o[3]),f=[];for(let a=0;a<E.length;a+=1)f[a]=Z(Y(o,E,a));const B=[be,$e],C=[];function F(a,u){return a[2]?0:1}i=F(o),m=C[i]=B[i](o);const J=[ye,ke],w=[];function K(a,u){return a[2]?0:1}return h=K(o),d=w[h]=J[h](o),{c(){e=$("div"),n=$("nav"),t=$("a"),t.innerHTML=l,s=I();for(let a=0;a<f.length;a+=1)f[a].c();r=I(),c=$("div"),m.c(),H=I(),D=$("div"),d.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var u=A(e);n=b(u,"NAV",{class:!0});var p=A(n);t=b(p,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(t)!=="svelte-x9qi5"&&(t.innerHTML=l),s=M(p);for(let W=0;W<f.length;W+=1)f[W].l(p);p.forEach(g),r=M(u),c=b(u,"DIV",{});var L=A(c);m.l(L),L.forEach(g),H=M(u),D=b(u,"DIV",{class:!0});var _=A(D);d.l(_),_.forEach(g),u.forEach(g),this.h()},h(){k(t,"href","/"),k(t,"class","nav-link"),k(n,"class","sidebar-nav"),k(D,"class","main-content"),k(e,"class","app")},m(a,u){j(a,e,u),v(e,n),v(n,t),v(n,s);for(let p=0;p<f.length;p+=1)f[p]&&f[p].m(n,null);v(e,r),v(e,c),C[i].m(c,null),v(e,H),v(e,D),w[h].m(D,null),S=!0},p(a,[u]){if(u&8){E=X(a[3]);let _;for(_=0;_<E.length;_+=1){const W=Y(a,E,_);f[_]?f[_].p(W,u):(f[_]=Z(W),f[_].c(),f[_].m(n,null))}for(;_<f.length;_+=1)f[_].d(1);f.length=E.length}let p=i;i=F(a),i===p?C[i].p(a,u):(N(),y(C[p],1,1,()=>{C[p]=null}),O(),m=C[i],m?m.p(a,u):(m=C[i]=B[i](a),m.c()),P(m,1),m.m(c,null));let L=h;h=K(a),h===L?w[h].p(a,u):(N(),y(w[L],1,1,()=>{w[L]=null}),O(),d=w[h],d?d.p(a,u):(d=w[h]=J[h](a),d.c()),P(d,1),d.m(D,null))},i(a){S||(P(m),P(d),S=!0)},o(a){y(m),y(d),S=!1},d(a){a&&g(e),ie(f,a),C[i].d(),w[h].d()}}}function Ce(o,e,n){let t,l,s;Q(o,fe,i=>n(4,l=i)),Q(o,re,i=>n(2,s=i));let r=["education","experience","skills","projects","contact"],c=null;return o.$$.update=()=>{o.$$.dirty&16&&n(0,t=l.url.pathname),o.$$.dirty&1&&(t.startsWith("/education")?n(1,c=pe):t.startsWith("/experience")?n(1,c=me):t.startsWith("/skills")?n(1,c=he):t.startsWith("/projects")?n(1,c=de):t.startsWith("/contact")?n(1,c=ge):n(1,c=_e))},[t,c,s,r,l]}class we extends te{constructor(e){super(),ne(this,e,Ce,Pe,ee,{})}}function De(o){let e,n,t;e=new we({});const l=o[1].default,s=oe(l,o,o[0],null);return{c(){V(e.$$.fragment),n=I(),s&&s.c()},l(r){G(e.$$.fragment,r),n=M(r),s&&s.l(r)},m(r,c){x(e,r,c),j(r,n,c),s&&s.m(r,c),t=!0},p(r,[c]){s&&s.p&&(!t||c&1)&&le(s,l,r,r[0],t?ce(l,r[0],c,null):ae(r[0]),null)},i(r){t||(P(e.$$.fragment,r),P(s,r),t=!0)},o(r){y(e.$$.fragment,r),y(s,r),t=!1},d(r){r&&g(n),T(e,r),s&&s.d(r)}}}function qe(o,e,n){let{$$slots:t={},$$scope:l}=e;return o.$$set=s=>{"$$scope"in s&&n(0,l=s.$$scope)},[l,t]}class Oe extends te{constructor(e){super(),ne(this,e,qe,De,ee,{})}}export{Oe as component,Ne as universal};