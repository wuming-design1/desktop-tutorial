import{$t as e,C as t,D as n,Dn as r,Gt as i,Ht as a,Jt as o,M as s,Qt as c,Rt as l,St as u,T as d,Tn as f,Tt as p,Yt as m,Zt as h,_n as g,en as _,ft as v,k as y,mt as b,nr as x,or as S,pt as C,yt as w}from"./_plugin-vue_export-helper-BsiXA9v0.js";import{t as T}from"./use-merged-state-DTRBUz7X.js";import{u as E}from"./index-Cou3F1PU.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},E),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${l(t,{alpha:.2})}`})}var O={name:`Switch`,common:t,self:D},k=m(`switch`,`
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
 `,[n({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),h(`checked, unchecked`,`
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
 `),o(`&:focus`,[h(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),c(`round`,[h(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[h(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),e(`disabled`,[e(`icon`,[c(`rubber-band`,[c(`pressed`,[h(`rail`,[h(`button`,`max-width: var(--n-button-width-pressed);`)])]),h(`rail`,[o(`&:active`,[h(`button`,`max-width: var(--n-button-width-pressed);`)])]),c(`active`,[c(`pressed`,[h(`rail`,[h(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),h(`rail`,[o(`&:active`,[h(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),c(`active`,[h(`rail`,[h(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),h(`rail`,`
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
 `,[n()]),h(`button`,`
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
 `)]),c(`active`,[h(`rail`,`background-color: var(--n-rail-color-active);`)]),c(`loading`,[h(`rail`,`
 cursor: wait;
 `)]),c(`disabled`,[h(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},s.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=f({name:`Switch`,props:A,slots:Object,setup(e){j===void 0&&(j=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:r}=b(e),o=s(`Switch`,`-switch`,k,O,e,t),c=v(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:r?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:l,mergedDisabledRef:u}=c,d=x(e.defaultValue),f=T(S(e,`value`),d),m=g(()=>f.value===e.checkedValue),h=x(!1),y=x(!1),w=g(()=>{let{railStyle:t}=e;if(t)return t({focused:y.value,checked:m.value})});function E(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=c;n&&p(n,t),i&&p(i,t),r&&p(r,t),d.value=t,a(),o()}function D(){let{nTriggerFormFocus:e}=c;e()}function A(){let{nTriggerFormBlur:e}=c;e()}function M(){e.loading||u.value||(f.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue))}function N(){y.value=!0,D()}function P(){y.value=!1,A(),h.value=!1}function F(t){e.loading||u.value||t.key===` `&&(f.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue),h.value=!1)}function I(t){e.loading||u.value||t.key===` `&&(t.preventDefault(),h.value=!0)}let L=g(()=>{let{value:e}=l,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:s,buttonColor:c,boxShadowFocus:u,loadingColor:d,textColor:f,iconColor:p,[_(`buttonHeight`,e)]:m,[_(`buttonWidth`,e)]:h,[_(`buttonWidthPressed`,e)]:g,[_(`railHeight`,e)]:v,[_(`railWidth`,e)]:y,[_(`railBorderRadius`,e)]:b,[_(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=o.value,C,w,T;return j?(C=`calc((${v} - ${m}) / 2)`,w=`max(${v}, ${m})`,T=`max(${y}, calc(${y} + ${m} - ${v}))`):(C=i((a(v)-a(m))/2),w=i(Math.max(a(v),a(m))),T=a(v)>a(m)?y:i(a(y)+a(m)-a(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":s,"--n-button-color":c,"--n-button-width":h,"--n-button-width-pressed":g,"--n-button-height":m,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":u,"--n-loading-color":d,"--n-text-color":f,"--n-icon-color":p}}),R=n?C(`switch`,g(()=>l.value[0]),L,e):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:w,pressed:h,mergedClsPrefix:t,mergedValue:f,checked:m,mergedDisabled:u,cssVars:n?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:s,unchecked:c,icon:l,"checked-icon":f,"unchecked-icon":p}=o,m=!(w(l)&&w(f)&&w(p));return r(`div`,{role:`switch`,"aria-checked":n,class:[`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},r(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:i},u(s,t=>u(c,n=>t||n?r(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},r(`div`,{class:`${e}-switch__rail-placeholder`},r(`div`,{class:`${e}-switch__button-placeholder`}),t),r(`div`,{class:`${e}-switch__rail-placeholder`},r(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),r(`div`,{class:`${e}-switch__button`},u(l,t=>u(f,n=>u(p,i=>r(y,null,{default:()=>this.loading?r(d,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(n||t)?r(`div`,{class:`${e}-switch__button-icon`,key:n?`checked-icon`:`icon`},n||t):!this.checked&&(i||t)?r(`div`,{class:`${e}-switch__button-icon`,key:i?`unchecked-icon`:`icon`},i||t):null})))),u(s,t=>t&&r(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),u(c,t=>t&&r(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};