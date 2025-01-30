"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[69936,12080],{827567:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(667294),s=n(989820),i=n(785893);let a=(0,r.lazy)(()=>n.e(34514).then(n.bind(n,434514))),l=({placementId:e})=>(0,i.jsx)(s.a3,{eligibleIds:[500818],placementId:e,children:({complete:e,dismiss:t})=>(0,i.jsx)(r.Suspense,{children:(0,i.jsx)(a,{onComplete:e,onDismiss:t})})})},853960:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(667294),s=n(883119),i=n(449112),a=n(989820),l=n(758339),o=n(135296),d=n(296209),u=n(697254),c=n(179735),m=n(785893);let p=(0,c.Z)(()=>n.e(43923).then(n.bind(n,39127)),{ssr:!1}),x=(0,c.Z)(()=>n.e(70182).then(n.bind(n,770182)),{ssr:!1}),_=(0,c.Z)(()=>Promise.all([n.e(92373),n.e(27585)]).then(n.bind(n,227585)),{ssr:!1}),f=(0,c.Z)(()=>Promise.all([n.e(75504),n.e(72339)]).then(n.bind(n,75504)),{ssr:!1}),h=(0,c.Z)(()=>n.e(37533).then(n.bind(n,237533)),{ssr:!1}),v=(0,c.Z)(()=>Promise.all([n.e(78103),n.e(32280)]).then(n.bind(n,178103)),{ssr:!1}),j=(0,c.Z)(()=>n.e(80851).then(n.bind(n,180851)),{ssr:!1}),w=(0,c.Z)(()=>n.e(12812).then(n.bind(n,112812)),{ssr:!1}),y=(0,c.Z)(()=>n.e(28807).then(n.bind(n,928807)),{ssr:!1}),b=(0,c.Z)(()=>n.e(84381).then(n.bind(n,984381)),{ssr:!1}),g=[505420,505933,506173,506124,506436];function Z({placementId:e}){return(0,m.jsx)(r.Fragment,{children:(0,m.jsx)(a.a3,{eligibleIds:[501312,500331,502271,504032,504569,504721,505039,505093,505420,505933,506173,506124,506436],placementId:e,children:({complete:t,dismiss:n,experience:{experience_id:r,display_data:a}})=>{let c=function(e){switch(e){case 504721:return w;case 504569:return j;case 504032:return y;case 502271:return x;case 505039:return _;case 505093:return b;default:return p}}(r),Z=function(e){switch(e){case 504721:return 660;case 500331:return"md";default:return"sm"}}(r);return(0,m.jsxs)(s.xu,{children:[!g.includes(r)&&(0,m.jsx)(l.ZP,{accessibilityModalLabel:"",onDismiss:n,size:Z,children:(0,m.jsx)(c,{...(0,o.Z)(d.Z)(a),experienceId:r,handleComplete:t,handleDismiss:n,placementId:e})}),506124===r&&(0,m.jsx)(f,{handleComplete:t,handleDismiss:n,isDesktop:!0,isGooglePrimary:!0,...(0,o.Z)(d.Z)(a)}),(506173===r||506436===r)&&(0,m.jsx)(f,{handleComplete:t,handleDismiss:n,isDesktop:!0,isGooglePrimary:!1,...(0,o.Z)(d.Z)(a)}),505420===r&&(0,m.jsx)(v,{experienceId:505420,onSubmitSurvey:async()=>{(0,i.Z)((0,u.Z)({site:"www",path:"/business/marketing-plan"}))},placementId:e,viewType:251}),505933===r&&(0,m.jsx)(h,{handleComplete:()=>{t(),(0,i.Z)((0,u.Z)({site:"sterling",path:"/reporting/"}))},handleDismiss:n,onAdsReportingSurface:!1})]})}})})}},212515:(e,t,n)=>{n.d(t,{Q:()=>o,Z:()=>d});var r=n(667294),s=n(488792),i=n(477058),a=n(972147),l=n(730212);function o(e,t){let{setViewContextData:n}=(0,i.sV)(),{requestIdentifier:o}=(0,l.B)(),d=(0,s.Z)(),{viewData:u}=(0,i.SU)();(0,r.useEffect)(()=>{e&&(n({viewType:e.view_type??1,viewParameter:e.view_parameter,viewData:e.view_data?(0,a.Z)(u,e.view_data):u,component:e.component,element:e.element,objectIdStr:e.object_id_str,auxData:e.aux_data,clientTrackingParams:e.clientTrackingParams}),d({...e,event_type:13,request_identifier:o}))},[t])}function d(e){let{children:t,log:n}=e;return o(n),t||null}},498490:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(667294);function s(e,t){let n="consumer"===t?`${e}Consumer`:`use${e}`;return`
  ${n} must be used within a ${e}Provider.
  Please see https://pdocs.pinadmin.com/docs/webapp/docs/testing-jest#createhydra-errors for more information.
  `}function i(e,t){let n;let i=(0,r.createContext)(t),a=(n=(n=e.slice(1)).endsWith("Context")?n:`${n}Context`,`${e[0].toUpperCase()}${n}`);i.displayName=a;let{Provider:l}=i,o=({children:e})=>{let t=(0,r.useContext)(i);if(void 0===t)throw Error(s(a,"consumer"));return e(t)},d=()=>(0,r.useContext)(i);return l.displayName=`${a}Provider`,o.displayName=`${a}Consumer`,{Provider:l,Consumer:o,MaybeConsumer:({children:e})=>e((0,r.useContext)(i)),useMaybeHook:d,useHook:function(){let e=d();if(void 0===e)throw Error(s(a,"hook"));return e}}}},486997:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e){let{isMobile:t,isTablet:n}=e.userAgent;return n?"tablet":t?"phone":"desktop"}},972147:(e,t,n)=>{n.d(t,{Z:()=>function e(t,n,r=()=>void 0){let s=r(t,n);return void 0!==s?s:void 0===n?t:Array.isArray(t)&&Array.isArray(n)?n.reduce((t,s,i)=>(t[i]=e(t[i],n[i],r),t),[...t]):t&&"object"==typeof t&&n&&"object"==typeof n?Object.keys(n).reduce((t,s)=>(t[s]=e(t[s],n[s],r),t),{...t}):n}})},730212:(e,t,n)=>{n.d(t,{B:()=>c,LC:()=>d,P2:()=>o,fH:()=>u,gf:()=>m});var r=n(667294),s=n(39825),i=n(655201),a=n(785893);let l=(0,r.createContext)();function o({children:e,initialValue:t}){let[n,o]=(0,r.useState)(t),d=(0,r.useMemo)(()=>({requestContext:n,updateRequestContext:e=>{let t={...n,...e};(0,i.Z)(n,e)||o(t),(0,s.J)(t)}}),[n]);return(0,a.jsx)(l.Provider,{value:d,children:e})}let d=({children:e})=>{let t=(0,r.useContext)(l);if(!t)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)},u=({children:e})=>{let t=(0,r.useContext)(l);if(!t)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)};function c(){let e=(0,r.useContext)(l);if(!e)throw Error("useRequestContext must be used within a RequestContextProvider");return e.requestContext}function m(){let e=(0,r.useContext)(l);if(!e)throw Error("useUpdateRequestContext must be used within a RequestContextProvider");return e.updateRequestContext}},39825:(e,t,n)=>{let r;function s(e){r=e}function i(){return r}n.d(t,{J:()=>s,l:()=>i})},352006:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(667294),s=n(388695);function i({children:e}){if("undefined"==typeof window)throw Error(s.u);return e}var a=n(785893);function l({children:e,fallback:t}){return(0,a.jsx)(r.Suspense,{fallback:t,children:(0,a.jsx)(i,{children:e})})}},655201:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(n=>e[n]===t[n])}},410150:(e,t,n)=>{n.d(t,{HG:()=>c,Kf:()=>a,Wb:()=>u,ZP:()=>m,dA:()=>l,ds:()=>o,ml:()=>d});var r=n(486997),s=n(730212);let i=()=>{let e=(0,s.B)();return(0,r.Z)(e)},a=e=>"phone"===e,l=e=>"tablet"===e,o=e=>"desktop"===e,d=()=>a(i()),u=()=>l(i()),c=()=>o(i()),m=i},383399:(e,t,n)=>{n.d(t,{$:()=>r,Z:()=>i});let{Provider:r,useHook:s}=(0,n(498490).Z)("viewer"),i=s},922664:(e,t,n)=>{n.d(t,{Z:()=>i,k:()=>r});let{Provider:r,useHook:s}=(0,n(498490).Z)("Conversations"),i=s},988285:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(667294),s=n(989820),i=n(750077),a=n(383399),l=n(154887),o=n(785893);let d=(0,r.lazy)(()=>n.e(84087).then(n.bind(n,2823)));function u({placementId:e}){let t=(0,a.Z)();return"enabled_banner_bottom"===(0,l.kh)(t)?(0,o.jsx)(s.a3,{eligibleIds:[506465],placementId:e,children:({complete:e,dismiss:t})=>(0,o.jsx)(i.Z,{children:(0,o.jsx)(d,{complete:e,dismiss:t})})}):null}},154887:(e,t,n)=>{n.d(t,{Lr:()=>d,gW:()=>l,kh:()=>c,po:()=>u,sA:()=>o});var r=n(609326),s=n(297728),i=n(864723),a=n(410150);let l="fade",o=()=>`
  @keyframes ${l} {
    0% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
`;function d(e=!0){i.ZP.setItem(r.sz,JSON.stringify(e))}function u(){return JSON.parse(i.ZP?.getItem(r.sz))}let c=e=>{let{checkExperiment:t}=(0,s.F)(),n=(0,a.HG)();return!t("auth_dweb_google_fedcm_onetap_modal",{dangerouslySkipActivation:!0}).group&&n&&e.isAuth&&e.socialNetwork?.gplus?.connected&&!u()?t("dweb_google_auth_gesture_collection").group:""}},732567:(e,t,n)=>{n.d(t,{C:()=>r,Z:()=>i});let{Provider:r,useHook:s}=(0,n(498490).Z)("Header"),i=s},212443:(e,t,n)=>{n.d(t,{C:()=>o,f:()=>l});var r=n(667294),s=n(498490),i=n(785893);let{Provider:a,useHook:l}=(0,s.Z)("MostRecentPin");function o({children:e}){let[t,n]=(0,r.useState)(),[s,l]=(0,r.useState)(),o=(0,r.useCallback)(e=>{l([e].concat((s?s.slice(0,10):[]).filter(t=>t!==e)))},[s]),d=(0,r.useMemo)(()=>({id:t,plpImageSignatures:s,setMostRecentPinId:n,setMostRecentPinImage:o}),[t,s,o]);return(0,i.jsx)(a,{value:d,children:e})}},636085:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(573706),s=n(415787);let i={13:e=>!!e.view_parameter,9105:e=>!!e.view_parameter,9104:e=>!!e.view_parameter,10357:e=>!!e.view_parameter,10358:e=>!!e.view_parameter,10359:e=>!!e.view_parameter,10360:e=>!!e.view_parameter,15748:e=>!!e.view_parameter,110:e=>!!e.view_parameter,16248:e=>!!e.view_parameter,102:e=>!!e.element&&!!e.view_parameter,101:e=>!!e.element&&!!e.view_parameter,15749:e=>!!e.element&&!!e.view_parameter,8721:e=>!!e.element&&!!e.view_parameter,8722:e=>!!e.element&&!!e.view_parameter,120:e=>!!e.element&&!!e.view_parameter,4104:e=>!!e.view_parameter&&!e.element,4105:e=>!!e.view_parameter&&!e.element,8900:e=>!!e.view_parameter&&!e.element,16480:e=>!!e.view_parameter&&!e.element,9626:e=>!!e.view_parameter&&!e.element,9625:e=>!!e.view_parameter&&!e.element,46:e=>!!e.view_parameter&&!e.element,45:e=>!!e.view_parameter&&!e.element},a=[96,34,241,1030,1151,1150,136,11906,124,240,12772,30,13,15950,14572,14573,14574,14575,14576,15900],l=[259,3120,3139,172,3596,3542,261,171,260,4052,4053],o=e=>{let{event_type:t,element:n,view_parameter:r}=e;return Object.keys(i).includes(`${t}`)&&(!n||a.includes(n))&&(!r||l.includes(r))?i[t]?.(e)?-1===[213,24,260].indexOf(e.view_type||0)?{code:"missing_view_type",message:"Please provide a valid ViewType for Nux Events."}:null:{code:"invalid_param_combinations",message:"Please provide valid param combinations for Nux events. Refer to NuxParams type."}:{code:"invalid_param_types",message:"Please provide valid parameter types for Nux events. Refer to NuxParams type."}},d=()=>{let{logContextEvent:e}=(0,r.v)();return t=>{let{event_type:n,element:r,view_parameter:i,component:a,view_type:l,aux_data:d,object_id_str:u}=t,c=o(t);if(c){console.error(c.message),(0,s.nP)("webapp.track_nux_invalid_parameters",{sampleRate:1,tags:{code:c.code,component:a,event_type:n,element:r,view_type:l,view_parameter:i}});return}e({component:a,event_type:n,element:r,view_parameter:i,view_type:l,aux_data:d,object_id_str:u})}}},351643:(e,t,n)=>{n.d(t,{Z:()=>K});var r=n(667294),s=n(616550),i=n(883119),a=n(716738),l=n(989820),o=n(785893);let d=()=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(l.RK,{placementId:11}),(0,o.jsx)(l.LS,{placementId:11}),(0,o.jsx)(l.k6,{placementId:1000503}),(0,o.jsx)(l.H6,{placementId:1000541})]});var u=n(758339),c=n(144326);function m({onDismiss:e,onComplete:t,titleText:n,detailedText:r,dismissButtonText:s,completeButtonText:a}){let l=(0,c.ZP)();return(0,o.jsx)(u.ZP,{accessibilityModalLabel:r,closeOnOutsideClick:!1,onDismiss:e,size:"sm",children:(0,o.jsx)(i.xu,{direction:"column",display:"flex",flex:"grow",position:"relative",width:"100%",children:(0,o.jsxs)(i.xu,{marginTop:2,children:[(0,o.jsx)(i.xu,{display:"flex",justifyContent:"center",marginTop:10,children:(0,o.jsx)(i.JO,{accessibilityLabel:l.bt("Pinterest logo icon", "Pinterest logo icon", "Pinterest logo icon", undefined, true),color:"brandPrimary",icon:"pinterest",size:40})}),(0,o.jsx)(i.xu,{marginEnd:3,marginStart:3,marginTop:6,overflow:"hidden",rounding:2,children:(0,o.jsxs)(i.xu,{color:"default",paddingX:4,paddingY:2,children:[(0,o.jsx)(i.kC,{alignItems:"start",justifyContent:"between",children:(0,o.jsxs)(i.xu,{flex:"grow",children:[(0,o.jsx)(i.X6,{align:"center",size:"500",children:n}),(0,o.jsx)(i.xu,{paddingY:4,children:(0,o.jsxs)(i.xv,{align:"center",children:[" ",r," "]})})]})}),(0,o.jsx)(i.xu,{display:"flex",justifyContent:"end",marginBottom:12,marginTop:8,children:(0,o.jsxs)(i.kC,{gap:{row:2,column:0},justifyContent:"end",children:[(0,o.jsx)(i.zx,{color:"gray",onClick:e,size:"lg",text:s}),(0,o.jsx)(i.zx,{color:"red",onClick:t,size:"lg",text:a})]})})]})})]})})})}function p({onComplete:e,onDismiss:t,titleText:n,detailedText:s,dismissButtonText:i,completeButtonText:a}){return(0,o.jsx)(r.Fragment,{children:(0,o.jsx)(m,{completeButtonText:a,detailedText:s,dismissButtonText:i,onComplete:e,onDismiss:t,titleText:n})})}let x=function({placementId:e,experience:t}){return t&&t.display_data?(0,o.jsx)(l.a3,{eligibleIds:[503750],placementId:e,children:({complete:e,dismiss:n})=>(0,o.jsx)(p,{completeButtonText:t.display_data.complete_button_text,detailedText:t.display_data.detailed_text,dismissButtonText:t.display_data.dismiss_button_text,onComplete:e,onDismiss:n,titleText:t.display_data.title_text})}):null};var _=n(827567),f=n(853960),h=n(602185),v=n(135296),j=n(296209),w=n(179735);let y=(0,w.Z)(()=>n.e(37426).then(n.bind(n,89930)),{ssr:!1});function b({placementId:e,...t}){return(0,o.jsx)(l.a3,{disableAutoView:!0,eligibleTypes:[9],placementId:e,children:({complete:e,dismiss:n,view:r,experience:{display_data:s}})=>(0,o.jsx)(h.Z,{name:"SafeSuspense_ExperienceNuxContainer_NuxContainer",children:(0,o.jsx)(y,{...(0,v.Z)(j.Z,!0)(s),handleComplete:e,handleDismiss:n,handleView:r,...t})})})}var g=n(295393),Z=n(988285),C=n(545007),P=n(644828),I=n(573706),k=n(468808),S=n(750077),R=n(383399),E=n(636085),D=n(437355);let N=(0,r.lazy)(()=>n.e(37426).then(n.bind(n,89930)));function A({hideFollowedInterests:e}){let{logContextEvent:t}=(0,I.v)(),n=(0,C.I0)(),s=(0,R.Z)(),{completeExperience:i,dismissExperience:a,experienceForPlacement:d,viewExperience:u}=(0,l.oS)(11),c=d?.experience_id===500278,{steps:m,refresh_homefeed_background:p=!1}=(0,v.Z)(j.Z,!0)(d?.display_data||{}),[x,_]=(0,r.useState)(!1),f=(0,E.Z)(),w=()=>{n((0,k.U)("UserHomefeedResource",{options:(0,P.Z)({inNux:!0,staticFeed:!1,viewerIsPartner:s.isAuth&&s.isPartner})},null))};return(0,r.useEffect)(()=>{x&&a(11,500278)},[x,a]),c?(0,o.jsx)(h.Z,{name:"SafeSuspense_RenuxContainer_NuxContainer",children:(0,o.jsx)(S.Z,{children:(0,o.jsx)(N,{handleComplete:()=>{t({event_type:101,component:17,element:96,view_type:213}),c&&i(11,500278);let e=Math.floor(new Date().getTime()/1e3);n((0,D.Q_)("USM_RELAUNCH_NUX_COMPLETED",e)),w()},handleDismiss:e=>{t({event_type:101,component:17,element:1150,view_type:213}),c&&(_(!0),"NuxPicker"===e&&f({event_type:9626,view_type:213,view_parameter:172})),p&&w()},handleView:()=>{c&&u(11,500278)},hasDismissedModal:x,hideFollowedInterests:e||!1,isRenux:!0,steps:m})})}):null}let T=e=>!!(e&&e.display_data&&e.display_data.is_partner_renux),H=({experience:e,isNux:t})=>(0,o.jsxs)(r.Fragment,{children:[t||T(e)?(0,o.jsx)(b,{placementId:11}):(0,o.jsx)(A,{hideFollowedInterests:!0}),(0,o.jsx)(l.iH,{placementId:11}),(0,o.jsx)(f.Z,{placementId:11}),(0,o.jsx)(l.u3,{placementId:11}),(0,o.jsx)(l.b9,{placementId:11}),(0,o.jsx)(l._f,{placementId:11}),(0,o.jsx)(l.nj,{placementId:11}),(0,o.jsx)(g.Z,{placementId:11}),(0,o.jsx)(_.Z,{placementId:11}),(0,o.jsx)(x,{experience:e,placementId:11}),(0,o.jsx)(Z.default,{placementId:11})]});var O=n(212515),z=n(982553),q=n(915571),L=n(288544),B=n(978993),$=n(868808),M=n(922664),F=n(415787);let U=(0,w.Z)(()=>n.e(89870).then(n.bind(n,62052)),{ssr:!1}),V=(0,w.Z)(()=>Promise.all([n.e(23280),n.e(94817)]).then(n.bind(n,821685)),{ssr:!1}),J=(0,r.lazy)(()=>Promise.all([n.e(13377),n.e(24698)]).then(n.bind(n,713377)));function G({experience:e}){let t=(0,s.TH)(),l=(0,R.Z)(),{params:u}=(0,s.$B)(),{conversationOpen:c,dropdownOpen:m}=(0,M.Z)();(0,O.Q)({view_type:1,view_parameter:92});let{conversation_id:p,tab:x}=(0,$.mB)(t.search),_=u.conversation_id||p;(0,r.useEffect)(()=>{_&&c(_)},[_]),(0,r.useEffect)(()=>{"inbox"===x&&m()},[x]),(0,r.useEffect)(()=>{let e=document.getElementById("rum-config");null!==e&&(window.pinterest_rum_client_config=JSON.parse(e.textContent),n.e(4442).then(n.bind(n,425109)).then(e=>{e.default()}))},[]);let f=(0,z.jr)(l),v=e?.experience_id,j=10105===v;return[500787,500894].includes(v)?(0,o.jsx)(h.Z,{name:"SafeSuspense_AuthHomePage_ExperienceBizNuxFullscreenContainer",children:(0,o.jsx)(V,{experienceId:500787,placementId:11})}):(0,o.jsxs)(i.xu,{children:[(0,o.jsx)(H,{experience:e,isNux:j}),j?(0,o.jsx)(h.Z,{name:"SafeSuspense_AuthHomePage_BackgroundPinImages",children:(0,o.jsx)(U,{inNux:j,isFlexible:!0})}):(0,o.jsxs)(r.Fragment,{children:[f&&(0,o.jsx)(S.Z,{children:(0,o.jsx)(J,{})}),(0,o.jsx)(a.Z,{experience:e})]}),(0,o.jsx)(d,{})]})}let K=(0,l.RL)(11,()=>({using_pwa:(0,q.So)(window),completed_mini_renux:"true"===(0,B.qn)("completedMiniRenux")}))(function(e){let{experience:t}=e,n=t?.experience_id,s=10105===n,i=[500787,500894].includes(n),a=s||i,[l,d]=(0,r.useState)(null);return null===l&&d(s),s&&!1===l&&((0,F.nP)("home_product.homefeed.incorrect_in_nux_state_for_first_load",{sampleRate:.1,tags:{appType:"web"}}),d(!0)),a?(0,o.jsx)(G,{...e}):(0,o.jsx)(L.Z,{measureGridVisuallyComplete:!0,surface:"homefeed",children:(0,o.jsx)(G,{...e})})})},179735:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(667294),s=n(352006);let{Provider:i,useMaybeHook:a}=(0,n(498490).Z)("LazyComponent");var l=n(785893);function o(e,t,n){let i,o,d;let u=t?.ssr??!0?r.Suspense:s.Z,c=(0,r.forwardRef)((n,s)=>{a(),t?.dynamicRequestKey,o||(o=(0,r.lazy)(()=>e(n)));let d=(0,r.useRef)(i??o).current;return(0,l.jsx)(u,{fallback:n.fallback||t?.fallback,children:(0,l.jsx)(d,{...n,ref:s})})});function m(t){return d||(d=(async()=>i=(await e(t)).default)()),d}return c.preload=e=>{m(e)},c.load=e=>m(e),c}},388695:(e,t,n)=>{n.d(t,{Z:()=>s,u:()=>r});let r="HIDDEN_ON_SERVER_ERROR",s=e=>e instanceof Object&&"message"in e&&e.message===r}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/69936.en_GB-924aeb94f385db5a.mjs.map