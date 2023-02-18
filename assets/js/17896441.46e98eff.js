(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[7918],{17121:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ce});var a=n(67294),l=n(1944),r=n(902);const o=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(86010),m=n(87524),u=n(80049);function v(){const{metadata:e}=c();return a.createElement(u.Z,{previous:e.previous,next:e.next})}var p=n(52263),b=n(39960),h=n(95999),E=n(80143),f=n(35281),g=n(60373),L=n(74477);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function C(e){const t=N[e.versionMetadata.banner];return a.createElement(t,e)}function _(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(b.Z,{to:n,onClick:l},a.createElement(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function Z(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,p.Z)(),{pluginId:r}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,g.J)(r),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,E.Jo)(r),i=s??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,f.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(C,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(_,{versionLabel:c.label,to:i.path,onClick:()=>o(c.name)})))}function k(e){let{className:t}=e;const n=(0,L.E)();return n.banner?a.createElement(Z,{className:t,versionMetadata:n}):null}function x(e){let{className:t}=e;const n=(0,L.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,f.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function U(e){let{lastUpdatedBy:t}=e;return a.createElement(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function H(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:f.k.common.lastUpdated},a.createElement(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(T,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(U,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var w=n(84881),y=n(71526);const A={lastUpdated:"lastUpdated_vwxv"};function M(e){return a.createElement("div",{className:(0,d.Z)(f.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(y.Z,e)))}function I(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(f.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(w.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",A.lastUpdated)},(n||l)&&a.createElement(H,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function B(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,s=o.length>0,i=!!(t||n||r);return s||i?a.createElement("footer",{className:(0,d.Z)(f.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(M,{tags:o}),i&&a.createElement(I,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var O=n(86043),V=n(93743),P=n(87462);const S={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function D(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,P.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",S.tocCollapsibleButton,!t&&S.tocCollapsibleButtonExpanded,n.className)}),a.createElement(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const R={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function F(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:s}=(0,O.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(R.tocCollapsible,!o&&R.tocCollapsibleExpanded,n)},a.createElement(D,{collapsed:o,onClick:s}),a.createElement(O.z,{lazy:!0,className:R.tocCollapsibleContent,collapsed:o},a.createElement(V.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const z={tocMobile:"tocMobile_ITEo"};function j(){const{toc:e,frontMatter:t}=c();return a.createElement(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(f.k.docs.docTocMobile,z.tocMobile)})}var q=n(39407);function G(){const{toc:e,frontMatter:t}=c();return a.createElement(q.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var W=n(92503),$=n(45042);function J(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(f.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(W.Z,{as:"h1"},n)),a.createElement($.Z,null,t))}var Q=n(52802),X=n(48596),Y=n(44996);function K(e){return a.createElement("svg",(0,P.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ee={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function te(){const e=(0,Y.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(b.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(K,{className:ee.breadcrumbHomeIcon})))}const ne={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ae(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(b.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function le(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,P.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function re(){const e=(0,Q.s1)(),t=(0,X.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(f.k.docs.docBreadcrumbs,ne.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(te,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(le,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(ae,{href:t.href,isLast:l},t.label))})))):null}const oe={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function se(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(j,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(G,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&oe.docItemCol)},a.createElement(k,null),a.createElement("div",{className:oe.docItemContainer},a.createElement("article",null,a.createElement(re,null),a.createElement(x,null),n.mobile,a.createElement(J,null,t),a.createElement(B,null)),a.createElement(v,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ce(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(se,null,a.createElement(n,null))))}},80049:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(87462),l=n(67294),r=n(95999),o=n(32244);function s(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(o.Z,(0,a.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(o.Z,(0,a.Z)({},n,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},84881:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(67294),l=n(95999),r=n(35281),o=n(87462),s=n(86010);const c={iconEdit:"iconEdit_Z9Sw"};function i(e){let{className:t,...n}=e;return a.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(i,null),a.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},45042:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(67294),l=n(3905),r=n(71900);function o(e){let{children:t}=e;return a.createElement(l.Zo,{components:r.Z},t)}},32244:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(67294),l=n(86010),r=n(39960);function o(e){const{permalink:t,title:n,subLabel:o,isNext:s}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}},39407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(87462),l=n(67294),r=n(86010),o=n(93743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(s.tableOfContents,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:c,linkActiveClassName:i})))}},93743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(87462),l=n(67294),r=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=i(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=l.memo(u);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...p}=e;const b=(0,r.L)(),h=d??b.tableOfContents.minHeadingLevel,E=u??b.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:E});return m((0,l.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:h,maxHeadingLevel:E}}),[c,i,h,E])),l.createElement(v,(0,a.Z)({toc:f,className:n,linkClassName:c},p))}},13008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294),l=n(86010),r=n(39960);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:n,count:s}=e;return a.createElement(r.Z,{href:t,className:(0,l.Z)(o.tag,s?o.tagWithCount:o.tagRegular)},n,s&&a.createElement("span",null,s))}},71526:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67294),l=n(86010),r=n(95999),o=n(13008);const s={tags:"tags_jXut",tag:"tag_QGVx"};function c(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(s.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:s.tag},a.createElement(o.Z,{label:t,permalink:n}))}))))}},74477:(e,t,n)=>{"use strict";n.d(t,{E:()=>s,q:()=>o});var a=n(67294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function s(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},11748:(e,t,n)=>{var a={"./locale":89234,"./locale.js":89234};function l(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=11748}}]);