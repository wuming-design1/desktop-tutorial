import{Bt as e,Ft as t,Kn as n,Lt as r,Ot as i,Pt as a,Rt as o,Vn as s,at as c,ct as l,d as u,dt as d,en as f,et as p,g as m,jt as h,ln as g,nt as _,p as v,sn as y,tt as b,v as x,wt as S,x as C,zt as w}from"./_plugin-vue_export-helper-CCvUJjhJ.js";import{t as T}from"./use-merged-state-CF77hr3s.js";import{l as E}from"./index-OlDhySiI.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},E),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${S(t,{alpha:.2})}`})}var O={name:`Switch`,common:u,self:D},k=t(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[r(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),r(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),r(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),t(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[m({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),r(`checked, unchecked`,`
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
 `),r(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),r(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),a(`&:focus`,[r(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),o(`round`,[r(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[r(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),w(`disabled`,[w(`icon`,[o(`rubber-band`,[o(`pressed`,[r(`rail`,[r(`button`,`max-width: var(--n-button-width-pressed);`)])]),r(`rail`,[a(`&:active`,[r(`button`,`max-width: var(--n-button-width-pressed);`)])]),o(`active`,[o(`pressed`,[r(`rail`,[r(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),r(`rail`,[a(`&:active`,[r(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),o(`active`,[r(`rail`,[r(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),r(`rail`,`
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
 `,[r(`button-icon`,`
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
 `,[m()]),r(`button`,`
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
 `)]),o(`active`,[r(`rail`,`background-color: var(--n-rail-color-active);`)]),o(`loading`,[r(`rail`,`
 cursor: wait;
 `)]),o(`disabled`,[r(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},C.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=y({name:`Switch`,props:A,slots:Object,setup(t){j===void 0&&(j=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedComponentPropsRef:o}=_(t),c=C(`Switch`,`-switch`,k,O,t,r),l=p(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:o?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:u,mergedDisabledRef:m}=l,g=s(t.defaultValue),v=T(n(t,`value`),g),y=f(()=>v.value===t.checkedValue),x=s(!1),S=s(!1),w=f(()=>{let{railStyle:e}=t;if(e)return e({focused:S.value,checked:y.value})});function E(e){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=t,{nTriggerFormInput:a,nTriggerFormChange:o}=l;n&&d(n,e),i&&d(i,e),r&&d(r,e),g.value=e,a(),o()}function D(){let{nTriggerFormFocus:e}=l;e()}function A(){let{nTriggerFormBlur:e}=l;e()}function M(){t.loading||m.value||(v.value===t.checkedValue?E(t.uncheckedValue):E(t.checkedValue))}function N(){S.value=!0,D()}function P(){S.value=!1,A(),x.value=!1}function F(e){t.loading||m.value||e.key===` `&&(v.value===t.checkedValue?E(t.uncheckedValue):E(t.checkedValue),x.value=!1)}function I(e){t.loading||m.value||e.key===` `&&(e.preventDefault(),x.value=!0)}let L=f(()=>{let{value:t}=u,{self:{opacityDisabled:n,railColor:r,railColorActive:a,buttonBoxShadow:o,buttonColor:s,boxShadowFocus:l,loadingColor:d,textColor:f,iconColor:p,[e(`buttonHeight`,t)]:m,[e(`buttonWidth`,t)]:g,[e(`buttonWidthPressed`,t)]:_,[e(`railHeight`,t)]:v,[e(`railWidth`,t)]:y,[e(`railBorderRadius`,t)]:b,[e(`buttonBorderRadius`,t)]:x},common:{cubicBezierEaseInOut:S}}=c.value,C,w,T;return j?(C=`calc((${v} - ${m}) / 2)`,w=`max(${v}, ${m})`,T=`max(${y}, calc(${y} + ${m} - ${v}))`):(C=h((i(v)-i(m))/2),w=h(Math.max(i(v),i(m))),T=i(v)>i(m)?y:h(i(y)+i(m)-i(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":o,"--n-button-color":s,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":m,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":n,"--n-rail-border-radius":b,"--n-rail-color":r,"--n-rail-color-active":a,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":l,"--n-loading-color":d,"--n-text-color":f,"--n-icon-color":p}}),R=a?b(`switch`,f(()=>u.value[0]),L,t):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:w,pressed:x,mergedClsPrefix:r,mergedValue:v,checked:y,mergedDisabled:m,cssVars:a?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:r,onRender:i,$slots:a}=this;i?.();let{checked:o,unchecked:s,icon:u,"checked-icon":d,"unchecked-icon":f}=a,p=!(c(u)&&c(d)&&c(f));return g(`div`,{role:`switch`,"aria-checked":n,class:[`${e}-switch`,this.themeClass,p&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},g(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:r},l(o,t=>l(s,n=>t||n?g(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},g(`div`,{class:`${e}-switch__rail-placeholder`},g(`div`,{class:`${e}-switch__button-placeholder`}),t),g(`div`,{class:`${e}-switch__rail-placeholder`},g(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),g(`div`,{class:`${e}-switch__button`},l(u,t=>l(d,n=>l(f,r=>g(x,null,{default:()=>this.loading?g(v,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(n||t)?g(`div`,{class:`${e}-switch__button-icon`,key:n?`checked-icon`:`icon`},n||t):!this.checked&&(r||t)?g(`div`,{class:`${e}-switch__button-icon`,key:r?`unchecked-icon`:`icon`},r||t):null})))),l(o,t=>t&&g(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),l(s,t=>t&&g(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};