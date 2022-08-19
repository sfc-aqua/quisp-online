(function(_){typeof define=="function"&&define.amd?define(_):_()})(function(){"use strict";function _(){}function ce(e){return e()}function ue(){return Object.create(null)}function H(e){e.forEach(ce)}function de(e){return typeof e=="function"}function N(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function $e(e){return Object.keys(e).length===0}function Ne(e,...t){if(e==null)return _;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Se(e,t,n){e.$$.on_destroy.push(Ne(t,n))}function g(e,t){e.appendChild(t)}function y(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function k(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function $(){return E(" ")}function ne(){return E("")}function S(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function L(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Le(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t,n){e.classList[n?"add":"remove"](t)}function De(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,r,t),o}let q;function z(e){q=e}function pe(){if(!q)throw new Error("Function called outside component initialization");return q}function Je(e){pe().$$.on_mount.push(e)}function xe(){const e=pe();return(t,n,{cancelable:r=!1}={})=>{const o=e.$$.callbacks[t];if(o){const i=De(t,n,{cancelable:r});return o.slice().forEach(s=>{s.call(e,i)}),!i.defaultPrevented}return!0}}const R=[],X=[],Z=[],me=[],Be=Promise.resolve();let re=!1;function Ie(){re||(re=!0,Be.then(he))}function oe(e){Z.push(e)}const ie=new Set;let Q=0;function he(){const e=q;do{for(;Q<R.length;){const t=R[Q];Q++,z(t),He(t.$$)}for(z(null),R.length=0,Q=0;X.length;)X.pop()();for(let t=0;t<Z.length;t+=1){const n=Z[t];ie.has(n)||(ie.add(n),n())}Z.length=0}while(R.length);for(;me.length;)me.pop()();re=!1,ie.clear(),z(e)}function He(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(oe)}}const Y=new Set;let D;function se(){D={r:0,c:[],p:D}}function ae(){D.r||H(D.c),D=D.p}function C(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function A(e,t,n,r){if(e&&e.o){if(Y.has(e))return;Y.add(e),D.c.push(()=>{Y.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function M(e){e&&e.c()}function J(e,t,n,r){const{fragment:o,on_mount:i,on_destroy:s,after_update:l}=e.$$;o&&o.m(t,n),r||oe(()=>{const a=i.map(ce).filter(de);s?s.push(...a):H(a),e.$$.on_mount=[]}),l.forEach(oe)}function x(e,t){const n=e.$$;n.fragment!==null&&(H(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function We(e,t){e.$$.dirty[0]===-1&&(R.push(e),Ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(e,t,n,r,o,i,s,l=[-1]){const a=q;z(e);const f=e.$$={fragment:null,ctx:null,props:i,update:_,not_equal:o,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ue(),dirty:l,skip_bound:!1,root:t.target||a.$$.root};s&&s(f.root);let c=!1;if(f.ctx=n?n(e,t.props||{},(h,j,...w)=>{const p=w.length?w[0]:j;return f.ctx&&o(f.ctx[h],f.ctx[h]=p)&&(!f.skip_bound&&f.bound[h]&&f.bound[h](p),c&&We(e,h)),j}):[],f.update(),c=!0,H(f.before_update),f.fragment=r?r(f.ctx):!1,t.target){if(t.hydrate){const h=Le(t.target);f.fragment&&f.fragment.l(h),h.forEach(b)}else f.fragment&&f.fragment.c();t.intro&&C(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),he()}z(a)}class I{$destroy(){x(this,1),this.$destroy=_}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!$e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Me=[".","..","home","tmp","dev","proc","images"],K=e=>FS.readdir(e).filter(t=>!Me.includes(t)),Ue=e=>FS.isDir(FS.lstat(e).mode),je=e=>FS.readFile(e,{encoding:"utf8"}),qe=e=>{const t=FS.readFile(e,{encoding:"utf8"}),n="application/text";return URL.createObjectURL(new Blob([t],{type:n}))},ze=e=>e.endsWith(".png")?"image/png":e.endsWith(".gif")?"image/gif":e.endsWith(".svg")?"image/svg+xml":e.endsWith(".jpg")||e.endsWith(".jpeg")?"image/jpeg":e.endsWith(".jsonl")?"application/x-ndjson":"text/plain",U=[];function Re(e,t=_){let n;const r=new Set;function o(l){if(N(e,l)&&(e=l,n)){const a=!U.length;for(const f of r)f[1](),U.push(f,e);if(a){for(let f=0;f<U.length;f+=2)U[f][0](U[f+1]);U.length=0}}}function i(l){o(l(e))}function s(l,a=_){const f=[l,a];return r.add(f),r.size===1&&(n=t(o)||_),l(e),()=>{r.delete(f),r.size===0&&(n(),n=null)}}return{set:o,update:i,subscribe:s}}const le=Re([]);function Ke(e){let t,n,r,o,i;return{c(){t=k("li"),n=E("\u{1F4C4} "),r=E(e[0])},m(s,l){y(s,t,l),g(t,n),g(t,r),o||(i=S(t,"click",e[3]),o=!0)},p(s,l){l&1&&W(r,s[0])},d(s){s&&b(t),o=!1,i()}}}function Ve(e){let t,n,r,o,i;return{c(){t=k("li"),n=E("\u{1F4C1} "),r=E(e[0])},m(s,l){y(s,t,l),g(t,n),g(t,r),o||(i=S(t,"click",e[2]),o=!0)},p(s,l){l&1&&W(r,s[0])},d(s){s&&b(t),o=!1,i()}}}function Ge(e){let t;function n(i,s){return i[1]?Ve:Ke}let r=n(e),o=r(e);return{c(){o.c(),t=ne()},m(i,s){o.m(i,s),y(i,t,s)},p(i,[s]){r===(r=n(i))&&o?o.p(i,s):(o.d(1),o=r(i),o&&(o.c(),o.m(t.parentNode,t)))},i:_,o:_,d(i){o.d(i),i&&b(t)}}}function Xe(e,t,n){let r,{pathname:o}=t,{abspath:i}=t;const s=xe(),l=()=>s("move",o),a=()=>{le.update(f=>f.concat({path:i}))};return e.$$set=f=>{"pathname"in f&&n(0,o=f.pathname),"abspath"in f&&n(4,i=f.abspath)},e.$$.update=()=>{e.$$.dirty&16&&n(1,r=Ue(i))},[o,r,l,a,i]}class Ze extends I{constructor(t){super(),B(this,t,Xe,Ge,N,{pathname:0,abspath:4})}}function ge(e,t,n){const r=e.slice();return r[7]=t[n],r}function be(e){let t,n;return t=new Ze({props:{abspath:PATH.join(e[0],e[7]),pathname:e[7]}}),t.$on("move",function(){de(e[3](e[7]))&&e[3](e[7]).apply(this,arguments)}),{c(){M(t.$$.fragment)},m(r,o){J(t,r,o),n=!0},p(r,o){e=r;const i={};o&5&&(i.abspath=PATH.join(e[0],e[7])),o&4&&(i.pathname=e[7]),t.$set(i)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){x(t,r)}}}function Qe(e){let t,n,r,o,i,s,l,a,f,c,h,j,w,p,P,F=e[2],m=[];for(let u=0;u<F.length;u+=1)m[u]=be(ge(e,F,u));const fe=u=>A(m[u],1,1,()=>{m[u]=null});return{c(){t=k("h1"),n=E(e[0]),r=$(),o=k("button"),i=E("back"),l=$(),a=k("button"),f=E("parent"),h=$(),j=k("ul");for(let u=0;u<m.length;u+=1)m[u].c();o.disabled=s=e[1].length===0,a.disabled=c=e[0]==="/"},m(u,d){y(u,t,d),g(t,n),y(u,r,d),y(u,o,d),g(o,i),y(u,l,d),y(u,a,d),g(a,f),y(u,h,d),y(u,j,d);for(let v=0;v<m.length;v+=1)m[v].m(j,null);w=!0,p||(P=[S(o,"click",e[4]),S(a,"click",e[5])],p=!0)},p(u,[d]){if((!w||d&1)&&W(n,u[0]),(!w||d&2&&s!==(s=u[1].length===0))&&(o.disabled=s),(!w||d&1&&c!==(c=u[0]==="/"))&&(a.disabled=c),d&13){F=u[2];let v;for(v=0;v<F.length;v+=1){const Fe=ge(u,F,v);m[v]?(m[v].p(Fe,d),C(m[v],1)):(m[v]=be(Fe),m[v].c(),C(m[v],1),m[v].m(j,null))}for(se(),v=F.length;v<m.length;v+=1)fe(v);ae()}},i(u){if(!w){for(let d=0;d<F.length;d+=1)C(m[d]);w=!0}},o(u){m=m.filter(Boolean);for(let d=0;d<m.length;d+=1)A(m[d]);w=!1},d(u){u&&b(t),u&&b(r),u&&b(o),u&&b(l),u&&b(a),u&&b(h),u&&b(j),te(m,u),p=!1,H(P)}}}function Ye(e,t,n){let r,o,i="/",s=[],l=K(i);const a=()=>{s.length!==0&&(n(0,i=s.pop()),n(1,s),n(0,i),n(2,l=K(i)))},f=()=>{s.push(i),n(1,s),n(0,i),n(0,i=PATH.join(i,"..")),n(2,l=K(i))};return e.$$.update=()=>{e.$$.dirty&3&&n(3,o=c=>()=>{s.push(i),n(1,s),n(0,i),n(0,i=PATH.join(i,c)),n(2,l=K(i))}),e.$$.dirty&1&&n(6,r=()=>{n(2,l=K(i))}),e.$$.dirty&64&&setInterval(r,1e3)},[i,s,l,o,a,f,r]}class et extends I{constructor(t){super(),B(this,t,Ye,Qe,N,{})}}function ye(e){return e===null?"null":typeof e}function _e(e){return!!e&&typeof e=="object"}function we(e){if(e===void 0)return"";if(e===null||typeof e=="object"&&!e.constructor)return"Object";var t=/function ([^(]*)/.exec(e.constructor.toString());return t&&t.length>1?t[1]:""}function ve(e,t,n){return e==="null"||e==="undefined"?e:(e!=="string"&&e!=="stringifiable"||(n='"'+n.replace(/"/g,'\\"')+'"'),e==="function"?t.toString().replace(/[\r\n]/g,"").replace(/\{.*\}/,"")+"{\u2026}":n)}function ke(e){var t="";return _e(e)?(t=we(e),Array.isArray(e)&&(t+="["+e.length+"]")):t=ve(ye(e),e,e),t}function T(e){return"json-formatter-"+e}function O(e,t,n){var r=document.createElement(e);return t&&r.classList.add(T(t)),n!==void 0&&(n instanceof Node?r.appendChild(n):r.appendChild(document.createTextNode(String(n)))),r}(function(e){if(e&&typeof window<"u"){var t=document.createElement("style");t.setAttribute("media","screen"),t.innerHTML=e,document.head.appendChild(t)}})(`.json-formatter-row {
  font-family: monospace;
}
.json-formatter-row,
.json-formatter-row a,
.json-formatter-row a:hover {
  color: black;
  text-decoration: none;
}
.json-formatter-row .json-formatter-row {
  margin-left: 1rem;
}
.json-formatter-row .json-formatter-children.json-formatter-empty {
  opacity: 0.5;
  margin-left: 1rem;
}
.json-formatter-row .json-formatter-children.json-formatter-empty:after {
  display: none;
}
.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {
  content: "No properties";
}
.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {
  content: "[]";
}
.json-formatter-row .json-formatter-string,
.json-formatter-row .json-formatter-stringifiable {
  color: green;
  white-space: pre;
  word-wrap: break-word;
}
.json-formatter-row .json-formatter-number {
  color: blue;
}
.json-formatter-row .json-formatter-boolean {
  color: red;
}
.json-formatter-row .json-formatter-null {
  color: #855A00;
}
.json-formatter-row .json-formatter-undefined {
  color: #ca0b69;
}
.json-formatter-row .json-formatter-function {
  color: #FF20ED;
}
.json-formatter-row .json-formatter-date {
  background-color: rgba(0, 0, 0, 0.05);
}
.json-formatter-row .json-formatter-url {
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}
.json-formatter-row .json-formatter-bracket {
  color: blue;
}
.json-formatter-row .json-formatter-key {
  color: #00008B;
  padding-right: 0.2rem;
}
.json-formatter-row .json-formatter-toggler-link {
  cursor: pointer;
}
.json-formatter-row .json-formatter-toggler {
  line-height: 1.2rem;
  font-size: 0.7rem;
  vertical-align: middle;
  opacity: 0.6;
  cursor: pointer;
  padding-right: 0.2rem;
}
.json-formatter-row .json-formatter-toggler:after {
  display: inline-block;
  transition: transform 100ms ease-in;
  content: "\u25BA";
}
.json-formatter-row > a > .json-formatter-preview-text {
  opacity: 0;
  transition: opacity 0.15s ease-in;
  font-style: italic;
}
.json-formatter-row:hover > a > .json-formatter-preview-text {
  opacity: 0.6;
}
.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {
  transform: rotate(90deg);
}
.json-formatter-row.json-formatter-open > .json-formatter-children:after {
  display: inline-block;
}
.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {
  display: none;
}
.json-formatter-row.json-formatter-open.json-formatter-empty:after {
  display: block;
}
.json-formatter-dark.json-formatter-row {
  font-family: monospace;
}
.json-formatter-dark.json-formatter-row,
.json-formatter-dark.json-formatter-row a,
.json-formatter-dark.json-formatter-row a:hover {
  color: white;
  text-decoration: none;
}
.json-formatter-dark.json-formatter-row .json-formatter-row {
  margin-left: 1rem;
}
.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {
  opacity: 0.5;
  margin-left: 1rem;
}
.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {
  display: none;
}
.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {
  content: "No properties";
}
.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {
  content: "[]";
}
.json-formatter-dark.json-formatter-row .json-formatter-string,
.json-formatter-dark.json-formatter-row .json-formatter-stringifiable {
  color: #31F031;
  white-space: pre;
  word-wrap: break-word;
}
.json-formatter-dark.json-formatter-row .json-formatter-number {
  color: #66C2FF;
}
.json-formatter-dark.json-formatter-row .json-formatter-boolean {
  color: #EC4242;
}
.json-formatter-dark.json-formatter-row .json-formatter-null {
  color: #EEC97D;
}
.json-formatter-dark.json-formatter-row .json-formatter-undefined {
  color: #ef8fbe;
}
.json-formatter-dark.json-formatter-row .json-formatter-function {
  color: #FD48CB;
}
.json-formatter-dark.json-formatter-row .json-formatter-date {
  background-color: rgba(255, 255, 255, 0.05);
}
.json-formatter-dark.json-formatter-row .json-formatter-url {
  text-decoration: underline;
  color: #027BFF;
  cursor: pointer;
}
.json-formatter-dark.json-formatter-row .json-formatter-bracket {
  color: #9494FF;
}
.json-formatter-dark.json-formatter-row .json-formatter-key {
  color: #23A0DB;
  padding-right: 0.2rem;
}
.json-formatter-dark.json-formatter-row .json-formatter-toggler-link {
  cursor: pointer;
}
.json-formatter-dark.json-formatter-row .json-formatter-toggler {
  line-height: 1.2rem;
  font-size: 0.7rem;
  vertical-align: middle;
  opacity: 0.6;
  cursor: pointer;
  padding-right: 0.2rem;
}
.json-formatter-dark.json-formatter-row .json-formatter-toggler:after {
  display: inline-block;
  transition: transform 100ms ease-in;
  content: "\u25BA";
}
.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {
  opacity: 0;
  transition: opacity 0.15s ease-in;
  font-style: italic;
}
.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {
  opacity: 0.6;
}
.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {
  transform: rotate(90deg);
}
.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {
  display: inline-block;
}
.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {
  display: none;
}
.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {
  display: block;
}
`);var tt=/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/,nt=/\d{2}:\d{2}:\d{2} GMT-\d{4}/,rt=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,ee=window.requestAnimationFrame||function(e){return e(),0},V={hoverPreviewEnabled:!1,hoverPreviewArrayCount:100,hoverPreviewFieldCount:5,animateOpen:!0,animateClose:!0,theme:null,useToJSON:!0,sortPropertiesBy:null},ot=function(){function e(t,n,r,o){n===void 0&&(n=1),r===void 0&&(r=V),this.json=t,this.open=n,this.config=r,this.key=o,this._isOpen=null,this.config.hoverPreviewEnabled===void 0&&(this.config.hoverPreviewEnabled=V.hoverPreviewEnabled),this.config.hoverPreviewArrayCount===void 0&&(this.config.hoverPreviewArrayCount=V.hoverPreviewArrayCount),this.config.hoverPreviewFieldCount===void 0&&(this.config.hoverPreviewFieldCount=V.hoverPreviewFieldCount),this.config.useToJSON===void 0&&(this.config.useToJSON=V.useToJSON),this.key===""&&(this.key='""')}return Object.defineProperty(e.prototype,"isOpen",{get:function(){return this._isOpen!==null?this._isOpen:this.open>0},set:function(t){this._isOpen=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isDate",{get:function(){return this.json instanceof Date||this.type==="string"&&(tt.test(this.json)||rt.test(this.json)||nt.test(this.json))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isUrl",{get:function(){return this.type==="string"&&this.json.indexOf("http")===0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isArray",{get:function(){return Array.isArray(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isObject",{get:function(){return _e(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isEmptyObject",{get:function(){return!this.keys.length&&!this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isEmpty",{get:function(){return this.isEmptyObject||this.keys&&!this.keys.length&&this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useToJSON",{get:function(){return this.config.useToJSON&&this.type==="stringifiable"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasKey",{get:function(){return this.key!==void 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"constructorName",{get:function(){return we(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this.config.useToJSON&&this.json&&this.json.toJSON?"stringifiable":ye(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"keys",{get:function(){if(this.isObject){var t=Object.keys(this.json);return!this.isArray&&this.config.sortPropertiesBy?t.sort(this.config.sortPropertiesBy):t}return[]},enumerable:!0,configurable:!0}),e.prototype.toggleOpen=function(){this.isOpen=!this.isOpen,this.element&&(this.isOpen?this.appendChildren(this.config.animateOpen):this.removeChildren(this.config.animateClose),this.element.classList.toggle(T("open")))},e.prototype.openAtDepth=function(t){t===void 0&&(t=1),t<0||(this.open=t,this.isOpen=t!==0,this.element&&(this.removeChildren(!1),t===0?this.element.classList.remove(T("open")):(this.appendChildren(this.config.animateOpen),this.element.classList.add(T("open")))))},e.prototype.getInlinepreview=function(){var t=this;if(this.isArray)return this.json.length>this.config.hoverPreviewArrayCount?"Array["+this.json.length+"]":"["+this.json.map(ke).join(", ")+"]";var n=this.keys,r=n.slice(0,this.config.hoverPreviewFieldCount).map(function(i){return i+":"+ke(t.json[i])}),o=n.length>=this.config.hoverPreviewFieldCount?"\u2026":"";return"{"+r.join(", ")+o+"}"},e.prototype.render=function(){this.element=O("div","row");var t=this.isObject?O("a","toggler-link"):O("span");if(this.isObject&&!this.useToJSON&&t.appendChild(O("span","toggler")),this.hasKey&&t.appendChild(O("span","key",this.key+":")),this.isObject&&!this.useToJSON){var n=O("span","value"),r=O("span"),o=O("span","constructor-name",this.constructorName);if(r.appendChild(o),this.isArray){var i=O("span");i.appendChild(O("span","bracket","[")),i.appendChild(O("span","number",this.json.length)),i.appendChild(O("span","bracket","]")),r.appendChild(i)}n.appendChild(r),t.appendChild(n)}else{(n=this.isUrl?O("a"):O("span")).classList.add(T(this.type)),this.isDate&&n.classList.add(T("date")),this.isUrl&&(n.classList.add(T("url")),n.setAttribute("href",this.json));var s=ve(this.type,this.json,this.useToJSON?this.json.toJSON():this.json);n.appendChild(document.createTextNode(s)),t.appendChild(n)}if(this.isObject&&this.config.hoverPreviewEnabled){var l=O("span","preview-text");l.appendChild(document.createTextNode(this.getInlinepreview())),t.appendChild(l)}var a=O("div","children");return this.isObject&&a.classList.add(T("object")),this.isArray&&a.classList.add(T("array")),this.isEmpty&&a.classList.add(T("empty")),this.config&&this.config.theme&&this.element.classList.add(T(this.config.theme)),this.isOpen&&this.element.classList.add(T("open")),this.element.appendChild(t),this.element.appendChild(a),this.isObject&&this.isOpen&&this.appendChildren(),this.isObject&&!this.useToJSON&&t.addEventListener("click",this.toggleOpen.bind(this)),this.element},e.prototype.appendChildren=function(t){var n=this;t===void 0&&(t=!1);var r=this.element.querySelector("div."+T("children"));if(r&&!this.isEmpty)if(t){var o=0,i=function(){var s=n.keys[o],l=new e(n.json[s],n.open-1,n.config,s);r.appendChild(l.render()),(o+=1)<n.keys.length&&(o>10?i():ee(i))};ee(i)}else this.keys.forEach(function(s){var l=new e(n.json[s],n.open-1,n.config,s);r.appendChild(l.render())})},e.prototype.removeChildren=function(t){t===void 0&&(t=!1);var n=this.element.querySelector("div."+T("children"));if(t){var r=0,o=function(){n&&n.children.length&&(n.removeChild(n.children[0]),(r+=1)>10?o():ee(o))};ee(o)}else n&&(n.innerHTML="")},e}();const Ct="";function Ce(e,t,n){const r=e.slice();return r[7]=t[n],r[9]=n,r}function Oe(e){let t,n=e[7]+"",r,o,i;return{c(){t=k("div"),r=E(n),L(t,"class","svelte-2pbh85"),G(t,"selected",e[9]==e[2])},m(s,l){y(s,t,l),g(t,r),o||(i=S(t,"click",e[4](e[9])),o=!0)},p(s,l){e=s,l&4&&G(t,"selected",e[9]==e[2])},d(s){s&&b(t),o=!1,i()}}}function Ee(e){let t,n;return{c(){t=k("div"),n=E(e[0]),L(t,"class","json-view svelte-2pbh85")},m(r,o){y(r,t,o),g(t,n),e[6](t)},p(r,o){o&1&&W(n,r[0])},d(r){r&&b(t),e[6](null)}}}function it(e){let t,n,r=e[3],o=[];for(let s=0;s<r.length;s+=1)o[s]=Oe(Ce(e,r,s));let i=e[0]&&Ee(e);return{c(){for(let s=0;s<o.length;s+=1)o[s].c();t=$(),i&&i.c(),n=ne()},m(s,l){for(let a=0;a<o.length;a+=1)o[a].m(s,l);y(s,t,l),i&&i.m(s,l),y(s,n,l)},p(s,[l]){if(l&28){r=s[3];let a;for(a=0;a<r.length;a+=1){const f=Ce(s,r,a);o[a]?o[a].p(f,l):(o[a]=Oe(f),o[a].c(),o[a].m(t.parentNode,t))}for(;a<o.length;a+=1)o[a].d(1);o.length=r.length}s[0]?i?i.p(s,l):(i=Ee(s),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i:_,o:_,d(s){te(o,s),s&&b(t),i&&i.d(s),s&&b(n)}}}function st(e,t,n){let{abspath:r}=t,o=je(r).split(`
`),i=null,s=-1,l;const a=c=>()=>{console.log(c,o[c]),n(0,i=o[c]),n(2,s=c)};function f(c){X[c?"unshift":"push"](()=>{l=c,n(1,l)})}return e.$$set=c=>{"abspath"in c&&n(5,r=c.abspath)},e.$$.update=()=>{if(e.$$.dirty&3&&l!=null&&i!=null){const c=new ot(JSON.parse(i));for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(c.render())}},[i,l,s,o,a,r,f]}class at extends I{constructor(t){super(),B(this,t,st,it,N,{abspath:5})}}function lt(e){let t;return{c(){t=E(e[0])},m(n,r){y(n,t,r)},p:_,i:_,o:_,d(n){n&&b(t)}}}function ft(e,t,n){let{abspath:r}=t,o=je(r);return e.$$set=i=>{"abspath"in i&&n(1,r=i.abspath)},[o,r]}class ct extends I{constructor(t){super(),B(this,t,ft,lt,N,{abspath:1})}}function ut(e,t,n){let{abspath:r}=t,{mimeType:o}=t;return e.$$set=i=>{"abspath"in i&&n(0,r=i.abspath),"mimeType"in i&&n(1,o=i.mimeType)},[r,o]}class dt extends I{constructor(t){super(),B(this,t,ut,null,N,{abspath:0,mimeType:1})}}const Ot="";function pt(e){let t,n;return t=new ct({props:{abspath:e[0]}}),{c(){M(t.$$.fragment)},m(r,o){J(t,r,o),n=!0},p(r,o){const i={};o&1&&(i.abspath=r[0]),t.$set(i)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){x(t,r)}}}function mt(e){let t,n;return t=new at({props:{abspath:e[0]}}),{c(){M(t.$$.fragment)},m(r,o){J(t,r,o),n=!0},p(r,o){const i={};o&1&&(i.abspath=r[0]),t.$set(i)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){x(t,r)}}}function ht(e){let t,n;return t=new dt({props:{abspath:e[0],mimeType:e[3]}}),{c(){M(t.$$.fragment)},m(r,o){J(t,r,o),n=!0},p(r,o){const i={};o&1&&(i.abspath=r[0]),t.$set(i)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){x(t,r)}}}function jt(e){let t,n,r,o,i,s,l,a,f,c,h,j,w,p,P;const F=[ht,mt,pt],m=[];function fe(u,d){return u[3].startsWith("image/")?0:u[3]=="application/x-ndjson"?1:2}return h=fe(e),j=m[h]=F[h](e),{c(){t=k("div"),n=k("div"),r=k("button"),r.textContent="x",o=$(),i=k("div"),s=E(e[0]),l=$(),a=k("a"),a.textContent="download",f=$(),c=k("div"),j.c(),L(a,"class","download-link"),L(n,"class","panel-header svelte-13wkav8"),L(c,"class","content svelte-13wkav8"),L(t,"class","panel file-viewer svelte-13wkav8")},m(u,d){y(u,t,d),g(t,n),g(n,r),g(n,o),g(n,i),g(i,s),g(n,l),g(n,a),e[5](a),g(t,f),g(t,c),m[h].m(c,null),w=!0,p||(P=S(r,"click",e[2]),p=!0)},p(u,[d]){(!w||d&1)&&W(s,u[0]),j.p(u,d)},i(u){w||(C(j),w=!0)},o(u){A(j),w=!1},d(u){u&&b(t),e[5](null),m[h].d(),p=!1,P()}}}function gt(e,t,n){let{abspath:r}=t,{index:o}=t,i;const s=()=>{le.update(f=>f.filter(c=>c.path!==r))},l=ze(r);Je(()=>{n(1,i.href=qe(r),i),i.setAttribute("download",PATH.basename(r))});function a(f){X[f?"unshift":"push"](()=>{i=f,n(1,i)})}return e.$$set=f=>{"abspath"in f&&n(0,r=f.abspath),"index"in f&&n(4,o=f.index)},[r,i,s,l,o,a]}class bt extends I{constructor(t){super(),B(this,t,gt,jt,N,{abspath:0,index:4})}}const Et="";function Te(e,t,n){const r=e.slice();return r[3]=t[n],r[5]=n,r}function yt(e){let t;return{c(){t=E("File Explorer")},m(n,r){y(n,t,r)},p:_,i:_,o:_,d(n){n&&b(t)}}}function _t(e){let t,n,r,o;t=new et({});let i=e[1],s=[];for(let a=0;a<i.length;a+=1)s[a]=Ae(Te(e,i,a));const l=a=>A(s[a],1,1,()=>{s[a]=null});return{c(){M(t.$$.fragment),n=$();for(let a=0;a<s.length;a+=1)s[a].c();r=ne()},m(a,f){J(t,a,f),y(a,n,f);for(let c=0;c<s.length;c+=1)s[c].m(a,f);y(a,r,f),o=!0},p(a,f){if(f&2){i=a[1];let c;for(c=0;c<i.length;c+=1){const h=Te(a,i,c);s[c]?(s[c].p(h,f),C(s[c],1)):(s[c]=Ae(h),s[c].c(),C(s[c],1),s[c].m(r.parentNode,r))}for(se(),c=i.length;c<s.length;c+=1)l(c);ae()}},i(a){if(!o){C(t.$$.fragment,a);for(let f=0;f<i.length;f+=1)C(s[f]);o=!0}},o(a){A(t.$$.fragment,a),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)A(s[f]);o=!1},d(a){x(t,a),a&&b(n),te(s,a),a&&b(r)}}}function Ae(e){let t,n;return t=new bt({props:{abspath:e[3].path,index:e[5]}}),{c(){M(t.$$.fragment)},m(r,o){J(t,r,o),n=!0},p(r,o){const i={};o&2&&(i.abspath=r[3].path),t.$set(i)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){x(t,r)}}}function wt(e){let t,n,r=e[0]?"close":"open",o,i,s,l,a,f,c;const h=[_t,yt],j=[];function w(p,P){return p[0]?0:1}return s=w(e),l=j[s]=h[s](e),{c(){t=k("div"),n=k("button"),o=E(r),i=$(),l.c(),L(t,"class","file-explorer panel svelte-8di3av"),G(t,"open",e[0])},m(p,P){y(p,t,P),g(t,n),g(n,o),g(t,i),j[s].m(t,null),a=!0,f||(c=S(n,"click",e[2]),f=!0)},p(p,[P]){(!a||P&1)&&r!==(r=p[0]?"close":"open")&&W(o,r);let F=s;s=w(p),s===F?j[s].p(p,P):(se(),A(j[F],1,1,()=>{j[F]=null}),ae(),l=j[s],l?l.p(p,P):(l=j[s]=h[s](p),l.c()),C(l,1),l.m(t,null)),P&1&&G(t,"open",p[0])},i(p){a||(C(l),a=!0)},o(p){A(l),a=!1},d(p){p&&b(t),j[s].d(),f=!1,c()}}}function vt(e,t,n){let r;Se(e,le,s=>n(1,r=s));let o=!1;return[o,r,()=>n(0,o=!o)]}class kt extends I{constructor(t){super(),B(this,t,vt,wt,N,{})}}const Pe=document.createElement("DIV");document.body.appendChild(Pe),setTimeout(()=>{new kt({target:Pe})},1e3)});
