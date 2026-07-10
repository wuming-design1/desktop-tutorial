import{C as e,Cn as t,D as n,Gt as r,Ht as i,Jt as a,Kt as o,M as s,Mt as c,Nt as l,Rt as u,Ut as d,Yn as f,bn as p,gt as m,k as h,lt as g,mt as _,un as v,ut as y,vn as b,y as x}from"./_plugin-vue_export-helper-Dw8IhM_J.js";import{t as S}from"./FadeInExpandTransition-BR9iA0PH.js";import{M as C,N as w,P as T,S as E,j as D,x as O}from"./index-0WQr_tjR.js";function k(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:i,dividerColor:a,actionColor:o,textColor1:s,textColor2:u,closeColorHover:d,closeColorPressed:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,infoColor:g,successColor:_,warningColor:v,errorColor:y,fontSize:b}=e;return Object.assign(Object.assign({},E),{fontSize:b,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${a}`,color:o,titleTextColor:s,iconColor:u,contentTextColor:u,closeBorderRadius:n,closeColorHover:d,closeColorPressed:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,borderInfo:`1px solid ${l(i,c(g,{alpha:.25}))}`,colorInfo:l(i,c(g,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:g,contentTextColorInfo:u,closeColorHoverInfo:d,closeColorPressedInfo:f,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:h,borderSuccess:`1px solid ${l(i,c(_,{alpha:.25}))}`,colorSuccess:l(i,c(_,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:_,contentTextColorSuccess:u,closeColorHoverSuccess:d,closeColorPressedSuccess:f,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:h,borderWarning:`1px solid ${l(i,c(v,{alpha:.33}))}`,colorWarning:l(i,c(v,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:v,contentTextColorWarning:u,closeColorHoverWarning:d,closeColorPressedWarning:f,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:h,borderError:`1px solid ${l(i,c(y,{alpha:.25}))}`,colorError:l(i,c(y,{alpha:.08})),titleTextColorError:s,iconColorError:y,contentTextColorError:u,closeColorHoverError:d,closeColorPressedError:f,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:h})}var A={name:`Alert`,common:x,self:k},j=d(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[r(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),o(`closable`,[d(`alert-body`,[r(`title`,`
 padding-right: 24px;
 `)])]),r(`icon`,{color:`var(--n-icon-color)`}),d(`alert-body`,{padding:`var(--n-padding)`},[r(`title`,{color:`var(--n-title-text-color)`}),r(`content`,{color:`var(--n-content-text-color)`})]),O({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),r(`icon`,`
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
 `),r(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),o(`show-icon`,[d(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),o(`right-adjust`,[d(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),d(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[r(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[i(`& +`,[r(`content`,{marginTop:`9px`})])]),r(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),r(`icon`,{transition:`color .3s var(--n-bezier)`})]),M=b({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},h.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=y(e),o=h(`Alert`,`-alert`,j,A,e,t),c=s(`Alert`,i,t),l=v(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=o.value,{fontSize:r,borderRadius:i,titleFontWeight:s,lineHeight:c,iconSize:l,iconMargin:d,iconMarginRtl:f,closeIconSize:p,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=n,{type:y}=e,{left:b,right:x}=u(d);return{"--n-bezier":t,"--n-color":n[a(`color`,y)],"--n-close-icon-size":p,"--n-close-border-radius":m,"--n-close-color-hover":n[a(`closeColorHover`,y)],"--n-close-color-pressed":n[a(`closeColorPressed`,y)],"--n-close-icon-color":n[a(`closeIconColor`,y)],"--n-close-icon-color-hover":n[a(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":n[a(`closeIconColorPressed`,y)],"--n-icon-color":n[a(`iconColor`,y)],"--n-border":n[a(`border`,y)],"--n-title-text-color":n[a(`titleTextColor`,y)],"--n-content-text-color":n[a(`contentTextColor`,y)],"--n-line-height":c,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":s,"--n-icon-size":l,"--n-icon-margin":d,"--n-icon-margin-rtl":f,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),d=r?g(`alert`,v(()=>e.type[0]),l,e):void 0,p=f(!0),m=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:c,mergedClsPrefix:t,mergedBordered:n,visible:p,handleCloseClick:()=>{Promise.resolve(e.onClose?.call(e)).then(e=>{e!==!1&&(p.value=!1)})},handleAfterLeave:()=>{m()},mergedTheme:o,cssVars:r?void 0:l,themeClass:d?.themeClass,onRender:d?.onRender}},render(){var r;return(r=this.onRender)==null||r.call(this),p(S,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:r,$slots:i}=this,a={class:[`${r}-alert`,this.themeClass,this.closable&&`${r}-alert--closable`,this.showIcon&&`${r}-alert--show-icon`,!this.title&&this.closable&&`${r}-alert--right-adjust`,this.rtlEnabled&&`${r}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?p(`div`,Object.assign({},t(this.$attrs,a)),this.closable&&p(e,{clsPrefix:r,class:`${r}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&p(`div`,{class:`${r}-alert__border`}),this.showIcon&&p(`div`,{class:`${r}-alert__icon`,"aria-hidden":`true`},_(i.icon,()=>[p(n,{clsPrefix:r},{default:()=>{switch(this.type){case`success`:return p(C,null);case`info`:return p(w,null);case`warning`:return p(D,null);case`error`:return p(T,null);default:return null}}})])),p(`div`,{class:[`${r}-alert-body`,this.mergedBordered&&`${r}-alert-body--bordered`]},m(i.header,e=>{let t=e||this.title;return t?p(`div`,{class:`${r}-alert-body__title`},t):null}),i.default&&p(`div`,{class:`${r}-alert-body__content`},i))):null}})}});export{M as t};