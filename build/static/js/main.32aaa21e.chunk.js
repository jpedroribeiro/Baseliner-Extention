(window["webpackJsonpbaseliner-extension"]=window["webpackJsonpbaseliner-extension"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),l=t.n(r),o=(t(9),t(1)),i=(t(10),function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,a,t,n){return a+a+t+t+n+n}));var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}),s=function(e,a,t){var n=Number(e).toString(16),c=Number(a).toString(16),r=Number(t).toString(16);return"#".concat(2!==n.length?"".concat(n).concat(n):n).concat(2!==c.length?"".concat(c).concat(c):c).concat(2!==r.length?"".concat(r).concat(r):r)};var u=function(){var e=chrome&&chrome.tabs,a=c.a.useState(!1),t=Object(o.a)(a,2),n=t[0],r=t[1],l=c.a.useState("loading..."),u=Object(o.a)(l,2),d=u[0],m=u[1],b=c.a.useState(!0),v=Object(o.a)(b,2),h=v[0],g=v[1],p=c.a.useState("#ff0000"),f=Object(o.a)(p,2),E=f[0],z=f[1],y=c.a.useState(100),O=Object(o.a)(y,2),B=O[0],j=O[1],w=c.a.useState(8),S=Object(o.a)(w,2),V=S[0],N=S[1],k=c.a.useState(!0),x=Object(o.a)(k,2),T=x[0],C=x[1],H=c.a.useState("#00ff00"),F=Object(o.a)(H,2),R=F[0],G=F[1],I=c.a.useState(100),$=Object(o.a)(I,2),J=$[0],W=$[1],D=c.a.useState(8),L=Object(o.a)(D,2),M=L[0],P=L[1];function U(e){var a=e.currentTarget.dataset.grid,t=e.currentTarget.checked;"vertical"===a?g(t):C(t)}function q(e){"vertical"===e.currentTarget.dataset.grid?z(e.currentTarget.value):G(e.currentTarget.value)}function A(e){"vertical"===e.currentTarget.dataset.grid?N(e.currentTarget.value):P(e.currentTarget.value)}function K(e){"vertical"===e.currentTarget.dataset.grid?j(e.currentTarget.value):W(e.currentTarget.value)}return c.a.useEffect((function(){e&&(chrome.tabs.executeScript(null,{file:"/baseliner.js"}),chrome.runtime.onMessage.addListener((function(e){switch(null===e||void 0===e?void 0:e.status){case"default":m("Baseliner extension ready with defaults"),r(!0);break;case"update":m("Baseliner styles updated"),r(!0),chrome.tabs.executeScript({code:"Baseliner.saveToStorage({\n                verticalRed: ".concat(e.objOfValues.verticalRed,",\n                verticalBlue: ").concat(e.objOfValues.verticalBlue,",\n                verticalGreen: ").concat(e.objOfValues.verticalGreen,",\n                verticalOpacity: ").concat(e.objOfValues.verticalOpacity,",\n                verticalBaseline: ").concat(e.objOfValues.verticalBaseline,",\n                verticalEnable: ").concat(e.objOfValues.verticalEnable,",\n                horizontalRed: ").concat(e.objOfValues.horizontalRed,",\n                horizontalBlue: ").concat(e.objOfValues.horizontalBlue,",\n                horizontalGreen: ").concat(e.objOfValues.horizontalGreen,",\n                horizontalOpacity: ").concat(e.objOfValues.horizontalOpacity,",\n                horizontalBaseline: ").concat(e.objOfValues.horizontalBaseline,",\n                horizontalEnable: ").concat(e.objOfValues.horizontalEnable,"\n              })")});break;case"load":m("Baseliner loaded from storage");var a=e.storage,t=a.verticalRed,n=a.verticalBlue,c=a.verticalGreen,l=a.verticalOpacity,o=a.verticalBaseline,i=a.verticalEnable,u=a.horizontalRed,d=a.horizontalBlue,b=a.horizontalGreen,v=a.horizontalOpacity,h=a.horizontalBaseline,p=a.horizontalEnable;G(s(u,b,d)),W(v),P(h),C(p),z(s(t,c,n)),j(l),N(o),g(i),chrome.tabs.executeScript({code:"Baseliner.generateStyles(\n                ".concat(t,",\n                ").concat(n,",\n                ").concat(c,",\n                ").concat(l,",\n                ").concat(o,",\n                ").concat(i,",\n                ").concat(u,",\n                ").concat(d,",\n                ").concat(b,",\n                ").concat(v,",\n                ").concat(h,",\n                ").concat(p,"\n              )")});break;case"removed":m("Baseliner removed");break;default:console.error("Unrecognized status message",e)}})))}),[e]),c.a.useEffect((function(){if(e&&n){var a=i(E),t={red:a.r,green:a.g,blue:a.b,opacity:B,baseline:V,enable:h},c=i(R),r={red:c.r,green:c.g,blue:c.b,opacity:J,baseline:M,enable:T};chrome.tabs.executeScript({code:"Baseliner.generateStyles(\n          ".concat(t.red,", \n          ").concat(t.blue,", \n          ").concat(t.green,", \n          ").concat(t.opacity,",\n          ").concat(t.baseline,", \n          ").concat(t.enable,", \n          ").concat(r.red,", \n          ").concat(r.blue,", \n          ").concat(r.green,", \n          ").concat(r.opacity,",\n          ").concat(r.baseline,",\n          ").concat(r.enable,"\n        )")})}}),[n,E,R,B,J,V,M,h,T]),c.a.createElement("div",{className:"Popup"},c.a.createElement("p",null,"Status: ",d),c.a.createElement("div",{className:"grid vertical"},c.a.createElement("h1",null,"Vertical"),c.a.createElement("div",{className:"row"},c.a.createElement("label",{htmlFor:"enableVertical"},"Enable"),c.a.createElement("input",{type:"checkbox",id:"enableVertical",checked:h,"data-grid":"vertical",onChange:U})),c.a.createElement("div",{className:"row"},c.a.createElement("label",{htmlFor:"colourVertical"},"Colour"),c.a.createElement("input",{type:"color",id:"colourVertical",value:E,"data-grid":"vertical",onChange:q})),c.a.createElement("div",{className:"row"},c.a.createElement("label",{htmlFor:"opacityVertical"},"Opacity"),c.a.createElement("input",{type:"range",min:0,max:100,id:"opacityVertical",value:B,"data-grid":"vertical",onChange:K}),c.a.createElement("span",null,B,"%")),c.a.createElement("div",{className:"row"},c.a.createElement("label",{htmlFor:"baselineVertical"},"Baseline"),c.a.createElement("input",{type:"number",min:2,id:"baselineVertical",value:V,"data-grid":"vertical",onChange:A}))),c.a.createElement("div",{className:"grid horizontal"},c.a.createElement("h1",null,"Horizontal"),c.a.createElement("div",{className:"row"},c.a.createElement("label",{htmlFor:"enableHorizontal"},"Enable"),c.a.createElement("input",{type:"checkbox",id:"enableHorizontal",checked:T,"data-grid":"horizontal",onChange:U})),c.a.createElement("div",{className:"row"},c.a.createElement("label",{htmlFor:"colourHorizontal"},"Colour"),c.a.createElement("input",{type:"color",id:"colourHorizontal",value:R,"data-grid":"horizontal",onChange:q})),c.a.createElement("div",{className:"row"},c.a.createElement("label",{htmlFor:"opacityHorizontal"},"Opacity"),c.a.createElement("input",{type:"range",min:0,max:100,id:"opacityHorizontal",value:J,"data-grid":"horizontal",onChange:K}),c.a.createElement("span",null,J,"%")),c.a.createElement("div",{className:"row"},c.a.createElement("label",{htmlFor:"baselineHorizontal"},"Baseline"),c.a.createElement("input",{type:"number",min:2,id:"baselineHorizontal",value:M,"data-grid":"horizontal",onChange:A}))),c.a.createElement("div",null,c.a.createElement("button",{className:"buttonRemove",onClick:function(e){e.preventDefault(),chrome.tabs.executeScript({code:"Baseliner.removeBaseliner()"})}},"Remove Baseliner")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.32aaa21e.chunk.js.map