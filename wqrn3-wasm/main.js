(function(y){typeof define=="function"&&define.amd?define(y):y()})(function(){"use strict";function y(){}function re(e){return e()}function se(){return Object.create(null)}function O(e){e.forEach(re)}function ce(e){return typeof e=="function"}function A(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ve(e){return Object.keys(e).length===0}function je(e,...t){if(e==null)return y;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ee(e,t,n){e.$$.on_destroy.push(je(t,n))}function _(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function Q(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function F(){return v(" ")}function Y(){return v("")}function S(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function B(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Te(e){return Array.from(e.childNodes)}function R(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ue(e,t,n){e.classList[n?"add":"remove"](t)}function Ce(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,l,t),o}let M;function U(e){M=e}function fe(){if(!M)throw new Error("Function called outside component initialization");return M}function Fe(e){fe().$$.on_mount.push(e)}function Ae(){const e=fe();return(t,n,{cancelable:l=!1}={})=>{const o=e.$$.callbacks[t];if(o){const i=Ce(t,n,{cancelable:l});return o.slice().forEach(r=>{r.call(e,i)}),!i.defaultPrevented}return!0}}const q=[],Z=[],X=[],ae=[],De=Promise.resolve();let x=!1;function Le(){x||(x=!0,De.then(pe))}function ee(e){X.push(e)}const te=new Set;let G=0;function pe(){const e=M;do{for(;G<q.length;){const t=q[G];G++,U(t),Se(t.$$)}for(U(null),q.length=0,G=0;Z.length;)Z.pop()();for(let t=0;t<X.length;t+=1){const n=X[t];te.has(n)||(te.add(n),n())}X.length=0}while(q.length);for(;ae.length;)ae.pop()();x=!1,te.clear(),U(e)}function Se(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ee)}}const K=new Set;let I;function ne(){I={r:0,c:[],p:I}}function le(){I.r||O(I.c),I=I.p}function k(e,t){e&&e.i&&(K.delete(e),e.i(t))}function j(e,t,n,l){if(e&&e.o){if(K.has(e))return;K.add(e),I.c.push(()=>{K.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function J(e){e&&e.c()}function N(e,t,n,l){const{fragment:o,on_mount:i,on_destroy:r,after_update:u}=e.$$;o&&o.m(t,n),l||ee(()=>{const c=i.map(re).filter(ce);r?r.push(...c):O(c),e.$$.on_mount=[]}),u.forEach(ee)}function W(e,t){const n=e.$$;n.fragment!==null&&(O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ie(e,t){e.$$.dirty[0]===-1&&(q.push(e),Le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(e,t,n,l,o,i,r,u=[-1]){const c=M;U(e);const s=e.$$={fragment:null,ctx:null,props:i,update:y,not_equal:o,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:se(),dirty:u,skip_bound:!1,root:t.target||c.$$.root};r&&r(s.root);let f=!1;if(s.ctx=n?n(e,t.props||{},(d,T,...w)=>{const E=w.length?w[0]:T;return s.ctx&&o(s.ctx[d],s.ctx[d]=E)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](E),f&&Ie(e,d)),T}):[],s.update(),f=!0,O(s.before_update),s.fragment=l?l(s.ctx):!1,t.target){if(t.hydrate){const d=Te(t.target);s.fragment&&s.fragment.l(d),d.forEach(b)}else s.fragment&&s.fragment.c();t.intro&&k(e.$$.fragment),N(e,t.target,t.anchor,t.customElement),pe()}U(c)}class H{$destroy(){W(this,1),this.$destroy=y}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!ve(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ne=[".","..","home","tmp","dev","proc","images"],V=e=>FS.readdir(e).filter(t=>!Ne.includes(t)),We=e=>FS.isDir(FS.lstat(e).mode),de=e=>FS.readFile(e,{encoding:"utf8"}),ze=e=>{const t=FS.readFile(e,{encoding:"utf8"}),n="application/text";return URL.createObjectURL(new Blob([t],{type:n}))},He=e=>e.endsWith(".png")?"image/png":e.endsWith(".gif")?"image/gif":e.endsWith(".svg")?"image/svg+xml":e.endsWith(".jpg")||e.endsWith(".jpeg")?"image/jpeg":e.endsWith(".jsonl")?"application/x-ndjson":"text/plain",P=[];function Oe(e,t=y){let n;const l=new Set;function o(u){if(A(e,u)&&(e=u,n)){const c=!P.length;for(const s of l)s[1](),P.push(s,e);if(c){for(let s=0;s<P.length;s+=2)P[s][0](P[s+1]);P.length=0}}}function i(u){o(u(e))}function r(u,c=y){const s=[u,c];return l.add(s),l.size===1&&(n=t(o)||y),u(e),()=>{l.delete(s),l.size===0&&(n(),n=null)}}return{set:o,update:i,subscribe:r}}const oe=Oe([]);function Be(e){let t,n,l,o,i;return{c(){t=$("li"),n=v("\u{1F4C4} "),l=v(e[0])},m(r,u){g(r,t,u),_(t,n),_(t,l),o||(i=S(t,"click",e[3]),o=!0)},p(r,u){u&1&&R(l,r[0])},d(r){r&&b(t),o=!1,i()}}}function Re(e){let t,n,l,o,i;return{c(){t=$("li"),n=v("\u{1F4C1} "),l=v(e[0])},m(r,u){g(r,t,u),_(t,n),_(t,l),o||(i=S(t,"click",e[2]),o=!0)},p(r,u){u&1&&R(l,r[0])},d(r){r&&b(t),o=!1,i()}}}function Je(e){let t;function n(i,r){return i[1]?Re:Be}let l=n(e),o=l(e);return{c(){o.c(),t=Y()},m(i,r){o.m(i,r),g(i,t,r)},p(i,[r]){l===(l=n(i))&&o?o.p(i,r):(o.d(1),o=l(i),o&&(o.c(),o.m(t.parentNode,t)))},i:y,o:y,d(i){o.d(i),i&&b(t)}}}function Pe(e,t,n){let l,{pathname:o}=t,{abspath:i}=t;const r=Ae(),u=()=>r("move",o),c=()=>{oe.update(s=>s.concat({path:i}))};return e.$$set=s=>{"pathname"in s&&n(0,o=s.pathname),"abspath"in s&&n(4,i=s.abspath)},e.$$.update=()=>{e.$$.dirty&16&&n(1,l=We(i))},[o,l,u,c,i]}class Me extends H{constructor(t){super(),z(this,t,Pe,Je,A,{pathname:0,abspath:4})}}function me(e,t,n){const l=e.slice();return l[7]=t[n],l}function _e(e){let t,n;return t=new Me({props:{abspath:PATH.join(e[0],e[7]),pathname:e[7]}}),t.$on("move",function(){ce(e[3](e[7]))&&e[3](e[7]).apply(this,arguments)}),{c(){J(t.$$.fragment)},m(l,o){N(t,l,o),n=!0},p(l,o){e=l;const i={};o&5&&(i.abspath=PATH.join(e[0],e[7])),o&4&&(i.pathname=e[7]),t.$set(i)},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){j(t.$$.fragment,l),n=!1},d(l){W(t,l)}}}function Ue(e){let t,n,l,o,i,r,u,c,s,f,d,T,w,E,D,C=e[2],m=[];for(let a=0;a<C.length;a+=1)m[a]=_e(me(e,C,a));const ie=a=>j(m[a],1,1,()=>{m[a]=null});return{c(){t=$("h1"),n=v(e[0]),l=F(),o=$("button"),i=v("back"),u=F(),c=$("button"),s=v("parent"),d=F(),T=$("ul");for(let a=0;a<m.length;a+=1)m[a].c();o.disabled=r=e[1].length===0,c.disabled=f=e[0]==="/"},m(a,h){g(a,t,h),_(t,n),g(a,l,h),g(a,o,h),_(o,i),g(a,u,h),g(a,c,h),_(c,s),g(a,d,h),g(a,T,h);for(let p=0;p<m.length;p+=1)m[p].m(T,null);w=!0,E||(D=[S(o,"click",e[4]),S(c,"click",e[5])],E=!0)},p(a,[h]){if((!w||h&1)&&R(n,a[0]),(!w||h&2&&r!==(r=a[1].length===0))&&(o.disabled=r),(!w||h&1&&f!==(f=a[0]==="/"))&&(c.disabled=f),h&13){C=a[2];let p;for(p=0;p<C.length;p+=1){const L=me(a,C,p);m[p]?(m[p].p(L,h),k(m[p],1)):(m[p]=_e(L),m[p].c(),k(m[p],1),m[p].m(T,null))}for(ne(),p=C.length;p<m.length;p+=1)ie(p);le()}},i(a){if(!w){for(let h=0;h<C.length;h+=1)k(m[h]);w=!0}},o(a){m=m.filter(Boolean);for(let h=0;h<m.length;h+=1)j(m[h]);w=!1},d(a){a&&b(t),a&&b(l),a&&b(o),a&&b(u),a&&b(c),a&&b(d),a&&b(T),Q(m,a),E=!1,O(D)}}}function qe(e,t,n){let l,o,i="/",r=[],u=V(i);const c=()=>{r.length!==0&&(n(0,i=r.pop()),n(1,r),n(0,i),n(2,u=V(i)))},s=()=>{r.push(i),n(1,r),n(0,i),n(0,i=PATH.join(i,"..")),n(2,u=V(i))};return e.$$.update=()=>{e.$$.dirty&3&&n(3,o=f=>()=>{r.push(i),n(1,r),n(0,i),n(0,i=PATH.join(i,f)),n(2,u=V(i))}),e.$$.dirty&1&&n(6,l=()=>{n(2,u=V(i))}),e.$$.dirty&64&&setInterval(l,1e3)},[i,r,u,o,c,s,l]}class Ve extends H{constructor(t){super(),z(this,t,qe,Ue,A,{})}}const ft="";function he(e,t,n){const l=e.slice();return l[4]=t[n],l[6]=n,l}function be(e){let t,n=e[4]+"",l,o,i;return{c(){t=$("div"),l=v(n)},m(r,u){g(r,t,u),_(t,l),o||(i=S(t,"click",e[2](e[6])),o=!0)},p(r,u){e=r},d(r){r&&b(t),o=!1,i()}}}function ge(e){let t,n;return{c(){t=$("div"),n=v(e[0]),B(t,"class","json-view svelte-o9at3r")},m(l,o){g(l,t,o),_(t,n)},p(l,o){o&1&&R(n,l[0])},d(l){l&&b(t)}}}function Xe(e){let t,n,l=e[1],o=[];for(let r=0;r<l.length;r+=1)o[r]=be(he(e,l,r));let i=e[0]&&ge(e);return{c(){for(let r=0;r<o.length;r+=1)o[r].c();t=F(),i&&i.c(),n=Y()},m(r,u){for(let c=0;c<o.length;c+=1)o[c].m(r,u);g(r,t,u),i&&i.m(r,u),g(r,n,u)},p(r,[u]){if(u&6){l=r[1];let c;for(c=0;c<l.length;c+=1){const s=he(r,l,c);o[c]?o[c].p(s,u):(o[c]=be(s),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=l.length}r[0]?i?i.p(r,u):(i=ge(r),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i:y,o:y,d(r){Q(o,r),r&&b(t),i&&i.d(r),r&&b(n)}}}function Ge(e,t,n){let{abspath:l}=t,o=de(l).split(`
`),i=null;const r=u=>()=>{console.log(u,o[u]),n(0,i=o[u])};return e.$$set=u=>{"abspath"in u&&n(3,l=u.abspath)},[i,o,r,l]}class Ke extends H{constructor(t){super(),z(this,t,Ge,Xe,A,{abspath:3})}}function Qe(e){let t;return{c(){t=v(e[0])},m(n,l){g(n,t,l)},p:y,i:y,o:y,d(n){n&&b(t)}}}function Ye(e,t,n){let{abspath:l}=t,o=de(l);return e.$$set=i=>{"abspath"in i&&n(1,l=i.abspath)},[o,l]}class Ze extends H{constructor(t){super(),z(this,t,Ye,Qe,A,{abspath:1})}}function xe(e,t,n){let{abspath:l}=t,{mimeType:o}=t;return e.$$set=i=>{"abspath"in i&&n(0,l=i.abspath),"mimeType"in i&&n(1,o=i.mimeType)},[l,o]}class et extends H{constructor(t){super(),z(this,t,xe,null,A,{abspath:0,mimeType:1})}}const at="";function tt(e){let t,n;return t=new Ze({props:{abspath:e[0]}}),{c(){J(t.$$.fragment)},m(l,o){N(t,l,o),n=!0},p(l,o){const i={};o&1&&(i.abspath=l[0]),t.$set(i)},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){j(t.$$.fragment,l),n=!1},d(l){W(t,l)}}}function nt(e){let t,n;return t=new Ke({props:{abspath:e[0]}}),{c(){J(t.$$.fragment)},m(l,o){N(t,l,o),n=!0},p(l,o){const i={};o&1&&(i.abspath=l[0]),t.$set(i)},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){j(t.$$.fragment,l),n=!1},d(l){W(t,l)}}}function lt(e){let t,n;return t=new et({props:{abspath:e[0],mimeType:e[3]}}),{c(){J(t.$$.fragment)},m(l,o){N(t,l,o),n=!0},p(l,o){const i={};o&1&&(i.abspath=l[0]),t.$set(i)},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){j(t.$$.fragment,l),n=!1},d(l){W(t,l)}}}function ot(e){let t,n,l,o,i,r,u,c,s,f,d,T,w,E,D,C,m;const ie=[lt,nt,tt],a=[];function h(p,L){return p[3].startsWith("image/")?0:p[3]=="application/x-ndjson"?1:2}return w=h(e),E=a[w]=ie[w](e),{c(){t=$("div"),n=$("div"),l=$("button"),l.textContent="x",o=F(),i=$("div"),r=v(e[0]),u=F(),c=$("a"),c.textContent="download",s=F(),f=$("div"),d=v(e[3]),T=F(),E.c(),B(c,"class","download-link"),B(n,"class","panel-header svelte-1oze2ua"),B(f,"class","content svelte-1oze2ua"),B(t,"class","panel file-viewer svelte-1oze2ua")},m(p,L){g(p,t,L),_(t,n),_(n,l),_(n,o),_(n,i),_(i,r),_(n,u),_(n,c),e[5](c),_(t,s),_(t,f),_(f,d),_(f,T),a[w].m(f,null),D=!0,C||(m=S(l,"click",e[2]),C=!0)},p(p,[L]){(!D||L&1)&&R(r,p[0]),E.p(p,L)},i(p){D||(k(E),D=!0)},o(p){j(E),D=!1},d(p){p&&b(t),e[5](null),a[w].d(),C=!1,m()}}}function it(e,t,n){let{abspath:l}=t,{index:o}=t,i;const r=()=>{oe.update(s=>s.filter(f=>f.path!==l))},u=He(l);Fe(()=>{n(1,i.href=ze(l),i),i.setAttribute("download",PATH.basename(l))});function c(s){Z[s?"unshift":"push"](()=>{i=s,n(1,i)})}return e.$$set=s=>{"abspath"in s&&n(0,l=s.abspath),"index"in s&&n(4,o=s.index)},[l,i,r,u,o,c]}class rt extends H{constructor(t){super(),z(this,t,it,ot,A,{abspath:0,index:4})}}const pt="";function ke(e,t,n){const l=e.slice();return l[3]=t[n],l[5]=n,l}function ye(e){let t,n,l,o;t=new Ve({});let i=e[1],r=[];for(let c=0;c<i.length;c+=1)r[c]=$e(ke(e,i,c));const u=c=>j(r[c],1,1,()=>{r[c]=null});return{c(){J(t.$$.fragment),n=F();for(let c=0;c<r.length;c+=1)r[c].c();l=Y()},m(c,s){N(t,c,s),g(c,n,s);for(let f=0;f<r.length;f+=1)r[f].m(c,s);g(c,l,s),o=!0},p(c,s){if(s&2){i=c[1];let f;for(f=0;f<i.length;f+=1){const d=ke(c,i,f);r[f]?(r[f].p(d,s),k(r[f],1)):(r[f]=$e(d),r[f].c(),k(r[f],1),r[f].m(l.parentNode,l))}for(ne(),f=i.length;f<r.length;f+=1)u(f);le()}},i(c){if(!o){k(t.$$.fragment,c);for(let s=0;s<i.length;s+=1)k(r[s]);o=!0}},o(c){j(t.$$.fragment,c),r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)j(r[s]);o=!1},d(c){W(t,c),c&&b(n),Q(r,c),c&&b(l)}}}function $e(e){let t,n;return t=new rt({props:{abspath:e[3].path,index:e[5]}}),{c(){J(t.$$.fragment)},m(l,o){N(t,l,o),n=!0},p(l,o){const i={};o&2&&(i.abspath=l[3].path),t.$set(i)},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){j(t.$$.fragment,l),n=!1},d(l){W(t,l)}}}function st(e){let t,n,l=e[0]?"close":"open",o,i,r,u,c,s=e[0]&&ye(e);return{c(){t=$("div"),n=$("button"),o=v(l),i=F(),s&&s.c(),B(t,"class","file-explorer panel svelte-8di3av"),ue(t,"open",e[0])},m(f,d){g(f,t,d),_(t,n),_(n,o),_(t,i),s&&s.m(t,null),r=!0,u||(c=S(n,"click",e[2]),u=!0)},p(f,[d]){(!r||d&1)&&l!==(l=f[0]?"close":"open")&&R(o,l),f[0]?s?(s.p(f,d),d&1&&k(s,1)):(s=ye(f),s.c(),k(s,1),s.m(t,null)):s&&(ne(),j(s,1,1,()=>{s=null}),le()),d&1&&ue(t,"open",f[0])},i(f){r||(k(s),r=!0)},o(f){j(s),r=!1},d(f){f&&b(t),s&&s.d(),u=!1,c()}}}function ct(e,t,n){let l;Ee(e,oe,r=>n(1,l=r));let o=!1;return[o,l,()=>n(0,o=!o)]}class ut extends H{constructor(t){super(),z(this,t,ct,st,A,{})}}const we=document.createElement("DIV");document.body.appendChild(we),setTimeout(()=>{new ut({target:we})},1e3)});