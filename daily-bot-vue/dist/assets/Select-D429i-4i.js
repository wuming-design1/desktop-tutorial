import{$n as e,Bn as t,Bt as n,Cn as r,Ct as i,D as a,Dn as o,Fn as s,Gt as c,Hn as l,Ht as u,It as d,Jt as f,Kt as p,M as m,Nn as h,On as g,Ot as _,Rt as v,Sn as y,Tn as b,Tt as x,Ut as S,Yn as C,bn as w,ct as T,ft as E,gt as D,h as O,in as k,k as A,kn as j,kt as M,lt as ee,mt as N,on as P,qt as F,tn as I,un as L,ut as te,vn as R,wn as z,wt as B,x as V,yt as H,zn as U,zt as W}from"./_plugin-vue_export-helper-Dw8IhM_J.js";import{n as ne,r as G}from"./_common-DBAoCL-8.js";import{n as K,t as q}from"./cssr-C7ZkhVrD.js";import{t as J}from"./use-merged-state-G3axosnw.js";import{t as Y}from"./use-compitable-DkvQ82Ix.js";import{r as re,t as ie}from"./Suffix-DW4zVUPF.js";import{A as ae,C as oe,D as se,E as ce,G as le,H as X,K as Z,L as Q,O as ue,R as de,T as fe,U as pe,V as me,W as he,g as ge,k as _e,q as ve,w as ye,z as be}from"./index-0WQr_tjR.js";function xe(e){return e&-e}var Se=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=xe(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=xe(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}else if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},Ce;function we(){return typeof document>`u`?!1:(Ce===void 0&&(Ce=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches),Ce)}var Te;function Ee(){return typeof document>`u`?1:(Te===void 0&&(Te=`chrome`in window?window.devicePixelRatio:1),Te)}var De=`VVirtualListXScroll`;function Oe({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let r=C(0),i=C(0),a=L(()=>{let t=e.value;if(t.length===0)return null;let n=new Se(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n});return h(De,{startIndexRef:M(()=>{let e=a.value;return e===null?0:Math.max(e.getBound(i.value)-1,0)}),endIndexRef:M(()=>{let t=a.value;return t===null?0:Math.min(t.getBound(i.value+r.value)+1,e.value.length-1)}),columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:e=>{let t=a.value;return t===null?0:t.sum(e)}}),{listWidthRef:r,scrollLeftRef:i}}var ke=R({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=y(De);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),Ae=q(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[q(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[q(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),je=R({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(t){let n=x();Ae.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:K,ssr:n}),j(()=>{let{defaultScrollIndex:e,defaultScrollKey:n}=t;e==null?n!=null&&y({key:n}):y({index:e})});let r=!1,i=!1;b(()=>{if(r=!1,!i){i=!0;return}y({top:h.value,left:s.value})}),g(()=>{r=!0,i||=!0});let a=M(()=>{if(t.renderCol==null&&t.renderItemWithCols==null||t.columns.length===0)return;let e=0;return t.columns.forEach(t=>{e+=t.width}),e}),o=L(()=>{let e=new Map,{keyField:n}=t;return t.items.forEach((t,r)=>{e.set(t[n],r)}),e}),{scrollLeftRef:s,listWidthRef:c}=Oe({columnsRef:e(t,`columns`),renderColRef:e(t,`renderCol`),renderItemWithColsRef:e(t,`renderItemWithCols`)}),l=C(null),u=C(void 0),f=new Map,p=L(()=>{let{items:e,itemSize:n,keyField:r}=t,i=new Se(e.length,n);return e.forEach((e,t)=>{let n=e[r],a=f.get(n);a!==void 0&&i.add(t,a)}),i}),m=C(0),h=C(0),_=M(()=>Math.max(p.value.getBound(h.value-d(t.paddingTop))-1,0)),v=L(()=>{let{value:e}=u;if(e===void 0)return[];let{items:n,itemSize:r}=t,i=_.value,a=Math.min(i+Math.ceil(e/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),y=(e,t)=>{if(typeof e==`number`){E(e,t,`auto`);return}let{left:n,top:r,index:i,key:a,position:s,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)E(n,r,c);else if(i!==void 0)T(i,c,l);else if(a!==void 0){let e=o.value.get(a);e!==void 0&&T(e,c,l)}else s===`bottom`?E(0,2**53-1,c):s===`top`&&E(0,0,c)},S,w=null;function T(e,n,r){let{value:i}=p,a=i.sum(e)+d(t.paddingTop);if(!r)l.value.scrollTo({left:0,top:a,behavior:n});else{S=e,w!==null&&window.clearTimeout(w),w=window.setTimeout(()=>{S=void 0,w=null},16);let{scrollTop:t,offsetHeight:r}=l.value;if(a>t){let o=i.get(e);a+o<=t+r||l.value.scrollTo({left:0,top:a+o-r,behavior:n})}else l.value.scrollTo({left:0,top:a,behavior:n})}}function E(e,t,n){l.value.scrollTo({left:e,top:t,behavior:n})}function D(e,n){if(r||t.ignoreItemResize||F(n.target))return;let{value:i}=p,a=o.value.get(e),s=i.get(a),c=n.borderBoxSize?.[0]?.blockSize??n.contentRect.height;if(c===s)return;c-t.itemSize===0?f.delete(e):f.set(e,c-t.itemSize);let u=c-s;if(u===0)return;i.add(a,u);let d=l.value;if(d!=null){if(S===void 0){let e=i.sum(a);d.scrollTop>e&&d.scrollBy(0,u)}else(a<S||a===S&&c+i.sum(a)>d.scrollTop+d.offsetHeight)&&d.scrollBy(0,u);P()}m.value++}let O=!we(),k=!1;function A(e){var n;(n=t.onScroll)==null||n.call(t,e),(!O||!k)&&P()}function ee(e){var n;if((n=t.onWheel)==null||n.call(t,e),O){let t=l.value;if(t!=null){if(e.deltaX===0&&(t.scrollTop===0&&e.deltaY<=0||t.scrollTop+t.offsetHeight>=t.scrollHeight&&e.deltaY>=0))return;e.preventDefault(),t.scrollTop+=e.deltaY/Ee(),t.scrollLeft+=e.deltaX/Ee(),P(),k=!0,G(()=>{k=!1})}}}function N(e){if(r||F(e.target))return;if(t.renderCol==null&&t.renderItemWithCols==null){if(e.contentRect.height===u.value)return}else if(e.contentRect.height===u.value&&e.contentRect.width===c.value)return;u.value=e.contentRect.height,c.value=e.contentRect.width;let{onResize:n}=t;n!==void 0&&n(e)}function P(){let{value:e}=l;e!=null&&(h.value=e.scrollTop,s.value=e.scrollLeft)}function F(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:u,listStyle:{overflow:`auto`},keyToIndex:o,itemsStyle:L(()=>{let{itemResizable:e}=t,n=W(p.value.sum());return m.value,[t.itemsStyle,{boxSizing:`content-box`,width:W(a.value),height:e?``:n,minHeight:e?n:``,paddingTop:W(t.paddingTop),paddingBottom:W(t.paddingBottom)}]}),visibleItemsStyle:L(()=>(m.value,{transform:`translateY(${W(p.value.sum(_.value))})`})),viewportItems:v,listElRef:l,itemsElRef:C(null),scrollTo:y,handleListResize:N,handleListScroll:A,handleListWheel:ee,handleItemResize:D}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:a}=this;return w(i,{onResize:this.handleListResize},{default:()=>{var o;return w(`div`,r(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(o=this.$slots).empty?.call(o):w(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[w(a,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:a}=this;return this.viewportItems.map(o=>{let s=o[t],c=n.get(s),l=r==null?void 0:w(ke,{index:c,item:o}),u=a==null?void 0:w(ke,{index:c,item:o}),d=this.$slots.default({item:o,renderedCols:l,renderedItemWithCols:u,index:c})[0];return e?w(i,{key:s,onResize:e=>this.handleItemResize(s,e)},{default:()=>d}):(d.key=s,d)})}})])])}})}}),$=`v-hidden`,Me=q(`[v-hidden]`,{display:`none!important`}),Ne=R({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=C(null),r=C(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute($)&&c.removeAttribute($);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute($)&&e.removeAttribute($);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute($)||n.setAttribute($,``);continue}else n.hasAttribute($)&&n.removeAttribute($);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute($,``))}let a=x();return Me.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:K,ssr:a}),j(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return z(()=>this.sync({showAllItemsBeforeCalculate:!1})),w(`div`,{class:`v-overflow`,ref:`selfRef`},[s(e,`default`),e.counter?e.counter():w(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function Pe(e,t){t&&(j(()=>{let{value:n}=e;n&&B.registerHandler(n,t)}),U(e,(e,t)=>{t&&B.unregisterHandler(t)},{deep:!1}),o(()=>{let{value:t}=e;t&&B.unregisterHandler(t)}))}function Fe(e){let t=e.filter(e=>e!==void 0);if(t.length!==0)return t.length===1?t[0]:t=>{e.forEach(e=>{e&&e(t)})}}var Ie=R({name:`Checkmark`,render(){return w(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},w(`g`,{fill:`none`},w(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})))}}),Le=R({name:`Empty`,render(){return w(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},w(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),w(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`}))}}),Re=R({props:{onFocus:Function,onBlur:Function},setup(e){return()=>w(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),ze=S(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[c(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[u(`+`,[c(`description`,`
 margin-top: 8px;
 `)])]),c(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),c(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Be=R({name:`Empty`,props:Object.assign(Object.assign({},A.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:r}=te(e),i=A(`Empty`,`-empty`,ze,ue,e,t),{localeRef:a}=re(`Empty`),o=L(()=>e.description??r?.value?.Empty?.description),s=L(()=>r?.value?.Empty?.renderIcon||(()=>w(Le,null))),c=L(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{[f(`iconSize`,t)]:r,[f(`fontSize`,t)]:a,textColor:o,iconColor:s,extraTextColor:c}}=i.value;return{"--n-icon-size":r,"--n-font-size":a,"--n-bezier":n,"--n-text-color":o,"--n-icon-color":s,"--n-extra-text-color":c}}),l=n?ee(`empty`,L(()=>{let t=``,{size:n}=e;return t+=n[0],t}),c,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:s,localizedDescription:L(()=>o.value||a.value.description),cssVars:n?void 0:c,themeClass:l?.themeClass,onRender:l?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),w(`div`,{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?w(`div`,{class:`${t}-empty__icon`},e.icon?e.icon():w(a,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?w(`div`,{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?w(`div`,{class:`${t}-empty__extra`},e.extra()):null)}}),Ve=R({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=y(ve);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):Q(i[this.labelField],i,!1),s=w(`div`,Object.assign({},a,{class:[`${e}-base-select-group-header`,a?.class]}),o);return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}});function He(e,t){return w(I,{name:`fade-in-scale-up-transition`},{default:()=>e?w(a,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>w(Ie)}):null})}var Ue=R({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:i,renderLabelRef:a,renderOptionRef:o,labelFieldRef:s,valueFieldRef:c,showCheckmarkRef:l,nodePropsRef:u,handleOptionClick:d,handleOptionMouseEnter:f}=y(ve),p=M(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function m(t){let{tmNode:n}=e;n.disabled||d(t,n)}function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e,{value:r}=p;n.disabled||r||f(t,n)}return{multiple:r,isGrouped:M(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:l,nodeProps:u,isPending:p,isSelected:M(()=>{let{value:n}=t,{value:a}=r;if(n===null)return!1;let o=e.tmNode.rawNode[c.value];if(a){let{value:e}=i;return e.has(o)}else return n===o}),labelField:s,renderLabel:a,renderOption:o,handleMouseMove:g,handleMouseEnter:h,handleClick:m}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:s,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,f=He(n,e),p=c?[c(t,n),a&&f]:[Q(t[this.labelField],t,n),a&&f],m=o?.(t),h=w(`div`,Object.assign({},m,{class:[`${e}-base-select-option`,t.class,m?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[m?.style||``,t.style||``],onClick:Fe([l,m?.onClick]),onMouseenter:Fe([u,m?.onMouseenter]),onMousemove:Fe([d,m?.onMousemove])}),w(`div`,{class:`${e}-base-select-option__content`},p));return t.render?t.render({node:h,option:t,selected:n}):s?s({node:h,option:t,selected:n}):h}}),We=S(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[S(`scrollbar`,`
 max-height: var(--n-height);
 `),S(`virtual-list`,`
 max-height: var(--n-height);
 `),S(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[c(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),S(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),S(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),c(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),c(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),c(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),c(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),S(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),S(`base-select-option`,`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[p(`show-checkmark`,`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),u(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),u(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),p(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),p(`pending`,[u(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),p(`selected`,`
 color: var(--n-option-text-color-active);
 `,[u(`&::before`,`
 background-color: var(--n-option-color-active);
 `),p(`pending`,[u(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),p(`disabled`,`
 cursor: not-allowed;
 `,[F(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),p(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),c(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[ce({enterScale:`0.5`})])])]),Ge=R({name:`InternalSelectMenu`,props:Object.assign(Object.assign({},A.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(t){let{mergedClsPrefixRef:n,mergedRtlRef:r,mergedComponentPropsRef:i}=te(t),a=m(`InternalSelectMenu`,r,n),s=A(`InternalSelectMenu`,`-internal-select-menu`,We,se,t,e(t,`clsPrefix`)),c=C(null),l=C(null),u=C(null),p=L(()=>t.treeMate.getFlattenedNodes()),g=L(()=>ae(p.value)),_=C(null);function y(){let{treeMate:e}=t,n=null,{value:r}=t;r===null?n=e.getFirstAvailableNode():(n=t.multiple?e.getNode((r||[])[(r||[]).length-1]):e.getNode(r),(!n||n.disabled)&&(n=e.getFirstAvailableNode())),G(n||null)}function b(){let{value:e}=_;e&&!t.treeMate.getNode(e.key)&&(_.value=null)}let x;U(()=>t.show,e=>{e?x=U(()=>t.treeMate,()=>{t.resetMenuOnOptionsChange?(t.autoPending?y():b(),z(K)):b()},{immediate:!0}):x?.()},{immediate:!0}),o(()=>{x?.()});let S=L(()=>d(s.value.self[f(`optionHeight`,t.size)])),w=L(()=>v(s.value.self[f(`padding`,t.size)])),T=L(()=>t.multiple&&Array.isArray(t.value)?new Set(t.value):new Set),E=L(()=>{let e=p.value;return e&&e.length===0}),D=L(()=>i?.value?.Select?.renderEmpty);function O(e){let{onToggle:n}=t;n&&n(e)}function k(e){let{onScroll:n}=t;n&&n(e)}function M(e){var t;(t=u.value)==null||t.sync(),k(e)}function N(){var e;(e=u.value)==null||e.sync()}function P(){let{value:e}=_;return e||null}function F(e,t){t.disabled||G(t,!1)}function I(e,t){t.disabled||O(t)}function R(e){var n;ne(e,`action`)||(n=t.onKeyup)==null||n.call(t,e)}function B(e){var n;ne(e,`action`)||(n=t.onKeydown)==null||n.call(t,e)}function V(e){var n;(n=t.onMousedown)==null||n.call(t,e),!t.focusable&&e.preventDefault()}function H(){let{value:e}=_;e&&G(e.getNext({loop:!0}),!0)}function W(){let{value:e}=_;e&&G(e.getPrev({loop:!0}),!0)}function G(e,t=!1){_.value=e,t&&K()}function K(){var e,n;let r=_.value;if(!r)return;let i=g.value(r.key);i!==null&&(t.virtualScroll?(e=l.value)==null||e.scrollTo({index:i}):(n=u.value)==null||n.scrollTo({index:i,elSize:S.value}))}function q(e){var n;c.value?.contains(e.target)&&((n=t.onFocus)==null||n.call(t,e))}function J(e){var n;c.value?.contains(e.relatedTarget)||(n=t.onBlur)==null||n.call(t,e)}h(ve,{handleOptionMouseEnter:F,handleOptionClick:I,valueSetRef:T,pendingTmNodeRef:_,nodePropsRef:e(t,`nodeProps`),showCheckmarkRef:e(t,`showCheckmark`),multipleRef:e(t,`multiple`),valueRef:e(t,`value`),renderLabelRef:e(t,`renderLabel`),renderOptionRef:e(t,`renderOption`),labelFieldRef:e(t,`labelField`),valueFieldRef:e(t,`valueField`)}),h(Z,c),j(()=>{let{value:e}=u;e&&e.sync()});let Y=L(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:o,actionDividerColor:c,optionTextColorPressed:l,optionTextColor:u,optionTextColorDisabled:d,optionTextColorActive:p,optionOpacityDisabled:m,optionCheckColor:h,actionTextColor:g,optionColorPending:_,optionColorActive:y,loadingColor:b,loadingSize:x,optionColorActivePending:S,[f(`optionFontSize`,e)]:C,[f(`optionHeight`,e)]:w,[f(`optionPadding`,e)]:T}}=s.value;return{"--n-height":r,"--n-action-divider-color":c,"--n-action-text-color":g,"--n-bezier":n,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":C,"--n-group-header-text-color":o,"--n-option-check-color":h,"--n-option-color-pending":_,"--n-option-color-active":y,"--n-option-color-active-pending":S,"--n-option-height":w,"--n-option-opacity-disabled":m,"--n-option-text-color":u,"--n-option-text-color-active":p,"--n-option-text-color-disabled":d,"--n-option-text-color-pressed":l,"--n-option-padding":T,"--n-option-padding-left":v(T,`left`),"--n-option-padding-right":v(T,`right`),"--n-loading-color":b,"--n-loading-size":x}}),{inlineThemeDisabled:re}=t,ie=re?ee(`internal-select-menu`,L(()=>t.size[0]),Y,t):void 0,oe={selfRef:c,next:H,prev:W,getPendingTmNode:P};return Pe(c,t.onResize),Object.assign({mergedTheme:s,mergedClsPrefix:n,rtlEnabled:a,virtualListRef:l,scrollbarRef:u,itemSize:S,padding:w,flattenedNodes:p,empty:E,mergedRenderEmpty:D,virtualListContainer(){let{value:e}=l;return e?.listElRef},virtualListContent(){let{value:e}=l;return e?.itemsElRef},doScroll:k,handleFocusin:q,handleFocusout:J,handleKeyUp:R,handleKeyDown:B,handleMouseDown:V,handleVirtualListResize:N,handleVirtualListScroll:M,cssVars:re?void 0:Y,themeClass:ie?.themeClass,onRender:ie?.onRender},oe)},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:i,onRender:a}=this;return a?.(),w(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},D(e.header,e=>e&&w(`div`,{class:`${n}-base-select-menu__header`,"data-header":!0,key:`header`},e)),this.loading?w(`div`,{class:`${n}-base-select-menu__loading`},w(V,{clsPrefix:n,strokeWidth:20})):this.empty?w(`div`,{class:`${n}-base-select-menu__empty`,"data-empty":!0},N(e.empty,()=>[this.mergedRenderEmpty?.call(this)||w(Be,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):w(O,Object.assign({ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?w(je,{ref:`virtualListRef`,class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?w(Ve,{key:e.key,clsPrefix:n,tmNode:e}):e.ignored?null:w(Ue,{clsPrefix:n,key:e.key,tmNode:e})}):w(`div`,{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(e=>e.isGroup?w(Ve,{key:e.key,clsPrefix:n,tmNode:e}):w(Ue,{clsPrefix:n,key:e.key,tmNode:e})))}),D(e.action,e=>e&&[w(`div`,{class:`${n}-base-select-menu__action`,"data-action":!0,key:`action`},e),w(Re,{onFocus:this.onTabOut,key:`focus-detector`})]))}}),Ke=u([S(`base-selection`,`
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
 `,[S(`base-loading`,`
 color: var(--n-loading-color);
 `),S(`base-selection-tags`,`min-height: var(--n-height);`),c(`border, state-border`,`
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
 `),c(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),S(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[c(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),S(`base-selection-overlay`,`
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
 `,[c(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),S(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[c(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),S(`base-selection-tags`,`
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
 `),S(`base-selection-label`,`
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
 `,[S(`base-selection-input`,`
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
 `,[c(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),c(`render-label`,`
 color: var(--n-text-color);
 `)]),F(`disabled`,[u(`&:hover`,[c(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),p(`focus`,[c(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),p(`active`,[c(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),S(`base-selection-label`,`background-color: var(--n-color-active);`),S(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),p(`disabled`,`cursor: not-allowed;`,[c(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),S(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[S(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),c(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),S(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),S(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),S(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[c(`input`,`
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
 `),c(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>p(`${e}-status`,[c(`state-border`,`border: var(--n-border-${e});`),F(`disabled`,[u(`&:hover`,[c(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),p(`active`,[c(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),S(`base-selection-label`,`background-color: var(--n-color-active-${e});`),S(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),p(`focus`,[c(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),S(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),S(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[u(`&:last-child`,`padding-right: 0;`),S(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[c(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),qe=R({name:`InternalSelection`,props:Object.assign(Object.assign({},A.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(n){let{mergedClsPrefixRef:r,mergedRtlRef:i}=te(n),a=m(`InternalSelection`,i,r),o=C(null),s=C(null),c=C(null),l=C(null),u=C(null),d=C(null),p=C(null),h=C(null),g=C(null),_=C(null),y=C(!1),b=C(!1),x=C(!1),S=A(`InternalSelection`,`-internal-selection`,Ke,oe,n,e(n,`clsPrefix`)),w=L(()=>n.clearable&&!n.disabled&&(x.value||n.active)),T=L(()=>n.selectedOption?n.renderTag?n.renderTag({option:n.selectedOption,handleClose:()=>{}}):n.renderLabel?n.renderLabel(n.selectedOption,!0):Q(n.selectedOption[n.labelField],n.selectedOption,!0):n.placeholder),E=L(()=>{let e=n.selectedOption;if(e)return e[n.labelField]}),D=L(()=>n.multiple?!!(Array.isArray(n.selectedOptions)&&n.selectedOptions.length):n.selectedOption!==null);function O(){var e;let{value:t}=o;if(t){let{value:r}=s;r&&(r.style.width=`${t.offsetWidth}px`,n.maxTagCount!==`responsive`&&((e=g.value)==null||e.sync({showAllItemsBeforeCalculate:!1})))}}function k(){let{value:e}=_;e&&(e.style.display=`none`)}function M(){let{value:e}=_;e&&(e.style.display=`inline-block`)}U(e(n,`active`),e=>{e||k()}),U(e(n,`pattern`),()=>{n.multiple&&z(O)});function N(e){let{onFocus:t}=n;t&&t(e)}function P(e){let{onBlur:t}=n;t&&t(e)}function F(e){let{onDeleteOption:t}=n;t&&t(e)}function I(e){let{onClear:t}=n;t&&t(e)}function R(e){let{onPatternInput:t}=n;t&&t(e)}function B(e){(!e.relatedTarget||!c.value?.contains(e.relatedTarget))&&N(e)}function V(e){c.value?.contains(e.relatedTarget)||P(e)}function H(e){I(e)}function W(){x.value=!0}function ne(){x.value=!1}function G(e){!n.active||!n.filterable||e.target!==s.value&&e.preventDefault()}function K(e){F(e)}let q=C(!1);function J(e){if(e.key===`Backspace`&&!q.value&&!n.pattern.length){let{selectedOptions:e}=n;e?.length&&K(e[e.length-1])}}let Y=null;function re(e){let{value:t}=o;t&&(t.textContent=e.target.value,O()),n.ignoreComposition&&q.value?Y=e:R(e)}function ie(){q.value=!0}function ae(){q.value=!1,n.ignoreComposition&&R(Y),Y=null}function se(e){var t;b.value=!0,(t=n.onPatternFocus)==null||t.call(n,e)}function ce(e){var t;b.value=!1,(t=n.onPatternBlur)==null||t.call(n,e)}function le(){var e,t;if(n.filterable)b.value=!1,(e=d.value)==null||e.blur(),(t=s.value)==null||t.blur();else if(n.multiple){let{value:e}=l;e?.blur()}else{let{value:e}=u;e?.blur()}}function X(){var e,t,r;n.filterable?(b.value=!1,(e=d.value)==null||e.focus()):n.multiple?(t=l.value)==null||t.focus():(r=u.value)==null||r.focus()}function Z(){let{value:e}=s;e&&(M(),e.focus())}function ue(){let{value:e}=s;e&&e.blur()}function de(e){let{value:t}=p;t&&t.setTextContent(`+${e}`)}function fe(){let{value:e}=h;return e}function pe(){return s.value}let me=null;function he(){me!==null&&window.clearTimeout(me)}function ge(){n.active||(he(),me=window.setTimeout(()=>{D.value&&(y.value=!0)},100))}function _e(){he()}function ve(e){e||(he(),y.value=!1)}U(D,e=>{e||(y.value=!1)}),j(()=>{t(()=>{let e=d.value;e&&(n.disabled?e.removeAttribute(`tabindex`):e.tabIndex=b.value?-1:0)})}),Pe(c,n.onResize);let{inlineThemeDisabled:ye}=n,be=L(()=>{let{size:e}=n,{common:{cubicBezierEaseInOut:t},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:o,textColor:s,paddingSingle:c,paddingMultiple:l,caretColor:u,colorDisabled:d,textColorDisabled:p,placeholderColorDisabled:m,colorActive:h,boxShadowFocus:g,boxShadowActive:_,boxShadowHover:y,border:b,borderFocus:x,borderHover:C,borderActive:w,arrowColor:T,arrowColorDisabled:E,loadingColor:D,colorActiveWarning:O,boxShadowFocusWarning:k,boxShadowActiveWarning:A,boxShadowHoverWarning:j,borderWarning:M,borderFocusWarning:ee,borderHoverWarning:N,borderActiveWarning:P,colorActiveError:F,boxShadowFocusError:I,boxShadowActiveError:L,boxShadowHoverError:te,borderError:R,borderFocusError:z,borderHoverError:B,borderActiveError:V,clearColor:H,clearColorHover:U,clearColorPressed:W,clearSize:ne,arrowSize:G,[f(`height`,e)]:K,[f(`fontSize`,e)]:q}}=S.value,J=v(c),Y=v(l);return{"--n-bezier":t,"--n-border":b,"--n-border-active":w,"--n-border-focus":x,"--n-border-hover":C,"--n-border-radius":i,"--n-box-shadow-active":_,"--n-box-shadow-focus":g,"--n-box-shadow-hover":y,"--n-caret-color":u,"--n-color":a,"--n-color-active":h,"--n-color-disabled":d,"--n-font-size":q,"--n-height":K,"--n-padding-single-top":J.top,"--n-padding-multiple-top":Y.top,"--n-padding-single-right":J.right,"--n-padding-multiple-right":Y.right,"--n-padding-single-left":J.left,"--n-padding-multiple-left":Y.left,"--n-padding-single-bottom":J.bottom,"--n-padding-multiple-bottom":Y.bottom,"--n-placeholder-color":o,"--n-placeholder-color-disabled":m,"--n-text-color":s,"--n-text-color-disabled":p,"--n-arrow-color":T,"--n-arrow-color-disabled":E,"--n-loading-color":D,"--n-color-active-warning":O,"--n-box-shadow-focus-warning":k,"--n-box-shadow-active-warning":A,"--n-box-shadow-hover-warning":j,"--n-border-warning":M,"--n-border-focus-warning":ee,"--n-border-hover-warning":N,"--n-border-active-warning":P,"--n-color-active-error":F,"--n-box-shadow-focus-error":I,"--n-box-shadow-active-error":L,"--n-box-shadow-hover-error":te,"--n-border-error":R,"--n-border-focus-error":z,"--n-border-hover-error":B,"--n-border-active-error":V,"--n-clear-size":ne,"--n-clear-color":H,"--n-clear-color-hover":U,"--n-clear-color-pressed":W,"--n-arrow-size":G,"--n-font-weight":r}}),xe=ye?ee(`internal-selection`,L(()=>n.size[0]),be,n):void 0;return{mergedTheme:S,mergedClearable:w,mergedClsPrefix:r,rtlEnabled:a,patternInputFocused:b,filterablePlaceholder:T,label:E,selected:D,showTagsPanel:y,isComposing:q,counterRef:p,counterWrapperRef:h,patternInputMirrorRef:o,patternInputRef:s,selfRef:c,multipleElRef:l,singleElRef:u,patternInputWrapperRef:d,overflowRef:g,inputTagElRef:_,handleMouseDown:G,handleFocusin:B,handleClear:H,handleMouseEnter:W,handleMouseLeave:ne,handleDeleteOption:K,handlePatternKeyDown:J,handlePatternInputInput:re,handlePatternInputBlur:ce,handlePatternInputFocus:se,handleMouseEnterCounter:ge,handleMouseLeaveCounter:_e,handleFocusout:V,handleCompositionEnd:ae,handleCompositionStart:ie,onPopoverUpdateShow:ve,focus:X,focusInput:Z,blur:le,blurInput:ue,updateCounter:de,getCounter:fe,getTail:pe,renderLabel:n.renderLabel,cssVars:ye?void 0:be,themeClass:xe?.themeClass,onRender:xe?.onRender}},render(){let{status:e,multiple:t,size:n,disabled:r,filterable:i,maxTagCount:a,bordered:o,clsPrefix:s,ellipsisTagPopoverProps:c,onRender:l,renderTag:u,renderLabel:d}=this;l?.();let f=a===`responsive`,p=typeof a==`number`,m=f||p,h=w(E,null,{default:()=>w(ie,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var e;return(e=this.$slots).arrow?.call(e)}})}),g;if(t){let{labelField:e}=this,t=t=>w(`div`,{class:`${s}-base-selection-tag-wrapper`,key:t.value},u?u({option:t,handleClose:()=>{this.handleDeleteOption(t)}}):w(ye,{size:n,closable:!t.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>d?d(t,!0):Q(t[e],t,!0)})),o=()=>(p?this.selectedOptions.slice(0,a):this.selectedOptions).map(t),l=i?w(`div`,{class:`${s}-base-selection-input-tag`,ref:`inputTagElRef`,key:`__input-tag__`},w(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),w(`span`,{ref:`patternInputMirrorRef`,class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,_=f?()=>w(`div`,{class:`${s}-base-selection-tag-wrapper`,ref:`counterWrapperRef`},w(ye,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0,v;if(p){let e=this.selectedOptions.length-a;e>0&&(v=w(`div`,{class:`${s}-base-selection-tag-wrapper`,key:`__counter__`},w(ye,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${e}`})))}let y=f?i?w(Ne,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:_,tail:()=>l}):w(Ne,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:_}):p&&v?o().concat(v):o(),b=m?()=>w(`div`,{class:`${s}-base-selection-popover`},f?o():this.selectedOptions.map(t)):void 0,x=m?Object.assign({show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,S=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?w(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},w(`div`,{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):null,C=i?w(`div`,{ref:`patternInputWrapperRef`,class:`${s}-base-selection-tags`},y,f?null:l,h):w(`div`,{ref:`multipleElRef`,class:`${s}-base-selection-tags`,tabindex:r?void 0:0},y,h);g=w(P,null,m?w(fe,Object.assign({},x,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>C,default:b}):C,S)}else if(i){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=!this.active&&this.selected;g=w(`div`,{ref:`patternInputWrapperRef`,class:`${s}-base-selection-label`,title:this.patternInputFocused?void 0:de(this.label)},w(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,class:`${s}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),n?w(`div`,{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:`input`},w(`div`,{class:`${s}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):Q(this.label,this.selectedOption,!0))):null,t?w(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:`placeholder`},w(`div`,{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,h)}else g=w(`div`,{ref:`singleElRef`,class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label===void 0?w(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:`placeholder`},w(`div`,{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):w(`div`,{class:`${s}-base-selection-input`,title:de(this.label),key:`input`},w(`div`,{class:`${s}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):Q(this.label,this.selectedOption,!0))),h);return w(`div`,{ref:`selfRef`,class:[`${s}-base-selection`,this.rtlEnabled&&`${s}-base-selection--rtl`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},g,o?w(`div`,{class:`${s}-base-selection__border`}):null,o?w(`div`,{class:`${s}-base-selection__state-border`}):null)}});function Je(e){return e.type===`group`}function Ye(e){return e.type===`ignored`}function Xe(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Ze(e,t){return{getIsGroup:Je,getIgnored:Ye,getKey(t){return Je(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function Qe(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(Je(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(Ye(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function $e(e,t,n){let r=new Map;return e.forEach(e=>{Je(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var et=u([S(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),S(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[ce({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),tt=R({name:`Select`,props:Object.assign(Object.assign({},A.props),{to:le.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),slots:Object,setup(t){let{mergedClsPrefixRef:r,mergedBorderedRef:i,namespaceRef:a,inlineThemeDisabled:o,mergedComponentPropsRef:s}=te(t),c=A(`Select`,`-select`,et,ge,t,r),l=C(t.defaultValue),u=J(e(t,`value`),l),d=C(!1),f=C(``),p=Y(t,[`items`,`options`]),m=C([]),h=C([]),g=L(()=>h.value.concat(m.value).concat(p.value)),v=L(()=>{let{filter:e}=t;if(e)return e;let{labelField:n,valueField:r}=t;return(e,t)=>{if(!t)return!1;let i=t[n];if(typeof i==`string`)return Xe(e,i);let a=t[r];return typeof a==`string`?Xe(e,a):typeof a==`number`&&Xe(e,String(a))}}),y=L(()=>{if(t.remote)return p.value;{let{value:e}=g,{value:n}=f;return!n.length||!t.filterable?e:Qe(e,v.value,n,t.childrenField)}}),b=L(()=>{let{valueField:e,childrenField:n}=t,r=Ze(e,n);return _e(y.value,r)}),x=L(()=>$e(g.value,t.valueField,t.childrenField)),S=C(!1),w=J(e(t,`show`),S),E=C(null),D=C(null),O=C(null),{localeRef:k}=re(`Select`),j=L(()=>t.placeholder??k.value.placeholder),M=[],N=C(new Map),P=L(()=>{let{fallbackOption:e}=t;if(e===void 0){let{labelField:e,valueField:n}=t;return t=>({[e]:String(t),[n]:t})}return e===!1?!1:t=>Object.assign(e(t),{value:t})});function F(e){let n=t.remote,{value:r}=N,{value:i}=x,{value:a}=P,o=[];return e.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(n&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let I=L(()=>{if(t.multiple){let{value:e}=u;return Array.isArray(e)?F(e):[]}return null}),R=L(()=>{let{value:e}=u;return!t.multiple&&!Array.isArray(e)?e===null?null:F([e])[0]||null:null}),z=T(t,{mergedSize:e=>{let{size:n}=t;if(n)return n;let{mergedSize:r}=e||{};return r?.value?r.value:s?.value?.Select?.size||`medium`}}),{mergedSizeRef:B,mergedDisabledRef:V,mergedStatusRef:W}=z;function G(e,n){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=t,{nTriggerFormChange:o,nTriggerFormInput:s}=z;r&&H(r,e,n),a&&H(a,e,n),i&&H(i,e,n),l.value=e,o(),s()}function K(e){let{onBlur:n}=t,{nTriggerFormBlur:r}=z;n&&H(n,e),r()}function q(){let{onClear:e}=t;e&&H(e)}function ie(e){let{onFocus:n,showOnFocus:r}=t,{nTriggerFormFocus:i}=z;n&&H(n,e),i(),r&&X()}function ae(e){let{onSearch:n}=t;n&&H(n,e)}function oe(e){let{onScroll:n}=t;n&&H(n,e)}function se(){var e;let{remote:n,multiple:r}=t;if(n){let{value:n}=N;if(r){let{valueField:r}=t;(e=I.value)==null||e.forEach(e=>{n.set(e[r],e)})}else{let e=R.value;e&&n.set(e[t.valueField],e)}}}function ce(e){let{onUpdateShow:n,"onUpdate:show":r}=t;n&&H(n,e),r&&H(r,e),S.value=e}function X(){V.value||(ce(!0),S.value=!0,t.filterable&&Me())}function Z(){ce(!1)}function Q(){f.value=``,h.value=M}let ue=C(!1);function de(){t.filterable&&(ue.value=!0)}function fe(){t.filterable&&(ue.value=!1,w.value||Q())}function pe(){V.value||(w.value?t.filterable?Me():Z():X())}function me(e){(O.value?.selfRef)?.contains(e.relatedTarget)||(d.value=!1,K(e),Z())}function he(e){ie(e),d.value=!0}function ve(){d.value=!0}function ye(e){E.value?.$el.contains(e.relatedTarget)||(d.value=!1,K(e),Z())}function xe(){var e;(e=E.value)==null||e.focus(),Z()}function Se(e){w.value&&(E.value?.$el.contains(n(e))||Z())}function Ce(e){if(!Array.isArray(e))return[];if(P.value)return Array.from(e);{let{remote:n}=t,{value:r}=x;if(n){let{value:t}=N;return e.filter(e=>r.has(e)||t.has(e))}else return e.filter(e=>r.has(e))}}function we(e){Te(e.rawNode)}function Te(e){if(V.value)return;let{tag:n,remote:r,clearFilterAfterSelect:i,valueField:a}=t;if(n&&!r){let{value:e}=h,t=e[0]||null;if(t){let e=m.value;e.length?e.push(t):m.value=[t],h.value=M}}if(r&&N.value.set(e[a],e),t.multiple){let t=Ce(u.value),o=t.findIndex(t=>t===e[a]);if(~o){if(t.splice(o,1),n&&!r){let t=Ee(e[a]);~t&&(m.value.splice(t,1),i&&(f.value=``))}}else t.push(e[a]),i&&(f.value=``);G(t,F(t))}else{if(n&&!r){let t=Ee(e[a]);~t?m.value=[m.value[t]]:m.value=M}$(),Z(),G(e[a],e)}}function Ee(e){return m.value.findIndex(n=>n[t.valueField]===e)}function De(e){w.value||X();let{value:n}=e.target;f.value=n;let{tag:r,remote:i}=t;if(ae(n),r&&!i){if(!n){h.value=M;return}let{onCreate:e}=t,r=e?e(n):{[t.labelField]:n,[t.valueField]:n},{valueField:i,labelField:a}=t;p.value.some(e=>e[i]===r[i]||e[a]===r[a])||m.value.some(e=>e[i]===r[i]||e[a]===r[a])?h.value=M:h.value=[r]}}function Oe(e){e.stopPropagation();let{multiple:n,tag:r,remote:i,clearCreatedOptionsOnClear:a}=t;!n&&t.filterable&&Z(),r&&!i&&a&&(m.value=M),q(),n?G([],[]):G(null,null)}function ke(e){!ne(e,`action`)&&!ne(e,`empty`)&&!ne(e,`header`)&&e.preventDefault()}function Ae(e){oe(e)}function je(e){var n,r,i;if(!t.keyboard){e.preventDefault();return}switch(e.key){case` `:if(t.filterable)break;e.preventDefault();case`Enter`:if(!E.value?.isComposing){if(w.value){let e=O.value?.getPendingTmNode();e?we(e):t.filterable||(Z(),$())}else if(X(),t.tag&&ue.value){let e=h.value[0];if(e){let n=e[t.valueField],{value:r}=u;t.multiple&&Array.isArray(r)&&r.includes(n)||Te(e)}}}e.preventDefault();break;case`ArrowUp`:if(e.preventDefault(),t.loading)return;w.value&&((n=O.value)==null||n.prev());break;case`ArrowDown`:if(e.preventDefault(),t.loading)return;w.value?(r=O.value)==null||r.next():X();break;case`Escape`:w.value&&(be(e),Z()),(i=E.value)==null||i.focus();break}}function $(){var e;(e=E.value)==null||e.focus()}function Me(){var e;(e=E.value)==null||e.focusInput()}function Ne(){var e;w.value&&((e=D.value)==null||e.syncPosition())}se(),U(e(t,`options`),se);let Pe={focus:()=>{var e;(e=E.value)==null||e.focus()},focusInput:()=>{var e;(e=E.value)==null||e.focusInput()},blur:()=>{var e;(e=E.value)==null||e.blur()},blurInput:()=>{var e;(e=E.value)==null||e.blurInput()}},Fe=L(()=>{let{self:{menuBoxShadow:e}}=c.value;return{"--n-menu-box-shadow":e}}),Ie=o?ee(`select`,void 0,Fe,t):void 0;return Object.assign(Object.assign({},Pe),{mergedStatus:W,mergedClsPrefix:r,mergedBordered:i,namespace:a,treeMate:b,isMounted:_(),triggerRef:E,menuRef:O,pattern:f,uncontrolledShow:S,mergedShow:w,adjustedTo:le(t),uncontrolledValue:l,mergedValue:u,followerRef:D,localizedPlaceholder:j,selectedOption:R,selectedOptions:I,mergedSize:B,mergedDisabled:V,focused:d,activeWithoutMenuOpen:ue,inlineThemeDisabled:o,onTriggerInputFocus:de,onTriggerInputBlur:fe,handleTriggerOrMenuResize:Ne,handleMenuFocus:ve,handleMenuBlur:ye,handleMenuTabOut:xe,handleTriggerClick:pe,handleToggle:we,handleDeleteOption:Te,handlePatternInput:De,handleClear:Oe,handleTriggerBlur:me,handleTriggerFocus:he,handleKeydown:je,handleMenuAfterLeave:Q,handleMenuClickOutside:Se,handleMenuScroll:Ae,handleMenuKeydown:je,handleMenuMousedown:ke,mergedTheme:c,cssVars:o?void 0:Fe,themeClass:Ie?.themeClass,onRender:Ie?.onRender})},render(){return w(`div`,{class:`${this.mergedClsPrefix}-select`},w(he,null,{default:()=>[w(pe,null,{default:()=>w(qe,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e;return[(e=this.$slots).arrow?.call(e)]}})}),w(me,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===le.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{default:()=>w(I,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e;return this.mergedShow||this.displayDirective===`show`?((e=this.onRender)==null||e.call(this),l(w(Ge,Object.assign({},this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var e;return[(e=this.$slots).empty?.call(e)]},header:()=>{var e;return[(e=this.$slots).header?.call(e)]},action:()=>{var e;return[(e=this.$slots).action?.call(e)]}}),this.displayDirective===`show`?[[k,this.mergedShow],[X,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[X,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{tt as t};