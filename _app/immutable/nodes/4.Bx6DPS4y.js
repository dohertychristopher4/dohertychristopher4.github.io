import{s as R,n as Q,c as T}from"../chunks/scheduler.Cs0xm5t1.js";import{S as U,i as W,e as r,s as $,t as v,c as d,a as u,k as X,f as A,b as h,d as c,l as J,g as Y,h as e,j as G}from"../chunks/index.P-NFKvyc.js";import{c as Z}from"../chunks/stores.C0mI-dHR.js";function x(l){let a,i,_="Education",m,t,g,E=l[0].education.degree+"",H,k,P,C=l[0].education.fieldOfStudy+"",I,q,D,S=l[0].education.institution+"",O,w,p,b=l[0].education.yearsAttended+"",V,z,f,B,y=l[0].education.grade+"",j;return{c(){a=r("div"),i=r("h1"),i.textContent=_,m=$(),t=r("div"),g=r("h2"),H=v(E),k=$(),P=r("p"),I=v(C),q=$(),D=r("p"),O=v(S),w=$(),p=r("p"),V=v(b),z=$(),f=r("p"),B=v("Grade: "),j=v(y),this.h()},l(n){a=d(n,"DIV",{class:!0});var s=u(a);i=d(s,"H1",{"data-svelte-h":!0}),X(i)!=="svelte-v2wv6o"&&(i.textContent=_),m=A(s),t=d(s,"DIV",{class:!0});var o=u(t);g=d(o,"H2",{});var K=u(g);H=h(K,E),K.forEach(c),k=A(o),P=d(o,"P",{});var L=u(P);I=h(L,C),L.forEach(c),q=A(o),D=d(o,"P",{});var M=u(D);O=h(M,S),M.forEach(c),w=A(o),p=d(o,"P",{class:!0});var N=u(p);V=h(N,b),N.forEach(c),z=A(o),f=d(o,"P",{});var F=u(f);B=h(F,"Grade: "),j=h(F,y),F.forEach(c),o.forEach(c),s.forEach(c),this.h()},h(){J(p,"class","years"),J(t,"class","card"),J(a,"class","card-container")},m(n,s){Y(n,a,s),e(a,i),e(a,m),e(a,t),e(t,g),e(g,H),e(t,k),e(t,P),e(P,I),e(t,q),e(t,D),e(D,O),e(t,w),e(t,p),e(p,V),e(t,z),e(t,f),e(f,B),e(f,j)},p(n,[s]){s&1&&E!==(E=n[0].education.degree+"")&&G(H,E),s&1&&C!==(C=n[0].education.fieldOfStudy+"")&&G(I,C),s&1&&S!==(S=n[0].education.institution+"")&&G(O,S),s&1&&b!==(b=n[0].education.yearsAttended+"")&&G(V,b),s&1&&y!==(y=n[0].education.grade+"")&&G(j,y)},i:Q,o:Q,d(n){n&&c(a)}}}function ee(l,a,i){let _;return T(l,Z,m=>i(0,_=m)),[_]}class ne extends U{constructor(a){super(),W(this,a,ee,x,R,{})}}export{ne as component};
