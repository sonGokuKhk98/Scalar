(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"Ei/O":function(e,t,a){"use strict";var n=a("gbB/"),o=a.n(n),c=a("i5Br"),r=a.n(c);t.a=function(e){var t=e.activeColor,a=e.onChange;return o.a.createElement("div",{className:"colorpicker"},["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#cccccc","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"].map((function(e){return o.a.createElement("button",{type:"button",className:r()("colorpicker__color",{"colorpicker__color--active":t===e}),style:{backgroundColor:e},onClick:function(){return a(e)},key:e})})))}},ZBzj:function(e,t,a){"use strict";var n=a("ivGW"),o=a("w+WD"),c=a("rcuf"),r=n.a;r.Editor=o.a,r.Toolbar=c.a,t.a=r},"c+oW":function(e,t,a){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;window.storeEsEvent&&window.storeEsEvent("text-editor-".concat(e),t,a)}a.d(t,"a",(function(){return n}))},ivGW:function(e,t,a){"use strict";var n=a("gbB/"),o=a.n(n),c=a("mIA4");t.a=function(e){var t=e.children;return o.a.createElement(c.a,null,o.a.createElement("div",{className:"te-container"},t))}},mIA4:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a("DjBF"),o=a("g4DW"),c=a("gbB/"),r=a.n(c);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u=Object(c.createContext)(),d=Object(c.createContext)();function s(e,t){switch(t.type){case"bold":return i(i({},e),{},{activeBold:t.payload});case"italic":return i(i({},e),{},{activeItalic:t.payload});case"underline":return i(i({},e),{},{activeUnderline:t.payload});case"strikethrough":return i(i({},e),{},{activeStrikethrough:t.payload});case"code":return i(i({},e),{},{activeCode:t.payload});case"codeinline":return i(i({},e),{},{activeCodeInline:t.payload});case"popover":return i(i({},e),{},{isPopoverOpen:t.payload});case"foreColor":return i(i({},e),{},{foreColor:t.payload});default:throw new Error("Unhandled action type: ".concat(t.type))}}function m(e){var t=e.children,a=Object(c.useRef)(),o=Object(c.useReducer)(s,{activeBold:!1,activeItalic:!1,activeUnderline:!1,activeStrikethrough:!1,activeCode:!1,activeCodeInline:!1,editorRef:a,isPopoverOpen:!1,foreColor:"#000000"}),l=Object(n.a)(o,2),i=l[0],m=l[1];return r.a.createElement(u.Provider,{value:i},r.a.createElement(d.Provider,{value:m},t))}function p(){var e=Object(c.useContext)(u);if(void 0===e)throw new Error("useEditorState must be used within a EditorProvider");return e}function b(){var e=r.a.useContext(d);if(void 0===e)throw new Error("useEditorDispatch must be used within a EditorProvider");return e}},on5f:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n='<code class="te-editor__code-snippet"><br /></code>'},rcuf:function(e,t,a){"use strict";var n=a("g4DW"),o=a("DjBF"),c=a("7cf5"),r=a("gbB/"),l=a.n(r),i=a("i5Br"),u=a.n(i),d=a("tKK5"),s=a("ZUQt"),m=a("mIA4"),p=a("RUa/"),b=a("wfEs"),f=a("c+oW"),v=a("on5f"),y=a("Ei/O"),C=a("BmKa"),E=a("ldfh");t.a=function(e){var t=e.className,a=e.imageUploadPath,i=void 0===a?"/upload-editor-image":a,O=e.pdfUploadPath,g=void 0===O?"/upload-editor-image":O,h=e.maxImageSize,j=void 0===h?5e6:h,k=e.maxPdfSize,S=void 0===k?5e6:k,w=e.codeBlock,N=void 0===w?v.a:w,D=e.disableUnderline,x=e.disableFontSize,B=e.disableFontColor,F=e.disableBold,P=e.disableItalic,R=e.disableStrikethrough,_=e.enablePdfUpload,A=void 0!==_&&_,I=e.isAutoSaved,U=Object(c.a)(e,["className","imageUploadPath","pdfUploadPath","maxImageSize","maxPdfSize","codeBlock","disableUnderline","disableFontSize","disableFontColor","disableBold","disableItalic","disableStrikethrough","enablePdfUpload","isAutoSaved"]),M=Object(m.c)(),z=M.activeBold,L=M.activeItalic,K=M.activeStrikethrough,T=M.activeUnderline,q=M.activeCode,W=M.editorRef,H=M.foreColor,G=M.isPopoverOpen,J=Object(m.b)(),V=Object(r.useState)(!1),X=Object(o.a)(V,2),Z=X[0],Q=X[1],Y=Object(r.useState)(!1),$=Object(o.a)(Y,2),ee=$[0],te=$[1],ae=Object(r.useState)(""),ne=Object(o.a)(ae,2),oe=ne[0],ce=ne[1],re=N===v.a,le=Object(r.useRef)(),ie=Object(r.useRef)(),ue=Object(r.useRef)(),de=Object(r.useRef)(),se=Object(r.useRef)(),me=Object(p.k)()?"Cmd":"Ctrl",pe=Object(r.useCallback)((function(){var e=window.getSelection().anchorNode,t=W.current;return t&&!t.contains(e)}),[W]),be=Object(r.useCallback)((function(e,t,a){"insertHTML"===e?Object(f.a)("code-snippet"):Object(f.a)(e),t&&t.preventDefault();var n=window.getSelection(),o=n.anchorNode,c=document.createRange();switch(e){case"bold":if(F)return;document.queryCommandState("bold")?J({type:"bold",payload:!1}):J({type:"bold",payload:!0}),document.execCommand(e,!1,a);break;case"italic":if(P)return;document.queryCommandState("italic")?J({type:"italic",payload:!1}):J({type:"italic",payload:!0}),document.execCommand(e,!1,a);break;case"underline":if(D)return;document.queryCommandState("underline")?J({type:"underline",payload:!1}):J({type:"underline",payload:!0}),document.execCommand(e,!1,a);break;case"strikethrough":if(R)return;document.queryCommandState("strikethrough")?J({type:"strikethrough",payload:!1}):J({type:"strikethrough",payload:!0}),document.execCommand(e,!1,a);break;case"img":c.setStart(o,n.anchorOffset),c.collapse(!0),n.removeAllRanges(),n.addRange(c),document.execCommand("insertImage",!1,a);break;case"pdf":c.setStart(o,n.anchorOffset),c.collapse(!0),n.removeAllRanges(),n.addRange(c),document.execCommand("insertHTML",!1,a);break;case"foreColor":J({type:"foreColor",payload:a}),document.execCommand(e,!1,a);break;case"insertHTML":if(o.parentElement.closest("code")||"CODE"===o.nodeName)break;if(a.indexOf("te-editor__checklist")>-1){c.setStart(o,n.anchorOffset),c.collapse(!0),n.removeAllRanges(),n.addRange(c),document.execCommand(e,!1,a);break}document.execCommand(e,!1,a);break;default:document.execCommand(e,!1,a)}}),[J,R,F,D,P]);Object(r.useEffect)((function(){function e(e){var t=new s.a(e),a=Object(p.k)()?"meta":"ctrl";if(t.didPress("".concat(a,"+b"))&&be("bold",e),t.didPress("".concat(a,"+u"))&&be("underline",e),t.didPress("".concat(a,"+i"))&&be("italic",e),t.didPress("".concat(a,"+shift+x"))&&be("strikethrough",e),t.didPress("enter")&&re){var n=window.getSelection(),o=n.anchorNode;if("CODE"===o.nodeName){var c=document.createElement("BR");document.createElement("DIV").appendChild(c),o.nextSibling?(o.parentElement.insertBefore(c,o.nextSibling),o.parentElement.insertBefore(c,o.nextSibling)):(o.parentElement.appendChild(c),o.parentElement.appendChild(c));var r=document.createRange();r.setStart(o.nextSibling,0),r.collapse(!0),n.removeAllRanges(),n.addRange(r)}if(o.parentElement.closest("CODE")&&"te-editor__code-snippet-inline"===o.parentElement.closest("CODE").className){var l=document.createElement("BR");document.createElement("DIV").appendChild(l),o.parentElement.parentElement.insertBefore(l,o.parentElement.nextSibling),o.parentElement.parentElement.insertBefore(l,o.parentElement.nextSibling);var i=document.createRange();i.setStart(o.parentElement.nextSibling,0),i.collapse(!0),n.removeAllRanges(),n.addRange(i)}}}var t=W.current;if(t)return t.addEventListener("keydown",e),function(){return t.removeEventListener("keydown",e)}}),[W,be,re]);var fe=Object(r.useCallback)((function(){J({type:"popover",payload:!1})}),[J]),ve=Object(r.useCallback)((function(){Q(!1)}),[]),ye=Object(r.useCallback)((function(){te(!1)}),[]),Ce=Object(r.useCallback)((function(){Z&&ve()}),[Z,ve]),Ee=Object(r.useCallback)((function(){ee&&ye()}),[ee,ye]);Object(E.r)(ue,Ce),Object(E.r)(de,Ee);var Oe=Object(r.useCallback)((function(){Q(!Z)}),[Z]),ge=Object(r.useCallback)((function(){te(!ee)}),[ee]),he=Object(r.useCallback)((function(e){var t=e.url;fe();var a=W.current;a&&pe()&&(a.focus(),Object(b.a)(a)),be("img",null,t)}),[fe,W,pe,be]),je=Object(r.useCallback)((function(){fe(),C.b.show({message:"Failed to upload image",type:"error"})}),[fe]),ke=Object(r.useCallback)((function(){ce("Upload Image"),J({type:"popover",payload:!0})}),[J]),Se=Object(r.useCallback)((function(e){Object(f.a)("image-upload"),e.target.value=null}),[]),we=Object(r.useCallback)((function(){ce("Upload Pdf"),J({type:"popover",payload:!0})}),[J]),Ne=Object(r.useCallback)((function(e){var t=e.url;fe();var a=W.current;a&&pe()&&(a.focus(),Object(b.a)(a));var n="<iframe src=".concat(t," height=700 style=width:90%></iframe>");be("pdf",null,n)}),[fe,W,pe,be]),De=Object(r.useCallback)((function(){fe(),C.b.show({message:"Failed to upload Pdf",type:"error"})}),[fe]);return l.a.createElement("div",Object.assign({className:u()("te-toolbar",Object(n.a)({},t,t)),ref:le},U),!F&&l.a.createElement(d.Gb,{title:"".concat(me,"+B"),popoverProps:{placement:"top"}},l.a.createElement("button",{type:"button",onMouseDown:function(e){return be("bold",e)},className:"btn btn-dark ".concat(z?"active":"")},l.a.createElement(d.N,{name:"bold"}))),!P&&l.a.createElement(d.Gb,{title:"".concat(me,"+I"),popoverProps:{placement:"top"}},l.a.createElement("button",{type:"button",onMouseDown:function(e){return be("italic",e)},className:"btn btn-dark ".concat(L?"active":"")},l.a.createElement(d.N,{name:"italic"}))),!D&&l.a.createElement(d.Gb,{title:"".concat(me,"+U"),popoverProps:{placement:"top"}},l.a.createElement("button",{type:"button",onMouseDown:function(e){return be("underline",e)},className:"btn btn-dark ".concat(T?"active":"")},l.a.createElement(d.N,{name:"underline"}))),!R&&l.a.createElement(d.Gb,{title:"".concat(me,"+Shift+X"),popoverProps:{placement:"top"}},l.a.createElement("button",{type:"button",onMouseDown:function(e){return be("strikethrough",e)},className:"btn btn-dark ".concat(K?"active":"")},l.a.createElement(d.N,{name:"strike"}))),!x&&l.a.createElement("button",{ref:ue,type:"button",onClick:Oe,className:"btn btn-dark"},l.a.createElement(d.N,{name:"font-size"})),!B&&l.a.createElement("button",{ref:se,type:"button",onClick:ge,className:"btn btn-dark te-toolbar__text-color"},l.a.createElement(d.N,{name:"text-color",style:{borderBottom:"2px solid ".concat(null!=H?H:"#000000")}})),l.a.createElement("button",{type:"button",onClick:function(e){return be("insertOrderedList",e)},className:"btn btn-dark"},l.a.createElement(d.N,{name:"ordered-list"})),l.a.createElement("button",{type:"button",onClick:function(e){return be("insertUnorderedList",e)},className:"btn btn-dark"},l.a.createElement(d.N,{name:"unordered-list"})),l.a.createElement(d.F,{className:"te-toolbar__img-upload",onSuccess:he,path:i,maxAllowedSize:j,progressClassName:"te-toolbar__img-upload--disabled",dataKey:"upload",type:"button",component:"button",onFail:je,onUploadStart:ke,inputProps:{accept:"image/*",onClick:Se}},l.a.createElement(d.N,{name:"image"})),A&&l.a.createElement(d.F,{className:"te-toolbar__img-upload",onSuccess:Ne,path:g,maxAllowedSize:S,progressClassName:"te-toolbar__img-upload--disabled",dataKey:"upload",type:"button",component:"button",onFail:De,onUploadStart:we,inputProps:{accept:"application/pdf"}},l.a.createElement(d.N,{name:"attach-variant"})),l.a.createElement("button",{type:"button",onClick:function(e){return be("insertHTML",e,N)},className:"btn btn-dark ".concat(q?"active":"")},l.a.createElement(d.N,{name:"code-block"})),l.a.createElement("button",{type:"button",onClick:function(e){return be("insertHTML",e,"<hr/>")},className:"btn btn-dark"},l.a.createElement("div",{className:"te-toolbar__divider"},l.a.createElement("span",null))),l.a.createElement(d.ab,{ref:ie,anchorRef:le,isOpen:G,onClose:fe,className:"te-editor__popover",location:{top:-50,left:0}},l.a.createElement("div",{className:"te-image-upload"},oe,l.a.createElement("div",{className:"te-image-upload__progress"}))),!x&&l.a.createElement(d.ab,{ref:ie,anchorRef:ue,isOpen:Z,onClose:ve,className:"te-editor__text-size-popover",location:{bottom:40,left:0}},l.a.createElement("div",null,l.a.createElement("button",{type:"button",onMouseDown:function(e){return be("fontSize",e,2)}},"Small"),l.a.createElement("button",{type:"button",onMouseDown:function(e){return be("fontSize",e,3)}},"Medium"),l.a.createElement("button",{type:"button",onMouseDown:function(e){return be("fontSize",e,4)}},"Large"),l.a.createElement("button",{type:"button",onMouseDown:function(e){return be("fontSize",e,5)}},"XL"))),!B&&l.a.createElement(d.ab,{ref:de,anchorRef:se,isOpen:ee,onClose:ye,className:"te-editor__text-color-popover",location:{bottom:40,left:0}},l.a.createElement("div",null,l.a.createElement("div",null,"Text Color"),l.a.createElement(y.a,{onChange:function(e){be("foreColor",null,e),ye()},activeColor:H}))),I&&l.a.createElement("div",{className:"te-toolbar__autosave-container"},l.a.createElement("div",{className:"te-toolbar__autosave"},"Autosaved")))}},"w+WD":function(e,t,a){"use strict";var n=a("g4DW"),o=a("butC"),c=a("DjBF"),r=a("7cf5"),l=a("MkmS"),i=a.n(l),u=a("gbB/"),d=a.n(u),s=a("qxD8"),m=a.n(s),p=a("i5Br"),b=a.n(p),f=a("wfEs"),v=a("mIA4"),y=a("ldfh"),C=a("YqKy"),E=3e3;t.a=function(e){var t=e.autoFocus,a=e.autoSave,l=e.autoSaveInterval,s=void 0===l?E:l,p=e.onBlur,O=e.onChange,g=e.onFocus,h=e.onKeyDown,j=e.onKeyPress,k=e.onSave,S=e.onSelect,w=e.onClickCapture,N=e.placeholder,D=void 0===N?"Start Writing the content here...":N,x=e.content,B=e.className,F=Object(r.a)(e,["autoFocus","autoSave","autoSaveInterval","onBlur","onChange","onFocus","onKeyDown","onKeyPress","onSave","onSelect","onClickCapture","placeholder","content","className"]),P=Object(y.F)(),R=Object(v.b)(),_=Object(v.c)(),A=_.editorRef,I=_.activeCode,U=Object(u.useState)(!1),M=Object(c.a)(U,2),z=M[0],L=M[1],K=Object(y.u)(p),T=Object(y.u)(O),q=Object(y.u)(g),W=Object(y.u)(S),H=Object(y.u)(w),G=Object(y.u)(h),J=Object(y.u)((function(e){return I&&"Enter"===e.key&&(e.preventDefault(),e.shiftKey?document.execCommand("insertLineBreak"):window.getSelection&&(document.execCommand("insertHTML",!1,"<br/>"),document.execCommand("insertHTML",!1,"<br/>"))),Object(C.c)(j)&&j(e),!1}));Object(u.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:return e.prev=3,P.current||L(!1),e.finish(3);case 6:case"end":return e.stop()}}),e,null,[[0,,3,6]])})))).apply(this,arguments)}z&&k&&function(){e.apply(this,arguments)}()}),[z]),Object(u.useEffect)((function(){var e=A.current;e&&t&&(e.focus(),Object(f.a)(e))}),[]);var V=Object(u.useCallback)((function(e){e.preventDefault();var t=window.getSelection().anchorNode;(t.closest?t.closest("pre"):t.parentElement.closest("pre"))?(R({type:"codeinline",payload:!1}),R({type:"code",payload:!0})):(t.closest?t.closest("code"):t.parentElement.closest("code"))?(R({type:"codeinline",payload:!1}),R({type:"code",payload:!0})):(R({type:"code",payload:!1}),R({type:"codeinline",payload:!1}));document.queryCommandState("bold")?R({type:"bold",payload:!0}):R({type:"bold",payload:!1}),document.queryCommandState("italic")?R({type:"italic",payload:!0}):R({type:"italic",payload:!1}),document.queryCommandState("underline")?R({type:"underline",payload:!0}):R({type:"underline",payload:!1}),document.queryCommandState("strikethrough")?R({type:"strikethrough",payload:!0}):R({type:"strikethrough",payload:!1}),W(e)}),[R,W]),X=Object(y.C)((function(){L(!0)}),s,[]),Z=Object(u.useCallback)((function(e){a&&X(),T(e)}),[a,X,T]),Q=Object(u.useCallback)((function(e){H(e)}),[H]);return d.a.createElement(m.a,Object.assign({innerRef:A,className:b()("te-editor",Object(n.a)({},B,B)),contentEditable:!0,onBlur:K,onChange:Z,onFocus:q,onKeyDown:G,onKeyPress:J,onSelect:V,html:x,"data-placeholder":D,onClickCapture:Q},F))}},wfEs:function(e,t,a){"use strict";function n(e){if(void 0!==window.getSelection&&void 0!==document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var a=window.getSelection();a.removeAllRanges(),a.addRange(t)}else if(void 0!==document.body.createTextRange){var n=document.body.createTextRange();n.moveToElementText(e),n.collapse(!1),n.select()}}a.d(t,"a",(function(){return n}))}}]);