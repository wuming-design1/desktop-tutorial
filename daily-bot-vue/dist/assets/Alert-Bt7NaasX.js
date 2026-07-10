import{At as e,Bt as t,Ft as n,Lt as r,Pt as i,Rt as a,Tt as o,Vn as s,ct as c,d as l,en as u,fn as d,h as f,ln as p,nt as m,ot as h,sn as g,tt as _,w as v,wt as y,x as b,y as x}from"./_plugin-vue_export-helper-CCvUJjhJ.js";import{n as S}from"./auth-D2LWN8vt.js";import{C,F as w,M as T,N as E,P as D,S as O}from"./index-OlDhySiI.js";function k(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:i,dividerColor:a,actionColor:s,textColor1:c,textColor2:l,closeColorHover:u,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:m,infoColor:h,successColor:g,warningColor:_,errorColor:v,fontSize:b}=e;return Object.assign(Object.assign({},C),{fontSize:b,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${a}`,color:s,titleTextColor:c,iconColor:l,contentTextColor:l,closeBorderRadius:n,closeColorHover:u,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:m,borderInfo:`1px solid ${o(i,y(h,{alpha:.25}))}`,colorInfo:o(i,y(h,{alpha:.08})),titleTextColorInfo:c,iconColorInfo:h,contentTextColorInfo:l,closeColorHoverInfo:u,closeColorPressedInfo:d,closeIconColorInfo:f,closeIconColorHoverInfo:p,closeIconColorPressedInfo:m,borderSuccess:`1px solid ${o(i,y(g,{alpha:.25}))}`,colorSuccess:o(i,y(g,{alpha:.08})),titleTextColorSuccess:c,iconColorSuccess:g,contentTextColorSuccess:l,closeColorHoverSuccess:u,closeColorPressedSuccess:d,closeIconColorSuccess:f,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:m,borderWarning:`1px solid ${o(i,y(_,{alpha:.33}))}`,colorWarning:o(i,y(_,{alpha:.08})),titleTextColorWarning:c,iconColorWarning:_,contentTextColorWarning:l,closeColorHoverWarning:u,closeColorPressedWarning:d,closeIconColorWarning:f,closeIconColorHoverWarning:p,closeIconColorPressedWarning:m,borderError:`1px solid ${o(i,y(v,{alpha:.25}))}`,colorError:o(i,y(v,{alpha:.08})),titleTextColorError:c,iconColorError:v,contentTextColorError:l,closeColorHoverError:u,closeColorPressedError:d,closeIconColorError:f,closeIconColorHoverError:p,closeIconColorPressedError:m})}var A={name:`Alert`,common:l,self:k},j=n(`alert`,`
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
 `),a(`closable`,[n(`alert-body`,[r(`title`,`
 padding-right: 24px;
 `)])]),r(`icon`,{color:`var(--n-icon-color)`}),n(`alert-body`,{padding:`var(--n-padding)`},[r(`title`,{color:`var(--n-title-text-color)`}),r(`content`,{color:`var(--n-content-text-color)`})]),O({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),r(`icon`,`
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
 `),a(`show-icon`,[n(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),a(`right-adjust`,[n(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),n(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[r(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[i(`& +`,[r(`content`,{marginTop:`9px`})])]),r(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),r(`icon`,{transition:`color .3s var(--n-bezier)`})]),M=g({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},b.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(n){let{mergedClsPrefixRef:r,mergedBorderedRef:i,inlineThemeDisabled:a,mergedRtlRef:o}=m(n),c=b(`Alert`,`-alert`,j,A,n,r),l=v(`Alert`,o,r),d=u(()=>{let{common:{cubicBezierEaseInOut:r},self:i}=c.value,{fontSize:a,borderRadius:o,titleFontWeight:s,lineHeight:l,iconSize:u,iconMargin:d,iconMarginRtl:f,closeIconSize:p,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=i,{type:y}=n,{left:b,right:x}=e(d);return{"--n-bezier":r,"--n-color":i[t(`color`,y)],"--n-close-icon-size":p,"--n-close-border-radius":m,"--n-close-color-hover":i[t(`closeColorHover`,y)],"--n-close-color-pressed":i[t(`closeColorPressed`,y)],"--n-close-icon-color":i[t(`closeIconColor`,y)],"--n-close-icon-color-hover":i[t(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":i[t(`closeIconColorPressed`,y)],"--n-icon-color":i[t(`iconColor`,y)],"--n-border":i[t(`border`,y)],"--n-title-text-color":i[t(`titleTextColor`,y)],"--n-content-text-color":i[t(`contentTextColor`,y)],"--n-line-height":l,"--n-border-radius":o,"--n-font-size":a,"--n-title-font-weight":s,"--n-icon-size":u,"--n-icon-margin":d,"--n-icon-margin-rtl":f,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),f=a?_(`alert`,u(()=>n.type[0]),d,n):void 0,p=s(!0),h=()=>{let{onAfterLeave:e,onAfterHide:t}=n;e&&e(),t&&t()};return{rtlEnabled:l,mergedClsPrefix:r,mergedBordered:i,visible:p,handleCloseClick:()=>{Promise.resolve(n.onClose?.call(n)).then(e=>{e!==!1&&(p.value=!1)})},handleAfterLeave:()=>{h()},mergedTheme:c,cssVars:a?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),p(S,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,n={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?p(`div`,Object.assign({},d(this.$attrs,n)),this.closable&&p(f,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&p(`div`,{class:`${e}-alert__border`}),this.showIcon&&p(`div`,{class:`${e}-alert__icon`,"aria-hidden":`true`},h(t.icon,()=>[p(x,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return p(E,null);case`info`:return p(D,null);case`warning`:return p(T,null);case`error`:return p(w,null);default:return null}}})])),p(`div`,{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},c(t.header,t=>{let n=t||this.title;return n?p(`div`,{class:`${e}-alert-body__title`},n):null}),t.default&&p(`div`,{class:`${e}-alert-body__content`},t))):null}})}});export{M as t};