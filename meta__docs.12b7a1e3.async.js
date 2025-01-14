!(function(){var be=Object.defineProperty;var se=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;var de=(r,a,e)=>a in r?be(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,ce=(r,a)=>{for(var e in a||(a={}))Oe.call(a,e)&&de(r,e,a[e]);if(se)for(var e of se(a))Ae.call(a,e)&&de(r,e,a[e]);return r};(self.webpackChunk_rc_component_collapse=self.webpackChunk_rc_component_collapse||[]).push([[904],{48346:function(r,a,e){"use strict";var n;n={value:!0},a.Z=c;var l=d(e(25529)),p=d(e(21739));function d(t){return t&&t.__esModule?t:{default:t}}function c(t,I={}){let s=[];return p.default.Children.forEach(t,v=>{v==null&&!I.keepEmpty||(Array.isArray(v)?s=s.concat(c(v)):(0,l.default)(v)&&v.props?s=s.concat(c(v.props.children,I)):s.push(v))}),s}},79907:function(r,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},50018:function(r,a){"use strict";var e;e={value:!0},a.Z=void 0;const n={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(d){const{keyCode:c}=d;if(d.altKey&&!d.ctrlKey||d.metaKey||c>=n.F1&&c<=n.F12)return!1;switch(c){case n.ALT:case n.CAPS_LOCK:case n.CONTEXT_MENU:case n.CTRL:case n.DOWN:case n.END:case n.ESC:case n.HOME:case n.INSERT:case n.LEFT:case n.MAC_FF_META:case n.META:case n.NUMLOCK:case n.NUM_CENTER:case n.PAGE_DOWN:case n.PAGE_UP:case n.PAUSE:case n.PRINT_SCREEN:case n.RIGHT:case n.SHIFT:case n.UP:case n.WIN_KEY:case n.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(d){if(d>=n.ZERO&&d<=n.NINE||d>=n.NUM_ZERO&&d<=n.NUM_MULTIPLY||d>=n.A&&d<=n.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&d===0)return!0;switch(d){case n.SPACE:case n.QUESTION_MARK:case n.NUM_PLUS:case n.NUM_MINUS:case n.NUM_PERIOD:case n.NUM_DIVISION:case n.SEMICOLON:case n.DASH:case n.EQUALS:case n.COMMA:case n.PERIOD:case n.SLASH:case n.APOSTROPHE:case n.SINGLE_QUOTE:case n.OPEN_SQUARE_BRACKET:case n.BACKSLASH:case n.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};var l=a.Z=n},25529:function(r,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=p;const e=Symbol.for("react.element"),n=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function p(d){return d&&typeof d=="object"&&(d.$$typeof===e||d.$$typeof===n)&&d.type===l}},57366:function(r,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=p(e(21739));function l(t){if(typeof WeakMap!="function")return null;var I=new WeakMap,s=new WeakMap;return(l=function(v){return v?s:I})(t)}function p(t,I){if(!I&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var s=l(I);if(s&&s.has(t))return s.get(t);var v={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(u!=="default"&&Object.prototype.hasOwnProperty.call(t,u)){var f=o?Object.getOwnPropertyDescriptor(t,u):null;f&&(f.get||f.set)?Object.defineProperty(v,u,f):v[u]=t[u]}return v.default=t,s&&s.set(t,v),v}function d(t){const I=n.useRef();return I.current=t,n.useCallback((...v)=>{var o;return(o=I.current)==null?void 0:o.call(I,...v)},[])}var c=a.default=d},46757:function(r,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useLayoutUpdateEffect=a.default=void 0;var n=c(e(21739)),l=p(e(79907));function p(o){return o&&o.__esModule?o:{default:o}}function d(o){if(typeof WeakMap!="function")return null;var u=new WeakMap,f=new WeakMap;return(d=function(m){return m?f:u})(o)}function c(o,u){if(!u&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var f=d(u);if(f&&f.has(o))return f.get(o);var m={__proto__:null},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in o)if(P!=="default"&&Object.prototype.hasOwnProperty.call(o,P)){var O=b?Object.getOwnPropertyDescriptor(o,P):null;O&&(O.get||O.set)?Object.defineProperty(m,P,O):m[P]=o[P]}return m.default=o,f&&f.set(o,m),m}const t=(0,l.default)()?n.useLayoutEffect:n.useEffect,I=(o,u)=>{const f=n.useRef(!0);t(()=>o(f.current),u),t(()=>(f.current=!1,()=>{f.current=!0}),[])},s=(o,u)=>{I(f=>{if(!f)return o()},u)};a.useLayoutUpdateEffect=s;var v=a.default=I},54095:function(r,a,e){"use strict";var n;n={value:!0},a.Z=I;var l=c(e(57366)),p=e(46757),d=c(e(66186));function c(s){return s&&s.__esModule?s:{default:s}}function t(s){return s!==void 0}function I(s,v){const{defaultValue:o,value:u,onChange:f,postState:m}=v||{},[b,P]=(0,d.default)(()=>t(u)?u:t(o)?typeof o=="function"?o():o:typeof s=="function"?s():s),O=u!==void 0?u:b,g=m?m(O):O,h=(0,l.default)(f),[q,ee]=(0,d.default)([O]);(0,p.useLayoutUpdateEffect)(()=>{const X=q[0];b!==X&&h(b,X)},[q]),(0,p.useLayoutUpdateEffect)(()=>{t(u)||P(u)},[u]);const L=(0,l.default)((X,ne)=>{P(X,ne),ee([O],ne)});return[g,L]}},66186:function(r,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=d;var n=p(e(21739));function l(c){if(typeof WeakMap!="function")return null;var t=new WeakMap,I=new WeakMap;return(l=function(s){return s?I:t})(c)}function p(c,t){if(!t&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var I=l(t);if(I&&I.has(c))return I.get(c);var s={__proto__:null},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in c)if(o!=="default"&&Object.prototype.hasOwnProperty.call(c,o)){var u=v?Object.getOwnPropertyDescriptor(c,o):null;u&&(u.get||u.set)?Object.defineProperty(s,o,u):s[o]=c[o]}return s.default=c,I&&I.set(c,s),s}function d(c){const t=n.useRef(!1),[I,s]=n.useState(c);n.useEffect(()=>(t.current=!1,()=>{t.current=!0}),[]);function v(o,u){u&&t.current||s(o)}return[I,v]}},88090:function(r,a){"use strict";var e;e={value:!0},a.Z=I;const p=`accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`.split(/[\s\n]+/),d="aria-",c="data-";function t(s,v){return s.indexOf(v)===0}function I(s,v=!1){let o;v===!1?o={aria:!0,data:!0,attr:!0}:v===!0?o={aria:!0}:o=ce({},v);const u={};return Object.keys(s).forEach(f=>{(o.aria&&(f==="role"||t(f,d))||o.data&&t(f,c)||o.attr&&p.includes(f))&&(u[f]=s[f])}),u}},97144:function(r,a){"use strict";var e;e={value:!0},e=I,a.ZP=void 0,e=c,e=v,e=void 0,e=t,e=d,e=s;let n={};const l=[],p=u=>{l.push(u)};e=p;function d(u,f){}function c(u,f){}function t(){n={}}function I(u,f,m){!f&&!n[m]&&(u(!1,m),n[m]=!0)}function s(u,f){I(d,u,f)}function v(u,f){I(c,u,f)}s.preMessage=p,s.resetWarned=t,s.noteOnce=v;var o=a.ZP=s},14247:function(r,a,e){"use strict";var n;e.r(a),e.d(a,{demos:function(){return o}});var l=e(7557),p=e.n(l),d=e(41498),c=e.n(d),t=e(21739),I=e(17425),s=e(36753),v=e(84388),o={"docs-demo-basic-demo-basic":{component:t.memo(t.lazy(function(){return e.e(433).then(e.bind(e,58188))})),asset:{type:"BLOCK",id:"docs-demo-basic-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(92231).Z},"@rc-component/collapse":{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(27176).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"rc-collapse":s,react:n||(n=e.t(t,2)),"/Users/jilin/projects/antd/rc-collapse/assets/index.less":v},renderOpts:{compile:function(){var u=c()(p()().mark(function m(){var b,P=arguments;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(219).then(e.bind(e,67219));case 2:return g.abrupt("return",(b=g.sent).default.apply(b,P));case 3:case"end":return g.stop()}},m)}));function f(){return u.apply(this,arguments)}return f}()}}}},16039:function(r,a,e){"use strict";var n;e.r(a),e.d(a,{demos:function(){return u}});var l=e(7557),p=e.n(l),d=e(41498),c=e.n(d),t=e(21739),I=e(87081),s=e(36753),v=e(84388),o=e(5944),u={"docs-demo-custom-icon-demo-custom-icon":{component:t.memo(t.lazy(function(){return e.e(433).then(e.bind(e,4527))})),asset:{type:"BLOCK",id:"docs-demo-custom-icon-demo-custom-icon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(30603).Z},"@rc-component/collapse":{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(27176).Z},"./_util/motionUtil.ts":{type:"FILE",value:e(81299).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"./_util/motionUtil.ts":o,"rc-collapse":s,react:n||(n=e.t(t,2)),"/Users/jilin/projects/antd/rc-collapse/assets/index.less":v,"/Users/jilin/projects/antd/rc-collapse/docs/examples/_util/motionUtil.ts":o},renderOpts:{compile:function(){var f=c()(p()().mark(function b(){var P,O=arguments;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(219).then(e.bind(e,67219));case 2:return h.abrupt("return",(P=h.sent).default.apply(P,O));case 3:case"end":return h.stop()}},b)}));function m(){return f.apply(this,arguments)}return m}()}}}},27148:function(r,a,e){"use strict";var n;e.r(a),e.d(a,{demos:function(){return o}});var l=e(7557),p=e.n(l),d=e(41498),c=e.n(d),t=e(21739),I=e(32702),s=e(36753),v=e(84388),o={"docs-demo-fragment-demo-fragment":{component:t.memo(t.lazy(function(){return e.e(433).then(e.bind(e,37851))})),asset:{type:"BLOCK",id:"docs-demo-fragment-demo-fragment",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(98290).Z},"@rc-component/collapse":{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(27176).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"rc-collapse":s,react:n||(n=e.t(t,2)),"/Users/jilin/projects/antd/rc-collapse/assets/index.less":v},renderOpts:{compile:function(){var u=c()(p()().mark(function m(){var b,P=arguments;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(219).then(e.bind(e,67219));case 2:return g.abrupt("return",(b=g.sent).default.apply(b,P));case 3:case"end":return g.stop()}},m)}));function f(){return u.apply(this,arguments)}return f}()}}}},43118:function(r,a,e){"use strict";var n;e.r(a),e.d(a,{demos:function(){return u}});var l=e(7557),p=e.n(l),d=e(41498),c=e.n(d),t=e(21739),I=e(3116),s=e(36753),v=e(5944),o=e(84388),u={"docs-demo-simple-demo-simple":{component:t.memo(t.lazy(function(){return e.e(433).then(e.bind(e,53378))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51370).Z},"@rc-component/collapse":{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"},"./_util/motionUtil.ts":{type:"FILE",value:e(81299).Z},"../../assets/index.less":{type:"FILE",value:e(27176).Z}},entry:"index.tsx"},context:{"./_util/motionUtil.ts":v,"../../assets/index.less":o,"rc-collapse":s,react:n||(n=e.t(t,2)),"/Users/jilin/projects/antd/rc-collapse/docs/examples/_util/motionUtil.ts":v,"/Users/jilin/projects/antd/rc-collapse/assets/index.less":o},renderOpts:{compile:function(){var f=c()(p()().mark(function b(){var P,O=arguments;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(219).then(e.bind(e,67219));case 2:return h.abrupt("return",(P=h.sent).default.apply(P,O));case 3:case"end":return h.stop()}},b)}));function m(){return f.apply(this,arguments)}return m}()}}}},25393:function(r,a,e){"use strict";e.r(a),e.d(a,{demos:function(){return p}});var n=e(21739),l=e(65159),p={}},5944:function(r,a,e){"use strict";e.r(a);var n=function(){return{height:0,opacity:0}},l=function(I){return{height:I.scrollHeight,opacity:1}},p=function(I){return{height:I.offsetHeight}},d=function(I,s){return s.propertyName==="height"},c={motionName:"rc-collapse-motion",onEnterStart:n,onEnterActive:l,onLeaveStart:p,onLeaveActive:n,onEnterEnd:d,onLeaveEnd:d,motionDeadline:500,leavedClassName:"rc-collapse-panel-hidden"};a.default=c},36753:function(r,a,e){"use strict";e.r(a),e.d(a,{Panel:function(){return Ee},default:function(){return ye}});var n=e(82242),l=e.n(n),p=e(37205),d=e.n(p),c=e(79800),t=e.n(c),I=e(31468),s=e.n(I),v=e(92310),o=e.n(v),u=e(54095),f=e(97144),m=e(21739),b=e(39647),P=e.n(b),O=e(48346),g=e(85573),h=e.n(g),q=e(43469),ee=e(50018),L=e(27174),X=m.forwardRef(function(i,E){var _=i.prefixCls,x=i.forceRender,j=i.className,K=i.style,U=i.children,R=i.isActive,$=i.role,N=i.classNames,C=i.styles,G=m.useState(R||x),M=t()(G,2),y=M[0],A=M[1];return m.useEffect(function(){(x||R)&&A(!0)},[x,R]),y?(0,L.jsx)("div",{ref:E,className:o()("".concat(_,"-panel"),h()(h()({},"".concat(_,"-panel-active"),R),"".concat(_,"-panel-inactive"),!R),j),style:K,role:$,children:(0,L.jsx)("div",{className:o()("".concat(_,"-body"),N==null?void 0:N.body),style:C==null?void 0:C.body,children:U})}):null});X.displayName="PanelContent";var ne=X,ie=["showArrow","headerClass","isActive","onItemClick","forceRender","className","classNames","styles","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],ue=m.forwardRef(function(i,E){var _=i.showArrow,x=_===void 0?!0:_,j=i.headerClass,K=i.isActive,U=i.onItemClick,R=i.forceRender,$=i.className,N=i.classNames,C=N===void 0?{}:N,G=i.styles,M=G===void 0?{}:G,y=i.prefixCls,A=i.collapsible,D=i.accordion,Q=i.panelKey,S=i.extra,w=i.header,W=i.expandIcon,H=i.openMotion,V=i.destroyInactivePanel,T=i.children,Y=P()(i,ie),B=A==="disabled",z=S!=null&&typeof S!="boolean",F=h()(h()(h()({onClick:function(){U==null||U(Q)},onKeyDown:function(J){(J.key==="Enter"||J.keyCode===ee.Z.ENTER||J.which===ee.Z.ENTER)&&(U==null||U(Q))},role:D?"tab":"button"},"aria-expanded",K),"aria-disabled",B),"tabIndex",B?-1:0),Z=typeof W=="function"?W(i):(0,L.jsx)("i",{className:"arrow"}),k=Z&&(0,L.jsx)("div",l()(l()({className:o()("".concat(y,"-expand-icon"),C==null?void 0:C.icon),style:M==null?void 0:M.icon},["header","icon"].includes(A)?F:{}),{},{children:Z})),ae=o()("".concat(y,"-item"),h()(h()({},"".concat(y,"-item-active"),K),"".concat(y,"-item-disabled"),B),$),te=o()(j,"".concat(y,"-header"),h()({},"".concat(y,"-collapsible-").concat(A),!!A),C==null?void 0:C.header),Pe=l()({className:te,style:M==null?void 0:M.header},["header","icon"].includes(A)?{}:F);return(0,L.jsxs)("div",l()(l()({},Y),{},{ref:E,className:ae,children:[(0,L.jsxs)("div",l()(l()({},Pe),{},{children:[x&&k,(0,L.jsx)("span",l()(l()({className:o()("".concat(y,"-title"),C==null?void 0:C.title),style:M==null?void 0:M.title},A==="header"?F:{}),{},{children:w})),z&&(0,L.jsx)("div",{className:"".concat(y,"-extra"),children:S})]})),(0,L.jsx)(q.ZP,l()(l()({visible:K,leavedClassName:"".concat(y,"-panel-hidden")},H),{},{forceRender:R,removeOnLeave:V,children:function(J,Ce){var ge=J.className,Me=J.style;return(0,L.jsx)(ne,{ref:Ce,prefixCls:y,className:ge,classNames:C,style:Me,styles:M,isActive:K,forceRender:R,role:D?"tabpanel":void 0,children:T})}}))]}))}),oe=ue,pe=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],Ie=function(E,_){var x=_.prefixCls,j=_.accordion,K=_.collapsible,U=_.destroyInactivePanel,R=_.onItemClick,$=_.activeKey,N=_.openMotion,C=_.expandIcon,G=_.classNames,M=_.styles;return E.map(function(y,A){var D=y.children,Q=y.label,S=y.key,w=y.collapsible,W=y.onItemClick,H=y.destroyInactivePanel,V=P()(y,pe),T=String(S!=null?S:A),Y=w!=null?w:K,B=H!=null?H:U,z=function(k){Y!=="disabled"&&(R(k),W==null||W(k))},F=!1;return j?F=$[0]===T:F=$.indexOf(T)>-1,(0,m.createElement)(oe,l()(l()({},V),{},{classNames:G,styles:M,prefixCls:x,key:T,panelKey:T,isActive:F,accordion:j,openMotion:N,expandIcon:C,header:Q,collapsible:Y,onItemClick:z,destroyInactivePanel:B}),D)})},ve=function(E,_,x){if(!E)return null;var j=x.prefixCls,K=x.accordion,U=x.collapsible,R=x.destroyInactivePanel,$=x.onItemClick,N=x.activeKey,C=x.openMotion,G=x.expandIcon,M=x.classNames,y=x.styles,A=E.key||String(_),D=E.props,Q=D.header,S=D.headerClass,w=D.destroyInactivePanel,W=D.collapsible,H=D.onItemClick,V=!1;K?V=N[0]===A:V=N.indexOf(A)>-1;var T=W!=null?W:U,Y=function(F){T!=="disabled"&&($(F),H==null||H(F))},B={key:A,panelKey:A,header:Q,headerClass:S,classNames:M,styles:y,isActive:V,prefixCls:j,destroyInactivePanel:w!=null?w:R,openMotion:C,accordion:K,children:E.props.children,onItemClick:Y,expandIcon:G,collapsible:T};return typeof E.type=="string"?E:(Object.keys(B).forEach(function(z){typeof B[z]=="undefined"&&delete B[z]}),m.cloneElement(E,B))};function fe(i,E,_){return Array.isArray(i)?Ie(i,_):(0,O.Z)(E).map(function(x,j){return ve(x,j,_)})}var me=fe,_e=e(88090);function xe(i){var E=i;if(!Array.isArray(E)){var _=s()(E);E=_==="number"||_==="string"?[E]:[]}return E.map(function(x){return String(x)})}var he=m.forwardRef(function(i,E){var _=i.prefixCls,x=_===void 0?"rc-collapse":_,j=i.destroyInactivePanel,K=j===void 0?!1:j,U=i.style,R=i.accordion,$=i.className,N=i.children,C=i.collapsible,G=i.openMotion,M=i.expandIcon,y=i.activeKey,A=i.defaultActiveKey,D=i.onChange,Q=i.items,S=i.classNames,w=i.styles,W=o()(x,$),H=(0,u.Z)([],{value:y,onChange:function(Z){return D==null?void 0:D(Z)},defaultValue:A,postState:xe}),V=t()(H,2),T=V[0],Y=V[1],B=function(Z){return Y(function(){if(R)return T[0]===Z?[]:[Z];var k=T.indexOf(Z),ae=k>-1;return ae?T.filter(function(te){return te!==Z}):[].concat(d()(T),[Z])})};(0,f.ZP)(!N,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var z=me(Q,N,{prefixCls:x,accordion:R,openMotion:G,expandIcon:M,collapsible:C,destroyInactivePanel:K,onItemClick:B,activeKey:T,classNames:S,styles:w});return(0,L.jsx)("div",l()(l()({ref:E,className:W,style:U,role:R?"tablist":void 0},(0,_e.Z)(i,{aria:!0,data:!0})),{},{children:z}))}),re=Object.assign(he,{Panel:oe}),ye=re,Ee=re.Panel},84388:function(r,a,e){"use strict";e.r(a)},70568:function(r,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return l}});var n=e(17425);const l=[]},96596:function(r,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return l}});var n=e(87081);const l=[]},81470:function(r,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return l}});var n=e(32702);const l=[]},37575:function(r,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return l}});var n=e(3116);const l=[]},27623:function(r,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return l}});var n=e(65159);const l=[{value:"rc-collapse ui component for react",paraId:0,tocIndex:0},{value:" ",paraId:1,tocIndex:0},{value:" ",paraId:1,tocIndex:0},{value:" ",paraId:1,tocIndex:0},{value:"https://collapse-react-component.vercel.app",paraId:2,tocIndex:1},{value:`var Collapse = require('rc-collapse');
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