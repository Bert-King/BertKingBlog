(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{383:function(t,e,n){},384:function(t,e,n){},385:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));n(39),n(101),n(102),n(229);var i=/#.*$/,r=/\.(md|html)$/,o=/\/$/,s=/^(https?:|mailto:|tel:)/;function a(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function l(t){if(a(t))return t;var e=t.match(i),n=e?e[0]:"",s=function(t){return decodeURI(t).replace(i,"").replace(r,"")}(t);return o.test(s)?t:s+".html"+n}function f(t,e,n){if(!t)return n;for(var i,r=e;(r=r.$parent)&&!i;)i=r.$refs[t];return i&&i.$el&&(i=i.$el),i||n}},386:function(t,e,n){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(i,r,o){var s=r.prototype;o.utc=function(t){var e={date:t,utc:!0,args:arguments};return new r(e)},s.utc=function(e){var n=o(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},s.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var a=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var c=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else c.call(this)};var u=s.utcOffset;s.utcOffset=function(i,r){var o=this.$utils().u;if(o(i))return this.$u?0:o(this.$offset)?u.call(this):this.$offset;if("string"==typeof i&&null===(i=function(t){void 0===t&&(t="");var i=t.match(e);if(!i)return null;var r=(""+i[0]).match(n)||["-",0,0],o=r[0],s=60*+r[1]+ +r[2];return 0===s?0:"+"===o?s:-s}(i)))return this;var s=Math.abs(i)<=16?60*i:i,a=this;if(r)return a.$offset=s,a.$u=0===i,a;if(0!==i){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(s+c,t)).$offset=s,a.$x.$localOffset=c}else a=this.utc();return a};var l=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var f=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():f.call(this)};var h=s.diff;s.diff=function(t,e,n){if(t&&this.$u===t.$u)return h.call(this,t,e,n);var i=this.local(),r=o(t).local();return h.call(i,r,e,n)}}}()},387:function(t,e,n){"use strict";n(383)},388:function(t,e,n){"use strict";n(384)},389:function(t,e,n){var i=n(227),r=n(220),o=n(390),s=n(394);t.exports=function(t,e){if(null==t)return{};var n=i(s(t),(function(t){return[t]}));return e=r(e),o(t,n,(function(t,n){return e(t,n[0])}))}},390:function(t,e,n){var i=n(144),r=n(391),o=n(139);t.exports=function(t,e,n){for(var s=-1,a=e.length,c={};++s<a;){var u=e[s],l=i(t,u);n(l,u)&&r(c,o(u,t),l)}return c}},391:function(t,e,n){var i=n(392),r=n(139),o=n(142),s=n(100),a=n(72);t.exports=function(t,e,n,c){if(!s(t))return t;for(var u=-1,l=(e=r(e,t)).length,f=l-1,h=t;null!=h&&++u<l;){var p=a(e[u]),d=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return t;if(u!=f){var v=h[p];void 0===(d=c?c(v,p,h):void 0)&&(d=s(v)?v:o(e[u+1])?[]:{})}i(h,p,d),h=h[p]}return t}},392:function(t,e,n){var i=n(393),r=n(141),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];o.call(t,e)&&r(s,n)&&(void 0!==n||e in t)||i(t,e,n)}},393:function(t,e,n){var i=n(228);t.exports=function(t,e,n){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},394:function(t,e,n){var i=n(221),r=n(395),o=n(397);t.exports=function(t){return i(t,o,r)}},395:function(t,e,n){var i=n(140),r=n(396),o=n(222),s=n(223),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)i(e,o(t)),t=r(t);return e}:s;t.exports=a},396:function(t,e,n){var i=n(226)(Object.getPrototypeOf,Object);t.exports=i},397:function(t,e,n){var i=n(224),r=n(398),o=n(143);t.exports=function(t){return o(t)?i(t,!0):r(t)}},398:function(t,e,n){var i=n(100),r=n(225),o=n(399),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!i(t))return o(t);var e=r(t),n=[];for(var a in t)("constructor"!=a||!e&&s.call(t,a))&&n.push(a);return n}},399:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},400:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return h}));n(8),n(22),n(25);var i={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,432,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},r=(n(387),n(15)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(n(388),Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=(n(230),n(103)),c=n.n(a),u=n(389),l=n.n(u),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return l()(this.$props,c.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},h=Object(r.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},401:function(t,e,n){},402:function(t,e,n){},403:function(t,e,n){},404:function(t,e,n){},405:function(t,e,n){},413:function(t,e,n){"use strict";var i=n(6),r=n(53).findIndex,o=n(146),s=!0;"findIndex"in[]&&Array(1).findIndex((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},414:function(t,e,n){"use strict";n(401)},415:function(t,e,n){"use strict";n(402)},416:function(t,e,n){"use strict";n(403)},417:function(t,e,n){"use strict";n(404)},418:function(t,e,n){"use strict";n(405)},433:function(t,e,n){"use strict";n.r(e);n(8),n(22),n(25),n(232),n(413);var i,r=n(385),o={props:["stick","tag"],data:function(){return{needFloat:!1,stickBottom:0}},watch:{stick:function(){this.unStick(),this.stickHandle()}},mounted:function(){this.stickHandle()},beforeDestroy:function(){this.unStick()},methods:{stickHandle:function(){var t=this;if(this.stick){var e=Object(r.b)(this.stick,this);e&&(this._stickerScroll=function(){var n=t.$el.getBoundingClientRect(),i=document.body.scrollTop+document.documentElement.scrollTop;t.needFloat=document.body.offsetHeight-i-n.height<e.offsetHeight,t.stickBottom=e.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))}},unStick:function(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},s=(n(414),n(15));function a(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var c={components:{Sticker:Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null).exports},data:function(){return{activeIndex:0}},computed:{visible:function(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex:function(){var t=(this.$refs.chairTocItem||[])[this.activeIndex];if(t){var e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),i=e.top-n.top;i<20?this.$el.scrollTop=this.$el.scrollTop+i-20:i+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))}},$route:function(){}},mounted:function(){var t=this,e=function(){t.$emit("visible-change",t.visible)};e(),this.$watch("visible",e),setTimeout((function(){return t.triggerEvt()}),1e3),this._onScroll=function(){return t.onScroll()},this._onHashChange=function(){var e=decodeURIComponent(location.hash.substring(1)),n=(t.$page.headers||[]).findIndex((function(t){return t.slug===e}));n>=0&&(t.activeIndex=n);var i=e&&document.getElementById(e);i&&window.scrollTo(0,a(i)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll:function(){var t=this;void 0===i&&(i=a(this.$el));for(var e=document.body.scrollTop+document.documentElement.scrollTop,n=this.$page.headers||[],r=0,o=function(e){t.activeIndex=e};r<n.length;r++){if(!(a(document.getElementById(n[r].slug))-50<e)){r||o(r);break}o(r)}},triggerEvt:function(){this._onScroll(),this._onHashChange()}}},u=(n(415),Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(e,i){return n("div",{key:i,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+e.level,{active:t.activeIndex===i}]},[n("a",{attrs:{href:"#"+e.slug,title:e.title}},[t._v(t._s(e.title))])])})),0):t._e()}),[],!1,null,null,null).exports),l=(n(71),n(40)),f=n.n(l),h=n(386),p=n.n(h),d=n(11),v={name:"PostTag",props:{tag:{type:String,required:!0}}},g=(n(416),Object(s.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"post-tag"},[e("router-link",{attrs:{to:"/tag/"+this.tag}},[e("span",[this._v(this._s(this.tag))])])],1)}),[],!1,null,"42ccfcd5",null).exports);f.a.extend(p.a);var m={name:"PostMeta",components:{NavigationIcon:d.n,ClockIcon:d.a,PostTag:g},props:{tags:{type:[Array,String]},author:{type:String},date:{type:String},location:{type:String}},computed:{resolvedDate:function(){return f.a.utc(this.date).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvedTags:function(){return!this.tags||Array.isArray(this.tags)?this.tags:[this.tags]}}},$=(n(417),{components:{Toc:u,PostMeta:Object(s.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-meta"},[t.author?n("div",{staticClass:"post-meta-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.author))]),t._v(" "),t.location?n("span",{attrs:{itemprop:"address"}},[t._v("   in "+t._s(t.location))]):t._e()],1):t._e(),t._v(" "),t.date?n("div",{staticClass:"post-meta-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n      "+t._s(t.resolvedDate)+"\n    ")])],1):t._e(),t._v(" "),t.tags?n("ul",{staticClass:"post-meta-tags",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return n("PostTag",{key:t,attrs:{tag:t}})})),1):t._e()])}),[],!1,null,null,null).exports,Comment:n(400).a,Newsletter:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,434))}}}),_=(n(418),Object(s.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[n("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("header",[n("h1",{staticClass:"post-title",attrs:{itemprop:"name headline"}},[t._v("\n        "+t._s(t.$frontmatter.title)+"\n      ")]),t._v(" "),n("PostMeta",{attrs:{tags:t.$frontmatter.tags,author:t.$frontmatter.author,date:t.$frontmatter.date,location:t.$frontmatter.location}})],1),t._v(" "),n("Content",{attrs:{itemprop:"articleBody"}}),t._v(" "),n("footer",[t.$service.email.enabled?n("Newsletter"):t._e(),t._v(" "),n("hr"),t._v(" "),n("Comment")],1)],1),t._v(" "),n("Toc")],1)}),[],!1,null,null,null));e.default=_.exports}}]);