import{$n as e,C as t,D as n,Dn as r,Ht as i,I as a,It as o,Kt as s,Lt as c,N as l,Qt as u,Sn as d,Xt as f,Yt as p,bt as m,j as h,mn as g,mt as _,pt as v,qt as y,vt as b,wn as x}from"./_plugin-vue_export-helper-MsG4zd-3.js";import{t as S}from"./FadeInExpandTransition-CbGSAh5U.js";import{C,F as w,M as T,N as E,P as D,S as O}from"./index-DfuKCr8-.js";function k(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:i,dividerColor:a,actionColor:s,textColor1:l,textColor2:u,closeColorHover:d,closeColorPressed:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,infoColor:g,successColor:_,warningColor:v,errorColor:y,fontSize:b}=e;return Object.assign(Object.assign({},C),{fontSize:b,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${a}`,color:s,titleTextColor:l,iconColor:u,contentTextColor:u,closeBorderRadius:n,closeColorHover:d,closeColorPressed:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,borderInfo:`1px solid ${c(i,o(g,{alpha:.25}))}`,colorInfo:c(i,o(g,{alpha:.08})),titleTextColorInfo:l,iconColorInfo:g,contentTextColorInfo:u,closeColorHoverInfo:d,closeColorPressedInfo:f,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:h,borderSuccess:`1px solid ${c(i,o(_,{alpha:.25}))}`,colorSuccess:c(i,o(_,{alpha:.08})),titleTextColorSuccess:l,iconColorSuccess:_,contentTextColorSuccess:u,closeColorHoverSuccess:d,closeColorPressedSuccess:f,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:h,borderWarning:`1px solid ${c(i,o(v,{alpha:.33}))}`,colorWarning:c(i,o(v,{alpha:.08})),titleTextColorWarning:l,iconColorWarning:v,contentTextColorWarning:u,closeColorHoverWarning:d,closeColorPressedWarning:f,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:h,borderError:`1px solid ${c(i,o(y,{alpha:.25}))}`,colorError:c(i,o(y,{alpha:.08})),titleTextColorError:l,iconColorError:y,contentTextColorError:u,closeColorHoverError:d,closeColorPressedError:f,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:h})}var A={name:`Alert`,common:t,self:k},j=y(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[p(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),f(`closable`,[y(`alert-body`,[p(`title`,`
 padding-right: 24px;
 `)])]),p(`icon`,{color:`var(--n-icon-color)`}),y(`alert-body`,{padding:`var(--n-padding)`},[p(`title`,{color:`var(--n-title-text-color)`}),p(`content`,{color:`var(--n-content-text-color)`})]),O({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),p(`icon`,`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),p(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),f(`show-icon`,[y(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),f(`right-adjust`,[y(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),y(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[p(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[s(`& +`,[p(`content`,{marginTop:`9px`})])]),p(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),p(`icon`,{transition:`color .3s var(--n-bezier)`})]),M=d({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},l.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(t){let{mergedClsPrefixRef:n,mergedBorderedRef:r,inlineThemeDisabled:o,mergedRtlRef:s}=_(t),c=l(`Alert`,`-alert`,j,A,t,n),d=a(`Alert`,s,n),f=g(()=>{let{common:{cubicBezierEaseInOut:e},self:n}=c.value,{fontSize:r,borderRadius:a,titleFontWeight:o,lineHeight:s,iconSize:l,iconMargin:d,iconMarginRtl:f,closeIconSize:p,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=n,{type:y}=t,{left:b,right:x}=i(d);return{"--n-bezier":e,"--n-color":n[u(`color`,y)],"--n-close-icon-size":p,"--n-close-border-radius":m,"--n-close-color-hover":n[u(`closeColorHover`,y)],"--n-close-color-pressed":n[u(`closeColorPressed`,y)],"--n-close-icon-color":n[u(`closeIconColor`,y)],"--n-close-icon-color-hover":n[u(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":n[u(`closeIconColorPressed`,y)],"--n-icon-color":n[u(`iconColor`,y)],"--n-border":n[u(`border`,y)],"--n-title-text-color":n[u(`titleTextColor`,y)],"--n-content-text-color":n[u(`contentTextColor`,y)],"--n-line-height":s,"--n-border-radius":a,"--n-font-size":r,"--n-title-font-weight":o,"--n-icon-size":l,"--n-icon-margin":d,"--n-icon-margin-rtl":f,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),p=o?v(`alert`,g(()=>t.type[0]),f,t):void 0,m=e(!0),h=()=>{let{onAfterLeave:e,onAfterHide:n}=t;e&&e(),n&&n()};return{rtlEnabled:d,mergedClsPrefix:n,mergedBordered:r,visible:m,handleCloseClick:()=>{Promise.resolve(t.onClose?.call(t)).then(e=>{e!==!1&&(m.value=!1)})},handleAfterLeave:()=>{h()},mergedTheme:c,cssVars:o?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),x(S,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,i={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?x(`div`,Object.assign({},r(this.$attrs,i)),this.closable&&x(n,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&x(`div`,{class:`${e}-alert__border`}),this.showIcon&&x(`div`,{class:`${e}-alert__icon`,"aria-hidden":`true`},b(t.icon,()=>[x(h,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return x(E,null);case`info`:return x(D,null);case`warning`:return x(T,null);case`error`:return x(w,null);default:return null}}})])),x(`div`,{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},m(t.header,t=>{let n=t||this.title;return n?x(`div`,{class:`${e}-alert-body__title`},n):null}),t.default&&x(`div`,{class:`${e}-alert-body__content`},t))):null}})}});export{M as t};