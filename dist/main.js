(()=>{"use strict";var e={372:(e,n,t)=>{t.d(n,{c:()=>c});var r=t(500),o=t.n(r),i=t(312),a=t.n(i)()(o());a.push([e.id,"div.about {\n    border: rgb(241, 241, 241) 1px solid;\n    border-radius: 2em;\n    background-color: rgb(241, 241, 241);\n    margin: 2em 10%;\n    height: 10%;\n    align-items: center;\n    box-shadow: 13px 12px rgb(104, 28, 0);\n}\n\ndiv.intro {\n    margin: 8em 10% 10em;\n}\n\nh2 {\n    font-size: 1.8rem;\n    margin: 0.5rem;\n}\n\nh4 {\n    color: black;\n    margin: 1.5em 2em 0 2em;\n    text-align: left;\n}\n\ndiv.about p {\n    color: black;\n    margin: 2em;\n}\n\nimg.final {\n    height: 200px;\n    margin: 0 0 2em;\n    border-radius: 0.5em;\n}\n\na {\n    color: black;\n    text-decoration: none;\n}\n\na:hover {\n    color: rgb(161, 0, 0);\n}",""]);const c=a},844:(e,n,t)=>{t.d(n,{c:()=>b});var r=t(500),o=t.n(r),i=t(312),a=t.n(i),c=t(536),d=t.n(c),s=new URL(t(140),t.b),l=new URL(t(40),t.b),p=new URL(t(752),t.b),m=a()(o()),u=d()(s),h=d()(l),f=d()(p);m.push([e.id,`@font-face {\n    font-family: 'SanFrancisco';\n    src: url(${u}) format('woff'), url(${h}) format('woff2');\n}\n\n* {\n    text-align: center;\n    font-size: 40px;\n    margin: 0;\n    padding: 0;\n    color: white;\n    font-family: 'SanFrancisco';\n}\n\ndiv.offer {\n    display: flex;\n    border: rgb(241, 241, 241) 1px solid;\n    border-radius: 2em;\n    background-color: rgb(241, 241, 241);\n    margin: 2em 10%;\n    height: 10%;\n    align-items: center;\n    box-shadow: 13px 12px rgb(104, 28, 0);\n}\n\ndiv.offer div {\n    padding: 0; \n    margin: 3em 5%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\ndiv.offer div * {\n    text-align: left;\n    padding: 0;\n    margin: 4%;\n    font-size: 100%;\n    color: black;\n}\n\nimg {\n    height: 10em;\n    margin: 0 0 0 8%;\n    border-radius: 5em;\n    box-shadow: 10px 8px rgb(104, 28, 0);\n}\n\ndiv.intro {\n    margin: 8em 10% 20em;\n}\n\nh2 {\n    font-size: 1.8rem;\n    margin: 0.5rem;\n}\n\nh3 {\n    font-size: 1.7rem;\n}\n\nnav {\n    background-color: rgb(95, 41, 0);\n    margin: 0 10rem;\n    display: flex;\n    justify-content: space-around;\n}\n\nheader {\n    background-color:rgb(95, 41, 0);\n}\n\nbutton {\n    background-color: rgb(95, 41, 0);\n    border: 0;\n    color: white;\n    padding: 0.5rem 1.5rem;\n}\n\nhtml body {\n    background-image: url(${f});\n    backdrop-filter: blur(10px);\n}\n\ndiv.offer:nth-of-type(4n) p {\n    font-size: 0.4em;\n}`,""]);const b=m},52:(e,n,t)=>{t.d(n,{c:()=>c});var r=t(500),o=t.n(r),i=t(312),a=t.n(i)()(o());a.push([e.id,"div.menu {\n    border: rgb(241, 241, 241) 1px solid;\n    border-radius: 2em;\n    background-color: rgb(241, 241, 241);\n    margin: 2em 10%;\n    height: 10%;\n    align-items: center;\n    box-shadow: 13px 12px rgb(104, 28, 0);\n}\n\ndiv.intro {\n    margin: 8em 10% 10em;\n}\n\nh2 {\n    font-size: 1.8rem;\n    margin: 0.5rem;\n}\n\nh4 {\n    color: black;\n    margin: 1.5em 2em 0 2em;\n    text-align: left;\n}\n\ndiv.menu div {\n    padding: 0;\n    margin: 0 5%;\n    height: 100%;\n    display: flex;\n}\n\ndiv.menu div * {\n    text-align: left;\n    padding: 0;\n    margin: 4%;\n    font-size: 100%;\n    color: black;\n    flex: 1;\n}\n\ndiv.menu div p:last-child {\n    text-align: right;\n}",""]);const c=a},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},536:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=o(u,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},176:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},139:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},140:(e,n,t)=>{e.exports=t.p+"b2f3ec715f55638a114f.woff"},40:(e,n,t)=>{e.exports=t.p+"07e002956c140bb9ac4b.woff2"},752:(e,n,t)=>{e.exports=t.p+"2dd4d50b6d12578ee6c6.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"0095527f9de29005853f.jpg",n=t.p+"e4cc7a6b53485069b17e.jpg",r=t.p+"8f8458abe2c3d7ba7dd1.jpg";var o=t(596),i=t.n(o),a=t(139),c=t.n(a),d=t(176),s=t.n(d),l=t(120),p=t.n(l),m=t(808),u=t.n(m),h=t(936),f=t.n(h),b=t(844),g={};g.styleTagTransform=f(),g.setAttributes=p(),g.insert=s().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=u(),i()(b.c,g),b.c&&b.c.locals&&b.c.locals;const v=document.querySelector("div#content"),C=document.createElement("div");C.classList.add("intro");const E=document.createElement("h2");E.innerHTML="The Resting, Welcome Home";const x=document.createElement("p");x.innerHTML="A group of young individuals with an idea, which has now flourished into the comfiest place to relax, study, or chill with your friends!",C.appendChild(E),C.appendChild(x);const y=document.createElement("h3");y.innerHTML="This Week's offers";const T=document.createElement("div"),L=document.createElement("img");L.src=e;const w=document.createElement("div"),M=document.createElement("h4");M.innerHTML="The Rock Bite";const k=document.createElement("p");k.innerHTML="The highest cheese mountain you've ever seen! With a mix of chicken, mayonnaise and potato fries, this dish isn't for the faint of heart!",w.appendChild(M),w.appendChild(k),T.appendChild(L),T.appendChild(w);const $=document.createElement("div"),H=document.createElement("img");H.src=n;const S=document.createElement("div"),A=document.createElement("h4");A.innerHTML="The Cedar Special";const j=document.createElement("p");j.innerHTML="The chef's special! A mix of Lebanese ingredients and foods to bring you the most refined of plates!",S.appendChild(A),S.appendChild(j),$.appendChild(H),$.appendChild(S);const z=document.createElement("div"),F=document.createElement("img");F.src=r;const I=document.createElement("div"),P=document.createElement("h4");P.innerHTML="t̷̛̠̩̝͇̙̺͍̜̠̼̩̠̱ͣ̽̐̐̑̆̋̈͒̿̿͋͂̄͒̏̋̇̾̓͂͛̆̉̑̓͜͜͟͠͝͞ȟ̷̶̛̪̳̳̭̲̥͓̼̳̬̼͇̀̉̅ͭͦ̾͋̇͑̔͜ĕ̵̴͇͈̭̤͈̦͙̰̤̖͔͚̬̆ͯ̾̎͑ͫ̀̏̽̍͒͒̆̏ͭ̊̿̈̍̈́̚̚͟͡ͅr̨̡̛̼͕̯͎ͪ͒͑ͬ̈̕̕͠e̺͉͔̫̱̬̓ͣ̐̾ͩ͆ͯ̈̾ͭ i̴̵̘̤͈̞͓̤͖͘͢͠s̢̝̹̘̯̖̠̬̬̲̘̤͎̙̹͈͖̳̱͙̝ͣ̓̈̓͐̐̽̅̏̍͌ͫ̑̆̚̕ ņ̴̧̢̯̝͖͈͉̥̬̺͇̠͉̜̬̄ͪ̽̾ͦ̉̔͆̚͠͞o̶̷̶̴̫͙̟͎̗̲̰͛̀͛ͦ̿͗͘̕ g̙̘ͤ͝o̶̶̡̮̻̙̼͕̼̩͔ͣ͗̋ͣ̈́ͬ̅̉͋̐̕̚̕̕͘͢͜͠͠͝͡i͇̋̔ǹ̷̡̰̩̗̱̝͗ͦ̅g̷̼ͯ̎̎͜ b̴̶̡̧̛̤̺͇͈̥̳͚̩͔̱̳̙͗̋ͩͯͪ͗̒̋̓ͬ͗͊͋̑̈̈̈ͮ̓͒ͤͪ̕̕͢͞͡ͅa̷̷̡͙̺͖̖̳̱̻̬̱͕̤̟̼͔͆̈́ͦ̏̉ͣͩ́͑̋͂͒͒ͣͥ̋ͥ͑̍͢͢͟͜͡ͅc̸̜̍ͤ_̨͎k̷̷̢̡̻̦̯̯̫̱̯̩̹̖͖͎̋̀ͫ̿̉͆̾ͤ͂ͧ͌̏̓̀̓̽̾́̈̆͑̚͢͢͢͡͝<";const R=document.createElement("p");function B(){v.appendChild(C),v.appendChild(y),v.appendChild(T),v.appendChild($),v.appendChild(z)}R.innerHTML="helpmethevoicesaregettinglouder",I.appendChild(P),I.appendChild(R),z.appendChild(F),z.appendChild(I),T.classList.add("offer"),$.classList.add("offer"),z.classList.add("offer");var N=t(52),q={};q.styleTagTransform=f(),q.setAttributes=p(),q.insert=s().bind(null,"head"),q.domAPI=c(),q.insertStyleElement=u(),i()(N.c,q),N.c&&N.c.locals&&N.c.locals;const O=document.querySelector("div#content"),U=document.createElement("div");U.classList.add("intro");const _=document.createElement("h2");_.textContent="Our Menu";const W=document.createElement("p");W.textContent="Take a look at all the delicious items we offer",U.appendChild(_),U.appendChild(W);const D=document.createElement("div");D.classList.add("menu");const J=document.createElement("div"),K=document.createElement("h4");K.textContent="Starters";const Q=document.createElement("p");Q.innerHTML="French Fries<br>Onion Rings<br>Nachos<br>Hommos<br>Tabboule<br>Chicken Nuggets";const G=document.createElement("p");G.innerHTML="$3<br>$4<br>$7<br>$5<br>$5<br>$4",J.appendChild(Q),J.appendChild(G),D.appendChild(K),D.appendChild(J);const V=document.createElement("div"),X=document.createElement("h4");X.textContent="Burgers";const Y=document.createElement("p");Y.innerHTML="Hamburger<br>Chicken Burger<br>Hambigo<br>Burger Lovers<br>Tabburger";const Z=document.createElement("p");Z.innerHTML="$6<br>$5<br>Priceless<br>$3<br>$4",V.appendChild(Y),V.appendChild(Z),D.appendChild(X),D.appendChild(V);const ee=document.createElement("div"),ne=document.createElement("h4");ne.textContent="Pizzas";const te=document.createElement("p");te.innerHTML="Bucciarratti<br>Margharetti<br>Decoco<br>Prosciutto e Funghi<br>Diavola<br>Forza Milan";const re=document.createElement("p");re.innerHTML="$8<br>$8<br>$7<br>$10<br>$6<br>$15",ee.appendChild(te),ee.appendChild(re),D.appendChild(ne),D.appendChild(ee);const oe=document.createElement("div"),ie=document.createElement("h4");ie.textContent="Crepes";const ae=document.createElement("p");ae.innerHTML="Michel<br>Ribal<br>Chris<br>Kevin<br>Caramelo de Chocolate";const ce=document.createElement("p");ce.innerHTML="$10<br>$10<br>$10<br>$10<br>$17",oe.appendChild(ae),oe.appendChild(ce),D.appendChild(ie),D.appendChild(oe);var de=t(372),se={};se.styleTagTransform=f(),se.setAttributes=p(),se.insert=s().bind(null,"head"),se.domAPI=c(),se.insertStyleElement=u(),i()(de.c,se),de.c&&de.c.locals&&de.c.locals;const le=t.p+"d8ba28719e81320ba726.gif",pe=document.querySelector("div#content"),me=document.createElement("div");me.classList.add("intro");const ue=document.createElement("h2");ue.textContent="About us";const he=document.createElement("p");he.textContent="Who are we, to be exact?",me.appendChild(ue),me.appendChild(he);const fe=document.createElement("div");fe.classList.add("about");const be=document.createElement("h4");be.textContent="The team";const ge=document.createElement("p");ge.innerHTML="This is a fake page innit so there's nothing much to write here.<br>I did this on my own<br>";const ve=document.createElement("a");ve.href="https://www.github.com/BrunoFares",ve.innerHTML="Hire me ;)",ge.appendChild(ve);const Ce=document.createElement("img");function Ee(e){for(;e.firstChild;)e.removeChild(e.firstChild)}Ce.src=le,Ce.classList.add("final"),fe.appendChild(be),fe.appendChild(ge),fe.appendChild(Ce);const xe=document.querySelectorAll("header button"),ye=document.querySelector("div#content");B(),xe.forEach((e=>{e.addEventListener("mouseover",(function(){e.style.backgroundColor="rgb(80, 35, 0)"}))})),xe.forEach((e=>{e.addEventListener("mouseout",(function(){e.style.backgroundColor="rgb(95, 41, 0)"}))})),xe.forEach((e=>{e.addEventListener("mousedown",(function(){e.style.backgroundColor="rgb(48, 21, 0)"}))})),xe.forEach((e=>{e.addEventListener("mouseup",(function(){e.style.backgroundColor="rgb(95, 41, 0)"}))})),xe[0].addEventListener("click",(()=>{Ee(ye),B()})),xe[1].addEventListener("click",(()=>{Ee(ye),O.appendChild(U),O.appendChild(D)})),xe[2].addEventListener("click",(()=>{Ee(ye),pe.appendChild(me),pe.appendChild(fe)}))})()})();