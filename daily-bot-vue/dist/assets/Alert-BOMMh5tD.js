import{En as e,F as t,Jt as n,N as r,Qt as i,R as a,Rt as o,St as s,T as c,Wt as l,Yt as u,Zt as d,bt as f,en as p,gn as m,gt as h,ht as g,k as _,kn as v,tr as y,wn as b,zt as x}from"./_plugin-vue_export-helper-D7edCcqi.js";import{t as S}from"./FadeInExpandTransition-DLrDQid3.js";import{C,F as w,M as T,N as E,P as D,S as O}from"./index-1ii4vphs.js";function k(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:i,dividerColor:a,actionColor:s,textColor1:c,textColor2:l,closeColorHover:u,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:m,infoColor:h,successColor:g,warningColor:_,errorColor:v,fontSize:y}=e;return Object.assign(Object.assign({},C),{fontSize:y,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${a}`,color:s,titleTextColor:c,iconColor:l,contentTextColor:l,closeBorderRadius:n,closeColorHover:u,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:m,borderInfo:`1px solid ${x(i,o(h,{alpha:.25}))}`,colorInfo:x(i,o(h,{alpha:.08})),titleTextColorInfo:c,iconColorInfo:h,contentTextColorInfo:l,closeColorHoverInfo:u,closeColorPressedInfo:d,closeIconColorInfo:f,closeIconColorHoverInfo:p,closeIconColorPressedInfo:m,borderSuccess:`1px solid ${x(i,o(g,{alpha:.25}))}`,colorSuccess:x(i,o(g,{alpha:.08})),titleTextColorSuccess:c,iconColorSuccess:g,contentTextColorSuccess:l,closeColorHoverSuccess:u,closeColorPressedSuccess:d,closeIconColorSuccess:f,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:m,borderWarning:`1px solid ${x(i,o(_,{alpha:.33}))}`,colorWarning:x(i,o(_,{alpha:.08})),titleTextColorWarning:c,iconColorWarning:_,contentTextColorWarning:l,closeColorHoverWarning:u,closeColorPressedWarning:d,closeIconColorWarning:f,closeIconColorHoverWarning:p,closeIconColorPressedWarning:m,borderError:`1px solid ${x(i,o(v,{alpha:.25}))}`,colorError:x(i,o(v,{alpha:.08})),titleTextColorError:c,iconColorError:v,contentTextColorError:l,closeColorHoverError:u,closeColorPressedError:d,closeIconColorError:f,closeIconColorHoverError:p,closeIconColorPressedError:m})}var A={name:`Alert`,common:c,self:k},j=u(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[d(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),i(`closable`,[u(`alert-body`,[d(`title`,`
 padding-right: 24px;
 `)])]),d(`icon`,{color:`var(--n-icon-color)`}),u(`alert-body`,{padding:`var(--n-padding)`},[d(`title`,{color:`var(--n-title-text-color)`}),d(`content`,{color:`var(--n-content-text-color)`})]),O({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),d(`icon`,`
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
 `),d(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),i(`show-icon`,[u(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),i(`right-adjust`,[u(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),u(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[d(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[n(`& +`,[d(`content`,{marginTop:`9px`})])]),d(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),d(`icon`,{transition:`color .3s var(--n-bezier)`})]),M=b({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},t.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:n,mergedBorderedRef:r,inlineThemeDisabled:i,mergedRtlRef:o}=h(e),s=t(`Alert`,`-alert`,j,A,e,n),c=a(`Alert`,o,n),u=m(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=s.value,{fontSize:r,borderRadius:i,titleFontWeight:a,lineHeight:o,iconSize:c,iconMargin:u,iconMarginRtl:d,closeIconSize:f,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=n,{type:y}=e,{left:b,right:x}=l(u);return{"--n-bezier":t,"--n-color":n[p(`color`,y)],"--n-close-icon-size":f,"--n-close-border-radius":m,"--n-close-color-hover":n[p(`closeColorHover`,y)],"--n-close-color-pressed":n[p(`closeColorPressed`,y)],"--n-close-icon-color":n[p(`closeIconColor`,y)],"--n-close-icon-color-hover":n[p(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":n[p(`closeIconColorPressed`,y)],"--n-icon-color":n[p(`iconColor`,y)],"--n-border":n[p(`border`,y)],"--n-title-text-color":n[p(`titleTextColor`,y)],"--n-content-text-color":n[p(`contentTextColor`,y)],"--n-line-height":o,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":a,"--n-icon-size":c,"--n-icon-margin":u,"--n-icon-margin-rtl":d,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),d=i?g(`alert`,m(()=>e.type[0]),u,e):void 0,f=y(!0),_=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:c,mergedClsPrefix:n,mergedBordered:r,visible:f,handleCloseClick:()=>{Promise.resolve(e.onClose?.call(e)).then(e=>{e!==!1&&(f.value=!1)})},handleAfterLeave:()=>{_()},mergedTheme:s,cssVars:i?void 0:u,themeClass:d?.themeClass,onRender:d?.onRender}},render(){var t;return(t=this.onRender)==null||t.call(this),e(S,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:t,$slots:n}=this,i={class:[`${t}-alert`,this.themeClass,this.closable&&`${t}-alert--closable`,this.showIcon&&`${t}-alert--show-icon`,!this.title&&this.closable&&`${t}-alert--right-adjust`,this.rtlEnabled&&`${t}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?e(`div`,Object.assign({},v(this.$attrs,i)),this.closable&&e(_,{clsPrefix:t,class:`${t}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&e(`div`,{class:`${t}-alert__border`}),this.showIcon&&e(`div`,{class:`${t}-alert__icon`,"aria-hidden":`true`},f(n.icon,()=>[e(r,{clsPrefix:t},{default:()=>{switch(this.type){case`success`:return e(E,null);case`info`:return e(D,null);case`warning`:return e(T,null);case`error`:return e(w,null);default:return null}}})])),e(`div`,{class:[`${t}-alert-body`,this.mergedBordered&&`${t}-alert-body--bordered`]},s(n.header,n=>{let r=n||this.title;return r?e(`div`,{class:`${t}-alert-body__title`},r):null}),n.default&&e(`div`,{class:`${t}-alert-body__content`},n))):null}})}});export{M as t};