"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[82952],{904391:(e,t,n)=>{n.d(t,{Z:()=>T});var s=n(667294),i=n(616550),o=n(883119),a=n(989820),r=n(282685),l=n(40553),c=n(144326),d=n(559028),u=n(476198),h=n(887103),p=n(516733),_=n(868808),m=n(785893),x=n(282999),f=n(128581),g=n(961754),b=n(901450),y=n(383399),A=n(195737),j=n(732567),w=n(241716),P=n(402189),C=n(461661),v=n(664331),S=n(48347);function T({currentSite:e,isSterlingOnSteroids:t,isAdsNavMenuEnabled:n,advertiser:T,idealTooltipDirection:I,icon:k,iconSize:O,iconLabel:B,defaultIconColor:z,selectedIconColor:Z,tooltipZIndex:E,onClick:R,onPanelChange:L,showMoreOptions:D=!0}){let N=(0,c.ZP)(),{showAccountMenuFlyout:U,updateHeaderState:H}=(0,j.Z)(),M=e=>{H({type:e?"showAccountMenuFlyout":"hideAccountMenuFlyout"})},[F,W]=(0,s.useState)(!1),[Y,$]=(0,s.useState)(!0),G=(0,i.k6)(),q=(0,y.Z)(),Q=(0,v.Z)(),V=(0,C.Z)({user:Q.data,viewer:q}),K=V&&Y,X=(0,g.Z)({name:"UserResource",options:{field_set_key:"linked_partner",user_id:q.isAuth?q.id:""}}),J=(0,s.useRef)(null),ee=(0,l.YG)(e)&&!t||(0,l.Dm)(e)||(0,l.Y3)(e),et=(0,l.Y3)(e)||n,en=(0,i.TH)(),es=(0,b.F9)();(0,s.useEffect)(()=>{!function({showOneToast:e,i18n:t,location:n,history:s,username:i,fullName:o,avatarUrl:a}){if(!(n&&n.search))return;let r=(0,p.Z)(t,n,i||""),{message:l}=(0,_.mB)(n.search),c=l===h.pN||l===h.aU;r&&(e(({hideToast:e})=>(0,m.jsx)(u.Z,{duration:h.Jl,onHide:e,text:r,thumbnail:c?{avatar:(0,m.jsx)(d.qE,{name:o||"",size:"md",src:a||""})}:void 0})),s.replace(n.hash?`${n.pathname}${n.hash}`:n.pathname))}({showOneToast:es.showOneToast,i18n:N,location:en,history:G,username:q.username||"",fullName:q.fullName||"",avatarUrl:q.imageMediumUrl||""})},[]),(0,s.useEffect)(()=>(q.isAuth&&q.partner&&(0,f.Mt)(q,X.data),()=>{q.isAuth&&q.partner&&(0,f.CV)("flyout.dismiss")}),[]),(0,s.useEffect)(()=>{(X.data?.businesses??[]).length>0&&W(!0)},[X]),(0,s.useEffect)(()=>{L?.(U)},[U]);let{pathname:ei}=en,eo=!(ei.startsWith("/settings")||ei.startsWith("/edit"))&&(q.username&&ei.startsWith(`/${q.username}`)||ei.startsWith("/news_hub")),ea=V||ei.startsWith("/homefeed")||ei.startsWith("/business/hub")||"/"===ei;return(0,m.jsx)(A.T,{children:(0,m.jsxs)(S.j,{children:[(0,m.jsx)(o.xu,{ref:J,"data-test-id":"header-accounts-options-button",children:(0,m.jsx)(o.hU,{accessibilityLabel:B??N.bt("Accounts and more options", "Accounts and more options", "header.accountsOptionsMenu.accountsOptionsMenuButton", undefined, true),icon:k||"arrow-down",iconColor:U?Z||"darkGray":z||"gray",onClick:()=>{R?.(),M(!U),W(!1),$(!1)},size:O||"xs",tooltip:{accessibilityLabel:"",text:B??N.bt("Accounts and more options", "Accounts and more options", "navbar.actionsOptionsButton.tooltip", undefined, true),zIndex:E||new o.H3([w.NW]),idealDirection:I}})}),U&&(0,m.jsx)(o.xu,{"data-test-id":"HeaderAccountsOptionsFlyout",children:(0,m.jsx)(r.Z,{advertiser:T,anchor:J.current,isWwwSite:(0,l.YG)(e),onDismiss:()=>{M(!1)},showAccountSwitcher:ee,showAdsSupportOption:et,showMoreOptions:D})}),F&&(0,m.jsx)(o.xu,{"data-test-id":"LinkedBusinessAccountFlyout",children:(0,m.jsx)(a.Qp,{anchor:J.current,experienceIds:[502787],placementId:1000109,showCaret:!0})}),(0,x.LO)(en)&&(0,m.jsx)(a.Qp,{anchor:J.current,experienceIds:[503137],idealDirection:"left",placementId:1000303}),q.isAuth&&!q.partner?(0,m.jsx)(o.mh,{zIndex:new o.H3([P.pS]),children:(0,m.jsx)(a.Qp,{anchor:J.current,experienceIds:[503893,503602],onClickComplete:()=>G.push("/settings"),placementId:1000109,showCaret:!0})}):null,K&&(0,m.jsx)(o.mh,{zIndex:new o.H3([P.pS]),children:(0,m.jsx)(a.Qp,{anchor:J.current,experienceIds:[505848],hasFullWidthButton:!1,onClickComplete:()=>{$(!1),G.push("/settings/permissions")},placementId:1000109,showCaret:!0,textWeight:"normal"})}),eo&&(0,m.jsx)(o.mh,{zIndex:new o.H3([P.pS]),children:(0,m.jsx)(a.Qp,{anchor:J.current,experienceIds:[505283],flyoutSize:"md",hasFullWidthButton:!1,onClickComplete:()=>{G.push("/settings/privacy/")},placementId:1000109,showCaret:!0,textAlign:"center",textWeight:"bold"})}),ea&&(0,m.jsx)(o.mh,{zIndex:new o.H3([P.pS]),children:(0,m.jsx)(a.Qp,{anchor:J.current,experienceIds:[505949],hasFullWidthButton:!1,onClickComplete:()=>{G.push("/settings/claim")},placementId:1000109,showCaret:!0,textWeight:"normal"})})]})})}},702206:(e,t,n)=>{n.d(t,{Z:()=>s});function s(e){return"object"==typeof e&&null!==e&&"url"in e&&"media"in e}},49969:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(667294),i=n(573706),o=n(477058);let a=e=>{let t=(0,s.useRef)(!1),{logContextEvent:n}=(0,i.v)(),{viewType:a,viewParameter:r}=(0,o.SU)();(0,s.useEffect)(()=>{Object.entries(e).length>0&&!t.current&&a&&(n({event_type:13,view_type:a,view_parameter:r,...e}),t.current=!0)})}},887103:(e,t,n)=>{n.d(t,{Di:()=>a,Jl:()=>s,R:()=>i,aU:()=>r,j2:()=>o,pN:()=>l});let s=1e4,i="permanent_account_closure",o="account_deletion_email_sent",a="account_deactivated",r="unlink_successful",l="account_switch_to_settings"},516733:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(508442),i=n(868808);function o(e,t,n=""){if(!(t&&t.search))return"";let{message:a}=(0,i.mB)(t.search),r=(0,i.mB)(t.search).username||n,l="true"===(0,i.mB)(t.search).multiple_accounts;return(0,s.Z)({i18n:e,message:a,multipleAccounts:l,username:r})}},508442:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(883119),i=n(240760),o=n(887103),a=n(785893);function r(e,t,n){return(0,a.jsx)(s.xv,{align:n||"center",children:(0,i.nk)(e,{username:(0,a.jsx)(s.xv,{inline:!0,weight:"bold",children:t})})})}function l({i18n:e,message:t,multipleAccounts:n,username:s=""}){switch(t){case o.R:return e.bt("Your account has been deleted. We're sorry to see you go", "Your account has been deleted. We're sad to see you go", "unauthLoginPage.accountDeletedToast.message", undefined, true);case o.j2:if(n)return r(e.bt("An email has been sent with final steps to delete your account, {{username}}, and its linked accounts", "An email has been sent with final steps to delete your account, {{username}} and its linked accounts", "accountDeletedEmailToast.message.multipleAccounts", undefined, true),s);return r(e.bt("An email has been sent with final steps to delete your account, {{username}}", "An email has been sent with final steps to delete your account, {{username}}", "accountDeletedEmailToast.message.singleAccount", undefined, true),s);case o.Di:return r(n?e.bt("The account, {{username}}, and its associated linked accounts have been deactivated", "The account, {{username}}, and its associated linked accounts have been deactivated", "unauthLoginPage.deactivatedToast.message.multipleAccounts", undefined, true):e.bt("The account, {{username}}, has been deactivated", "The account, {{username}}, has been deactivated", "unauthLoginPage.deactivatedToast.message.singleAccount", undefined, true),s);case o.aU:return r(e.bt("Success! You've unlinked this business account. You are currently in {{username}}.", "Success! You've unlinked this business account. You are currently in {{username}}.", "authHomeFeedPage.unlinkAccountToast.message", undefined, true),s,"start");case o.pN:return r(e.bt("You've switched into and are currently in the account {{username}}", "You've switched into and are currently in the account {{username}}", "accountSettings.switchAccountToAccountChanges", undefined, true),s,"start");default:return""}}},754166:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(720398),i=n(566344);function o({isAdsSite:e,isAnalyticsSite:t,isTrendsSite:n,path:o,advertiserId:a}){let r=e||t||n?`${i.C0}`:"",l=`${r}${o}`;return a?(0,s.Z)(l,{advertiserId:a}):l}},71386:(e,t,n)=>{n.r(t),n.d(t,{Header:()=>X,default:()=>J});var s=n(667294),i=n(616550),o=n(883119),a=n(481238),r=n(503546),l=n(259232),c=n(702206),d=n(854864),u=n(955937),h=n(989820),p=n(904391),_=n(144326),m=n(282999),x=n(375182),f=n(297728),g=n(730212),b=n(154785),y=n(868808),A=n(554743),j=n(674389),w=n(453424),P=n(573706),C=n(844991),v=n(317128),S=n(785893);let T=({isSelected:e,onClick:t})=>{let n=(0,_.ZP)(),{logContextEvent:r}=(0,P.v)(),l=(0,w.Z)(!0),c=(0,s.useRef)(null),[d,u]=(0,s.useState)(!1),h=(0,i.k6)(),p=e=>{r({event_type:101,component:13988,element:e}),u(!1)};return(0,S.jsxs)(s.Fragment,{children:[(0,S.jsx)(o.xu,{ref:c,"data-test-id":"create-tab",children:(0,S.jsx)(C.Z,{contextData:v.SB.create,iconEnd:l?void 0:"arrow-down",isSelected:e,onClick:e=>{t?.(),l?(r({event_type:101,component:13988,element:10949}),e.preventDefault(),h.push({pathname:(0,a.Z)(l),state:{entry_type:"navbar_plus_button"}})):u(e=>!e)},role:l?"link":"button",text:n.bt("Create", "Create", "header.section.createTab", undefined, true)})}),d&&(0,S.jsxs)(o.Lt,{anchor:c.current,id:"header-create-dropdown",idealDirection:"down",onDismiss:()=>{u(!1)},zIndex:new o.Ry(1e3),children:[(0,S.jsx)(o.Lt.Link,{dataTestId:"create-idea-pin",href:"/idea-pin-builder/",onClick:()=>p(10949),option:{value:"ideaPin",label:n.bt("Create Pin for Idea ad", "Create Pin for Idea ad", "header.headerCreateMenu.ideaPinBtn", undefined, true)}}),(0,S.jsx)(o.Lt.Link,{dataTestId:"create-static-pin",href:"/pin-builder/",onClick:()=>p(10643),option:{value:"pin",label:n.bt("Create Pin", "Create Pin", "header.headerCreateMenu.pinBtn", undefined, true)}})]})]})};var I=n(382855),k=n(706044),O=n(445162),B=n(654400),z=n(453854),Z=n(241716),E=n(415787);function R({tabs:e}){let t=(0,_.ZP)(),[n,i]=(0,s.useState)(!1),{hovered:a,onMouseEnter:r,onMouseLeave:l}=(0,z.Z)(),c=(0,s.useRef)(null),d=e.find(e=>e.isSelected);d||(d=e.find(e=>"home"===e.key));let u=()=>i(!1);return(0,S.jsxs)(s.Fragment,{children:[(0,S.jsx)(o.xu,{ref:c,color:n?"dark":a?"secondary":void 0,"data-test-id":"HeaderCollapsedTabs",display:"inlineBlock",flex:"none",height:48,marginStart:2,minWidth:60,onMouseEnter:r,onMouseLeave:l,rounding:6,children:(0,S.jsx)(o.iP,{fullHeight:!0,onTap:()=>{i(!n),d?.incrementKey&&(0,E.nP)(d.incrementKey)},rounding:6,children:(0,S.jsxs)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{padding:"14px 14px",whiteSpace:"nowrap"}},display:"flex",flex:"none",justifyContent:"center",children:[(0,S.jsx)(o.xv,{align:"center",color:n?"inverse":"default",overflow:"normal",weight:"bold",children:d?.text}),(0,S.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{marginTop:"1px"}},marginStart:2,children:(0,S.jsx)(o.JO,{accessibilityLabel:t.bt("Open tab menu", "Open tab menu", "header.tabMenu.downArrow", undefined, true),color:n?"inverse":"default",icon:"arrow-down",size:12})})]})})}),n&&(0,S.jsx)(o.xu,{"data-test-id":"HeaderCollapsedTabsMenu",children:(0,S.jsx)(o.Lt,{anchor:c.current,disableMobileUI:!0,id:"HeaderCollapsedTabsMenu",onDismiss:u,zIndex:new o.H3([new o.Ry(Z.fe)]),children:e.map(({isSelected:e,key:n,text:s,url:i})=>(0,S.jsx)(o.Lt.Link,{href:i,onClick:u,option:{value:n,label:s},children:(0,S.jsxs)(o.kC,{alignItems:"center",width:"100%",children:[(0,S.jsx)(o.kC.Item,{flex:"grow",children:(0,S.jsx)(o.xv,{weight:"bold",children:s})}),(0,S.jsx)(o.JO,{accessibilityLabel:t.bt("Selected option", "Selected option", "flyoutMenu.selectedOptionCheckmark", undefined, true),color:"default",icon:e?"check":void 0,inline:!0})]})},n))})})]})}var L=n(835778),D=n(927648),N=n(961754);function U({children:e,isSelected:t}){let{isLoaded:n,data:s}=(0,N.Z)({name:"ApiResource",options:{url:"/v3/feeds/homefeed/badge/"},noCache:!0});return e(!!(n&&s)&&!t)}function H({anchor:e}){let t=(0,_.ZP)();return(0,S.jsx)(o.Li,{anchor:e,idealDirection:"down",message:t.bt("Your home feed will show ideas for your new interests", "Your home feed will show ideas for your new interests", "Flyout message on Pinterest logo on Header", undefined, true),onDismiss:()=>{}})}var M=n(704595),F=n(781456),W=n(49969),Y=n(599141);function $({isSelected:e,onClick:t}){let n=(0,_.ZP)();(0,W.Z)({component:v.SB.today.component,element:v.SB.today.element});let s=n.bt("Explore", "Explore", "header.section.exploreTab", undefined, true);return(0,S.jsx)(C.Z,{contextData:v.SB.today,dataTestId:"today-tab",isSelected:e,onClick:t,showNotifBadge:!0,text:s,url:(0,Y.tG)()})}var G=n(402189),q=n(16535);function Q(e,t,n){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let{hidden:V,visibilityChange:K}=(0,d.s)();class X extends s.Component{constructor(e){super(e),Q(this,"mounted",!1),Q(this,"iconRoutes",(0,I.Z)({username:this.props.viewer.username,isIdeaPinRenamingEnabled:this.props.isIdeaPinRenamingEnabled})),Q(this,"logoButtonRef",(0,s.createRef)()),Q(this,"profileRef",(0,s.createRef)()),Q(this,"getCollapsedTabList",()=>[{key:"home",text:this.props.i18n.bt("Home", "Home", "header.homeButton.section", undefined, true),url:"/",incrementKey:v.sp.HOME_BUTTON_COLLAPSED_TAB},...this.props.isTodayTabEligible?[{key:"explore",text:this.props.i18n.bt("Explore", "Explore", "header.section.exploreTab", undefined, true),url:this.props.todayPathUrl,incrementKey:v.sp.TODAY_TAB_COLLAPSED_TAB}]:[],{key:"create",text:this.props.i18n.bt("Create", "Create", "header.section.createTab", undefined, true),url:(0,a.Z)(this.props.isIdeaPinRenamingEnabled),incrementKey:v.sp.CREATE_TAB_COLLAPSED_TAB}]),Q(this,"handleResize",(0,u.Z)(()=>{if(this.mounted){let e=document.getElementById("searchBoxContainer")?.offsetWidth||0;this.setState({searchIconOnly:e<=300}),window.innerWidth<850&&this.props.requestContext?this.setState({shrinkSearchbox:!0}):this.state.shrinkSearchbox&&this.setState({searchIconOnly:!1,shrinkSearchbox:!1})}},100)),Q(this,"handleDAUPing",()=>{document[V]||(0,l.Z)()}),Q(this,"fetchUserAccounts",()=>{let{userAccountsRetrieved:e,viewer:t}=this.props;t.isAuth&&(0,x.dD)(t).then(t=>{e(t)})}),this.state={searchIconOnly:!1,selected:(0,k.Z)({pathname:e.location.pathname,iconRoutes:this.iconRoutes}),showLeftTabs:!0,shrinkSearchbox:!1}}componentDidMount(){let{headerButtonContext:e}=this.props;this.mounted=!0,this.fetchUserAccounts(),this.handleResize(),window.addEventListener("resize",this.handleResize),(0,s.startTransition)(()=>{e.setLogoButtonRef(this.logoButtonRef.current)}),K&&window.addEventListener(K,this.handleDAUPing,!1)}componentDidUpdate(e){let{location:t}=this.props;if(e.location.pathname!==t.pathname){let e=(0,k.Z)({pathname:t.pathname,iconRoutes:this.iconRoutes});this.setState({selected:e})}}componentWillUnmount(){window.removeEventListener("resize",this.handleResize),K&&window.removeEventListener(K,this.handleDAUPing),this.mounted=!1}renderSearchBox(){let{history:e}=this.props,{searchIconOnly:t,shrinkSearchbox:n}=this.state;return e?.push?(0,S.jsx)(j.Z,{handleIconOnlyChange:e=>this.setState({showLeftTabs:t&&e}),iconOnly:t,widthType:n?"shrink":void 0}):null}renderButtons(){let{currentSite:e,headerButtonContext:t,isVerticalNavEnabled:n,onMouseDownHomefeedPrefetch:i,onNavigateToHomefeedMousedownPrefetch:a}=this.props,{selected:r,showLeftTabs:l,shrinkSearchbox:c}=this.state;return n?(0,S.jsxs)(o.xu,{alignItems:"center",column:12,"data-test-id":"button-container",display:"flex",height:56,children:[this.renderSearchBox(),(0,S.jsx)(o.kC.Item,{children:(0,S.jsx)(M.Z,{children:(0,S.jsx)(O.Z,{idealTooltipDirection:"down",isSelected:"profile"===r,onClick:()=>(0,E.nP)(v.Un.AVATAR,this.props.metricOptions),tooltipZIndex:G.BO})})}),(0,S.jsx)(o.kC.Item,{children:(0,S.jsx)(p.Z,{currentSite:e,iconLabel:this.props.i18n.bt("Accounts", "Accounts", "header.accountOptionsButton.accountsOnly", undefined, true),onPanelChange:e=>{e&&(0,E.nP)(v.Un.ACCOUNT_SWITCHER)},showMoreOptions:!1})})]}):(0,S.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,S.jsxs)(o.xu,{children:[(0,S.jsx)(o.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,S.jsx)(D.Z,{onClick:()=>{(0,E.nP)(v.sp.PINTEREST_LOGO,this.props.metricOptions),a?.()},onMouseDown:i},"HomeButton")}),t.isTooltipOnLogoButtonShown&&(0,S.jsx)(H,{anchor:this.logoButtonRef.current})]}),!c&&l&&(0,S.jsxs)(s.Fragment,{children:[(0,S.jsx)(U,{isSelected:"home"===r,children:e=>(0,S.jsx)(C.Z,{dataTestId:"home-tab",isSelected:"home"===r,onClick:()=>(0,E.nP)(v.sp.HOME_TAB,this.props.metricOptions),showNotifBadge:e,text:this.props.i18n.bt("Home", "Home", "header.homeButton.section", undefined, true),url:"/"})}),this.props.isTodayTabEligible&&(0,S.jsx)($,{isSelected:"today"===r,onClick:()=>(0,E.nP)(v.sp.TODAY_TAB,this.props.metricOptions)}),(0,S.jsx)(T,{isSelected:"create"===r,onClick:()=>(0,E.nP)(v.sp.CREATE_TAB,this.props.metricOptions)})]}),c&&l&&(0,S.jsx)(R,{tabs:this.getCollapsedTabList().map(e=>({isSelected:r===e.key,...e}))}),this.renderSearchBox(),(0,S.jsxs)(o.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:[(0,S.jsx)(F.F,{value:{currentSite:e},children:(0,S.jsx)(q.Z,{onConversationsClick:()=>(0,E.nP)(v.sp.CONVERSATIONS,this.props.metricOptions),onNewsClick:()=>(0,E.nP)(v.sp.NEWS,this.props.metricOptions)})}),(0,S.jsxs)(s.Fragment,{children:[(0,S.jsx)(o.xu,{ref:this.profileRef,children:(0,S.jsx)(M.Z,{children:(0,S.jsx)(O.Z,{isSelected:"profile"===r,onClick:()=>(0,E.nP)(v.sp.AVATAR,this.props.metricOptions)})})}),(0,S.jsx)(p.Z,{currentSite:e,onClick:()=>(0,E.nP)(v.sp.ACCOUNT_OPTIONS,this.props.metricOptions)})]})]})]})}renderHomeButtonAndAccountSwitcher(){let{currentSite:e,headerButtonContext:t}=this.props,{selected:n}=this.state;return(0,S.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,S.jsxs)(o.xu,{children:[(0,S.jsx)(o.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,S.jsx)(D.Z,{onClick:()=>(0,E.nP)(v.sp.EXTERNAL_BUTTON_QUERY_PINTEREST_LOGO,this.props.metricOptions)},"HomeButton")}),t.isTooltipOnLogoButtonShown&&(0,S.jsx)(H,{anchor:this.logoButtonRef.current})]}),(0,S.jsx)(o.xu,{flex:"grow"}),(0,S.jsx)(o.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:(0,S.jsxs)(s.Fragment,{children:[(0,S.jsx)(o.xu,{ref:this.profileRef,children:(0,S.jsx)(M.Z,{children:(0,S.jsx)(O.Z,{isSelected:"profile"===n,onClick:()=>(0,E.nP)(v.sp.EXTERNAL_BUTTON_QUERY_AVATAR,this.props.metricOptions)})})}),(0,S.jsx)(p.Z,{currentSite:e,onClick:()=>(0,E.nP)(v.sp.EXTERNAL_BUTTON_QUERY_ACCOUNT_OPTIONS,this.props.metricOptions)})]})})]})}renderBusinessSsoPageHeader(){let{i18n:e}=this.props;return(0,S.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,S.jsx)(o.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,S.jsx)(D.Z,{onClick:()=>(0,E.nP)(v.sp.SSO_PAGE_PINTEREST_LOGO,this.props.metricOptions)},"HomeButton")}),(0,S.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{letterSpacing:"-1px"}},children:(0,S.jsx)(o.X6,{accessibilityLevel:2,color:"default",overflow:"normal",size:"400",children:e.bt("Business", "Business", "authHeader.logoText.business", undefined, true)})})]})}renderUnsubscribePageHeader(){let{history:e,i18n:t,trackInteraction:n}=this.props;return(0,S.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,S.jsx)(o.xu,{children:(0,S.jsx)(D.Z,{onClick:()=>(0,E.nP)(v.sp.UNSUBSCRIBE_PAGE_PINTEREST_LOGO,this.props.metricOptions)},"HomeButton")}),(0,S.jsx)(o.xu,{flex:"grow"}),(0,S.jsx)(o.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:(0,S.jsx)(o.iP,{onTap:()=>{e.push("/"),n({action:"click",item:"back-to-pinterest",within:"unsubscribe-page"})},rounding:2,tapStyle:"compress",children:(0,S.jsxs)(o.kC,{alignItems:"center",justifyContent:"start",children:[(0,S.jsx)(o.xv,{inline:!0,size:"300",weight:"bold",children:t.bt("Back to Pinterest", "Back to Pinterest", "header.backToPinterest.section", undefined, true)}),(0,S.jsx)(O.Z,{isSelected:!1,noNavigation:!0,onClick:()=>(0,E.nP)(v.sp.UNSUBSCRIBE_PAGE_AVATAR,this.props.metricOptions)})]})})})]})}renderHeaderContent(){let{location:e,viewer:t}=this.props;if((0,m.RU)(e)){let t=(0,y.mB)(e.search);if((0,c.Z)(t))return this.renderHomeButtonAndAccountSwitcher()}else if((0,m.OK)(e)&&t.isLimitedLogin)return this.renderUnsubscribePageHeader();else if((0,m.nU)(e))return this.renderBusinessSsoPageHeader();return this.renderButtons()}render(){let{headerShadowContext:{isScrolled:e,subheaderShadow:t},nags:n}=this.props;return(0,S.jsxs)(o.xu,{color:"default",column:12,"data-test-id":"header-background",children:[n,(0,S.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{...null===t&&e?Z.Rz:{}}},children:(0,S.jsx)(o.kC,{direction:"column",height:Z.cI,justifyContent:"start",width:"100%",children:(0,S.jsx)(o.xu,{alignItems:"center",column:12,display:"flex",flex:"grow",paddingX:4,children:this.renderHeaderContent()})})})]})}}function J(e){let t=(0,_.ZP)(),n=(0,i.k6)(),s=(0,i.TH)(),o=(0,B.p)(),a=(0,L.WQ)(),l=(0,g.B)(),{checkExperiment:c}=(0,f.F)(),{userAccountsRetrieved:d}=(0,A.N)(),u=(0,b.Z)(),{enabled:p,group:m}=(0,r.Z)(),x=(0,v.tB)();return c("social_experience_holdout_2024_h2"),c("social_experience_holdout_2025_h1"),c("ce_project_habit_holdout_2025_h1"),(0,h.Ow)(1000109),(0,S.jsx)(X,{...e,...x,headerButtonContext:o,headerShadowContext:a,history:n,i18n:t,isVerticalNavEnabled:p,location:s,requestContext:l,showPersonalBoutique:e.viewer.show_personal_boutique??!1,trackInteraction:u,userAccountsRetrieved:d,verticalNavExperimentGroup:m})}},445162:(e,t,n)=>{n.d(t,{Z:()=>A});var s=n(667294),i=n(883119),o=n(503546),a=n(989820),r=n(559028),l=n(144326),c=n(899544),d=n(343583),u=n(730212),h=n(754166),p=n(453854),_=n(383399),m=n(732567),x=n(241716),f=n(402189),g=n(785893);let b="circle";function y({children:e,show:t,text:n,idealDirection:s,zIndex:o}){return t?(0,g.jsx)(i.u,{accessibilityLabel:"",idealDirection:s,text:n,zIndex:o||new i.H3([new i.Ry(x.fe)]),children:e}):e}function A({isAdsSite:e=!1,isAnalyticsSite:t=!1,isTrendsSite:n=!1,isSelected:x,noNavigation:A=!1,idealTooltipDirection:j,tooltipZIndex:w,onClick:P}){let C=(0,_.Z)(),v=(0,u.B)(),S=(0,l.ZP)(),{active:T,hovered:I,onBlur:k,onFocus:O,onMouseDown:B,onMouseUp:z,onMouseEnter:Z,onMouseLeave:E}=(0,p.Z)(),{fullName:R,username:L,imageMediumUrl:D}=C.isAuth?C:{fullName:"",username:"",imageMediumUrl:""},N=C.isAuth?C?.avatar_color_index:void 0,{isInBiznuxFullscreen:U}=(0,m.Z)(),H=(0,s.useRef)(null),M=(0,h.Z)({isAdsSite:e,isAnalyticsSite:t,isTrendsSite:n,path:`/${L}/`,requestContext:v}),F=(0,d.Z)({href:M,onHistoryChange:c.Z}),{enabled:W}=(0,o.Z)();return U||A?(0,g.jsx)(i.xu,{"data-test-id":"header-profile",height:48,rounding:"circle",width:48,children:(0,g.jsx)(i.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",rounding:"circle",width:"100%",children:(0,g.jsx)(i.xu,{alignItems:"center",display:"flex",height:30,justifyContent:"center",rounding:"circle",width:30,children:(0,g.jsx)(r.qE,{color:N,name:R,size:"xs",src:D})})})}):(0,g.jsxs)(i.xu,{"data-test-id":"header-profile",children:[(0,g.jsx)(a.N,{anchors:{3014:H.current},idealDirection:j,onAnchorTouch:"complete",placementId:1000109,scrollToDismiss:!0}),(0,g.jsx)(y,{idealDirection:j,show:![e,t,n].some(Boolean),text:S.bt("Your profile", "Your profile", "navbar.avatarButton.tooltip", undefined, true),zIndex:w,children:(0,g.jsx)(i.Tg,{href:M,onTap:({event:e,dangerouslyDisableOnNavigation:t})=>{P?.(),t(),F({event:e})},rounding:W?f.uW:b,children:(0,g.jsx)(i.xu,{ref:H,color:I&&!W?"secondary":void 0,dangerouslySetInlineStyle:W?{__style:{backgroundColor:I?f.bT:void 0}}:void 0,height:48,onBlur:k,onFocus:O,onMouseDown:B,onMouseEnter:Z,onMouseLeave:E,onMouseUp:z,rounding:W?f.uW:b,width:48,children:(0,g.jsx)(i.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",rounding:"circle",width:"100%",children:(0,g.jsx)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{...T||x?{border:"2px solid #111111"}:{}}},display:"flex",height:W?38:30,justifyContent:"center",rounding:"circle",width:W?38:30,children:(0,g.jsx)(r.qE,{color:N,name:R,size:W?"sm":"xs",src:D})})})})})})]})}},704595:(e,t,n)=>{n.d(t,{Z:()=>f});var s=n(667294),i=n(883119),o=n(512541),a=n(732567),r=n(66560),l=n(785893);function c(e,t,n){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let d="SavePin",u={__style:{left:"50%",marginLeft:-125}},h={__style:{animationName:`${d}_AnimateIn, ${d}_CircleAnimateOut`,animationDuration:"0.3s, 0.25s",animationDelay:"0.5s, 1.3s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out",backgroundColor:"rgba(255, 255, 255, 0.6)"}},p={__style:{animationName:`${d}_AnimateIn, ${d}_AnimateOut`,animationDuration:"0.3s, 0.35s",animationDelay:"0.5s, 1.55s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out",border:"4px solid white"}},_={__style:{animationName:`${d}_NavButtonAnimation`,animationDuration:"0.8s",animationDelay:"1.65s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out"}},m=()=>`
@keyframes ${d}_AnimateIn {
  from {
    transform: scale(0.0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scale(1.0);
  }
}
@keyframes ${d}_CircleAnimateOut {
  from {
    transform: scale(1.0);
    opacity: 1;
  }
  to {
    transform: scale(0.8);
    opacity: 0;
  }
}
@keyframes ${d}_AnimateOut {
  from {
    transform: translateY(0) scale(1.0);
    opacity: 1;
  }
  to {
    transform: translateY(-100px) scale(0.0);
    opacity: 0;
  }
}
@keyframes ${d}_NavButtonAnimation {
  0% {
    transform: scale(1.0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.0);
  }
}
`;class x extends s.Component{constructor(...e){super(...e),c(this,"state",{imageLoaded:!1}),c(this,"handleAnimationCompletion",()=>{let{animationEnded:e}=this.props;this.setState({imageLoaded:!1},()=>{e()})}),c(this,"handleImageLoad",()=>{this.setState({imageLoaded:!0})}),c(this,"loadImage",()=>{let e=new Image;e.onload=this.handleImageLoad,e.src=this.imageSrc()}),c(this,"imageSrc",()=>{let{images:e={}}=this.props.lastRepin||{};return e["236x"]?.url??""}),c(this,"shouldRenderAnimation",()=>{let{lastRepin:e,startAnimation:t}=this.props,{imageLoaded:n}=this.state;return!!(e&&n&&t)})}componentDidUpdate(e,t){let{lastRepin:n={}}=e,{imageLoaded:s}=t,{lastRepin:i,startAnimation:o}=this.props,{imageLoaded:a}=this.state;i&&i.id!==n?.id&&this.loadImage(),o&&a&&a!==s&&(this.dismissTimeout=setTimeout(this.handleAnimationCompletion,2500))}componentWillUnmount(){this.dismissTimeout&&clearTimeout(this.dismissTimeout)}render(){let{children:e}=this.props;return this.shouldRenderAnimation()?(0,l.jsxs)(i.kC,{alignItems:"stretch",flex:"grow",justifyContent:"center",children:[(0,l.jsx)(o.Z,{unsafeCSS:m()}),(0,l.jsxs)(i.xu,{position:"relative",children:[(0,l.jsxs)(i.xu,{dangerouslySetInlineStyle:u,height:250,position:"absolute",top:!0,width:250,children:[(0,l.jsx)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:h,display:"flex",height:"100%",justifyContent:"center",opacity:0,rounding:"circle",width:"100%"}),(0,l.jsx)(i.xu,{bottom:!0,dangerouslySetInlineStyle:p,height:100,left:!0,margin:"auto",opacity:0,position:"absolute",right:!0,rounding:3,top:!0,width:100,children:(0,l.jsx)(i.zd,{height:"100%",rounding:2,wash:!0,width:"100%",children:(0,l.jsx)(i.Ee,{alt:"pin-image",fit:"cover",naturalHeight:1,naturalWidth:1,src:this.imageSrc()})})})]}),(0,l.jsx)(i.xu,{dangerouslySetInlineStyle:_,children:e})]})]}):e}}function f(e){let{repinPinId:t,repinStartAnimation:n,updateHeaderState:s}=(0,a.Z)(),i=(0,r.S6)(),o=t?i(t):null;return(0,l.jsx)(x,{...e,animationEnded:()=>s({type:"hideRepinAnimation"}),lastRepin:o,startAnimation:n})}},16535:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(667294),i=n(383399),o=n(694735),a=n(301751),r=n(785893);function l({onNewsClick:e,onConversationsClick:t}){let n=(0,i.Z)();return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(o.Z,{onClick:e}),n.isAuth&&n.should_show_messaging&&(0,r.jsx)(a.Z,{onClick:t})]})}},461661:(e,t,n)=>{n.d(t,{Z:()=>i,x:()=>o});var s=n(580505);function i({user:e,viewer:t}){return!!(t.isAuth&&e?.username===t.username)}function o({user:e,viewer:t,location:n}){let{id:i}=e||{},{id:o,isAuth:a}=t,{pathname:r=""}=n||{};return!!(a&&o===i&&r.includes(`/${s.qV}/`))}},580505:(e,t,n)=>{n.d(t,{Lz:()=>o,qV:()=>s,sz:()=>i});let s="_profile",i={enabled_with_unorganized_feed:"enabled_with_unorganized_feed",enabled_with_log_fix:"enabled_with_log_fix",enabled_old:"enabled_old"},o=506467},664331:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(616550),i=n(961754);function o(e){let{username:t}=(0,s.UO)();return(0,i.Z)(e||null==t?null:{name:"UserResource",options:{username:t,field_set_key:"profile"}})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/AuthDesktopHeader.en_GB-4ac073b0f4258f16.mjs.map