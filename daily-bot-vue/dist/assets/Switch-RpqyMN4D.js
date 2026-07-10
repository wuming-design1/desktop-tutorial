import{$n as e,A as t,Bt as n,C as r,Ct as i,It as a,Kt as o,N as s,O as c,Qt as l,Sn as u,T as d,Ut as f,Xt as p,Yt as m,Zt as h,_t as g,bt as _,ft as v,mn as y,mt as b,pt as x,qt as S,rr as C,wn as w}from"./_plugin-vue_export-helper-MsG4zd-3.js";import{t as T}from"./_common-DBAoCL-8.js";import{t as E}from"./use-merged-state-cgcCleiG.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},T),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${a(t,{alpha:.2})}`})}var O={name:`Switch`,common:r,self:D},k=S(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[m(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),m(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),m(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),S(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[c({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),m(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),m(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),m(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),o(`&:focus`,[m(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),p(`round`,[m(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[m(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),h(`disabled`,[h(`icon`,[p(`rubber-band`,[p(`pressed`,[m(`rail`,[m(`button`,`max-width: var(--n-button-width-pressed);`)])]),m(`rail`,[o(`&:active`,[m(`button`,`max-width: var(--n-button-width-pressed);`)])]),p(`active`,[p(`pressed`,[m(`rail`,[m(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),m(`rail`,[o(`&:active`,[m(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),p(`active`,[m(`rail`,[m(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),m(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[m(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[c()]),m(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),p(`active`,[m(`rail`,`background-color: var(--n-rail-color-active);`)]),p(`loading`,[m(`rail`,`
 cursor: wait;
 `)]),p(`disabled`,[m(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},s.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=u({name:`Switch`,props:A,slots:Object,setup(t){j===void 0&&(j=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedComponentPropsRef:o}=b(t),c=s(`Switch`,`-switch`,k,O,t,r),u=v(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:o?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:d,mergedDisabledRef:p}=u,m=e(t.defaultValue),h=E(C(t,`value`),m),g=y(()=>h.value===t.checkedValue),_=e(!1),S=e(!1),w=y(()=>{let{railStyle:e}=t;if(e)return e({focused:S.value,checked:g.value})});function T(e){let{"onUpdate:value":n,onChange:r,onUpdateValue:a}=t,{nTriggerFormInput:o,nTriggerFormChange:s}=u;n&&i(n,e),a&&i(a,e),r&&i(r,e),m.value=e,o(),s()}function D(){let{nTriggerFormFocus:e}=u;e()}function A(){let{nTriggerFormBlur:e}=u;e()}function M(){t.loading||p.value||(h.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue))}function N(){S.value=!0,D()}function P(){S.value=!1,A(),_.value=!1}function F(e){t.loading||p.value||e.key===` `&&(h.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue),_.value=!1)}function I(e){t.loading||p.value||e.key===` `&&(e.preventDefault(),_.value=!0)}let L=y(()=>{let{value:e}=d,{self:{opacityDisabled:t,railColor:r,railColorActive:i,buttonBoxShadow:a,buttonColor:o,boxShadowFocus:s,loadingColor:u,textColor:p,iconColor:m,[l(`buttonHeight`,e)]:h,[l(`buttonWidth`,e)]:g,[l(`buttonWidthPressed`,e)]:_,[l(`railHeight`,e)]:v,[l(`railWidth`,e)]:y,[l(`railBorderRadius`,e)]:b,[l(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=c.value,C,w,T;return j?(C=`calc((${v} - ${h}) / 2)`,w=`max(${v}, ${h})`,T=`max(${y}, calc(${y} + ${h} - ${v}))`):(C=f((n(v)-n(h))/2),w=f(Math.max(n(v),n(h))),T=n(v)>n(h)?y:f(n(y)+n(h)-n(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":a,"--n-button-color":o,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":h,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":r,"--n-rail-color-active":i,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":s,"--n-loading-color":u,"--n-text-color":p,"--n-icon-color":m}}),R=a?x(`switch`,y(()=>d.value[0]),L,t):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:w,pressed:_,mergedClsPrefix:r,mergedValue:h,checked:g,mergedDisabled:p,cssVars:a?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:n,checked:r,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:s,unchecked:c,icon:l,"checked-icon":u,"unchecked-icon":f}=o,p=!(g(l)&&g(u)&&g(f));return w(`div`,{role:`switch`,"aria-checked":r,class:[`${e}-switch`,this.themeClass,p&&`${e}-switch--icon`,r&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},w(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:i},_(s,t=>_(c,n=>t||n?w(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},w(`div`,{class:`${e}-switch__rail-placeholder`},w(`div`,{class:`${e}-switch__button-placeholder`}),t),w(`div`,{class:`${e}-switch__rail-placeholder`},w(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),w(`div`,{class:`${e}-switch__button`},_(l,n=>_(u,r=>_(f,i=>w(t,null,{default:()=>this.loading?w(d,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(r||n)?w(`div`,{class:`${e}-switch__button-icon`,key:r?`checked-icon`:`icon`},r||n):!this.checked&&(i||n)?w(`div`,{class:`${e}-switch__button-icon`,key:i?`unchecked-icon`:`icon`},i||n):null})))),_(s,t=>t&&w(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),_(c,t=>t&&w(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};