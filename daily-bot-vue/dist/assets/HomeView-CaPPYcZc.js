import{$n as e,D as t,Dt as n,Gt as r,Hn as i,Ht as a,Jt as o,Kt as s,M as c,Mn as l,Nn as u,Pn as d,Qt as f,Sn as p,Ut as m,Vn as h,Yn as g,_n as _,_t as v,ar as y,bn as b,bt as x,dn as S,fn as C,gn as w,ht as T,in as E,ir as D,k as O,kn as ee,kt as k,lt as A,mn as j,nr as M,on as N,pn as P,qt as F,rr as te,t as I,u as L,un as R,ut as z,vn as B,yt as V,zn as ne}from"./_plugin-vue_export-helper-Dw8IhM_J.js";import{n as H}from"./_common-DBAoCL-8.js";import{n as U,t as W}from"./Grid-GXz22bP4.js";import{t as G}from"./misc-v7XGxIq4.js";import{t as re}from"./use-false-until-truthy-DzV_rx3o.js";import{t as ie}from"./use-merged-state-G3axosnw.js";import{t as ae}from"./FadeInExpandTransition-BR9iA0PH.js";import{t as oe}from"./Alert-DJF8lBas.js";import{t as se}from"./Switch-D2bWDTgt.js";import{t as ce}from"./Spin-IWOQoNI0.js";import{B as K,F as le,M as q,N as J,P as Y,_ as ue,d as de,i as fe,j as X,o as pe,r as me,t as he,w as Z,x as ge}from"./index-0WQr_tjR.js";var _e=B({name:`ChevronLeft`,render(){return b(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},b(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`}))}}),ve=m(`collapse`,`width: 100%;`,[m(`collapse-item`,`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[s(`disabled`,[r(`header`,`cursor: not-allowed;`,[r(`header-main`,`
 color: var(--n-title-text-color-disabled);
 `),m(`collapse-item-arrow`,`
 color: var(--n-arrow-color-disabled);
 `)])]),m(`collapse-item`,`margin-left: 32px;`),a(`&:first-child`,`margin-top: 0;`),a(`&:first-child >`,[r(`header`,`padding-top: 0;`)]),s(`left-arrow-placement`,[r(`header`,[m(`collapse-item-arrow`,`margin-right: 4px;`)])]),s(`right-arrow-placement`,[r(`header`,[m(`collapse-item-arrow`,`margin-left: 4px;`)])]),r(`content-wrapper`,[r(`content-inner`,`padding-top: 16px;`),ge({duration:`0.15s`})]),s(`active`,[r(`header`,[s(`active`,[m(`collapse-item-arrow`,`transform: rotate(90deg);`)])])]),a(`&:not(:first-child)`,`border-top: 1px solid var(--n-divider-color);`),F(`disabled`,[s(`trigger-area-main`,[r(`header`,[r(`header-main`,`cursor: pointer;`),m(`collapse-item-arrow`,`cursor: default;`)])]),s(`trigger-area-arrow`,[r(`header`,[m(`collapse-item-arrow`,`cursor: pointer;`)])]),s(`trigger-area-extra`,[r(`header`,[r(`header-extra`,`cursor: pointer;`)])])]),r(`header`,`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[r(`header-main`,`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),r(`header-extra`,`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),m(`collapse-item-arrow`,`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),ye=Object.assign(Object.assign({},O.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:`left`},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:`if`},triggerAreas:{type:Array,default:()=>[`main`,`extra`,`arrow`]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),Q=n(`n-collapse`),be=B({name:`Collapse`,props:ye,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=z(e),a=g(e.defaultExpandedNames),o=ie(R(()=>e.expandedNames),a),s=O(`Collapse`,`-collapse`,ve,ue,e,n);function l(t){let{"onUpdate:expandedNames":n,onUpdateExpandedNames:r,onExpandedNamesChange:i}=e;r&&V(r,t),n&&V(n,t),i&&V(i,t),a.value=t}function d(t){let{onItemHeaderClick:n}=e;n&&V(n,t)}function f(t,n,r){let{accordion:i}=e,{value:a}=o;if(i)t?(l([n]),d({name:n,expanded:!0,event:r})):(l([]),d({name:n,expanded:!1,event:r}));else if(!Array.isArray(a))l([n]),d({name:n,expanded:!0,event:r});else{let e=a.slice(),t=e.findIndex(e=>n===e);~t?(e.splice(t,1),l(e),d({name:n,expanded:!1,event:r})):(e.push(n),l(e),d({name:n,expanded:!0,event:r}))}}u(Q,{props:e,mergedClsPrefixRef:n,expandedNamesRef:o,slots:t,toggleItem:f});let p=c(`Collapse`,i,n),m=R(()=>{let{common:{cubicBezierEaseInOut:e},self:{titleFontWeight:t,dividerColor:n,titlePadding:r,titleTextColor:i,titleTextColorDisabled:a,textColor:o,arrowColor:c,fontSize:l,titleFontSize:u,arrowColorDisabled:d,itemMargin:f}}=s.value;return{"--n-font-size":l,"--n-bezier":e,"--n-text-color":o,"--n-divider-color":n,"--n-title-padding":r,"--n-title-font-size":u,"--n-title-text-color":i,"--n-title-text-color-disabled":a,"--n-title-font-weight":t,"--n-arrow-color":c,"--n-arrow-color-disabled":d,"--n-item-margin":f}}),h=r?A(`collapse`,void 0,m,e):void 0;return{rtlEnabled:p,mergedTheme:s,mergedClsPrefix:n,cssVars:r?void 0:m,themeClass:h?.themeClass,onRender:h?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),b(`div`,{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),xe=B({name:`CollapseItemContent`,props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(t){return{onceTrue:re(e(t,`show`))}},render(){return b(ae,null,{default:()=>{let{show:e,displayDirective:t,onceTrue:n,clsPrefix:r}=this,a=t===`show`&&n,o=b(`div`,{class:`${r}-collapse-item__content-wrapper`},b(`div`,{class:`${r}-collapse-item__content-inner`},this.$slots));return a?i(o,[[E,e]]):e?o:null}})}}),Se=B({name:`CollapseItem`,props:{title:String,name:[String,Number],disabled:Boolean,displayDirective:String},setup(t){let{mergedRtlRef:n}=z(t),r=G(),i=k(()=>t.name??r),a=p(Q);a||x(`collapse-item`,"`n-collapse-item` must be placed inside `n-collapse`.");let{expandedNamesRef:o,props:s,mergedClsPrefixRef:l,slots:u}=a,d=R(()=>{let{value:e}=o;if(Array.isArray(e)){let{value:t}=i;return!~e.findIndex(e=>e===t)}else if(e){let{value:t}=i;return t!==e}return!0});return{rtlEnabled:c(`Collapse`,n,l),collapseSlots:u,randomName:r,mergedClsPrefix:l,collapsed:d,triggerAreas:e(s,`triggerAreas`),mergedDisplayDirective:R(()=>{let{displayDirective:e}=t;return e||s.displayDirective}),arrowPlacement:R(()=>s.arrowPlacement),handleClick(e){let n=`main`;H(e,`arrow`)&&(n=`arrow`),H(e,`extra`)&&(n=`extra`),s.triggerAreas.includes(n)&&a&&!t.disabled&&a.toggleItem(d.value,i.value,e)}}},render(){let{collapseSlots:e,$slots:n,arrowPlacement:r,collapsed:i,mergedDisplayDirective:a,mergedClsPrefix:o,disabled:s,triggerAreas:c}=this,l=T(n.header,{collapsed:i},()=>[this.title]),u=n[`header-extra`]||e[`header-extra`],d=n.arrow||e.arrow;return b(`div`,{class:[`${o}-collapse-item`,`${o}-collapse-item--${r}-arrow-placement`,s&&`${o}-collapse-item--disabled`,!i&&`${o}-collapse-item--active`,c.map(e=>`${o}-collapse-item--trigger-area-${e}`)]},b(`div`,{class:[`${o}-collapse-item__header`,!i&&`${o}-collapse-item__header--active`]},b(`div`,{class:`${o}-collapse-item__header-main`,onClick:this.handleClick},r===`right`&&l,b(`div`,{class:`${o}-collapse-item-arrow`,key:+!this.rtlEnabled,"data-arrow":!0},T(d,{collapsed:i},()=>[b(t,{clsPrefix:o},{default:()=>this.rtlEnabled?b(_e,null):b(le,null)})])),r===`left`&&l),v(u,{collapsed:i},e=>b(`div`,{class:`${o}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},e))),b(xe,{clsPrefix:o,displayDirective:a,show:!i},n))}}),Ce={success:b(q,null),error:b(Y,null),warning:b(X,null),info:b(J,null)},we=B({name:`ProgressCircle`,props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:n}){let r=R(()=>{let t=`gradient`,{fillColor:n}=e;return typeof n==`object`?`${t}-${f(JSON.stringify(n))}`:t});function i(t,n,i,a){let{gapDegree:o,viewBoxWidth:s,strokeWidth:c}=e,l=50+c/2,u=`M ${l},${l} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`,d=Math.PI*2*50;return{pathString:u,pathStyle:{stroke:a===`rail`?i:typeof e.fillColor==`object`?`url(#${r.value})`:i,strokeDasharray:`${Math.min(t,100)/100*(d-o)}px ${s*8}px`,strokeDashoffset:`-${o/2}px`,transformOrigin:n?`center`:void 0,transform:n?`rotate(${n}deg)`:void 0}}}let a=()=>{let t=typeof e.fillColor==`object`,n=t?e.fillColor.stops[0]:``,i=t?e.fillColor.stops[1]:``;return t&&b(`defs`,null,b(`linearGradient`,{id:r.value,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`},b(`stop`,{offset:`0%`,"stop-color":n}),b(`stop`,{offset:`100%`,"stop-color":i})))};return()=>{let{fillColor:r,railColor:o,strokeWidth:s,offsetDegree:c,status:l,percentage:u,showIndicator:d,indicatorTextColor:f,unit:p,gapOffsetDegree:m,clsPrefix:h}=e,{pathString:g,pathStyle:_}=i(100,0,o,`rail`),{pathString:v,pathStyle:y}=i(u,c,r,`fill`),x=100+s;return b(`div`,{class:`${h}-progress-content`,role:`none`},b(`div`,{class:`${h}-progress-graph`,"aria-hidden":!0},b(`div`,{class:`${h}-progress-graph-circle`,style:{transform:m?`rotate(${m}deg)`:void 0}},b(`svg`,{viewBox:`0 0 ${x} ${x}`},a(),b(`g`,null,b(`path`,{class:`${h}-progress-graph-circle-rail`,d:g,"stroke-width":s,"stroke-linecap":`round`,fill:`none`,style:_})),b(`g`,null,b(`path`,{class:[`${h}-progress-graph-circle-fill`,u===0&&`${h}-progress-graph-circle-fill--empty`],d:v,"stroke-width":s,"stroke-linecap":`round`,fill:`none`,style:y}))))),d?b(`div`,null,n.default?b(`div`,{class:`${h}-progress-custom-content`,role:`none`},n.default()):l==="default"?b(`div`,{class:`${h}-progress-text`,style:{color:f},role:`none`},b(`span`,{class:`${h}-progress-text__percentage`},u),b(`span`,{class:`${h}-progress-text__unit`},p)):b(`div`,{class:`${h}-progress-icon`,"aria-hidden":!0},b(t,{clsPrefix:h},{default:()=>Ce[l]}))):null)}}}),Te={success:b(q,null),error:b(Y,null),warning:b(X,null),info:b(J,null)},Ee=B({name:`ProgressLine`,props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:`%`},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:n}){let r=R(()=>K(e.height)),i=R(()=>typeof e.fillColor==`object`?`linear-gradient(to right, ${e.fillColor?.stops[0]} , ${e.fillColor?.stops[1]})`:e.fillColor),a=R(()=>e.railBorderRadius===void 0?e.height===void 0?``:K(e.height,{c:.5}):K(e.railBorderRadius)),o=R(()=>e.fillBorderRadius===void 0?e.railBorderRadius===void 0?e.height===void 0?``:K(e.height,{c:.5}):K(e.railBorderRadius):K(e.fillBorderRadius));return()=>{let{indicatorPlacement:s,railColor:c,railStyle:l,percentage:u,unit:d,indicatorTextColor:f,status:p,showIndicator:m,processing:h,clsPrefix:g}=e;return b(`div`,{class:`${g}-progress-content`,role:`none`},b(`div`,{class:`${g}-progress-graph`,"aria-hidden":!0},b(`div`,{class:[`${g}-progress-graph-line`,{[`${g}-progress-graph-line--indicator-${s}`]:!0}]},b(`div`,{class:`${g}-progress-graph-line-rail`,style:[{backgroundColor:c,height:r.value,borderRadius:a.value},l]},b(`div`,{class:[`${g}-progress-graph-line-fill`,h&&`${g}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:i.value,height:r.value,lineHeight:r.value,borderRadius:o.value}},s===`inside`?b(`div`,{class:`${g}-progress-graph-line-indicator`,style:{color:f}},n.default?n.default():`${u}${d}`):null)))),m&&s===`outside`?b(`div`,null,n.default?b(`div`,{class:`${g}-progress-custom-content`,style:{color:f},role:`none`},n.default()):p==="default"?b(`div`,{role:`none`,class:`${g}-progress-icon ${g}-progress-icon--as-text`,style:{color:f}},u,d):b(`div`,{class:`${g}-progress-icon`,"aria-hidden":!0},b(t,{clsPrefix:g},{default:()=>Te[p]}))):null)}}});function $(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var De=B({name:`ProgressMultipleCircle`,props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){let n=R(()=>e.percentage.map((t,n)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`)),r=(t,n)=>{let r=e.fillColor[n],i=typeof r==`object`?r.stops[0]:``,a=typeof r==`object`?r.stops[1]:``;return typeof e.fillColor[n]==`object`&&b(`linearGradient`,{id:`gradient-${n}`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`},b(`stop`,{offset:`0%`,"stop-color":i}),b(`stop`,{offset:`100%`,"stop-color":a}))};return()=>{let{viewBoxWidth:i,strokeWidth:a,circleGap:o,showIndicator:s,fillColor:c,railColor:l,railStyle:u,percentage:d,clsPrefix:f}=e;return b(`div`,{class:`${f}-progress-content`,role:`none`},b(`div`,{class:`${f}-progress-graph`,"aria-hidden":!0},b(`div`,{class:`${f}-progress-graph-circle`},b(`svg`,{viewBox:`0 0 ${i} ${i}`},b(`defs`,null,d.map((e,t)=>r(e,t))),d.map((e,t)=>b(`g`,{key:t},b(`path`,{class:`${f}-progress-graph-circle-rail`,d:$(i/2-a/2*(1+2*t)-o*t,a,i),"stroke-width":a,"stroke-linecap":`round`,fill:`none`,style:[{strokeDashoffset:0,stroke:l[t]},u[t]]}),b(`path`,{class:[`${f}-progress-graph-circle-fill`,e===0&&`${f}-progress-graph-circle-fill--empty`],d:$(i/2-a/2*(1+2*t)-o*t,a,i),"stroke-width":a,"stroke-linecap":`round`,fill:`none`,style:{strokeDasharray:n.value[t],strokeDashoffset:0,stroke:typeof c[t]==`object`?`url(#gradient-${t})`:c[t]}})))))),s&&t.default?b(`div`,null,b(`div`,{class:`${f}-progress-text`},t.default())):null)}}}),Oe=a([m(`progress`,{display:`inline-block`},[m(`progress-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),s(`line`,`
 width: 100%;
 display: block;
 `,[m(`progress-content`,`
 display: flex;
 align-items: center;
 `,[m(`progress-graph`,{flex:1})]),m(`progress-custom-content`,{marginLeft:`14px`}),m(`progress-icon`,`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[s(`as-text`,`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),s(`circle, dashboard`,{width:`120px`},[m(`progress-custom-content`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),m(`progress-text`,`
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
 `),m(`progress-icon`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),s(`multiple-circle`,`
 width: 200px;
 color: inherit;
 `,[m(`progress-text`,`
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
 `)]),m(`progress-content`,{position:`relative`}),m(`progress-graph`,{position:`relative`},[m(`progress-graph-circle`,[a(`svg`,{verticalAlign:`bottom`}),m(`progress-graph-circle-fill`,`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[s(`empty`,{opacity:0})]),m(`progress-graph-circle-rail`,`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),m(`progress-graph-line`,[s(`indicator-inside`,[m(`progress-graph-line-rail`,`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[m(`progress-graph-line-fill`,`
 height: inherit;
 border-radius: 10px;
 `),m(`progress-graph-line-indicator`,`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),s(`indicator-inside-label`,`
 height: 16px;
 display: flex;
 align-items: center;
 `,[m(`progress-graph-line-rail`,`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),m(`progress-graph-line-indicator`,`
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
 `)]),m(`progress-graph-line-rail`,`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[m(`progress-graph-line-fill`,`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[s(`processing`,[a(`&::after`,`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),a(`@keyframes progress-processing-animation`,`
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
 `)]),ke=B({name:`Progress`,props:Object.assign(Object.assign({},O.props),{processing:Boolean,type:{type:String,default:`line`},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:`default`},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:`%`},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:`outside`},indicatorPlacement:{type:String,default:`outside`},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),setup(e){let t=R(()=>e.indicatorPlacement||e.indicatorPosition),n=R(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type===`dashboard`)return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=z(e),a=O(`Progress`,`-progress`,Oe,de,e,r),s=R(()=>{let{status:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontSize:r,fontSizeCircle:i,railColor:s,railHeight:c,iconSizeCircle:l,iconSizeLine:u,textColorCircle:d,textColorLineInner:f,textColorLineOuter:p,lineBgProcessing:m,fontWeightCircle:h,[o(`iconColor`,t)]:g,[o(`fillColor`,t)]:_}}=a.value;return{"--n-bezier":n,"--n-fill-color":_,"--n-font-size":r,"--n-font-size-circle":i,"--n-font-weight-circle":h,"--n-icon-color":g,"--n-icon-size-circle":l,"--n-icon-size-line":u,"--n-line-bg-processing":m,"--n-rail-color":s,"--n-rail-height":c,"--n-text-color-circle":d,"--n-text-color-line-inner":f,"--n-text-color-line-outer":p}}),c=i?A(`progress`,R(()=>e.status[0]),s,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:n,cssVars:i?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{type:e,cssVars:t,indicatorTextColor:n,showIndicator:r,status:i,railColor:a,railStyle:o,color:s,percentage:c,viewBoxWidth:l,strokeWidth:u,mergedIndicatorPlacement:d,unit:f,borderRadius:p,fillBorderRadius:m,height:h,processing:g,circleGap:_,mergedClsPrefix:v,gapDeg:y,gapOffsetDegree:x,themeClass:S,$slots:C,onRender:w}=this;return w?.(),b(`div`,{class:[S,`${v}-progress`,`${v}-progress--${e}`,`${v}-progress--${i}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,role:e===`circle`||e===`line`||e===`dashboard`?`progressbar`:`none`},e===`circle`||e===`dashboard`?b(we,{clsPrefix:v,status:i,showIndicator:r,indicatorTextColor:n,railColor:a,fillColor:s,railStyle:o,offsetDegree:this.offsetDegree,percentage:c,viewBoxWidth:l,strokeWidth:u,gapDegree:y===void 0?e===`dashboard`?75:0:y,gapOffsetDegree:x,unit:f},C):e===`line`?b(Ee,{clsPrefix:v,status:i,showIndicator:r,indicatorTextColor:n,railColor:a,fillColor:s,railStyle:o,percentage:c,processing:g,indicatorPlacement:d,unit:f,fillBorderRadius:m,railBorderRadius:p,height:h},C):e===`multiple-circle`?b(De,{clsPrefix:v,strokeWidth:u,railColor:a,fillColor:s,railStyle:o,viewBoxWidth:l,percentage:c,showIndicator:r,circleGap:_},C):null)}}),Ae={class:`home-view`},je={class:`hero-section`},Me={class:`hero-content`},Ne={class:`hero-status`},Pe={key:0,class:`update-time`},Fe={class:`mode-switch-bar`},Ie={class:`mode-switch-inner`},Le={class:`mode-left`},Re={class:`mode-right`},ze={class:`mode-desc`},Be={class:`metric-grid`},Ve={class:`metric-inner`},He={class:`metric-icon`},Ue={class:`metric-info`},We={class:`metric-label`},Ge={class:`summary-body`},Ke={class:`summary-label`},qe={class:`summary-value`},Je={key:0,class:`empty-hint`},Ye={class:`timeline-list`},Xe={class:`timeline-time`},Ze={class:`timeline-text`},Qe={key:0,class:`empty-hint`},$e={key:0,class:`chart-trend`},et={class:`trend-bars`},tt={class:`bar-wrapper`},nt={class:`bar-label`},rt={key:1,class:`empty-hint`},it={key:0,class:`chart-pie`},at={viewBox:`0 0 160 160`,class:`pie-svg`},ot=[`stroke`,`stroke-dasharray`,`stroke-dashoffset`],st={class:`pie-legend`},ct={key:1,class:`empty-hint`},lt={key:0,class:`chart-bar`},ut={class:`bar-row-name`},dt={class:`bar-row-val`},ft={key:1,class:`empty-hint`},pt={class:`health-grid`},mt={class:`health-item`},ht={class:`health-left`},gt={class:`health-name`},_t={class:`health-detail`},vt=`wfbot_data_mode`,yt=I(B({__name:`HomeView`,setup(e){let t=pe(),n=he(),r=fe(),i=me(),a=g(localStorage.getItem(vt)||`demo`);ne(a,e=>{localStorage.setItem(vt,e)});let o=R(()=>a.value===`demo`),s=R(()=>i.hasAnyCredential),c=R(()=>a.value===`real`&&!s.value),u=[{label:`今日提交`,value:12,unit:`次`,icon:`📝`,color:`var(--primary)`},{label:`任务完成率`,value:78,unit:`%`,icon:`✅`,color:`var(--success)`},{label:`活跃成员`,value:8,unit:`人`,icon:`👥`,color:`var(--info)`},{label:`代码变更`,value:2840,unit:`行`,icon:`📊`,color:`var(--warning)`}],f=[{label:`活跃仓库`,value:3},{label:`新增 Issue`,value:7},{label:`已关闭 Issue`,value:5},{label:`代码审查`,value:12},{label:`发布版本`,value:2}],p=[{time:`10:30`,text:`张三 提交了 dashboard 模块更新`,type:`commit`},{time:`09:45`,text:`李四 合并了 PR #128 feature/user-auth`,type:`pr`},{time:`09:15`,text:`蛋挞 提交了 3 个 commit 到 feat/api-optimize`,type:`commit`},{time:`09:00`,text:`飞书审批单 #20240709-001 已通过`,type:`approval`},{time:`08:30`,text:`每日站会纪要已自动生成`,type:`meeting`}],m=[{name:`周一`,commits:12,prs:5},{name:`周二`,commits:18,prs:8},{name:`周三`,commits:15,prs:6},{name:`周四`,commits:22,prs:10},{name:`周五`,commits:16,prs:7},{name:`周六`,commits:8,prs:3},{name:`周日`,commits:4,prs:1}],v=[{name:`前端`,value:35,color:`#6C5CE7`},{name:`后端`,value:28,color:`#00B894`},{name:`DevOps`,value:15,color:`#FDCB6E`},{name:`测试`,value:12,color:`#FF7675`},{name:`文档`,value:10,color:`#74B9FF`}],b=[{name:`张三`,commits:24,prs:6},{name:`李四`,commits:18,prs:8},{name:`王五`,commits:15,prs:4},{name:`赵六`,commits:12,prs:3},{name:`孙七`,commits:9,prs:2},{name:`蛋挞`,commits:20,prs:5}],x=[{name:`GitHub 连接`,status:`ok`,value:`正常`,detail:`API 响应时间 120ms`},{name:`飞书连接`,status:`ok`,value:`正常`,detail:`Token 有效期至 2026-08-01`},{name:`天气服务`,status:`warning`,value:`延迟`,detail:`API 响应时间 2.3s`},{name:`AI 服务`,status:`ok`,value:`正常`,detail:`模型 DeepSeek-V4 可用`}],T=R(()=>[{label:`今日提交`,value:n.stats?.commits??0,unit:`次`,icon:`📝`,color:`var(--primary)`},{label:`任务完成率`,value:n.stats?.taskRate??0,unit:`%`,icon:`✅`,color:`var(--success)`},{label:`活跃成员`,value:n.stats?.members??0,unit:`人`,icon:`👥`,color:`var(--info)`},{label:`代码变更`,value:n.stats?.changes??0,unit:`行`,icon:`📊`,color:`var(--warning)`}]),E=R(()=>[{label:`活跃仓库`,value:n.stats?.activeRepos??0},{label:`新增 Issue`,value:n.stats?.newIssues??0},{label:`已关闭 Issue`,value:n.stats?.closedIssues??0},{label:`代码审查`,value:n.stats?.reviews??0},{label:`发布版本`,value:n.stats?.releases??0}]),O=R(()=>{let e=n.updates;return e.length===0?[]:e.slice(0,6).map(e=>({time:e.time?new Date(e.time).toLocaleTimeString(`zh-CN`,{hour:`2-digit`,minute:`2-digit`}):`--`,text:`${e.author} ${e.content}`,type:e.source}))}),k=R(()=>o.value?u:T.value),A=R(()=>o.value?f:E.value),F=R(()=>o.value?p:O.value),I=R(()=>o.value?m:[]),z=R(()=>o.value?v:[]),B=R(()=>o.value?b:[]),V=R(()=>o.value?x:[]),H=g(!1),G=R(()=>o.value?{type:`success`,text:`演示模式运行中`}:s.value?{type:`success`,text:`系统运行中`}:{type:`warning`,text:`未配置凭证，请先配置连接`});return ee(async()=>{o.value?await n.loadDemoData():await n.loadRealData(),r.updateTime()}),ne(a,async e=>{e===`demo`?await n.loadDemoData():await n.loadRealData()}),(e,i)=>(l(),j(`div`,Ae,[S(`section`,je,[S(`div`,Me,[i[4]||=S(`h1`,{class:`hero-title`},`团队工作流智能看板`,-1),i[5]||=S(`p`,{class:`hero-subtitle`},`实时追踪团队动态，智能分析开发效能`,-1),S(`div`,Ne,[_(M(Z),{type:G.value.type,round:``,size:`large`},{icon:h(()=>[S(`span`,{class:te([`status-dot`,G.value.type])},null,2)]),default:h(()=>[w(` `+y(G.value.text),1)]),_:1},8,[`type`]),M(r).lastUpdateTime?(l(),j(`span`,Pe,` 最后更新: `+y(M(r).lastUpdateTime),1)):P(``,!0)])])]),S(`div`,Fe,[S(`div`,Ie,[S(`div`,Le,[i[8]||=S(`span`,{class:`mode-label`},`数据模式`,-1),_(M(se),{value:a.value===`real`,"onUpdate:value":i[0]||=e=>a.value=e?`real`:`demo`},{checked:h(()=>[...i[6]||=[S(`span`,{style:{"font-size":`0.75rem`,padding:`0 4px`}},`真实`,-1)]]),unchecked:h(()=>[...i[7]||=[S(`span`,{style:{"font-size":`0.75rem`,padding:`0 4px`}},`虚拟`,-1)]]),_:1},8,[`value`])]),S(`div`,Re,[_(M(Z),{type:o.value?`info`:`success`,size:`small`,round:``},{default:h(()=>[w(y(o.value?`📺 虚拟演示数据`:`🔗 真实 API 数据`),1)]),_:1},8,[`type`]),S(`span`,ze,y(o.value?`展示预设的模拟数据，用于预览和演示`:`连接已配置的平台 API，拉取真实数据`),1)])])]),c.value?(l(),C(M(oe),{key:0,type:`warning`,bordered:!1,closable:``,class:`cred-warning`},{header:h(()=>[...i[9]||=[w(` 尚未配置平台凭证，请点击右上角头像 →「管理凭证」配置 GitHub、飞书等平台连接。 `,-1)]]),_:1})):P(``,!0),S(`div`,Be,[(l(!0),j(N,null,d(k.value,e=>(l(),C(M(L),{key:e.label,class:`metric-card card-hover`},{default:h(()=>[S(`div`,Ve,[S(`span`,He,y(e.icon),1),S(`div`,Ue,[S(`span`,We,y(e.label),1),S(`span`,{class:`metric-value`,style:D({color:e.color})},[w(y(M(n).loading&&!o.value?`--`:e.value)+` `,1),S(`small`,null,y(e.unit),1)],4)])])]),_:2},1024))),128))]),_(M(W),{cols:12,"x-gap":20,"y-gap":20},{default:h(()=>[_(M(U),{span:7},{default:h(()=>[_(M(L),{title:`📋 今日概览`,class:`summary-card`},{default:h(()=>[_(M(ce),{show:M(n).loading&&!o.value},{default:h(()=>[S(`div`,Ge,[(l(!0),j(N,null,d(A.value,e=>(l(),j(`div`,{key:e.label,class:`summary-row`},[S(`span`,Ke,y(e.label),1),S(`span`,qe,y(e.value),1)]))),128)),A.value.length===0&&!o.value?(l(),j(`div`,Je,` 暂无数据，请确认已配置平台凭证 `)):P(``,!0)])]),_:1},8,[`show`])]),_:1})]),_:1}),_(M(U),{span:5},{default:h(()=>[_(M(L),{title:`🕐 动态时间线`,class:`timeline-card`},{default:h(()=>[S(`div`,Ye,[(l(!0),j(N,null,d(F.value,(e,t)=>(l(),j(`div`,{key:t,class:`timeline-item`},[S(`span`,Xe,y(e.time),1),i[10]||=S(`span`,{class:`timeline-dot`},null,-1),S(`span`,Ze,y(e.text),1)]))),128)),F.value.length===0&&!o.value?(l(),j(`div`,Qe,` 暂无动态 `)):P(``,!0)])]),_:1})]),_:1})]),_:1}),_(M(W),{cols:3,"x-gap":20,"y-gap":20,class:`chart-grid`},{default:h(()=>[_(M(U),null,{default:h(()=>[_(M(L),{title:`📈 提交趋势 (本周)`,class:`chart-card-clickable`,onClick:i[1]||=e=>M(t).push(`/reports`)},{default:h(()=>[I.value.length>0?(l(),j(`div`,$e,[S(`div`,et,[(l(!0),j(N,null,d(I.value,e=>(l(),j(`div`,{key:e.name,class:`trend-bar-group`},[S(`div`,tt,[S(`div`,{class:`bar bar-commits`,style:D({height:e.commits/22*120+`px`})},null,4),S(`div`,{class:`bar bar-prs`,style:D({height:e.prs/10*120+`px`})},null,4)]),S(`span`,nt,y(e.name),1)]))),128))]),i[11]||=S(`div`,{class:`chart-legend`},[S(`span`,{class:`legend-item`},[S(`span`,{class:`legend-dot`,style:{background:`#6C5CE7`}}),w(` 提交`)]),S(`span`,{class:`legend-item`},[S(`span`,{class:`legend-dot`,style:{background:`#A29BFE`}}),w(` PR`)])],-1)])):(l(),j(`div`,rt,`暂无趋势数据，请配置 GitHub 凭证`))]),_:1})]),_:1}),_(M(U),null,{default:h(()=>[_(M(L),{title:`🍩 任务分布`},{default:h(()=>[z.value.length>0?(l(),j(`div`,it,[(l(),j(`svg`,at,[i[12]||=S(`circle`,{cx:`80`,cy:`80`,r:`60`,fill:`none`,stroke:`#eee`,"stroke-width":`20`},null,-1),(l(!0),j(N,null,d(z.value,(e,t)=>(l(),j(`circle`,{key:e.name,cx:`80`,cy:`80`,r:`60`,fill:`none`,stroke:e.color,"stroke-width":`20`,"stroke-dasharray":`${e.value/100*377} 377`,"stroke-dashoffset":z.value.slice(0,t).reduce((e,t)=>e-t.value/100*377,0),transform:`rotate(-90 80 80)`},null,8,ot))),128))])),S(`div`,st,[(l(!0),j(N,null,d(z.value,e=>(l(),j(`span`,{key:e.name,class:`pie-legend-item`},[S(`span`,{class:`pie-dot`,style:D({background:e.color})},null,4),w(` `+y(e.name)+` `+y(e.value)+`% `,1)]))),128))])])):(l(),j(`div`,ct,`暂无任务分布数据`))]),_:1})]),_:1}),_(M(U),null,{default:h(()=>[_(M(L),{title:`👤 成员活跃度`,class:`chart-card-clickable`,onClick:i[2]||=e=>M(t).push(`/reports`)},{default:h(()=>[B.value.length>0?(l(),j(`div`,lt,[(l(!0),j(N,null,d(B.value,e=>(l(),j(`div`,{key:e.name,class:`bar-row`},[S(`span`,ut,y(e.name),1),_(M(ke),{percentage:Math.round(e.commits/24*100),height:20,"border-radius":10,color:`#6C5CE7`,"rail-color":`var(--bg-input)`,"show-indicator":!1},null,8,[`percentage`]),S(`span`,dt,y(e.commits)+`次`,1)]))),128))])):(l(),j(`div`,ft,`暂无活跃度数据`))]),_:1})]),_:1})]),_:1}),_(M(be),{"expanded-names":H.value?[`health`]:[],"onUpdate:expandedNames":i[3]||=e=>H.value=e.includes(`health`)},{default:h(()=>[_(M(Se),{name:`health`},{header:h(()=>[...i[13]||=[S(`span`,{class:`health-header`},`🏥 系统健康检查`,-1)]]),default:h(()=>[S(`div`,pt,[(l(!0),j(N,null,d(V.value,e=>(l(),C(M(L),{key:e.name,size:`small`,class:`health-card`},{default:h(()=>[S(`div`,mt,[S(`div`,ht,[S(`span`,gt,y(e.name),1),S(`span`,_t,y(e.detail),1)]),_(M(Z),{type:e.status===`ok`?`success`:e.status===`warning`?`warning`:`error`,size:`small`,round:``},{default:h(()=>[w(y(e.value),1)]),_:2},1032,[`type`])])]),_:2},1024))),128))])]),_:1})]),_:1},8,[`expanded-names`])]))}}),[[`__scopeId`,`data-v-7bd08cd3`]]);export{yt as default};