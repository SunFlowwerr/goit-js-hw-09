function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=i);var r=i("7Y9D8");function l(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>o?n({position:e,delay:t}):i({position:e,delay:t})))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const o=t.currentTarget;let n=+o.delay.value;const i=+o.step.value,s=+o.amount.value;let u=1;for(let t=u;t<=s;t+=1)u=t,l(u,n).then((({position:t,delay:o})=>{setTimeout((()=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)}),o)})).catch((({position:t,delay:o})=>{setTimeout((()=>{e(r).Notify.warning(`❌ Rejected promise ${t} in ${o}ms`)}),o)})),n+=i,console.log(n)}));
//# sourceMappingURL=03-promises.61508f18.js.map
