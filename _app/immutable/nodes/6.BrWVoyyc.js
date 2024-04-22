import{s as I,n as q}from"../chunks/scheduler.OG9kUcL4.js";import{S as L,i as V,e as m,t as v,s as w,c as d,a as u,b as g,d as h,f as D,k as Y,l as O,g as z,h as t,j as F}from"../chunks/index.DdQJlOfU.js";function B(i){let e,a,n,c,r,p=i[0].email+"",E,x,P,o,S,_=i[0].name+"",C,b,k,f,T=`footer {\r
        padding: 20px;\r
        background-color: #333;\r
        color: white;\r
        text-align: center;\r
        margin-top: 20px;\r
      }\r
      a {\r
        color: #0af;\r
      }`;return{c(){e=m("footer"),a=m("div"),n=m("p"),c=v("Contact me via email at "),r=m("a"),E=v(p),P=w(),o=m("p"),S=v("© 2024 "),C=v(_),b=v(". All Rights Reserved."),k=w(),f=m("style"),f.textContent=T,this.h()},l(s){e=d(s,"FOOTER",{});var l=u(e);a=d(l,"DIV",{class:!0});var R=u(a);n=d(R,"P",{});var y=u(n);c=g(y,"Contact me via email at "),r=d(y,"A",{href:!0});var j=u(r);E=g(j,p),j.forEach(h),y.forEach(h),P=D(R),o=d(R,"P",{});var A=u(o);S=g(A,"© 2024 "),C=g(A,_),b=g(A,". All Rights Reserved."),A.forEach(h),R.forEach(h),k=D(l),f=d(l,"STYLE",{"data-svelte-h":!0}),Y(f)!=="svelte-mn9ht6"&&(f.textContent=T),l.forEach(h),this.h()},h(){O(r,"href",x="mailto:"+i[0].email),O(a,"class","footer-content")},m(s,l){z(s,e,l),t(e,a),t(a,n),t(n,c),t(n,r),t(r,E),t(a,P),t(a,o),t(o,S),t(o,C),t(o,b),t(e,k),t(e,f)},p(s,[l]){l&1&&p!==(p=s[0].email+"")&&F(E,p),l&1&&x!==(x="mailto:"+s[0].email)&&O(r,"href",x),l&1&&_!==(_=s[0].name+"")&&F(C,_)},i:q,o:q,d(s){s&&h(e)}}}function G(i,e,a){let{details:n={}}=e;return i.$$set=c=>{"details"in c&&a(0,n=c.details)},[n]}class K extends L{constructor(e){super(),V(this,e,G,B,I,{details:0})}}export{K as component};
