(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"0qOM":function(e,t,a){"use strict";var n=a("gbB/"),r=a.n(n),c=a("boeR"),i=a("i5Br"),o=a.n(i),s=a("zXLR");function l(e){var t=e.isFit,a=e.isTransparent,n=e.message,i=e.redirectLabel,l=e.redirectTo,u=e.replace;return r.a.createElement("div",{className:"layout"},r.a.createElement("div",{className:o()("layout__content layout__content--centered p-10",{"layout__content--fit":t},{"layout__content--transparent":a})},r.a.createElement("p",{className:"text-c"},n),i&&l&&r.a.createElement(s.a,{className:"btn btn-primary",component:c.Link,to:l,replace:u},i)))}l.defaultProps={replace:!1},t.a=l},"2Hh2":function(e,t,a){"use strict";var n=a("g4DW"),r=a("DjBF"),c=a("7cf5"),i=a("gbB/"),o=a.n(i),s=a("i5Br"),l=a.n(s),u=a("ldfh"),d=a("tjC1");t.a=function(e){var t=e.className,a=e.items,s=e.hasSidebarHeader,b=e.hasHeaderToggleBtn,f=e.gaCategory,m=e.headerContent,v=e.footerContent,g=e.isAlwaysOpen,p=void 0!==g&&g,h=Object(c.a)(e,["className","items","hasSidebarHeader","hasHeaderToggleBtn","gaCategory","headerContent","footerContent","isAlwaysOpen"]),O=Object(u.q)().tablet;Object(i.useEffect)((function(){y()}),[]);var j=Object(i.useState)(!1),C=Object(r.a)(j,2),k=C[0],E=C[1],y=function(){E(!(!p&&O))};return o.a.createElement(d.a,Object.assign({className:l()(Object(n.a)({},t,t),"sidebar__".concat(k?"open":"close")),arrowClasses:l()(Object(n.a)({},"icon-arrow-".concat(O?"down":"left"),!0)),items:a,toggle:function(){E(!k)},hasHeaderToggleBtn:b,gaCategory:f||void 0,headerContent:m,footerContent:v,hasSidebarHeader:s},h))}},IJNI:function(e,t,a){"use strict";var n=a("g4DW"),r=a("7cf5"),c=a("gbB/"),i=a.n(c),o=a("i5Br"),s=a.n(o),l=a("q7zV"),u=a("y1EJ"),d=a("+tDs");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.a=Object(d.d)((function(e){var t=e.className,a=e.component,c=e.iconName,o=e.item,d=e.isNew,f=e.withBadge,m=(e.isVisible,Object(r.a)(e,["className","component","iconName","item","isNew","withBadge","isVisible"])),v=s()("sidebar__item-text",{"sidebar__item-text--new":d||!1});return i.a.createElement(a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({className:s()("sidebar__item",Object(n.a)({},t,t))},m),[c?i.a.createElement(l.a,{key:"icon",name:c,className:"sidebar__item-icon"},f&&i.a.createElement(u.a,{position:{top:"1rem",right:"1rem"},style:{minWidth:"0.5rem",minHeight:"0.5rem",borderRadius:"50%"},type:"info"})):null,i.a.createElement("span",{key:"label",className:s()("sidebar__item--text",Object(n.a)({},v,v))},o)])}))},KCH2:function(e,t,a){"use strict";var n=a("butC"),r=a("MkmS"),c=a.n(r),i=a("upII"),o=a("GkLZ"),s=a("uf/X"),l=a("zSml"),u=new l.a,d={},b={},f={};u.on("fetch",function(){var e=Object(n.a)(c.a.mark((function e(t){var a,n,r,l,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.path,n=t.locale,r=t.feature,l=void 0===r?"":r,!d[a]){e.next=4;break}return u.emit("loading",{loading:d[a],path:a}),e.abrupt("return");case 4:if(!b[a]){e.next=7;break}return u.emit("loaded",{translations:b[a],path:a}),e.abrupt("return");case 7:return e.prev=7,f[a]=void 0,d[a]=!0,u.emit("loading",{loading:d[a],path:a}),e.next=13,Object(i.b)("GET","/translation/",null,{params:{path:a,locale:n,feature:l}});case 13:m=e.sent,b[a]=s.a.toCase("camelCase",m.data),u.emit("loaded",{translations:b[a],path:a}),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(7),f[a]=e.t0,u.emit("error",{error:f[a],path:a}),Object(o.a)({category:"scaler-translations-failure",action:"error",label:null===e.t0||void 0===e.t0?void 0:e.t0.message});case 23:d[a]=!1,u.emit("loading",{loading:d[a],path:a});case 25:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(t){return e.apply(this,arguments)}}()),t.a=u},RRQN:function(e,t,a){"use strict";var n=a("7cf5"),r=a("gbB/"),c=a.n(r),i=a("tKK5"),o=a("nz4c");t.a=function(e){var t=e.children,a=e.renderSingletons,r=void 0!==a&&a,s=e.namespace,l=e.alertProps,u=void 0===l?{}:l,d=e.dialogProps,b=void 0===d?{}:d,f=Object(n.a)(e,["children","renderSingletons","namespace","alertProps","dialogProps"]);return c.a.createElement(i.ub,f,c.a.createElement(i.D,null,t,r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(i.b,Object.assign({name:s},u)),c.a.createElement(i.w,Object.assign({name:s},b)),c.a.createElement(i.Fb,null),c.a.createElement(i.qb,null)),c.a.createElement(o.a,null)))}},UcDd:function(e,t,a){"use strict";var n=a("tryK");a.d(t,"a",(function(){return n.a}));var r=a("W+XG");a.d(t,"b",(function(){return r.a}));var c=a("2u0L");a.d(t,"c",(function(){return c.a}));var i=a("3bhF");a.d(t,"d",(function(){return i.a}));var o=a("0qOM");a.d(t,"e",(function(){return o.a}));var s=a("dv5D");a.d(t,"f",(function(){return s.a}))},"W+XG":function(e,t,a){"use strict";var n=a("gbB/"),r=a.n(n);t.a=function(e){var t=e.type,a=e.height;switch(t){case"block":return r.a.createElement("div",{style:{height:"100%"}});case"flex-fill":return r.a.createElement("div",{style:{flex:"1 0 0"}});case"flex-auto":return r.a.createElement("div",{style:{flex:"1 0 auto"}});default:return r.a.createElement("div",{style:{height:a}})}}},kE9A:function(e,t,a){"use strict";var n=a("gbB/"),r=a.n(n),c=a("tKK5");t.a=function(e,t){return function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Y,t),r.a.createElement(e,a))}}},nz4c:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("DjBF"),r=a("gbB/"),c=a.n(r),i=a("8bDF");function o(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),a=t[0],o=t[1],s=function(e){var t=e.data,a=JSON.parse(t),n=a.type,r=a.data,c=(r=void 0===r?{}:r).percent;"invalid"!==n?"progress-update"===n&&o(100===c?null:c):o(20)};return Object(r.useEffect)((function(){Object(i.b)()&&(new WebSocket("ws://localhost:8080/sockjs-node").onmessage=s)}),[]),Object(i.b)()&&a>0?c.a.createElement(c.a.Fragment,null,a&&c.a.createElement("div",{className:"hmr"},c.a.createElement("div",{className:"hmr__progress",style:{width:"".concat(a,"%")}}))):null}},pz3P:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={clickReferralCallbackRequest:"Click Referral Callback Request",clickReferralSharePlatforms:"Click Referral Share on Other Platforms",clickKnowMoreInviteBtn:"Click Know More Invite Button",viewPostTARatingReferralModal:"View Post TA Rating Referral Modal",viewReferralNudgeHappyFlowModal:"View Referral Nudge Happy Flow Modal",clickInviteAndEarn:"Invite & Earn",clickShareProofFormLink:"Click Share Proof Form Link",clickKnowMoreButton:"Click Know More",clickSstBannerEventLink:"Register for launch event",clickSstBannerCloseButton:"Close button",clickSstBannerKnowMore:"Know more for sst",clickSstBannerReferButton:"Refer button",viewSstNewBanner:"View New SST FOMO Banner",viewRewardsCalculatorBanner:"View Rewards Calculator Banner",clickCalculatorButton:"Click Calculator Button"}},rcXZ:function(e,t,a){"use strict";var n=a("DjBF"),r=a("gbB/"),c=a.n(r),i=a("tkKH"),o=0,s="";t.a=function(e){return function(t){var a=t.whitelistUrls,l=Object(i.k)(),u=Object(r.useState)(!1),d=Object(n.a)(u,2),b=d[0],f=d[1],m=Object(r.useState)(""),v=Object(n.a)(m,2),g=v[0],p=v[1],h=Object(r.useRef)(),O=Object(r.useCallback)((function(){f(!0)}),[]),j=Object(r.useCallback)((function(e){return a.some((function(t){return Object(i.j)(e,{path:t,exact:!0,strict:!1})}))}),[a]);Object(r.useEffect)((function(){return h.current=l.block((function(e,t){return!!j(null==e?void 0:e.pathname)||("POP"===t&&(o+=1,s=e.pathname),p(e.pathname),O(),!1)})),o&&(p(s),O()),function(){h.current&&h.current()}}),[l,a,j,O]);var C=Object(r.useCallback)((function(){h&&h.current(),f(!1),l.push(g)}),[g,l]),k=Object(r.useCallback)((function(){f(!1)}),[]);return b?c.a.createElement(e,Object.assign({},t,{onSubmit:C,onClose:k})):null}}},rhRH:function(e,t,a){"use strict";var n=a("uF+4");a.d(t,"c",(function(){return n.a}));var r=a("kE9A");a.d(t,"b",(function(){return r.a}));a("HG4l");var c=a("rcXZ");a.d(t,"a",(function(){return c.a}))},tjC1:function(e,t,a){"use strict";var n=a("7cf5"),r=a("gbB/"),c=a.n(r),i=a("i5Br"),o=a.n(i),s=a("IJNI"),l=a("tKK5"),u=a("ldfh");t.a=function(e){var t=e.className,a=(e.sidebarClasses,e.arrowClasses),i=e.items,d=(e.device,e.toggle),b=e.hasHeaderToggleBtn,f=e.gaCategory,m=void 0===f?"":f,v=e.headerContent,g=e.footerContent,p=e.hasSidebarHeader,h=void 0===p||p,O=Object(n.a)(e,["className","sidebarClasses","arrowClasses","items","device","toggle","hasHeaderToggleBtn","gaCategory","headerContent","footerContent","hasSidebarHeader"]),j=Object(u.q)().mobile,C=Object(r.useCallback)((function(e){window.trackGaEvent("Academy-Sidebar","Navigation",e)}),[]);return c.a.createElement(c.a.Fragment,null,b&&c.a.createElement("div",{className:"sidebar__open-btn"},c.a.createElement(l.Bb,{className:"btn btn-icon btn-inverted",onClick:d},c.a.createElement(l.N,{name:"hamburger"}))),c.a.createElement("div",Object.assign({"data-testid":"sidebar",className:o()("sidebar",t)},O),h&&c.a.createElement("div",{className:"sidebar__header",onClick:d},c.a.createElement("span",{className:"sidebar__header-text"},"Scaler"),c.a.createElement("span",{className:o()("sidebar__arrow",a)})),j&&b&&c.a.createElement("div",{className:"sidebar__close-btn","data-testid":"sidebar-close-icon"},c.a.createElement(l.Bb,{className:"btn btn-icon btn-inverted",onClick:d},c.a.createElement(l.N,{name:"close"}))),v,c.a.createElement("div",{className:"sidebar__content scroll-bar-hidden",onClick:j?d:null},i.map((function(e,t){return function(e){return void 0===e.isVisible||e.isVisible}(e)&&c.a.createElement(s.a,Object.assign({key:t,onClick:function(){return C("".concat(m).concat(e.item))},gtmEventType:"side_nav",gtmEventAction:"click",gtmEventResult:e.item,gtmEventLink:e.to},e))}))),g))}},tryK:function(e,t,a){"use strict";var n=a("g4DW"),r=a("7cf5"),c=a("gbB/"),i=a.n(c),o=a("i5Br"),s=a.n(o),l=a("2Hh2");function u(e){var t=e.children,a=e.className,c=e.isSidebarDisabled,o=e.sidebarItems,u=e.sidebarClassName,d=e.product,b=e.onlySidebar,f=e.hasHeaderToggleBtn,m=e.sidebarGaCategory,v=void 0===m?"":m,g=e.sidebarHeaderContent,p=e.sidebarFooterContent,h=Object(r.a)(e,["children","className","isSidebarDisabled","sidebarItems","sidebarClassName","product","onlySidebar","hasHeaderToggleBtn","sidebarGaCategory","sidebarHeaderContent","sidebarFooterContent"]);return i.a.createElement("div",Object.assign({className:s()("dashboard",Object(n.a)({},a,a))},h),!c&&i.a.createElement(l.a,{className:u,items:o,product:d,hasHeaderToggleBtn:f,gaCategory:v||void 0,headerContent:g,footerContent:p}),b?"":i.a.createElement("div",{className:s()("dashboard__content",{"dashboard__content--sidebar-disabled":c})},t))}u.defaultProps={isSidebarDisabled:!1,sidebarClassName:"",onlySidebar:!1},t.a=u},"uF+4":function(e,t,a){"use strict";var n=a("DjBF"),r=a("gbB/"),c=a.n(r),i=a("UcDd"),o=a("/AqK"),s=a("KCH2");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(a){return function(l){var u=l.locale,d=void 0===u?"en-IN":u,b=Object(r.useState)(!1),f=Object(n.a)(b,2),m=f[0],v=f[1],g=Object(r.useState)(null),p=Object(n.a)(g,2),h=p[0],O=p[1],j=Object(r.useState)(null),C=Object(n.a)(j,2),k=C[0],E=C[1],y=Object(r.useMemo)((function(){return{translations:h}}),[h]),w=Object(r.useCallback)((function(){s.a.emit("fetch",{path:e,locale:d,feature:t})}),[d]),N=Object(r.useCallback)((function(t){var a=t.translations,n=t.path;e===n&&O(a)}),[O]),B=Object(r.useCallback)((function(t){var a=t.loading,n=t.path;e===n&&v(a)}),[v]),S=Object(r.useCallback)((function(t){var a=t.error,n=t.path;e===n&&E(a)}),[E]);return Object(r.useEffect)((function(){return s.a.on("loaded",N),s.a.on("loading",B),s.a.on("error",S),function(){s.a.off("loaded",N),s.a.off("loading",B),s.a.off("error",S)}}),[N,B,S]),Object(r.useEffect)((function(){w()}),[w]),m?c.a.createElement(i.d,{isFit:!0}):k?c.a.createElement(i.c,{message:"Something went wrong! Please try again",actionFn:w,isFit:!0}):c.a.createElement(o.a.Provider,{value:y},c.a.createElement(a,Object.assign({},l,{translations:h})))}}}},"uf/X":function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a("2bPg"),r=a("BRlI"),c=a("lNeW"),i=a.n(c),o=a("+EJi"),s=a.n(o),l=a("NtC2"),u=a.n(l),d=a("//Dc"),b=a.n(d),f=a("6adR"),m=a.n(f),v=a("qalb"),g=a.n(v),p=a("9PCx"),h=a.n(p),O=a("uFim"),j=a.n(O),C=a("riGh"),k=a.n(C),E=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"camelCase",value:function(e){return i()(e)}},{key:"constantCase",value:function(e){return k()(e).replace(/ /g,"_")}},{key:"kebabCase",value:function(e){return m()(e)}},{key:"lowerCase",value:function(e){return g()(e).replace(/ /g,"")}},{key:"snakeCase",value:function(e){return h()(e)}},{key:"titleCase",value:function(e){return j()(i()(e))}},{key:"isSupportedCase",value:function(t){return Object.prototype.hasOwnProperty.call(e,t)}},{key:"toCase",value:function(e,t){if(!e||!this.isSupportedCase)throw new TypeError("Invalid target case: ".concat(e));var a=this[e];if(!u()(t))return a(t);return function e(t){if(b()(t)){var n={};return Object.keys(t).forEach((function(r){n[a(r)]=e(t[r])})),n}return s()(t)?t.map((function(t){return e(t)})):t}(t)}}]),e}()}}]);