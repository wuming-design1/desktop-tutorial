import{$n as e,Bt as t,Cn as n,Ft as r,Hn as i,Jt as a,Lt as o,Mn as s,Pt as c,Qn as l,Rt as u,Sn as d,Wt as f,Xn as p,Xt as m,Zn as h,cn as g,dt as _,en as v,fn as y,ft as b,in as x,jn as S,kn as C,lt as w,n as T,nn as E,nt as D,on as O,qn as k,rn as A,sn as j,st as M,t as N,tn as P,tt as F,un as I,w as L,wn as R,x as z,xt as B,y as V,yn as ee,yt as H,zt as U}from"./_plugin-vue_export-helper-Diu8tYPd.js";import{n as W}from"./auth-BG0zYGeO.js";import{n as G}from"./_common-DBAoCL-8.js";import{n as K,t as q}from"./Grid-DXQeMfgy.js";import{t as te}from"./misc-v7XGxIq4.js";import{t as ne}from"./use-false-until-truthy-Bpc4kV20.js";import{t as re}from"./use-merged-state-C-J5a4aR.js";import{t as ie}from"./Alert-BpnDCyOo.js";import{t as ae}from"./Switch-BGzSKJOi.js";import{t as oe}from"./Spin-CsWaAYm4.js";import{A as J,C as Y,M as X,N as Z,P as se,b as ce,g as le,j as Q,n as ue,r as de,t as fe,u as pe,z as $}from"./index-CbVfxkmi.js";var me=g({name:`ChevronLeft`,render(){return I(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},I(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`}))}}),he=r(`collapse`,`width: 100%;`,[r(`collapse-item`,`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[u(`disabled`,[o(`header`,`cursor: not-allowed;`,[o(`header-main`,`
 color: var(--n-title-text-color-disabled);
 `),r(`collapse-item-arrow`,`
 color: var(--n-arrow-color-disabled);
 `)])]),r(`collapse-item`,`margin-left: 32px;`),c(`&:first-child`,`margin-top: 0;`),c(`&:first-child >`,[o(`header`,`padding-top: 0;`)]),u(`left-arrow-placement`,[o(`header`,[r(`collapse-item-arrow`,`margin-right: 4px;`)])]),u(`right-arrow-placement`,[o(`header`,[r(`collapse-item-arrow`,`margin-left: 4px;`)])]),o(`content-wrapper`,[o(`content-inner`,`padding-top: 16px;`),ce({duration:`0.15s`})]),u(`active`,[o(`header`,[u(`active`,[r(`collapse-item-arrow`,`transform: rotate(90deg);`)])])]),c(`&:not(:first-child)`,`border-top: 1px solid var(--n-divider-color);`),U(`disabled`,[u(`trigger-area-main`,[o(`header`,[o(`header-main`,`cursor: pointer;`),r(`collapse-item-arrow`,`cursor: default;`)])]),u(`trigger-area-arrow`,[o(`header`,[r(`collapse-item-arrow`,`cursor: pointer;`)])]),u(`trigger-area-extra`,[o(`header`,[o(`header-extra`,`cursor: pointer;`)])])]),o(`header`,`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[o(`header-main`,`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),o(`header-extra`,`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),r(`collapse-item-arrow`,`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),ge=Object.assign(Object.assign({},z.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:`left`},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:`if`},triggerAreas:{type:Array,default:()=>[`main`,`extra`,`arrow`]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),_e=H(`n-collapse`),ve=g({name:`Collapse`,props:ge,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedRtlRef:o}=D(e),s=i(e.defaultExpandedNames),c=re(v(()=>e.expandedNames),s),l=z(`Collapse`,`-collapse`,he,le,e,r);function u(t){let{"onUpdate:expandedNames":n,onUpdateExpandedNames:r,onExpandedNamesChange:i}=e;r&&_(r,t),n&&_(n,t),i&&_(i,t),s.value=t}function d(t){let{onItemHeaderClick:n}=e;n&&_(n,t)}function f(t,n,r){let{accordion:i}=e,{value:a}=c;if(i)t?(u([n]),d({name:n,expanded:!0,event:r})):(u([]),d({name:n,expanded:!1,event:r}));else if(!Array.isArray(a))u([n]),d({name:n,expanded:!0,event:r});else{let e=a.slice(),t=e.findIndex(e=>n===e);~t?(e.splice(t,1),u(e),d({name:n,expanded:!1,event:r})):(e.push(n),u(e),d({name:n,expanded:!0,event:r}))}}n(_e,{props:e,mergedClsPrefixRef:r,expandedNamesRef:c,slots:t,toggleItem:f});let p=L(`Collapse`,o,r),m=v(()=>{let{common:{cubicBezierEaseInOut:e},self:{titleFontWeight:t,dividerColor:n,titlePadding:r,titleTextColor:i,titleTextColorDisabled:a,textColor:o,arrowColor:s,fontSize:c,titleFontSize:u,arrowColorDisabled:d,itemMargin:f}}=l.value;return{"--n-font-size":c,"--n-bezier":e,"--n-text-color":o,"--n-divider-color":n,"--n-title-padding":r,"--n-title-font-size":u,"--n-title-text-color":i,"--n-title-text-color-disabled":a,"--n-title-font-weight":t,"--n-arrow-color":s,"--n-arrow-color-disabled":d,"--n-item-margin":f}}),h=a?F(`collapse`,void 0,m,e):void 0;return{rtlEnabled:p,mergedTheme:l,mergedClsPrefix:r,cssVars:a?void 0:m,themeClass:h?.themeClass,onRender:h?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),I(`div`,{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),ye=g({name:`CollapseItemContent`,props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:ne(k(e,`show`))}},render(){return I(W,null,{default:()=>{let{show:e,displayDirective:t,onceTrue:n,clsPrefix:r}=this,i=t===`show`&&n,o=I(`div`,{class:`${r}-collapse-item__content-wrapper`},I(`div`,{class:`${r}-collapse-item__content-inner`},this.$slots));return i?s(o,[[a,e]]):e?o:null}})}}),be=g({name:`CollapseItem`,props:{title:String,name:[String,Number],disabled:Boolean,displayDirective:String},setup(e){let{mergedRtlRef:t}=D(e),n=te(),r=B(()=>e.name??n),i=y(_e);i||b(`collapse-item`,"`n-collapse-item` must be placed inside `n-collapse`.");let{expandedNamesRef:a,props:o,mergedClsPrefixRef:s,slots:c}=i,l=v(()=>{let{value:e}=a;if(Array.isArray(e)){let{value:t}=r;return!~e.findIndex(e=>e===t)}else if(e){let{value:t}=r;return t!==e}return!0});return{rtlEnabled:L(`Collapse`,t,s),collapseSlots:c,randomName:n,mergedClsPrefix:s,collapsed:l,triggerAreas:k(o,`triggerAreas`),mergedDisplayDirective:v(()=>{let{displayDirective:t}=e;return t||o.displayDirective}),arrowPlacement:v(()=>o.arrowPlacement),handleClick(t){let n=`main`;G(t,`arrow`)&&(n=`arrow`),G(t,`extra`)&&(n=`extra`),o.triggerAreas.includes(n)&&i&&!e.disabled&&i.toggleItem(l.value,r.value,t)}}},render(){let{collapseSlots:e,$slots:t,arrowPlacement:n,collapsed:r,mergedDisplayDirective:i,mergedClsPrefix:a,disabled:o,triggerAreas:s}=this,c=M(t.header,{collapsed:r},()=>[this.title]),l=t[`header-extra`]||e[`header-extra`],u=t.arrow||e.arrow;return I(`div`,{class:[`${a}-collapse-item`,`${a}-collapse-item--${n}-arrow-placement`,o&&`${a}-collapse-item--disabled`,!r&&`${a}-collapse-item--active`,s.map(e=>`${a}-collapse-item--trigger-area-${e}`)]},I(`div`,{class:[`${a}-collapse-item__header`,!r&&`${a}-collapse-item__header--active`]},I(`div`,{class:`${a}-collapse-item__header-main`,onClick:this.handleClick},n===`right`&&c,I(`div`,{class:`${a}-collapse-item-arrow`,key:+!this.rtlEnabled,"data-arrow":!0},M(u,{collapsed:r},()=>[I(V,{clsPrefix:a},{default:()=>this.rtlEnabled?I(me,null):I(se,null)})])),n===`left`&&c),w(l,{collapsed:r},e=>I(`div`,{class:`${a}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},e))),I(ye,{clsPrefix:a,displayDirective:i,show:!r},t))}}),xe={success:I(Q,null),error:I(Z,null),warning:I(J,null),info:I(X,null)},Se=g({name:`ProgressCircle`,props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){let n=v(()=>{let t=`gradient`,{fillColor:n}=e;return typeof n==`object`?`${t}-${f(JSON.stringify(n))}`:t});function r(t,r,i,a){let{gapDegree:o,viewBoxWidth:s,strokeWidth:c}=e,l=50+c/2,u=`M ${l},${l} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`,d=Math.PI*2*50;return{pathString:u,pathStyle:{stroke:a===`rail`?i:typeof e.fillColor==`object`?`url(#${n.value})`:i,strokeDasharray:`${Math.min(t,100)/100*(d-o)}px ${s*8}px`,strokeDashoffset:`-${o/2}px`,transformOrigin:r?`center`:void 0,transform:r?`rotate(${r}deg)`:void 0}}}let i=()=>{let t=typeof e.fillColor==`object`,r=t?e.fillColor.stops[0]:``,i=t?e.fillColor.stops[1]:``;return t&&I(`defs`,null,I(`linearGradient`,{id:n.value,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`},I(`stop`,{offset:`0%`,"stop-color":r}),I(`stop`,{offset:`100%`,"stop-color":i})))};return()=>{let{fillColor:n,railColor:a,strokeWidth:o,offsetDegree:s,status:c,percentage:l,showIndicator:u,indicatorTextColor:d,unit:f,gapOffsetDegree:p,clsPrefix:m}=e,{pathString:h,pathStyle:g}=r(100,0,a,`rail`),{pathString:_,pathStyle:v}=r(l,s,n,`fill`),y=100+o;return I(`div`,{class:`${m}-progress-content`,role:`none`},I(`div`,{class:`${m}-progress-graph`,"aria-hidden":!0},I(`div`,{class:`${m}-progress-graph-circle`,style:{transform:p?`rotate(${p}deg)`:void 0}},I(`svg`,{viewBox:`0 0 ${y} ${y}`},i(),I(`g`,null,I(`path`,{class:`${m}-progress-graph-circle-rail`,d:h,"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:g})),I(`g`,null,I(`path`,{class:[`${m}-progress-graph-circle-fill`,l===0&&`${m}-progress-graph-circle-fill--empty`],d:_,"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:v}))))),u?I(`div`,null,t.default?I(`div`,{class:`${m}-progress-custom-content`,role:`none`},t.default()):c==="default"?I(`div`,{class:`${m}-progress-text`,style:{color:d},role:`none`},I(`span`,{class:`${m}-progress-text__percentage`},l),I(`span`,{class:`${m}-progress-text__unit`},f)):I(`div`,{class:`${m}-progress-icon`,"aria-hidden":!0},I(V,{clsPrefix:m},{default:()=>xe[c]}))):null)}}}),Ce={success:I(Q,null),error:I(Z,null),warning:I(J,null),info:I(X,null)},we=g({name:`ProgressLine`,props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:`%`},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){let n=v(()=>$(e.height)),r=v(()=>typeof e.fillColor==`object`?`linear-gradient(to right, ${e.fillColor?.stops[0]} , ${e.fillColor?.stops[1]})`:e.fillColor),i=v(()=>e.railBorderRadius===void 0?e.height===void 0?``:$(e.height,{c:.5}):$(e.railBorderRadius)),a=v(()=>e.fillBorderRadius===void 0?e.railBorderRadius===void 0?e.height===void 0?``:$(e.height,{c:.5}):$(e.railBorderRadius):$(e.fillBorderRadius));return()=>{let{indicatorPlacement:o,railColor:s,railStyle:c,percentage:l,unit:u,indicatorTextColor:d,status:f,showIndicator:p,processing:m,clsPrefix:h}=e;return I(`div`,{class:`${h}-progress-content`,role:`none`},I(`div`,{class:`${h}-progress-graph`,"aria-hidden":!0},I(`div`,{class:[`${h}-progress-graph-line`,{[`${h}-progress-graph-line--indicator-${o}`]:!0}]},I(`div`,{class:`${h}-progress-graph-line-rail`,style:[{backgroundColor:s,height:n.value,borderRadius:i.value},c]},I(`div`,{class:[`${h}-progress-graph-line-fill`,m&&`${h}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:r.value,height:n.value,lineHeight:n.value,borderRadius:a.value}},o===`inside`?I(`div`,{class:`${h}-progress-graph-line-indicator`,style:{color:d}},t.default?t.default():`${l}${u}`):null)))),p&&o===`outside`?I(`div`,null,t.default?I(`div`,{class:`${h}-progress-custom-content`,style:{color:d},role:`none`},t.default()):f==="default"?I(`div`,{role:`none`,class:`${h}-progress-icon ${h}-progress-icon--as-text`,style:{color:d}},l,u):I(`div`,{class:`${h}-progress-icon`,"aria-hidden":!0},I(V,{clsPrefix:h},{default:()=>Ce[f]}))):null)}}});function Te(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var Ee=g({name:`ProgressMultipleCircle`,props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){let n=v(()=>e.percentage.map((t,n)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`)),r=(t,n)=>{let r=e.fillColor[n],i=typeof r==`object`?r.stops[0]:``,a=typeof r==`object`?r.stops[1]:``;return typeof e.fillColor[n]==`object`&&I(`linearGradient`,{id:`gradient-${n}`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`},I(`stop`,{offset:`0%`,"stop-color":i}),I(`stop`,{offset:`100%`,"stop-color":a}))};return()=>{let{viewBoxWidth:i,strokeWidth:a,circleGap:o,showIndicator:s,fillColor:c,railColor:l,railStyle:u,percentage:d,clsPrefix:f}=e;return I(`div`,{class:`${f}-progress-content`,role:`none`},I(`div`,{class:`${f}-progress-graph`,"aria-hidden":!0},I(`div`,{class:`${f}-progress-graph-circle`},I(`svg`,{viewBox:`0 0 ${i} ${i}`},I(`defs`,null,d.map((e,t)=>r(e,t))),d.map((e,t)=>I(`g`,{key:t},I(`path`,{class:`${f}-progress-graph-circle-rail`,d:Te(i/2-a/2*(1+2*t)-o*t,a,i),"stroke-width":a,"stroke-linecap":`round`,fill:`none`,style:[{strokeDashoffset:0,stroke:l[t]},u[t]]}),I(`path`,{class:[`${f}-progress-graph-circle-fill`,e===0&&`${f}-progress-graph-circle-fill--empty`],d:Te(i/2-a/2*(1+2*t)-o*t,a,i),"stroke-width":a,"stroke-linecap":`round`,fill:`none`,style:{strokeDasharray:n.value[t],strokeDashoffset:0,stroke:typeof c[t]==`object`?`url(#gradient-${t})`:c[t]}})))))),s&&t.default?I(`div`,null,I(`div`,{class:`${f}-progress-text`},t.default())):null)}}}),De=c([r(`progress`,{display:`inline-block`},[r(`progress-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),u(`line`,`
 width: 100%;
 display: block;
 `,[r(`progress-content`,`
 display: flex;
 align-items: center;
 `,[r(`progress-graph`,{flex:1})]),r(`progress-custom-content`,{marginLeft:`14px`}),r(`progress-icon`,`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[u(`as-text`,`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),u(`circle, dashboard`,{width:`120px`},[r(`progress-custom-content`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),r(`progress-text`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),r(`progress-icon`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),u(`multiple-circle`,`
 width: 200px;
 color: inherit;
 `,[r(`progress-text`,`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),r(`progress-content`,{position:`relative`}),r(`progress-graph`,{position:`relative`},[r(`progress-graph-circle`,[c(`svg`,{verticalAlign:`bottom`}),r(`progress-graph-circle-fill`,`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[u(`empty`,{opacity:0})]),r(`progress-graph-circle-rail`,`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),r(`progress-graph-line`,[u(`indicator-inside`,[r(`progress-graph-line-rail`,`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[r(`progress-graph-line-fill`,`
 height: inherit;
 border-radius: 10px;
 `),r(`progress-graph-line-indicator`,`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),u(`indicator-inside-label`,`
 height: 16px;
 display: flex;
 align-items: center;
 `,[r(`progress-graph-line-rail`,`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),r(`progress-graph-line-indicator`,`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),r(`progress-graph-line-rail`,`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[r(`progress-graph-line-fill`,`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[u(`processing`,[c(`&::after`,`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),c(`@keyframes progress-processing-animation`,`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Oe=g({name:`Progress`,props:Object.assign(Object.assign({},z.props),{processing:Boolean,type:{type:String,default:`line`},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:`default`},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:`%`},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:`outside`},indicatorPlacement:{type:String,default:`outside`},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),setup(e){let n=v(()=>e.indicatorPlacement||e.indicatorPosition),r=v(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type===`dashboard`)return 75}),{mergedClsPrefixRef:i,inlineThemeDisabled:a}=D(e),o=z(`Progress`,`-progress`,De,pe,e,i),s=v(()=>{let{status:n}=e,{common:{cubicBezierEaseInOut:r},self:{fontSize:i,fontSizeCircle:a,railColor:s,railHeight:c,iconSizeCircle:l,iconSizeLine:u,textColorCircle:d,textColorLineInner:f,textColorLineOuter:p,lineBgProcessing:m,fontWeightCircle:h,[t(`iconColor`,n)]:g,[t(`fillColor`,n)]:_}}=o.value;return{"--n-bezier":r,"--n-fill-color":_,"--n-font-size":i,"--n-font-size-circle":a,"--n-font-weight-circle":h,"--n-icon-color":g,"--n-icon-size-circle":l,"--n-icon-size-line":u,"--n-line-bg-processing":m,"--n-rail-color":s,"--n-rail-height":c,"--n-text-color-circle":d,"--n-text-color-line-inner":f,"--n-text-color-line-outer":p}}),c=a?F(`progress`,v(()=>e.status[0]),s,e):void 0;return{mergedClsPrefix:i,mergedIndicatorPlacement:n,gapDeg:r,cssVars:a?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{type:e,cssVars:t,indicatorTextColor:n,showIndicator:r,status:i,railColor:a,railStyle:o,color:s,percentage:c,viewBoxWidth:l,strokeWidth:u,mergedIndicatorPlacement:d,unit:f,borderRadius:p,fillBorderRadius:m,height:h,processing:g,circleGap:_,mergedClsPrefix:v,gapDeg:y,gapOffsetDegree:b,themeClass:x,$slots:S,onRender:C}=this;return C?.(),I(`div`,{class:[x,`${v}-progress`,`${v}-progress--${e}`,`${v}-progress--${i}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,role:e===`circle`||e===`line`||e===`dashboard`?`progressbar`:`none`},e===`circle`||e===`dashboard`?I(Se,{clsPrefix:v,status:i,showIndicator:r,indicatorTextColor:n,railColor:a,fillColor:s,railStyle:o,offsetDegree:this.offsetDegree,percentage:c,viewBoxWidth:l,strokeWidth:u,gapDegree:y===void 0?e===`dashboard`?75:0:y,gapOffsetDegree:b,unit:f},S):e===`line`?I(we,{clsPrefix:v,status:i,showIndicator:r,indicatorTextColor:n,railColor:a,fillColor:s,railStyle:o,percentage:c,processing:g,indicatorPlacement:d,unit:f,fillBorderRadius:m,railBorderRadius:p,height:h},S):e===`multiple-circle`?I(Ee,{clsPrefix:v,strokeWidth:u,railColor:a,fillColor:s,railStyle:o,viewBoxWidth:l,percentage:c,showIndicator:r,circleGap:_},S):null)}}),ke={class:`home-view`},Ae={class:`hero-section`},je={class:`hero-content`},Me={class:`hero-status`},Ne={key:0,class:`update-time`},Pe={class:`mode-switch-bar`},Fe={class:`mode-switch-inner`},Ie={class:`mode-left`},Le={class:`mode-right`},Re={class:`mode-desc`},ze={class:`metric-grid`},Be={class:`metric-inner`},Ve={class:`metric-icon`},He={class:`metric-info`},Ue={class:`metric-label`},We={class:`summary-body`},Ge={class:`summary-label`},Ke={class:`summary-value`},qe={key:0,class:`empty-hint`},Je={class:`timeline-list`},Ye={class:`timeline-time`},Xe={class:`timeline-text`},Ze={key:0,class:`empty-hint`},Qe={key:0,class:`chart-trend`},$e={class:`trend-bars`},et={class:`bar-wrapper`},tt={class:`bar-label`},nt={key:1,class:`empty-hint`},rt={key:0,class:`chart-pie`},it={viewBox:`0 0 160 160`,class:`pie-svg`},at=[`stroke`,`stroke-dasharray`,`stroke-dashoffset`],ot={class:`pie-legend`},st={key:1,class:`empty-hint`},ct={key:0,class:`chart-bar`},lt={class:`bar-row-name`},ut={class:`bar-row-val`},dt={key:1,class:`empty-hint`},ft={class:`health-grid`},pt={class:`health-item`},mt={class:`health-left`},ht={class:`health-name`},gt={class:`health-detail`},_t=`wfbot_data_mode`,vt=N(g({__name:`HomeView`,setup(t){let n=fe(),r=de(),a=ue(),o=i(localStorage.getItem(_t)||`demo`);C(o,e=>{localStorage.setItem(_t,e)});let s=v(()=>o.value===`demo`),c=v(()=>a.hasAnyCredential),u=v(()=>o.value===`real`&&!c.value),f=[{label:`今日提交`,value:12,unit:`次`,icon:`📝`,color:`var(--primary)`},{label:`任务完成率`,value:78,unit:`%`,icon:`✅`,color:`var(--success)`},{label:`活跃成员`,value:8,unit:`人`,icon:`👥`,color:`var(--info)`},{label:`代码变更`,value:2840,unit:`行`,icon:`📊`,color:`var(--warning)`}],g=[{label:`活跃仓库`,value:3},{label:`新增 Issue`,value:7},{label:`已关闭 Issue`,value:5},{label:`代码审查`,value:12},{label:`发布版本`,value:2}],_=[{time:`10:30`,text:`张三 提交了 dashboard 模块更新`,type:`commit`},{time:`09:45`,text:`李四 合并了 PR #128 feature/user-auth`,type:`pr`},{time:`09:15`,text:`蛋挞 提交了 3 个 commit 到 feat/api-optimize`,type:`commit`},{time:`09:00`,text:`飞书审批单 #20240709-001 已通过`,type:`approval`},{time:`08:30`,text:`每日站会纪要已自动生成`,type:`meeting`}],y=[{name:`周一`,commits:12,prs:5},{name:`周二`,commits:18,prs:8},{name:`周三`,commits:15,prs:6},{name:`周四`,commits:22,prs:10},{name:`周五`,commits:16,prs:7},{name:`周六`,commits:8,prs:3},{name:`周日`,commits:4,prs:1}],b=[{name:`前端`,value:35,color:`#6C5CE7`},{name:`后端`,value:28,color:`#00B894`},{name:`DevOps`,value:15,color:`#FDCB6E`},{name:`测试`,value:12,color:`#FF7675`},{name:`文档`,value:10,color:`#74B9FF`}],w=[{name:`张三`,commits:24,prs:6},{name:`李四`,commits:18,prs:8},{name:`王五`,commits:15,prs:4},{name:`赵六`,commits:12,prs:3},{name:`孙七`,commits:9,prs:2},{name:`蛋挞`,commits:20,prs:5}],D=[{name:`GitHub 连接`,status:`ok`,value:`正常`,detail:`API 响应时间 120ms`},{name:`飞书连接`,status:`ok`,value:`正常`,detail:`Token 有效期至 2026-08-01`},{name:`天气服务`,status:`warning`,value:`延迟`,detail:`API 响应时间 2.3s`},{name:`AI 服务`,status:`ok`,value:`正常`,detail:`模型 DeepSeek-V4 可用`}],k=v(()=>[{label:`今日提交`,value:n.stats?.commits??0,unit:`次`,icon:`📝`,color:`var(--primary)`},{label:`任务完成率`,value:n.stats?.taskRate??0,unit:`%`,icon:`✅`,color:`var(--success)`},{label:`活跃成员`,value:n.stats?.members??0,unit:`人`,icon:`👥`,color:`var(--info)`},{label:`代码变更`,value:n.stats?.changes??0,unit:`行`,icon:`📊`,color:`var(--warning)`}]),M=v(()=>[{label:`活跃仓库`,value:n.stats?.activeRepos??0},{label:`新增 Issue`,value:n.stats?.newIssues??0},{label:`已关闭 Issue`,value:n.stats?.closedIssues??0},{label:`代码审查`,value:n.stats?.reviews??0},{label:`发布版本`,value:n.stats?.releases??0}]),N=v(()=>{let e=n.updates;return e.length===0?[]:e.slice(0,6).map(e=>({time:e.time?new Date(e.time).toLocaleTimeString(`zh-CN`,{hour:`2-digit`,minute:`2-digit`}):`--`,text:`${e.author} ${e.content}`,type:e.source}))}),F=v(()=>s.value?f:k.value),I=v(()=>s.value?g:M.value),L=v(()=>s.value?_:N.value),z=v(()=>s.value?y:[]),B=v(()=>s.value?b:[]),V=v(()=>s.value?w:[]),H=v(()=>s.value?D:[]),U=i(!1),W=v(()=>s.value?{type:`success`,text:`演示模式运行中`}:c.value?{type:`success`,text:`系统运行中`}:{type:`warning`,text:`未配置凭证，请先配置连接`});return ee(async()=>{s.value?await n.loadDemoData():await n.loadRealData(),r.updateTime()}),C(o,async e=>{e===`demo`?await n.loadDemoData():await n.loadRealData()}),(t,i)=>(d(),x(`div`,ke,[P(`section`,Ae,[P(`div`,je,[i[2]||=P(`h1`,{class:`hero-title`},`团队工作流智能看板`,-1),i[3]||=P(`p`,{class:`hero-subtitle`},`实时追踪团队动态，智能分析开发效能`,-1),P(`div`,Me,[j(p(Y),{type:W.value.type,round:``,size:`large`},{icon:S(()=>[P(`span`,{class:h([`status-dot`,W.value.type])},null,2)]),default:S(()=>[O(` `+e(W.value.text),1)]),_:1},8,[`type`]),p(r).lastUpdateTime?(d(),x(`span`,Ne,` 最后更新: `+e(p(r).lastUpdateTime),1)):A(``,!0)])])]),P(`div`,Pe,[P(`div`,Fe,[P(`div`,Ie,[i[6]||=P(`span`,{class:`mode-label`},`数据模式`,-1),j(p(ae),{value:o.value===`real`,"onUpdate:value":i[0]||=e=>o.value=e?`real`:`demo`},{checked:S(()=>[...i[4]||=[P(`span`,{style:{"font-size":`0.75rem`,padding:`0 4px`}},`真实`,-1)]]),unchecked:S(()=>[...i[5]||=[P(`span`,{style:{"font-size":`0.75rem`,padding:`0 4px`}},`虚拟`,-1)]]),_:1},8,[`value`])]),P(`div`,Le,[j(p(Y),{type:s.value?`info`:`success`,size:`small`,round:``},{default:S(()=>[O(e(s.value?`📺 虚拟演示数据`:`🔗 真实 API 数据`),1)]),_:1},8,[`type`]),P(`span`,Re,e(s.value?`展示预设的模拟数据，用于预览和演示`:`连接已配置的平台 API，拉取真实数据`),1)])])]),u.value?(d(),E(p(ie),{key:0,type:`warning`,bordered:!1,closable:``,class:`cred-warning`},{header:S(()=>[...i[7]||=[O(` 尚未配置平台凭证，请点击右上角头像 →「管理凭证」配置 GitHub、飞书等平台连接。 `,-1)]]),_:1})):A(``,!0),P(`div`,ze,[(d(!0),x(m,null,R(F.value,t=>(d(),E(p(T),{key:t.label,class:`metric-card card-hover`},{default:S(()=>[P(`div`,Be,[P(`span`,Ve,e(t.icon),1),P(`div`,He,[P(`span`,Ue,e(t.label),1),P(`span`,{class:`metric-value`,style:l({color:t.color})},[O(e(p(n).loading&&!s.value?`--`:t.value)+` `,1),P(`small`,null,e(t.unit),1)],4)])])]),_:2},1024))),128))]),j(p(q),{cols:12,"x-gap":20,"y-gap":20},{default:S(()=>[j(p(K),{span:7},{default:S(()=>[j(p(T),{title:`📋 今日概览`,class:`summary-card`},{default:S(()=>[j(p(oe),{show:p(n).loading&&!s.value},{default:S(()=>[P(`div`,We,[(d(!0),x(m,null,R(I.value,t=>(d(),x(`div`,{key:t.label,class:`summary-row`},[P(`span`,Ge,e(t.label),1),P(`span`,Ke,e(t.value),1)]))),128)),I.value.length===0&&!s.value?(d(),x(`div`,qe,` 暂无数据，请确认已配置平台凭证 `)):A(``,!0)])]),_:1},8,[`show`])]),_:1})]),_:1}),j(p(K),{span:5},{default:S(()=>[j(p(T),{title:`🕐 动态时间线`,class:`timeline-card`},{default:S(()=>[P(`div`,Je,[(d(!0),x(m,null,R(L.value,(t,n)=>(d(),x(`div`,{key:n,class:`timeline-item`},[P(`span`,Ye,e(t.time),1),i[8]||=P(`span`,{class:`timeline-dot`},null,-1),P(`span`,Xe,e(t.text),1)]))),128)),L.value.length===0&&!s.value?(d(),x(`div`,Ze,` 暂无动态 `)):A(``,!0)])]),_:1})]),_:1})]),_:1}),j(p(q),{cols:3,"x-gap":20,"y-gap":20,class:`chart-grid`},{default:S(()=>[j(p(K),null,{default:S(()=>[j(p(T),{title:`📈 提交趋势 (本周)`},{default:S(()=>[z.value.length>0?(d(),x(`div`,Qe,[P(`div`,$e,[(d(!0),x(m,null,R(z.value,t=>(d(),x(`div`,{key:t.name,class:`trend-bar-group`},[P(`div`,et,[P(`div`,{class:`bar bar-commits`,style:l({height:t.commits/22*120+`px`})},null,4),P(`div`,{class:`bar bar-prs`,style:l({height:t.prs/10*120+`px`})},null,4)]),P(`span`,tt,e(t.name),1)]))),128))]),i[9]||=P(`div`,{class:`chart-legend`},[P(`span`,{class:`legend-item`},[P(`span`,{class:`legend-dot`,style:{background:`#6C5CE7`}}),O(` 提交`)]),P(`span`,{class:`legend-item`},[P(`span`,{class:`legend-dot`,style:{background:`#A29BFE`}}),O(` PR`)])],-1)])):(d(),x(`div`,nt,`暂无趋势数据，请配置 GitHub 凭证`))]),_:1})]),_:1}),j(p(K),null,{default:S(()=>[j(p(T),{title:`🍩 任务分布`},{default:S(()=>[B.value.length>0?(d(),x(`div`,rt,[(d(),x(`svg`,it,[i[10]||=P(`circle`,{cx:`80`,cy:`80`,r:`60`,fill:`none`,stroke:`#eee`,"stroke-width":`20`},null,-1),(d(!0),x(m,null,R(B.value,(e,t)=>(d(),x(`circle`,{key:e.name,cx:`80`,cy:`80`,r:`60`,fill:`none`,stroke:e.color,"stroke-width":`20`,"stroke-dasharray":`${e.value/100*377} 377`,"stroke-dashoffset":B.value.slice(0,t).reduce((e,t)=>e-t.value/100*377,0),transform:`rotate(-90 80 80)`},null,8,at))),128))])),P(`div`,ot,[(d(!0),x(m,null,R(B.value,t=>(d(),x(`span`,{key:t.name,class:`pie-legend-item`},[P(`span`,{class:`pie-dot`,style:l({background:t.color})},null,4),O(` `+e(t.name)+` `+e(t.value)+`% `,1)]))),128))])])):(d(),x(`div`,st,`暂无任务分布数据`))]),_:1})]),_:1}),j(p(K),null,{default:S(()=>[j(p(T),{title:`👤 成员活跃度`},{default:S(()=>[V.value.length>0?(d(),x(`div`,ct,[(d(!0),x(m,null,R(V.value,t=>(d(),x(`div`,{key:t.name,class:`bar-row`},[P(`span`,lt,e(t.name),1),j(p(Oe),{percentage:Math.round(t.commits/24*100),height:20,"border-radius":10,color:`#6C5CE7`,"rail-color":`var(--bg-input)`,"show-indicator":!1},null,8,[`percentage`]),P(`span`,ut,e(t.commits)+`次`,1)]))),128))])):(d(),x(`div`,dt,`暂无活跃度数据`))]),_:1})]),_:1})]),_:1}),j(p(ve),{"expanded-names":U.value?[`health`]:[],"onUpdate:expandedNames":i[1]||=e=>U.value=e.includes(`health`)},{default:S(()=>[j(p(be),{name:`health`},{header:S(()=>[...i[11]||=[P(`span`,{class:`health-header`},`🏥 系统健康检查`,-1)]]),default:S(()=>[P(`div`,ft,[(d(!0),x(m,null,R(H.value,t=>(d(),E(p(T),{key:t.name,size:`small`,class:`health-card`},{default:S(()=>[P(`div`,pt,[P(`div`,mt,[P(`span`,ht,e(t.name),1),P(`span`,gt,e(t.detail),1)]),j(p(Y),{type:t.status===`ok`?`success`:t.status===`warning`?`warning`:`error`,size:`small`,round:``},{default:S(()=>[O(e(t.value),1)]),_:2},1032,[`type`])])]),_:2},1024))),128))])]),_:1})]),_:1},8,[`expanded-names`])]))}}),[[`__scopeId`,`data-v-15cd8a30`]]);export{vt as default};