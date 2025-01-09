!(function(){var be=Object.defineProperty;var re=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;var le=(r,a,e)=>a in r?be(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,se=(r,a)=>{for(var e in a||(a={}))Oe.call(a,e)&&le(r,e,a[e]);if(re)for(var e of re(a))Ae.call(a,e)&&le(r,e,a[e]);return r};(self.webpackChunk_rc_component_collapse=self.webpackChunk_rc_component_collapse||[]).push([[904],{52938:function(r,a,e){"use strict";var n;n={value:!0},a.Z=c;var l=d(e(45576)),p=d(e(21739));function d(t){return t&&t.__esModule?t:{default:t}}function c(t,I={}){let s=[];return p.default.Children.forEach(t,v=>{v==null&&!I.keepEmpty||(Array.isArray(v)?s=s.concat(c(v)):(0,l.default)(v)&&v.props?s=s.concat(c(v.props.children,I)):s.push(v))}),s}},40548:function(r,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},29537:function(r,a){"use strict";var e;e={value:!0},a.Z=void 0;const n={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(d){const{keyCode:c}=d;if(d.altKey&&!d.ctrlKey||d.metaKey||c>=n.F1&&c<=n.F12)return!1;switch(c){case n.ALT:case n.CAPS_LOCK:case n.CONTEXT_MENU:case n.CTRL:case n.DOWN:case n.END:case n.ESC:case n.HOME:case n.INSERT:case n.LEFT:case n.MAC_FF_META:case n.META:case n.NUMLOCK:case n.NUM_CENTER:case n.PAGE_DOWN:case n.PAGE_UP:case n.PAUSE:case n.PRINT_SCREEN:case n.RIGHT:case n.SHIFT:case n.UP:case n.WIN_KEY:case n.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(d){if(d>=n.ZERO&&d<=n.NINE||d>=n.NUM_ZERO&&d<=n.NUM_MULTIPLY||d>=n.A&&d<=n.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&d===0)return!0;switch(d){case n.SPACE:case n.QUESTION_MARK:case n.NUM_PLUS:case n.NUM_MINUS:case n.NUM_PERIOD:case n.NUM_DIVISION:case n.SEMICOLON:case n.DASH:case n.EQUALS:case n.COMMA:case n.PERIOD:case n.SLASH:case n.APOSTROPHE:case n.SINGLE_QUOTE:case n.OPEN_SQUARE_BRACKET:case n.BACKSLASH:case n.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};var l=a.Z=n},45576:function(r,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=p;const e=Symbol.for("react.element"),n=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function p(d){return d&&typeof d=="object"&&(d.$$typeof===e||d.$$typeof===n)&&d.type===l}},27444:function(r,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=p(e(21739));function l(t){if(typeof WeakMap!="function")return null;var I=new WeakMap,s=new WeakMap;return(l=function(v){return v?s:I})(t)}function p(t,I){if(!I&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var s=l(I);if(s&&s.has(t))return s.get(t);var v={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)){var f=o?Object.getOwnPropertyDescriptor(t,i):null;f&&(f.get||f.set)?Object.defineProperty(v,i,f):v[i]=t[i]}return v.default=t,s&&s.set(t,v),v}function d(t){const I=n.useRef();return I.current=t,n.useCallback((...v)=>{var o;return(o=I.current)==null?void 0:o.call(I,...v)},[])}var c=a.default=d},3815:function(r,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useLayoutUpdateEffect=a.default=void 0;var n=c(e(21739)),l=p(e(40548));function p(o){return o&&o.__esModule?o:{default:o}}function d(o){if(typeof WeakMap!="function")return null;var i=new WeakMap,f=new WeakMap;return(d=function(m){return m?f:i})(o)}function c(o,i){if(!i&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var f=d(i);if(f&&f.has(o))return f.get(o);var m={__proto__:null},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var E in o)if(E!=="default"&&Object.prototype.hasOwnProperty.call(o,E)){var O=b?Object.getOwnPropertyDescriptor(o,E):null;O&&(O.get||O.set)?Object.defineProperty(m,E,O):m[E]=o[E]}return m.default=o,f&&f.set(o,m),m}const t=(0,l.default)()?n.useLayoutEffect:n.useEffect,I=(o,i)=>{const f=n.useRef(!0);t(()=>o(f.current),i),t(()=>(f.current=!1,()=>{f.current=!0}),[])},s=(o,i)=>{I(f=>{if(!f)return o()},i)};a.useLayoutUpdateEffect=s;var v=a.default=I},89886:function(r,a,e){"use strict";var n;n={value:!0},a.Z=I;var l=c(e(27444)),p=e(3815),d=c(e(58026));function c(s){return s&&s.__esModule?s:{default:s}}function t(s){return s!==void 0}function I(s,v){const{defaultValue:o,value:i,onChange:f,postState:m}=v||{},[b,E]=(0,d.default)(()=>t(i)?i:t(o)?typeof o=="function"?o():o:typeof s=="function"?s():s),O=i!==void 0?i:b,M=m?m(O):O,x=(0,l.default)(f),[k,J]=(0,d.default)([O]);(0,p.useLayoutUpdateEffect)(()=>{const Y=k[0];b!==Y&&x(b,Y)},[k]),(0,p.useLayoutUpdateEffect)(()=>{t(i)||E(i)},[i]);const j=(0,l.default)((Y,q)=>{E(Y,q),J([O],q)});return[M,j]}},58026:function(r,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=d;var n=p(e(21739));function l(c){if(typeof WeakMap!="function")return null;var t=new WeakMap,I=new WeakMap;return(l=function(s){return s?I:t})(c)}function p(c,t){if(!t&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var I=l(t);if(I&&I.has(c))return I.get(c);var s={__proto__:null},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in c)if(o!=="default"&&Object.prototype.hasOwnProperty.call(c,o)){var i=v?Object.getOwnPropertyDescriptor(c,o):null;i&&(i.get||i.set)?Object.defineProperty(s,o,i):s[o]=c[o]}return s.default=c,I&&I.set(c,s),s}function d(c){const t=n.useRef(!1),[I,s]=n.useState(c);n.useEffect(()=>(t.current=!1,()=>{t.current=!0}),[]);function v(o,i){i&&t.current||s(o)}return[I,v]}},50493:function(r,a){"use strict";var e;e={value:!0},a.Z=I;const p=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`.split(/[\s\n]+/),d="aria-",c="data-";function t(s,v){return s.indexOf(v)===0}function I(s,v=!1){let o;v===!1?o={aria:!0,data:!0,attr:!0}:v===!0?o={aria:!0}:o=se({},v);const i={};return Object.keys(s).forEach(f=>{(o.aria&&(f==="role"||t(f,d))||o.data&&t(f,c)||o.attr&&p.includes(f))&&(i[f]=s[f])}),i}},84765:function(r,a){"use strict";var e;e={value:!0},e=I,a.ZP=void 0,e=c,e=v,e=void 0,e=t,e=d,e=s;let n={};const l=[],p=i=>{l.push(i)};e=p;function d(i,f){}function c(i,f){}function t(){n={}}function I(i,f,m){!f&&!n[m]&&(i(!1,m),n[m]=!0)}function s(i,f){I(d,i,f)}function v(i,f){I(c,i,f)}s.preMessage=p,s.resetWarned=t,s.noteOnce=v;var o=a.ZP=s},14247:function(r,a,e){"use strict";var n;e.r(a),e.d(a,{demos:function(){return o}});var l=e(7557),p=e.n(l),d=e(41498),c=e.n(d),t=e(21739),I=e(17425),s=e(36753),v=e(84388),o={"docs-demo-basic-demo-basic":{component:t.memo(t.lazy(function(){return e.e(433).then(e.bind(e,58188))})),asset:{type:"BLOCK",id:"docs-demo-basic-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(92231).Z},"@rc-component/collapse":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(27176).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"rc-collapse":s,react:n||(n=e.t(t,2)),"/Users/jilin/projects/antd/rc-collapse/assets/index.less":v},renderOpts:{compile:function(){var i=c()(p()().mark(function m(){var b,E=arguments;return p()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,e.e(219).then(e.bind(e,67219));case 2:return M.abrupt("return",(b=M.sent).default.apply(b,E));case 3:case"end":return M.stop()}},m)}));function f(){return i.apply(this,arguments)}return f}()}}}},16039:function(r,a,e){"use strict";var n;e.r(a),e.d(a,{demos:function(){return i}});var l=e(7557),p=e.n(l),d=e(41498),c=e.n(d),t=e(21739),I=e(87081),s=e(36753),v=e(5944),o=e(84388),i={"docs-demo-custom-icon-demo-custom-icon":{component:t.memo(t.lazy(function(){return e.e(433).then(e.bind(e,4527))})),asset:{type:"BLOCK",id:"docs-demo-custom-icon-demo-custom-icon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(30603).Z},"@rc-component/collapse":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"./_util/motionUtil.ts":{type:"FILE",value:e(81299).Z},"../../assets/index.less":{type:"FILE",value:e(27176).Z}},entry:"index.tsx"},context:{"./_util/motionUtil.ts":v,"../../assets/index.less":o,"rc-collapse":s,react:n||(n=e.t(t,2)),"/Users/jilin/projects/antd/rc-collapse/docs/examples/_util/motionUtil.ts":v,"/Users/jilin/projects/antd/rc-collapse/assets/index.less":o},renderOpts:{compile:function(){var f=c()(p()().mark(function b(){var E,O=arguments;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,e.e(219).then(e.bind(e,67219));case 2:return x.abrupt("return",(E=x.sent).default.apply(E,O));case 3:case"end":return x.stop()}},b)}));function m(){return f.apply(this,arguments)}return m}()}}}},27148:function(r,a,e){"use strict";var n;e.r(a),e.d(a,{demos:function(){return o}});var l=e(7557),p=e.n(l),d=e(41498),c=e.n(d),t=e(21739),I=e(32702),s=e(36753),v=e(84388),o={"docs-demo-fragment-demo-fragment":{component:t.memo(t.lazy(function(){return e.e(433).then(e.bind(e,37851))})),asset:{type:"BLOCK",id:"docs-demo-fragment-demo-fragment",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(98290).Z},"@rc-component/collapse":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(27176).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"rc-collapse":s,react:n||(n=e.t(t,2)),"/Users/jilin/projects/antd/rc-collapse/assets/index.less":v},renderOpts:{compile:function(){var i=c()(p()().mark(function m(){var b,E=arguments;return p()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,e.e(219).then(e.bind(e,67219));case 2:return M.abrupt("return",(b=M.sent).default.apply(b,E));case 3:case"end":return M.stop()}},m)}));function f(){return i.apply(this,arguments)}return f}()}}}},43118:function(r,a,e){"use strict";var n;e.r(a),e.d(a,{demos:function(){return i}});var l=e(7557),p=e.n(l),d=e(41498),c=e.n(d),t=e(21739),I=e(3116),s=e(36753),v=e(84388),o=e(5944),i={"docs-demo-simple-demo-simple":{component:t.memo(t.lazy(function(){return e.e(433).then(e.bind(e,53378))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51370).Z},"@rc-component/collapse":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(27176).Z},"./_util/motionUtil.ts":{type:"FILE",value:e(81299).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"./_util/motionUtil.ts":o,"rc-collapse":s,react:n||(n=e.t(t,2)),"/Users/jilin/projects/antd/rc-collapse/assets/index.less":v,"/Users/jilin/projects/antd/rc-collapse/docs/examples/_util/motionUtil.ts":o},renderOpts:{compile:function(){var f=c()(p()().mark(function b(){var E,O=arguments;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,e.e(219).then(e.bind(e,67219));case 2:return x.abrupt("return",(E=x.sent).default.apply(E,O));case 3:case"end":return x.stop()}},b)}));function m(){return f.apply(this,arguments)}return m}()}}}},25393:function(r,a,e){"use strict";e.r(a),e.d(a,{demos:function(){return p}});var n=e(21739),l=e(65159),p={}},5944:function(r,a,e){"use strict";e.r(a);var n=function(){return{height:0,opacity:0}},l=function(I){return{height:I.scrollHeight,opacity:1}},p=function(I){return{height:I.offsetHeight}},d=function(I,s){return s.propertyName==="height"},c={motionName:"rc-collapse-motion",onEnterStart:n,onEnterActive:l,onLeaveStart:p,onLeaveActive:n,onEnterEnd:d,onLeaveEnd:d,motionDeadline:500,leavedClassName:"rc-collapse-panel-hidden"};a.default=c},36753:function(r,a,e){"use strict";e.r(a),e.d(a,{Panel:function(){return he},default:function(){return xe}});var n=e(82242),l=e.n(n),p=e(37205),d=e.n(p),c=e(79800),t=e.n(c),I=e(31468),s=e.n(I),v=e(92310),o=e.n(v),i=e(89886),f=e(84765),m=e(21739),b=e(39647),E=e.n(b),O=e(52938),M=e(85573),x=e.n(M),k=e(43469),J=e(29537),j=e(27174),Y=m.forwardRef(function(u,h){var _=u.prefixCls,y=u.forceRender,K=u.className,S=u.style,U=u.children,A=u.isActive,Z=u.role,D=u.classNames,g=u.styles,R=m.useState(A||y),P=t()(R,2),C=P[0],N=P[1];return m.useEffect(function(){(y||A)&&N(!0)},[y,A]),C?(0,j.jsx)("div",{ref:h,className:o()("".concat(_,"-panel"),x()(x()({},"".concat(_,"-panel-active"),A),"".concat(_,"-panel-inactive"),!A),K),style:S,role:Z,children:(0,j.jsx)("div",{className:o()("".concat(_,"-body"),D==null?void 0:D.body),style:g==null?void 0:g.body,children:U})}):null});Y.displayName="PanelContent";var q=Y,de=["showArrow","headerClass","isActive","onItemClick","forceRender","className","classNames","styles","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],ce=m.forwardRef(function(u,h){var _=u.showArrow,y=_===void 0?!0:_,K=u.headerClass,S=u.isActive,U=u.onItemClick,A=u.forceRender,Z=u.className,D=u.classNames,g=D===void 0?{}:D,R=u.styles,P=R===void 0?{}:R,C=u.prefixCls,N=u.collapsible,W=u.accordion,B=u.panelKey,L=u.extra,w=u.header,H=u.expandIcon,T=u.openMotion,z=u.destroyInactivePanel,$=u.children,V=E()(u,de),F=N==="disabled",G=L!=null&&typeof L!="boolean",Q=x()(x()(x()({onClick:function(){U==null||U(B)},onKeyDown:function(X){(X.key==="Enter"||X.keyCode===J.Z.ENTER||X.which===J.Z.ENTER)&&(U==null||U(B))},role:W?"tab":"button"},"aria-expanded",S),"aria-disabled",F),"tabIndex",F?-1:0),ee=typeof H=="function"?H(u):(0,j.jsx)("i",{className:"arrow"}),ne=ee&&(0,j.jsx)("div",l()(l()({className:o()("".concat(C,"-expand-icon"),g==null?void 0:g.icon),style:P==null?void 0:P.icon},["header","icon"].includes(N)?Q:{}),{},{children:ee})),ye=o()("".concat(C,"-item"),x()(x()({},"".concat(C,"-item-active"),S),"".concat(C,"-item-disabled"),F),Z),Ee=o()(K,"".concat(C,"-header"),x()({},"".concat(C,"-collapsible-").concat(N),!!N),g==null?void 0:g.header),Pe=l()({className:Ee,style:P==null?void 0:P.header},["header","icon"].includes(N)?{}:Q);return(0,j.jsxs)("div",l()(l()({},V),{},{ref:h,className:ye,children:[(0,j.jsxs)("div",l()(l()({},Pe),{},{children:[y&&ne,(0,j.jsx)("span",l()(l()({className:o()("".concat(C,"-title"),g==null?void 0:g.title),style:P==null?void 0:P.title},N==="header"?Q:{}),{},{children:w})),G&&(0,j.jsx)("div",{className:"".concat(C,"-extra"),children:L})]})),(0,j.jsx)(k.ZP,l()(l()({visible:S,leavedClassName:"".concat(C,"-panel-hidden")},T),{},{forceRender:A,removeOnLeave:z,children:function(X,Ce){var ge=X.className,Me=X.style;return(0,j.jsx)(q,{ref:Ce,prefixCls:C,className:ge,classNames:g,style:Me,styles:P,isActive:S,forceRender:A,role:W?"tabpanel":void 0,children:$})}}))]}))}),ae=ce,ie=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],ue=function(h,_){var y=_.prefixCls,K=_.accordion,S=_.collapsible,U=_.destroyInactivePanel,A=_.onItemClick,Z=_.activeKey,D=_.openMotion,g=_.expandIcon;return h.map(function(R,P){var C=R.children,N=R.label,W=R.key,B=R.collapsible,L=R.onItemClick,w=R.destroyInactivePanel,H=E()(R,ie),T=String(W!=null?W:P),z=B!=null?B:S,$=w!=null?w:U,V=function(Q){z!=="disabled"&&(A(Q),L==null||L(Q))},F=!1;return K?F=Z[0]===T:F=Z.indexOf(T)>-1,(0,m.createElement)(ae,l()(l()({},H),{},{prefixCls:y,key:T,panelKey:T,isActive:F,accordion:K,openMotion:D,expandIcon:g,header:N,collapsible:z,onItemClick:V,destroyInactivePanel:$}),C)})},pe=function(h,_,y){if(!h)return null;var K=y.prefixCls,S=y.accordion,U=y.collapsible,A=y.destroyInactivePanel,Z=y.onItemClick,D=y.activeKey,g=y.openMotion,R=y.expandIcon,P=h.key||String(_),C=h.props,N=C.header,W=C.headerClass,B=C.destroyInactivePanel,L=C.collapsible,w=C.onItemClick,H=!1;S?H=D[0]===P:H=D.indexOf(P)>-1;var T=L!=null?L:U,z=function(F){T!=="disabled"&&(Z(F),w==null||w(F))},$={key:P,panelKey:P,header:N,headerClass:W,isActive:H,prefixCls:K,destroyInactivePanel:B!=null?B:A,openMotion:g,accordion:S,children:h.props.children,onItemClick:z,expandIcon:R,collapsible:T};return typeof h.type=="string"?h:(Object.keys($).forEach(function(V){typeof $[V]=="undefined"&&delete $[V]}),m.cloneElement(h,$))};function Ie(u,h,_){return Array.isArray(u)?ue(u,_):(0,O.Z)(h).map(function(y,K){return pe(y,K,_)})}var ve=Ie,fe=e(50493);function me(u){var h=u;if(!Array.isArray(h)){var _=s()(h);h=_==="number"||_==="string"?[h]:[]}return h.map(function(y){return String(y)})}var _e=m.forwardRef(function(u,h){var _=u.prefixCls,y=_===void 0?"rc-collapse":_,K=u.destroyInactivePanel,S=K===void 0?!1:K,U=u.style,A=u.accordion,Z=u.className,D=u.children,g=u.collapsible,R=u.openMotion,P=u.expandIcon,C=u.activeKey,N=u.defaultActiveKey,W=u.onChange,B=u.items,L=o()(y,Z),w=(0,i.Z)([],{value:C,onChange:function(G){return W==null?void 0:W(G)},defaultValue:N,postState:me}),H=t()(w,2),T=H[0],z=H[1],$=function(G){return z(function(){if(A)return T[0]===G?[]:[G];var Q=T.indexOf(G),ee=Q>-1;return ee?T.filter(function(ne){return ne!==G}):[].concat(d()(T),[G])})};(0,f.ZP)(!D,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var V=ve(B,D,{prefixCls:y,accordion:A,openMotion:R,expandIcon:P,collapsible:g,destroyInactivePanel:S,onItemClick:$,activeKey:T});return(0,j.jsx)("div",l()(l()({ref:h,className:L,style:U,role:A?"tablist":void 0},(0,fe.Z)(u,{aria:!0,data:!0})),{},{children:V}))}),te=Object.assign(_e,{Panel:ae}),xe=te,he=te.Panel},84388:function(r,a,e){"use strict";e.r(a)},70568:function(r,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return l}});var n=e(17425);const l=[]},96596:function(r,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return l}});var n=e(87081);const l=[]},81470:function(r,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return l}});var n=e(32702);const l=[]},37575:function(r,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return l}});var n=e(3116);const l=[]},27623:function(r,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return l}});var n=e(65159);const l=[{value:"rc-collapse ui component for react",paraId:0,tocIndex:0},{value:" ",paraId:1,tocIndex:0},{value:" ",paraId:1,tocIndex:0},{value:" ",paraId:1,tocIndex:0},{value:"https://collapse-react-component.vercel.app",paraId:2,tocIndex:1},{value:`var Collapse = require('rc-collapse');
var Panel = Collapse.Panel;
var React = require('react');
var ReactDOM = require('react-dom');
require('rc-collapse/assets/index.css');

var App = (
  <Collapse accordion={true}>
    <Panel header="hello" headerClass="my-header-class">
      this is panel content
    </Panel>
    <Panel header="title2">this is panel content2 or other</Panel>
  </Collapse>
);
ReactDOM.render(App, container);
`,paraId:3,tocIndex:3},{value:"support ie8,ie8+,chrome,firefox,safari",paraId:4,tocIndex:4},{value:`
    `,paraId:5,tocIndex:6},{value:`
    `,paraId:5,tocIndex:6},{value:`
        `,paraId:5,tocIndex:6},{value:"name",paraId:5,tocIndex:6},{value:`
        `,paraId:5,tocIndex:6},{value:"type",paraId:5,tocIndex:6},{value:`
        `,paraId:5,tocIndex:6},{value:"default",paraId:5,tocIndex:6},{value:`
        `,paraId:5,tocIndex:6},{value:"description",paraId:5,tocIndex:6},{value:`
    `,paraId:5,tocIndex:6},{value:`
    `,paraId:5,tocIndex:6},{value:`
    `,paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"activeKey",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"String|Array",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"The first panel key",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"current active Panel key",paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
        `,paraId:5,tocIndex:6},{value:"className",paraId:5,tocIndex:6},{value:`
        `,paraId:5,tocIndex:6},{value:"String or object",paraId:5,tocIndex:6},{value:`
        `,paraId:5,tocIndex:6},{value:`
        `,paraId:5,tocIndex:6},{value:"custom class-$uname to apply",paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"defaultActiveKey",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"String|Array",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"null",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"default active key",paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"destroyInactivePanel",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"Boolean",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"If destroy the panel which not active, default false. ",paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"accordion",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"Boolean",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"accordion mode, default is null, is collapse mode",paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"onChange",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"Function(key)",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"noop",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"called when collapse Panel is changed",paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"expandIcon",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"(props: PanelProps) => ReactNode",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"specific the custom expand icon.",paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"collapsible",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"'header' | 'icon' | 'disabled'",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"specify whether the panel of children is collapsible or the area of collapsible.",paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"items",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:`
            `,paraId:5,tocIndex:6},{value:"interface.ts#ItemType",paraId:6,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:`
          `,paraId:5,tocIndex:6},{value:"collapse items content",paraId:5,tocIndex:6},{value:`
      `,paraId:5,tocIndex:6},{value:`
    `,paraId:5,tocIndex:6},{value:"If ",paraId:7,tocIndex:6},{value:"accordion",paraId:7,tocIndex:6},{value:" is null or false, every panel can open. Opening another panel will not close any of the other panels. ",paraId:7,tocIndex:6},{value:"activeKey",paraId:7,tocIndex:6},{value:" should be an string, if passing an array (the first item in the array will be used).",paraId:7,tocIndex:6},{value:"If ",paraId:8,tocIndex:6},{value:"accordion",paraId:8,tocIndex:6},{value:" is true, only one panel can be open. Opening another panel will cause the previously opened panel to close. ",paraId:8,tocIndex:6},{value:"activeKey",paraId:8,tocIndex:6},{value:" should be an string, if passing an array (the first item in the array will be used).",paraId:8,tocIndex:6},{value:"deprecated",paraId:9,tocIndex:7},{value:" use ",paraId:9,tocIndex:7},{value:"items",paraId:9,tocIndex:7},{value:" instead, will be removed in ",paraId:9,tocIndex:7},{value:"v4.0.0",paraId:9,tocIndex:7},{value:`
    `,paraId:10,tocIndex:7},{value:`
    `,paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"name",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"type",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"default",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"description",paraId:10,tocIndex:7},{value:`
    `,paraId:10,tocIndex:7},{value:`
    `,paraId:10,tocIndex:7},{value:`
    `,paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"header",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"String or node",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"header content of Panel",paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"headerClass",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"String",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"' '",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"custom className to apply to header",paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"showArrow",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"true",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"show arrow beside header",paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"className",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"String or object",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"custom className to apply",paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"classNames",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"{ header?: string, body?: string }",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"Semantic structure className",paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"style",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"object",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"custom style",paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"styles",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"{ header?: React.CSSProperties, body?: React.CSSProperties }",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"Semantic structure styles",paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"openMotion",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"object",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"set the animation of open behavior, [more](https://github.com/react-component/motion). Different with v2, closed pane use a `rc-collapse-content-hidden` class to set `display: none` for hidden.",paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"forceRender",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"false",paraId:10,tocIndex:7},{value:`
        `,paraId:10,tocIndex:7},{value:"forced render of content in panel, not lazy render after clicking on header",paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"extra",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"String | ReactNode",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"Content to render in the right of the panel header",paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"collapsible",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"'header' | 'icon' | 'disabled'",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:`
          `,paraId:10,tocIndex:7},{value:"specify whether the panel be collapsible or the area of collapsible.",paraId:10,tocIndex:7},{value:`
      `,paraId:10,tocIndex:7},{value:`
    `,paraId:10,tocIndex:7},{value:"disabled",paraId:11,tocIndex:7},{value:" is removed since 3.0.0, please use ",paraId:11,tocIndex:7},{value:"collapsible=disabled",paraId:11,tocIndex:7},{value:" replace it.",paraId:11,tocIndex:7},{value:"If ",paraId:12,tocIndex:8},{value:"key",paraId:12,tocIndex:8},{value:" is not provided, the panel's index will be used instead.",paraId:12,tocIndex:8},{value:"By default, Collapse will listen ",paraId:13,tocIndex:9},{value:"onKeyDown",paraId:13,tocIndex:9},{value:"(<3.7.0 ",paraId:13,tocIndex:9},{value:"onKeyPress",paraId:13,tocIndex:9},{value:") event with ",paraId:13,tocIndex:9},{value:"enter",paraId:13,tocIndex:9},{value:" key to toggle panel's active state when ",paraId:13,tocIndex:9},{value:"collapsible",paraId:13,tocIndex:9},{value:" is not ",paraId:13,tocIndex:9},{value:"disabled",paraId:13,tocIndex:9},{value:". If you want to disable this behavior, you can prevent the event from bubbling like this:",paraId:13,tocIndex:9},{value:`const App = () => {
  const items: CollapseProps['items'] = [
    {
      label: <input onKeyDown={(e) => e.stopPropagation()} />,
      children: 'content',
    },
    {
      label: (
        <div onKeyDown={(e) => e.stopPropagation()}>
          <CustomComponent />
        </div>
      ),
      children: 'content',
    },
    {
      label: 'title 2',
      children: 'content 2',
      collapsible: 'disabled',
    },
    {
      label: 'title 3',
      children: 'content 3',
      onItemClick: console.log,
    },
  ];

  return <Collapse items={items} />;
};
`,paraId:14,tocIndex:9},{value:`npm install
npm start
`,paraId:15,tocIndex:10},{value:`npm test
`,paraId:16,tocIndex:11},{value:`npm test -- --coverage
`,paraId:17,tocIndex:12},{value:"rc-collapse is released under the MIT license.",paraId:18,tocIndex:13}]},27176:function(r,a){"use strict";a.Z=`@prefixCls: rc-collapse;
@text-color: #666;
@borderStyle: 1px solid #d9d9d9;

@import './motion.less';

#arrow {
  .common() {
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
  }
  .right(@w, @h, @color) {
    border-top: @w solid transparent;
    border-bottom: @w solid transparent;
    border-left: @h solid @color;
  }

  .bottom(@w, @h, @color) {
    border-left: @w solid transparent;
    border-right: @w solid transparent;
    border-top: @h solid @color;
  }
}

.@{prefixCls} {
  background-color: #f7f7f7;
  border-radius: 3px;
  border: @borderStyle;

  // &-anim-active {
  //   transition: height 0.2s ease-out;
  // }

  & > &-item {
    border-top: @borderStyle;
    &:first-child {
      border-top: none;
    }

    > .@{prefixCls}-header {
      display: flex;
      align-items: center;
      line-height: 22px;
      padding: 10px 16px;
      color: #666;
      cursor: pointer;
      .arrow {
        display: inline-block;
        content: '\\20';
        #arrow > .common();
        #arrow > .right(3px, 4px, #666);
        vertical-align: middle;
        margin-right: 8px;
      }

      .@{prefixCls}-extra {
        margin: 0 16px 0 auto;
      }
    }
    .@{prefixCls}-collapsible-header {
      cursor: default;
      .@{prefixCls}-title {
        cursor: pointer;
      }
      .@{prefixCls}-expand-icon {
        cursor: pointer;
      }
    }
    .@{prefixCls}-collapsible-icon {
      cursor: default;
      .@{prefixCls}-expand-icon {
        cursor: pointer;
      }
    }
  }

  & > &-item-disabled > .@{prefixCls}-header {
    cursor: not-allowed;
    color: #999;
    background-color: #f3f3f3;
  }

  &-panel {
    overflow: hidden;
    color: @text-color;
    padding: 0 16px;
    background-color: #fff;

    & > &-box {
      margin-top: 16px;
      margin-bottom: 16px;
    }

    // &-inactive {
    //   display: none;
    // }
  }

  &-item:last-child {
    > .@{prefixCls}-panel {
      border-radius: 0 0 3px 3px;
    }
  }

  & > &-item-active {
    > .@{prefixCls}-header {
      .arrow {
        position: relative;
        top: 2px;
        #arrow > .bottom(3px, 4px, #666);
        margin-right: 6px;
      }
    }
  }
}
`},81299:function(r,a){"use strict";a.Z=`import type { CSSMotionProps, MotionEndEventHandler, MotionEventHandler } from 'rc-motion';

const getCollapsedHeight: MotionEventHandler = () => ({ height: 0, opacity: 0 });
const getRealHeight: MotionEventHandler = (node) => ({ height: node.scrollHeight, opacity: 1 });
const getCurrentHeight: MotionEventHandler = (node) => ({ height: node.offsetHeight });
const skipOpacityTransition: MotionEndEventHandler = (_, event) =>
  (event as TransitionEvent).propertyName === 'height';

const collapseMotion: CSSMotionProps = {
  motionName: 'rc-collapse-motion',
  onEnterStart: getCollapsedHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500,
  leavedClassName: 'rc-collapse-panel-hidden',
};

export default collapseMotion;
`},92231:function(r,a){"use strict";a.Z=`import type { CollapseProps } from 'rc-collapse';
import Collapse from 'rc-collapse';
import * as React from 'react';
import '../../assets/index.less';

const App = () => {
  const items: CollapseProps['items'] = [
    {
      label: <input onKeyDown={(e) => e.stopPropagation()} />,
      children: 'content',
    },
    {
      label: 'title 2',
      children: 'content 2',
      collapsible: 'disabled',
    },
    {
      label: 'title 3',
      children: 'content 3',
      onItemClick: console.log,
    },
  ];

  return <Collapse items={items} />;
};

export default App;
`},30603:function(r,a){"use strict";a.Z=`import Collapse, { Panel } from 'rc-collapse';
import * as React from 'react';
import '../../assets/index.less';
import motion from './_util/motionUtil';

const initLength = 3;

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;

function random() {
  return parseInt((Math.random() * 10).toString(), 10) + 1;
}

const arrowPath =
  'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88' +
  '.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.' +
  '6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5.' +
  '2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z';

function expandIcon({ isActive }) {
  return (
    <i style={{ marginRight: '.5rem' }}>
      <svg
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        fill="currentColor"
        style={{
          verticalAlign: '-.125em',
          transition: 'transform .2s',
          transform: \`rotate(\${isActive ? 90 : 0}deg)\`,
        }}
      >
        <path d={arrowPath} />
      </svg>
    </i>
  );
}

const App: React.FC = () => {
  const [, reRender] = React.useState({});
  const [accordion, setAccordion] = React.useState(false);
  const [activeKey, setActiveKey] = React.useState<React.Key | React.Key[]>(['4']);

  const time = random();

  const panelItems = Array.from<object, React.ReactNode>({ length: initLength }, (_, i) => {
    const key = i + 1;
    return (
      <Panel header={\`This is panel header \${key}\`} key={key}>
        <p>{text.repeat(time)}</p>
      </Panel>
    );
  }).concat(
    <Panel header={\`This is panel header \${initLength + 1}\`} key={initLength + 1}>
      <Collapse defaultActiveKey="1" expandIcon={expandIcon}>
        <Panel header="This is panel nest panel" key="1" id="header-test">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Panel>,
    <Panel header={\`This is panel header \${initLength + 2}\`} key={initLength + 2}>
      <Collapse defaultActiveKey="1">
        <Panel header="This is panel nest panel" key="1" id="another-test">
          <form>
            <label htmlFor="test">Name:&nbsp;</label>
            <input type="text" id="test" />
          </form>
        </Panel>
      </Collapse>
    </Panel>,
  );

  const tools = (
    <>
      <button type="button" onClick={() => reRender({})}>
        reRender
      </button>
      <br />
      <br />
      <button type="button" onClick={() => setAccordion((prev) => !prev)}>
        {accordion ? 'Mode: accordion' : 'Mode: collapse'}
      </button>
      <br />
      <br />
      <button type="button" onClick={() => setActiveKey(['2'])}>
        active header 2
      </button>
      <br />
      <br />
    </>
  );

  return (
    <>
      {tools}
      <Collapse
        accordion={accordion}
        onChange={setActiveKey}
        activeKey={activeKey}
        expandIcon={expandIcon}
        openMotion={motion}
      >
        {panelItems}
      </Collapse>
    </>
  );
};

export default App;
`},98290:function(r,a){"use strict";a.Z=`import Collapse, { Panel } from 'rc-collapse';
import * as React from 'react';
import { Fragment } from 'react';
import '../../assets/index.less';

const App = () => (
  <Collapse>
    <Panel header="title">content</Panel>
    <Panel header="title">content</Panel>
    <Fragment>
      <Panel header="title">content</Panel>
      <Panel header="title">content</Panel>
    </Fragment>
    <Fragment>
      <Fragment>
        <Panel header="title">content</Panel>
        <Panel header="title">content</Panel>
      </Fragment>
    </Fragment>
  </Collapse>
);

export default App;
`},51370:function(r,a){"use strict";a.Z=`import type { CollapseProps } from 'rc-collapse';
import Collapse, { Panel } from 'rc-collapse';
import * as React from 'react';
import '../../assets/index.less';
import motion from './_util/motionUtil';

const initLength = 3;

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;

function random() {
  return parseInt((Math.random() * 10).toString(), 10) + 1;
}

const arrowPath =
  'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88' +
  '.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.' +
  '6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5.' +
  '2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z';

function expandIcon({ isActive }) {
  return (
    <i style={{ marginRight: '.5rem' }}>
      <svg
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        fill="currentColor"
        style={{
          verticalAlign: '-.125em',
          transition: 'transform .2s',
          transform: \`rotate(\${isActive ? 90 : 0}deg)\`,
        }}
      >
        <path d={arrowPath} />
      </svg>
    </i>
  );
}

const App: React.FC = () => {
  const [, reRender] = React.useState({});
  const [accordion, setAccordion] = React.useState(false);
  const [activeKey, setActiveKey] = React.useState<React.Key | React.Key[]>(['4']);
  const [collapsible, setCollapsible] = React.useState<CollapseProps['collapsible']>();

  const time = random();

  const panelItems = Array.from<object, React.ReactNode>({ length: initLength }, (_, i) => {
    const key = i + 1;
    return (
      <Panel header={\`This is panel header \${key}\`} key={key}>
        <p>{text.repeat(time)}</p>
      </Panel>
    );
  }).concat(
    <Panel header={\`This is panel header \${initLength + 1}\`} key={initLength + 1}>
      <Collapse defaultActiveKey="1" expandIcon={expandIcon}>
        <Panel header="This is panel nest panel" key="1" id="header-test">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Panel>,
    <Panel header={\`This is panel header \${initLength + 2}\`} key={initLength + 2}>
      <Collapse defaultActiveKey="1">
        <Panel header="This is panel nest panel" key="1" id="another-test">
          <form>
            <label htmlFor="test">Name:&nbsp;</label>
            <input type="text" id="test" />
          </form>
        </Panel>
      </Collapse>
    </Panel>,
    <Panel
      header={\`This is panel header \${initLength + 3}\`}
      key={initLength + 3}
      extra={<span>Extra Node</span>}
    >
      <p>Panel with extra</p>
    </Panel>,
  );

  const handleCollapsibleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = [undefined, 'header', 'icon', 'disabled'];
    setCollapsible(values[e.target.value]);
  };

  const tools = (
    <>
      <button type="button" onClick={() => reRender({})}>
        reRender
      </button>
      <br />
      <br />
      <button type="button" onClick={() => setAccordion((prev) => !prev)}>
        {accordion ? 'Mode: accordion' : 'Mode: collapse'}
      </button>
      <br />
      <br />
      <div>
        collapsible:
        <select onChange={handleCollapsibleChange}>
          <option value={0}>default</option>
          <option value={1}>header</option>
          <option value={2}>icon</option>
          <option value={3}>disabled</option>
        </select>
      </div>
      <br />
      <button type="button" onClick={() => setActiveKey(['2'])}>
        active header 2
      </button>
      <br />
      <br />
    </>
  );

  return (
    <>
      {tools}
      <Collapse
        accordion={accordion}
        onChange={setActiveKey}
        activeKey={activeKey}
        expandIcon={expandIcon}
        openMotion={motion}
        collapsible={collapsible}
      >
        {panelItems}
      </Collapse>
    </>
  );
};

export default App;
`},61004:function(r,a,e){var n=e(39572);function l(p){if(Array.isArray(p))return n(p)}r.exports=l,r.exports.__esModule=!0,r.exports.default=r.exports},97012:function(r){function a(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}r.exports=a,r.exports.__esModule=!0,r.exports.default=r.exports},93215:function(r){function a(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=a,r.exports.__esModule=!0,r.exports.default=r.exports},39647:function(r,a,e){var n=e(32890);function l(p,d){if(p==null)return{};var c=n(p,d),t,I;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(p);for(I=0;I<s.length;I++)t=s[I],!(d.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(p,t)&&(c[t]=p[t])}return c}r.exports=l,r.exports.__esModule=!0,r.exports.default=r.exports},32890:function(r){function a(e,n){if(e==null)return{};var l={},p=Object.keys(e),d,c;for(c=0;c<p.length;c++)d=p[c],!(n.indexOf(d)>=0)&&(l[d]=e[d]);return l}r.exports=a,r.exports.__esModule=!0,r.exports.default=r.exports},37205:function(r,a,e){var n=e(61004),l=e(97012),p=e(66109),d=e(93215);function c(t){return n(t)||l(t)||p(t)||d()}r.exports=c,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
}());