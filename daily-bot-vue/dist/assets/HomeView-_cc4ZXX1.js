import{$t as e,A as t,Bn as n,Cn as r,Ct as i,Dn as a,Et as o,F as s,Ft as c,In as l,Jn as u,Jt as d,Kn as f,M as p,Nt as m,Qt as h,Tn as g,Tt as _,Vn as v,Yn as y,Yt as b,Zt as x,_n as S,bn as C,dr as w,en as T,fr as E,in as D,kn as O,lr as k,mt as A,nr as j,or as M,pn as N,pt as P,t as F,un as I,ur as ee,vn as L,wn as R,xn as z,xt as B,yn as V,zn as H}from"./_plugin-vue_export-helper-BsiXA9v0.js";import{t as U}from"./happens-in-Bbk4beju.js";import{n as W,t as G}from"./Grid-oMEJ5SqE.js";import{t as K}from"./misc-DDs3MKLt.js";import{t as te}from"./use-false-until-truthy-uaVlUGQr.js";import{t as ne}from"./use-merged-state-DTRBUz7X.js";import{t as q}from"./Card-CuL5h7H2.js";import{t as re}from"./FadeInExpandTransition-BiTandcV.js";import{t as ie}from"./Alert-iiGRMbKI.js";import{t as ae}from"./Switch-DduIF13z.js";import{t as oe}from"./Spin-CCF9MVYn.js";import{$ as J,A as se,G as ce,H as Y,N as X,T as le,U as Z,V as Q,W as $,f as ue,i as de,o as fe,r as pe,t as me}from"./index-Cou3F1PU.js";var he=g({name:`ChevronLeft`,render(){return a(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},a(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`}))}}),ge=b(`collapse`,`width: 100%;`,[b(`collapse-item`,`
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
 `)])]),b(`collapse-item`,`margin-left: 32px;`),d(`&:first-child`,`margin-top: 0;`),d(`&:first-child >`,[x(`header`,`padding-top: 0;`)]),h(`left-arrow-placement`,[x(`header`,[b(`collapse-item-arrow`,`margin-right: 4px;`)])]),h(`right-arrow-placement`,[x(`header`,[b(`collapse-item-arrow`,`margin-left: 4px;`)])]),x(`content-wrapper`,[x(`content-inner`,`padding-top: 16px;`),se({duration:`0.15s`})]),h(`active`,[x(`header`,[h(`active`,[b(`collapse-item-arrow`,`transform: rotate(90deg);`)])])]),d(`&:not(:first-child)`,`border-top: 1px solid var(--n-divider-color);`),e(`disabled`,[h(`trigger-area-main`,[x(`header`,[x(`header-main`,`cursor: pointer;`),b(`collapse-item-arrow`,`cursor: default;`)])]),h(`trigger-area-arrow`,[x(`header`,[b(`collapse-item-arrow`,`cursor: pointer;`)])]),h(`trigger-area-extra`,[x(`header`,[x(`header-extra`,`cursor: pointer;`)])])]),x(`header`,`
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
 `)])])]),_e=Object.assign(Object.assign({},p.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:`left`},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:`if`},triggerAreas:{type:Array,default:()=>[`main`,`extra`,`arrow`]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),ve=m(`n-collapse`),ye=g({name:`Collapse`,props:_e,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:a}=A(e),o=j(e.defaultExpandedNames),c=ne(S(()=>e.expandedNames),o),l=p(`Collapse`,`-collapse`,ge,le,e,r);function u(t){let{"onUpdate:expandedNames":n,onUpdateExpandedNames:r,onExpandedNamesChange:i}=e;r&&_(r,t),n&&_(n,t),i&&_(i,t),o.value=t}function d(t){let{onItemHeaderClick:n}=e;n&&_(n,t)}function f(t,n,r){let{accordion:i}=e,{value:a}=c;if(i)t?(u([n]),d({name:n,expanded:!0,event:r})):(u([]),d({name:n,expanded:!1,event:r}));else if(!Array.isArray(a))u([n]),d({name:n,expanded:!0,event:r});else{let e=a.slice(),t=e.findIndex(e=>n===e);~t?(e.splice(t,1),u(e),d({name:n,expanded:!1,event:r})):(e.push(n),u(e),d({name:n,expanded:!0,event:r}))}}n(ve,{props:e,mergedClsPrefixRef:r,expandedNamesRef:c,slots:t,toggleItem:f});let m=s(`Collapse`,a,r),h=S(()=>{let{common:{cubicBezierEaseInOut:e},self:{titleFontWeight:t,dividerColor:n,titlePadding:r,titleTextColor:i,titleTextColorDisabled:a,textColor:o,arrowColor:s,fontSize:c,titleFontSize:u,arrowColorDisabled:d,itemMargin:f}}=l.value;return{"--n-font-size":c,"--n-bezier":e,"--n-text-color":o,"--n-divider-color":n,"--n-title-padding":r,"--n-title-font-size":u,"--n-title-text-color":i,"--n-title-text-color-disabled":a,"--n-title-font-weight":t,"--n-arrow-color":s,"--n-arrow-color-disabled":d,"--n-item-margin":f}}),g=i?P(`collapse`,void 0,h,e):void 0;return{rtlEnabled:m,mergedTheme:l,mergedClsPrefix:r,cssVars:i?void 0:h,themeClass:g?.themeClass,onRender:g?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),a(`div`,{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),be=g({name:`CollapseItemContent`,props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:te(M(e,`show`))}},render(){return a(re,null,{default:()=>{let{show:e,displayDirective:t,onceTrue:n,clsPrefix:r}=this,i=t===`show`&&n,o=a(`div`,{class:`${r}-collapse-item__content-wrapper`},a(`div`,{class:`${r}-collapse-item__content-inner`},this.$slots));return i?y(o,[[I,e]]):e?o:null}})}}),xe=g({name:`CollapseItem`,props:{title:String,name:[String,Number],disabled:Boolean,displayDirective:String},setup(e){let{mergedRtlRef:t}=A(e),n=K(),r=c(()=>e.name??n),i=O(ve);i||o(`collapse-item`,"`n-collapse-item` must be placed inside `n-collapse`.");let{expandedNamesRef:a,props:l,mergedClsPrefixRef:u,slots:d}=i,f=S(()=>{let{value:e}=a;if(Array.isArray(e)){let{value:t}=r;return!~e.findIndex(e=>e===t)}else if(e){let{value:t}=r;return t!==e}return!0});return{rtlEnabled:s(`Collapse`,t,u),collapseSlots:d,randomName:n,mergedClsPrefix:u,collapsed:f,triggerAreas:M(l,`triggerAreas`),mergedDisplayDirective:S(()=>{let{displayDirective:t}=e;return t||l.displayDirective}),arrowPlacement:S(()=>l.arrowPlacement),handleClick(t){let n=`main`;U(t,`arrow`)&&(n=`arrow`),U(t,`extra`)&&(n=`extra`),l.triggerAreas.includes(n)&&i&&!e.disabled&&i.toggleItem(f.value,r.value,t)}}},render(){let{collapseSlots:e,$slots:n,arrowPlacement:r,collapsed:o,mergedDisplayDirective:s,mergedClsPrefix:c,disabled:l,triggerAreas:u}=this,d=B(n.header,{collapsed:o},()=>[this.title]),f=n[`header-extra`]||e[`header-extra`],p=n.arrow||e.arrow;return a(`div`,{class:[`${c}-collapse-item`,`${c}-collapse-item--${r}-arrow-placement`,l&&`${c}-collapse-item--disabled`,!o&&`${c}-collapse-item--active`,u.map(e=>`${c}-collapse-item--trigger-area-${e}`)]},a(`div`,{class:[`${c}-collapse-item__header`,!o&&`${c}-collapse-item__header--active`]},a(`div`,{class:`${c}-collapse-item__header-main`,onClick:this.handleClick},r===`right`&&d,a(`div`,{class:`${c}-collapse-item-arrow`,key:+!this.rtlEnabled,"data-arrow":!0},B(p,{collapsed:o},()=>[a(t,{clsPrefix:c},{default:()=>this.rtlEnabled?a(he,null):a(ce,null)})])),r===`left`&&d),i(f,{collapsed:o},e=>a(`div`,{class:`${c}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},e))),a(be,{clsPrefix:c,displayDirective:s,show:!o},n))}}),Se={success:a(Y,null),error:a($,null),warning:a(Q,null),info:a(Z,null)},Ce=g({name:`ProgressCircle`,props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:n}){let r=S(()=>{let t=`gradient`,{fillColor:n}=e;return typeof n==`object`?`${t}-${D(JSON.stringify(n))}`:t});function i(t,n,i,a){let{gapDegree:o,viewBoxWidth:s,strokeWidth:c}=e,l=50+c/2,u=`M ${l},${l} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`,d=Math.PI*2*50;return{pathString:u,pathStyle:{stroke:a===`rail`?i:typeof e.fillColor==`object`?`url(#${r.value})`:i,strokeDasharray:`${Math.min(t,100)/100*(d-o)}px ${s*8}px`,strokeDashoffset:`-${o/2}px`,transformOrigin:n?`center`:void 0,transform:n?`rotate(${n}deg)`:void 0}}}let o=()=>{let t=typeof e.fillColor==`object`,n=t?e.fillColor.stops[0]:``,i=t?e.fillColor.stops[1]:``;return t&&a(`defs`,null,a(`linearGradient`,{id:r.value,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`},a(`stop`,{offset:`0%`,"stop-color":n}),a(`stop`,{offset:`100%`,"stop-color":i})))};return()=>{let{fillColor:r,railColor:s,strokeWidth:c,offsetDegree:l,status:u,percentage:d,showIndicator:f,indicatorTextColor:p,unit:m,gapOffsetDegree:h,clsPrefix:g}=e,{pathString:_,pathStyle:v}=i(100,0,s,`rail`),{pathString:y,pathStyle:b}=i(d,l,r,`fill`),x=100+c;return a(`div`,{class:`${g}-progress-content`,role:`none`},a(`div`,{class:`${g}-progress-graph`,"aria-hidden":!0},a(`div`,{class:`${g}-progress-graph-circle`,style:{transform:h?`rotate(${h}deg)`:void 0}},a(`svg`,{viewBox:`0 0 ${x} ${x}`},o(),a(`g`,null,a(`path`,{class:`${g}-progress-graph-circle-rail`,d:_,"stroke-width":c,"stroke-linecap":`round`,fill:`none`,style:v})),a(`g`,null,a(`path`,{class:[`${g}-progress-graph-circle-fill`,d===0&&`${g}-progress-graph-circle-fill--empty`],d:y,"stroke-width":c,"stroke-linecap":`round`,fill:`none`,style:b}))))),f?a(`div`,null,n.default?a(`div`,{class:`${g}-progress-custom-content`,role:`none`},n.default()):u==="default"?a(`div`,{class:`${g}-progress-text`,style:{color:p},role:`none`},a(`span`,{class:`${g}-progress-text__percentage`},d),a(`span`,{class:`${g}-progress-text__unit`},m)):a(`div`,{class:`${g}-progress-icon`,"aria-hidden":!0},a(t,{clsPrefix:g},{default:()=>Se[u]}))):null)}}}),we={success:a(Y,null),error:a($,null),warning:a(Q,null),info:a(Z,null)},Te=g({name:`ProgressLine`,props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:`%`},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:n}){let r=S(()=>J(e.height)),i=S(()=>typeof e.fillColor==`object`?`linear-gradient(to right, ${e.fillColor?.stops[0]} , ${e.fillColor?.stops[1]})`:e.fillColor),o=S(()=>e.railBorderRadius===void 0?e.height===void 0?``:J(e.height,{c:.5}):J(e.railBorderRadius)),s=S(()=>e.fillBorderRadius===void 0?e.railBorderRadius===void 0?e.height===void 0?``:J(e.height,{c:.5}):J(e.railBorderRadius):J(e.fillBorderRadius));return()=>{let{indicatorPlacement:c,railColor:l,railStyle:u,percentage:d,unit:f,indicatorTextColor:p,status:m,showIndicator:h,processing:g,clsPrefix:_}=e;return a(`div`,{class:`${_}-progress-content`,role:`none`},a(`div`,{class:`${_}-progress-graph`,"aria-hidden":!0},a(`div`,{class:[`${_}-progress-graph-line`,{[`${_}-progress-graph-line--indicator-${c}`]:!0}]},a(`div`,{class:`${_}-progress-graph-line-rail`,style:[{backgroundColor:l,height:r.value,borderRadius:o.value},u]},a(`div`,{class:[`${_}-progress-graph-line-fill`,g&&`${_}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:i.value,height:r.value,lineHeight:r.value,borderRadius:s.value}},c===`inside`?a(`div`,{class:`${_}-progress-graph-line-indicator`,style:{color:p}},n.default?n.default():`${d}${f}`):null)))),h&&c===`outside`?a(`div`,null,n.default?a(`div`,{class:`${_}-progress-custom-content`,style:{color:p},role:`none`},n.default()):m==="default"?a(`div`,{role:`none`,class:`${_}-progress-icon ${_}-progress-icon--as-text`,style:{color:p}},d,f):a(`div`,{class:`${_}-progress-icon`,"aria-hidden":!0},a(t,{clsPrefix:_},{default:()=>we[m]}))):null)}}});function Ee(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var De=g({name:`ProgressMultipleCircle`,props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){let n=S(()=>e.percentage.map((t,n)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`)),r=(t,n)=>{let r=e.fillColor[n],i=typeof r==`object`?r.stops[0]:``,o=typeof r==`object`?r.stops[1]:``;return typeof e.fillColor[n]==`object`&&a(`linearGradient`,{id:`gradient-${n}`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`},a(`stop`,{offset:`0%`,"stop-color":i}),a(`stop`,{offset:`100%`,"stop-color":o}))};return()=>{let{viewBoxWidth:i,strokeWidth:o,circleGap:s,showIndicator:c,fillColor:l,railColor:u,railStyle:d,percentage:f,clsPrefix:p}=e;return a(`div`,{class:`${p}-progress-content`,role:`none`},a(`div`,{class:`${p}-progress-graph`,"aria-hidden":!0},a(`div`,{class:`${p}-progress-graph-circle`},a(`svg`,{viewBox:`0 0 ${i} ${i}`},a(`defs`,null,f.map((e,t)=>r(e,t))),f.map((e,t)=>a(`g`,{key:t},a(`path`,{class:`${p}-progress-graph-circle-rail`,d:Ee(i/2-o/2*(1+2*t)-s*t,o,i),"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:[{strokeDashoffset:0,stroke:u[t]},d[t]]}),a(`path`,{class:[`${p}-progress-graph-circle-fill`,e===0&&`${p}-progress-graph-circle-fill--empty`],d:Ee(i/2-o/2*(1+2*t)-s*t,o,i),"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:{strokeDasharray:n.value[t],strokeDashoffset:0,stroke:typeof l[t]==`object`?`url(#gradient-${t})`:l[t]}})))))),c&&t.default?a(`div`,null,a(`div`,{class:`${p}-progress-text`},t.default())):null)}}}),Oe=d([b(`progress`,{display:`inline-block`},[b(`progress-icon`,`
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
 `)]),ke=g({name:`Progress`,props:Object.assign(Object.assign({},p.props),{processing:Boolean,type:{type:String,default:`line`},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:`default`},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:`%`},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:`outside`},indicatorPlacement:{type:String,default:`outside`},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),setup(e){let t=S(()=>e.indicatorPlacement||e.indicatorPosition),n=S(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type===`dashboard`)return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=A(e),a=p(`Progress`,`-progress`,Oe,ue,e,r),o=S(()=>{let{status:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontSize:r,fontSizeCircle:i,railColor:o,railHeight:s,iconSizeCircle:c,iconSizeLine:l,textColorCircle:u,textColorLineInner:d,textColorLineOuter:f,lineBgProcessing:p,fontWeightCircle:m,[T(`iconColor`,t)]:h,[T(`fillColor`,t)]:g}}=a.value;return{"--n-bezier":n,"--n-fill-color":g,"--n-font-size":r,"--n-font-size-circle":i,"--n-font-weight-circle":m,"--n-icon-color":h,"--n-icon-size-circle":c,"--n-icon-size-line":l,"--n-line-bg-processing":p,"--n-rail-color":o,"--n-rail-height":s,"--n-text-color-circle":u,"--n-text-color-line-inner":d,"--n-text-color-line-outer":f}}),s=i?P(`progress`,S(()=>e.status[0]),o,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:n,cssVars:i?void 0:o,themeClass:s?.themeClass,onRender:s?.onRender}},render(){let{type:e,cssVars:t,indicatorTextColor:n,showIndicator:r,status:i,railColor:o,railStyle:s,color:c,percentage:l,viewBoxWidth:u,strokeWidth:d,mergedIndicatorPlacement:f,unit:p,borderRadius:m,fillBorderRadius:h,height:g,processing:_,circleGap:v,mergedClsPrefix:y,gapDeg:b,gapOffsetDegree:x,themeClass:S,$slots:C,onRender:w}=this;return w?.(),a(`div`,{class:[S,`${y}-progress`,`${y}-progress--${e}`,`${y}-progress--${i}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":l,role:e===`circle`||e===`line`||e===`dashboard`?`progressbar`:`none`},e===`circle`||e===`dashboard`?a(Ce,{clsPrefix:y,status:i,showIndicator:r,indicatorTextColor:n,railColor:o,fillColor:c,railStyle:s,offsetDegree:this.offsetDegree,percentage:l,viewBoxWidth:u,strokeWidth:d,gapDegree:b===void 0?e===`dashboard`?75:0:b,gapOffsetDegree:x,unit:p},C):e===`line`?a(Te,{clsPrefix:y,status:i,showIndicator:r,indicatorTextColor:n,railColor:o,fillColor:c,railStyle:s,percentage:l,processing:_,indicatorPlacement:f,unit:p,fillBorderRadius:h,railBorderRadius:m,height:g},C):e===`multiple-circle`?a(De,{clsPrefix:y,strokeWidth:d,railColor:o,fillColor:c,railStyle:s,viewBoxWidth:u,percentage:l,showIndicator:r,circleGap:v},C):null)}}),Ae={class:`home-view`},je={class:`hero-section`},Me={class:`hero-content`},Ne={class:`hero-status`},Pe={key:0,class:`update-time`},Fe={class:`mode-switch-bar`},Ie={class:`mode-switch-inner`},Le={class:`mode-left`},Re={class:`mode-right`},ze={class:`mode-desc`},Be={class:`metric-grid`},Ve={class:`metric-inner`},He={class:`metric-icon`},Ue={class:`metric-info`},We={class:`metric-label`},Ge={class:`summary-body`},Ke={class:`summary-label`},qe={class:`summary-value`},Je={key:0,class:`empty-hint`},Ye={class:`timeline-list`},Xe={class:`timeline-time`},Ze={class:`timeline-text`},Qe={key:0,class:`empty-hint`},$e={key:0,class:`chart-trend`},et={class:`trend-bars`},tt={class:`bar-wrapper`},nt={class:`bar-label`},rt={key:1,class:`empty-hint`},it={key:0,class:`chart-pie`},at={viewBox:`0 0 160 160`,class:`pie-svg`},ot=[`stroke`,`stroke-dasharray`,`stroke-dashoffset`],st={class:`pie-legend`},ct={key:1,class:`empty-hint`},lt={key:0,class:`chart-bar`},ut={class:`bar-row-name`},dt={class:`bar-row-val`},ft={key:1,class:`empty-hint`},pt={class:`health-grid`},mt={class:`health-item`},ht={class:`health-left`},gt={class:`health-name`},_t={class:`health-detail`},vt=`wfbot_data_mode`,yt=F(g({__name:`HomeView`,setup(e){let t=fe(),n=me(),i=de(),a=pe(),o=j(localStorage.getItem(vt)||`demo`);f(o,e=>{localStorage.setItem(vt,e)});let s=S(()=>o.value===`demo`),c=S(()=>a.hasAnyCredential),d=S(()=>o.value===`real`&&!c.value),p=[{label:`今日提交`,value:12,unit:`次`,icon:`📝`,color:`var(--primary)`},{label:`任务完成率`,value:78,unit:`%`,icon:`✅`,color:`var(--success)`},{label:`活跃成员`,value:8,unit:`人`,icon:`👥`,color:`var(--info)`},{label:`代码变更`,value:2840,unit:`行`,icon:`📊`,color:`var(--warning)`}],m=[{label:`活跃仓库`,value:3},{label:`新增 Issue`,value:7},{label:`已关闭 Issue`,value:5},{label:`代码审查`,value:12},{label:`发布版本`,value:2}],h=[{time:`10:30`,text:`张三 提交了 dashboard 模块更新`,type:`commit`},{time:`09:45`,text:`李四 合并了 PR #128 feature/user-auth`,type:`pr`},{time:`09:15`,text:`蛋挞 提交了 3 个 commit 到 feat/api-optimize`,type:`commit`},{time:`09:00`,text:`飞书审批单 #20240709-001 已通过`,type:`approval`},{time:`08:30`,text:`每日站会纪要已自动生成`,type:`meeting`}],g=[{name:`周一`,commits:12,prs:5},{name:`周二`,commits:18,prs:8},{name:`周三`,commits:15,prs:6},{name:`周四`,commits:22,prs:10},{name:`周五`,commits:16,prs:7},{name:`周六`,commits:8,prs:3},{name:`周日`,commits:4,prs:1}],_=[{name:`前端`,value:35,color:`#6C5CE7`},{name:`后端`,value:28,color:`#00B894`},{name:`DevOps`,value:15,color:`#FDCB6E`},{name:`测试`,value:12,color:`#FF7675`},{name:`文档`,value:10,color:`#74B9FF`}],y=[{name:`张三`,commits:24,prs:6},{name:`李四`,commits:18,prs:8},{name:`王五`,commits:15,prs:4},{name:`赵六`,commits:12,prs:3},{name:`孙七`,commits:9,prs:2},{name:`蛋挞`,commits:20,prs:5}],b=[{name:`GitHub 连接`,status:`ok`,value:`正常`,detail:`API 响应时间 120ms`},{name:`飞书连接`,status:`ok`,value:`正常`,detail:`Token 有效期至 2026-08-01`},{name:`天气服务`,status:`warning`,value:`延迟`,detail:`API 响应时间 2.3s`},{name:`AI 服务`,status:`ok`,value:`正常`,detail:`模型 DeepSeek-V4 可用`}],x=S(()=>[{label:`今日提交`,value:n.stats?.commits??0,unit:`次`,icon:`📝`,color:`var(--primary)`},{label:`任务完成率`,value:n.stats?.taskRate??0,unit:`%`,icon:`✅`,color:`var(--success)`},{label:`活跃成员`,value:n.stats?.members??0,unit:`人`,icon:`👥`,color:`var(--info)`},{label:`代码变更`,value:n.stats?.changes??0,unit:`行`,icon:`📊`,color:`var(--warning)`}]),T=S(()=>[{label:`活跃仓库`,value:n.stats?.activeRepos??0},{label:`新增 Issue`,value:n.stats?.newIssues??0},{label:`已关闭 Issue`,value:n.stats?.closedIssues??0},{label:`代码审查`,value:n.stats?.reviews??0},{label:`发布版本`,value:n.stats?.releases??0}]),D=S(()=>{let e=n.updates;return e.length===0?[]:e.slice(0,6).map(e=>({time:e.time?new Date(e.time).toLocaleTimeString(`zh-CN`,{hour:`2-digit`,minute:`2-digit`}):`--`,text:`${e.author} ${e.content}`,type:e.source}))}),O=S(()=>s.value?p:x.value),A=S(()=>s.value?m:T.value),M=S(()=>s.value?h:D.value),P=S(()=>s.value?g:[]),F=S(()=>s.value?_:[]),I=S(()=>s.value?y:[]),B=S(()=>s.value?b:[]),U=j(!1),K=S(()=>s.value?{type:`success`,text:`演示模式运行中`}:c.value?{type:`success`,text:`系统运行中`}:{type:`warning`,text:`未配置凭证，请先配置连接`});return l(async()=>{s.value?await n.loadDemoData():await n.loadRealData(),i.updateTime()}),f(o,async e=>{e===`demo`?await n.loadDemoData():await n.loadRealData()}),(e,a)=>(H(),z(`div`,Ae,[L(`section`,je,[L(`div`,Me,[a[4]||=L(`h1`,{class:`hero-title`},`团队工作流智能看板`,-1),a[5]||=L(`p`,{class:`hero-subtitle`},`实时追踪团队动态，智能分析开发效能`,-1),L(`div`,Ne,[R(k(X),{type:K.value.type,round:``,size:`large`},{icon:u(()=>[L(`span`,{class:ee([`status-dot`,K.value.type])},null,2)]),default:u(()=>[r(` `+E(K.value.text),1)]),_:1},8,[`type`]),k(i).lastUpdateTime?(H(),z(`span`,Pe,` 最后更新: `+E(k(i).lastUpdateTime),1)):C(``,!0)])])]),L(`div`,Fe,[L(`div`,Ie,[L(`div`,Le,[a[8]||=L(`span`,{class:`mode-label`},`数据模式`,-1),R(k(ae),{value:o.value===`real`,"onUpdate:value":a[0]||=e=>o.value=e?`real`:`demo`},{checked:u(()=>[...a[6]||=[L(`span`,{style:{"font-size":`0.75rem`,padding:`0 4px`}},`真实`,-1)]]),unchecked:u(()=>[...a[7]||=[L(`span`,{style:{"font-size":`0.75rem`,padding:`0 4px`}},`虚拟`,-1)]]),_:1},8,[`value`])]),L(`div`,Re,[R(k(X),{type:s.value?`info`:`success`,size:`small`,round:``},{default:u(()=>[r(E(s.value?`📺 虚拟演示数据`:`🔗 真实 API 数据`),1)]),_:1},8,[`type`]),L(`span`,ze,E(s.value?`展示预设的模拟数据，用于预览和演示`:`连接已配置的平台 API，拉取真实数据`),1)])])]),d.value?(H(),V(k(ie),{key:0,type:`warning`,bordered:!1,closable:``,class:`cred-warning`},{header:u(()=>[...a[9]||=[r(` 尚未配置平台凭证，请点击右上角头像 →「管理凭证」配置 GitHub、飞书等平台连接。 `,-1)]]),_:1})):C(``,!0),L(`div`,Be,[(H(!0),z(N,null,v(O.value,e=>(H(),V(k(q),{key:e.label,class:`metric-card card-hover`},{default:u(()=>[L(`div`,Ve,[L(`span`,He,E(e.icon),1),L(`div`,Ue,[L(`span`,We,E(e.label),1),L(`span`,{class:`metric-value`,style:w({color:e.color})},[r(E(k(n).loading&&!s.value?`--`:e.value)+` `,1),L(`small`,null,E(e.unit),1)],4)])])]),_:2},1024))),128))]),R(k(G),{cols:12,"x-gap":20,"y-gap":20},{default:u(()=>[R(k(W),{span:7},{default:u(()=>[R(k(q),{title:`📋 今日概览`,class:`summary-card`},{default:u(()=>[R(k(oe),{show:k(n).loading&&!s.value},{default:u(()=>[L(`div`,Ge,[(H(!0),z(N,null,v(A.value,e=>(H(),z(`div`,{key:e.label,class:`summary-row`},[L(`span`,Ke,E(e.label),1),L(`span`,qe,E(e.value),1)]))),128)),A.value.length===0&&!s.value?(H(),z(`div`,Je,` 暂无数据，请确认已配置平台凭证 `)):C(``,!0)])]),_:1},8,[`show`])]),_:1})]),_:1}),R(k(W),{span:5},{default:u(()=>[R(k(q),{title:`🕐 动态时间线`,class:`timeline-card`},{default:u(()=>[L(`div`,Ye,[(H(!0),z(N,null,v(M.value,(e,t)=>(H(),z(`div`,{key:t,class:`timeline-item`},[L(`span`,Xe,E(e.time),1),a[10]||=L(`span`,{class:`timeline-dot`},null,-1),L(`span`,Ze,E(e.text),1)]))),128)),M.value.length===0&&!s.value?(H(),z(`div`,Qe,` 暂无动态 `)):C(``,!0)])]),_:1})]),_:1})]),_:1}),R(k(G),{cols:3,"x-gap":20,"y-gap":20,class:`chart-grid`},{default:u(()=>[R(k(W),null,{default:u(()=>[R(k(q),{title:`📈 提交趋势 (本周)`,class:`chart-card-clickable`,onClick:a[1]||=e=>k(t).push(`/reports`)},{default:u(()=>[P.value.length>0?(H(),z(`div`,$e,[L(`div`,et,[(H(!0),z(N,null,v(P.value,e=>(H(),z(`div`,{key:e.name,class:`trend-bar-group`},[L(`div`,tt,[L(`div`,{class:`bar bar-commits`,style:w({height:e.commits/22*120+`px`})},null,4),L(`div`,{class:`bar bar-prs`,style:w({height:e.prs/10*120+`px`})},null,4)]),L(`span`,nt,E(e.name),1)]))),128))]),a[11]||=L(`div`,{class:`chart-legend`},[L(`span`,{class:`legend-item`},[L(`span`,{class:`legend-dot`,style:{background:`#6C5CE7`}}),r(` 提交`)]),L(`span`,{class:`legend-item`},[L(`span`,{class:`legend-dot`,style:{background:`#A29BFE`}}),r(` PR`)])],-1)])):(H(),z(`div`,rt,`暂无趋势数据，请配置 GitHub 凭证`))]),_:1})]),_:1}),R(k(W),null,{default:u(()=>[R(k(q),{title:`🍩 任务分布`},{default:u(()=>[F.value.length>0?(H(),z(`div`,it,[(H(),z(`svg`,at,[a[12]||=L(`circle`,{cx:`80`,cy:`80`,r:`60`,fill:`none`,stroke:`#eee`,"stroke-width":`20`},null,-1),(H(!0),z(N,null,v(F.value,(e,t)=>(H(),z(`circle`,{key:e.name,cx:`80`,cy:`80`,r:`60`,fill:`none`,stroke:e.color,"stroke-width":`20`,"stroke-dasharray":`${e.value/100*377} 377`,"stroke-dashoffset":F.value.slice(0,t).reduce((e,t)=>e-t.value/100*377,0),transform:`rotate(-90 80 80)`},null,8,ot))),128))])),L(`div`,st,[(H(!0),z(N,null,v(F.value,e=>(H(),z(`span`,{key:e.name,class:`pie-legend-item`},[L(`span`,{class:`pie-dot`,style:w({background:e.color})},null,4),r(` `+E(e.name)+` `+E(e.value)+`% `,1)]))),128))])])):(H(),z(`div`,ct,`暂无任务分布数据`))]),_:1})]),_:1}),R(k(W),null,{default:u(()=>[R(k(q),{title:`👤 成员活跃度`,class:`chart-card-clickable`,onClick:a[2]||=e=>k(t).push(`/reports`)},{default:u(()=>[I.value.length>0?(H(),z(`div`,lt,[(H(!0),z(N,null,v(I.value,e=>(H(),z(`div`,{key:e.name,class:`bar-row`},[L(`span`,ut,E(e.name),1),R(k(ke),{percentage:Math.round(e.commits/24*100),height:20,"border-radius":10,color:`#6C5CE7`,"rail-color":`var(--bg-input)`,"show-indicator":!1},null,8,[`percentage`]),L(`span`,dt,E(e.commits)+`次`,1)]))),128))])):(H(),z(`div`,ft,`暂无活跃度数据`))]),_:1})]),_:1})]),_:1}),R(k(ye),{"expanded-names":U.value?[`health`]:[],"onUpdate:expandedNames":a[3]||=e=>U.value=e.includes(`health`)},{default:u(()=>[R(k(xe),{name:`health`},{header:u(()=>[...a[13]||=[L(`span`,{class:`health-header`},`🏥 系统健康检查`,-1)]]),default:u(()=>[L(`div`,pt,[(H(!0),z(N,null,v(B.value,e=>(H(),V(k(q),{key:e.name,size:`small`,class:`health-card`},{default:u(()=>[L(`div`,mt,[L(`div`,ht,[L(`span`,gt,E(e.name),1),L(`span`,_t,E(e.detail),1)]),R(k(X),{type:e.status===`ok`?`success`:e.status===`warning`?`warning`:`error`,size:`small`,round:``},{default:u(()=>[r(E(e.value),1)]),_:2},1032,[`type`])])]),_:2},1024))),128))])]),_:1})]),_:1},8,[`expanded-names`])]))}}),[[`__scopeId`,`data-v-7bd08cd3`]]);export{yt as default};