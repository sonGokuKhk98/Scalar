!function(e){function s(s){for(var r,o,c=s[0],i=s[1],l=s[2],u=0,p=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(m&&m(s);p.length;)p.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,s=0;s<a.length;s++){for(var t=a[s],r=!0,c=1;c<t.length;c++){var i=t[c];0!==n[i]&&(r=!1)}r&&(a.splice(s--,1),e=o(o.s=t[0]))}return e}var r={},n={143:0,132:0},a=[];function o(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(e){var s=[],t=n[e];if(0!==t)if(t)s.push(t[2]);else{var r=new Promise((function(s,r){t=n[e]=[s,r]}));s.push(t[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+"js/"+({40:"vendors~AgoraRTC_N-pr~f8b86675",79:"LottiePlayer",244:"vendors~LottiePlayer"}[e]||e)+"."+{40:"839e52",79:"8a5cff",244:"dc95d1"}[e]+".chunk.js"}(e);var i=new Error;a=function(s){c.onerror=c.onload=null,clearTimeout(l);var t=n[e];if(0!==t){if(t){var r=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,t[1](i)}n[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(s)},o.m=e,o.c=r,o.d=function(e,s,t){o.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,s){if(1&s&&(e=o(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)o.d(t,r,function(s){return e[s]}.bind(null,r));return t},o.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(s,"a",s),s},o.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},o.p="https://assets.scaler.com/packs/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var m=i;a.push(["OwZF",0,2,4,6,7,1,5]),t()}({"2Ts9":function(e,s,t){"use strict";t.d(s,"a",(function(){return n}));var r=t("fR9/"),n=Object(r.a)((function(e){return e.home.userData||{}}),(function(e){return{isPausedMentee:"paused"===e.mentee_status}}))},"5Ok1":function(e,s,t){"use strict";var r=t("gbB/"),n=t.n(r),a=t("tKK5");s.a=function(e){var s=e.title;return n.a.createElement("div",{className:"session-warning-banner"},n.a.createElement(a.N,{name:"error",className:"session-warning-banner__icon"}),n.a.createElement("div",{className:"session-warning-banner__text"},s))}},B6oH:function(e,s,t){"use strict";var r=t("gbB/"),n=t.n(r),a=t("boeR"),o=t("tKK5"),c=t("GFtx");s.a=function(e){var s=e.title,t=e.session,r=e.link,i=e.onLinkClick;return n.a.createElement("div",{className:"m-t-10"},n.a.createElement(o.Bb,{className:"hint h6 no-highlight progressed-performance__sub-title-row",to:r,component:a.Link,onClick:i},s,n.a.createElement(o.N,{name:"chevron-right",className:"m-l-5 progressed-performance__sub-title-row-icon"})),n.a.createElement("div",{className:"progressed-performance__body-row"},n.a.createElement("div",{className:"progressed-performance__bar"},n.a.createElement("div",{className:"progressed-performance__body_bar full-width"},n.a.createElement(c.a,{totalSessions:t.total,completedSession:t.used,showProgressIcon:!1}))),n.a.createElement("div",{className:"progressed-performance__value"},t.used,"/",t.total)))}},Cbii:function(e,s,t){"use strict";var r=t("gbB/"),n=t.n(r),a=t("tKK5"),o=t("zbD9"),c=t("cswv"),i=t("szVq"),l=t("5Ok1");function m(e){var s=e.sessions,t=e.source,r=void 0===t?"":t;switch(s.status){case c.c.completedAll:return n.a.createElement("div",{className:"progress-text__session default"},n.a.createElement("div",{className:"progress-text__title"},n.a.createElement("img",{className:"progress-text__session-completed-icon",src:i.a,alt:"session-completed"}),n.a.createElement("div",null,"You have completed all the sessions!")));case c.c.bookNext:return n.a.createElement("div",{className:"progress-text__session default"},n.a.createElement("div",{className:"progress-text__title"},n.a.createElement(a.N,{name:"clock",className:"default__icon"}),n.a.createElement("div",null,"Book your next session")),Object(o.b)(s.nextBookingTime)?n.a.createElement("div",{className:"progress-text__align-text"},n.a.createElement("span",null,"in"),n.a.createElement(a.s,{time:s.nextBookingTime,format:a.s.STYLEABLE_TIMER,className:"progress-text__time"})):n.a.createElement("span",{className:"progress-text__time-now"},"now"));case c.c.booked:return n.a.createElement("div",{className:"progress-text__session default"},n.a.createElement("div",{className:"progress-text__title"},n.a.createElement(a.N,{name:"clock",className:"default__icon"}),n.a.createElement("div",null,"Your booked session will begin in")),n.a.createElement(a.s,{time:s.upcomingSession.sessionStartTime,format:a.s.STYLEABLE_TIMER,className:"progress-text__time"}));case c.c.userNotBookingRegularly:return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"progress-text__session warning"},n.a.createElement("div",{className:"progress-text__title"},n.a.createElement(a.N,{name:"clock",className:"warning__icon"}),n.a.createElement("div",null,"You haven't booked a session for long time"))),n.a.createElement(l.a,{title:"\n              Your mentor sessions will get expired when you complete\n              your course. So don't miss to book your sessions once in\n              ".concat(s.sessionDays," days\n            ")}));case c.c.sessionReadyButNotBooking:return n.a.createElement("div",{className:"progress-text__session warning progress-text__align-line"},n.a.createElement("div",{className:"progress-text__title"},n.a.createElement(a.N,{name:"clock",className:"progress-text__session warning__icon"}),n.a.createElement("div",null,"dashboard"===r?"Book your next session":"You haven't booked a session for long time. \n                     Book your next session")),Object(o.b)(s.nextBookingTime)?n.a.createElement("div",{className:"flex align-c progress-text__align-text"},n.a.createElement("span",null,"in"),n.a.createElement(a.s,{time:s.nextBookingTime,format:a.s.STYLEABLE_TIMER,className:"progress-text__time warning"})):n.a.createElement("span",{className:"progress-text__time-now\n                    ".concat("dashboard"!==r&&"hide-in-tablet","\n                    ")},"now"));default:return null}}s.a=function(e){var s=e.sessions,t=e.source;return n.a.createElement("div",{className:"progress-text"},n.a.createElement(m,{sessions:s,source:t}))}},Eb6x:function(e,s,t){"use strict";t.d(s,"a",(function(){return r}));var r={core:"/mentee-dashboard/core-curriculum?activeSection=".concat("expert-interviews"),career:"/mentee-dashboard/career-curriculum?activeSection=".concat("one-to-one-sessions")}},GFtx:function(e,s,t){"use strict";t("eicQ");var r=t("bEK6");t.d(s,"a",(function(){return r.a}));var n=t("Cbii");t.d(s,"b",(function(){return n.a}))},IUCd:function(e,s,t){"use strict";var r=t("gbB/"),n=t.n(r),a=t("tKK5");s.a=function(e){var s=e.timeLeft,t=e.icon,r=e.isNew,o=e.link,c=e.progress,i=e.streak,l=e.title;return n.a.createElement("div",{className:"streak-progress"},n.a.createElement("h3",{className:"streak-progress__title-row"},n.a.createElement("div",{className:"streak-progress__title row align-c"},l,r&&n.a.createElement("span",{className:"streak-progress__new-icon"},"New")),n.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(a.N,{className:"streak-progress__info-icon",name:"circle-help"}))),n.a.createElement("div",{className:"streak-progress__body-row"},n.a.createElement("span",{className:"streak-progress__heading"},"Overall"),n.a.createElement(a.bb,{limit:100,value:c,className:"streak-progress__progress-bar",renderValue:!1}),n.a.createElement("span",{className:"streak-progress__value"},"".concat(c,"%"))),n.a.createElement("div",{className:"streak-progress__body-row"},n.a.createElement("span",{className:"streak-progress__heading"},"Streak",n.a.createElement("img",{src:t,alt:l,className:"streak-progress__icon"})),n.a.createElement("span",{className:"streak-progress__streak"},i),n.a.createElement("span",{className:"streak-progress__time-left"},s&&n.a.createElement(a.s,{time:s,format:a.s.TEXT}))))}},JGtF:function(e,s,t){"use strict";var r=t("g4DW"),n=t("gbB/"),a=t.n(n),o=t("i5Br"),c=t.n(o),i=t("tKK5");s.a=function(e){var s=e.title,t=e.icon,n=e.stat,o=e.suffix,l=e.border,m=e.className,u=e.tooltip;return a.a.createElement("div",{className:c()("badged-performance",{"badged-performance--bordered":l})},a.a.createElement(i.Gb,{className:c()("badged-performance__title row align-c",Object(r.a)({},m,m)),isDisabled:!u,title:u||""},s,!!u&&a.a.createElement(i.N,{className:"m-l-5",name:"info"})),a.a.createElement("div",{className:"badged-performance__container"},a.a.createElement("img",{src:t,alt:s,className:"badged-performance__icon"}),a.a.createElement("div",{className:"badged-performance__stat"},n)),a.a.createElement("div",{className:"badged-performance__suffix"},o))}},OwZF:function(e,s,t){"use strict";t.r(s);var r=t("JGtF");t.d(s,"BadgedPerformance",(function(){return r.a}));var n=t("XNLl");t.d(s,"ProgressedPerformance",(function(){return n.a}));var a=t("zdml");t.d(s,"SessionProgress",(function(){return a.a}));var o=t("IUCd");t.d(s,"StreakProgress",(function(){return o.a}))},XNLl:function(e,s,t){"use strict";var r=t("g4DW"),n=t("gbB/"),a=t.n(n),o=t("i5Br"),c=t.n(o),i=t("tKK5");s.a=function(e){var s=e.title,t=e.subtitle,n=e.icon,o=e.progress,l=e.className,m=e.tooltip;return a.a.createElement("div",{className:c()("progressed-performance",Object(r.a)({},l,l))},a.a.createElement("div",{className:"progressed-performance__title-row"},n&&a.a.createElement("img",{src:n,alt:s,className:"progressed-performance__icon show-in-tablet"}),a.a.createElement(i.Gb,{className:"progressed-performance__title row align-c",component:"h3",isDisabled:!m,title:m||""},s,!!m&&a.a.createElement(i.N,{className:"m-l-5",name:"info"})),a.a.createElement("span",{className:"progressed-performance__subtitle"},t)),a.a.createElement("div",{className:"progressed-performance__body-row"},n&&a.a.createElement("img",{src:n,alt:s,className:"progressed-performance__icon hide-in-tablet"}),a.a.createElement("div",{className:"progressed-performance__bar"},a.a.createElement(i.bb,{limit:100,value:o,className:"progressed-performance__progress-bar",renderValue:!1,progressbarClassName:""})),a.a.createElement("span",{className:"progressed-performance__value"},"".concat(o,"%"))))}},bEK6:function(e,s,t){"use strict";var r=t("upjz"),n=t("g4DW"),a=t("gbB/"),o=t.n(a),c=t("i5Br"),i=t.n(c),l=t("cswv"),m=t("tKK5"),u=t("fj40"),p=t("szl+");function d(e){var s=e.totalSessions,t=e.missedSession,a=e.completedSession,c=e.bookingId,d=e.status,f=e.showProgressIcon,g=e.className;return o.a.createElement("div",{className:i()("progressbar-container",Object(n.a)({},g,g))},o.a.createElement("div",{className:"progressbar-container__progressbar"},Object(r.a)(Array(s)).map((function(e,s){var r=s+1;return r<=a?o.a.createElement(m.Gb,{key:s,className:" progressbar-container__sessions progressbar-container__sessions--completed ",popoverProps:{placement:"bottom",className:"progressbar-container__tooltip"},title:"Completed sessions"}):c&&r===a+1?o.a.createElement(m.Gb,{key:s,className:" progressbar-container__sessions progressbar-container__sessions--booked ",popoverProps:{placement:"bottom",className:"progressbar-container__tooltip"},title:"Booked session"}):r<=a+t?o.a.createElement(m.Gb,{key:s,className:" progressbar-container__sessions progressbar-container__sessions--missed ",popoverProps:{placement:"bottom",className:"progressbar-container__tooltip"},title:"You missed to book these sessions on time"}):o.a.createElement("div",{key:s,className:"progressbar-container__sessions"})}))),f&&o.a.createElement("img",{className:"progressbar-container__status-icon",src:d===l.c.completedAll?u.a:p.a,alt:"session-status"}))}d.defaultProps={showProgressIcon:!0},s.a=d},cswv:function(e,s,t){"use strict";t.d(s,"c",(function(){return r})),t.d(s,"a",(function(){return n})),t.d(s,"b",(function(){return a}));var r={invalid:"invalidData",completedAll:"completedAllSession",bookNext:"bookNextSession",booked:"sessionBooked",userNotBookingRegularly:"userNotBookingRegularly",expiring:"sessionExpiring",sessionReadyButNotBooking:"sessionIsReadyAndUserNotBooking"},n=1,a=3},eicQ:function(e,s,t){},"fR9/":function(e,s,t){"use strict";function r(e,s){return e===s}function n(e,s,t){if(null===s||null===t||s.length!==t.length)return!1;for(var r=s.length,n=0;n<r;n++)if(!e(s[n],t[n]))return!1;return!0}function a(e){var s=Array.isArray(e[0])?e[0]:e;if(!s.every((function(e){return"function"==typeof e}))){var t=s.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return s}t.d(s,"a",(function(){return o}));var o=function(e){for(var s=arguments.length,t=Array(s>1?s-1:0),r=1;r<s;r++)t[r-1]=arguments[r];return function(){for(var s=arguments.length,r=Array(s),n=0;n<s;n++)r[n]=arguments[n];var o=0,c=r.pop(),i=a(r),l=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(t)),m=e((function(){for(var e=[],s=i.length,t=0;t<s;t++)e.push(i[t].apply(null,arguments));return l.apply(null,e)}));return m.resultFunc=c,m.dependencies=i,m.recomputations=function(){return o},m.resetRecomputations=function(){return o=0},m}}((function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,t=null,a=null;return function(){return n(s,t,arguments)||(a=e.apply(null,arguments)),t=arguments,a}}))},fj40:function(e,s,t){"use strict";s.a="https://assets.scaler.com/packs/images/session_completed.564d1d.png"},kFVD:function(e,s,t){var r=t("q7dE"),n=t("fSst"),a=t("UqkC"),o=t("+EJi"),c=t("1mK8"),i=t("sASb"),l=t("RlTC"),m=t("36WF"),u="[object Map]",p="[object Set]",d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(c(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||i(e)||m(e)||a(e)))return!e.length;var s=n(e);if(s==u||s==p)return!e.size;if(l(e))return!r(e).length;for(var t in e)if(d.call(e,t))return!1;return!0}},szVq:function(e,s,t){"use strict";s.a="https://assets.scaler.com/packs/images/session_success.033abf.png"},"szl+":function(e,s,t){"use strict";s.a="https://assets.scaler.com/packs/images/session_incompleted.cb63a3.png"},zbD9:function(e,s,t){"use strict";t.d(s,"a",(function(){return p})),t.d(s,"b",(function(){return d}));var r=t("g4DW"),n=t("UgSb"),a=t.n(n),o=t("kFVD"),c=t.n(o),i=t("cswv");function l(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?l(Object(t),!0).forEach((function(s){Object(r.a)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function u(e){var s=e.total_sessions,t=e.completed_sessions,r=e.missed_sessions,n=e.can_schedule_session;return s>0&&n&&r>=i.a&&t+r>=s-i.b}function p(e){if(c()(e))return{};var s=e.completed_sessions,t=e.total_sessions,r=e.missed_sessions,n=e.can_schedule_session,o=e.next_session_time,l=e.upcoming_session,p=e.session_scheduling_days,d={completedSessions:s,allottedSessions:t,missedSessions:r,upcomingSession:{id:a()(l,"id",null),sessionStartTime:a()(l,"session_start_time",null)},canBookNewSession:n,nextBookingTime:o,sessionDays:p},f="";return t&&0!==t?t===s?f=i.c.completedAll:null!=l&&l.id?f=i.c.booked:c()(o)?r>i.a&&(f=i.c.userNotBookingRegularly):f=r>i.a?i.c.sessionReadyButNotBooking:i.c.bookNext:f=i.c.invalid,m(m({},d),{},{status:f,isSessionExpiring:u(e)})}function d(e){return new Date(e)>new Date}},zdml:function(e,s,t){"use strict";var r=t("g4DW"),n=t("gbB/"),a=t.n(n),o=t("Y+yB"),c=t("i5Br"),i=t.n(c),l=t("kFVD"),m=t.n(l),u=t("UgSb"),p=t.n(u),d=t("2Ts9"),f=t("GFtx"),g=t("zbD9"),_=t("tKK5"),b=t("Eb6x"),v=t("B6oH");s.a=function(e){var s=e.sessions,t=e.className,n=e.careerCurriculumVisible,c=e.coreCurriculumVisible,l=e.onLinkClick,u=Object(o.useSelector)(d.a).isPausedMentee;if(m()(s))return null;if(n||c){var E=0,N=0;return c&&(E+=s.core_session.total||0,N+=s.core_session.used||0),n&&(E+=s.career_session.total||0,N+=s.career_session.used||0),a.a.createElement("div",{className:i()("progressed-performance",Object(r.a)({},t,t))},a.a.createElement("div",{className:"progressed-performance__title-row"},a.a.createElement("h3",{className:"progressed-performance__title row"},"Mentor Sessions (",N,"/",E,")")),c&&a.a.createElement(v.a,{title:"1-1 Expert Mock Interviews",session:s.core_session,link:b.a.core,onLinkClick:l}),n&&a.a.createElement(v.a,{title:"1-1 Career Mentor Sessions",session:s.career_session,link:b.a.career,onLinkClick:l}))}if(s.total_sessions){var k=Object(g.a)(s);return a.a.createElement("div",{className:i()("progressed-performance",Object(r.a)({},t,t))},a.a.createElement("div",{className:"progressed-performance__title-row"},a.a.createElement(_.Gb,{className:"progressed-performance__title row align-c",component:"h3",title:"\n              ".concat(k.completedSessions," /\n              ").concat(k.allottedSessions," sessions completed!\n              Book your mentor sessions once in every\n              ").concat(k.sessionDays," days. Session\n              will expire on course completion\n            "),popoverProps:{placement:"bottom",className:"progressed-performance__tooltip"}},"Mentor Sessions",a.a.createElement(_.N,{className:"m-l-5",name:"info"}))),a.a.createElement("div",{className:"progressed-performance__body-row"},a.a.createElement("div",{className:"progressed-performance__bar"},a.a.createElement("div",{className:"progressed-performance__body_bar full-width"},a.a.createElement(f.a,{totalSessions:k.allottedSessions,missedSession:k.missedSessions,completedSession:k.completedSessions,bookingId:p()(k,"upcomingSession.id",null),status:k.status,showProgressIcon:!1}))),a.a.createElement("div",{className:"progressed-performance__value"},a.a.createElement("span",null,k.completedSessions,"/",k.allottedSessions))),!u&&a.a.createElement(f.b,{sessions:s,source:"dashboard"}))}return null}}});