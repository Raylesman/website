(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{630:function(t,e,i){},637:function(t,e,i){t.exports=i.p+"assets/img/netlify.48638dee.svg"},638:function(t,e,i){"use strict";i(630)},643:function(t,e,i){"use strict";var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"netlify"},[e("a",{attrs:{target:"_blank",href:"https://www.netlify.com/"}},[this._v("This site is powered by Netlify")]),this._v(" "),e("img",{attrs:{src:i(637)}})])}],n=i(653),l=i(654),s=i(655),r=i(656),o=i(657),c={name:"PageFooter",components:{DiscordIcon:n.a,TwitterIcon:o.a,FacebookIcon:l.a,RedditIcon:r.a,GithubIcon:s.a}},u=(i(638),i(38)),h=Object(u.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"footer"},[i("div",{staticClass:"copyright"},[t._v("\n\t\t\tCopyright © 2015"+t._s(" - "+(new Date).getFullYear())+" Javier Tomás |\n\t\t\t"),i("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0"}},[t._v("Open-source Apache Licensed")]),t._v("\n\t\t\t|\n\t\t\t"),i("a",{attrs:{href:"/privacy"}},[t._v("Privacy policy")])]),t._v(" "),i("div",{staticClass:"social"},[i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://discord.gg/tachiyomi"}},[i("DiscordIcon"),t._v("\n\t\t\t\tDiscord\n\t\t\t\t"),i("OutboundLink")],1),t._v(" "),i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/tachiyomiorg"}},[i("TwitterIcon"),t._v("\n\t\t\t\tTwitter\n\t\t\t\t"),i("OutboundLink")],1),t._v(" "),i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://facebook.com/tachiyomiorg"}},[i("FacebookIcon"),t._v("\n\t\t\t\tFacebook\n\t\t\t\t"),i("OutboundLink")],1),t._v(" "),i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://reddit.com/r/Tachiyomi"}},[i("RedditIcon"),t._v("\n\t\t\t\tReddit\n\t\t\t\t"),i("OutboundLink")],1),t._v(" "),i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tachiyomiorg"}},[i("GithubIcon"),t._v("\n\t\t\t\tGitHub\n\t\t\t\t"),i("OutboundLink")],1)]),t._v(" "),t._m(0)])])}),a,!1,null,null,null);e.a=h.exports},686:function(t,e,i){},687:function(t,e,i){},688:function(t,e,i){},750:function(t,e,i){"use strict";i(686)},751:function(t,e,i){"use strict";i(687)},752:function(t,e,i){"use strict";i(688)},767:function(t,e,i){"use strict";i.r(e);var a=i(708),n=i(212),l=(i(9),i(30),i(40),i(216),i(659),i(646),i(54),i(136),{name:"AlgoliaSearchBox",props:{options:{type:Object,default:function(){}}},data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,e){var l=this;Promise.all([Promise.all([i.e(0),i.e(4)]).then(i.t.bind(null,765,7)),Promise.all([i.e(0),i.e(4)]).then(i.t.bind(null,766,7))]).then((function(i){var s=Object(n.a)(i,1)[0];s=s.default;var r=t.algoliaOptions,o=void 0===r?{}:r;s(Object(a.a)(Object(a.a)({},t),{},{inputSelector:"#algolia-search-input",algoliaOptions:Object(a.a)({facetFilters:["lang:".concat(e)].concat(o.facetFilters||[])},o),handleSelected:function(t,e,i){var a=new URL(i.url),n=a.pathname,s=a.hash,r=n.replace(l.$site.base,"/");l.$router.push("".concat(r).concat(s))}}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}}),s=(i(750),i(38)),r=Object(s.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null).exports,o=(i(658),i(699)),c=i(652);function u(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var h={name:"NavBar",components:{SidebarButton:i(707).a,NavLinks:c.a,SearchBox:o.a,AlgoliaSearchBox:r},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(u(this.$el,"paddingLeft"))+parseInt(u(this.$el,"paddingRight")),i=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};i(),window.addEventListener("resize",i,!1)}},d=(i(751),Object(s.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"navbar"},[i("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),i("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?i("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?i("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v("\n\t\t\t"+t._s(t.$siteTitle)+"\n\t\t")]):t._e()]),t._v(" "),i("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.$page.frontmatter.hideSearch?i("div"):t.isAlgoliaSearch?i("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?i("SearchBox"):t._e(),t._v(" "),i("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),p=i(643),f=(i(214),{name:"ClipboardListIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),C=Object(s.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",t._b({staticClass:"material-design-icon clipboard-list-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 8H9V12H8V9H7V8M10 17V18H7V17.08L9 15H7V14H9.25C9.66 14 10 14.34 10 14.75C10 14.95 9.92 15.14 9.79 15.27L8.12 17H10M11 4C11 3.45 11.45 3 12 3S13 3.45 13 4 12.55 5 12 5 11 4.55 11 4M17 17H12V15H17V17M17 11H12V9H17V11Z"}},[t.title?i("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,g={name:"ClipboardSearchIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},_=Object(s.a)(g,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",t._b({staticClass:"material-design-icon clipboard-search-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M11.9 10.9C14.41 8.4 18.45 8.37 21 10.82V5C21 3.9 20.11 3 19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H13.06C12.65 20.74 12.26 20.45 11.9 20.1C9.37 17.56 9.37 13.44 11.9 10.9M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M20.31 17.9C20.75 17.21 21 16.38 21 15.5C21 13 19 11 16.5 11S12 13 12 15.5 14 20 16.5 20C17.37 20 18.19 19.75 18.88 19.32L22 22.39L23.39 21L20.31 17.9M16.5 18C15.12 18 14 16.88 14 15.5S15.12 13 16.5 13 19 14.12 19 15.5 17.88 18 16.5 18Z"}},[t.title?i("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,m={name:"FrequentlyAskedQuestionsIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},v=Object(s.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",t._b({staticClass:"material-design-icon frequently-asked-questions-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M18,15H6L2,19V3A1,1 0 0,1 3,2H18A1,1 0 0,1 19,3V14A1,1 0 0,1 18,15M23,9V23L19,19H8A1,1 0 0,1 7,18V17H21V8H22A1,1 0 0,1 23,9M8.19,4C7.32,4 6.62,4.2 6.08,4.59C5.56,5 5.3,5.57 5.31,6.36L5.32,6.39H7.25C7.26,6.09 7.35,5.86 7.53,5.7C7.71,5.55 7.93,5.47 8.19,5.47C8.5,5.47 8.76,5.57 8.94,5.75C9.12,5.94 9.2,6.2 9.2,6.5C9.2,6.82 9.13,7.09 8.97,7.32C8.83,7.55 8.62,7.75 8.36,7.91C7.85,8.25 7.5,8.55 7.31,8.82C7.11,9.08 7,9.5 7,10H9C9,9.69 9.04,9.44 9.13,9.26C9.22,9.08 9.39,8.9 9.64,8.74C10.09,8.5 10.46,8.21 10.75,7.81C11.04,7.41 11.19,7 11.19,6.5C11.19,5.74 10.92,5.13 10.38,4.68C9.85,4.23 9.12,4 8.19,4M7,11V13H9V11H7M13,13H15V11H13V13M13,4V10H15V4H13Z"}},[t.title?i("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,b={name:"LifebuoyIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},k=Object(s.a)(b,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",t._b({staticClass:"material-design-icon lifebuoy-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M19.79,15.41C20.74,13.24 20.74,10.75 19.79,8.59L17.05,9.83C17.65,11.21 17.65,12.78 17.06,14.17L19.79,15.41M15.42,4.21C13.25,3.26 10.76,3.26 8.59,4.21L9.83,6.94C11.22,6.35 12.79,6.35 14.18,6.95L15.42,4.21M4.21,8.58C3.26,10.76 3.26,13.24 4.21,15.42L6.95,14.17C6.35,12.79 6.35,11.21 6.95,9.82L4.21,8.58M8.59,19.79C10.76,20.74 13.25,20.74 15.42,19.78L14.18,17.05C12.8,17.65 11.22,17.65 9.84,17.06L8.59,19.79M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"}},[t.title?i("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,$={name:"SourceForkIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},y=Object(s.a)($,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",t._b({staticClass:"material-design-icon source-fork-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z"}},[t.title?i("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,A={components:{NavBar:d,PageFooter:p.a,AlgoliaSearchBox:r,ClipboardListIcon:C,SourceForkIcon:y,LifebuoyIcon:k,ClipboardSearchIcon:_,FaqIcon:v},computed:{data:function(){return this.$page.frontmatter},algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},S=(i(752),Object(s.a)(A,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"theme-container help-page"},[i("NavBar"),t._v(" "),i("main",{staticClass:"page"},[i("div",{staticClass:"theme-custom-content content__default"},[t._t("top"),t._v(" "),i("Content",{staticClass:"theme-custom-content"}),t._v(" "),i("Content",{attrs:{"slot-key":"center"}}),t._v(" "),i("AlgoliaSearchBox",{attrs:{options:t.algolia}}),t._v(" "),t.data.help&&t.data.help.length?i("div",{staticClass:"row help"},t._l(t.data.help,(function(e,a){return i("div",{key:a,staticClass:"column helpItem"},[e.link?i("a",{attrs:{href:e.link,tabindex:"1"}},[i("div",{staticClass:"card",class:"card__"+e.title},[e.faq?i("header",[i("FaqIcon"),t._v(" "),i("h3",[t._v(t._s(e.title))])],1):e.fixProblems?i("header",[i("ClipboardSearchIcon"),t._v(" "),i("h3",[t._v(t._s(e.title))])],1):e.guides?i("header",[i("ClipboardListIcon"),t._v(" "),i("h3",[t._v(t._s(e.title))])],1):e.forks?i("header",[i("SourceForkIcon"),t._v(" "),i("h3",[t._v(t._s(e.title))])],1):e.contribution?i("header",[i("LifebuoyIcon"),t._v(" "),i("h3",[t._v(t._s(e.title))])],1):e.icon?i("header",[i("MaterialIcon",{attrs:{icon:e.icon,"icon-only":""}}),t._v(" "),i("h3",[t._v(t._s(e.title))])],1):t._e(),t._v(" "),i("p",[t._v(t._s(e.description))])])]):t._e()])})),0):t._e(),t._v(" "),t._t("bottom")],2)]),t._v(" "),i("PageFooter")],1)}),[],!1,null,null,null));e.default=S.exports}}]);