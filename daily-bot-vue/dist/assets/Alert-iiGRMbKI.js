import{A as e,An as t,C as n,Dn as r,F as i,Jt as a,M as o,Qt as s,Rt as c,St as l,Tn as u,Wt as d,Yt as f,Zt as p,_n as m,bt as h,en as g,mt as _,nr as v,pt as y,zt as b}from"./_plugin-vue_export-helper-BsiXA9v0.js";import{o as x}from"./Card-CuL5h7H2.js";import{t as S}from"./FadeInExpandTransition-BiTandcV.js";import{A as C,H as w,U as T,V as E,W as D,j as O}from"./index-Cou3F1PU.js";function k(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:i,dividerColor:a,actionColor:o,textColor1:s,textColor2:l,closeColorHover:u,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:m,infoColor:h,successColor:g,warningColor:_,errorColor:v,fontSize:y}=e;return Object.assign(Object.assign({},O),{fontSize:y,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${a}`,color:o,titleTextColor:s,iconColor:l,contentTextColor:l,closeBorderRadius:n,closeColorHover:u,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:m,borderInfo:`1px solid ${b(i,c(h,{alpha:.25}))}`,colorInfo:b(i,c(h,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:h,contentTextColorInfo:l,closeColorHoverInfo:u,closeColorPressedInfo:d,closeIconColorInfo:f,closeIconColorHoverInfo:p,closeIconColorPressedInfo:m,borderSuccess:`1px solid ${b(i,c(g,{alpha:.25}))}`,colorSuccess:b(i,c(g,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:g,contentTextColorSuccess:l,closeColorHoverSuccess:u,closeColorPressedSuccess:d,closeIconColorSuccess:f,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:m,borderWarning:`1px solid ${b(i,c(_,{alpha:.33}))}`,colorWarning:b(i,c(_,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:_,contentTextColorWarning:l,closeColorHoverWarning:u,closeColorPressedWarning:d,closeIconColorWarning:f,closeIconColorHoverWarning:p,closeIconColorPressedWarning:m,borderError:`1px solid ${b(i,c(v,{alpha:.25}))}`,colorError:b(i,c(v,{alpha:.08})),titleTextColorError:s,iconColorError:v,contentTextColorError:l,closeColorHoverError:u,closeColorPressedError:d,closeIconColorError:f,closeIconColorHoverError:p,closeIconColorPressedError:m})}var A={name:`Alert`,common:n,self:k},j=f(`alert`,`
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
 `),s(`closable`,[f(`alert-body`,[p(`title`,`
 padding-right: 24px;
 `)])]),p(`icon`,{color:`var(--n-icon-color)`}),f(`alert-body`,{padding:`var(--n-padding)`},[p(`title`,{color:`var(--n-title-text-color)`}),p(`content`,{color:`var(--n-content-text-color)`})]),C({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),p(`icon`,`
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
 `),s(`show-icon`,[f(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),s(`right-adjust`,[f(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),f(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[p(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[a(`& +`,[p(`content`,{marginTop:`9px`})])]),p(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),p(`icon`,{transition:`color .3s var(--n-bezier)`})]),M=u({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},o.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:a}=_(e),s=o(`Alert`,`-alert`,j,A,e,t),c=i(`Alert`,a,t),l=m(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=s.value,{fontSize:r,borderRadius:i,titleFontWeight:a,lineHeight:o,iconSize:c,iconMargin:l,iconMarginRtl:u,closeIconSize:f,closeBorderRadius:p,closeSize:m,closeMargin:h,closeMarginRtl:_,padding:v}=n,{type:y}=e,{left:b,right:x}=d(l);return{"--n-bezier":t,"--n-color":n[g(`color`,y)],"--n-close-icon-size":f,"--n-close-border-radius":p,"--n-close-color-hover":n[g(`closeColorHover`,y)],"--n-close-color-pressed":n[g(`closeColorPressed`,y)],"--n-close-icon-color":n[g(`closeIconColor`,y)],"--n-close-icon-color-hover":n[g(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":n[g(`closeIconColorPressed`,y)],"--n-icon-color":n[g(`iconColor`,y)],"--n-border":n[g(`border`,y)],"--n-title-text-color":n[g(`titleTextColor`,y)],"--n-content-text-color":n[g(`contentTextColor`,y)],"--n-line-height":o,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":a,"--n-icon-size":c,"--n-icon-margin":l,"--n-icon-margin-rtl":u,"--n-close-size":m,"--n-close-margin":h,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),u=r?y(`alert`,m(()=>e.type[0]),l,e):void 0,f=v(!0),p=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:c,mergedClsPrefix:t,mergedBordered:n,visible:f,handleCloseClick:()=>{Promise.resolve(e.onClose?.call(e)).then(e=>{e!==!1&&(f.value=!1)})},handleAfterLeave:()=>{p()},mergedTheme:s,cssVars:r?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){var n;return(n=this.onRender)==null||n.call(this),r(S,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:n,$slots:i}=this,a={class:[`${n}-alert`,this.themeClass,this.closable&&`${n}-alert--closable`,this.showIcon&&`${n}-alert--show-icon`,!this.title&&this.closable&&`${n}-alert--right-adjust`,this.rtlEnabled&&`${n}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?r(`div`,Object.assign({},t(this.$attrs,a)),this.closable&&r(x,{clsPrefix:n,class:`${n}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&r(`div`,{class:`${n}-alert__border`}),this.showIcon&&r(`div`,{class:`${n}-alert__icon`,"aria-hidden":`true`},h(i.icon,()=>[r(e,{clsPrefix:n},{default:()=>{switch(this.type){case`success`:return r(w,null);case`info`:return r(T,null);case`warning`:return r(E,null);case`error`:return r(D,null);default:return null}}})])),r(`div`,{class:[`${n}-alert-body`,this.mergedBordered&&`${n}-alert-body--bordered`]},l(i.header,e=>{let t=e||this.title;return t?r(`div`,{class:`${n}-alert-body__title`},t):null}),i.default&&r(`div`,{class:`${n}-alert-body__content`},i))):null}})}});export{M as t};