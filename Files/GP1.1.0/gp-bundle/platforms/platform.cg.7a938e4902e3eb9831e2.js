(self.webpackChunkgame_score_sdk=self.webpackChunkgame_score_sdk||[]).push([[433],{1017:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(2616),i=r.n(n)()((function(t){return t[1]}));i.push([t.id,".gp-crazy-games-sticky{display:flex;justify-content:center;position:fixed;left:50%;transform:translateX(-50%);z-index:1000;max-height:90px;overflow:hidden}.gp-crazy-games-sticky__creative{position:relative;height:90px;width:970px;max-width:100vw}.gp-crazy-games-sticky_top{top:0}.gp-crazy-games-sticky_bottom{bottom:0}",""]);const s=i},501:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});class n{constructor(){this.canAddShortcut=!1}addShortcut(){return t=this,e=void 0,n=function*(){return!1},new((r=void 0)||(r=Promise))((function(i,s){function o(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}c((n=n.apply(t,e||[])).next())}));var t,e,r,n}}},5572:(t,e,r)=>{"use strict";r.d(e,{VK:()=>n,yl:()=>i});const n={success:!0,payload:{}},i={success:!1,payload:{}}},9482:(t,e,r)=>{"use strict";r.d(e,{bH:()=>i,sO:()=>s,pm:()=>o});const n={PX:"px",PERCENT:"%"};function i(t){return n[t]}function s(t){o(t.sticky)}function o(t){t&&(t.$el.style.width=`${function(t){let e=window.innerWidth;if("PX"===t.options.maxWidthDimension&&t.options.maxWidth>0&&window.innerWidth>t.options.maxWidth)e=t.options.maxWidth;else if("PERCENT"===t.options.maxWidthDimension&&t.options.maxWidth>0){const r=t.options.maxWidth/100*window.innerWidth;window.innerWidth>t.options.maxWidth&&(e=r)}const r=t.options.fitCanvas&&window.innerWidth>=640&&(null===(n=document.querySelector("canvas"))||void 0===n?void 0:n.offsetWidth)||e;var n;return Math.round(r)}(t)}px`)}},2712:(t,e,r)=>{"use strict";r.d(e,{aD:()=>l,FU:()=>p,hc:()=>y});const n=(t,e)=>({type:t,getLink:e}),i=n("facebook",(t=>`//www.facebook.com/sharer/sharer.php?u=${t.url}`)),s=n("whatsapp",(t=>`//api.whatsapp.com/send?text=${t.text}%20${t.url}`)),o=n("telegram",(t=>`//t.me/share/url?url=${t.url}&text=${t.text}`)),a=n("vkontakte",(t=>`//vk.com/share.php?url=${t.url}&title=${t.text}&image=${t.image}`)),c=n("twitter",(t=>`//twitter.com/share?text=${t.text}&url=${t.url}`)),d=n("odnoklassniki",(t=>`//connect.ok.ru/offer?url=${t.url}&title=${t.text}&imageUrl=${t.image}`)),u=n("viber",(t=>`viber://forward?text=${t.text}%20${t.url}`)),h=n("moymir",(t=>`//connect.mail.ru/share?url=${t.url}&title=${t.text}&image_url=${t.image}`)),l=[s,o,a,d,u,h],p=[i,c,o,s,u],y=[i,c,o,s,u,a,d,h]},6390:(t,e,r)=>{"use strict";function n(){try{return window.top.location.href||location.href}catch(t){return location.href}}r.d(e,{T:()=>n})},4917:(t,e,r)=>{"use strict";function n({src:t,check:e}){return new Promise(((r,n)=>{let i=0;if(null==e?void 0:e(window))return void r();function s(){e?e(window)&&(clearInterval(i),r()):r()}if(document.querySelector(`script[src="${t}"]`)&&e)return void(i=setInterval(s,100));var o=document.getElementsByTagName("script")[0];const a=document.createElement("script");a.src=t,a.onload=s,a.onerror=n,o.parentNode.insertBefore(a,o),e&&(i=setInterval(s,100))}))}r.d(e,{Z:()=>n})},209:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n={stringify:t=>btoa(encodeURIComponent(JSON.stringify(t))),parse(t){if(!t)return{};const e=function(t){try{return JSON.parse(decodeURIComponent(atob(t)||"{}"))}catch(t){return""}}(t);return Object.keys(e).length>0?e:JSON.parse(function(t){try{return JSON.parse(atob(t)||"{}")}catch(t){return""}}(t)||"{}")}}},1229:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>z});var n=r(8293),i=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}c((n=n.apply(t,e||[])).next())}))};class s{constructor(t){this.sdk=t,this.isStickyAvailable=!0,this.stickyBannerConfig={isOverlapping:!1,height:0},this.isFullscreenAvailable=!0,this.isRewardedAvailable=!0,this.isPreloaderAvailable=!0}showPreloader(){return i(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showPreloader().catch((()=>!1))}))}showFullscreen(){return i(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showFullscreen().catch((()=>!1))}))}showRewardedVideo(){return i(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showRewardedVideo().catch((()=>!1))}))}showSticky(t){return i(this,void 0,void 0,(function*(){const e=(0,n._)();return this.sdk.app.banners.sticky?(e.done(!0),e.ready):(this.sdk.app.createSticky(t),yield this.sdk.crazysdk.requestResponsiveBanner(["responsive-banner-container"]),e.done(!0),e.ready)}))}refreshSticky(t){return i(this,void 0,void 0,(function*(){if(!this.sdk.app.banners.sticky)return this.showSticky(t);const e=(0,n._)();return yield this.sdk.crazysdk.requestResponsiveBanner(["responsive-banner-container"]),e.done(!0),e.ready}))}closeSticky(){return i(this,void 0,void 0,(function*(){yield this.sdk.ready,this.sdk.app.closeSticky()}))}}var o=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}c((n=n.apply(t,e||[])).next())}))};class a{constructor(t){this.sdk=t,this.hasCredetials=!1,this.userId=""}getPlayerAuthInfo(){return o(this,void 0,void 0,(function*(){const t=(0,n._)();return t.done({}),t.ready}))}getPlayerContext(){return o(this,void 0,void 0,(function*(){return{platformData:yield this.getPlayerAuthInfo(),key:""}}))}loginPlayer(){return o(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}getPlayer(){return o(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}publishRecord(t){}isPlatformAvatar(){return!1}}var c=r(2712),d=r(5942),u=r(5572);class h{constructor(t){this.sdk=t,this.hasIntegratedAuth=!1,this.isExternalLinksAllowed=!0,this.isSecretCodeAuthAvailable=!0,this._hasAuthModal=!1,this.type=d.z.CRAZY_GAMES,this.socialNetworks=c.FU,this.isSupportsImageUploading=!1}getSDK(){return this.sdk}getNativeSDK(){return this.sdk.crazysdk}requestPermissions(){return t=this,e=void 0,n=function*(){return u.VK},new((r=void 0)||(r=Promise))((function(i,s){function o(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}c((n=n.apply(t,e||[])).next())}));var t,e,r,n}uploadImage(){return null}}class l{constructor(t){this.sdk=t,this.isSupportsShare=!0,this.isSupportsNativeShare=!1,this.isSupportsNativePosts=!1,this.isSupportsNativeInvite=!1,this.isSupportsNativeCommunityJoin=!1,this.canJoinCommunity=!0,this.isSupportShareParams=!0}get shareParams(){return this.sdk.shareParams}share(t){return Promise.resolve(!1)}post(t){return Promise.resolve(!1)}invite(t){return Promise.resolve(!1)}joinCommunity(){return Promise.resolve(!1)}makeShareUrl(t){return this.sdk.makeShareUrl(t)}getShareParam(t){return this.sdk.getShareParam(t)}}var p=r(6390),y=r(4917),m=r(6558),v=r(9482),f=r(3379),k=r.n(f),w=r(1017);k()(w.Z,{insert:"head",singleton:!1}),w.Z.locals;var g=r(209),x=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}c((n=n.apply(t,e||[])).next())}))};class P{constructor(t,e){this.gp=t,this.config=e,this.app=function(){const t=document.createElement("div");t.id="gamepush-crazy-games",document.body.appendChild(t);const e={sticky:null};return window.addEventListener("resize",(()=>(0,v.sO)(e))),{banners:e,createSticky(r){e.sticky||(e.sticky=function(e){const r=document.createElement("div");r.className=`gp-crazy-games-sticky gp-crazy-games-sticky_${e.position||"bottom"}`;const n=document.createElement("div");n.id="responsive-banner-container",n.className="gp-crazy-games-sticky__creative";const i={$wrapper:r,$el:n,options:e};return e.maxWidth&&(r.style.maxWidth=`${e.maxWidth}px`,n.style.maxWidth=`${e.maxWidth}px`),(0,v.pm)(i),r.appendChild(n),t.appendChild(r),i}(r))},closeSticky(){e.sticky&&(e.sticky.$wrapper.remove(),e.sticky.$wrapper.innerHTML="",e.sticky=null)}}}(),this.gameUrl="",this.readyAd=(0,n._)();try{const t=new URL(window.location.href).searchParams.get("_gpParams");t&&(this.shareParams=g.Z.parse(t))}catch(t){m.kg.error(t)}}get appUrl(){try{return this.crazysdk.inviteLink()}catch(t){return m.kg.error(t),(0,p.T)()}}init(){return x(this,void 0,void 0,(function*(){const t=(0,n._)();return this.ready=t.ready,(0,y.Z)({src:"https://sdk.crazygames.com/crazygames-sdk-v1.js",check:t=>"CrazyGames"in t}).then((()=>{this.crazysdk=window.CrazyGames.CrazySDK.getInstance(),this.crazysdk.init(),this.crazysdk.addEventListener("adError",(()=>this.readyAd.done(!1))),this.crazysdk.addEventListener("adFinished",(()=>this.readyAd.done(!0))),this.gp.on("gameplayStart",(()=>this.crazysdk.gameplayStart())),this.gp.on("gameplayStop",(()=>this.crazysdk.gameplayStop())),this.gp.ready.then((()=>{this.gp.achievements.on("unlock",(()=>this.crazysdk.happytime()))}))})).catch(m.kg.error).finally((()=>t.done(this))),t.ready}))}getPlayer(){return x(this,void 0,void 0,(function*(){const t=(0,n._)();return t.done({id:0,name:"",photoSmall:"",photoMedium:"",photoLarge:""}),t.ready}))}showBanner(t){this.readyAd.done(!1),this.readyAd=(0,n._)();try{this.crazysdk.requestAd(t)}catch(t){this.readyAd.abort(t)}return this.readyAd.ready}showFullscreen(){return this.showBanner("midgame")}showRewardedVideo(){return this.showBanner("rewarded")}showPreloader(){return this.showFullscreen()}makeShareUrl(t){const e=g.Z.stringify(t),r=new URL(this.gp.app.url);return r.searchParams.set("_gpParams",e),r.href||""}getShareParam(t){return this.shareParams?this.shareParams[t]:""}}var S=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}c((n=n.apply(t,e||[])).next())}))};class b{constructor(t){this.sdk=t,this.isSupportsSubscriptions=!1,this.isSupportsPayments=!1,this.isServerValidation=!1}mapProducts(t,e){return S(this,void 0,void 0,(function*(){return e}))}consumeAllExpired(t,e){return S(this,void 0,void 0,(function*(){}))}fetchPurchases(){return S(this,void 0,void 0,(function*(){return{payload:{},purchases:[]}}))}purchase(t){return S(this,void 0,void 0,(function*(){return{}}))}consume(t){return S(this,void 0,void 0,(function*(){return{}}))}subscribe(t,e){return S(this,void 0,void 0,(function*(){return{}}))}unsubscribe(t,e){return S(this,void 0,void 0,(function*(){return{}}))}}var A=r(501);function z(t){return e=this,r=void 0,i=function*(){const e=new P(t.gp,{}),[,,r]=yield Promise.all([e.init(),t.setupStorage([]),t.fetchConfig()]),n=new a(e),i=new s(e);return{appAdapter:new A.Z,adsAdapter:i,playerAdapter:n,platformAdapter:new h(e),socialsAdapter:new l(e),paymentsAdapter:new b(e),projectConfig:r}},new((n=void 0)||(n=Promise))((function(t,s){function o(t){try{c(i.next(t))}catch(t){s(t)}}function a(t){try{c(i.throw(t))}catch(t){s(t)}}function c(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(t){t(r)}))).then(o,a)}c((i=i.apply(e,r||[])).next())}));var e,r,n,i}}}]);
