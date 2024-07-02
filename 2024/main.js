(function(y){typeof define=="function"&&define.amd?define(y):y()})(function(){"use strict";function y(){}function ce(e){return e()}function ue(){return Object.create(null)}function H(e){e.forEach(ce)}function de(e){return typeof e=="function"}function L(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ne(e){return Object.keys(e).length===0}function Se(e,...t){if(e==null)return y;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Le(e,t,n){e.$$.on_destroy.push(Se(t,n))}function j(e,t){e.appendChild(t)}function _(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function N(){return E(" ")}function ne(){return E("")}function $(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function S(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $e(e){return Array.from(e.childNodes)}function U(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t,n){e.classList[n?"add":"remove"](t)}function De(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,r,t),i}let q;function z(e){q=e}function pe(){if(!q)throw new Error("Function called outside component initialization");return q}function Je(e){pe().$$.on_mount.push(e)}function xe(){const e=pe();return(t,n,{cancelable:r=!1}={})=>{const i=e.$$.callbacks[t];if(i){const o=De(t,n,{cancelable:r});return i.slice().forEach(s=>{s.call(e,o)}),!o.defaultPrevented}return!0}}const R=[],X=[],Z=[],me=[],Be=Promise.resolve();let re=!1;function Ie(){re||(re=!0,Be.then(he))}function oe(e){Z.push(e)}const ie=new Set;let Q=0;function he(){const e=q;do{for(;Q<R.length;){const t=R[Q];Q++,z(t),He(t.$$)}for(z(null),R.length=0,Q=0;X.length;)X.pop()();for(let t=0;t<Z.length;t+=1){const n=Z[t];ie.has(n)||(ie.add(n),n())}Z.length=0}while(R.length);for(;me.length;)me.pop()();re=!1,ie.clear(),z(e)}function He(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(oe)}}const Y=new Set;let D;function se(){D={r:0,c:[],p:D}}function ae(){D.r||H(D.c),D=D.p}function C(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function A(e,t,n,r){if(e&&e.o){if(Y.has(e))return;Y.add(e),D.c.push(()=>{Y.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function W(e){e&&e.c()}function J(e,t,n,r){const{fragment:i,on_mount:o,on_destroy:s,after_update:l}=e.$$;i&&i.m(t,n),r||oe(()=>{const a=o.map(ce).filter(de);s?s.push(...a):H(a),e.$$.on_mount=[]}),l.forEach(oe)}function x(e,t){const n=e.$$;n.fragment!==null&&(H(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function We(e,t){e.$$.dirty[0]===-1&&(R.push(e),Ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(e,t,n,r,i,o,s,l=[-1]){const a=q;z(e);const f=e.$$={fragment:null,ctx:null,props:o,update:y,not_equal:i,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ue(),dirty:l,skip_bound:!1,root:t.target||a.$$.root};s&&s(f.root);let u=!1;if(f.ctx=n?n(e,t.props||{},(d,g,...v)=>{const m=v.length?v[0]:g;return f.ctx&&i(f.ctx[d],f.ctx[d]=m)&&(!f.skip_bound&&f.bound[d]&&f.bound[d](m),u&&We(e,d)),g}):[],f.update(),u=!0,H(f.before_update),f.fragment=r?r(f.ctx):!1,t.target){if(t.hydrate){const d=$e(t.target);f.fragment&&f.fragment.l(d),d.forEach(b)}else f.fragment&&f.fragment.c();t.intro&&C(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),he()}z(a)}class I{$destroy(){x(this,1),this.$destroy=y}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Me=[".","..","home","tmp","dev","proc","images"],K=e=>FS.readdir(e).filter(t=>!Me.includes(t)),Ue=e=>FS.isDir(FS.lstat(e).mode),je=e=>FS.readFile(e,{encoding:"utf8"}),qe=e=>{const t=FS.readFile(e,{encoding:"utf8"}),n="application/text";return URL.createObjectURL(new Blob([t],{type:n}))},ze=e=>e.endsWith(".png")?"image/png":e.endsWith(".gif")?"image/gif":e.endsWith(".svg")?"image/svg+xml":e.endsWith(".jpg")||e.endsWith(".jpeg")?"image/jpeg":e.endsWith(".jsonl")?"application/x-ndjson":"text/plain",M=[];function Re(e,t=y){let n;const r=new Set;function i(l){if(L(e,l)&&(e=l,n)){const a=!M.length;for(const f of r)f[1](),M.push(f,e);if(a){for(let f=0;f<M.length;f+=2)M[f][0](M[f+1]);M.length=0}}}function o(l){i(l(e))}function s(l,a=y){const f=[l,a];return r.add(f),r.size===1&&(n=t(i)||y),l(e),()=>{r.delete(f),r.size===0&&(n(),n=null)}}return{set:i,update:o,subscribe:s}}const le=Re([]);function Ke(e){let t,n,r,i,o;return{c(){t=w("li"),n=E("\u{1F4C4} "),r=E(e[0])},m(s,l){_(s,t,l),j(t,n),j(t,r),i||(o=$(t,"click",e[3]),i=!0)},p(s,l){l&1&&U(r,s[0])},d(s){s&&b(t),i=!1,o()}}}function Ve(e){let t,n,r,i,o;return{c(){t=w("li"),n=E("\u{1F4C1} "),r=E(e[0])},m(s,l){_(s,t,l),j(t,n),j(t,r),i||(o=$(t,"click",e[2]),i=!0)},p(s,l){l&1&&U(r,s[0])},d(s){s&&b(t),i=!1,o()}}}function Ge(e){let t;function n(o,s){return o[1]?Ve:Ke}let r=n(e),i=r(e);return{c(){i.c(),t=ne()},m(o,s){i.m(o,s),_(o,t,s)},p(o,[s]){r===(r=n(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(t.parentNode,t)))},i:y,o:y,d(o){i.d(o),o&&b(t)}}}function Xe(e,t,n){let r,{pathname:i}=t,{abspath:o}=t;const s=xe(),l=()=>s("move",i),a=()=>{le.update(f=>f.concat({path:o}))};return e.$$set=f=>{"pathname"in f&&n(0,i=f.pathname),"abspath"in f&&n(4,o=f.abspath)},e.$$.update=()=>{e.$$.dirty&16&&n(1,r=Ue(o))},[i,r,l,a,o]}class Ze extends I{constructor(t){super(),B(this,t,Xe,Ge,L,{pathname:0,abspath:4})}}function ge(e,t,n){const r=e.slice();return r[7]=t[n],r}function be(e){let t,n;return t=new Ze({props:{abspath:PATH.join(e[0],e[7]),pathname:e[7]}}),t.$on("move",function(){de(e[3](e[7]))&&e[3](e[7]).apply(this,arguments)}),{c(){W(t.$$.fragment)},m(r,i){J(t,r,i),n=!0},p(r,i){e=r;const o={};i&5&&(o.abspath=PATH.join(e[0],e[7])),i&4&&(o.pathname=e[7]),t.$set(o)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){x(t,r)}}}function Qe(e){let t,n,r,i,o,s,l,a,f,u,d,g,v,m,P,F=e[2],h=[];for(let c=0;c<F.length;c+=1)h[c]=be(ge(e,F,c));const fe=c=>A(h[c],1,1,()=>{h[c]=null});return{c(){t=w("h1"),n=E(e[0]),r=N(),i=w("button"),o=E("back"),l=N(),a=w("button"),f=E("parent"),d=N(),g=w("ul");for(let c=0;c<h.length;c+=1)h[c].c();i.disabled=s=e[1].length===0,a.disabled=u=e[0]==="/"},m(c,p){_(c,t,p),j(t,n),_(c,r,p),_(c,i,p),j(i,o),_(c,l,p),_(c,a,p),j(a,f),_(c,d,p),_(c,g,p);for(let k=0;k<h.length;k+=1)h[k].m(g,null);v=!0,m||(P=[$(i,"click",e[4]),$(a,"click",e[5])],m=!0)},p(c,[p]){if((!v||p&1)&&U(n,c[0]),(!v||p&2&&s!==(s=c[1].length===0))&&(i.disabled=s),(!v||p&1&&u!==(u=c[0]==="/"))&&(a.disabled=u),p&13){F=c[2];let k;for(k=0;k<F.length;k+=1){const Fe=ge(c,F,k);h[k]?(h[k].p(Fe,p),C(h[k],1)):(h[k]=be(Fe),h[k].c(),C(h[k],1),h[k].m(g,null))}for(se(),k=F.length;k<h.length;k+=1)fe(k);ae()}},i(c){if(!v){for(let p=0;p<F.length;p+=1)C(h[p]);v=!0}},o(c){h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)A(h[p]);v=!1},d(c){c&&b(t),c&&b(r),c&&b(i),c&&b(l),c&&b(a),c&&b(d),c&&b(g),te(h,c),m=!1,H(P)}}}function Ye(e,t,n){let r,i,o="/",s=[],l=K(o);const a=()=>{s.length!==0&&(n(0,o=s.pop()),n(1,s),n(0,o),n(2,l=K(o)))},f=()=>{s.push(o),n(1,s),n(0,o),n(0,o=PATH.join(o,"..")),n(2,l=K(o))};return e.$$.update=()=>{e.$$.dirty&3&&n(3,i=u=>()=>{s.push(o),n(1,s),n(0,o),n(0,o=PATH.join(o,u)),n(2,l=K(o))}),e.$$.dirty&1&&n(6,r=()=>{n(2,l=K(o))}),e.$$.dirty&64&&setInterval(r,1e3)},[o,s,l,i,a,f,r]}class et extends I{constructor(t){super(),B(this,t,Ye,Qe,L,{})}}function ye(e){return e===null?"null":typeof e}function _e(e){return!!e&&typeof e=="object"}function we(e){if(e===void 0)return"";if(e===null||typeof e=="object"&&!e.constructor)return"Object";var t=/function ([^(]*)/.exec(e.constructor.toString());return t&&t.length>1?t[1]:""}function ve(e,t,n){return e==="null"||e==="undefined"?e:(e!=="string"&&e!=="stringifiable"||(n='"'+n.replace(/"/g,'\\"')+'"'),e==="function"?t.toString().replace(/[\r\n]/g,"").replace(/\{.*\}/,"")+"{\u2026}":n)}function ke(e){var t="";return _e(e)?(t=we(e),Array.isArray(e)&&(t+="["+e.length+"]")):t=ve(ye(e),e,e),t}function T(e){return"json-formatter-"+e}function O(e,t,n){var r=document.createElement(e);return t&&r.classList.add(T(t)),n!==void 0&&(n instanceof Node?r.appendChild(n):r.appendChild(document.createTextNode(String(n)))),r}(function(e){if(e&&typeof window<"u"){var t=document.createElement("style");t.setAttribute("media","screen"),t.innerHTML=e,document.head.appendChild(t)}})(`.json-formatter-row {
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
`);var tt=/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/,nt=/\d{2}:\d{2}:\d{2} GMT-\d{4}/,rt=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,ee=window.requestAnimationFrame||function(e){return e(),0},V={hoverPreviewEnabled:!1,hoverPreviewArrayCount:100,hoverPreviewFieldCount:5,animateOpen:!0,animateClose:!0,theme:null,useToJSON:!0,sortPropertiesBy:null},ot=function(){function e(t,n,r,i){n===void 0&&(n=1),r===void 0&&(r=V),this.json=t,this.open=n,this.config=r,this.key=i,this._isOpen=null,this.config.hoverPreviewEnabled===void 0&&(this.config.hoverPreviewEnabled=V.hoverPreviewEnabled),this.config.hoverPreviewArrayCount===void 0&&(this.config.hoverPreviewArrayCount=V.hoverPreviewArrayCount),this.config.hoverPreviewFieldCount===void 0&&(this.config.hoverPreviewFieldCount=V.hoverPreviewFieldCount),this.config.useToJSON===void 0&&(this.config.useToJSON=V.useToJSON),this.key===""&&(this.key='""')}return Object.defineProperty(e.prototype,"isOpen",{get:function(){return this._isOpen!==null?this._isOpen:this.open>0},set:function(t){this._isOpen=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isDate",{get:function(){return this.json instanceof Date||this.type==="string"&&(tt.test(this.json)||rt.test(this.json)||nt.test(this.json))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isUrl",{get:function(){return this.type==="string"&&this.json.indexOf("http")===0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isArray",{get:function(){return Array.isArray(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isObject",{get:function(){return _e(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isEmptyObject",{get:function(){return!this.keys.length&&!this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isEmpty",{get:function(){return this.isEmptyObject||this.keys&&!this.keys.length&&this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useToJSON",{get:function(){return this.config.useToJSON&&this.type==="stringifiable"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasKey",{get:function(){return this.key!==void 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"constructorName",{get:function(){return we(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this.config.useToJSON&&this.json&&this.json.toJSON?"stringifiable":ye(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"keys",{get:function(){if(this.isObject){var t=Object.keys(this.json);return!this.isArray&&this.config.sortPropertiesBy?t.sort(this.config.sortPropertiesBy):t}return[]},enumerable:!0,configurable:!0}),e.prototype.toggleOpen=function(){this.isOpen=!this.isOpen,this.element&&(this.isOpen?this.appendChildren(this.config.animateOpen):this.removeChildren(this.config.animateClose),this.element.classList.toggle(T("open")))},e.prototype.openAtDepth=function(t){t===void 0&&(t=1),t<0||(this.open=t,this.isOpen=t!==0,this.element&&(this.removeChildren(!1),t===0?this.element.classList.remove(T("open")):(this.appendChildren(this.config.animateOpen),this.element.classList.add(T("open")))))},e.prototype.getInlinepreview=function(){var t=this;if(this.isArray)return this.json.length>this.config.hoverPreviewArrayCount?"Array["+this.json.length+"]":"["+this.json.map(ke).join(", ")+"]";var n=this.keys,r=n.slice(0,this.config.hoverPreviewFieldCount).map(function(o){return o+":"+ke(t.json[o])}),i=n.length>=this.config.hoverPreviewFieldCount?"\u2026":"";return"{"+r.join(", ")+i+"}"},e.prototype.render=function(){this.element=O("div","row");var t=this.isObject?O("a","toggler-link"):O("span");if(this.isObject&&!this.useToJSON&&t.appendChild(O("span","toggler")),this.hasKey&&t.appendChild(O("span","key",this.key+":")),this.isObject&&!this.useToJSON){var n=O("span","value"),r=O("span"),i=O("span","constructor-name",this.constructorName);if(r.appendChild(i),this.isArray){var o=O("span");o.appendChild(O("span","bracket","[")),o.appendChild(O("span","number",this.json.length)),o.appendChild(O("span","bracket","]")),r.appendChild(o)}n.appendChild(r),t.appendChild(n)}else{(n=this.isUrl?O("a"):O("span")).classList.add(T(this.type)),this.isDate&&n.classList.add(T("date")),this.isUrl&&(n.classList.add(T("url")),n.setAttribute("href",this.json));var s=ve(this.type,this.json,this.useToJSON?this.json.toJSON():this.json);n.appendChild(document.createTextNode(s)),t.appendChild(n)}if(this.isObject&&this.config.hoverPreviewEnabled){var l=O("span","preview-text");l.appendChild(document.createTextNode(this.getInlinepreview())),t.appendChild(l)}var a=O("div","children");return this.isObject&&a.classList.add(T("object")),this.isArray&&a.classList.add(T("array")),this.isEmpty&&a.classList.add(T("empty")),this.config&&this.config.theme&&this.element.classList.add(T(this.config.theme)),this.isOpen&&this.element.classList.add(T("open")),this.element.appendChild(t),this.element.appendChild(a),this.isObject&&this.isOpen&&this.appendChildren(),this.isObject&&!this.useToJSON&&t.addEventListener("click",this.toggleOpen.bind(this)),this.element},e.prototype.appendChildren=function(t){var n=this;t===void 0&&(t=!1);var r=this.element.querySelector("div."+T("children"));if(r&&!this.isEmpty)if(t){var i=0,o=function(){var s=n.keys[i],l=new e(n.json[s],n.open-1,n.config,s);r.appendChild(l.render()),(i+=1)<n.keys.length&&(i>10?o():ee(o))};ee(o)}else this.keys.forEach(function(s){var l=new e(n.json[s],n.open-1,n.config,s);r.appendChild(l.render())})},e.prototype.removeChildren=function(t){t===void 0&&(t=!1);var n=this.element.querySelector("div."+T("children"));if(t){var r=0,i=function(){n&&n.children.length&&(n.removeChild(n.children[0]),(r+=1)>10?i():ee(i))};ee(i)}else n&&(n.innerHTML="")},e}();const Ct="";function Ce(e,t,n){const r=e.slice();return r[8]=t[n],r[10]=n,r}function Oe(e){let t,n=e[8]+"",r,i,o;return{c(){t=w("div"),r=E(n),S(t,"class","svelte-1wpdf2n"),G(t,"selected",e[10]==e[2])},m(s,l){_(s,t,l),j(t,r),i||(o=$(t,"click",e[4](e[10])),i=!0)},p(s,l){e=s,l&4&&G(t,"selected",e[10]==e[2])},d(s){s&&b(t),i=!1,o()}}}function Ee(e){let t,n,r,i,o,s,l;return{c(){t=w("div"),n=w("div"),r=w("button"),r.textContent="x",i=N(),o=w("div"),S(n,"class","panel-header svelte-1wpdf2n"),S(o,"class","json-viewer-wrapper svelte-1wpdf2n"),S(t,"class","json-view panel svelte-1wpdf2n")},m(a,f){_(a,t,f),j(t,n),j(n,r),j(t,i),j(t,o),e[7](o),s||(l=$(r,"click",e[5]),s=!0)},p:y,d(a){a&&b(t),e[7](null),s=!1,l()}}}function it(e){let t,n,r=e[3],i=[];for(let s=0;s<r.length;s+=1)i[s]=Oe(Ce(e,r,s));let o=e[0]&&Ee(e);return{c(){for(let s=0;s<i.length;s+=1)i[s].c();t=N(),o&&o.c(),n=ne()},m(s,l){for(let a=0;a<i.length;a+=1)i[a].m(s,l);_(s,t,l),o&&o.m(s,l),_(s,n,l)},p(s,[l]){if(l&28){r=s[3];let a;for(a=0;a<r.length;a+=1){const f=Ce(s,r,a);i[a]?i[a].p(f,l):(i[a]=Oe(f),i[a].c(),i[a].m(t.parentNode,t))}for(;a<i.length;a+=1)i[a].d(1);i.length=r.length}s[0]?o?o.p(s,l):(o=Ee(s),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:y,o:y,d(s){te(i,s),s&&b(t),o&&o.d(s),s&&b(n)}}}function st(e,t,n){let{abspath:r}=t,i=je(r).split(`
`),o=null,s=-1,l;const a=d=>()=>{console.log(d,i[d]),n(0,o=i[d]),n(2,s=d)},f=()=>{n(0,o=null),n(2,s=-1)};function u(d){X[d?"unshift":"push"](()=>{l=d,n(1,l)})}return e.$$set=d=>{"abspath"in d&&n(6,r=d.abspath)},e.$$.update=()=>{if(e.$$.dirty&3&&l!=null&&o!=null){const d=new ot(JSON.parse(o));for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(d.render())}},[o,l,s,i,a,f,r,u]}class at extends I{constructor(t){super(),B(this,t,st,it,L,{abspath:6})}}function lt(e){let t;return{c(){t=E(e[0])},m(n,r){_(n,t,r)},p:y,i:y,o:y,d(n){n&&b(t)}}}function ft(e,t,n){let{abspath:r}=t,i=je(r);return e.$$set=o=>{"abspath"in o&&n(1,r=o.abspath)},[i,r]}class ct extends I{constructor(t){super(),B(this,t,ft,lt,L,{abspath:1})}}function ut(e,t,n){let{abspath:r}=t,{mimeType:i}=t;return e.$$set=o=>{"abspath"in o&&n(0,r=o.abspath),"mimeType"in o&&n(1,i=o.mimeType)},[r,i]}class dt extends I{constructor(t){super(),B(this,t,ut,null,L,{abspath:0,mimeType:1})}}const Ot="";function pt(e){let t,n;return t=new ct({props:{abspath:e[0]}}),{c(){W(t.$$.fragment)},m(r,i){J(t,r,i),n=!0},p(r,i){const o={};i&1&&(o.abspath=r[0]),t.$set(o)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){x(t,r)}}}function mt(e){let t,n;return t=new at({props:{abspath:e[0]}}),{c(){W(t.$$.fragment)},m(r,i){J(t,r,i),n=!0},p(r,i){const o={};i&1&&(o.abspath=r[0]),t.$set(o)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){x(t,r)}}}function ht(e){let t,n;return t=new dt({props:{abspath:e[0],mimeType:e[3]}}),{c(){W(t.$$.fragment)},m(r,i){J(t,r,i),n=!0},p(r,i){const o={};i&1&&(o.abspath=r[0]),t.$set(o)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){x(t,r)}}}function jt(e){let t,n,r,i,o,s,l,a,f,u,d,g,v,m,P;const F=[ht,mt,pt],h=[];function fe(c,p){return c[3].startsWith("image/")?0:c[3]=="application/x-ndjson"?1:2}return d=fe(e),g=h[d]=F[d](e),{c(){t=w("div"),n=w("div"),r=w("button"),r.textContent="x",i=N(),o=w("div"),s=E(e[0]),l=N(),a=w("a"),a.textContent="download",f=N(),u=w("div"),g.c(),S(a,"class","download-link"),S(n,"class","panel-header svelte-13wkav8"),S(u,"class","content svelte-13wkav8"),S(t,"class","panel file-viewer svelte-13wkav8")},m(c,p){_(c,t,p),j(t,n),j(n,r),j(n,i),j(n,o),j(o,s),j(n,l),j(n,a),e[5](a),j(t,f),j(t,u),h[d].m(u,null),v=!0,m||(P=$(r,"click",e[2]),m=!0)},p(c,[p]){(!v||p&1)&&U(s,c[0]),g.p(c,p)},i(c){v||(C(g),v=!0)},o(c){A(g),v=!1},d(c){c&&b(t),e[5](null),h[d].d(),m=!1,P()}}}function gt(e,t,n){let{abspath:r}=t,{index:i}=t,o;const s=()=>{le.update(f=>f.filter(u=>u.path!==r))},l=ze(r);Je(()=>{n(1,o.href=qe(r),o),o.setAttribute("download",PATH.basename(r))});function a(f){X[f?"unshift":"push"](()=>{o=f,n(1,o)})}return e.$$set=f=>{"abspath"in f&&n(0,r=f.abspath),"index"in f&&n(4,i=f.index)},[r,o,s,l,i,a]}class bt extends I{constructor(t){super(),B(this,t,gt,jt,L,{abspath:0,index:4})}}const Et="";function Te(e,t,n){const r=e.slice();return r[3]=t[n],r[5]=n,r}function yt(e){let t;return{c(){t=E("File Explorer")},m(n,r){_(n,t,r)},p:y,i:y,o:y,d(n){n&&b(t)}}}function _t(e){let t,n,r,i;t=new et({});let o=e[1],s=[];for(let a=0;a<o.length;a+=1)s[a]=Ae(Te(e,o,a));const l=a=>A(s[a],1,1,()=>{s[a]=null});return{c(){W(t.$$.fragment),n=N();for(let a=0;a<s.length;a+=1)s[a].c();r=ne()},m(a,f){J(t,a,f),_(a,n,f);for(let u=0;u<s.length;u+=1)s[u].m(a,f);_(a,r,f),i=!0},p(a,f){if(f&2){o=a[1];let u;for(u=0;u<o.length;u+=1){const d=Te(a,o,u);s[u]?(s[u].p(d,f),C(s[u],1)):(s[u]=Ae(d),s[u].c(),C(s[u],1),s[u].m(r.parentNode,r))}for(se(),u=o.length;u<s.length;u+=1)l(u);ae()}},i(a){if(!i){C(t.$$.fragment,a);for(let f=0;f<o.length;f+=1)C(s[f]);i=!0}},o(a){A(t.$$.fragment,a),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)A(s[f]);i=!1},d(a){x(t,a),a&&b(n),te(s,a),a&&b(r)}}}function Ae(e){let t,n;return t=new bt({props:{abspath:e[3].path,index:e[5]}}),{c(){W(t.$$.fragment)},m(r,i){J(t,r,i),n=!0},p(r,i){const o={};i&2&&(o.abspath=r[3].path),t.$set(o)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){x(t,r)}}}function wt(e){let t,n,r=e[0]?"close":"open",i,o,s,l,a,f,u;const d=[_t,yt],g=[];function v(m,P){return m[0]?0:1}return s=v(e),l=g[s]=d[s](e),{c(){t=w("div"),n=w("button"),i=E(r),o=N(),l.c(),S(t,"class","file-explorer panel svelte-8di3av"),G(t,"open",e[0])},m(m,P){_(m,t,P),j(t,n),j(n,i),j(t,o),g[s].m(t,null),a=!0,f||(u=$(n,"click",e[2]),f=!0)},p(m,[P]){(!a||P&1)&&r!==(r=m[0]?"close":"open")&&U(i,r);let F=s;s=v(m),s===F?g[s].p(m,P):(se(),A(g[F],1,1,()=>{g[F]=null}),ae(),l=g[s],l?l.p(m,P):(l=g[s]=d[s](m),l.c()),C(l,1),l.m(t,null)),P&1&&G(t,"open",m[0])},i(m){a||(C(l),a=!0)},o(m){A(l),a=!1},d(m){m&&b(t),g[s].d(),f=!1,u()}}}function vt(e,t,n){let r;Le(e,le,s=>n(1,r=s));let i=!1;return[i,r,()=>n(0,i=!i)]}class kt extends I{constructor(t){super(),B(this,t,vt,wt,L,{})}}const Pe=document.createElement("DIV");document.body.appendChild(Pe),setTimeout(()=>{new kt({target:Pe})},1e3)});
