!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=i);var r=i("6JpON");function u(e,n){var o=Math.random()>.3;return new Promise((function(t,i){return o?t({position:e,delay:n}):i({position:e,delay:n})}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var o=n.currentTarget,t=+o.delay.value,i=+o.step.value,a=+o.amount.value,l=1,c=l;c<=a;c+=1)u(l=c,t).then((function(n){var o=n.position,t=n.delay;setTimeout((function(){e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))}),t)})).catch((function(n){var o=n.position,t=n.delay;setTimeout((function(){e(r).Notify.warning("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}),t)})),t+=i,console.log(t)}))}();
//# sourceMappingURL=03-promises.0f27f0c1.js.map