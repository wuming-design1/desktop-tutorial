import{$t as e,An as t,At as n,D as r,En as i,F as a,Fn as o,Ft as s,Gn as c,Gt as l,Ht as u,Jn as d,Jt as f,Kn as p,Kt as m,N as h,Nn as g,On as _,Pn as v,Pt as y,Qt as b,R as x,St as S,Tt as C,Vn as w,Wt as T,Yt as E,Zt as D,ar as O,bt as k,en as A,fn as j,gn as M,gt as ee,ht as N,jn as P,jt as F,kn as I,kt as L,mt as te,sn as R,tr as z,un as ne,vt as B,wn as V,x as H,zn as re}from"./_plugin-vue_export-helper-D7edCcqi.js";import{n as U,r as W}from"./_common-DBAoCL-8.js";import{n as G,t as K}from"./cssr-DMWhZDhU.js";import{t as q}from"./use-merged-state-BhhvU6px.js";import{t as J}from"./use-compitable-Dr69dsK3.js";import{r as ie,t as ae}from"./Suffix-CCyzD6Q6.js";import{A as oe,B as se,D as ce,E as le,G as ue,H as de,J as Y,K as fe,O as X,R as Z,T as Q,U as pe,W as me,_ as he,j as ge,k as _e,q as ve,w as ye,z as be}from"./index-1ii4vphs.js";function xe(e){return e&-e}var Se=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=xe(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=xe(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}else if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},Ce;function we(){return typeof document>`u`?!1:(Ce===void 0&&(Ce=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches),Ce)}var Te;function Ee(){return typeof document>`u`?1:(Te===void 0&&(Te=`chrome`in window?window.devicePixelRatio:1),Te)}var De=`VVirtualListXScroll`;function Oe({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let r=z(0),i=z(0),a=M(()=>{let t=e.value;if(t.length===0)return null;let n=new Se(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n});return re(De,{startIndexRef:s(()=>{let e=a.value;return e===null?0:Math.max(e.getBound(i.value)-1,0)}),endIndexRef:s(()=>{let t=a.value;return t===null?0:Math.min(t.getBound(i.value+r.value)+1,e.value.length-1)}),columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:e=>{let t=a.value;return t===null?0:t.sum(e)}}),{listWidthRef:r,scrollLeftRef:i}}var ke=V({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=_(De);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),Ae=K(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[K(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[K(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),je=V({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){let t=F();Ae.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:G,ssr:t}),o(()=>{let{defaultScrollIndex:t,defaultScrollKey:n}=e;t==null?n!=null&&x({key:n}):x({index:t})});let n=!1,r=!1;P(()=>{if(n=!1,!r){r=!0;return}x({top:_.value,left:c.value})}),v(()=>{n=!0,r||=!0});let i=s(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let t=0;return e.columns.forEach(e=>{t+=e.width}),t}),a=M(()=>{let t=new Map,{keyField:n}=e;return e.items.forEach((e,r)=>{t.set(e[n],r)}),t}),{scrollLeftRef:c,listWidthRef:d}=Oe({columnsRef:O(e,`columns`),renderColRef:O(e,`renderCol`),renderItemWithColsRef:O(e,`renderItemWithCols`)}),f=z(null),p=z(void 0),m=new Map,h=M(()=>{let{items:t,itemSize:n,keyField:r}=e,i=new Se(t.length,n);return t.forEach((e,t)=>{let n=e[r],a=m.get(n);a!==void 0&&i.add(t,a)}),i}),g=z(0),_=z(0),y=s(()=>Math.max(h.value.getBound(_.value-u(e.paddingTop))-1,0)),b=M(()=>{let{value:t}=p;if(t===void 0)return[];let{items:n,itemSize:r}=e,i=y.value,a=Math.min(i+Math.ceil(t/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),x=(e,t)=>{if(typeof e==`number`){T(e,t,`auto`);return}let{left:n,top:r,index:i,key:o,position:s,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)T(n,r,c);else if(i!==void 0)w(i,c,l);else if(o!==void 0){let e=a.value.get(o);e!==void 0&&w(e,c,l)}else s===`bottom`?T(0,2**53-1,c):s===`top`&&T(0,0,c)},S,C=null;function w(t,n,r){let{value:i}=h,a=i.sum(t)+u(e.paddingTop);if(!r)f.value.scrollTo({left:0,top:a,behavior:n});else{S=t,C!==null&&window.clearTimeout(C),C=window.setTimeout(()=>{S=void 0,C=null},16);let{scrollTop:e,offsetHeight:r}=f.value;if(a>e){let o=i.get(t);a+o<=e+r||f.value.scrollTo({left:0,top:a+o-r,behavior:n})}else f.value.scrollTo({left:0,top:a,behavior:n})}}function T(e,t,n){f.value.scrollTo({left:e,top:t,behavior:n})}function E(t,r){if(n||e.ignoreItemResize||I(r.target))return;let{value:i}=h,o=a.value.get(t),s=i.get(o),c=r.borderBoxSize?.[0]?.blockSize??r.contentRect.height;if(c===s)return;c-e.itemSize===0?m.delete(t):m.set(t,c-e.itemSize);let l=c-s;if(l===0)return;i.add(o,l);let u=f.value;if(u!=null){if(S===void 0){let e=i.sum(o);u.scrollTop>e&&u.scrollBy(0,l)}else(o<S||o===S&&c+i.sum(o)>u.scrollTop+u.offsetHeight)&&u.scrollBy(0,l);N()}g.value++}let D=!we(),k=!1;function A(t){var n;(n=e.onScroll)==null||n.call(e,t),(!D||!k)&&N()}function j(t){var n;if((n=e.onWheel)==null||n.call(e,t),D){let e=f.value;if(e!=null){if(t.deltaX===0&&(e.scrollTop===0&&t.deltaY<=0||e.scrollTop+e.offsetHeight>=e.scrollHeight&&t.deltaY>=0))return;t.preventDefault(),e.scrollTop+=t.deltaY/Ee(),e.scrollLeft+=t.deltaX/Ee(),N(),k=!0,W(()=>{k=!1})}}}function ee(t){if(n||I(t.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(t.contentRect.height===p.value)return}else if(t.contentRect.height===p.value&&t.contentRect.width===d.value)return;p.value=t.contentRect.height,d.value=t.contentRect.width;let{onResize:r}=e;r!==void 0&&r(t)}function N(){let{value:e}=f;e!=null&&(_.value=e.scrollTop,c.value=e.scrollLeft)}function I(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:p,listStyle:{overflow:`auto`},keyToIndex:a,itemsStyle:M(()=>{let{itemResizable:t}=e,n=l(h.value.sum());return g.value,[e.itemsStyle,{boxSizing:`content-box`,width:l(i.value),height:t?``:n,minHeight:t?n:``,paddingTop:l(e.paddingTop),paddingBottom:l(e.paddingBottom)}]}),visibleItemsStyle:M(()=>(g.value,{transform:`translateY(${l(h.value.sum(y.value))})`})),viewportItems:b,listElRef:f,itemsElRef:z(null),scrollTo:x,handleListResize:ee,handleListScroll:A,handleListWheel:j,handleItemResize:E}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return i(L,{onResize:this.handleListResize},{default:()=>{var a;return i(`div`,I(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(a=this.$slots).empty?.call(a):i(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[i(r,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:a}=this;return this.viewportItems.map(o=>{let s=o[t],c=n.get(s),l=r==null?void 0:i(ke,{index:c,item:o}),u=a==null?void 0:i(ke,{index:c,item:o}),d=this.$slots.default({item:o,renderedCols:l,renderedItemWithCols:u,index:c})[0];return e?i(L,{key:s,onResize:e=>this.handleItemResize(s,e)},{default:()=>d}):(d.key=s,d)})}})])])}})}}),$=`v-hidden`,Me=K(`[v-hidden]`,{display:`none!important`}),Ne=V({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=z(null),r=z(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute($)&&c.removeAttribute($);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute($)&&e.removeAttribute($);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute($)||n.setAttribute($,``);continue}else n.hasAttribute($)&&n.removeAttribute($);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute($,``))}let a=F();return Me.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:G,ssr:a}),o(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return t(()=>this.sync({showAllItemsBeforeCalculate:!1})),i(`div`,{class:`v-overflow`,ref:`selfRef`},[w(e,`default`),e.counter?e.counter():i(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function Pe(e,t){t&&(o(()=>{let{value:r}=e;r&&n.registerHandler(r,t)}),c(e,(e,t)=>{t&&n.unregisterHandler(t)},{deep:!1}),g(()=>{let{value:t}=e;t&&n.unregisterHandler(t)}))}function Fe(e){let t=e.filter(e=>e!==void 0);if(t.length!==0)return t.length===1?t[0]:t=>{e.forEach(e=>{e&&e(t)})}}var Ie=V({name:`Checkmark`,render(){return i(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},i(`g`,{fill:`none`},i(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})))}}),Le=V({name:`Empty`,render(){return i(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},i(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),i(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`}))}}),Re=V({props:{onFocus:Function,onBlur:Function},setup(e){return()=>i(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),ze=E(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[D(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[f(`+`,[D(`description`,`
 margin-top: 8px;
 `)])]),D(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),D(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Be=V({name:`Empty`,props:Object.assign(Object.assign({},a.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:r}=ee(e),o=a(`Empty`,`-empty`,ze,_e,e,t),{localeRef:s}=ie(`Empty`),c=M(()=>e.description??r?.value?.Empty?.description),l=M(()=>r?.value?.Empty?.renderIcon||(()=>i(Le,null))),u=M(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{[A(`iconSize`,t)]:r,[A(`fontSize`,t)]:i,textColor:a,iconColor:s,extraTextColor:c}}=o.value;return{"--n-icon-size":r,"--n-font-size":i,"--n-bezier":n,"--n-text-color":a,"--n-icon-color":s,"--n-extra-text-color":c}}),d=n?N(`empty`,M(()=>{let t=``,{size:n}=e;return t+=n[0],t}),u,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:l,localizedDescription:M(()=>c.value||s.value.description),cssVars:n?void 0:u,themeClass:d?.themeClass,onRender:d?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),i(`div`,{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?i(`div`,{class:`${t}-empty__icon`},e.icon?e.icon():i(h,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?i(`div`,{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?i(`div`,{class:`${t}-empty__extra`},e.extra()):null)}}),Ve=V({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=_(Y);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:a}}=this,o=r?.(a),s=t?t(a,!1):Z(a[this.labelField],a,!1),c=i(`div`,Object.assign({},o,{class:[`${e}-base-select-group-header`,o?.class]}),s);return a.render?a.render({node:c,option:a}):n?n({node:c,option:a,selected:!1}):c}});function He(e,t){return i(R,{name:`fade-in-scale-up-transition`},{default:()=>e?i(h,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>i(Ie)}):null})}var Ue=V({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:i,renderLabelRef:a,renderOptionRef:o,labelFieldRef:c,valueFieldRef:l,showCheckmarkRef:u,nodePropsRef:d,handleOptionClick:f,handleOptionMouseEnter:p}=_(Y),m=s(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e;n.disabled||p(t,n)}function v(t){let{tmNode:n}=e,{value:r}=m;n.disabled||r||p(t,n)}return{multiple:r,isGrouped:s(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:u,nodeProps:d,isPending:m,isSelected:s(()=>{let{value:n}=t,{value:a}=r;if(n===null)return!1;let o=e.tmNode.rawNode[l.value];if(a){let{value:e}=i;return e.has(o)}else return n===o}),labelField:c,renderLabel:a,renderOption:o,handleMouseMove:v,handleMouseEnter:g,handleClick:h}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:a,showCheckmark:o,nodeProps:s,renderOption:c,renderLabel:l,handleClick:u,handleMouseEnter:d,handleMouseMove:f}=this,p=He(n,e),m=l?[l(t,n),o&&p]:[Z(t[this.labelField],t,n),o&&p],h=s?.(t),g=i(`div`,Object.assign({},h,{class:[`${e}-base-select-option`,t.class,h?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:a,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:o}],style:[h?.style||``,t.style||``],onClick:Fe([u,h?.onClick]),onMouseenter:Fe([d,h?.onMouseenter]),onMousemove:Fe([f,h?.onMousemove])}),i(`div`,{class:`${e}-base-select-option__content`},m));return t.render?t.render({node:g,option:t,selected:n}):c?c({node:g,option:t,selected:n}):g}}),We=E(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[E(`scrollbar`,`
 max-height: var(--n-height);
 `),E(`virtual-list`,`
 max-height: var(--n-height);
 `),E(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[D(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),E(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),E(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),D(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),D(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),D(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),D(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),E(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),E(`base-select-option`,`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[b(`show-checkmark`,`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),f(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),f(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),b(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),b(`pending`,[f(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),b(`selected`,`
 color: var(--n-option-text-color-active);
 `,[f(`&::before`,`
 background-color: var(--n-option-color-active);
 `),b(`pending`,[f(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),b(`disabled`,`
 cursor: not-allowed;
 `,[e(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),b(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),D(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[ce({enterScale:`0.5`})])])]),Ge=V({name:`InternalSelectMenu`,props:Object.assign(Object.assign({},a.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(e){let{mergedClsPrefixRef:n,mergedRtlRef:r,mergedComponentPropsRef:i}=ee(e),s=x(`InternalSelectMenu`,r,n),l=a(`InternalSelectMenu`,`-internal-select-menu`,We,X,e,O(e,`clsPrefix`)),d=z(null),f=z(null),p=z(null),m=M(()=>e.treeMate.getFlattenedNodes()),h=M(()=>ge(m.value)),_=z(null);function v(){let{treeMate:t}=e,n=null,{value:r}=e;r===null?n=t.getFirstAvailableNode():(n=e.multiple?t.getNode((r||[])[(r||[]).length-1]):t.getNode(r),(!n||n.disabled)&&(n=t.getFirstAvailableNode())),W(n||null)}function y(){let{value:t}=_;t&&!e.treeMate.getNode(t.key)&&(_.value=null)}let b;c(()=>e.show,n=>{n?b=c(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?v():y(),t(G)):y()},{immediate:!0}):b?.()},{immediate:!0}),g(()=>{b?.()});let S=M(()=>u(l.value.self[A(`optionHeight`,e.size)])),C=M(()=>T(l.value.self[A(`padding`,e.size)])),w=M(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),E=M(()=>{let e=m.value;return e&&e.length===0}),D=M(()=>i?.value?.Select?.renderEmpty);function k(t){let{onToggle:n}=e;n&&n(t)}function j(t){let{onScroll:n}=e;n&&n(t)}function P(e){var t;(t=p.value)==null||t.sync(),j(e)}function F(){var e;(e=p.value)==null||e.sync()}function I(){let{value:e}=_;return e||null}function L(e,t){t.disabled||W(t,!1)}function te(e,t){t.disabled||k(t)}function R(t){var n;U(t,`action`)||(n=e.onKeyup)==null||n.call(e,t)}function ne(t){var n;U(t,`action`)||(n=e.onKeydown)==null||n.call(e,t)}function B(t){var n;(n=e.onMousedown)==null||n.call(e,t),!e.focusable&&t.preventDefault()}function V(){let{value:e}=_;e&&W(e.getNext({loop:!0}),!0)}function H(){let{value:e}=_;e&&W(e.getPrev({loop:!0}),!0)}function W(e,t=!1){_.value=e,t&&G()}function G(){var t,n;let r=_.value;if(!r)return;let i=h.value(r.key);i!==null&&(e.virtualScroll?(t=f.value)==null||t.scrollTo({index:i}):(n=p.value)==null||n.scrollTo({index:i,elSize:S.value}))}function K(t){var n;d.value?.contains(t.target)&&((n=e.onFocus)==null||n.call(e,t))}function q(t){var n;d.value?.contains(t.relatedTarget)||(n=e.onBlur)==null||n.call(e,t)}re(Y,{handleOptionMouseEnter:L,handleOptionClick:te,valueSetRef:w,pendingTmNodeRef:_,nodePropsRef:O(e,`nodeProps`),showCheckmarkRef:O(e,`showCheckmark`),multipleRef:O(e,`multiple`),valueRef:O(e,`value`),renderLabelRef:O(e,`renderLabel`),renderOptionRef:O(e,`renderOption`),labelFieldRef:O(e,`labelField`),valueFieldRef:O(e,`valueField`)}),re(ve,d),o(()=>{let{value:e}=p;e&&e.sync()});let J=M(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:o,actionDividerColor:s,optionTextColorPressed:c,optionTextColor:u,optionTextColorDisabled:d,optionTextColorActive:f,optionOpacityDisabled:p,optionCheckColor:m,actionTextColor:h,optionColorPending:g,optionColorActive:_,loadingColor:v,loadingSize:y,optionColorActivePending:b,[A(`optionFontSize`,t)]:x,[A(`optionHeight`,t)]:S,[A(`optionPadding`,t)]:C}}=l.value;return{"--n-height":r,"--n-action-divider-color":s,"--n-action-text-color":h,"--n-bezier":n,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":x,"--n-group-header-text-color":o,"--n-option-check-color":m,"--n-option-color-pending":g,"--n-option-color-active":_,"--n-option-color-active-pending":b,"--n-option-height":S,"--n-option-opacity-disabled":p,"--n-option-text-color":u,"--n-option-text-color-active":f,"--n-option-text-color-disabled":d,"--n-option-text-color-pressed":c,"--n-option-padding":C,"--n-option-padding-left":T(C,`left`),"--n-option-padding-right":T(C,`right`),"--n-loading-color":v,"--n-loading-size":y}}),{inlineThemeDisabled:ie}=e,ae=ie?N(`internal-select-menu`,M(()=>e.size[0]),J,e):void 0,oe={selfRef:d,next:V,prev:H,getPendingTmNode:I};return Pe(d,e.onResize),Object.assign({mergedTheme:l,mergedClsPrefix:n,rtlEnabled:s,virtualListRef:f,scrollbarRef:p,itemSize:S,padding:C,flattenedNodes:m,empty:E,mergedRenderEmpty:D,virtualListContainer(){let{value:e}=f;return e?.listElRef},virtualListContent(){let{value:e}=f;return e?.itemsElRef},doScroll:j,handleFocusin:K,handleFocusout:q,handleKeyUp:R,handleKeyDown:ne,handleMouseDown:B,handleVirtualListResize:F,handleVirtualListScroll:P,cssVars:ie?void 0:J,themeClass:ae?.themeClass,onRender:ae?.onRender},oe)},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:a,themeClass:o,onRender:s}=this;return s?.(),i(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,o,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},S(e.header,e=>e&&i(`div`,{class:`${n}-base-select-menu__header`,"data-header":!0,key:`header`},e)),this.loading?i(`div`,{class:`${n}-base-select-menu__loading`},i(r,{clsPrefix:n,strokeWidth:20})):this.empty?i(`div`,{class:`${n}-base-select-menu__empty`,"data-empty":!0},k(e.empty,()=>[this.mergedRenderEmpty?.call(this)||i(Be,{theme:a.peers.Empty,themeOverrides:a.peerOverrides.Empty,size:this.size})])):i(H,Object.assign({ref:`scrollbarRef`,theme:a.peers.Scrollbar,themeOverrides:a.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?i(je,{ref:`virtualListRef`,class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?i(Ve,{key:e.key,clsPrefix:n,tmNode:e}):e.ignored?null:i(Ue,{clsPrefix:n,key:e.key,tmNode:e})}):i(`div`,{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(e=>e.isGroup?i(Ve,{key:e.key,clsPrefix:n,tmNode:e}):i(Ue,{clsPrefix:n,key:e.key,tmNode:e})))}),S(e.action,e=>e&&[i(`div`,{class:`${n}-base-select-menu__action`,"data-action":!0,key:`action`},e),i(Re,{onFocus:this.onTabOut,key:`focus-detector`})]))}}),Ke=f([E(`base-selection`,`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[E(`base-loading`,`
 color: var(--n-loading-color);
 `),E(`base-selection-tags`,`min-height: var(--n-height);`),D(`border, state-border`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),D(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),E(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[D(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),E(`base-selection-overlay`,`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[D(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),E(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[D(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),E(`base-selection-tags`,`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),E(`base-selection-label`,`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[E(`base-selection-input`,`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[D(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),D(`render-label`,`
 color: var(--n-text-color);
 `)]),e(`disabled`,[f(`&:hover`,[D(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),b(`focus`,[D(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),b(`active`,[D(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),E(`base-selection-label`,`background-color: var(--n-color-active);`),E(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),b(`disabled`,`cursor: not-allowed;`,[D(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),E(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[E(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),D(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),E(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),E(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),E(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[D(`input`,`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),D(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(t=>b(`${t}-status`,[D(`state-border`,`border: var(--n-border-${t});`),e(`disabled`,[f(`&:hover`,[D(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${t});
 border: var(--n-border-hover-${t});
 `)]),b(`active`,[D(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${t});
 border: var(--n-border-active-${t});
 `),E(`base-selection-label`,`background-color: var(--n-color-active-${t});`),E(`base-selection-tags`,`background-color: var(--n-color-active-${t});`)]),b(`focus`,[D(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]),E(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),E(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[f(`&:last-child`,`padding-right: 0;`),E(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[D(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),qe=V({name:`InternalSelection`,props:Object.assign(Object.assign({},a.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){let{mergedClsPrefixRef:n,mergedRtlRef:r}=ee(e),i=x(`InternalSelection`,r,n),s=z(null),l=z(null),u=z(null),d=z(null),f=z(null),m=z(null),h=z(null),g=z(null),_=z(null),v=z(null),y=z(!1),b=z(!1),S=z(!1),C=a(`InternalSelection`,`-internal-selection`,Ke,ye,e,O(e,`clsPrefix`)),w=M(()=>e.clearable&&!e.disabled&&(S.value||e.active)),E=M(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Z(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),D=M(()=>{let t=e.selectedOption;if(t)return t[e.labelField]}),k=M(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function j(){var t;let{value:n}=s;if(n){let{value:r}=l;r&&(r.style.width=`${n.offsetWidth}px`,e.maxTagCount!==`responsive`&&((t=_.value)==null||t.sync({showAllItemsBeforeCalculate:!1})))}}function P(){let{value:e}=v;e&&(e.style.display=`none`)}function F(){let{value:e}=v;e&&(e.style.display=`inline-block`)}c(O(e,`active`),e=>{e||P()}),c(O(e,`pattern`),()=>{e.multiple&&t(j)});function I(t){let{onFocus:n}=e;n&&n(t)}function L(t){let{onBlur:n}=e;n&&n(t)}function te(t){let{onDeleteOption:n}=e;n&&n(t)}function R(t){let{onClear:n}=e;n&&n(t)}function ne(t){let{onPatternInput:n}=e;n&&n(t)}function B(e){(!e.relatedTarget||!u.value?.contains(e.relatedTarget))&&I(e)}function V(e){u.value?.contains(e.relatedTarget)||L(e)}function H(e){R(e)}function re(){S.value=!0}function U(){S.value=!1}function W(t){!e.active||!e.filterable||t.target!==l.value&&t.preventDefault()}function G(e){te(e)}let K=z(!1);function q(t){if(t.key===`Backspace`&&!K.value&&!e.pattern.length){let{selectedOptions:t}=e;t?.length&&G(t[t.length-1])}}let J=null;function ie(t){let{value:n}=s;n&&(n.textContent=t.target.value,j()),e.ignoreComposition&&K.value?J=t:ne(t)}function ae(){K.value=!0}function oe(){K.value=!1,e.ignoreComposition&&ne(J),J=null}function se(t){var n;b.value=!0,(n=e.onPatternFocus)==null||n.call(e,t)}function ce(t){var n;b.value=!1,(n=e.onPatternBlur)==null||n.call(e,t)}function le(){var t,n;if(e.filterable)b.value=!1,(t=m.value)==null||t.blur(),(n=l.value)==null||n.blur();else if(e.multiple){let{value:e}=d;e?.blur()}else{let{value:e}=f;e?.blur()}}function ue(){var t,n,r;e.filterable?(b.value=!1,(t=m.value)==null||t.focus()):e.multiple?(n=d.value)==null||n.focus():(r=f.value)==null||r.focus()}function de(){let{value:e}=l;e&&(F(),e.focus())}function Y(){let{value:e}=l;e&&e.blur()}function fe(e){let{value:t}=h;t&&t.setTextContent(`+${e}`)}function X(){let{value:e}=g;return e}function Q(){return l.value}let pe=null;function me(){pe!==null&&window.clearTimeout(pe)}function he(){e.active||(me(),pe=window.setTimeout(()=>{k.value&&(y.value=!0)},100))}function ge(){me()}function _e(e){e||(me(),y.value=!1)}c(k,e=>{e||(y.value=!1)}),o(()=>{p(()=>{let t=m.value;t&&(e.disabled?t.removeAttribute(`tabindex`):t.tabIndex=b.value?-1:0)})}),Pe(u,e.onResize);let{inlineThemeDisabled:ve}=e,be=M(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:o,textColor:s,paddingSingle:c,paddingMultiple:l,caretColor:u,colorDisabled:d,textColorDisabled:f,placeholderColorDisabled:p,colorActive:m,boxShadowFocus:h,boxShadowActive:g,boxShadowHover:_,border:v,borderFocus:y,borderHover:b,borderActive:x,arrowColor:S,arrowColorDisabled:w,loadingColor:E,colorActiveWarning:D,boxShadowFocusWarning:O,boxShadowActiveWarning:k,boxShadowHoverWarning:j,borderWarning:M,borderFocusWarning:ee,borderHoverWarning:N,borderActiveWarning:P,colorActiveError:F,boxShadowFocusError:I,boxShadowActiveError:L,boxShadowHoverError:te,borderError:R,borderFocusError:z,borderHoverError:ne,borderActiveError:B,clearColor:V,clearColorHover:H,clearColorPressed:re,clearSize:U,arrowSize:W,[A(`height`,t)]:G,[A(`fontSize`,t)]:K}}=C.value,q=T(c),J=T(l);return{"--n-bezier":n,"--n-border":v,"--n-border-active":x,"--n-border-focus":y,"--n-border-hover":b,"--n-border-radius":i,"--n-box-shadow-active":g,"--n-box-shadow-focus":h,"--n-box-shadow-hover":_,"--n-caret-color":u,"--n-color":a,"--n-color-active":m,"--n-color-disabled":d,"--n-font-size":K,"--n-height":G,"--n-padding-single-top":q.top,"--n-padding-multiple-top":J.top,"--n-padding-single-right":q.right,"--n-padding-multiple-right":J.right,"--n-padding-single-left":q.left,"--n-padding-multiple-left":J.left,"--n-padding-single-bottom":q.bottom,"--n-padding-multiple-bottom":J.bottom,"--n-placeholder-color":o,"--n-placeholder-color-disabled":p,"--n-text-color":s,"--n-text-color-disabled":f,"--n-arrow-color":S,"--n-arrow-color-disabled":w,"--n-loading-color":E,"--n-color-active-warning":D,"--n-box-shadow-focus-warning":O,"--n-box-shadow-active-warning":k,"--n-box-shadow-hover-warning":j,"--n-border-warning":M,"--n-border-focus-warning":ee,"--n-border-hover-warning":N,"--n-border-active-warning":P,"--n-color-active-error":F,"--n-box-shadow-focus-error":I,"--n-box-shadow-active-error":L,"--n-box-shadow-hover-error":te,"--n-border-error":R,"--n-border-focus-error":z,"--n-border-hover-error":ne,"--n-border-active-error":B,"--n-clear-size":U,"--n-clear-color":V,"--n-clear-color-hover":H,"--n-clear-color-pressed":re,"--n-arrow-size":W,"--n-font-weight":r}}),xe=ve?N(`internal-selection`,M(()=>e.size[0]),be,e):void 0;return{mergedTheme:C,mergedClearable:w,mergedClsPrefix:n,rtlEnabled:i,patternInputFocused:b,filterablePlaceholder:E,label:D,selected:k,showTagsPanel:y,isComposing:K,counterRef:h,counterWrapperRef:g,patternInputMirrorRef:s,patternInputRef:l,selfRef:u,multipleElRef:d,singleElRef:f,patternInputWrapperRef:m,overflowRef:_,inputTagElRef:v,handleMouseDown:W,handleFocusin:B,handleClear:H,handleMouseEnter:re,handleMouseLeave:U,handleDeleteOption:G,handlePatternKeyDown:q,handlePatternInputInput:ie,handlePatternInputBlur:ce,handlePatternInputFocus:se,handleMouseEnterCounter:he,handleMouseLeaveCounter:ge,handleFocusout:V,handleCompositionEnd:oe,handleCompositionStart:ae,onPopoverUpdateShow:_e,focus:ue,focusInput:de,blur:le,blurInput:Y,updateCounter:fe,getCounter:X,getTail:Q,renderLabel:e.renderLabel,cssVars:ve?void 0:be,themeClass:xe?.themeClass,onRender:xe?.onRender}},render(){let{status:e,multiple:t,size:n,disabled:r,filterable:a,maxTagCount:o,bordered:s,clsPrefix:c,ellipsisTagPopoverProps:l,onRender:u,renderTag:d,renderLabel:f}=this;u?.();let p=o===`responsive`,m=typeof o==`number`,h=p||m,g=i(B,null,{default:()=>i(ae,{clsPrefix:c,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var e;return(e=this.$slots).arrow?.call(e)}})}),_;if(t){let{labelField:e}=this,t=t=>i(`div`,{class:`${c}-base-selection-tag-wrapper`,key:t.value},d?d({option:t,handleClose:()=>{this.handleDeleteOption(t)}}):i(Q,{size:n,closable:!t.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>f?f(t,!0):Z(t[e],t,!0)})),s=()=>(m?this.selectedOptions.slice(0,o):this.selectedOptions).map(t),u=a?i(`div`,{class:`${c}-base-selection-input-tag`,ref:`inputTagElRef`,key:`__input-tag__`},i(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${c}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i(`span`,{ref:`patternInputMirrorRef`,class:`${c}-base-selection-input-tag__mirror`},this.pattern)):null,v=p?()=>i(`div`,{class:`${c}-base-selection-tag-wrapper`,ref:`counterWrapperRef`},i(Q,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0,y;if(m){let e=this.selectedOptions.length-o;e>0&&(y=i(`div`,{class:`${c}-base-selection-tag-wrapper`,key:`__counter__`},i(Q,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${e}`})))}let b=p?a?i(Ne,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:s,counter:v,tail:()=>u}):i(Ne,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:s,counter:v}):m&&y?s().concat(y):s(),x=h?()=>i(`div`,{class:`${c}-base-selection-popover`},p?s():this.selectedOptions.map(t)):void 0,S=h?Object.assign({show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},l):null,C=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?i(`div`,{class:`${c}-base-selection-placeholder ${c}-base-selection-overlay`},i(`div`,{class:`${c}-base-selection-placeholder__inner`},this.placeholder)):null,w=a?i(`div`,{ref:`patternInputWrapperRef`,class:`${c}-base-selection-tags`},b,p?null:u,g):i(`div`,{ref:`multipleElRef`,class:`${c}-base-selection-tags`,tabindex:r?void 0:0},b,g);_=i(j,null,h?i(le,Object.assign({},S,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>w,default:x}):w,C)}else if(a){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=!this.active&&this.selected;_=i(`div`,{ref:`patternInputWrapperRef`,class:`${c}-base-selection-label`,title:this.patternInputFocused?void 0:be(this.label)},i(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,class:`${c}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),n?i(`div`,{class:`${c}-base-selection-label__render-label ${c}-base-selection-overlay`,key:`input`},i(`div`,{class:`${c}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):Z(this.label,this.selectedOption,!0))):null,t?i(`div`,{class:`${c}-base-selection-placeholder ${c}-base-selection-overlay`,key:`placeholder`},i(`div`,{class:`${c}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else _=i(`div`,{ref:`singleElRef`,class:`${c}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label===void 0?i(`div`,{class:`${c}-base-selection-placeholder ${c}-base-selection-overlay`,key:`placeholder`},i(`div`,{class:`${c}-base-selection-placeholder__inner`},this.placeholder)):i(`div`,{class:`${c}-base-selection-input`,title:be(this.label),key:`input`},i(`div`,{class:`${c}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):Z(this.label,this.selectedOption,!0))),g);return i(`div`,{ref:`selfRef`,class:[`${c}-base-selection`,this.rtlEnabled&&`${c}-base-selection--rtl`,this.themeClass,e&&`${c}-base-selection--${e}-status`,{[`${c}-base-selection--active`]:this.active,[`${c}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${c}-base-selection--disabled`]:this.disabled,[`${c}-base-selection--multiple`]:this.multiple,[`${c}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},_,s?i(`div`,{class:`${c}-base-selection__border`}):null,s?i(`div`,{class:`${c}-base-selection__state-border`}):null)}});function Je(e){return e.type===`group`}function Ye(e){return e.type===`ignored`}function Xe(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Ze(e,t){return{getIsGroup:Je,getIgnored:Ye,getKey(t){return Je(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function Qe(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(Je(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(Ye(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function $e(e,t,n){let r=new Map;return e.forEach(e=>{Je(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var et=f([E(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),E(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[ce({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),tt=V({name:`Select`,props:Object.assign(Object.assign({},a.props),{to:fe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:o}=ee(e),s=a(`Select`,`-select`,et,he,e,t),l=z(e.defaultValue),u=q(O(e,`value`),l),d=z(!1),f=z(``),p=J(e,[`items`,`options`]),h=z([]),g=z([]),_=M(()=>g.value.concat(h.value).concat(p.value)),v=M(()=>{let{filter:t}=e;if(t)return t;let{labelField:n,valueField:r}=e;return(e,t)=>{if(!t)return!1;let i=t[n];if(typeof i==`string`)return Xe(e,i);let a=t[r];return typeof a==`string`?Xe(e,a):typeof a==`number`&&Xe(e,String(a))}}),b=M(()=>{if(e.remote)return p.value;{let{value:t}=_,{value:n}=f;return!n.length||!e.filterable?t:Qe(t,v.value,n,e.childrenField)}}),x=M(()=>{let{valueField:t,childrenField:n}=e,r=Ze(t,n);return oe(b.value,r)}),S=M(()=>$e(_.value,e.valueField,e.childrenField)),w=z(!1),T=q(O(e,`show`),w),E=z(null),D=z(null),k=z(null),{localeRef:A}=ie(`Select`),j=M(()=>e.placeholder??A.value.placeholder),P=[],F=z(new Map),I=M(()=>{let{fallbackOption:t}=e;if(t===void 0){let{labelField:t,valueField:n}=e;return e=>({[t]:String(e),[n]:e})}return t===!1?!1:e=>Object.assign(t(e),{value:e})});function L(t){let n=e.remote,{value:r}=F,{value:i}=S,{value:a}=I,o=[];return t.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(n&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let R=M(()=>{if(e.multiple){let{value:e}=u;return Array.isArray(e)?L(e):[]}return null}),ne=M(()=>{let{value:t}=u;return!e.multiple&&!Array.isArray(t)?t===null?null:L([t])[0]||null:null}),B=te(e,{mergedSize:t=>{let{size:n}=e;if(n)return n;let{mergedSize:r}=t||{};return r?.value?r.value:o?.value?.Select?.size||`medium`}}),{mergedSizeRef:V,mergedDisabledRef:H,mergedStatusRef:re}=B;function W(t,n){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=e,{nTriggerFormChange:o,nTriggerFormInput:s}=B;r&&C(r,t,n),a&&C(a,t,n),i&&C(i,t,n),l.value=t,o(),s()}function G(t){let{onBlur:n}=e,{nTriggerFormBlur:r}=B;n&&C(n,t),r()}function K(){let{onClear:t}=e;t&&C(t)}function ae(t){let{onFocus:n,showOnFocus:r}=e,{nTriggerFormFocus:i}=B;n&&C(n,t),i(),r&&Y()}function ce(t){let{onSearch:n}=e;n&&C(n,t)}function le(t){let{onScroll:n}=e;n&&C(n,t)}function ue(){var t;let{remote:n,multiple:r}=e;if(n){let{value:n}=F;if(r){let{valueField:r}=e;(t=R.value)==null||t.forEach(e=>{n.set(e[r],e)})}else{let t=ne.value;t&&n.set(t[e.valueField],t)}}}function de(t){let{onUpdateShow:n,"onUpdate:show":r}=e;n&&C(n,t),r&&C(r,t),w.value=t}function Y(){H.value||(de(!0),w.value=!0,e.filterable&&Me())}function X(){de(!1)}function Z(){f.value=``,g.value=P}let Q=z(!1);function pe(){e.filterable&&(Q.value=!0)}function me(){e.filterable&&(Q.value=!1,T.value||Z())}function ge(){H.value||(T.value?e.filterable?Me():X():Y())}function _e(e){(k.value?.selfRef)?.contains(e.relatedTarget)||(d.value=!1,G(e),X())}function ve(e){ae(e),d.value=!0}function ye(){d.value=!0}function be(e){E.value?.$el.contains(e.relatedTarget)||(d.value=!1,G(e),X())}function xe(){var e;(e=E.value)==null||e.focus(),X()}function Se(e){T.value&&(E.value?.$el.contains(m(e))||X())}function Ce(t){if(!Array.isArray(t))return[];if(I.value)return Array.from(t);{let{remote:n}=e,{value:r}=S;if(n){let{value:e}=F;return t.filter(t=>r.has(t)||e.has(t))}else return t.filter(e=>r.has(e))}}function we(e){Te(e.rawNode)}function Te(t){if(H.value)return;let{tag:n,remote:r,clearFilterAfterSelect:i,valueField:a}=e;if(n&&!r){let{value:e}=g,t=e[0]||null;if(t){let e=h.value;e.length?e.push(t):h.value=[t],g.value=P}}if(r&&F.value.set(t[a],t),e.multiple){let e=Ce(u.value),o=e.findIndex(e=>e===t[a]);if(~o){if(e.splice(o,1),n&&!r){let e=Ee(t[a]);~e&&(h.value.splice(e,1),i&&(f.value=``))}}else e.push(t[a]),i&&(f.value=``);W(e,L(e))}else{if(n&&!r){let e=Ee(t[a]);~e?h.value=[h.value[e]]:h.value=P}$(),X(),W(t[a],t)}}function Ee(t){return h.value.findIndex(n=>n[e.valueField]===t)}function De(t){T.value||Y();let{value:n}=t.target;f.value=n;let{tag:r,remote:i}=e;if(ce(n),r&&!i){if(!n){g.value=P;return}let{onCreate:t}=e,r=t?t(n):{[e.labelField]:n,[e.valueField]:n},{valueField:i,labelField:a}=e;p.value.some(e=>e[i]===r[i]||e[a]===r[a])||h.value.some(e=>e[i]===r[i]||e[a]===r[a])?g.value=P:g.value=[r]}}function Oe(t){t.stopPropagation();let{multiple:n,tag:r,remote:i,clearCreatedOptionsOnClear:a}=e;!n&&e.filterable&&X(),r&&!i&&a&&(h.value=P),K(),n?W([],[]):W(null,null)}function ke(e){!U(e,`action`)&&!U(e,`empty`)&&!U(e,`header`)&&e.preventDefault()}function Ae(e){le(e)}function je(t){var n,r,i;if(!e.keyboard){t.preventDefault();return}switch(t.key){case` `:if(e.filterable)break;t.preventDefault();case`Enter`:if(!E.value?.isComposing){if(T.value){let t=k.value?.getPendingTmNode();t?we(t):e.filterable||(X(),$())}else if(Y(),e.tag&&Q.value){let t=g.value[0];if(t){let n=t[e.valueField],{value:r}=u;e.multiple&&Array.isArray(r)&&r.includes(n)||Te(t)}}}t.preventDefault();break;case`ArrowUp`:if(t.preventDefault(),e.loading)return;T.value&&((n=k.value)==null||n.prev());break;case`ArrowDown`:if(t.preventDefault(),e.loading)return;T.value?(r=k.value)==null||r.next():Y();break;case`Escape`:T.value&&(se(t),X()),(i=E.value)==null||i.focus();break}}function $(){var e;(e=E.value)==null||e.focus()}function Me(){var e;(e=E.value)==null||e.focusInput()}function Ne(){var e;T.value&&((e=D.value)==null||e.syncPosition())}ue(),c(O(e,`options`),ue);let Pe={focus:()=>{var e;(e=E.value)==null||e.focus()},focusInput:()=>{var e;(e=E.value)==null||e.focusInput()},blur:()=>{var e;(e=E.value)==null||e.blur()},blurInput:()=>{var e;(e=E.value)==null||e.blurInput()}},Fe=M(()=>{let{self:{menuBoxShadow:e}}=s.value;return{"--n-menu-box-shadow":e}}),Ie=i?N(`select`,void 0,Fe,e):void 0;return Object.assign(Object.assign({},Pe),{mergedStatus:re,mergedClsPrefix:t,mergedBordered:n,namespace:r,treeMate:x,isMounted:y(),triggerRef:E,menuRef:k,pattern:f,uncontrolledShow:w,mergedShow:T,adjustedTo:fe(e),uncontrolledValue:l,mergedValue:u,followerRef:D,localizedPlaceholder:j,selectedOption:ne,selectedOptions:R,mergedSize:V,mergedDisabled:H,focused:d,activeWithoutMenuOpen:Q,inlineThemeDisabled:i,onTriggerInputFocus:pe,onTriggerInputBlur:me,handleTriggerOrMenuResize:Ne,handleMenuFocus:ye,handleMenuBlur:be,handleMenuTabOut:xe,handleTriggerClick:ge,handleToggle:we,handleDeleteOption:Te,handlePatternInput:De,handleClear:Oe,handleTriggerBlur:_e,handleTriggerFocus:ve,handleKeydown:je,handleMenuAfterLeave:Z,handleMenuClickOutside:Se,handleMenuScroll:Ae,handleMenuKeydown:je,handleMenuMousedown:ke,mergedTheme:s,cssVars:i?void 0:Fe,themeClass:Ie?.themeClass,onRender:Ie?.onRender})},render(){return i(`div`,{class:`${this.mergedClsPrefix}-select`},i(ue,null,{default:()=>[i(me,null,{default:()=>i(qe,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e;return[(e=this.$slots).arrow?.call(e)]}})}),i(de,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===fe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{default:()=>i(R,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e;return this.mergedShow||this.displayDirective===`show`?((e=this.onRender)==null||e.call(this),d(i(Ge,Object.assign({},this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var e;return[(e=this.$slots).empty?.call(e)]},header:()=>{var e;return[(e=this.$slots).header?.call(e)]},action:()=>{var e;return[(e=this.$slots).action?.call(e)]}}),this.displayDirective===`show`?[[ne,this.mergedShow],[pe,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[pe,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{tt as t};