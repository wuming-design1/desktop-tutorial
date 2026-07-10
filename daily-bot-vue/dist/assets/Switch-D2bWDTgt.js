import{$n as e,E as t,Gt as n,Ht as r,It as i,Jt as a,Kt as o,Mt as s,Ut as c,Yn as l,bn as u,ct as d,gt as f,k as p,lt as m,pt as h,qt as g,un as _,ut as v,vn as y,w as b,x,y as S,yt as C,zt as w}from"./_plugin-vue_export-helper-Dw8IhM_J.js";import{t as T}from"./_common-DBAoCL-8.js";import{t as E}from"./use-merged-state-G3axosnw.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},T),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${s(t,{alpha:.2})}`})}var O={name:`Switch`,common:S,self:D},k=c(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[n(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),n(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),n(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),c(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[b({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),n(`checked, unchecked`,`
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
 `),n(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),n(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),r(`&:focus`,[n(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),o(`round`,[n(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[n(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),g(`disabled`,[g(`icon`,[o(`rubber-band`,[o(`pressed`,[n(`rail`,[n(`button`,`max-width: var(--n-button-width-pressed);`)])]),n(`rail`,[r(`&:active`,[n(`button`,`max-width: var(--n-button-width-pressed);`)])]),o(`active`,[o(`pressed`,[n(`rail`,[n(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),n(`rail`,[r(`&:active`,[n(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),o(`active`,[n(`rail`,[n(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),n(`rail`,`
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
 `,[n(`button-icon`,`
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
 `,[b()]),n(`button`,`
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
 `)]),o(`active`,[n(`rail`,`background-color: var(--n-rail-color-active);`)]),o(`loading`,[n(`rail`,`
 cursor: wait;
 `)]),o(`disabled`,[n(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},p.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=y({name:`Switch`,props:A,slots:Object,setup(t){j===void 0&&(j=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:o}=v(t),s=p(`Switch`,`-switch`,k,O,t,n),c=d(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:o?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:u,mergedDisabledRef:f}=c,h=l(t.defaultValue),g=E(e(t,`value`),h),y=_(()=>g.value===t.checkedValue),b=l(!1),x=l(!1),S=_(()=>{let{railStyle:e}=t;if(e)return e({focused:x.value,checked:y.value})});function T(e){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=t,{nTriggerFormInput:a,nTriggerFormChange:o}=c;n&&C(n,e),i&&C(i,e),r&&C(r,e),h.value=e,a(),o()}function D(){let{nTriggerFormFocus:e}=c;e()}function A(){let{nTriggerFormBlur:e}=c;e()}function M(){t.loading||f.value||(g.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue))}function N(){x.value=!0,D()}function P(){x.value=!1,A(),b.value=!1}function F(e){t.loading||f.value||e.key===` `&&(g.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue),b.value=!1)}function I(e){t.loading||f.value||e.key===` `&&(e.preventDefault(),b.value=!0)}let L=_(()=>{let{value:e}=u,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:o,buttonColor:c,boxShadowFocus:l,loadingColor:d,textColor:f,iconColor:p,[a(`buttonHeight`,e)]:m,[a(`buttonWidth`,e)]:h,[a(`buttonWidthPressed`,e)]:g,[a(`railHeight`,e)]:_,[a(`railWidth`,e)]:v,[a(`railBorderRadius`,e)]:y,[a(`buttonBorderRadius`,e)]:b},common:{cubicBezierEaseInOut:x}}=s.value,S,C,T;return j?(S=`calc((${_} - ${m}) / 2)`,C=`max(${_}, ${m})`,T=`max(${v}, calc(${v} + ${m} - ${_}))`):(S=w((i(_)-i(m))/2),C=w(Math.max(i(_),i(m))),T=i(_)>i(m)?v:w(i(v)+i(m)-i(_))),{"--n-bezier":x,"--n-button-border-radius":b,"--n-button-box-shadow":o,"--n-button-color":c,"--n-button-width":h,"--n-button-width-pressed":g,"--n-button-height":m,"--n-height":C,"--n-offset":S,"--n-opacity-disabled":t,"--n-rail-border-radius":y,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":_,"--n-rail-width":v,"--n-width":T,"--n-box-shadow-focus":l,"--n-loading-color":d,"--n-text-color":f,"--n-icon-color":p}}),R=r?m(`switch`,_(()=>u.value[0]),L,t):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:S,pressed:b,mergedClsPrefix:n,mergedValue:g,checked:y,mergedDisabled:f,cssVars:r?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:n,checked:r,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:s,unchecked:c,icon:l,"checked-icon":d,"unchecked-icon":p}=o,m=!(h(l)&&h(d)&&h(p));return u(`div`,{role:`switch`,"aria-checked":r,class:[`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,r&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},u(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:i},f(s,t=>f(c,n=>t||n?u(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},u(`div`,{class:`${e}-switch__rail-placeholder`},u(`div`,{class:`${e}-switch__button-placeholder`}),t),u(`div`,{class:`${e}-switch__rail-placeholder`},u(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),u(`div`,{class:`${e}-switch__button`},f(l,n=>f(d,r=>f(p,i=>u(t,null,{default:()=>this.loading?u(x,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(r||n)?u(`div`,{class:`${e}-switch__button-icon`,key:r?`checked-icon`:`icon`},r||n):!this.checked&&(i||n)?u(`div`,{class:`${e}-switch__button-icon`,key:i?`unchecked-icon`:`icon`},i||n):null})))),f(s,t=>t&&u(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),f(c,t=>t&&u(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};