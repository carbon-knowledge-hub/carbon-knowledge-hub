(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[299],{6660:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/factsheets",function(){return a(1413)}])},1413:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return ue}});var r=a(5893),s=a(5281),i=a(7747),l=a(2338),t=a(2177),o=a(2757),c=a(4e3),u=a(6042),d=a(9396),p=a(9534),h=a(2215),f=a(8087),x=a(4071),m=a(7334),v=a(1317),g=a(5432),b=a(1103),j=a(7294);function y(e={}){const{onChange:n,value:a,defaultValue:r,name:s,isDisabled:i,isFocusable:l,isNative:t,...o}=e,[c,u]=(0,j.useState)(r||""),d="undefined"!==typeof a,p=d?a:c,h=(0,j.useRef)(null),f=(0,j.useCallback)((()=>{const e=h.current;if(!e)return;let n="input:not(:disabled):checked";const a=e.querySelector(n);if(a)return void a.focus();n="input:not(:disabled)";const r=e.querySelector(n);null==r||r.focus()}),[]),x=(0,j.useId)(),m=s||`radio-${x}`,v=(0,j.useCallback)((e=>{const a=function(e){return e&&(0,g.Kn)(e)&&(0,g.Kn)(e.target)}(e)?e.target.value:e;d||u(a),null==n||n(String(a))}),[n,d]);return{getRootProps:(0,j.useCallback)(((e={},n=null)=>({...e,ref:(0,b.lq)(n,h),role:"radiogroup"})),[]),getRadioProps:(0,j.useCallback)(((e={},n=null)=>{const a=t?"checked":"isChecked";return{...e,ref:n,name:m,[a]:null!=p?e.value===p:void 0,onChange(e){v(e)},"data-radiogroup":!0}}),[t,m,v,p]),name:m,ref:h,focus:f,setValue:u,value:p,onChange:v,isDisabled:i,isFocusable:l,htmlProps:o}}var k=a(6554),C=a(2548),w=a(5227),[_,S]=(0,w.k)({name:"RadioGroupContext",strict:!1}),P=(0,k.G)(((e,n)=>{const{colorScheme:a,size:s,variant:i,children:l,className:t,isDisabled:o,isFocusable:c,...u}=e,{value:d,onChange:p,getRootProps:h,name:f,htmlProps:x}=y(u),m=(0,j.useMemo)((()=>({name:f,size:s,onChange:p,colorScheme:a,value:d,variant:i,isDisabled:o,isFocusable:c})),[f,s,p,a,d,i,o,c]);return(0,r.jsx)(_,{value:m,children:(0,r.jsx)(C.m.div,{...h(x,n),className:(0,g.cx)("chakra-radio-group",t),children:l})})}));P.displayName="RadioGroup";var M=a(5970),B=a(2934),D={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function F(e){e.preventDefault(),e.stopPropagation()}var N=a(7030),I=a(3179);var R=(0,k.G)(((e,n)=>{var a;const s=S(),{onChange:i,value:l}=e,t=(0,N.jC)("Radio",{...s,...e}),o=(0,I.Lr)(e),{spacing:c="0.5rem",children:u,isDisabled:d=(null==s?void 0:s.isDisabled),isFocusable:p=(null==s?void 0:s.isFocusable),inputProps:h,...f}=o;let x=e.isChecked;null!=(null==s?void 0:s.value)&&null!=l&&(x=s.value===l);let m=i;(null==s?void 0:s.onChange)&&null!=l&&(m=(0,g.PP)(s.onChange,i));const v=null!=(a=null==e?void 0:e.name)?a:null==s?void 0:s.name,{getInputProps:b,getCheckboxProps:y,getLabelProps:k,getRootProps:w,htmlProps:_}=function(e={}){const{defaultChecked:n,isChecked:a,isFocusable:r,isDisabled:s,isReadOnly:i,isRequired:l,onChange:t,isInvalid:o,name:c,value:u,id:d,"data-radiogroup":p,"aria-describedby":h,...f}=e,x=`radio-${(0,j.useId)()}`,m=(0,M.NJ)(),v=S();let b=!m||v||p?x:m.id;b=null!=d?d:b;const y=null!=s?s:null==m?void 0:m.isDisabled,k=null!=i?i:null==m?void 0:m.isReadOnly,C=null!=l?l:null==m?void 0:m.isRequired,w=null!=o?o:null==m?void 0:m.isInvalid,[_,P]=(0,j.useState)(!1),[N,I]=(0,j.useState)(!1),[R,O]=(0,j.useState)(!1),[E,K]=(0,j.useState)(!1),[X,q]=(0,j.useState)(Boolean(n)),A="undefined"!==typeof a,U=A?a:X;(0,j.useEffect)((()=>(0,B.BT)(P)),[]);const z=(0,j.useCallback)((e=>{k||y?e.preventDefault():(A||q(e.target.checked),null==t||t(e))}),[A,y,k,t]),L=(0,j.useCallback)((e=>{" "===e.key&&K(!0)}),[K]),V=(0,j.useCallback)((e=>{" "===e.key&&K(!1)}),[K]),W=(0,j.useCallback)(((e={},n=null)=>({...e,ref:n,"data-active":(0,g.PB)(E),"data-hover":(0,g.PB)(R),"data-disabled":(0,g.PB)(y),"data-invalid":(0,g.PB)(w),"data-checked":(0,g.PB)(U),"data-focus":(0,g.PB)(N),"data-focus-visible":(0,g.PB)(N&&_),"data-readonly":(0,g.PB)(k),"aria-hidden":!0,onMouseDown:(0,g.v0)(e.onMouseDown,(()=>K(!0))),onMouseUp:(0,g.v0)(e.onMouseUp,(()=>K(!1))),onMouseEnter:(0,g.v0)(e.onMouseEnter,(()=>O(!0))),onMouseLeave:(0,g.v0)(e.onMouseLeave,(()=>O(!1)))})),[E,R,y,w,U,N,k,_]),{onFocus:G,onBlur:T}=null!=m?m:{},Y=(0,j.useCallback)(((e={},n=null)=>{const a=y&&!r;return{...e,id:b,ref:n,type:"radio",name:c,value:u,onChange:(0,g.v0)(e.onChange,z),onBlur:(0,g.v0)(T,e.onBlur,(()=>I(!1))),onFocus:(0,g.v0)(G,e.onFocus,(()=>I(!0))),onKeyDown:(0,g.v0)(e.onKeyDown,L),onKeyUp:(0,g.v0)(e.onKeyUp,V),checked:U,disabled:a,readOnly:k,required:C,"aria-invalid":(0,g.Qm)(w),"aria-disabled":(0,g.Qm)(a),"aria-required":(0,g.Qm)(C),"data-readonly":(0,g.PB)(k),"aria-describedby":h,style:D}}),[y,r,b,c,u,z,T,G,L,V,U,k,C,w,h]);return{state:{isInvalid:w,isFocused:N,isChecked:U,isActive:E,isHovered:R,isDisabled:y,isReadOnly:k,isRequired:C},getCheckboxProps:W,getRadioProps:W,getInputProps:Y,getLabelProps:(e={},n=null)=>({...e,ref:n,onMouseDown:(0,g.v0)(e.onMouseDown,F),"data-disabled":(0,g.PB)(y),"data-checked":(0,g.PB)(U),"data-invalid":(0,g.PB)(w)}),getRootProps:(e,n=null)=>({...e,ref:n,"data-disabled":(0,g.PB)(y),"data-checked":(0,g.PB)(U),"data-invalid":(0,g.PB)(w)}),htmlProps:f}}({...f,isChecked:x,isFocusable:p,isDisabled:d,onChange:m,name:v}),[P,R]=function(e,n){const a={},r={};for(const[s,i]of Object.entries(e))n.includes(s)?a[s]=i:r[s]=i;return[a,r]}(_,I.oE),O=y(R),E=b(h,n),K=k(),X=Object.assign({},P,w()),q={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...t.container},A={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...t.control},U={userSelect:"none",marginStart:c,...t.label};return(0,r.jsxs)(C.m.label,{className:"chakra-radio",...X,__css:q,children:[(0,r.jsx)("input",{className:"chakra-radio__input",...E}),(0,r.jsx)(C.m.span,{className:"chakra-radio__control",...O,__css:A}),u&&(0,r.jsx)(C.m.span,{className:"chakra-radio__label",...K,__css:U,children:u})]})}));R.displayName="Radio";var O=a(9200);function E(e){var n=e.allowMultiple,a=void 0===n||n,l=e.defaultIndex,t=void 0===l?[0]:l,o=(0,p.Z)(e,["allowMultiple","defaultIndex"]),g=(0,O.X)((function(e){return e.filters})),b=(0,O.X)((function(e){return e.updateSelectedFilters}));return(0,r.jsx)(i.xu,(0,d.Z)((0,u.Z)({gridColumn:["1 / -1",null,"span 2"]},o),{children:(0,r.jsx)(i.xu,{pb:10,position:["relative",null,"sticky"],top:[null,null,24],children:(0,r.jsx)(h.U,{allowMultiple:a,defaultIndex:t,children:g.map((function(e){var n=e.id,a=e.label,i=e.options,l=e.value;return(0,r.jsxs)(f.Q,{borderTopColor:"gray.200",borderBottomColor:"gray.200",py:5,_first:{borderTopColor:"transparent"},children:[(0,r.jsxs)(s.K,{spacing:0,children:[(0,r.jsx)("h2",{children:(0,r.jsxs)(x.K,{px:0,_hover:{bg:"transparent"},_focus:{bg:"transparent"},_active:{bg:"transparent"},children:[(0,r.jsx)(c.x,{variant:"metaText",flex:"1",textAlign:"left",children:a}),(0,r.jsx)(m.X,{})]})}),(0,r.jsx)(c.x,{color:"gray.600",children:l})]}),(0,r.jsx)(v.H,{px:1,children:(0,r.jsx)(P,{value:l,onChange:function(e){return b(n,e)},children:(0,r.jsx)(s.K,{fontWeight:500,spacing:3,children:i.map((function(e){return(0,r.jsxs)(R,{value:e,children:[e[0].toUpperCase(),e.slice(1)]},e)}))})})})]},n)}))})})}))}var K=a(4292),X=a(8371);function q(){var e=(0,O.X)((function(e){return e.filters})),n=(0,O.X)((function(e){return e.updateSelectedFilters})),a=e.filter((function(e){return"all"!==e.value}));return a.length?(0,r.jsx)(i.xu,{gridColumn:["span 8",null,"span 6"],children:(0,r.jsx)(K.U,{spacing:3,children:a.map((function(e){var a=e.id,s=e.value;return(0,r.jsxs)(X.Vp,{colorScheme:"gray",children:[(0,r.jsxs)(X.Sn,{children:[s[0].toUpperCase(),s.slice(1)]}),(0,r.jsx)(X.SD,{onClick:function(){return n(a,"all")}})]},a)}))})}):null}var A=a(7710),U=a(7484),z=a.n(U),L=a(5471);function V(){var e=(0,O.X)((function(e){return e.factsheets})),n=null===e||void 0===e?void 0:e.filter((function(e){return e.isVisible})).length;return(0,r.jsx)(i.xu,{gridColumn:["1 / -1",null,"span 6"],children:(0,r.jsxs)(s.K,{spacing:10,children:[!n&&(0,r.jsx)(c.x,{color:"gray.500",children:"No factsheets to show"}),e.map((function(e){var n=e.title,a=e.isVisible,i=e.description,l=e.href,t=e.level,u=e.tags,d=void 0===u?[]:u,p=e.marketType,h=e.organizationType,f=e.date;return a?(0,r.jsxs)(L.fG,{px:[5,null,10],py:[20,null,14],bg:"white",boxShadow:"md",borderRadius:"md",position:"relative",transition:"box-shadow 0.25s",_hover:{boxShadow:"lg"},_active:{boxShadow:"sm"},children:[f&&(0,r.jsx)(X.Vp,{position:"absolute",top:4,left:[5,null,10],variant:"date",colorScheme:"gray",fontSize:"xs",children:z()(f).format("DD MMM YYYY")}),t&&(0,r.jsx)(X.Vp,{position:"absolute",top:4,right:4,variant:"level",colorScheme:"green",fontSize:"xs",children:t}),(0,r.jsxs)(s.K,{spacing:[5,null,10],children:[(0,r.jsxs)(s.K,{spacing:3,children:[(0,r.jsx)(o.X,{as:"h2",children:(0,r.jsx)(L.AB,{href:l,children:n})}),i&&(0,r.jsx)(c.x,{color:"gray.500",style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:i})]}),(0,r.jsxs)(A.E,{spacing:2,children:[p.map((function(e){return(0,r.jsx)(A.U,{children:(0,r.jsx)(X.Vp,{colorScheme:"gray",size:"sm",children:(0,r.jsx)(X.Sn,{children:e})})},e)})),h.map((function(e){return(0,r.jsx)(A.U,{children:(0,r.jsx)(X.Vp,{colorScheme:"gray",size:"sm",children:(0,r.jsx)(X.Sn,{children:e})})},e)})),d.map((function(e){return(0,r.jsx)(A.U,{children:(0,r.jsx)(X.Vp,{colorScheme:"gray",size:"sm",children:(0,r.jsx)(X.Sn,{children:e})})},e)}))]})]})]},l):null}))]})})}var W=a(3951);var G=a(6336);var T=a(8940);function Y(e){var n,a;const r=(0,g.Kn)(e)?e:{fallback:null!=e?e:"base"},s=(0,T.F)().__breakpoints.details.map((({minMaxQuery:e,breakpoint:n})=>({breakpoint:n,query:e.replace("@media screen and ","")}))),i=s.map((e=>e.breakpoint===r.fallback)),l=function(e,n={}){const{ssr:a=!0,fallback:r}=n,{getWindow:s}=(0,G.O)(),i=Array.isArray(e)?e:[e];let l=Array.isArray(r)?r:[r];l=l.filter((e=>null!=e));const[t,o]=(0,j.useState)((()=>i.map(((e,n)=>({media:e,matches:a?!!l[n]:s().matchMedia(e).matches})))));return(0,j.useEffect)((()=>{const e=s();o(i.map((n=>({media:n,matches:e.matchMedia(n).matches}))));const n=i.map((n=>e.matchMedia(n))),a=e=>{o((n=>n.slice().map((n=>n.media===e.media?{...n,matches:e.matches}:n))))};return n.forEach((e=>{"function"===typeof e.addListener?e.addListener(a):e.addEventListener("change",a)})),()=>{n.forEach((e=>{"function"===typeof e.removeListener?e.removeListener(a):e.removeEventListener("change",a)}))}}),[s]),t.map((e=>e.matches))}(s.map((e=>e.query)),{fallback:i,ssr:r.ssr});return null!=(a=null==(n=s[l.findIndex((e=>1==e))])?void 0:n.breakpoint)?a:r.fallback}function Q(e,n){var a;const r=Y((0,g.Kn)(n)?n:{fallback:null!=n?n:"base"}),s=(0,T.F)();if(!r)return;const i=Array.from((null==(a=s.__breakpoints)?void 0:a.keys)||[]);return function(e,n,a=W.AV){let r=Object.keys(e).indexOf(n);if(-1!==r)return e[n];let s=a.indexOf(n);for(;s>=0;){const n=a[s];if(e.hasOwnProperty(n)){r=s;break}s-=1}if(-1!==r)return e[a[r]]}(Array.isArray(e)?Object.fromEntries(Object.entries((0,W.Yq)(e,i)).map((([e,n])=>[e,n]))):e,r,i)}var Z=a(5083),H=a(9778),$=a(5335),J=a(942),ee=a(4859),ne=a(4346),ae=a(967),re=a(7006),se=a(9689),ie=a(270);function le(){var e=(0,ae.q)(),n=e.isOpen,a=e.onOpen,s=e.onClose,l=(0,j.useRef)();return(0,r.jsxs)(i.xu,{flex:"none",children:[(0,r.jsxs)(re.z,{colorScheme:"gray",w:10,h:10,px:0,ref:l,onClick:a,children:[(0,r.jsx)(ie.k1,{}),(0,r.jsx)(se.TX,{children:"Filter"})]}),(0,r.jsxs)(Z.d,{size:"full",isOpen:n,onClose:s,placement:"bottom",finalFocusRef:l,children:[(0,r.jsx)(H.Z,{bg:"rgba(45,45,99,0.5)"}),(0,r.jsxs)($.s,{children:[(0,r.jsx)(J.o,{right:"1.125rem"}),(0,r.jsx)(ee.x,{children:"Filters"}),(0,r.jsx)(ne.f,{children:(0,r.jsx)(i.xu,{children:(0,r.jsx)(E,{allowMultiple:!0,defaultIndex:[0,1,2]})})})]})]})]})}function te(){var e=(0,O.X)((function(e){return e.factsheets})),n=Q({base:!0,md:!1}),a=(0,j.useState)(!1),s=a[0],l=a[1];return(0,j.useEffect)((function(){s||l(!0)}),[s]),(0,r.jsx)(i.xu,{gridColumn:["span 8",null,"span 2"],minH:["none",null,8],children:(0,r.jsxs)(K.U,{spacing:3,children:[(0,r.jsx)(c.x,{flex:"1",fontWeight:600,color:"gray.600",children:"".concat(e.filter((function(e){return e.isVisible})).length," factsheet").concat(1!=e.length?"s":"")}),n&&s&&(0,r.jsx)(le,{})]})})}var oe=a(5678),ce=a(4108);function ue(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ce.Z,{title:"Factsheets",description:"Concise explanations of topics key to the voluntary and compliance carbon markets such as import tariffs, Article 6, offset quality, contracting methods and public acceptance."}),(0,r.jsxs)(s.K,{spacing:0,children:[(0,r.jsx)(i.xu,{w:"100%",py:10,children:(0,r.jsx)(l.W,{children:(0,r.jsxs)(t.M,{columns:8,spacingX:10,spacingY:5,alignItems:"start",children:[(0,r.jsx)(t.M,{columns:7,spacingX:10,alignItems:"center",gridColumn:["1 / -1",null,"1 / -1"],children:(0,r.jsx)(i.xu,{gridColumn:"span 5",pt:1,children:(0,r.jsx)(oe.b,{children:(0,r.jsx)(oe.c,{children:"Factsheets"})})})}),(0,r.jsxs)(s.K,{spacing:3,gridColumn:["1 / -1"],children:[(0,r.jsx)(o.X,{as:"h1",w:"100%",fontSize:"3xl",children:"Factsheets"}),(0,r.jsx)(c.x,{variant:"lead",children:"Delve into specific carbon-related topics across the voluntary and compliance markets."})]})]})})}),(0,r.jsx)(i.xu,{bg:"white",w:"100%",borderY:"0.0625rem solid",borderColor:"gray.100",py:6,position:"sticky",top:0,zIndex:"overlay",boxShadow:"sm",children:(0,r.jsx)(l.W,{mx:"auto",children:(0,r.jsxs)(t.M,{columns:8,gridGap:[3,null,10],gridColumn:"1 / -1",children:[(0,r.jsx)(te,{}),(0,r.jsx)(q,{})]})})}),(0,r.jsx)(i.xu,{bg:"gray.50",w:"100%",pt:12,pb:20,children:(0,r.jsx)(l.W,{mx:"auto",children:(0,r.jsxs)(t.M,{columns:8,gridGap:10,children:[(0,r.jsx)(E,{display:["none",null,"block"]}),(0,r.jsx)(V,{})]})})})]})]})}},7710:function(e,n,a){"use strict";a.d(n,{E:function(){return o},U:function(){return c}});var r=a(5432),s=a(6554),i=a(2548),l=a(7294),t=a(5893),o=(0,s.G)((function(e,n){const{spacing:a="0.5rem",spacingX:s,spacingY:o,children:u,justify:d,direction:p,align:h,className:f,shouldWrapChildren:x,...m}=e,v=(0,l.useMemo)((()=>x?l.Children.map(u,((e,n)=>(0,t.jsx)(c,{children:e},n))):u),[u,x]);return(0,t.jsx)(i.m.div,{ref:n,className:(0,r.cx)("chakra-wrap",f),...m,children:(0,t.jsx)(i.m.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:d,alignItems:h,flexDirection:p,listStyleType:"none",gap:a,columnGap:s,rowGap:o,padding:"0"},children:v})})}));o.displayName="Wrap";var c=(0,s.G)((function(e,n){const{className:a,...s}=e;return(0,t.jsx)(i.m.li,{ref:n,__css:{display:"flex",alignItems:"flex-start"},className:(0,r.cx)("chakra-wrap__listitem",a),...s})}));c.displayName="WrapItem"}},function(e){e.O(0,[774,888,179],(function(){return n=6660,e(e.s=n);var n}));var n=e.O();_N_E=n}]);