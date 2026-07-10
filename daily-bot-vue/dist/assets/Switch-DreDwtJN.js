import{$t as e,A as t,D as n,En as r,F as i,Gt as a,Ht as o,Jt as s,M as c,Qt as l,Rt as u,St as d,T as f,Tt as p,Yt as m,Zt as h,ar as g,en as _,gn as v,gt as y,ht as b,mt as x,tr as S,wn as C,yt as w}from"./_plugin-vue_export-helper-D7edCcqi.js";import{t as T}from"./_common-DBAoCL-8.js";import{t as E}from"./use-merged-state-BhhvU6px.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},T),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${u(t,{alpha:.2})}`})}var O={name:`Switch`,common:f,self:D},k=m(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[h(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),h(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),h(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),m(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[t({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),h(`checked, unchecked`,`
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
 `),h(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),h(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),s(`&:focus`,[h(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l(`round`,[h(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[h(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),e(`disabled`,[e(`icon`,[l(`rubber-band`,[l(`pressed`,[h(`rail`,[h(`button`,`max-width: var(--n-button-width-pressed);`)])]),h(`rail`,[s(`&:active`,[h(`button`,`max-width: var(--n-button-width-pressed);`)])]),l(`active`,[l(`pressed`,[h(`rail`,[h(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),h(`rail`,[s(`&:active`,[h(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),l(`active`,[h(`rail`,[h(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),h(`rail`,`
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
 `,[h(`button-icon`,`
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
 `,[t()]),h(`button`,`
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
 `)]),l(`active`,[h(`rail`,`background-color: var(--n-rail-color-active);`)]),l(`loading`,[h(`rail`,`
 cursor: wait;
 `)]),l(`disabled`,[h(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},i.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=C({name:`Switch`,props:A,slots:Object,setup(e){j===void 0&&(j=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:r}=y(e),s=i(`Switch`,`-switch`,k,O,e,t),c=x(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:r?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:l,mergedDisabledRef:u}=c,d=S(e.defaultValue),f=E(g(e,`value`),d),m=v(()=>f.value===e.checkedValue),h=S(!1),C=S(!1),w=v(()=>{let{railStyle:t}=e;if(t)return t({focused:C.value,checked:m.value})});function T(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=c;n&&p(n,t),i&&p(i,t),r&&p(r,t),d.value=t,a(),o()}function D(){let{nTriggerFormFocus:e}=c;e()}function A(){let{nTriggerFormBlur:e}=c;e()}function M(){e.loading||u.value||(f.value===e.checkedValue?T(e.uncheckedValue):T(e.checkedValue))}function N(){C.value=!0,D()}function P(){C.value=!1,A(),h.value=!1}function F(t){e.loading||u.value||t.key===` `&&(f.value===e.checkedValue?T(e.uncheckedValue):T(e.checkedValue),h.value=!1)}function I(t){e.loading||u.value||t.key===` `&&(t.preventDefault(),h.value=!0)}let L=v(()=>{let{value:e}=l,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:c,boxShadowFocus:u,loadingColor:d,textColor:f,iconColor:p,[_(`buttonHeight`,e)]:m,[_(`buttonWidth`,e)]:h,[_(`buttonWidthPressed`,e)]:g,[_(`railHeight`,e)]:v,[_(`railWidth`,e)]:y,[_(`railBorderRadius`,e)]:b,[_(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=s.value,C,w,T;return j?(C=`calc((${v} - ${m}) / 2)`,w=`max(${v}, ${m})`,T=`max(${y}, calc(${y} + ${m} - ${v}))`):(C=a((o(v)-o(m))/2),w=a(Math.max(o(v),o(m))),T=o(v)>o(m)?y:a(o(y)+o(m)-o(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":i,"--n-button-color":c,"--n-button-width":h,"--n-button-width-pressed":g,"--n-button-height":m,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":u,"--n-loading-color":d,"--n-text-color":f,"--n-icon-color":p}}),R=n?b(`switch`,v(()=>l.value[0]),L,e):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:w,pressed:h,mergedClsPrefix:t,mergedValue:f,checked:m,mergedDisabled:u,cssVars:n?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:i,mergedRailStyle:a,onRender:o,$slots:s}=this;o?.();let{checked:l,unchecked:u,icon:f,"checked-icon":p,"unchecked-icon":m}=s,h=!(w(f)&&w(p)&&w(m));return r(`div`,{role:`switch`,"aria-checked":i,class:[`${e}-switch`,this.themeClass,h&&`${e}-switch--icon`,i&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},r(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:a},d(l,t=>d(u,n=>t||n?r(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},r(`div`,{class:`${e}-switch__rail-placeholder`},r(`div`,{class:`${e}-switch__button-placeholder`}),t),r(`div`,{class:`${e}-switch__rail-placeholder`},r(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),r(`div`,{class:`${e}-switch__button`},d(f,t=>d(p,i=>d(m,a=>r(c,null,{default:()=>this.loading?r(n,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(i||t)?r(`div`,{class:`${e}-switch__button-icon`,key:i?`checked-icon`:`icon`},i||t):!this.checked&&(a||t)?r(`div`,{class:`${e}-switch__button-icon`,key:a?`unchecked-icon`:`icon`},a||t):null})))),d(l,t=>t&&r(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),d(u,t=>t&&r(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};