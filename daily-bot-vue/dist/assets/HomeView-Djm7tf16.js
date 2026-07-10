import{$t as e,Bn as t,Cn as n,Ct as r,En as i,Et as a,F as o,Fn as s,Ft as c,Gn as l,Jn as u,Jt as d,N as f,Nt as p,On as m,Qt as h,R as g,Rn as _,Sn as v,Tt as y,Yt as b,Zt as x,_n as S,ar as C,bn as w,cr as T,dr as E,en as D,fn as O,g as k,gn as A,gt as j,ht as M,in as N,lr as ee,qn as P,t as F,tr as I,un as L,ur as R,vn as z,wn as B,xt as V,yn as H,zn as U}from"./_plugin-vue_export-helper-D7edCcqi.js";import{n as W}from"./_common-DBAoCL-8.js";import{n as G,t as K}from"./Grid-BjvoJXf_.js";import{t as q}from"./misc-v7XGxIq4.js";import{t as te}from"./use-false-until-truthy-ByMRd7Aq.js";import{t as ne}from"./use-merged-state-BhhvU6px.js";import{t as re}from"./FadeInExpandTransition-DLrDQid3.js";import{t as ie}from"./Alert-BOMMh5tD.js";import{t as ae}from"./Switch-DreDwtJN.js";import{t as oe}from"./Spin-CX5ts--m.js";import{F as J,I as se,M as Y,N as X,P as Z,S as ce,T as Q,V as $,d as le,i as ue,o as de,r as fe,t as pe,v as me}from"./index-1ii4vphs.js";var he=B({name:`ChevronLeft`,render(){return i(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},i(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`}))}}),ge=b(`collapse`,`width: 100%;`,[b(`collapse-item`,`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[h(`disabled`,[x(`header`,`cursor: not-allowed;`,[x(`header-main`,`
 color: var(--n-title-text-color-disabled);
 `),b(`collapse-item-arrow`,`
 color: var(--n-arrow-color-disabled);
 `)])]),b(`collapse-item`,`margin-left: 32px;`),d(`&:first-child`,`margin-top: 0;`),d(`&:first-child >`,[x(`header`,`padding-top: 0;`)]),h(`left-arrow-placement`,[x(`header`,[b(`collapse-item-arrow`,`margin-right: 4px;`)])]),h(`right-arrow-placement`,[x(`header`,[b(`collapse-item-arrow`,`margin-left: 4px;`)])]),x(`content-wrapper`,[x(`content-inner`,`padding-top: 16px;`),ce({duration:`0.15s`})]),h(`active`,[x(`header`,[h(`active`,[b(`collapse-item-arrow`,`transform: rotate(90deg);`)])])]),d(`&:not(:first-child)`,`border-top: 1px solid var(--n-divider-color);`),e(`disabled`,[h(`trigger-area-main`,[x(`header`,[x(`header-main`,`cursor: pointer;`),b(`collapse-item-arrow`,`cursor: default;`)])]),h(`trigger-area-arrow`,[x(`header`,[b(`collapse-item-arrow`,`cursor: pointer;`)])]),h(`trigger-area-extra`,[x(`header`,[x(`header-extra`,`cursor: pointer;`)])])]),x(`header`,`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[x(`header-main`,`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),x(`header-extra`,`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),b(`collapse-item-arrow`,`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),_e=Object.assign(Object.assign({},o.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:`left`},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:`if`},triggerAreas:{type:Array,default:()=>[`main`,`extra`,`arrow`]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),ve=p(`n-collapse`),ye=B({name:`Collapse`,props:_e,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=j(e),a=I(e.defaultExpandedNames),s=ne(A(()=>e.expandedNames),a),c=o(`Collapse`,`-collapse`,ge,me,e,n);function l(t){let{"onUpdate:expandedNames":n,onUpdateExpandedNames:r,onExpandedNamesChange:i}=e;r&&y(r,t),n&&y(n,t),i&&y(i,t),a.value=t}function u(t){let{onItemHeaderClick:n}=e;n&&y(n,t)}function d(t,n,r){let{accordion:i}=e,{value:a}=s;if(i)t?(l([n]),u({name:n,expanded:!0,event:r})):(l([]),u({name:n,expanded:!1,event:r}));else if(!Array.isArray(a))l([n]),u({name:n,expanded:!0,event:r});else{let e=a.slice(),t=e.findIndex(e=>n===e);~t?(e.splice(t,1),l(e),u({name:n,expanded:!1,event:r})):(e.push(n),l(e),u({name:n,expanded:!0,event:r}))}}U(ve,{props:e,mergedClsPrefixRef:n,expandedNamesRef:s,slots:t,toggleItem:d});let f=g(`Collapse`,i,n),p=A(()=>{let{common:{cubicBezierEaseInOut:e},self:{titleFontWeight:t,dividerColor:n,titlePadding:r,titleTextColor:i,titleTextColorDisabled:a,textColor:o,arrowColor:s,fontSize:l,titleFontSize:u,arrowColorDisabled:d,itemMargin:f}}=c.value;return{"--n-font-size":l,"--n-bezier":e,"--n-text-color":o,"--n-divider-color":n,"--n-title-padding":r,"--n-title-font-size":u,"--n-title-text-color":i,"--n-title-text-color-disabled":a,"--n-title-font-weight":t,"--n-arrow-color":s,"--n-arrow-color-disabled":d,"--n-item-margin":f}}),m=r?M(`collapse`,void 0,p,e):void 0;return{rtlEnabled:f,mergedTheme:c,mergedClsPrefix:n,cssVars:r?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),i(`div`,{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),be=B({name:`CollapseItemContent`,props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:te(C(e,`show`))}},render(){return i(re,null,{default:()=>{let{show:e,displayDirective:t,onceTrue:n,clsPrefix:r}=this,a=t===`show`&&n,o=i(`div`,{class:`${r}-collapse-item__content-wrapper`},i(`div`,{class:`${r}-collapse-item__content-inner`},this.$slots));return a?u(o,[[L,e]]):e?o:null}})}}),xe=B({name:`CollapseItem`,props:{title:String,name:[String,Number],disabled:Boolean,displayDirective:String},setup(e){let{mergedRtlRef:t}=j(e),n=q(),r=c(()=>e.name??n),i=m(ve);i||a(`collapse-item`,"`n-collapse-item` must be placed inside `n-collapse`.");let{expandedNamesRef:o,props:s,mergedClsPrefixRef:l,slots:u}=i,d=A(()=>{let{value:e}=o;if(Array.isArray(e)){let{value:t}=r;return!~e.findIndex(e=>e===t)}else if(e){let{value:t}=r;return t!==e}return!0});return{rtlEnabled:g(`Collapse`,t,l),collapseSlots:u,randomName:n,mergedClsPrefix:l,collapsed:d,triggerAreas:C(s,`triggerAreas`),mergedDisplayDirective:A(()=>{let{displayDirective:t}=e;return t||s.displayDirective}),arrowPlacement:A(()=>s.arrowPlacement),handleClick(t){let n=`main`;W(t,`arrow`)&&(n=`arrow`),W(t,`extra`)&&(n=`extra`),s.triggerAreas.includes(n)&&i&&!e.disabled&&i.toggleItem(d.value,r.value,t)}}},render(){let{collapseSlots:e,$slots:t,arrowPlacement:n,collapsed:a,mergedDisplayDirective:o,mergedClsPrefix:s,disabled:c,triggerAreas:l}=this,u=V(t.header,{collapsed:a},()=>[this.title]),d=t[`header-extra`]||e[`header-extra`],p=t.arrow||e.arrow;return i(`div`,{class:[`${s}-collapse-item`,`${s}-collapse-item--${n}-arrow-placement`,c&&`${s}-collapse-item--disabled`,!a&&`${s}-collapse-item--active`,l.map(e=>`${s}-collapse-item--trigger-area-${e}`)]},i(`div`,{class:[`${s}-collapse-item__header`,!a&&`${s}-collapse-item__header--active`]},i(`div`,{class:`${s}-collapse-item__header-main`,onClick:this.handleClick},n===`right`&&u,i(`div`,{class:`${s}-collapse-item-arrow`,key:+!this.rtlEnabled,"data-arrow":!0},V(p,{collapsed:a},()=>[i(f,{clsPrefix:s},{default:()=>this.rtlEnabled?i(he,null):i(se,null)})])),n===`left`&&u),r(d,{collapsed:a},e=>i(`div`,{class:`${s}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},e))),i(be,{clsPrefix:s,displayDirective:o,show:!a},t))}}),Se={success:i(X,null),error:i(J,null),warning:i(Y,null),info:i(Z,null)},Ce=B({name:`ProgressCircle`,props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){let n=A(()=>{let t=`gradient`,{fillColor:n}=e;return typeof n==`object`?`${t}-${N(JSON.stringify(n))}`:t});function r(t,r,i,a){let{gapDegree:o,viewBoxWidth:s,strokeWidth:c}=e,l=50+c/2,u=`M ${l},${l} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`,d=Math.PI*2*50;return{pathString:u,pathStyle:{stroke:a===`rail`?i:typeof e.fillColor==`object`?`url(#${n.value})`:i,strokeDasharray:`${Math.min(t,100)/100*(d-o)}px ${s*8}px`,strokeDashoffset:`-${o/2}px`,transformOrigin:r?`center`:void 0,transform:r?`rotate(${r}deg)`:void 0}}}let a=()=>{let t=typeof e.fillColor==`object`,r=t?e.fillColor.stops[0]:``,a=t?e.fillColor.stops[1]:``;return t&&i(`defs`,null,i(`linearGradient`,{id:n.value,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`},i(`stop`,{offset:`0%`,"stop-color":r}),i(`stop`,{offset:`100%`,"stop-color":a})))};return()=>{let{fillColor:n,railColor:o,strokeWidth:s,offsetDegree:c,status:l,percentage:u,showIndicator:d,indicatorTextColor:p,unit:m,gapOffsetDegree:h,clsPrefix:g}=e,{pathString:_,pathStyle:v}=r(100,0,o,`rail`),{pathString:y,pathStyle:b}=r(u,c,n,`fill`),x=100+s;return i(`div`,{class:`${g}-progress-content`,role:`none`},i(`div`,{class:`${g}-progress-graph`,"aria-hidden":!0},i(`div`,{class:`${g}-progress-graph-circle`,style:{transform:h?`rotate(${h}deg)`:void 0}},i(`svg`,{viewBox:`0 0 ${x} ${x}`},a(),i(`g`,null,i(`path`,{class:`${g}-progress-graph-circle-rail`,d:_,"stroke-width":s,"stroke-linecap":`round`,fill:`none`,style:v})),i(`g`,null,i(`path`,{class:[`${g}-progress-graph-circle-fill`,u===0&&`${g}-progress-graph-circle-fill--empty`],d:y,"stroke-width":s,"stroke-linecap":`round`,fill:`none`,style:b}))))),d?i(`div`,null,t.default?i(`div`,{class:`${g}-progress-custom-content`,role:`none`},t.default()):l==="default"?i(`div`,{class:`${g}-progress-text`,style:{color:p},role:`none`},i(`span`,{class:`${g}-progress-text__percentage`},u),i(`span`,{class:`${g}-progress-text__unit`},m)):i(`div`,{class:`${g}-progress-icon`,"aria-hidden":!0},i(f,{clsPrefix:g},{default:()=>Se[l]}))):null)}}}),we={success:i(X,null),error:i(J,null),warning:i(Y,null),info:i(Z,null)},Te=B({name:`ProgressLine`,props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:`%`},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){let n=A(()=>$(e.height)),r=A(()=>typeof e.fillColor==`object`?`linear-gradient(to right, ${e.fillColor?.stops[0]} , ${e.fillColor?.stops[1]})`:e.fillColor),a=A(()=>e.railBorderRadius===void 0?e.height===void 0?``:$(e.height,{c:.5}):$(e.railBorderRadius)),o=A(()=>e.fillBorderRadius===void 0?e.railBorderRadius===void 0?e.height===void 0?``:$(e.height,{c:.5}):$(e.railBorderRadius):$(e.fillBorderRadius));return()=>{let{indicatorPlacement:s,railColor:c,railStyle:l,percentage:u,unit:d,indicatorTextColor:p,status:m,showIndicator:h,processing:g,clsPrefix:_}=e;return i(`div`,{class:`${_}-progress-content`,role:`none`},i(`div`,{class:`${_}-progress-graph`,"aria-hidden":!0},i(`div`,{class:[`${_}-progress-graph-line`,{[`${_}-progress-graph-line--indicator-${s}`]:!0}]},i(`div`,{class:`${_}-progress-graph-line-rail`,style:[{backgroundColor:c,height:n.value,borderRadius:a.value},l]},i(`div`,{class:[`${_}-progress-graph-line-fill`,g&&`${_}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:r.value,height:n.value,lineHeight:n.value,borderRadius:o.value}},s===`inside`?i(`div`,{class:`${_}-progress-graph-line-indicator`,style:{color:p}},t.default?t.default():`${u}${d}`):null)))),h&&s===`outside`?i(`div`,null,t.default?i(`div`,{class:`${_}-progress-custom-content`,style:{color:p},role:`none`},t.default()):m==="default"?i(`div`,{role:`none`,class:`${_}-progress-icon ${_}-progress-icon--as-text`,style:{color:p}},u,d):i(`div`,{class:`${_}-progress-icon`,"aria-hidden":!0},i(f,{clsPrefix:_},{default:()=>we[m]}))):null)}}});function Ee(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var De=B({name:`ProgressMultipleCircle`,props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){let n=A(()=>e.percentage.map((t,n)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`)),r=(t,n)=>{let r=e.fillColor[n],a=typeof r==`object`?r.stops[0]:``,o=typeof r==`object`?r.stops[1]:``;return typeof e.fillColor[n]==`object`&&i(`linearGradient`,{id:`gradient-${n}`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`},i(`stop`,{offset:`0%`,"stop-color":a}),i(`stop`,{offset:`100%`,"stop-color":o}))};return()=>{let{viewBoxWidth:a,strokeWidth:o,circleGap:s,showIndicator:c,fillColor:l,railColor:u,railStyle:d,percentage:f,clsPrefix:p}=e;return i(`div`,{class:`${p}-progress-content`,role:`none`},i(`div`,{class:`${p}-progress-graph`,"aria-hidden":!0},i(`div`,{class:`${p}-progress-graph-circle`},i(`svg`,{viewBox:`0 0 ${a} ${a}`},i(`defs`,null,f.map((e,t)=>r(e,t))),f.map((e,t)=>i(`g`,{key:t},i(`path`,{class:`${p}-progress-graph-circle-rail`,d:Ee(a/2-o/2*(1+2*t)-s*t,o,a),"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:[{strokeDashoffset:0,stroke:u[t]},d[t]]}),i(`path`,{class:[`${p}-progress-graph-circle-fill`,e===0&&`${p}-progress-graph-circle-fill--empty`],d:Ee(a/2-o/2*(1+2*t)-s*t,o,a),"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:{strokeDasharray:n.value[t],strokeDashoffset:0,stroke:typeof l[t]==`object`?`url(#gradient-${t})`:l[t]}})))))),c&&t.default?i(`div`,null,i(`div`,{class:`${p}-progress-text`},t.default())):null)}}}),Oe=d([b(`progress`,{display:`inline-block`},[b(`progress-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),h(`line`,`
 width: 100%;
 display: block;
 `,[b(`progress-content`,`
 display: flex;
 align-items: center;
 `,[b(`progress-graph`,{flex:1})]),b(`progress-custom-content`,{marginLeft:`14px`}),b(`progress-icon`,`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[h(`as-text`,`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),h(`circle, dashboard`,{width:`120px`},[b(`progress-custom-content`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),b(`progress-text`,`
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
 `),b(`progress-icon`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),h(`multiple-circle`,`
 width: 200px;
 color: inherit;
 `,[b(`progress-text`,`
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
 `)]),b(`progress-content`,{position:`relative`}),b(`progress-graph`,{position:`relative`},[b(`progress-graph-circle`,[d(`svg`,{verticalAlign:`bottom`}),b(`progress-graph-circle-fill`,`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[h(`empty`,{opacity:0})]),b(`progress-graph-circle-rail`,`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),b(`progress-graph-line`,[h(`indicator-inside`,[b(`progress-graph-line-rail`,`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[b(`progress-graph-line-fill`,`
 height: inherit;
 border-radius: 10px;
 `),b(`progress-graph-line-indicator`,`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),h(`indicator-inside-label`,`
 height: 16px;
 display: flex;
 align-items: center;
 `,[b(`progress-graph-line-rail`,`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),b(`progress-graph-line-indicator`,`
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
 `)]),b(`progress-graph-line-rail`,`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[b(`progress-graph-line-fill`,`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[h(`processing`,[d(`&::after`,`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),d(`@keyframes progress-processing-animation`,`
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
 `)]),ke=B({name:`Progress`,props:Object.assign(Object.assign({},o.props),{processing:Boolean,type:{type:String,default:`line`},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:`default`},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:`%`},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:`outside`},indicatorPlacement:{type:String,default:`outside`},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),setup(e){let t=A(()=>e.indicatorPlacement||e.indicatorPosition),n=A(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type===`dashboard`)return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=j(e),a=o(`Progress`,`-progress`,Oe,le,e,r),s=A(()=>{let{status:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontSize:r,fontSizeCircle:i,railColor:o,railHeight:s,iconSizeCircle:c,iconSizeLine:l,textColorCircle:u,textColorLineInner:d,textColorLineOuter:f,lineBgProcessing:p,fontWeightCircle:m,[D(`iconColor`,t)]:h,[D(`fillColor`,t)]:g}}=a.value;return{"--n-bezier":n,"--n-fill-color":g,"--n-font-size":r,"--n-font-size-circle":i,"--n-font-weight-circle":m,"--n-icon-color":h,"--n-icon-size-circle":c,"--n-icon-size-line":l,"--n-line-bg-processing":p,"--n-rail-color":o,"--n-rail-height":s,"--n-text-color-circle":u,"--n-text-color-line-inner":d,"--n-text-color-line-outer":f}}),c=i?M(`progress`,A(()=>e.status[0]),s,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:n,cssVars:i?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{type:e,cssVars:t,indicatorTextColor:n,showIndicator:r,status:a,railColor:o,railStyle:s,color:c,percentage:l,viewBoxWidth:u,strokeWidth:d,mergedIndicatorPlacement:f,unit:p,borderRadius:m,fillBorderRadius:h,height:g,processing:_,circleGap:v,mergedClsPrefix:y,gapDeg:b,gapOffsetDegree:x,themeClass:S,$slots:C,onRender:w}=this;return w?.(),i(`div`,{class:[S,`${y}-progress`,`${y}-progress--${e}`,`${y}-progress--${a}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":l,role:e===`circle`||e===`line`||e===`dashboard`?`progressbar`:`none`},e===`circle`||e===`dashboard`?i(Ce,{clsPrefix:y,status:a,showIndicator:r,indicatorTextColor:n,railColor:o,fillColor:c,railStyle:s,offsetDegree:this.offsetDegree,percentage:l,viewBoxWidth:u,strokeWidth:d,gapDegree:b===void 0?e===`dashboard`?75:0:b,gapOffsetDegree:x,unit:p},C):e===`line`?i(Te,{clsPrefix:y,status:a,showIndicator:r,indicatorTextColor:n,railColor:o,fillColor:c,railStyle:s,percentage:l,processing:_,indicatorPlacement:f,unit:p,fillBorderRadius:h,railBorderRadius:m,height:g},C):e===`multiple-circle`?i(De,{clsPrefix:y,strokeWidth:d,railColor:o,fillColor:c,railStyle:s,viewBoxWidth:u,percentage:l,showIndicator:r,circleGap:v},C):null)}}),Ae={class:`home-view`},je={class:`hero-section`},Me={class:`hero-content`},Ne={class:`hero-status`},Pe={key:0,class:`update-time`},Fe={class:`mode-switch-bar`},Ie={class:`mode-switch-inner`},Le={class:`mode-left`},Re={class:`mode-right`},ze={class:`mode-desc`},Be={class:`metric-grid`},Ve={class:`metric-inner`},He={class:`metric-icon`},Ue={class:`metric-info`},We={class:`metric-label`},Ge={class:`summary-body`},Ke={class:`summary-label`},qe={class:`summary-value`},Je={key:0,class:`empty-hint`},Ye={class:`timeline-list`},Xe={class:`timeline-time`},Ze={class:`timeline-text`},Qe={key:0,class:`empty-hint`},$e={key:0,class:`chart-trend`},et={class:`trend-bars`},tt={class:`bar-wrapper`},nt={class:`bar-label`},rt={key:1,class:`empty-hint`},it={key:0,class:`chart-pie`},at={viewBox:`0 0 160 160`,class:`pie-svg`},ot=[`stroke`,`stroke-dasharray`,`stroke-dashoffset`],st={class:`pie-legend`},ct={key:1,class:`empty-hint`},lt={key:0,class:`chart-bar`},ut={class:`bar-row-name`},dt={class:`bar-row-val`},ft={key:1,class:`empty-hint`},pt={class:`health-grid`},mt={class:`health-item`},ht={class:`health-left`},gt={class:`health-name`},_t={class:`health-detail`},vt=`wfbot_data_mode`,yt=F(B({__name:`HomeView`,setup(e){let r=de(),i=pe(),a=ue(),o=fe(),c=I(localStorage.getItem(vt)||`demo`);l(c,e=>{localStorage.setItem(vt,e)});let u=A(()=>c.value===`demo`),d=A(()=>o.hasAnyCredential),f=A(()=>c.value===`real`&&!d.value),p=[{label:`今日提交`,value:12,unit:`次`,icon:`📝`,color:`var(--primary)`},{label:`任务完成率`,value:78,unit:`%`,icon:`✅`,color:`var(--success)`},{label:`活跃成员`,value:8,unit:`人`,icon:`👥`,color:`var(--info)`},{label:`代码变更`,value:2840,unit:`行`,icon:`📊`,color:`var(--warning)`}],m=[{label:`活跃仓库`,value:3},{label:`新增 Issue`,value:7},{label:`已关闭 Issue`,value:5},{label:`代码审查`,value:12},{label:`发布版本`,value:2}],h=[{time:`10:30`,text:`张三 提交了 dashboard 模块更新`,type:`commit`},{time:`09:45`,text:`李四 合并了 PR #128 feature/user-auth`,type:`pr`},{time:`09:15`,text:`蛋挞 提交了 3 个 commit 到 feat/api-optimize`,type:`commit`},{time:`09:00`,text:`飞书审批单 #20240709-001 已通过`,type:`approval`},{time:`08:30`,text:`每日站会纪要已自动生成`,type:`meeting`}],g=[{name:`周一`,commits:12,prs:5},{name:`周二`,commits:18,prs:8},{name:`周三`,commits:15,prs:6},{name:`周四`,commits:22,prs:10},{name:`周五`,commits:16,prs:7},{name:`周六`,commits:8,prs:3},{name:`周日`,commits:4,prs:1}],y=[{name:`前端`,value:35,color:`#6C5CE7`},{name:`后端`,value:28,color:`#00B894`},{name:`DevOps`,value:15,color:`#FDCB6E`},{name:`测试`,value:12,color:`#FF7675`},{name:`文档`,value:10,color:`#74B9FF`}],b=[{name:`张三`,commits:24,prs:6},{name:`李四`,commits:18,prs:8},{name:`王五`,commits:15,prs:4},{name:`赵六`,commits:12,prs:3},{name:`孙七`,commits:9,prs:2},{name:`蛋挞`,commits:20,prs:5}],x=[{name:`GitHub 连接`,status:`ok`,value:`正常`,detail:`API 响应时间 120ms`},{name:`飞书连接`,status:`ok`,value:`正常`,detail:`Token 有效期至 2026-08-01`},{name:`天气服务`,status:`warning`,value:`延迟`,detail:`API 响应时间 2.3s`},{name:`AI 服务`,status:`ok`,value:`正常`,detail:`模型 DeepSeek-V4 可用`}],C=A(()=>[{label:`今日提交`,value:i.stats?.commits??0,unit:`次`,icon:`📝`,color:`var(--primary)`},{label:`任务完成率`,value:i.stats?.taskRate??0,unit:`%`,icon:`✅`,color:`var(--success)`},{label:`活跃成员`,value:i.stats?.members??0,unit:`人`,icon:`👥`,color:`var(--info)`},{label:`代码变更`,value:i.stats?.changes??0,unit:`行`,icon:`📊`,color:`var(--warning)`}]),D=A(()=>[{label:`活跃仓库`,value:i.stats?.activeRepos??0},{label:`新增 Issue`,value:i.stats?.newIssues??0},{label:`已关闭 Issue`,value:i.stats?.closedIssues??0},{label:`代码审查`,value:i.stats?.reviews??0},{label:`发布版本`,value:i.stats?.releases??0}]),j=A(()=>{let e=i.updates;return e.length===0?[]:e.slice(0,6).map(e=>({time:e.time?new Date(e.time).toLocaleTimeString(`zh-CN`,{hour:`2-digit`,minute:`2-digit`}):`--`,text:`${e.author} ${e.content}`,type:e.source}))}),M=A(()=>u.value?p:C.value),N=A(()=>u.value?m:D.value),F=A(()=>u.value?h:j.value),L=A(()=>u.value?g:[]),B=A(()=>u.value?y:[]),V=A(()=>u.value?b:[]),U=A(()=>u.value?x:[]),W=I(!1),q=A(()=>u.value?{type:`success`,text:`演示模式运行中`}:d.value?{type:`success`,text:`系统运行中`}:{type:`warning`,text:`未配置凭证，请先配置连接`});return s(async()=>{u.value?await i.loadDemoData():await i.loadRealData(),a.updateTime()}),l(c,async e=>{e===`demo`?await i.loadDemoData():await i.loadRealData()}),(e,o)=>(_(),w(`div`,Ae,[S(`section`,je,[S(`div`,Me,[o[4]||=S(`h1`,{class:`hero-title`},`团队工作流智能看板`,-1),o[5]||=S(`p`,{class:`hero-subtitle`},`实时追踪团队动态，智能分析开发效能`,-1),S(`div`,Ne,[n(T(Q),{type:q.value.type,round:``,size:`large`},{icon:P(()=>[S(`span`,{class:ee([`status-dot`,q.value.type])},null,2)]),default:P(()=>[v(` `+E(q.value.text),1)]),_:1},8,[`type`]),T(a).lastUpdateTime?(_(),w(`span`,Pe,` 最后更新: `+E(T(a).lastUpdateTime),1)):H(``,!0)])])]),S(`div`,Fe,[S(`div`,Ie,[S(`div`,Le,[o[8]||=S(`span`,{class:`mode-label`},`数据模式`,-1),n(T(ae),{value:c.value===`real`,"onUpdate:value":o[0]||=e=>c.value=e?`real`:`demo`},{checked:P(()=>[...o[6]||=[S(`span`,{style:{"font-size":`0.75rem`,padding:`0 4px`}},`真实`,-1)]]),unchecked:P(()=>[...o[7]||=[S(`span`,{style:{"font-size":`0.75rem`,padding:`0 4px`}},`虚拟`,-1)]]),_:1},8,[`value`])]),S(`div`,Re,[n(T(Q),{type:u.value?`info`:`success`,size:`small`,round:``},{default:P(()=>[v(E(u.value?`📺 虚拟演示数据`:`🔗 真实 API 数据`),1)]),_:1},8,[`type`]),S(`span`,ze,E(u.value?`展示预设的模拟数据，用于预览和演示`:`连接已配置的平台 API，拉取真实数据`),1)])])]),f.value?(_(),z(T(ie),{key:0,type:`warning`,bordered:!1,closable:``,class:`cred-warning`},{header:P(()=>[...o[9]||=[v(` 尚未配置平台凭证，请点击右上角头像 →「管理凭证」配置 GitHub、飞书等平台连接。 `,-1)]]),_:1})):H(``,!0),S(`div`,Be,[(_(!0),w(O,null,t(M.value,e=>(_(),z(T(k),{key:e.label,class:`metric-card card-hover`},{default:P(()=>[S(`div`,Ve,[S(`span`,He,E(e.icon),1),S(`div`,Ue,[S(`span`,We,E(e.label),1),S(`span`,{class:`metric-value`,style:R({color:e.color})},[v(E(T(i).loading&&!u.value?`--`:e.value)+` `,1),S(`small`,null,E(e.unit),1)],4)])])]),_:2},1024))),128))]),n(T(K),{cols:12,"x-gap":20,"y-gap":20},{default:P(()=>[n(T(G),{span:7},{default:P(()=>[n(T(k),{title:`📋 今日概览`,class:`summary-card`},{default:P(()=>[n(T(oe),{show:T(i).loading&&!u.value},{default:P(()=>[S(`div`,Ge,[(_(!0),w(O,null,t(N.value,e=>(_(),w(`div`,{key:e.label,class:`summary-row`},[S(`span`,Ke,E(e.label),1),S(`span`,qe,E(e.value),1)]))),128)),N.value.length===0&&!u.value?(_(),w(`div`,Je,` 暂无数据，请确认已配置平台凭证 `)):H(``,!0)])]),_:1},8,[`show`])]),_:1})]),_:1}),n(T(G),{span:5},{default:P(()=>[n(T(k),{title:`🕐 动态时间线`,class:`timeline-card`},{default:P(()=>[S(`div`,Ye,[(_(!0),w(O,null,t(F.value,(e,t)=>(_(),w(`div`,{key:t,class:`timeline-item`},[S(`span`,Xe,E(e.time),1),o[10]||=S(`span`,{class:`timeline-dot`},null,-1),S(`span`,Ze,E(e.text),1)]))),128)),F.value.length===0&&!u.value?(_(),w(`div`,Qe,` 暂无动态 `)):H(``,!0)])]),_:1})]),_:1})]),_:1}),n(T(K),{cols:3,"x-gap":20,"y-gap":20,class:`chart-grid`},{default:P(()=>[n(T(G),null,{default:P(()=>[n(T(k),{title:`📈 提交趋势 (本周)`,class:`chart-card-clickable`,onClick:o[1]||=e=>T(r).push(`/reports`)},{default:P(()=>[L.value.length>0?(_(),w(`div`,$e,[S(`div`,et,[(_(!0),w(O,null,t(L.value,e=>(_(),w(`div`,{key:e.name,class:`trend-bar-group`},[S(`div`,tt,[S(`div`,{class:`bar bar-commits`,style:R({height:e.commits/22*120+`px`})},null,4),S(`div`,{class:`bar bar-prs`,style:R({height:e.prs/10*120+`px`})},null,4)]),S(`span`,nt,E(e.name),1)]))),128))]),o[11]||=S(`div`,{class:`chart-legend`},[S(`span`,{class:`legend-item`},[S(`span`,{class:`legend-dot`,style:{background:`#6C5CE7`}}),v(` 提交`)]),S(`span`,{class:`legend-item`},[S(`span`,{class:`legend-dot`,style:{background:`#A29BFE`}}),v(` PR`)])],-1)])):(_(),w(`div`,rt,`暂无趋势数据，请配置 GitHub 凭证`))]),_:1})]),_:1}),n(T(G),null,{default:P(()=>[n(T(k),{title:`🍩 任务分布`},{default:P(()=>[B.value.length>0?(_(),w(`div`,it,[(_(),w(`svg`,at,[o[12]||=S(`circle`,{cx:`80`,cy:`80`,r:`60`,fill:`none`,stroke:`#eee`,"stroke-width":`20`},null,-1),(_(!0),w(O,null,t(B.value,(e,t)=>(_(),w(`circle`,{key:e.name,cx:`80`,cy:`80`,r:`60`,fill:`none`,stroke:e.color,"stroke-width":`20`,"stroke-dasharray":`${e.value/100*377} 377`,"stroke-dashoffset":B.value.slice(0,t).reduce((e,t)=>e-t.value/100*377,0),transform:`rotate(-90 80 80)`},null,8,ot))),128))])),S(`div`,st,[(_(!0),w(O,null,t(B.value,e=>(_(),w(`span`,{key:e.name,class:`pie-legend-item`},[S(`span`,{class:`pie-dot`,style:R({background:e.color})},null,4),v(` `+E(e.name)+` `+E(e.value)+`% `,1)]))),128))])])):(_(),w(`div`,ct,`暂无任务分布数据`))]),_:1})]),_:1}),n(T(G),null,{default:P(()=>[n(T(k),{title:`👤 成员活跃度`,class:`chart-card-clickable`,onClick:o[2]||=e=>T(r).push(`/reports`)},{default:P(()=>[V.value.length>0?(_(),w(`div`,lt,[(_(!0),w(O,null,t(V.value,e=>(_(),w(`div`,{key:e.name,class:`bar-row`},[S(`span`,ut,E(e.name),1),n(T(ke),{percentage:Math.round(e.commits/24*100),height:20,"border-radius":10,color:`#6C5CE7`,"rail-color":`var(--bg-input)`,"show-indicator":!1},null,8,[`percentage`]),S(`span`,dt,E(e.commits)+`次`,1)]))),128))])):(_(),w(`div`,ft,`暂无活跃度数据`))]),_:1})]),_:1})]),_:1}),n(T(ye),{"expanded-names":W.value?[`health`]:[],"onUpdate:expandedNames":o[3]||=e=>W.value=e.includes(`health`)},{default:P(()=>[n(T(xe),{name:`health`},{header:P(()=>[...o[13]||=[S(`span`,{class:`health-header`},`🏥 系统健康检查`,-1)]]),default:P(()=>[S(`div`,pt,[(_(!0),w(O,null,t(U.value,e=>(_(),z(T(k),{key:e.name,size:`small`,class:`health-card`},{default:P(()=>[S(`div`,mt,[S(`div`,ht,[S(`span`,gt,E(e.name),1),S(`span`,_t,E(e.detail),1)]),n(T(Q),{type:e.status===`ok`?`success`:e.status===`warning`?`warning`:`error`,size:`small`,round:``},{default:P(()=>[v(E(e.value),1)]),_:2},1032,[`type`])])]),_:2},1024))),128))])]),_:1})]),_:1},8,[`expanded-names`])]))}}),[[`__scopeId`,`data-v-7bd08cd3`]]);export{yt as default};