import{An as e,Bt as t,Cn as n,Ft as r,Jt as i,Kn as a,Lt as o,On as s,Pt as c,Qn as l,Rt as u,Sn as d,Vn as f,Wt as p,Xn as m,Xt as h,Yn as g,Zn as _,an as v,dn as y,dt as b,en as x,ft as S,in as C,jn as w,ln as T,lt as E,n as D,nn as O,nt as k,on as A,rn as j,sn as M,st as N,t as P,tn as F,tt as I,vn as ee,w as L,x as R,xn as z,xt as B,y as V,yt as H,zt as U}from"./_plugin-vue_export-helper-CCvUJjhJ.js";import{n as W}from"./auth-D2LWN8vt.js";import{t as G}from"./happens-in-Bbk4beju.js";import{n as K,t as q}from"./Grid-uhgRNESE.js";import{t as te}from"./misc-v7XGxIq4.js";import{t as ne}from"./use-false-until-truthy-CeMx39VY.js";import{t as re}from"./use-merged-state-CF77hr3s.js";import{t as ie}from"./Alert-Bt7NaasX.js";import{t as ae}from"./Switch-SVkNyhjF.js";import{t as oe}from"./Spin-BFoEh8EG.js";import{F as J,I as se,M as Y,N as X,P as Z,S as ce,T as Q,V as $,d as le,n as ue,r as de,t as fe,v as pe}from"./index-OlDhySiI.js";var me=M({name:`ChevronLeft`,render(){return T(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},T(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`}))}}),he=r(`collapse`,`width: 100%;`,[r(`collapse-item`,`
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
 `)])])]),ge=Object.assign(Object.assign({},R.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:`left`},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:`if`},triggerAreas:{type:Array,default:()=>[`main`,`extra`,`arrow`]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),_e=H(`n-collapse`),ve=M({name:`Collapse`,props:ge,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=k(e),a=f(e.defaultExpandedNames),o=re(x(()=>e.expandedNames),a),s=R(`Collapse`,`-collapse`,he,pe,e,n);function c(t){let{"onUpdate:expandedNames":n,onUpdateExpandedNames:r,onExpandedNamesChange:i}=e;r&&b(r,t),n&&b(n,t),i&&b(i,t),a.value=t}function l(t){let{onItemHeaderClick:n}=e;n&&b(n,t)}function u(t,n,r){let{accordion:i}=e,{value:a}=o;if(i)t?(c([n]),l({name:n,expanded:!0,event:r})):(c([]),l({name:n,expanded:!1,event:r}));else if(!Array.isArray(a))c([n]),l({name:n,expanded:!0,event:r});else{let e=a.slice(),t=e.findIndex(e=>n===e);~t?(e.splice(t,1),c(e),l({name:n,expanded:!1,event:r})):(e.push(n),c(e),l({name:n,expanded:!0,event:r}))}}d(_e,{props:e,mergedClsPrefixRef:n,expandedNamesRef:o,slots:t,toggleItem:u});let p=L(`Collapse`,i,n),m=x(()=>{let{common:{cubicBezierEaseInOut:e},self:{titleFontWeight:t,dividerColor:n,titlePadding:r,titleTextColor:i,titleTextColorDisabled:a,textColor:o,arrowColor:c,fontSize:l,titleFontSize:u,arrowColorDisabled:d,itemMargin:f}}=s.value;return{"--n-font-size":l,"--n-bezier":e,"--n-text-color":o,"--n-divider-color":n,"--n-title-padding":r,"--n-title-font-size":u,"--n-title-text-color":i,"--n-title-text-color-disabled":a,"--n-title-font-weight":t,"--n-arrow-color":c,"--n-arrow-color-disabled":d,"--n-item-margin":f}}),h=r?I(`collapse`,void 0,m,e):void 0;return{rtlEnabled:p,mergedTheme:s,mergedClsPrefix:n,cssVars:r?void 0:m,themeClass:h?.themeClass,onRender:h?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),T(`div`,{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),ye=M({name:`CollapseItemContent`,props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:ne(a(e,`show`))}},render(){return T(W,null,{default:()=>{let{show:e,displayDirective:t,onceTrue:n,clsPrefix:r}=this,a=t===`show`&&n,o=T(`div`,{class:`${r}-collapse-item__content-wrapper`},T(`div`,{class:`${r}-collapse-item__content-inner`},this.$slots));return a?w(o,[[i,e]]):e?o:null}})}}),be=M({name:`CollapseItem`,props:{title:String,name:[String,Number],disabled:Boolean,displayDirective:String},setup(e){let{mergedRtlRef:t}=k(e),n=te(),r=B(()=>e.name??n),i=y(_e);i||S(`collapse-item`,"`n-collapse-item` must be placed inside `n-collapse`.");let{expandedNamesRef:o,props:s,mergedClsPrefixRef:c,slots:l}=i,u=x(()=>{let{value:e}=o;if(Array.isArray(e)){let{value:t}=r;return!~e.findIndex(e=>e===t)}else if(e){let{value:t}=r;return t!==e}return!0});return{rtlEnabled:L(`Collapse`,t,c),collapseSlots:l,randomName:n,mergedClsPrefix:c,collapsed:u,triggerAreas:a(s,`triggerAreas`),mergedDisplayDirective:x(()=>{let{displayDirective:t}=e;return t||s.displayDirective}),arrowPlacement:x(()=>s.arrowPlacement),handleClick(t){let n=`main`;G(t,`arrow`)&&(n=`arrow`),G(t,`extra`)&&(n=`extra`),s.triggerAreas.includes(n)&&i&&!e.disabled&&i.toggleItem(u.value,r.value,t)}}},render(){let{collapseSlots:e,$slots:t,arrowPlacement:n,collapsed:r,mergedDisplayDirective:i,mergedClsPrefix:a,disabled:o,triggerAreas:s}=this,c=N(t.header,{collapsed:r},()=>[this.title]),l=t[`header-extra`]||e[`header-extra`],u=t.arrow||e.arrow;return T(`div`,{class:[`${a}-collapse-item`,`${a}-collapse-item--${n}-arrow-placement`,o&&`${a}-collapse-item--disabled`,!r&&`${a}-collapse-item--active`,s.map(e=>`${a}-collapse-item--trigger-area-${e}`)]},T(`div`,{class:[`${a}-collapse-item__header`,!r&&`${a}-collapse-item__header--active`]},T(`div`,{class:`${a}-collapse-item__header-main`,onClick:this.handleClick},n===`right`&&c,T(`div`,{class:`${a}-collapse-item-arrow`,key:+!this.rtlEnabled,"data-arrow":!0},N(u,{collapsed:r},()=>[T(V,{clsPrefix:a},{default:()=>this.rtlEnabled?T(me,null):T(se,null)})])),n===`left`&&c),E(l,{collapsed:r},e=>T(`div`,{class:`${a}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},e))),T(ye,{clsPrefix:a,displayDirective:i,show:!r},t))}}),xe={success:T(X,null),error:T(J,null),warning:T(Y,null),info:T(Z,null)},Se=M({name:`ProgressCircle`,props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){let n=x(()=>{let t=`gradient`,{fillColor:n}=e;return typeof n==`object`?`${t}-${p(JSON.stringify(n))}`:t});function r(t,r,i,a){let{gapDegree:o,viewBoxWidth:s,strokeWidth:c}=e,l=50+c/2,u=`M ${l},${l} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`,d=Math.PI*2*50;return{pathString:u,pathStyle:{stroke:a===`rail`?i:typeof e.fillColor==`object`?`url(#${n.value})`:i,strokeDasharray:`${Math.min(t,100)/100*(d-o)}px ${s*8}px`,strokeDashoffset:`-${o/2}px`,transformOrigin:r?`center`:void 0,transform:r?`rotate(${r}deg)`:void 0}}}let i=()=>{let t=typeof e.fillColor==`object`,r=t?e.fillColor.stops[0]:``,i=t?e.fillColor.stops[1]:``;return t&&T(`defs`,null,T(`linearGradient`,{id:n.value,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`},T(`stop`,{offset:`0%`,"stop-color":r}),T(`stop`,{offset:`100%`,"stop-color":i})))};return()=>{let{fillColor:n,railColor:a,strokeWidth:o,offsetDegree:s,status:c,percentage:l,showIndicator:u,indicatorTextColor:d,unit:f,gapOffsetDegree:p,clsPrefix:m}=e,{pathString:h,pathStyle:g}=r(100,0,a,`rail`),{pathString:_,pathStyle:v}=r(l,s,n,`fill`),y=100+o;return T(`div`,{class:`${m}-progress-content`,role:`none`},T(`div`,{class:`${m}-progress-graph`,"aria-hidden":!0},T(`div`,{class:`${m}-progress-graph-circle`,style:{transform:p?`rotate(${p}deg)`:void 0}},T(`svg`,{viewBox:`0 0 ${y} ${y}`},i(),T(`g`,null,T(`path`,{class:`${m}-progress-graph-circle-rail`,d:h,"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:g})),T(`g`,null,T(`path`,{class:[`${m}-progress-graph-circle-fill`,l===0&&`${m}-progress-graph-circle-fill--empty`],d:_,"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:v}))))),u?T(`div`,null,t.default?T(`div`,{class:`${m}-progress-custom-content`,role:`none`},t.default()):c==="default"?T(`div`,{class:`${m}-progress-text`,style:{color:d},role:`none`},T(`span`,{class:`${m}-progress-text__percentage`},l),T(`span`,{class:`${m}-progress-text__unit`},f)):T(`div`,{class:`${m}-progress-icon`,"aria-hidden":!0},T(V,{clsPrefix:m},{default:()=>xe[c]}))):null)}}}),Ce={success:T(X,null),error:T(J,null),warning:T(Y,null),info:T(Z,null)},we=M({name:`ProgressLine`,props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:`%`},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){let n=x(()=>$(e.height)),r=x(()=>typeof e.fillColor==`object`?`linear-gradient(to right, ${e.fillColor?.stops[0]} , ${e.fillColor?.stops[1]})`:e.fillColor),i=x(()=>e.railBorderRadius===void 0?e.height===void 0?``:$(e.height,{c:.5}):$(e.railBorderRadius)),a=x(()=>e.fillBorderRadius===void 0?e.railBorderRadius===void 0?e.height===void 0?``:$(e.height,{c:.5}):$(e.railBorderRadius):$(e.fillBorderRadius));return()=>{let{indicatorPlacement:o,railColor:s,railStyle:c,percentage:l,unit:u,indicatorTextColor:d,status:f,showIndicator:p,processing:m,clsPrefix:h}=e;return T(`div`,{class:`${h}-progress-content`,role:`none`},T(`div`,{class:`${h}-progress-graph`,"aria-hidden":!0},T(`div`,{class:[`${h}-progress-graph-line`,{[`${h}-progress-graph-line--indicator-${o}`]:!0}]},T(`div`,{class:`${h}-progress-graph-line-rail`,style:[{backgroundColor:s,height:n.value,borderRadius:i.value},c]},T(`div`,{class:[`${h}-progress-graph-line-fill`,m&&`${h}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:r.value,height:n.value,lineHeight:n.value,borderRadius:a.value}},o===`inside`?T(`div`,{class:`${h}-progress-graph-line-indicator`,style:{color:d}},t.default?t.default():`${l}${u}`):null)))),p&&o===`outside`?T(`div`,null,t.default?T(`div`,{class:`${h}-progress-custom-content`,style:{color:d},role:`none`},t.default()):f==="default"?T(`div`,{role:`none`,class:`${h}-progress-icon ${h}-progress-icon--as-text`,style:{color:d}},l,u):T(`div`,{class:`${h}-progress-icon`,"aria-hidden":!0},T(V,{clsPrefix:h},{default:()=>Ce[f]}))):null)}}});function Te(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var Ee=M({name:`ProgressMultipleCircle`,props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){let n=x(()=>e.percentage.map((t,n)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`)),r=(t,n)=>{let r=e.fillColor[n],i=typeof r==`object`?r.stops[0]:``,a=typeof r==`object`?r.stops[1]:``;return typeof e.fillColor[n]==`object`&&T(`linearGradient`,{id:`gradient-${n}`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`},T(`stop`,{offset:`0%`,"stop-color":i}),T(`stop`,{offset:`100%`,"stop-color":a}))};return()=>{let{viewBoxWidth:i,strokeWidth:a,circleGap:o,showIndicator:s,fillColor:c,railColor:l,railStyle:u,percentage:d,clsPrefix:f}=e;return T(`div`,{class:`${f}-progress-content`,role:`none`},T(`div`,{class:`${f}-progress-graph`,"aria-hidden":!0},T(`div`,{class:`${f}-progress-graph-circle`},T(`svg`,{viewBox:`0 0 ${i} ${i}`},T(`defs`,null,d.map((e,t)=>r(e,t))),d.map((e,t)=>T(`g`,{key:t},T(`path`,{class:`${f}-progress-graph-circle-rail`,d:Te(i/2-a/2*(1+2*t)-o*t,a,i),"stroke-width":a,"stroke-linecap":`round`,fill:`none`,style:[{strokeDashoffset:0,stroke:l[t]},u[t]]}),T(`path`,{class:[`${f}-progress-graph-circle-fill`,e===0&&`${f}-progress-graph-circle-fill--empty`],d:Te(i/2-a/2*(1+2*t)-o*t,a,i),"stroke-width":a,"stroke-linecap":`round`,fill:`none`,style:{strokeDasharray:n.value[t],strokeDashoffset:0,stroke:typeof c[t]==`object`?`url(#gradient-${t})`:c[t]}})))))),s&&t.default?T(`div`,null,T(`div`,{class:`${f}-progress-text`},t.default())):null)}}}),De=c([r(`progress`,{display:`inline-block`},[r(`progress-icon`,`
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
 `)]),Oe=M({name:`Progress`,props:Object.assign(Object.assign({},R.props),{processing:Boolean,type:{type:String,default:`line`},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:`default`},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:`%`},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:`outside`},indicatorPlacement:{type:String,default:`outside`},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),setup(e){let n=x(()=>e.indicatorPlacement||e.indicatorPosition),r=x(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type===`dashboard`)return 75}),{mergedClsPrefixRef:i,inlineThemeDisabled:a}=k(e),o=R(`Progress`,`-progress`,De,le,e,i),s=x(()=>{let{status:n}=e,{common:{cubicBezierEaseInOut:r},self:{fontSize:i,fontSizeCircle:a,railColor:s,railHeight:c,iconSizeCircle:l,iconSizeLine:u,textColorCircle:d,textColorLineInner:f,textColorLineOuter:p,lineBgProcessing:m,fontWeightCircle:h,[t(`iconColor`,n)]:g,[t(`fillColor`,n)]:_}}=o.value;return{"--n-bezier":r,"--n-fill-color":_,"--n-font-size":i,"--n-font-size-circle":a,"--n-font-weight-circle":h,"--n-icon-color":g,"--n-icon-size-circle":l,"--n-icon-size-line":u,"--n-line-bg-processing":m,"--n-rail-color":s,"--n-rail-height":c,"--n-text-color-circle":d,"--n-text-color-line-inner":f,"--n-text-color-line-outer":p}}),c=a?I(`progress`,x(()=>e.status[0]),s,e):void 0;return{mergedClsPrefix:i,mergedIndicatorPlacement:n,gapDeg:r,cssVars:a?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{type:e,cssVars:t,indicatorTextColor:n,showIndicator:r,status:i,railColor:a,railStyle:o,color:s,percentage:c,viewBoxWidth:l,strokeWidth:u,mergedIndicatorPlacement:d,unit:f,borderRadius:p,fillBorderRadius:m,height:h,processing:g,circleGap:_,mergedClsPrefix:v,gapDeg:y,gapOffsetDegree:b,themeClass:x,$slots:S,onRender:C}=this;return C?.(),T(`div`,{class:[x,`${v}-progress`,`${v}-progress--${e}`,`${v}-progress--${i}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,role:e===`circle`||e===`line`||e===`dashboard`?`progressbar`:`none`},e===`circle`||e===`dashboard`?T(Se,{clsPrefix:v,status:i,showIndicator:r,indicatorTextColor:n,railColor:a,fillColor:s,railStyle:o,offsetDegree:this.offsetDegree,percentage:c,viewBoxWidth:l,strokeWidth:u,gapDegree:y===void 0?e===`dashboard`?75:0:y,gapOffsetDegree:b,unit:f},S):e===`line`?T(we,{clsPrefix:v,status:i,showIndicator:r,indicatorTextColor:n,railColor:a,fillColor:s,railStyle:o,percentage:c,processing:g,indicatorPlacement:d,unit:f,fillBorderRadius:m,railBorderRadius:p,height:h},S):e===`multiple-circle`?T(Ee,{clsPrefix:v,strokeWidth:u,railColor:a,fillColor:s,railStyle:o,viewBoxWidth:l,percentage:c,showIndicator:r,circleGap:_},S):null)}}),ke={class:`home-view`},Ae={class:`hero-section`},je={class:`hero-content`},Me={class:`hero-status`},Ne={key:0,class:`update-time`},Pe={class:`mode-switch-bar`},Fe={class:`mode-switch-inner`},Ie={class:`mode-left`},Le={class:`mode-right`},Re={class:`mode-desc`},ze={class:`metric-grid`},Be={class:`metric-inner`},Ve={class:`metric-icon`},He={class:`metric-info`},Ue={class:`metric-label`},We={class:`summary-body`},Ge={class:`summary-label`},Ke={class:`summary-value`},qe={key:0,class:`empty-hint`},Je={class:`timeline-list`},Ye={class:`timeline-time`},Xe={class:`timeline-text`},Ze={key:0,class:`empty-hint`},Qe={key:0,class:`chart-trend`},$e={class:`trend-bars`},et={class:`bar-wrapper`},tt={class:`bar-label`},nt={key:1,class:`empty-hint`},rt={key:0,class:`chart-pie`},it={viewBox:`0 0 160 160`,class:`pie-svg`},at=[`stroke`,`stroke-dasharray`,`stroke-dashoffset`],ot={class:`pie-legend`},st={key:1,class:`empty-hint`},ct={key:0,class:`chart-bar`},lt={class:`bar-row-name`},ut={class:`bar-row-val`},dt={key:1,class:`empty-hint`},ft={class:`health-grid`},pt={class:`health-item`},mt={class:`health-left`},ht={class:`health-name`},gt={class:`health-detail`},_t=`wfbot_data_mode`,vt=P(M({__name:`HomeView`,setup(t){let r=fe(),i=de(),a=ue(),o=f(localStorage.getItem(_t)||`demo`);s(o,e=>{localStorage.setItem(_t,e)});let c=x(()=>o.value===`demo`),u=x(()=>a.hasAnyCredential),d=x(()=>o.value===`real`&&!u.value),p=[{label:`今日提交`,value:12,unit:`次`,icon:`📝`,color:`var(--primary)`},{label:`任务完成率`,value:78,unit:`%`,icon:`✅`,color:`var(--success)`},{label:`活跃成员`,value:8,unit:`人`,icon:`👥`,color:`var(--info)`},{label:`代码变更`,value:2840,unit:`行`,icon:`📊`,color:`var(--warning)`}],y=[{label:`活跃仓库`,value:3},{label:`新增 Issue`,value:7},{label:`已关闭 Issue`,value:5},{label:`代码审查`,value:12},{label:`发布版本`,value:2}],b=[{time:`10:30`,text:`张三 提交了 dashboard 模块更新`,type:`commit`},{time:`09:45`,text:`李四 合并了 PR #128 feature/user-auth`,type:`pr`},{time:`09:15`,text:`蛋挞 提交了 3 个 commit 到 feat/api-optimize`,type:`commit`},{time:`09:00`,text:`飞书审批单 #20240709-001 已通过`,type:`approval`},{time:`08:30`,text:`每日站会纪要已自动生成`,type:`meeting`}],S=[{name:`周一`,commits:12,prs:5},{name:`周二`,commits:18,prs:8},{name:`周三`,commits:15,prs:6},{name:`周四`,commits:22,prs:10},{name:`周五`,commits:16,prs:7},{name:`周六`,commits:8,prs:3},{name:`周日`,commits:4,prs:1}],w=[{name:`前端`,value:35,color:`#6C5CE7`},{name:`后端`,value:28,color:`#00B894`},{name:`DevOps`,value:15,color:`#FDCB6E`},{name:`测试`,value:12,color:`#FF7675`},{name:`文档`,value:10,color:`#74B9FF`}],T=[{name:`张三`,commits:24,prs:6},{name:`李四`,commits:18,prs:8},{name:`王五`,commits:15,prs:4},{name:`赵六`,commits:12,prs:3},{name:`孙七`,commits:9,prs:2},{name:`蛋挞`,commits:20,prs:5}],E=[{name:`GitHub 连接`,status:`ok`,value:`正常`,detail:`API 响应时间 120ms`},{name:`飞书连接`,status:`ok`,value:`正常`,detail:`Token 有效期至 2026-08-01`},{name:`天气服务`,status:`warning`,value:`延迟`,detail:`API 响应时间 2.3s`},{name:`AI 服务`,status:`ok`,value:`正常`,detail:`模型 DeepSeek-V4 可用`}],k=x(()=>[{label:`今日提交`,value:r.stats?.commits??0,unit:`次`,icon:`📝`,color:`var(--primary)`},{label:`任务完成率`,value:r.stats?.taskRate??0,unit:`%`,icon:`✅`,color:`var(--success)`},{label:`活跃成员`,value:r.stats?.members??0,unit:`人`,icon:`👥`,color:`var(--info)`},{label:`代码变更`,value:r.stats?.changes??0,unit:`行`,icon:`📊`,color:`var(--warning)`}]),M=x(()=>[{label:`活跃仓库`,value:r.stats?.activeRepos??0},{label:`新增 Issue`,value:r.stats?.newIssues??0},{label:`已关闭 Issue`,value:r.stats?.closedIssues??0},{label:`代码审查`,value:r.stats?.reviews??0},{label:`发布版本`,value:r.stats?.releases??0}]),N=x(()=>{let e=r.updates;return e.length===0?[]:e.slice(0,6).map(e=>({time:e.time?new Date(e.time).toLocaleTimeString(`zh-CN`,{hour:`2-digit`,minute:`2-digit`}):`--`,text:`${e.author} ${e.content}`,type:e.source}))}),P=x(()=>c.value?p:k.value),I=x(()=>c.value?y:M.value),L=x(()=>c.value?b:N.value),R=x(()=>c.value?S:[]),B=x(()=>c.value?w:[]),V=x(()=>c.value?T:[]),H=x(()=>c.value?E:[]),U=f(!1),W=x(()=>c.value?{type:`success`,text:`演示模式运行中`}:u.value?{type:`success`,text:`系统运行中`}:{type:`warning`,text:`未配置凭证，请先配置连接`});return ee(async()=>{c.value?await r.loadDemoData():await r.loadRealData(),i.updateTime()}),s(o,async e=>{e===`demo`?await r.loadDemoData():await r.loadRealData()}),(t,a)=>(z(),C(`div`,ke,[F(`section`,Ae,[F(`div`,je,[a[2]||=F(`h1`,{class:`hero-title`},`团队工作流智能看板`,-1),a[3]||=F(`p`,{class:`hero-subtitle`},`实时追踪团队动态，智能分析开发效能`,-1),F(`div`,Me,[A(g(Q),{type:W.value.type,round:``,size:`large`},{icon:e(()=>[F(`span`,{class:m([`status-dot`,W.value.type])},null,2)]),default:e(()=>[v(` `+l(W.value.text),1)]),_:1},8,[`type`]),g(i).lastUpdateTime?(z(),C(`span`,Ne,` 最后更新: `+l(g(i).lastUpdateTime),1)):j(``,!0)])])]),F(`div`,Pe,[F(`div`,Fe,[F(`div`,Ie,[a[6]||=F(`span`,{class:`mode-label`},`数据模式`,-1),A(g(ae),{value:o.value===`real`,"onUpdate:value":a[0]||=e=>o.value=e?`real`:`demo`},{checked:e(()=>[...a[4]||=[F(`span`,{style:{"font-size":`0.75rem`,padding:`0 4px`}},`真实`,-1)]]),unchecked:e(()=>[...a[5]||=[F(`span`,{style:{"font-size":`0.75rem`,padding:`0 4px`}},`虚拟`,-1)]]),_:1},8,[`value`])]),F(`div`,Le,[A(g(Q),{type:c.value?`info`:`success`,size:`small`,round:``},{default:e(()=>[v(l(c.value?`📺 虚拟演示数据`:`🔗 真实 API 数据`),1)]),_:1},8,[`type`]),F(`span`,Re,l(c.value?`展示预设的模拟数据，用于预览和演示`:`连接已配置的平台 API，拉取真实数据`),1)])])]),d.value?(z(),O(g(ie),{key:0,type:`warning`,bordered:!1,closable:``,class:`cred-warning`},{header:e(()=>[...a[7]||=[v(` 尚未配置平台凭证，请点击右上角头像 →「管理凭证」配置 GitHub、飞书等平台连接。 `,-1)]]),_:1})):j(``,!0),F(`div`,ze,[(z(!0),C(h,null,n(P.value,t=>(z(),O(g(D),{key:t.label,class:`metric-card card-hover`},{default:e(()=>[F(`div`,Be,[F(`span`,Ve,l(t.icon),1),F(`div`,He,[F(`span`,Ue,l(t.label),1),F(`span`,{class:`metric-value`,style:_({color:t.color})},[v(l(g(r).loading&&!c.value?`--`:t.value)+` `,1),F(`small`,null,l(t.unit),1)],4)])])]),_:2},1024))),128))]),A(g(q),{cols:12,"x-gap":20,"y-gap":20},{default:e(()=>[A(g(K),{span:7},{default:e(()=>[A(g(D),{title:`📋 今日概览`,class:`summary-card`},{default:e(()=>[A(g(oe),{show:g(r).loading&&!c.value},{default:e(()=>[F(`div`,We,[(z(!0),C(h,null,n(I.value,e=>(z(),C(`div`,{key:e.label,class:`summary-row`},[F(`span`,Ge,l(e.label),1),F(`span`,Ke,l(e.value),1)]))),128)),I.value.length===0&&!c.value?(z(),C(`div`,qe,` 暂无数据，请确认已配置平台凭证 `)):j(``,!0)])]),_:1},8,[`show`])]),_:1})]),_:1}),A(g(K),{span:5},{default:e(()=>[A(g(D),{title:`🕐 动态时间线`,class:`timeline-card`},{default:e(()=>[F(`div`,Je,[(z(!0),C(h,null,n(L.value,(e,t)=>(z(),C(`div`,{key:t,class:`timeline-item`},[F(`span`,Ye,l(e.time),1),a[8]||=F(`span`,{class:`timeline-dot`},null,-1),F(`span`,Xe,l(e.text),1)]))),128)),L.value.length===0&&!c.value?(z(),C(`div`,Ze,` 暂无动态 `)):j(``,!0)])]),_:1})]),_:1})]),_:1}),A(g(q),{cols:3,"x-gap":20,"y-gap":20,class:`chart-grid`},{default:e(()=>[A(g(K),null,{default:e(()=>[A(g(D),{title:`📈 提交趋势 (本周)`},{default:e(()=>[R.value.length>0?(z(),C(`div`,Qe,[F(`div`,$e,[(z(!0),C(h,null,n(R.value,e=>(z(),C(`div`,{key:e.name,class:`trend-bar-group`},[F(`div`,et,[F(`div`,{class:`bar bar-commits`,style:_({height:e.commits/22*120+`px`})},null,4),F(`div`,{class:`bar bar-prs`,style:_({height:e.prs/10*120+`px`})},null,4)]),F(`span`,tt,l(e.name),1)]))),128))]),a[9]||=F(`div`,{class:`chart-legend`},[F(`span`,{class:`legend-item`},[F(`span`,{class:`legend-dot`,style:{background:`#6C5CE7`}}),v(` 提交`)]),F(`span`,{class:`legend-item`},[F(`span`,{class:`legend-dot`,style:{background:`#A29BFE`}}),v(` PR`)])],-1)])):(z(),C(`div`,nt,`暂无趋势数据，请配置 GitHub 凭证`))]),_:1})]),_:1}),A(g(K),null,{default:e(()=>[A(g(D),{title:`🍩 任务分布`},{default:e(()=>[B.value.length>0?(z(),C(`div`,rt,[(z(),C(`svg`,it,[a[10]||=F(`circle`,{cx:`80`,cy:`80`,r:`60`,fill:`none`,stroke:`#eee`,"stroke-width":`20`},null,-1),(z(!0),C(h,null,n(B.value,(e,t)=>(z(),C(`circle`,{key:e.name,cx:`80`,cy:`80`,r:`60`,fill:`none`,stroke:e.color,"stroke-width":`20`,"stroke-dasharray":`${e.value/100*377} 377`,"stroke-dashoffset":B.value.slice(0,t).reduce((e,t)=>e-t.value/100*377,0),transform:`rotate(-90 80 80)`},null,8,at))),128))])),F(`div`,ot,[(z(!0),C(h,null,n(B.value,e=>(z(),C(`span`,{key:e.name,class:`pie-legend-item`},[F(`span`,{class:`pie-dot`,style:_({background:e.color})},null,4),v(` `+l(e.name)+` `+l(e.value)+`% `,1)]))),128))])])):(z(),C(`div`,st,`暂无任务分布数据`))]),_:1})]),_:1}),A(g(K),null,{default:e(()=>[A(g(D),{title:`👤 成员活跃度`},{default:e(()=>[V.value.length>0?(z(),C(`div`,ct,[(z(!0),C(h,null,n(V.value,e=>(z(),C(`div`,{key:e.name,class:`bar-row`},[F(`span`,lt,l(e.name),1),A(g(Oe),{percentage:Math.round(e.commits/24*100),height:20,"border-radius":10,color:`#6C5CE7`,"rail-color":`var(--bg-input)`,"show-indicator":!1},null,8,[`percentage`]),F(`span`,ut,l(e.commits)+`次`,1)]))),128))])):(z(),C(`div`,dt,`暂无活跃度数据`))]),_:1})]),_:1})]),_:1}),A(g(ve),{"expanded-names":U.value?[`health`]:[],"onUpdate:expandedNames":a[1]||=e=>U.value=e.includes(`health`)},{default:e(()=>[A(g(be),{name:`health`},{header:e(()=>[...a[11]||=[F(`span`,{class:`health-header`},`🏥 系统健康检查`,-1)]]),default:e(()=>[F(`div`,ft,[(z(!0),C(h,null,n(H.value,t=>(z(),O(g(D),{key:t.name,size:`small`,class:`health-card`},{default:e(()=>[F(`div`,pt,[F(`div`,mt,[F(`span`,ht,l(t.name),1),F(`span`,gt,l(t.detail),1)]),A(g(Q),{type:t.status===`ok`?`success`:t.status===`warning`?`warning`:`error`,size:`small`,round:``},{default:e(()=>[v(l(t.value),1)]),_:2},1032,[`type`])])]),_:2},1024))),128))])]),_:1})]),_:1},8,[`expanded-names`])]))}}),[[`__scopeId`,`data-v-15cd8a30`]]);export{vt as default};