(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[264],{3364:function(e,t,n){"use strict";n.d(t,{G:function(){return k}});var r=n(1878),o=n(5697),a=n.n(o),i=n(7294);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var b=["style"];function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=m(t.slice(0,r)),a=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=a:e[o]=a,e}),{})}var v=!1;try{v=!0}catch(O){}function g(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:r.Qc.icon?r.Qc.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var w=["forwardedRef"];function k(e){var t=e.forwardedRef,n=f(e,w),o=n.icon,a=n.mask,i=n.symbol,l=n.className,s=n.title,p=n.titleId,m=g(o),b=h("classes",[].concat(d(function(e){var t,n=e.beat,r=e.fade,o=e.flash,a=e.spin,i=e.spinPulse,l=e.spinReverse,c=e.pulse,s=e.fixedWidth,f=e.inverse,d=e.border,p=e.listItem,m=e.flip,b=e.size,y=e.rotation,v=e.pull,g=(u(t={"fa-beat":n,"fa-fade":r,"fa-flash":o,"fa-spin":a,"fa-spin-reverse":l,"fa-spin-pulse":i,"fa-pulse":c,"fa-fw":s,"fa-inverse":f,"fa-border":d,"fa-li":p,"fa-flip-horizontal":"horizontal"===m||"both"===m,"fa-flip-vertical":"vertical"===m||"both"===m},"fa-".concat(b),null!=b),u(t,"fa-rotate-".concat(y),null!=y&&0!==y),u(t,"fa-pull-".concat(v),null!=v),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(g).map((function(e){return g[e]?e:null})).filter((function(e){return e}))}(n)),d(l.split(" ")))),y=h("transform","string"==typeof n.transform?r.Qc.transform(n.transform):n.transform),O=h("mask",g(a)),x=(0,r.qv)(m,c(c(c(c({},b),y),O),{},{symbol:i,title:s,titleId:p}));if(!x)return function(){var e;!v&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var j=x.abstract,N={ref:t};return Object.keys(n).forEach((function(e){k.defaultProps.hasOwnProperty(e)||(N[e]=n[e])})),E(j[0],N)}k.displayName="FontAwesomeIcon",k.propTypes={beat:a().bool,border:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},k.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var E=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),a=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=y(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[m(t)]=r}return e}),{attrs:{}}),i=r.style,l=void 0===i?{}:i,s=f(r,b);return a.attrs.style=c(c({},a.attrs.style),l),t.apply(void 0,[n.tag,c(c({},a.attrs),s)].concat(d(o)))}.bind(null,i.createElement)},5734:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var r=n(7294),o=n(9694),a=n(1597),i=n(4904),l=n(8787),c=n.n(l),s=function(e){var t=e.links;return r.createElement("div",{className:"footer__links"},r.createElement(i.Z,{"aria-label":"Home",className:"footer__icon",nav:!0,to:"/"},r.createElement("div",{className:"footer__icon-svg-container"},r.createElement(c(),null))),r.createElement("ul",null,t.map((function(e){return r.createElement("li",{key:e.text},r.createElement(i.Z,{to:e.link},e.text))}))))},u=function(e){var t=e.author,n=e.links;return r.createElement("footer",{className:"footer"},n.length>0&&r.createElement(s,{links:n}),r.createElement("small",null,"©"," ",t,","," ",(new Date).getFullYear(),"."))},f=function(e){return e&&e.length>0?e.filter((function(e){return e.link&&e.text})):[]},d=function(){var e=(0,a.useStaticQuery)("1440116640").site.siteMetadata,t=e.author,n=e.footerLinks,o=f(n);return r.createElement(u,{author:t,links:o})},p=n(5514),m=n(3366),b=n(3364),y=n(5697),v=n.n(y),g=n(9925),h=g.default.button.withConfig({displayName:"button-defaults__Button",componentId:"sc-1w1og70-0"})(["background-color:transparent;border-color:transparent;box-sizing:border-box;font-family:var(--font-system);transform-origin:center;transition-duration:0.3s;transition-property:background-color,border-color,color;transition-timing-function:var(--timing-function);&:focus{outline:none;}&::-moz-focus-inner{border:0;}",";",";",";&:active{animation-duration:0.3s;animation-name:click;animation-timing-function:var(--timing-function)}@keyframes click{0%{transform:scale(1);}50%{transform:scale(0.85);}100%{transform:scale(1);}}"],(function(e){return e.disabled&&(0,g.css)(["&{cursor:not-allowed;opacity:0.6;}"])}),(function(e){return e.shadow&&(0,g.css)(["&{box-shadow:0 2px 5px 0 rgba(0,0,0,0.26);}"])}),(function(e){return"primary"===e.kind&&(0,g.css)(["&{background-color:var(--color-primary);color:var(--color-background);}&:focus:not([disabled]),&:hover:not([disabled]){background-color:#fff;border-color:var(--color-primary);color:var(--color-primary);}"])}));h.defaultProps={disabled:!1,kind:"primary",shadow:!1},h.propTypes={disabled:v().bool,kind:v().string,shadow:v().bool};var w=h,k=(0,g.default)(w).withConfig({displayName:"button-style__Button",componentId:"zzovx7-0"})(["align-items:center;border-color:transparent;border-radius:50%;border-style:solid;border-width:2px;display:flex;font-size:1em;justify-content:center;height:34px;padding:2px;position:relative;width:34px;z-index:1;&::before{border-radius:50%;content:'';height:100%;left:0;position:absolute;top:0;transition:inherit;transition-property:background-color,border-color,color,opacity,transform;transform:scale(0);transform-origin:center center;width:100%;z-index:-1;}"," ",""],(function(e){return"transparent"===e.kind&&(0,g.css)(["&{background-color:transparent;border:none;}&::before{background-color:var(--color-primary);opacity:0;}&:focus:not([disabled]),&:hover:not([disabled]){box-shadow:none;color:var(--color-font-contrast);}&:focus:not([disabled])::before,&:hover:not([disabled])::before{opacity:1;transform:scale(1);}"])}),(function(e){return e.square&&(0,g.css)(["&{border-radius:0;}&::before{border-radius:0;}"])}));k.defaultProps={disabled:!1,kind:"transparent",square:!1},k.propTypes={disabled:v().bool,kind:v().string,square:v().bool};var E=k,O=["ariaLabel","icon","pulse","rotation","size","spin"],x=function(e){var t=e.ariaLabel,n=e.icon,o=e.pulse,a=e.rotation,i=e.size,l=e.spin,c=(0,m.Z)(e,O);return r.createElement(E,Object.assign({"aria-hidden":!1,"aria-label":t},c),r.createElement(b.G,{icon:n,pulse:o,rotation:a,size:i,spin:l}))};x.defaultProps={pulse:!1,rotation:null,size:"1x",spin:!1};var j=x,N=function(e){var t=e.isHomePage;return r.createElement(i.Z,{"aria-label":"Home",className:"nav__icon",nav:!0,to:"/"},r.createElement("div",{className:"nav__icon-svg-container"},r.createElement(c(),null)),!t&&r.createElement("span",null,"Home"))},P=function(e,t,n){return"development"===e&&"http://localhost:8000/"===t||t===n||t===n+"/"},S=function(e){var t=e.location,n=(0,a.useStaticQuery)("1271460761").site,o=P("production",t.href,n.siteMetadata.siteUrl);return r.createElement(N,{isHomePage:o})},_=function(e){var t=e.darkMode,n=e.toggle;return r.createElement(j,{ariaLabel:"switch to "+(t?"light":"dark")+" mode",icon:t?p.DBF:p.enB,kind:"primary",onClick:n,type:"button"})},L="undefined"!=typeof window&&window,z=L?L.localStorage:{getItem:function(){return null},removeItem:function(){},setItem:function(){}},C=function(){try{var e="test-storage";return z.setItem(e,e),z.removeItem(e),!0}catch(t){return!1}},I=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=function(){var e,r=(e="darkMode",C?JSON.parse(z.getItem(e)):null);r!==t&&n(r)};return window.addEventListener("storage",e),window.removeEventListener("storage",e)})),(0,r.useEffect)((function(){var e=document.body.className.includes("dark-mode");e!==t&&n(e)}),[]),{darkMode:t,toggle:function(){var e,r,o=!t,a=!0===o?"dark-mode":"light-mode",i=!0===o?"light-mode":"dark-mode";document.body.classList.contains(i)?document.body.classList.replace(i,a):document.body.classList.add(a),n(o),e="darkMode",r=o,C&&z.setItem(e,JSON.stringify(r))}}},A=function(){var e=I();return r.createElement(_,{darkMode:e.darkMode,toggle:e.toggle})},M=function(e){var t={people:r.createElement(i.Z,{key:"people",to:"/people"},r.createElement(b.G,{icon:p.FVb}),"People"),publications:r.createElement(i.Z,{key:"publications",to:"/publications"},r.createElement(b.G,{icon:p.FL8}),"Publications")};return r.createElement(r.Fragment,null,e.map((function(e){return t[e]})))},H=(0,r.forwardRef)((function(e,t){var n=e.handleClick,o=e.links,a=e.location,l=e.transform,c=M(o);return r.createElement("div",{className:"nav"},r.createElement(S,{location:a}),r.createElement("div",{className:"nav__menu",style:{transform:l}},r.createElement(j,{ariaLabel:"navigation menu",icon:p.xiG,kind:"primary",onClick:n,type:"button"}),r.createElement("div",{className:"nav__menu-links",ref:t},r.createElement(i.Z,{to:"/"},"Home"),c,r.createElement(A,null))),r.createElement("div",{className:"nav__right"},c,r.createElement(A,null)))})),T=function(e,t){return!e||e.isOpen?{isOpen:!1,transform:"translateX(0)"}:{isOpen:!0,transform:"translateX(-"+t.current.getBoundingClientRect().width+"px)"}},B=function(e){if(!e)return!1;var t=e.getBoundingClientRect();return Boolean(window.getComputedStyle(e).getPropertyValue("opacity")>0&&(t.height||t.width))},D=function(e,t,n,o){void 0===n&&(n=!0),void 0===o&&(o=!1);var a=function(e,n){e&&t(n)},i=function(t){var n=e.current,r=!n.contains(t.target)&&(o||B(n));a(r,t)},l=function(t){var n=e.current;"Escape"===t.key&&B(n)&&a(!0,t)};(0,r.useEffect)((function(){return window.addEventListener("click",i),function(){window.removeEventListener("click",i)}})),(0,r.useEffect)((function(){return n&&window.addEventListener("keydown",l),function(){n&&window.removeEventListener("keydown",l)}}));return function(){window.removeEventListener("click",i),n&&window.removeEventListener("keydown",l)}},R=function(){var e=(0,a.useStaticQuery)("536276349"),t=[];return e.people.edges.length>0&&t.push("people"),e.publications&&t.push("publications"),t},Z=function(e){var t=e.location,n=(0,r.useState)(T()),o=n[0],a=n[1],i=(0,r.useRef)(),l=R();D(i,(function(){o.isOpen&&a(T(o,i))}));return r.createElement(H,{handleClick:function(){a(T(o,i))},links:l,location:t,ref:i,transform:o.transform})},F=function(e){var t=e.children;return r.createElement(o.Location,null,(function(e){var n=e.location;return r.createElement("div",{className:"layout"},r.createElement(Z,{location:n}),r.createElement("noscript",{className:"noscript-warning"},"This site relies on JavaScript which is currently disabled in your browser. Some functionality will be missing as a result."),r.createElement("main",null,t),r.createElement(d,null))}))}},8787:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"DNA"),r.createElement("desc",{key:1},"logo"),r.createElement("path",{d:"M.1 494.1c-1.1 9.5 6.3 17.8 15.9 17.8l32.3.1c8.1 0 14.9-5.9 16-13.9.7-4.9 1.8-11.1 3.4-18.1H380c1.6 6.9 2.9 13.2 3.5 18.1 1.1 8 7.9 14 16 13.9l32.3-.1c9.6 0 17.1-8.3 15.9-17.8-4.6-37.9-25.6-129-118.9-207.7-17.6 12.4-37.1 24.2-58.5 35.4 6.2 4.6 11.4 9.4 17 14.2H159.7c21.3-18.1 47-35.6 78.7-51.4C410.5 199.1 442.1 65.8 447.9 17.9 449 8.4 441.6.1 432 .1L399.6 0c-8.1 0-14.9 5.9-16 13.9-.7 4.9-1.8 11.1-3.4 18.1H67.8c-1.6-7-2.7-13.1-3.4-18.1-1.1-8-7.9-14-16-13.9L16.1.1C6.5.1-1 8.4.1 17.9 5.3 60.8 31.4 171.8 160 256 31.5 340.2 5.3 451.2.1 494.1zM224 219.6c-25.1-13.7-46.4-28.4-64.3-43.6h128.5c-17.8 15.2-39.1 30-64.2 43.6zM355.1 96c-5.8 10.4-12.8 21.1-21 32H114c-8.3-10.9-15.3-21.6-21-32h262.1zM92.9 416c5.8-10.4 12.8-21.1 21-32h219.4c8.3 10.9 15.4 21.6 21.2 32H92.9z",key:2})])}o.defaultProps={"aria-label":"DNA logo",viewBox:"0 0 448 512"},e.exports=o,o.default=o}}]);
//# sourceMappingURL=839c1887edbc2df5bf99a88a496014fc8e098ab7-294756f91159a6611ba6.js.map