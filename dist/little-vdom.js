function n(n,t){const e=f.index++;f.hooks[e]?t&&!a(t,f.deps[e])&&(f.cleanups[e]&&f.cleanups[e](),f.cleanups[e]=n()):(f.hooks[e]=n,f.deps[e]=t,f.cleanups[e]=n())}function t(n){const t=f.index++;f.hooks[t]||(f.hooks[t]={state:l(n)});const r=f;return[f.hooks[t].state,e((n=>{r.hooks[t].state=l(n,r.hooks[t].state),r.setState()}),[])]}function e(n,t){return r((()=>n),t)}function r(n,t){const e=f.index++;return f.hooks[e]&&t&&a(t,f.deps[e])||(f.hooks[e]=n(),f.deps[e]=t),f.hooks[e]}function c(n,t,r){const c=f.index++;f.hooks[c]||(f.hooks[c]={state:r?n(t,r):t});const o=f;return[f.hooks[c].state,e((t=>{o.hooks[c].state=n(o.hooks[c].state,t),o.setState()}),[])]}function o(n){return e(d(n),[])}function u(t,e){const r=f.index++,c=f;n((()=>{c.effects[r]=()=>{c.cleanups[r]=t()}}),e)}function i(t){let e=t;const r=[];return{Provider:t=>(n((()=>r.length=0),[]),n((()=>{e=t.value,r.forEach((n=>n()))}),[t.value]),t.children),subscribe:n=>(r.push(n),()=>r.splice(r.indexOf(n),1)),getContext:()=>e}}function s({subscribe:e,getContext:r}){const[c,o]=t();return n((()=>e(o)),[]),r()}let f;function l(n,t){return"function"==typeof n?n(t):n}function a(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;++e)if(n[e]!==t[e])return!1;return!0}function d(n){function t(t){n=t}return Object.defineProperty(t,"current",{get:()=>n,set:t,enumerable:!0,configurable:!0}),t}function p(n){const t={index:0,hooks:[],cleanups:[],deps:[],effects:[]},e=n=>{for(let e=0;e<t.hooks.length;++e){const r=t[n][e];if(r)try{r()}catch(n){}}t[n]=[]},r=(r,c,o)=>{const u=f;try{return f=t,t.index=0,t.setState=o,n(r,c,o)}finally{e("effects"),f=u}};return r.unmount=()=>e("cleanups"),r}const b=new WeakMap,y=(n,t,...e)=>{let r=n;return n.call&&(r=b.get(n),r||(r=p(n),b.set(n,r))),{t:r,o:t,u:e.filter((n=>!1!==n)),key:t&&t.key}},h=n=>n.children,_=(n,t,e=t.i||(t.i={}))=>x(y(h,{},[n]),t,e),x=(n,t,e,r)=>{if(n.pop)return g(t,n,e);if(n.t.call){n.l=e.l||{};const c={children:n.u,...n.o},o=n.t(c,n.l,(e=>(Object.assign(n.l,e),x(n,t,n))));return n.p=x(o,t,e&&e.p||{},r),t.i=n}{const c=e.dom||(n.t?document.createElement(n.t):new Text(n.o));if(n.o!=e.o)if(n.t){const{key:t,ref:r,...o}=n.o||{};r&&(r.current=c);for(let n in o){const t=o[n];if("style"!==n||t.trim)t!=(e.o&&e.o[n])&&(n in c||(n=n.toLowerCase())in c?c[n]=t:null!=t?c.setAttribute(n,t):c.removeAttribute(n));else for(const n in t)c.style[n]=t[n]}}else c.data=n.o;return g(c,n.u,e),e.dom&&null==r||t.insertBefore(n.dom=c,t.childNodes[r+1]||null),t.i=Object.assign(e,n)}},g=(n,t,e)=>{const r=e.h||[];return e.h=t.concat.apply([],t).map(((t,e)=>{const c=t.u?t:y("",""+t),o=r.find(((n,t)=>n&&n.t==c.t&&n.key==c.key&&(t==e&&(e=void 0),r[t]=0,n)))||{};return x(c,n,o,e)})),r.map(k),e};function k(n){const{u:t=[],h:e=[],p:r,t:c={}}=n;c&&c.unmount&&c.unmount(),t.concat(r).map((n=>n&&k(n))),n.dom&&n.dom.remove()}export{y as h,h as Fragment,_ as render,t as useState,c as useReducer,o as useRef,r as useMemo,n as useEffect,u as useLayoutEffect,e as useCallback,i as createContext,s as useContext};