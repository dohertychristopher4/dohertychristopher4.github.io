import{s as O,a as S,n as F,c as Q}from"../chunks/scheduler.OG9kUcL4.js";import{S as R,i as T,e as n,s as $,t as J,c as u,a as m,f as q,b as K,d as h,l as e,g as U,h as t,j as N}from"../chunks/index.cNwEqVHJ.js";import{c as W}from"../chunks/stores.CakbVxxf.js";function X(f){let s,l,b,D,r,g,I=f[0].personalDetails.name+"",x,A,p,E=f[0].personalDetails.position+"",G,L,v,c,_,j,H,P,o,d,C,M;return{c(){s=n("div"),l=n("img"),D=$(),r=n("div"),g=n("h1"),x=J(I),A=$(),p=n("h3"),G=J(E),L=$(),v=n("div"),c=n("a"),_=n("img"),P=$(),o=n("a"),d=n("img"),this.h()},l(i){s=u(i,"DIV",{class:!0});var a=m(s);l=u(a,"IMG",{id:!0,src:!0,alt:!0,class:!0}),D=q(a),r=u(a,"DIV",{class:!0});var k=m(r);g=u(k,"H1",{class:!0});var w=m(g);x=K(w,I),w.forEach(h),A=q(k),p=u(k,"H3",{class:!0});var y=m(p);G=K(y,E),y.forEach(h),L=q(k),v=u(k,"DIV",{class:!0});var V=m(v);c=u(V,"A",{href:!0,target:!0,title:!0});var z=m(c);_=u(z,"IMG",{src:!0,alt:!0,class:!0}),z.forEach(h),P=q(V),o=u(V,"A",{href:!0,target:!0,title:!0});var B=m(o);d=u(B,"IMG",{src:!0,alt:!0,class:!0}),B.forEach(h),V.forEach(h),k.forEach(h),a.forEach(h),this.h()},h(){e(l,"id","profiler"),S(l.src,b="/images/profile.png")||e(l,"src",b),e(l,"alt","Profile image"),e(l,"class","svelte-8uu33x"),e(g,"class","svelte-8uu33x"),e(p,"class","svelte-8uu33x"),S(_.src,j="/svgs/github.svg")||e(_,"src",j),e(_,"alt","GitHub"),e(_,"class","svelte-8uu33x"),e(c,"href",H=f[0].links.github),e(c,"target","_blank"),e(c,"title","GitHub"),S(d.src,C="/svgs/linkedin.svg")||e(d,"src",C),e(d,"alt","LinkedIn"),e(d,"class","svelte-8uu33x"),e(o,"href",M=f[0].links.linkedin),e(o,"target","_blank"),e(o,"title","LinkedIn"),e(v,"class","social-links"),e(r,"class","text-overlay svelte-8uu33x"),e(s,"class","personal-section svelte-8uu33x")},m(i,a){U(i,s,a),t(s,l),t(s,D),t(s,r),t(r,g),t(g,x),t(r,A),t(r,p),t(p,G),t(r,L),t(r,v),t(v,c),t(c,_),t(v,P),t(v,o),t(o,d)},p(i,[a]){a&1&&I!==(I=i[0].personalDetails.name+"")&&N(x,I),a&1&&E!==(E=i[0].personalDetails.position+"")&&N(G,E),a&1&&H!==(H=i[0].links.github)&&e(c,"href",H),a&1&&M!==(M=i[0].links.linkedin)&&e(o,"href",M)},i:F,o:F,d(i){i&&h(s)}}}function Y(f,s,l){let b;return Q(f,W,D=>l(0,b=D)),[b]}class se extends R{constructor(s){super(),T(this,s,Y,X,O,{})}}export{se as component};