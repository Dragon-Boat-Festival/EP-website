(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-742e661c"],{"068a":function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),c=function(e){return Object(o["pushScopeId"])("data-v-2c3e4ca8"),e=e(),Object(o["popScopeId"])(),e},a={class:"news_detail"},r={class:"con-box news-box",style:{"padding-left":"10px"}},i={class:"meta-box"},l={class:"left-box"},s=c((function(){return Object(o["createElementVNode"])("span",null,"专题报道",-1)})),d={class:"time"},u={class:"news_title"},b={class:"meta-box"},m=["innerHTML"],p={class:"last-more"};function v(e,t,n,c,v,w){var O,j,f,_,h,y,N,E=this,g=Object(o["resolveComponent"])("CommonBanner"),V=Object(o["resolveComponent"])("SectionRow");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(g,{commonData:v.news_detail},null,8,["commonData"]),Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("div",l,[s,Object(o["createElementVNode"])("span",{class:"types",style:Object(o["normalizeStyle"])({color:"".concat(null===(O=this.news_detail.ep_type)||void 0===O?void 0:O.color)})},Object(o["toDisplayString"])(null===(j=this.news_detail.ep_type)||void 0===j?void 0:j.name),5)]),Object(o["createElementVNode"])("span",d,Object(o["toDisplayString"])(null===(f=this.news_detail.release_time)||void 0===f?void 0:f.substring(0,10)),1)]),Object(o["createElementVNode"])("h1",u,Object(o["toDisplayString"])(null===(_=this.news_detail)||void 0===_?void 0:_.title),1),Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("span",null,"作者："+Object(o["toDisplayString"])(null===(h=this.news_detail)||void 0===h?void 0:h.author),1)]),Object(o["createElementVNode"])("div",{style:Object(o["normalizeStyle"])({"--preBackground":"".concat(null===(y=v.news_detail.ep_type)||void 0===y?void 0:y.color)}),class:"newsDetail_content con-box",innerHTML:null===(N=v.news_detail)||void 0===N?void 0:N.news_content},null,12,m)])]),v.about_news?(Object(o["openBlock"])(),Object(o["createBlock"])(V,{key:0,"background-color":"var(--grayBackground)",lastYear_news:v.about_news,"h2-text":"相关新闻"},{"column-title":Object(o["withCtx"])((function(){var e;return[Object(o["createElementVNode"])("div",p,[Object(o["createElementVNode"])("h2",{style:Object(o["normalizeStyle"])({color:"".concat(null===(e=E.news_detail.ep_type)||void 0===e?void 0:e.color)})},null,4)])]})),_:1},8,["lastYear_news"])):Object(o["createCommentVNode"])("",!0)],64)}var w=n("1da1"),O=(n("498a"),n("96cf"),n("f46b")),j=n("1c23"),f=n("9e78"),_={name:"NewsDetail",components:{CommonBanner:j["a"],SectionRow:f["a"]},data:function(){return{news_id:"",news_detail:{},about_news:[]}},mounted:function(){new this.$wow.WOW({live:!1}).init(),this.news_id=this.$route.query.news_id,this._initData(this.news_id)},beforeUnmount:function(){this.about_news=null},methods:{_initData:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(O["b"])(e);case 2:if(c=n.sent,null!==(o=c.result)&&void 0!==o&&o.news_detail){n.next=5;break}return n.abrupt("return",t.$router.push("/404"));case 5:t.news_detail=c.result.news_detail,t.about_news=c.result.about_news,window.scrollTo(0,0);case 8:case"end":return n.stop()}}),n)})))()}},watch:{$route:{handler:function(e,t){var n,o;null!==(n=e.query.news_id)&&void 0!==n&&n.trim()&&this._initData(null===(o=e.query)||void 0===o?void 0:o.news_id)}}}},h=(n("d14d"),n("6b0d")),y=n.n(h);const N=y()(_,[["render",v],["__scopeId","data-v-2c3e4ca8"]]);t["default"]=N},"1c23":function(e,t,n){"use strict";n("b0c0");var o=n("7a23"),c=function(e){return Object(o["pushScopeId"])("data-v-2a2066f0"),e=e(),Object(o["popScopeId"])(),e},a={class:"section-hero-top"},r=c((function(){return Object(o["createElementVNode"])("div",{class:"section-hero-shade"},null,-1)})),i={class:"ct-container"},l={class:"content"},s={class:"top-bar"},d={class:"back-button"},u={class:"hero-issue-title"},b=c((function(){return Object(o["createElementVNode"])("div",{class:"con-box"},null,-1)}));function m(e,t,n,c,m,p){var v,w,O,j=this,f=Object(o["resolveComponent"])("BackgroundMotion");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("section",a,[Object(o["createVNode"])(f,{eClassName:"banner_background",style:Object(o["normalizeStyle"])({backgroundImage:"url(".concat(null===(v=n.commonData)||void 0===v?void 0:v.banner_url,")")})},null,8,["style"]),r,Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("a",d,[Object(o["createElementVNode"])("i",{class:"iconfont icon-zuo ANM",onClick:t[0]||(t[0]=function(e){return j.$router.go(-1)})},"上一页")])]),Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("h1",null,Object(o["toDisplayString"])(null===(w=n.commonData)||void 0===w?void 0:w.name),1),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(null===(O=n.commonData)||void 0===O?void 0:O.e_name),1)])])])]),b],64)}var p=n("9d95"),v={name:"CommonBanner",components:{BackgroundMotion:p["a"]},props:{commonData:{type:Object,default:{}}}},w=(n("f134"),n("6b0d")),O=n.n(w);const j=O()(v,[["render",m],["__scopeId","data-v-2a2066f0"]]);t["a"]=j},"2bb5":function(e,t,n){"use strict";n("f1e5")},"498a":function(e,t,n){"use strict";var o=n("23e7"),c=n("58a8").trim,a=n("c8d2");o({target:"String",proto:!0,forced:a("trim")},{trim:function(){return c(this)}})},"920f":function(e,t,n){},"9e78":function(e,t,n){"use strict";var o=n("7a23"),c=function(e){return Object(o["pushScopeId"])("data-v-193bbf5a"),e=e(),Object(o["popScopeId"])(),e},a={class:"con-box"},r={class:"h2-title"},i={class:"h2 animate__animated animate__fadeIn wow","data-wow-duration":"1s","data-wow-delay":".5s"},l={class:"mini-swiper"},s={class:"swiper-wrapper"},d=c((function(){return Object(o["createElementVNode"])("div",{class:"swiper-button-prev swiper-bt box-sha2"},null,-1)})),u=c((function(){return Object(o["createElementVNode"])("div",{class:"swiper-button-next swiper-bt box-sha2"},null,-1)}));function b(e,t,n,c,b,m){var p=Object(o["resolveComponent"])("NewsColumn");return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",{class:"section-mixed-content-row layout-default text-align-default",style:Object(o["normalizeStyle"])({backgroundColor:n.backgroundColor})},[Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("h2",i,Object(o["toDisplayString"])(n.h2Text),1)]),Object(o["renderSlot"])(e.$slots,"column-title",{},void 0,!0),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("div",s,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.lastYear_news,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(p,{class:"swiper-slide card-mini mini-update",news:e,key:t},null,8,["news"])})),128))]),d,u])])],4)}n("b0c0");var m=function(e){return Object(o["pushScopeId"])("data-v-2e862402"),e=e(),Object(o["popScopeId"])(),e},p=["data-background"],v=m((function(){return Object(o["createElementVNode"])("div",{class:"swiper-lazy-preloader"},null,-1)})),w=[v],O={class:"meta-box"},j={class:"time"},f={class:"news-title"};function _(e,t,n,c,a,r){var i=this;return Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{onClick:t[0]||(t[0]=function(e){var t;return i.$router.push({path:"/newsDetail",query:{news_id:null===(t=n.news)||void 0===t?void 0:t.news_id}})}),class:"ANM"},[Object(o["createElementVNode"])("div",{class:"thumbnail lazy swiper-lazy","data-background":n.news.main_img,"data-was-processed":"true"},w,8,p),Object(o["createElementVNode"])("div",O,[Object(o["createElementVNode"])("span",j,Object(o["toDisplayString"])(n.news.release_time.substring(0,10)),1),Object(o["createElementVNode"])("span",{class:"types",style:Object(o["normalizeStyle"])({color:"".concat(n.news.ep_type.color)})},Object(o["toDisplayString"])(n.news.ep_type.name),5)]),Object(o["createElementVNode"])("p",f,Object(o["toDisplayString"])(n.news.title),1)])}var h={name:"NewsColumn",props:{news:{type:Object,default:{}}}},y=(n("fc61"),n("6b0d")),N=n.n(y);const E=N()(h,[["render",_],["__scopeId","data-v-2e862402"]]);var g=E,V=n("b619"),k={name:"SectionRow",components:{NewsColumn:g},props:{lastYear_news:{type:Array,default:[]},backgroundColor:{type:String,default:"var(--grayBackground)"},h2Text:{type:String,default:""}},updated:function(){var e=this;this.$nextTick((function(){new e.$wow.WOW({live:!1}).init(),e._init()}))},mounted:function(){var e=this;this.$nextTick((function(){e._init()}))},methods:{_init:function(){new V["a"](".mini-swiper",{loop:!1,observer:!0,observeParents:!0,freeMode:!0,slidesPerView:"auto",lazyLoading:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},lazy:{loadPrevNext:!0,loadOnTransitionStart:!0,loadPrevNextAmount:4}})}}};n("2bb5");const S=N()(k,[["render",b],["__scopeId","data-v-193bbf5a"]]);t["a"]=S},b6d9:function(e,t,n){},c4ec:function(e,t,n){},c8d2:function(e,t,n){var o=n("5e77").PROPER,c=n("d039"),a=n("5899"),r="​᠎";e.exports=function(e){return c((function(){return!!a[e]()||r[e]()!==r||o&&a[e].name!==e}))}},d14d:function(e,t,n){"use strict";n("b6d9")},f134:function(e,t,n){"use strict";n("c4ec")},f1e5:function(e,t,n){},fc61:function(e,t,n){"use strict";n("920f")}}]);
//# sourceMappingURL=chunk-742e661c.306ad01b.js.map