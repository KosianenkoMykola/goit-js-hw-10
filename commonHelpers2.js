import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const l=document.querySelector(".form");l.addEventListener("submit",function(o){o.preventDefault();const n=this.elements.delay,r=this.elements.state,t=parseInt(n.value),s=r.value;new Promise((e,m)=>{s==="fulfilled"?setTimeout(()=>{e(t)},t):s==="rejected"&&setTimeout(()=>{m(t)},t)}).then(e=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})},e=>{i.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})}),this.reset()});
//# sourceMappingURL=commonHelpers2.js.map
