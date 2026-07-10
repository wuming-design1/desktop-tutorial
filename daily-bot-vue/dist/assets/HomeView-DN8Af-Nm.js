import{$n as e,Ct as t,En as n,Gn as r,I as i,In as a,Kn as o,Kt as s,Ln as c,N as l,Nn as u,Nt as d,Qt as f,Rn as p,Sn as m,Un as h,Xt as g,Yt as _,Zt as v,_n as y,bn as b,cn as x,cr as S,gn as C,hn as w,j as T,jt as E,lr as D,m as O,mn as k,mt as A,nn as j,or as M,pt as N,qt as P,rr as F,sr as ee,t as I,un as L,vn as R,wn as z,wt as B,xn as V,xt as H,yt as U}from"./_plugin-vue_export-helper-MsG4zd-3.js";import{n as W}from"./_common-DBAoCL-8.js";import{n as G,t as K}from"./Grid-B5NtiG4a.js";import{t as q}from"./misc-v7XGxIq4.js";import{t as te}from"./use-false-until-truthy-C6FpirWm.js";import{t as ne}from"./use-merged-state-cgcCleiG.js";import{t as re}from"./FadeInExpandTransition-CbGSAh5U.js";import{t as ie}from"./Alert-D6r-Wcoq.js";import{t as ae}from"./Switch-RpqyMN4D.js";import{t as oe}from"./Spin-BGpzGnkj.js";import{F as J,I as se,M as Y,N as X,P as Z,S as ce,T as Q,V as $,d as le,i as ue,o as de,r as fe,t as pe,v as me}from"./index-DfuKCr8-.js";var he=m({name:`ChevronLeft`,render(){return z(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},z(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`}))}}),ge=P(`collapse`,`width: 100%;`,[P(`collapse-item`,`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[g(`disabled`,[_(`header`,`cursor: not-allowed;`,[_(`header-main`,`
 color: var(--n-title-text-color-disabled);
 `),P(`collapse-item-arrow`,`
 color: var(--n-arrow-color-disabled);
 `)])]),P(`collapse-item`,`margin-left: 32px;`),s(`&:first-child`,`margin-top: 0;`),s(`&:first-child >`,[_(`header`,`padding-top: 0;`)]),g(`left-arrow-placement`,[_(`header`,[P(`collapse-item-arrow`,`margin-right: 4px;`)])]),g(`right-arrow-placement`,[_(`header`,[P(`collapse-item-arrow`,`margin-left: 4px;`)])]),_(`content-wrapper`,[_(`content-inner`,`padding-top: 16px;`),ce({duration:`0.15s`})]),g(`active`,[_(`header`,[g(`active`,[P(`collapse-item-arrow`,`transform: rotate(90deg);`)])])]),s(`&:not(:first-child)`,`border-top: 1px solid var(--n-divider-color);`),v(`disabled`,[g(`trigger-area-main`,[_(`header`,[_(`header-main`,`cursor: pointer;`),P(`collapse-item-arrow`,`cursor: default;`)])]),g(`trigger-area-arrow`,[_(`header`,[P(`collapse-item-arrow`,`cursor: pointer;`)])]),g(`trigger-area-extra`,[_(`header`,[_(`header-extra`,`cursor: pointer;`)])])]),_(`header`,`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[_(`header-main`,`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),_(`header-extra`,`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),P(`collapse-item-arrow`,`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),_e=Object.assign(Object.assign({},l.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:`left`},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:`if`},triggerAreas:{type:Array,default:()=>[`main`,`extra`,`arrow`]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),ve=E(`n-collapse`),ye=m({name:`Collapse`,props:_e,slots:Object,setup(n,{slots:r}){let{mergedClsPrefixRef:a,inlineThemeDisabled:o,mergedRtlRef:s}=A(n),u=e(n.defaultExpandedNames),d=ne(k(()=>n.expandedNames),u),f=l(`Collapse`,`-collapse`,ge,me,n,a);function p(e){let{"onUpdate:expandedNames":r,onUpdateExpandedNames:i,onExpandedNamesChange:a}=n;i&&t(i,e),r&&t(r,e),a&&t(a,e),u.value=e}function m(e){let{onItemHeaderClick:r}=n;r&&t(r,e)}function h(e,t,r){let{accordion:i}=n,{value:a}=d;if(i)e?(p([t]),m({name:t,expanded:!0,event:r})):(p([]),m({name:t,expanded:!1,event:r}));else if(!Array.isArray(a))p([t]),m({name:t,expanded:!0,event:r});else{let e=a.slice(),n=e.findIndex(e=>t===e);~n?(e.splice(n,1),p(e),m({name:t,expanded:!1,event:r})):(e.push(t),p(e),m({name:t,expanded:!0,event:r}))}}c(ve,{props:n,mergedClsPrefixRef:a,expandedNamesRef:d,slots:r,toggleItem:h});let g=i(`Collapse`,s,a),_=k(()=>{let{common:{cubicBezierEaseInOut:e},self:{titleFontWeight:t,dividerColor:n,titlePadding:r,titleTextColor:i,titleTextColorDisabled:a,textColor:o,arrowColor:s,fontSize:c,titleFontSize:l,arrowColorDisabled:u,itemMargin:d}}=f.value;return{"--n-font-size":c,"--n-bezier":e,"--n-text-color":o,"--n-divider-color":n,"--n-title-padding":r,"--n-title-font-size":l,"--n-title-text-color":i,"--n-title-text-color-disabled":a,"--n-title-font-weight":t,"--n-arrow-color":s,"--n-arrow-color-disabled":u,"--n-item-margin":d}}),v=o?N(`collapse`,void 0,_,n):void 0;return{rtlEnabled:g,mergedTheme:f,mergedClsPrefix:a,cssVars:o?void 0:_,themeClass:v?.themeClass,onRender:v?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),z(`div`,{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),be=m({name:`CollapseItemContent`,props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:te(F(e,`show`))}},render(){return z(re,null,{default:()=>{let{show:e,displayDirective:t,onceTrue:n,clsPrefix:r}=this,i=t===`show`&&n,a=z(`div`,{class:`${r}-collapse-item__content-wrapper`},z(`div`,{class:`${r}-collapse-item__content-inner`},this.$slots));return i?o(a,[[x,e]]):e?a:null}})}}),xe=m({name:`CollapseItem`,props:{title:String,name:[String,Number],disabled:Boolean,displayDirective:String},setup(e){let{mergedRtlRef:t}=A(e),r=q(),a=d(()=>e.name??r),o=n(ve);o||B(`collapse-item`,"`n-collapse-item` must be placed inside `n-collapse`.");let{expandedNamesRef:s,props:c,mergedClsPrefixRef:l,slots:u}=o,f=k(()=>{let{value:e}=s;if(Array.isArray(e)){let{value:t}=a;return!~e.findIndex(e=>e===t)}else if(e){let{value:t}=a;return t!==e}return!0});return{rtlEnabled:i(`Collapse`,t,l),collapseSlots:u,randomName:r,mergedClsPrefix:l,collapsed:f,triggerAreas:F(c,`triggerAreas`),mergedDisplayDirective:k(()=>{let{displayDirective:t}=e;return t||c.displayDirective}),arrowPlacement:k(()=>c.arrowPlacement),handleClick(t){let n=`main`;W(t,`arrow`)&&(n=`arrow`),W(t,`extra`)&&(n=`extra`),c.triggerAreas.includes(n)&&o&&!e.disabled&&o.toggleItem(f.value,a.value,t)}}},render(){let{collapseSlots:e,$slots:t,arrowPlacement:n,collapsed:r,mergedDisplayDirective:i,mergedClsPrefix:a,disabled:o,triggerAreas:s}=this,c=U(t.header,{collapsed:r},()=>[this.title]),l=t[`header-extra`]||e[`header-extra`],u=t.arrow||e.arrow;return z(`div`,{class:[`${a}-collapse-item`,`${a}-collapse-item--${n}-arrow-placement`,o&&`${a}-collapse-item--disabled`,!r&&`${a}-collapse-item--active`,s.map(e=>`${a}-collapse-item--trigger-area-${e}`)]},z(`div`,{class:[`${a}-collapse-item__header`,!r&&`${a}-collapse-item__header--active`]},z(`div`,{class:`${a}-collapse-item__header-main`,onClick:this.handleClick},n===`right`&&c,z(`div`,{class:`${a}-collapse-item-arrow`,key:+!this.rtlEnabled,"data-arrow":!0},U(u,{collapsed:r},()=>[z(T,{clsPrefix:a},{default:()=>this.rtlEnabled?z(he,null):z(se,null)})])),n===`left`&&c),H(l,{collapsed:r},e=>z(`div`,{class:`${a}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},e))),z(be,{clsPrefix:a,displayDirective:i,show:!r},t))}}),Se={success:z(X,null),error:z(J,null),warning:z(Y,null),info:z(Z,null)},Ce=m({name:`ProgressCircle`,props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){let n=k(()=>{let t=`gradient`,{fillColor:n}=e;return typeof n==`object`?`${t}-${j(JSON.stringify(n))}`:t});function r(t,r,i,a){let{gapDegree:o,viewBoxWidth:s,strokeWidth:c}=e,l=50+c/2,u=`M ${l},${l} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`,d=Math.PI*2*50;return{pathString:u,pathStyle:{stroke:a===`rail`?i:typeof e.fillColor==`object`?`url(#${n.value})`:i,strokeDasharray:`${Math.min(t,100)/100*(d-o)}px ${s*8}px`,strokeDashoffset:`-${o/2}px`,transformOrigin:r?`center`:void 0,transform:r?`rotate(${r}deg)`:void 0}}}let i=()=>{let t=typeof e.fillColor==`object`,r=t?e.fillColor.stops[0]:``,i=t?e.fillColor.stops[1]:``;return t&&z(`defs`,null,z(`linearGradient`,{id:n.value,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`},z(`stop`,{offset:`0%`,"stop-color":r}),z(`stop`,{offset:`100%`,"stop-color":i})))};return()=>{let{fillColor:n,railColor:a,strokeWidth:o,offsetDegree:s,status:c,percentage:l,showIndicator:u,indicatorTextColor:d,unit:f,gapOffsetDegree:p,clsPrefix:m}=e,{pathString:h,pathStyle:g}=r(100,0,a,`rail`),{pathString:_,pathStyle:v}=r(l,s,n,`fill`),y=100+o;return z(`div`,{class:`${m}-progress-content`,role:`none`},z(`div`,{class:`${m}-progress-graph`,"aria-hidden":!0},z(`div`,{class:`${m}-progress-graph-circle`,style:{transform:p?`rotate(${p}deg)`:void 0}},z(`svg`,{viewBox:`0 0 ${y} ${y}`},i(),z(`g`,null,z(`path`,{class:`${m}-progress-graph-circle-rail`,d:h,"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:g})),z(`g`,null,z(`path`,{class:[`${m}-progress-graph-circle-fill`,l===0&&`${m}-progress-graph-circle-fill--empty`],d:_,"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:v}))))),u?z(`div`,null,t.default?z(`div`,{class:`${m}-progress-custom-content`,role:`none`},t.default()):c==="default"?z(`div`,{class:`${m}-progress-text`,style:{color:d},role:`none`},z(`span`,{class:`${m}-progress-text__percentage`},l),z(`span`,{class:`${m}-progress-text__unit`},f)):z(`div`,{class:`${m}-progress-icon`,"aria-hidden":!0},z(T,{clsPrefix:m},{default:()=>Se[c]}))):null)}}}),we={success:z(X,null),error:z(J,null),warning:z(Y,null),info:z(Z,null)},Te=m({name:`ProgressLine`,props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:`%`},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){let n=k(()=>$(e.height)),r=k(()=>typeof e.fillColor==`object`?`linear-gradient(to right, ${e.fillColor?.stops[0]} , ${e.fillColor?.stops[1]})`:e.fillColor),i=k(()=>e.railBorderRadius===void 0?e.height===void 0?``:$(e.height,{c:.5}):$(e.railBorderRadius)),a=k(()=>e.fillBorderRadius===void 0?e.railBorderRadius===void 0?e.height===void 0?``:$(e.height,{c:.5}):$(e.railBorderRadius):$(e.fillBorderRadius));return()=>{let{indicatorPlacement:o,railColor:s,railStyle:c,percentage:l,unit:u,indicatorTextColor:d,status:f,showIndicator:p,processing:m,clsPrefix:h}=e;return z(`div`,{class:`${h}-progress-content`,role:`none`},z(`div`,{class:`${h}-progress-graph`,"aria-hidden":!0},z(`div`,{class:[`${h}-progress-graph-line`,{[`${h}-progress-graph-line--indicator-${o}`]:!0}]},z(`div`,{class:`${h}-progress-graph-line-rail`,style:[{backgroundColor:s,height:n.value,borderRadius:i.value},c]},z(`div`,{class:[`${h}-progress-graph-line-fill`,m&&`${h}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:r.value,height:n.value,lineHeight:n.value,borderRadius:a.value}},o===`inside`?z(`div`,{class:`${h}-progress-graph-line-indicator`,style:{color:d}},t.default?t.default():`${l}${u}`):null)))),p&&o===`outside`?z(`div`,null,t.default?z(`div`,{class:`${h}-progress-custom-content`,style:{color:d},role:`none`},t.default()):f==="default"?z(`div`,{role:`none`,class:`${h}-progress-icon ${h}-progress-icon--as-text`,style:{color:d}},l,u):z(`div`,{class:`${h}-progress-icon`,"aria-hidden":!0},z(T,{clsPrefix:h},{default:()=>we[f]}))):null)}}});function Ee(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var De=m({name:`ProgressMultipleCircle`,props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){let n=k(()=>e.percentage.map((t,n)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`)),r=(t,n)=>{let r=e.fillColor[n],i=typeof r==`object`?r.stops[0]:``,a=typeof r==`object`?r.stops[1]:``;return typeof e.fillColor[n]==`object`&&z(`linearGradient`,{id:`gradient-${n}`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`},z(`stop`,{offset:`0%`,"stop-color":i}),z(`stop`,{offset:`100%`,"stop-color":a}))};return()=>{let{viewBoxWidth:i,strokeWidth:a,circleGap:o,showIndicator:s,fillColor:c,railColor:l,railStyle:u,percentage:d,clsPrefix:f}=e;return z(`div`,{class:`${f}-progress-content`,role:`none`},z(`div`,{class:`${f}-progress-graph`,"aria-hidden":!0},z(`div`,{class:`${f}-progress-graph-circle`},z(`svg`,{viewBox:`0 0 ${i} ${i}`},z(`defs`,null,d.map((e,t)=>r(e,t))),d.map((e,t)=>z(`g`,{key:t},z(`path`,{class:`${f}-progress-graph-circle-rail`,d:Ee(i/2-a/2*(1+2*t)-o*t,a,i),"stroke-width":a,"stroke-linecap":`round`,fill:`none`,style:[{strokeDashoffset:0,stroke:l[t]},u[t]]}),z(`path`,{class:[`${f}-progress-graph-circle-fill`,e===0&&`${f}-progress-graph-circle-fill--empty`],d:Ee(i/2-a/2*(1+2*t)-o*t,a,i),"stroke-width":a,"stroke-linecap":`round`,fill:`none`,style:{strokeDasharray:n.value[t],strokeDashoffset:0,stroke:typeof c[t]==`object`?`url(#gradient-${t})`:c[t]}})))))),s&&t.default?z(`div`,null,z(`div`,{class:`${f}-progress-text`},t.default())):null)}}}),Oe=s([P(`progress`,{display:`inline-block`},[P(`progress-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),g(`line`,`
 width: 100%;
 display: block;
 `,[P(`progress-content`,`
 display: flex;
 align-items: center;
 `,[P(`progress-graph`,{flex:1})]),P(`progress-custom-content`,{marginLeft:`14px`}),P(`progress-icon`,`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[g(`as-text`,`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),g(`circle, dashboard`,{width:`120px`},[P(`progress-custom-content`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),P(`progress-text`,`
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
 `),P(`progress-icon`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),g(`multiple-circle`,`
 width: 200px;
 color: inherit;
 `,[P(`progress-text`,`
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
 `)]),P(`progress-content`,{position:`relative`}),P(`progress-graph`,{position:`relative`},[P(`progress-graph-circle`,[s(`svg`,{verticalAlign:`bottom`}),P(`progress-graph-circle-fill`,`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[g(`empty`,{opacity:0})]),P(`progress-graph-circle-rail`,`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),P(`progress-graph-line`,[g(`indicator-inside`,[P(`progress-graph-line-rail`,`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[P(`progress-graph-line-fill`,`
 height: inherit;
 border-radius: 10px;
 `),P(`progress-graph-line-indicator`,`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),g(`indicator-inside-label`,`
 height: 16px;
 display: flex;
 align-items: center;
 `,[P(`progress-graph-line-rail`,`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),P(`progress-graph-line-indicator`,`
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
 `)]),P(`progress-graph-line-rail`,`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[P(`progress-graph-line-fill`,`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[g(`processing`,[s(`&::after`,`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),s(`@keyframes progress-processing-animation`,`
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
 `)]),ke=m({name:`Progress`,props:Object.assign(Object.assign({},l.props),{processing:Boolean,type:{type:String,default:`line`},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:`default`},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:`%`},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:`outside`},indicatorPlacement:{type:String,default:`outside`},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),setup(e){let t=k(()=>e.indicatorPlacement||e.indicatorPosition),n=k(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type===`dashboard`)return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=A(e),a=l(`Progress`,`-progress`,Oe,le,e,r),o=k(()=>{let{status:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontSize:r,fontSizeCircle:i,railColor:o,railHeight:s,iconSizeCircle:c,iconSizeLine:l,textColorCircle:u,textColorLineInner:d,textColorLineOuter:p,lineBgProcessing:m,fontWeightCircle:h,[f(`iconColor`,t)]:g,[f(`fillColor`,t)]:_}}=a.value;return{"--n-bezier":n,"--n-fill-color":_,"--n-font-size":r,"--n-font-size-circle":i,"--n-font-weight-circle":h,"--n-icon-color":g,"--n-icon-size-circle":c,"--n-icon-size-line":l,"--n-line-bg-processing":m,"--n-rail-color":o,"--n-rail-height":s,"--n-text-color-circle":u,"--n-text-color-line-inner":d,"--n-text-color-line-outer":p}}),s=i?N(`progress`,k(()=>e.status[0]),o,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:n,cssVars:i?void 0:o,themeClass:s?.themeClass,onRender:s?.onRender}},render(){let{type:e,cssVars:t,indicatorTextColor:n,showIndicator:r,status:i,railColor:a,railStyle:o,color:s,percentage:c,viewBoxWidth:l,strokeWidth:u,mergedIndicatorPlacement:d,unit:f,borderRadius:p,fillBorderRadius:m,height:h,processing:g,circleGap:_,mergedClsPrefix:v,gapDeg:y,gapOffsetDegree:b,themeClass:x,$slots:S,onRender:C}=this;return C?.(),z(`div`,{class:[x,`${v}-progress`,`${v}-progress--${e}`,`${v}-progress--${i}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,role:e===`circle`||e===`line`||e===`dashboard`?`progressbar`:`none`},e===`circle`||e===`dashboard`?z(Ce,{clsPrefix:v,status:i,showIndicator:r,indicatorTextColor:n,railColor:a,fillColor:s,railStyle:o,offsetDegree:this.offsetDegree,percentage:c,viewBoxWidth:l,strokeWidth:u,gapDegree:y===void 0?e===`dashboard`?75:0:y,gapOffsetDegree:b,unit:f},S):e===`line`?z(Te,{clsPrefix:v,status:i,showIndicator:r,indicatorTextColor:n,railColor:a,fillColor:s,railStyle:o,percentage:c,processing:g,indicatorPlacement:d,unit:f,fillBorderRadius:m,railBorderRadius:p,height:h},S):e===`multiple-circle`?z(De,{clsPrefix:v,strokeWidth:u,railColor:a,fillColor:s,railStyle:o,viewBoxWidth:l,percentage:c,showIndicator:r,circleGap:_},S):null)}}),Ae={class:`home-view`},je={class:`hero-section`},Me={class:`hero-content`},Ne={class:`hero-status`},Pe={key:0,class:`update-time`},Fe={class:`mode-switch-bar`},Ie={class:`mode-switch-inner`},Le={class:`mode-left`},Re={class:`mode-right`},ze={class:`mode-desc`},Be={class:`metric-grid`},Ve={class:`metric-inner`},He={class:`metric-icon`},Ue={class:`metric-info`},We={class:`metric-label`},Ge={class:`summary-body`},Ke={class:`summary-label`},qe={class:`summary-value`},Je={key:0,class:`empty-hint`},Ye={class:`timeline-list`},Xe={class:`timeline-time`},Ze={class:`timeline-text`},Qe={key:0,class:`empty-hint`},$e={key:0,class:`chart-trend`},et={class:`trend-bars`},tt={class:`bar-wrapper`},nt={class:`bar-label`},rt={key:1,class:`empty-hint`},it={key:0,class:`chart-pie`},at={viewBox:`0 0 160 160`,class:`pie-svg`},ot=[`stroke`,`stroke-dasharray`,`stroke-dashoffset`],st={class:`pie-legend`},ct={key:1,class:`empty-hint`},lt={key:0,class:`chart-bar`},ut={class:`bar-row-name`},dt={class:`bar-row-val`},ft={key:1,class:`empty-hint`},pt={class:`health-grid`},mt={class:`health-item`},ht={class:`health-left`},gt={class:`health-name`},_t={class:`health-detail`},vt=`wfbot_data_mode`,yt=I(m({__name:`HomeView`,setup(t){let n=de(),i=pe(),o=ue(),s=fe(),c=e(localStorage.getItem(vt)||`demo`);h(c,e=>{localStorage.setItem(vt,e)});let l=k(()=>c.value===`demo`),d=k(()=>s.hasAnyCredential),f=k(()=>c.value===`real`&&!d.value),m=[{label:`今日提交`,value:12,unit:`次`,icon:`📝`,color:`var(--primary)`},{label:`任务完成率`,value:78,unit:`%`,icon:`✅`,color:`var(--success)`},{label:`活跃成员`,value:8,unit:`人`,icon:`👥`,color:`var(--info)`},{label:`代码变更`,value:2840,unit:`行`,icon:`📊`,color:`var(--warning)`}],g=[{label:`活跃仓库`,value:3},{label:`新增 Issue`,value:7},{label:`已关闭 Issue`,value:5},{label:`代码审查`,value:12},{label:`发布版本`,value:2}],_=[{time:`10:30`,text:`张三 提交了 dashboard 模块更新`,type:`commit`},{time:`09:45`,text:`李四 合并了 PR #128 feature/user-auth`,type:`pr`},{time:`09:15`,text:`蛋挞 提交了 3 个 commit 到 feat/api-optimize`,type:`commit`},{time:`09:00`,text:`飞书审批单 #20240709-001 已通过`,type:`approval`},{time:`08:30`,text:`每日站会纪要已自动生成`,type:`meeting`}],v=[{name:`周一`,commits:12,prs:5},{name:`周二`,commits:18,prs:8},{name:`周三`,commits:15,prs:6},{name:`周四`,commits:22,prs:10},{name:`周五`,commits:16,prs:7},{name:`周六`,commits:8,prs:3},{name:`周日`,commits:4,prs:1}],x=[{name:`前端`,value:35,color:`#6C5CE7`},{name:`后端`,value:28,color:`#00B894`},{name:`DevOps`,value:15,color:`#FDCB6E`},{name:`测试`,value:12,color:`#FF7675`},{name:`文档`,value:10,color:`#74B9FF`}],T=[{name:`张三`,commits:24,prs:6},{name:`李四`,commits:18,prs:8},{name:`王五`,commits:15,prs:4},{name:`赵六`,commits:12,prs:3},{name:`孙七`,commits:9,prs:2},{name:`蛋挞`,commits:20,prs:5}],E=[{name:`GitHub 连接`,status:`ok`,value:`正常`,detail:`API 响应时间 120ms`},{name:`飞书连接`,status:`ok`,value:`正常`,detail:`Token 有效期至 2026-08-01`},{name:`天气服务`,status:`warning`,value:`延迟`,detail:`API 响应时间 2.3s`},{name:`AI 服务`,status:`ok`,value:`正常`,detail:`模型 DeepSeek-V4 可用`}],A=k(()=>[{label:`今日提交`,value:i.stats?.commits??0,unit:`次`,icon:`📝`,color:`var(--primary)`},{label:`任务完成率`,value:i.stats?.taskRate??0,unit:`%`,icon:`✅`,color:`var(--success)`},{label:`活跃成员`,value:i.stats?.members??0,unit:`人`,icon:`👥`,color:`var(--info)`},{label:`代码变更`,value:i.stats?.changes??0,unit:`行`,icon:`📊`,color:`var(--warning)`}]),j=k(()=>[{label:`活跃仓库`,value:i.stats?.activeRepos??0},{label:`新增 Issue`,value:i.stats?.newIssues??0},{label:`已关闭 Issue`,value:i.stats?.closedIssues??0},{label:`代码审查`,value:i.stats?.reviews??0},{label:`发布版本`,value:i.stats?.releases??0}]),N=k(()=>{let e=i.updates;return e.length===0?[]:e.slice(0,6).map(e=>({time:e.time?new Date(e.time).toLocaleTimeString(`zh-CN`,{hour:`2-digit`,minute:`2-digit`}):`--`,text:`${e.author} ${e.content}`,type:e.source}))}),P=k(()=>l.value?m:A.value),F=k(()=>l.value?g:j.value),I=k(()=>l.value?_:N.value),z=k(()=>l.value?v:[]),B=k(()=>l.value?x:[]),H=k(()=>l.value?T:[]),U=k(()=>l.value?E:[]),W=e(!1),q=k(()=>l.value?{type:`success`,text:`演示模式运行中`}:d.value?{type:`success`,text:`系统运行中`}:{type:`warning`,text:`未配置凭证，请先配置连接`});return u(async()=>{l.value?await i.loadDemoData():await i.loadRealData(),o.updateTime()}),h(c,async e=>{e===`demo`?await i.loadDemoData():await i.loadRealData()}),(e,t)=>(a(),R(`div`,Ae,[w(`section`,je,[w(`div`,Me,[t[4]||=w(`h1`,{class:`hero-title`},`团队工作流智能看板`,-1),t[5]||=w(`p`,{class:`hero-subtitle`},`实时追踪团队动态，智能分析开发效能`,-1),w(`div`,Ne,[V(M(Q),{type:q.value.type,round:``,size:`large`},{icon:r(()=>[w(`span`,{class:ee([`status-dot`,q.value.type])},null,2)]),default:r(()=>[b(` `+D(q.value.text),1)]),_:1},8,[`type`]),M(o).lastUpdateTime?(a(),R(`span`,Pe,` 最后更新: `+D(M(o).lastUpdateTime),1)):y(``,!0)])])]),w(`div`,Fe,[w(`div`,Ie,[w(`div`,Le,[t[8]||=w(`span`,{class:`mode-label`},`数据模式`,-1),V(M(ae),{value:c.value===`real`,"onUpdate:value":t[0]||=e=>c.value=e?`real`:`demo`},{checked:r(()=>[...t[6]||=[w(`span`,{style:{"font-size":`0.75rem`,padding:`0 4px`}},`真实`,-1)]]),unchecked:r(()=>[...t[7]||=[w(`span`,{style:{"font-size":`0.75rem`,padding:`0 4px`}},`虚拟`,-1)]]),_:1},8,[`value`])]),w(`div`,Re,[V(M(Q),{type:l.value?`info`:`success`,size:`small`,round:``},{default:r(()=>[b(D(l.value?`📺 虚拟演示数据`:`🔗 真实 API 数据`),1)]),_:1},8,[`type`]),w(`span`,ze,D(l.value?`展示预设的模拟数据，用于预览和演示`:`连接已配置的平台 API，拉取真实数据`),1)])])]),f.value?(a(),C(M(ie),{key:0,type:`warning`,bordered:!1,closable:``,class:`cred-warning`},{header:r(()=>[...t[9]||=[b(` 尚未配置平台凭证，请点击右上角头像 →「管理凭证」配置 GitHub、飞书等平台连接。 `,-1)]]),_:1})):y(``,!0),w(`div`,Be,[(a(!0),R(L,null,p(P.value,e=>(a(),C(M(O),{key:e.label,class:`metric-card card-hover`},{default:r(()=>[w(`div`,Ve,[w(`span`,He,D(e.icon),1),w(`div`,Ue,[w(`span`,We,D(e.label),1),w(`span`,{class:`metric-value`,style:S({color:e.color})},[b(D(M(i).loading&&!l.value?`--`:e.value)+` `,1),w(`small`,null,D(e.unit),1)],4)])])]),_:2},1024))),128))]),V(M(K),{cols:12,"x-gap":20,"y-gap":20},{default:r(()=>[V(M(G),{span:7},{default:r(()=>[V(M(O),{title:`📋 今日概览`,class:`summary-card`},{default:r(()=>[V(M(oe),{show:M(i).loading&&!l.value},{default:r(()=>[w(`div`,Ge,[(a(!0),R(L,null,p(F.value,e=>(a(),R(`div`,{key:e.label,class:`summary-row`},[w(`span`,Ke,D(e.label),1),w(`span`,qe,D(e.value),1)]))),128)),F.value.length===0&&!l.value?(a(),R(`div`,Je,` 暂无数据，请确认已配置平台凭证 `)):y(``,!0)])]),_:1},8,[`show`])]),_:1})]),_:1}),V(M(G),{span:5},{default:r(()=>[V(M(O),{title:`🕐 动态时间线`,class:`timeline-card`},{default:r(()=>[w(`div`,Ye,[(a(!0),R(L,null,p(I.value,(e,n)=>(a(),R(`div`,{key:n,class:`timeline-item`},[w(`span`,Xe,D(e.time),1),t[10]||=w(`span`,{class:`timeline-dot`},null,-1),w(`span`,Ze,D(e.text),1)]))),128)),I.value.length===0&&!l.value?(a(),R(`div`,Qe,` 暂无动态 `)):y(``,!0)])]),_:1})]),_:1})]),_:1}),V(M(K),{cols:3,"x-gap":20,"y-gap":20,class:`chart-grid`},{default:r(()=>[V(M(G),null,{default:r(()=>[V(M(O),{title:`📈 提交趋势 (本周)`,class:`chart-card-clickable`,onClick:t[1]||=e=>M(n).push(`/reports`)},{default:r(()=>[z.value.length>0?(a(),R(`div`,$e,[w(`div`,et,[(a(!0),R(L,null,p(z.value,e=>(a(),R(`div`,{key:e.name,class:`trend-bar-group`},[w(`div`,tt,[w(`div`,{class:`bar bar-commits`,style:S({height:e.commits/22*120+`px`})},null,4),w(`div`,{class:`bar bar-prs`,style:S({height:e.prs/10*120+`px`})},null,4)]),w(`span`,nt,D(e.name),1)]))),128))]),t[11]||=w(`div`,{class:`chart-legend`},[w(`span`,{class:`legend-item`},[w(`span`,{class:`legend-dot`,style:{background:`#6C5CE7`}}),b(` 提交`)]),w(`span`,{class:`legend-item`},[w(`span`,{class:`legend-dot`,style:{background:`#A29BFE`}}),b(` PR`)])],-1)])):(a(),R(`div`,rt,`暂无趋势数据，请配置 GitHub 凭证`))]),_:1})]),_:1}),V(M(G),null,{default:r(()=>[V(M(O),{title:`🍩 任务分布`},{default:r(()=>[B.value.length>0?(a(),R(`div`,it,[(a(),R(`svg`,at,[t[12]||=w(`circle`,{cx:`80`,cy:`80`,r:`60`,fill:`none`,stroke:`#eee`,"stroke-width":`20`},null,-1),(a(!0),R(L,null,p(B.value,(e,t)=>(a(),R(`circle`,{key:e.name,cx:`80`,cy:`80`,r:`60`,fill:`none`,stroke:e.color,"stroke-width":`20`,"stroke-dasharray":`${e.value/100*377} 377`,"stroke-dashoffset":B.value.slice(0,t).reduce((e,t)=>e-t.value/100*377,0),transform:`rotate(-90 80 80)`},null,8,ot))),128))])),w(`div`,st,[(a(!0),R(L,null,p(B.value,e=>(a(),R(`span`,{key:e.name,class:`pie-legend-item`},[w(`span`,{class:`pie-dot`,style:S({background:e.color})},null,4),b(` `+D(e.name)+` `+D(e.value)+`% `,1)]))),128))])])):(a(),R(`div`,ct,`暂无任务分布数据`))]),_:1})]),_:1}),V(M(G),null,{default:r(()=>[V(M(O),{title:`👤 成员活跃度`,class:`chart-card-clickable`,onClick:t[2]||=e=>M(n).push(`/reports`)},{default:r(()=>[H.value.length>0?(a(),R(`div`,lt,[(a(!0),R(L,null,p(H.value,e=>(a(),R(`div`,{key:e.name,class:`bar-row`},[w(`span`,ut,D(e.name),1),V(M(ke),{percentage:Math.round(e.commits/24*100),height:20,"border-radius":10,color:`#6C5CE7`,"rail-color":`var(--bg-input)`,"show-indicator":!1},null,8,[`percentage`]),w(`span`,dt,D(e.commits)+`次`,1)]))),128))])):(a(),R(`div`,ft,`暂无活跃度数据`))]),_:1})]),_:1})]),_:1}),V(M(ye),{"expanded-names":W.value?[`health`]:[],"onUpdate:expandedNames":t[3]||=e=>W.value=e.includes(`health`)},{default:r(()=>[V(M(xe),{name:`health`},{header:r(()=>[...t[13]||=[w(`span`,{class:`health-header`},`🏥 系统健康检查`,-1)]]),default:r(()=>[w(`div`,pt,[(a(!0),R(L,null,p(U.value,e=>(a(),C(M(O),{key:e.name,size:`small`,class:`health-card`},{default:r(()=>[w(`div`,mt,[w(`div`,ht,[w(`span`,gt,D(e.name),1),w(`span`,_t,D(e.detail),1)]),V(M(Q),{type:e.status===`ok`?`success`:e.status===`warning`?`warning`:`error`,size:`small`,round:``},{default:r(()=>[b(D(e.value),1)]),_:2},1032,[`type`])])]),_:2},1024))),128))])]),_:1})]),_:1},8,[`expanded-names`])]))}}),[[`__scopeId`,`data-v-7bd08cd3`]]);export{yt as default};