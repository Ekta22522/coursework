"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[50527],{590837:(e,l,t)=>{t.r(l),t.d(l,{default:()=>n});let r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"BubbleStory_story",selections:[{alias:"storyId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"referringSource",storageKey:null},{alias:"storyTitle",args:null,concreteType:"StoryText",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"format",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryAction",kind:"LinkedField",name:"action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"objects",plural:!0,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],type:"ExploreArticle",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryDisplayOptions",kind:"LinkedField",name:"displayOptions",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"identifierIconName",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"BubblesGridRep_story"}],type:"Story",abstractKey:null};r.hash="65f937228dfdc6a128c57dba6ec53e2f";let n=r},305426:(e,l,t)=>{t.r(l),t.d(l,{default:()=>n});let r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"BubblesGridRep_story",selections:[{alias:"storyId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyType",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"objects",plural:!0,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},{args:null,kind:"FragmentSpread",name:"ExploreBubble_exploreArticle"}],type:"ExploreArticle",abstractKey:null}],storageKey:null}],type:"Story",abstractKey:null};r.hash="1820448f293b4452fdd957a1b02dd23b";let n=r},418052:(e,l,t)=>{var r;t.r(l),t.d(l,{default:()=>a});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ExploreBubble_exploreArticle",selections:[{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,concreteType:"StoryAction",kind:"LinkedField",name:"action",plural:!1,selections:r=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"curator",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageSmallUrl",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dominantColors",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"identifierIconType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyCategory",storageKey:null},{alias:"articleTitle",args:null,concreteType:"ArticleTitleGraphQL",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"format",storageKey:null}],storageKey:null},{alias:"coverImage236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"coverImages",plural:!0,selections:r,storageKey:'coverImages(spec:"236x")'},{alias:"coverImage474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"coverImages",plural:!0,selections:r,storageKey:'coverImages(spec:"474x")'}],type:"ExploreArticle",abstractKey:null};n.hash="ee837caaba80f67c3ccb2223d20c7649";let a=n},892205:(e,l,t)=>{t.d(l,{Z:()=>r});let r=(0,t(667294).createContext)("undefined"!=typeof window?window:null)},995060:(e,l,t)=>{t.d(l,{Z:()=>o});var r=t(883119),n=t(573706),a=t(144326),i=t(667294),s=t(785893);function o({auxData:e,enabled:l,onPull:t,refreshing:o,viewParameter:d}){let u=(0,a.ZP)(),{logContextEvent:c}=(0,n.v)(),m=4079===d,{position:g,startYRefCurrent:y,pullDistance:p}=function({enabled:e,onSelect:l,refreshing:t}){let r=(0,i.useRef)(null),[n,a]=(0,i.useState)(0),[s,o]=(0,i.useState)(!1),d=t?0:n/250,u=d>0,c=()=>{o(!1),a(0)};return(0,i.useEffect)(()=>{if(e){let e=e=>{window.scrollY<=0&&!t&&(r.current=e.touches[0].clientY)},i=e=>{if(r.current){let l=(e.touches[0].clientY-r.current)*.5;l>0&&(a(l),e.preventDefault())}},s=()=>{r.current&&(o(!0),l({pullDistance:n,position:d,resetState:c}),r.current=null)};return window.addEventListener("touchstart",e),window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("touchend",s),()=>{window.removeEventListener("touchstart",e),window.removeEventListener("touchmove",i,{passive:!1}),window.removeEventListener("touchend",s)}}},[e,l,n,t,d]),{pullDistance:n,hasStartPulling:u,position:d,startYRefCurrent:r.current,PULL_MENU_DISTANCE:250,isExecuted:s}}({enabled:l,onSelect:l=>{let{pullDistance:r,resetState:n}=l;r>=120&&(c({view_type:1,event_type:158,view_parameter:m?4079:92,aux_data:m?e:{}}),t()),n()},refreshing:o}),x=Math.min(g,1),h=u.bt("Pull to refresh", "Pull to refresh", "Pull down on grid to refresh items", undefined, true);return(0,s.jsx)(r.xu,{children:l&&(0,s.jsx)(r.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{opacity:x,transition:null===y?"all .3s ease-out":void 0}},display:"flex",height:120*g,justifyContent:"center",children:(0,s.jsx)(r.JO,{accessibilityLabel:h,icon:y&&p<120?"arrow-circle-down":"arrow-circle-up",size:40})})})}},769423:(e,l,t)=>{t.d(l,{Z:()=>s});var r=t(883119),n=t(410150),a=t(740366),i=t(785893);let s=()=>{let e=(0,n.HG)(),l=(0,a.Z)({isDesktop:e}),t=l?-l:0;return(0,i.jsx)(r.xu,{marginBottom:t,marginTop:t,paddingY:l})}},740366:(e,l,t)=>{t.d(l,{Z:()=>r});function r({isDesktop:e}){return e?0:1}},367912:(e,l,t)=>{t.d(l,{Z:()=>s});var r=t(410150),n=t(383399),a=t(678541),i=t(785893);let s=({children:e})=>{let l=(0,r.HG)();return!(0,n.Z)().isAuth&&l?(0,i.jsx)(a.x,{children:e}):e}},798920:(e,l,t)=>{t.d(l,{G9:()=>i,SY:()=>o,kk:()=>a,mb:()=>d,s:()=>s});var r=t(679482),n=t(740366);let a=({isDesktop:e})=>{let l=(0,n.Z)({isDesktop:e});return l?-l:0},i=-2,s=({trafficSource:e,deviceType:l,experimentalGutter:t})=>{let n=t??4*r.jC;return"desktop"===l?n:"board"===e?4:void 0},o=({deviceType:e,customMWebColumnWidth:l,experimentalColumnWidth:t})=>{let n=t??r.yF;return"desktop"===e?n:l||200},d=({gutterWidth:e,itemWidth:l,className:t,minColumns:n=r.yc,maxColumns:a=r.g5})=>{let i=l+e;return Array.from({length:a+1-n},(e,l)=>l+n).map(l=>({minWidth:l===n?0:l*i,maxWidth:l===a?null:(l+1)*i-1,styles:`
      .${t} {
        max-width: ${l*i-e}px;
      }
      `})).map(({minWidth:e,maxWidth:l,styles:t})=>`
    @media (min-width: ${e}px) ${l?`and (max-width: ${l}px)`:""} {
      ${t}
    }
  `).join("")}},507830:(e,l,t)=>{t.d(l,{Z:()=>y});var r=t(667294),n=t(883119),a=t(679482),i=t(512541),s=t(410150),o=t(659479),d=t(785893);let u="PinGridSkeletonLoader__tall",c="PinGridSkeletonLoader__short",m=({size:e})=>(0,d.jsx)(n.xu,{padding:1,children:(0,d.jsx)("div",{className:"tall"===e?u:c})}),g=({children:e})=>(0,d.jsx)(n.kC,{direction:"column",gap:{row:0,column:2},children:e}),y=({partialViewportWidth:e})=>{let l="desktop"===(0,s.ZP)(),t=l?a.yF:a.tG;return(0,d.jsxs)(r.Fragment,{children:[(0,d.jsx)(i.Z,{unsafeCSS:[{name:u,height:250},{name:c,height:150}].map(({name:e,height:l})=>(0,o.Z)({name:e,width:t,height:l})).join("")}),(0,d.jsx)(n.xu,{marginEnd:a.qG,marginStart:a.qG,children:l?(0,d.jsxs)(n.kC,{direction:"row",gap:{row:a.jC,column:0},children:[(0,d.jsx)(g,{children:(0,d.jsx)(m,{size:"tall"})}),(0,d.jsx)(g,{children:(0,d.jsx)(m,{size:"short"})}),(0,d.jsx)(g,{children:(0,d.jsx)(m,{size:"tall"})}),!e&&(0,d.jsx)(g,{children:(0,d.jsx)(m,{size:"short"})})]}):(0,d.jsxs)(n.kC,{direction:"row",justifyContent:"center",overflow:"hidden",children:[(0,d.jsxs)(g,{children:[(0,d.jsx)(m,{size:"tall"}),(0,d.jsx)(m,{size:"short"}),(0,d.jsx)(m,{size:"tall"})]}),(0,d.jsxs)(g,{children:[(0,d.jsx)(m,{size:"short"}),(0,d.jsx)(m,{size:"tall"}),(0,d.jsx)(m,{size:"short"}),(0,d.jsx)(m,{size:"tall"})]})]})})]})}},615766:(e,l,t)=>{t.d(l,{UG:()=>g,ZP:()=>p,aG:()=>y});var r=t(667294),n=t(883119),a=t(559028),i=t(144326),s=t(205906),o=t(154785),d=t(410150),u=t(383399),c=t(632859),m=t(785893);let g={large:"large",medium:"medium",small:"small",extra_small:"extra_small",article:"article",interest:"interest",responsive:"responsive"},y={bubbleOverlay:{__style:{backgroundColor:"rgba(0, 0, 0, 0.3)"}},bubbleOverlayHovered:{__style:{backgroundColor:"rgba(0, 0, 0, 0.6)"}}};function p({backgroundColor:e,bubbleId:l,bubbleUrl:t,coverImageUrl:p,curator:x,font:h,format:f,height:b,identifierIconType:_,onTap:v,pwtSurfaceContext:j,referringSource:S,subtitle:k,title:w,buttonFormat:I,contentAlign:T="center",textAlign:F="center",width:K="100%"}){let C=(0,i.ZP)(),L=(0,o.Z)(),Z=(0,d.HG)(),[z,E]=(0,r.useState)(!1),A=(0,u.Z)(),P=A.isAuth?A?.avatar_color_index:void 0,[G,D]=(0,r.useState)("string"==typeof b?void 0:b);if(!G)return(0,m.jsx)(n.xu,{ref:e=>{e&&D(e.offsetWidth*("string"==typeof b?Number.parseFloat(b):100)/100)},dangerouslySetInlineStyle:{__style:{paddingBottom:"string"==typeof b?Number.parseFloat(b)+"%":"100%",width:K}}});let U=f===g.article,O=f===g.interest,N=h||G>250&&"lg"||G>140&&f&&[g.medium,g.small,g.article].includes(f)&&"md"||G<120&&f&&f===g.small&&"xs"||"sm";return(0,m.jsx)(n.xu,{"data-test-id":"search-suggestion","data-test-type":S,onMouseEnter:()=>Z?E(!0):void 0,onMouseLeave:()=>Z?E(!1):void 0,position:"relative",children:(0,m.jsx)(c.MZ,{isAppUpsellDisabled:!0,onTouch:()=>{v&&(L({action:"click",item:"search-suggestion"}),v(l))},rounding:4,to:t,children:(0,m.jsxs)(n.zd,{rounding:4,children:[(0,m.jsx)(n.xu,{height:G,width:K,children:p&&(0,m.jsx)(n.Ee,{alt:"",color:e,fit:"cover",naturalHeight:1,naturalWidth:1,onLoad:()=>{j&&j.markConstraintComplete("RenderSearchLandingPageBubbles")},role:"presentation",src:p})}),(0,m.jsx)(n.xu,{dangerouslySetInlineStyle:z?y.bubbleOverlayHovered:y.bubbleOverlay,height:G,left:!0,position:"absolute",top:!0,width:K}),x&&!U&&(0,m.jsx)(n.xu,{left:!0,padding:2,position:"absolute",top:!0,children:(0,m.jsx)(a.qE,{color:P,name:x.full_name,outline:!0,size:"xs",src:x.image_small_url})}),!!_&&_!==s.J&&(0,m.jsx)(n.xu,{alignItems:"center",color:"default",display:"flex",height:24,justifyContent:"center",left:!0,margin:2,opacity:.8,position:"absolute",rounding:"circle",top:!0,width:24,children:(0,m.jsx)(n.JO,{accessibilityLabel:C.bt("Shopping icon", "Shopping icon", "bubble.shoppingIcon.label", undefined, true),color:"default",icon:(0,s.Z)(_),size:12})}),(0,m.jsx)(n.xu,{alignItems:U||O?"end":"center",display:"flex",height:G,justifyContent:T,padding:U||O?6:G>100?3:1,position:"absolute",top:!0,width:K,children:(0,m.jsxs)(n.kC,{alignItems:"stretch",direction:"column",justifyContent:"start",children:[k&&(0,m.jsx)(n.xv,{align:F,color:"light",overflow:"normal",size:"lg"===N?"300":"100",children:k}),["lg","md"].includes(N)?(0,m.jsx)(n.X6,{align:F,color:"light",overflow:"normal",size:"md"===N&&O?"500":"lg"===N?"600":"400",children:w}):(0,m.jsx)(n.xv,{align:F,color:"light",overflow:"normal",size:"sm"===N?"300":"100",weight:"bold",children:w}),x&&U&&(0,m.jsxs)(n.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginTop:4,children:[(0,m.jsx)(n.xu,{marginEnd:2,children:(0,m.jsx)(a.qE,{name:x.full_name,outline:!0,size:"xs",src:x.image_small_url})}),(0,m.jsx)(n.xv,{color:"light",size:"100",weight:"bold",children:x.full_name})]}),I&&(0,m.jsx)(n.xu,{marginTop:4,children:(0,m.jsx)(n.ZP,{accessibilityLabel:I.accessibilityLabel,href:I.href,size:I.size,text:I.text})})]})})]})})})}},405588:(e,l,t)=>{t.d(l,{Z:()=>g}),t(167912);var r,n=t(883119),a=t(488792),i=t(384609),s=t(205906),o=t(648089),d=t(87416),u=t(995882),c=t(785893);let m=void 0!==r?r:r=t(590837);function g({auxData:e,pattern:l,slotIndex:t,viewType:r,viewParameter:g,storyKey:y,titleAlignment:p="center",omitTitle:x=!1,titleMarginBottom:h=2,titleMarginStart:f=0,titleSize:b="300"}){let _=(0,i.Z)(m,y),v=(0,a.Z)();if(null==_)return null;let j=!!_.storyTitle,S=_.storyTitle?.format,k=_.displayOptions?.identifierIconName,w=_.action?.url,I=_.action?.text||void 0,T=(_.objects?.filter(e=>"ExploreArticle"===e.__typename)??[]).map(({type:e,entityId:l})=>e+":"+l).join("|"),F={story_type:_.storyType,story_id:_.storyId,content_ids:T,...e};return(0,c.jsx)(d.qS,{auxData:F,component:200,loggingId:_.storyId??"",objectIdStr:_.storyId??"",slotIndex:t,viewParameter:g,viewType:r,children:({impressionTrackerRef:e})=>(0,c.jsxs)(n.xu,{ref:e,children:[j&&!x&&(0,c.jsxs)(n.xu,{alignItems:"center",display:"flex",justifyContent:p,marginBottom:h,marginStart:f,children:["number"==typeof k&&k!==s.J&&(0,c.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{paddingTop:1}},marginEnd:2,children:(0,c.jsx)(n.JO,{accessibilityLabel:"",color:"default",icon:(0,s.Z)(k),size:14})}),(0,c.jsx)(n.xv,{size:b,weight:"bold",children:S})]}),(0,c.jsx)(u.Z,{pattern:l,referringSource:_.referringSource,storyKey:_,viewParameter:g,viewType:r}),w&&I&&(0,c.jsx)(n.xu,{display:"flex",justifyContent:"center",marginTop:1,width:"100%",children:(0,c.jsx)(n.ZP,{accessibilityLabel:I,color:"gray",href:w,onClick:()=>{v({view_type:r,view_parameter:g,aux_data:F,event_type:102})},rel:(0,o.Z)({url:w})?"nofollow":void 0,size:"md",target:(0,o.Z)({url:w})?"blank":void 0,text:I})})]})})}},995882:(e,l,t)=>{t.d(l,{Z:()=>g}),t(167912);var r,n=t(883119),a=t(31723),i=t(384609),s=t(615766),o=t(721204),d=t(785893);let u=void 0!==r?r:r=t(305426);function c({storyData:e,onTouch:l,pattern:t=[s.UG.medium],pwtSurfaceContext:r,referringSource:a,viewParameter:i,viewType:u}){let c=e.objects?.filter(e=>"ExploreArticle"===e.__typename)??[],m=c.map(({type:e,entityId:l})=>e+":"+l).join("|");return(0,d.jsx)(n.kC,{alignItems:"stretch",justifyContent:"between",width:"100%",wrap:!0,children:c.map((c,g)=>{let y=t[g%t.length];return(0,d.jsx)(n.xu,{"data-test-id":`bubble-${g}`,paddingY:1,width:[s.UG.small,s.UG.extra_small].includes(y)?"calc(50% - 4px)":"100%",children:(0,d.jsx)(o.Z,{auxData:{content_ids:m,story_type:e.storyType,grid_index:g},bubbleKey:c,format:y,height:[s.UG.medium,s.UG.extra_small].includes(y)&&"50%"||y===s.UG.article&&"73%"||"100%",onTouch:l,pwtSurfaceContext:r,referringSource:a,slotIndex:g,storyId:e.storyId??"",viewParameter:i,viewType:u})},`bubble-${g}`)})})}function m({storyData:e,onTouch:l,pwtSurfaceContext:t,referringSource:r,viewParameter:i,viewType:s}){let u=e.objects?.filter(e=>"ExploreArticle"===e.__typename)??[],c=u.map(({type:e,entityId:l})=>e+":"+l).join("|");return(0,d.jsx)(n.xu,{"data-test-id":"masonry-bubbles-grid-rep-responsive-wrapper",margin:"auto",width:"100%",children:(0,d.jsx)(a.default,{columnWidth:236,gutterWidth:16,items:u,minCols:1,renderItem:({data:a,itemIdx:u})=>(0,d.jsx)(n.xu,{"data-test-id":`bubble-${a.entityId}`,children:(0,d.jsx)(o.Z,{auxData:{content_ids:c,story_type:e.storyType,grid_index:u},bubbleKey:a,height:118,onTouch:l,pwtSurfaceContext:t,referringSource:r,slotIndex:u,storyId:e.storyId??"",viewParameter:i,viewType:s,width:236})})})})}function g({storyKey:e,...l}){let t=(0,i.Z)(u,e);return t&&(l.pattern?.includes(s.UG.responsive)?(0,d.jsx)(m,{...l,storyData:t}):(0,d.jsx)(c,{...l,storyData:t}))}},721204:(e,l,t)=>{t.d(l,{Z:()=>y}),t(167912);var r,n=t(883119),a=t(713211),i=t(488792),s=t(384609),o=t(868808),d=t(87416),u=t(615766),c=t(785893);let m=void 0!==r?r:r=t(418052),g=({storyCategory:e,query:l,referringSource:t,bubbleId:r,storyId:n,title:i})=>{let s=null!=e&&(0,a.y)(e),d=(0,o.XP)({q:l,rs:t||void 0,b_id:r,source_id:n}),u=s&&i?(0,a.x)({title:i,id:r,articleType:"discover"}):`/discover/article/${r}/`;return s?u:`/search/pins/${d?"?"+d:""}`};function y({auxData:e,bubbleKey:l,font:t,format:r,height:a,onTouch:o,pwtSurfaceContext:y,referringSource:p,slotIndex:x,storyId:h,viewParameter:f,viewType:b,width:_="100%"}){let v=(0,s.Z)(m,l),j=(0,i.Z)();if(null==v||!v.coverImage236x?.[0]?.url&&!v.coverImage474x?.[0]?.url||!v.articleTitle?.format)return null;let S=v.curator?.fullName&&v.curator.imageSmallUrl?{full_name:v.curator.fullName,image_small_url:v.curator.imageSmallUrl}:void 0,k=v.coverImage474x?.[0]?.url||v.coverImage236x?.[0]?.url,w=v.action?.url||g({storyCategory:v.storyCategory,query:v.articleTitle?.format,referringSource:p,bubbleId:v.entityId,storyId:h,title:v.articleTitle?.format}),I=r===u.UG.article?13865:200,T=r===u.UG.article?102:6940,F=l=>{j({component:I,event_type:T,object_id_str:l,view_parameter:f,view_type:b,aux_data:{article_id:l,grid_index:x,...e}}),o&&o({query:v.articleTitle?.format??""})},K=v.dominantColors&&v.dominantColors.length?v.dominantColors[0]:void 0;return(0,c.jsx)(d.fv,{auxData:{story_id:h,...e},impressionData:{storyCategory:v.storyCategory,storyIdStr:h},loggingId:h,slotIndex:x,viewParameter:f,viewType:b,children:({impressionTrackerRef:e})=>(0,c.jsx)(n.xu,{ref:e,children:(0,c.jsx)(u.ZP,{backgroundColor:K,bubbleId:v.entityId,bubbleUrl:w,coverImageUrl:k,curator:S,font:t,format:r,height:a,identifierIconType:v.identifierIconType,onTap:F,pwtSurfaceContext:y,referringSource:p,title:v.articleTitle?.format??"",width:_})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/50527.en_GB-637adccc71b777f3.mjs.map