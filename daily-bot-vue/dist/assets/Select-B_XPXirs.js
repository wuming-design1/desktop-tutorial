import{An as e,At as t,Bt as n,Cn as r,Ft as i,Gt as a,Hn as o,Jt as s,Lt as c,Mn as l,Mt as u,Ot as d,Pt as f,Rt as p,Tn as m,Xt as h,_n as g,_t as _,bt as v,cn as y,ct as b,dt as x,en as S,et as C,fn as w,gt as T,hn as E,ht as D,it as O,jt as k,kn as A,mn as ee,nt as j,ot as M,p as N,pn as P,qn as F,s as I,tt as te,un as L,vn as ne,w as re,x as R,xt as z,y as B,yn as V,zt as H}from"./_plugin-vue_export-helper-Diu8tYPd.js";import{n as U,r as W}from"./_common-DBAoCL-8.js";import{n as G,t as K}from"./cssr-iHO12vWr.js";import{t as q}from"./use-merged-state-C-J5a4aR.js";import{t as J}from"./use-compitable-C3wbvlY-.js";import{r as ie,t as ae}from"./Suffix-amEJlcPc.js";import{B as oe,C as se,D as ce,E as le,G as Y,H as X,I as Z,K as Q,L as ue,O as de,R as fe,S as pe,T as me,U as he,V as ge,W as _e,h as ve,k as ye,w as be}from"./index-CbVfxkmi.js";function xe(e){return e&-e}var Se=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=xe(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=xe(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}else if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},Ce;function we(){return typeof document>`u`?!1:(Ce===void 0&&(Ce=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches),Ce)}var Te;function Ee(){return typeof document>`u`?1:(Te===void 0&&(Te=`chrome`in window?window.devicePixelRatio:1),Te)}var De=`VVirtualListXScroll`;function Oe({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let i=o(0),a=o(0),s=S(()=>{let t=e.value;if(t.length===0)return null;let n=new Se(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n});return r(De,{startIndexRef:z(()=>{let e=s.value;return e===null?0:Math.max(e.getBound(a.value)-1,0)}),endIndexRef:z(()=>{let t=s.value;return t===null?0:Math.min(t.getBound(a.value+i.value)+1,e.value.length-1)}),columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:e=>{let t=s.value;return t===null?0:t.sum(e)}}),{listWidthRef:i,scrollLeftRef:a}}var ke=y({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=w(De);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),Ae=K(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[K(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[K(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),je=y({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){let t=_();Ae.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:G,ssr:t}),V(()=>{let{defaultScrollIndex:t,defaultScrollKey:n}=e;t==null?n!=null&&y({key:n}):y({index:t})});let n=!1,r=!1;E(()=>{if(n=!1,!r){r=!0;return}y({top:h.value,left:s.value})}),ne(()=>{n=!0,r||=!0});let i=z(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let t=0;return e.columns.forEach(e=>{t+=e.width}),t}),a=S(()=>{let t=new Map,{keyField:n}=e;return e.items.forEach((e,r)=>{t.set(e[n],r)}),t}),{scrollLeftRef:s,listWidthRef:c}=Oe({columnsRef:F(e,`columns`),renderColRef:F(e,`renderCol`),renderItemWithColsRef:F(e,`renderItemWithCols`)}),l=o(null),u=o(void 0),f=new Map,p=S(()=>{let{items:t,itemSize:n,keyField:r}=e,i=new Se(t.length,n);return t.forEach((e,t)=>{let n=e[r],a=f.get(n);a!==void 0&&i.add(t,a)}),i}),m=o(0),h=o(0),g=z(()=>Math.max(p.value.getBound(h.value-d(e.paddingTop))-1,0)),v=S(()=>{let{value:t}=u;if(t===void 0)return[];let{items:n,itemSize:r}=e,i=g.value,a=Math.min(i+Math.ceil(t/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),y=(e,t)=>{if(typeof e==`number`){w(e,t,`auto`);return}let{left:n,top:r,index:i,key:o,position:s,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)w(n,r,c);else if(i!==void 0)C(i,c,l);else if(o!==void 0){let e=a.value.get(o);e!==void 0&&C(e,c,l)}else s===`bottom`?w(0,2**53-1,c):s===`top`&&w(0,0,c)},b,x=null;function C(t,n,r){let{value:i}=p,a=i.sum(t)+d(e.paddingTop);if(!r)l.value.scrollTo({left:0,top:a,behavior:n});else{b=t,x!==null&&window.clearTimeout(x),x=window.setTimeout(()=>{b=void 0,x=null},16);let{scrollTop:e,offsetHeight:r}=l.value;if(a>e){let o=i.get(t);a+o<=e+r||l.value.scrollTo({left:0,top:a+o-r,behavior:n})}else l.value.scrollTo({left:0,top:a,behavior:n})}}function w(e,t,n){l.value.scrollTo({left:e,top:t,behavior:n})}function T(t,r){if(n||e.ignoreItemResize||N(r.target))return;let{value:i}=p,o=a.value.get(t),s=i.get(o),c=r.borderBoxSize?.[0]?.blockSize??r.contentRect.height;if(c===s)return;c-e.itemSize===0?f.delete(t):f.set(t,c-e.itemSize);let u=c-s;if(u===0)return;i.add(o,u);let d=l.value;if(d!=null){if(b===void 0){let e=i.sum(o);d.scrollTop>e&&d.scrollBy(0,u)}else(o<b||o===b&&c+i.sum(o)>d.scrollTop+d.offsetHeight)&&d.scrollBy(0,u);M()}m.value++}let D=!we(),O=!1;function A(t){var n;(n=e.onScroll)==null||n.call(e,t),(!D||!O)&&M()}function ee(t){var n;if((n=e.onWheel)==null||n.call(e,t),D){let e=l.value;if(e!=null){if(t.deltaX===0&&(e.scrollTop===0&&t.deltaY<=0||e.scrollTop+e.offsetHeight>=e.scrollHeight&&t.deltaY>=0))return;t.preventDefault(),e.scrollTop+=t.deltaY/Ee(),e.scrollLeft+=t.deltaX/Ee(),M(),O=!0,W(()=>{O=!1})}}}function j(t){if(n||N(t.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(t.contentRect.height===u.value)return}else if(t.contentRect.height===u.value&&t.contentRect.width===c.value)return;u.value=t.contentRect.height,c.value=t.contentRect.width;let{onResize:r}=e;r!==void 0&&r(t)}function M(){let{value:e}=l;e!=null&&(h.value=e.scrollTop,s.value=e.scrollLeft)}function N(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:u,listStyle:{overflow:`auto`},keyToIndex:a,itemsStyle:S(()=>{let{itemResizable:t}=e,n=k(p.value.sum());return m.value,[e.itemsStyle,{boxSizing:`content-box`,width:k(i.value),height:t?``:n,minHeight:t?n:``,paddingTop:k(e.paddingTop),paddingBottom:k(e.paddingBottom)}]}),visibleItemsStyle:S(()=>(m.value,{transform:`translateY(${k(p.value.sum(g.value))})`})),viewportItems:v,listElRef:l,itemsElRef:o(null),scrollTo:y,handleListResize:j,handleListScroll:A,handleListWheel:ee,handleItemResize:T}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return L(D,{onResize:this.handleListResize},{default:()=>{var i;return L(`div`,P(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(i=this.$slots).empty?.call(i):L(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[L(r,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:i}=this;return this.viewportItems.map(a=>{let o=a[t],s=n.get(o),c=r==null?void 0:L(ke,{index:s,item:a}),l=i==null?void 0:L(ke,{index:s,item:a}),u=this.$slots.default({item:a,renderedCols:c,renderedItemWithCols:l,index:s})[0];return e?L(D,{key:o,onResize:e=>this.handleItemResize(o,e)},{default:()=>u}):(u.key=o,u)})}})])])}})}}),$=`v-hidden`,Me=K(`[v-hidden]`,{display:`none!important`}),Ne=y({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=o(null),r=o(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute($)&&c.removeAttribute($);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute($)&&e.removeAttribute($);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute($)||n.setAttribute($,``);continue}else n.hasAttribute($)&&n.removeAttribute($);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute($,``))}let a=_();return Me.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:G,ssr:a}),V(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return ee(()=>this.sync({showAllItemsBeforeCalculate:!1})),L(`div`,{class:`v-overflow`,ref:`selfRef`},[m(e,`default`),e.counter?e.counter():L(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function Pe(e,t){t&&(V(()=>{let{value:n}=e;n&&T.registerHandler(n,t)}),A(e,(e,t)=>{t&&T.unregisterHandler(t)},{deep:!1}),g(()=>{let{value:t}=e;t&&T.unregisterHandler(t)}))}function Fe(e){let t=e.filter(e=>e!==void 0);if(t.length!==0)return t.length===1?t[0]:t=>{e.forEach(e=>{e&&e(t)})}}var Ie=y({name:`Checkmark`,render(){return L(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},L(`g`,{fill:`none`},L(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})))}}),Le=y({name:`Empty`,render(){return L(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},L(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),L(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`}))}}),Re=y({props:{onFocus:Function,onBlur:Function},setup(e){return()=>L(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),ze=i(`empty`,`
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
 `,[f(`+`,[c(`description`,`
 margin-top: 8px;
 `)])]),c(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),c(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Be=y({name:`Empty`,props:Object.assign(Object.assign({},R.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedComponentPropsRef:i}=j(e),a=R(`Empty`,`-empty`,ze,ce,e,t),{localeRef:o}=ie(`Empty`),s=S(()=>e.description??i?.value?.Empty?.description),c=S(()=>i?.value?.Empty?.renderIcon||(()=>L(Le,null))),l=S(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:r},self:{[n(`iconSize`,t)]:i,[n(`fontSize`,t)]:o,textColor:s,iconColor:c,extraTextColor:l}}=a.value;return{"--n-icon-size":i,"--n-font-size":o,"--n-bezier":r,"--n-text-color":s,"--n-icon-color":c,"--n-extra-text-color":l}}),u=r?te(`empty`,S(()=>{let t=``,{size:n}=e;return t+=n[0],t}),l,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:c,localizedDescription:S(()=>s.value||o.value.description),cssVars:r?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),L(`div`,{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?L(`div`,{class:`${t}-empty__icon`},e.icon?e.icon():L(B,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?L(`div`,{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?L(`div`,{class:`${t}-empty__extra`},e.extra()):null)}}),Ve=y({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=w(Q);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):Z(i[this.labelField],i,!1),s=L(`div`,Object.assign({},a,{class:[`${e}-base-select-group-header`,a?.class]}),o);return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}});function He(e,t){return L(a,{name:`fade-in-scale-up-transition`},{default:()=>e?L(B,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>L(Ie)}):null})}var Ue=y({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:i,renderLabelRef:a,renderOptionRef:o,labelFieldRef:s,valueFieldRef:c,showCheckmarkRef:l,nodePropsRef:u,handleOptionClick:d,handleOptionMouseEnter:f}=w(Q),p=z(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function m(t){let{tmNode:n}=e;n.disabled||d(t,n)}function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e,{value:r}=p;n.disabled||r||f(t,n)}return{multiple:r,isGrouped:z(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:l,nodeProps:u,isPending:p,isSelected:z(()=>{let{value:n}=t,{value:a}=r;if(n===null)return!1;let o=e.tmNode.rawNode[c.value];if(a){let{value:e}=i;return e.has(o)}else return n===o}),labelField:s,renderLabel:a,renderOption:o,handleMouseMove:g,handleMouseEnter:h,handleClick:m}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:s,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,f=He(n,e),p=c?[c(t,n),a&&f]:[Z(t[this.labelField],t,n),a&&f],m=o?.(t),h=L(`div`,Object.assign({},m,{class:[`${e}-base-select-option`,t.class,m?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[m?.style||``,t.style||``],onClick:Fe([l,m?.onClick]),onMouseenter:Fe([u,m?.onMouseenter]),onMousemove:Fe([d,m?.onMousemove])}),L(`div`,{class:`${e}-base-select-option__content`},p));return t.render?t.render({node:h,option:t,selected:n}):s?s({node:h,option:t,selected:n}):h}}),We=i(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[i(`scrollbar`,`
 max-height: var(--n-height);
 `),i(`virtual-list`,`
 max-height: var(--n-height);
 `),i(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[c(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),i(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),i(`base-select-menu-option-wrapper`,`
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
 `),i(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),i(`base-select-option`,`
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
 `),p(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),p(`pending`,[f(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),p(`selected`,`
 color: var(--n-option-text-color-active);
 `,[f(`&::before`,`
 background-color: var(--n-option-color-active);
 `),p(`pending`,[f(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),p(`disabled`,`
 cursor: not-allowed;
 `,[H(`selected`,`
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
 `,[me({enterScale:`0.5`})])])]),Ge=y({name:`InternalSelectMenu`,props:Object.assign(Object.assign({},R.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(e){let{mergedClsPrefixRef:i,mergedRtlRef:a,mergedComponentPropsRef:s}=j(e),c=re(`InternalSelectMenu`,a,i),l=R(`InternalSelectMenu`,`-internal-select-menu`,We,le,e,F(e,`clsPrefix`)),u=o(null),f=o(null),p=o(null),m=S(()=>e.treeMate.getFlattenedNodes()),h=S(()=>ye(m.value)),_=o(null);function v(){let{treeMate:t}=e,n=null,{value:r}=e;r===null?n=t.getFirstAvailableNode():(n=e.multiple?t.getNode((r||[])[(r||[]).length-1]):t.getNode(r),(!n||n.disabled)&&(n=t.getFirstAvailableNode())),W(n||null)}function y(){let{value:t}=_;t&&!e.treeMate.getNode(t.key)&&(_.value=null)}let b;A(()=>e.show,t=>{t?b=A(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?v():y(),ee(G)):y()},{immediate:!0}):b?.()},{immediate:!0}),g(()=>{b?.()});let x=S(()=>d(l.value.self[n(`optionHeight`,e.size)])),C=S(()=>t(l.value.self[n(`padding`,e.size)])),w=S(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),T=S(()=>{let e=m.value;return e&&e.length===0}),E=S(()=>s?.value?.Select?.renderEmpty);function D(t){let{onToggle:n}=e;n&&n(t)}function O(t){let{onScroll:n}=e;n&&n(t)}function k(e){var t;(t=p.value)==null||t.sync(),O(e)}function M(){var e;(e=p.value)==null||e.sync()}function N(){let{value:e}=_;return e||null}function P(e,t){t.disabled||W(t,!1)}function I(e,t){t.disabled||D(t)}function L(t){var n;U(t,`action`)||(n=e.onKeyup)==null||n.call(e,t)}function ne(t){var n;U(t,`action`)||(n=e.onKeydown)==null||n.call(e,t)}function z(t){var n;(n=e.onMousedown)==null||n.call(e,t),!e.focusable&&t.preventDefault()}function B(){let{value:e}=_;e&&W(e.getNext({loop:!0}),!0)}function H(){let{value:e}=_;e&&W(e.getPrev({loop:!0}),!0)}function W(e,t=!1){_.value=e,t&&G()}function G(){var t,n;let r=_.value;if(!r)return;let i=h.value(r.key);i!==null&&(e.virtualScroll?(t=f.value)==null||t.scrollTo({index:i}):(n=p.value)==null||n.scrollTo({index:i,elSize:x.value}))}function K(t){var n;u.value?.contains(t.target)&&((n=e.onFocus)==null||n.call(e,t))}function q(t){var n;u.value?.contains(t.relatedTarget)||(n=e.onBlur)==null||n.call(e,t)}r(Q,{handleOptionMouseEnter:P,handleOptionClick:I,valueSetRef:w,pendingTmNodeRef:_,nodePropsRef:F(e,`nodeProps`),showCheckmarkRef:F(e,`showCheckmark`),multipleRef:F(e,`multiple`),valueRef:F(e,`value`),renderLabelRef:F(e,`renderLabel`),renderOptionRef:F(e,`renderOption`),labelFieldRef:F(e,`labelField`),valueFieldRef:F(e,`valueField`)}),r(Y,u),V(()=>{let{value:e}=p;e&&e.sync()});let J=S(()=>{let{size:r}=e,{common:{cubicBezierEaseInOut:i},self:{height:a,borderRadius:o,color:s,groupHeaderTextColor:c,actionDividerColor:u,optionTextColorPressed:d,optionTextColor:f,optionTextColorDisabled:p,optionTextColorActive:m,optionOpacityDisabled:h,optionCheckColor:g,actionTextColor:_,optionColorPending:v,optionColorActive:y,loadingColor:b,loadingSize:x,optionColorActivePending:S,[n(`optionFontSize`,r)]:C,[n(`optionHeight`,r)]:w,[n(`optionPadding`,r)]:T}}=l.value;return{"--n-height":a,"--n-action-divider-color":u,"--n-action-text-color":_,"--n-bezier":i,"--n-border-radius":o,"--n-color":s,"--n-option-font-size":C,"--n-group-header-text-color":c,"--n-option-check-color":g,"--n-option-color-pending":v,"--n-option-color-active":y,"--n-option-color-active-pending":S,"--n-option-height":w,"--n-option-opacity-disabled":h,"--n-option-text-color":f,"--n-option-text-color-active":m,"--n-option-text-color-disabled":p,"--n-option-text-color-pressed":d,"--n-option-padding":T,"--n-option-padding-left":t(T,`left`),"--n-option-padding-right":t(T,`right`),"--n-loading-color":b,"--n-loading-size":x}}),{inlineThemeDisabled:ie}=e,ae=ie?te(`internal-select-menu`,S(()=>e.size[0]),J,e):void 0,oe={selfRef:u,next:B,prev:H,getPendingTmNode:N};return Pe(u,e.onResize),Object.assign({mergedTheme:l,mergedClsPrefix:i,rtlEnabled:c,virtualListRef:f,scrollbarRef:p,itemSize:x,padding:C,flattenedNodes:m,empty:T,mergedRenderEmpty:E,virtualListContainer(){let{value:e}=f;return e?.listElRef},virtualListContent(){let{value:e}=f;return e?.itemsElRef},doScroll:O,handleFocusin:K,handleFocusout:q,handleKeyUp:L,handleKeyDown:ne,handleMouseDown:z,handleVirtualListResize:M,handleVirtualListScroll:k,cssVars:ie?void 0:J,themeClass:ae?.themeClass,onRender:ae?.onRender},oe)},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:i,onRender:a}=this;return a?.(),L(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},b(e.header,e=>e&&L(`div`,{class:`${n}-base-select-menu__header`,"data-header":!0,key:`header`},e)),this.loading?L(`div`,{class:`${n}-base-select-menu__loading`},L(N,{clsPrefix:n,strokeWidth:20})):this.empty?L(`div`,{class:`${n}-base-select-menu__empty`,"data-empty":!0},M(e.empty,()=>[this.mergedRenderEmpty?.call(this)||L(Be,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):L(I,Object.assign({ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?L(je,{ref:`virtualListRef`,class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?L(Ve,{key:e.key,clsPrefix:n,tmNode:e}):e.ignored?null:L(Ue,{clsPrefix:n,key:e.key,tmNode:e})}):L(`div`,{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(e=>e.isGroup?L(Ve,{key:e.key,clsPrefix:n,tmNode:e}):L(Ue,{clsPrefix:n,key:e.key,tmNode:e})))}),b(e.action,e=>e&&[L(`div`,{class:`${n}-base-select-menu__action`,"data-action":!0,key:`action`},e),L(Re,{onFocus:this.onTabOut,key:`focus-detector`})]))}}),Ke=f([i(`base-selection`,`
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
 `,[i(`base-loading`,`
 color: var(--n-loading-color);
 `),i(`base-selection-tags`,`min-height: var(--n-height);`),c(`border, state-border`,`
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
 `),i(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[c(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),i(`base-selection-overlay`,`
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
 `)]),i(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[c(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),i(`base-selection-tags`,`
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
 `),i(`base-selection-label`,`
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
 `,[i(`base-selection-input`,`
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
 `)]),H(`disabled`,[f(`&:hover`,[c(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),p(`focus`,[c(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),p(`active`,[c(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),i(`base-selection-label`,`background-color: var(--n-color-active);`),i(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),p(`disabled`,`cursor: not-allowed;`,[c(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),i(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[i(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),c(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),i(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),i(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),i(`base-selection-input-tag`,`
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
 `)]),[`warning`,`error`].map(e=>p(`${e}-status`,[c(`state-border`,`border: var(--n-border-${e});`),H(`disabled`,[f(`&:hover`,[c(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),p(`active`,[c(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),i(`base-selection-label`,`background-color: var(--n-color-active-${e});`),i(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),p(`focus`,[c(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),i(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),i(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[f(`&:last-child`,`padding-right: 0;`),i(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[c(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),qe=y({name:`InternalSelection`,props:Object.assign(Object.assign({},R.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(r){let{mergedClsPrefixRef:i,mergedRtlRef:a}=j(r),s=re(`InternalSelection`,a,i),c=o(null),l=o(null),u=o(null),d=o(null),f=o(null),p=o(null),m=o(null),h=o(null),g=o(null),_=o(null),v=o(!1),y=o(!1),b=o(!1),x=R(`InternalSelection`,`-internal-selection`,Ke,pe,r,F(r,`clsPrefix`)),C=S(()=>r.clearable&&!r.disabled&&(b.value||r.active)),w=S(()=>r.selectedOption?r.renderTag?r.renderTag({option:r.selectedOption,handleClose:()=>{}}):r.renderLabel?r.renderLabel(r.selectedOption,!0):Z(r.selectedOption[r.labelField],r.selectedOption,!0):r.placeholder),T=S(()=>{let e=r.selectedOption;if(e)return e[r.labelField]}),E=S(()=>r.multiple?!!(Array.isArray(r.selectedOptions)&&r.selectedOptions.length):r.selectedOption!==null);function D(){var e;let{value:t}=c;if(t){let{value:n}=l;n&&(n.style.width=`${t.offsetWidth}px`,r.maxTagCount!==`responsive`&&((e=g.value)==null||e.sync({showAllItemsBeforeCalculate:!1})))}}function O(){let{value:e}=_;e&&(e.style.display=`none`)}function k(){let{value:e}=_;e&&(e.style.display=`inline-block`)}A(F(r,`active`),e=>{e||O()}),A(F(r,`pattern`),()=>{r.multiple&&ee(D)});function M(e){let{onFocus:t}=r;t&&t(e)}function N(e){let{onBlur:t}=r;t&&t(e)}function P(e){let{onDeleteOption:t}=r;t&&t(e)}function I(e){let{onClear:t}=r;t&&t(e)}function L(e){let{onPatternInput:t}=r;t&&t(e)}function ne(e){(!e.relatedTarget||!u.value?.contains(e.relatedTarget))&&M(e)}function z(e){u.value?.contains(e.relatedTarget)||N(e)}function B(e){I(e)}function H(){b.value=!0}function U(){b.value=!1}function W(e){!r.active||!r.filterable||e.target!==l.value&&e.preventDefault()}function G(e){P(e)}let K=o(!1);function q(e){if(e.key===`Backspace`&&!K.value&&!r.pattern.length){let{selectedOptions:e}=r;e?.length&&G(e[e.length-1])}}let J=null;function ie(e){let{value:t}=c;t&&(t.textContent=e.target.value,D()),r.ignoreComposition&&K.value?J=e:L(e)}function ae(){K.value=!0}function oe(){K.value=!1,r.ignoreComposition&&L(J),J=null}function se(e){var t;y.value=!0,(t=r.onPatternFocus)==null||t.call(r,e)}function ce(e){var t;y.value=!1,(t=r.onPatternBlur)==null||t.call(r,e)}function le(){var e,t;if(r.filterable)y.value=!1,(e=p.value)==null||e.blur(),(t=l.value)==null||t.blur();else if(r.multiple){let{value:e}=d;e?.blur()}else{let{value:e}=f;e?.blur()}}function Y(){var e,t,n;r.filterable?(y.value=!1,(e=p.value)==null||e.focus()):r.multiple?(t=d.value)==null||t.focus():(n=f.value)==null||n.focus()}function X(){let{value:e}=l;e&&(k(),e.focus())}function Q(){let{value:e}=l;e&&e.blur()}function ue(e){let{value:t}=m;t&&t.setTextContent(`+${e}`)}function de(){let{value:e}=h;return e}function fe(){return l.value}let me=null;function he(){me!==null&&window.clearTimeout(me)}function ge(){r.active||(he(),me=window.setTimeout(()=>{E.value&&(v.value=!0)},100))}function _e(){he()}function ve(e){e||(he(),v.value=!1)}A(E,e=>{e||(v.value=!1)}),V(()=>{e(()=>{let e=p.value;e&&(r.disabled?e.removeAttribute(`tabindex`):e.tabIndex=y.value?-1:0)})}),Pe(u,r.onResize);let{inlineThemeDisabled:ye}=r,be=S(()=>{let{size:e}=r,{common:{cubicBezierEaseInOut:i},self:{fontWeight:a,borderRadius:o,color:s,placeholderColor:c,textColor:l,paddingSingle:u,paddingMultiple:d,caretColor:f,colorDisabled:p,textColorDisabled:m,placeholderColorDisabled:h,colorActive:g,boxShadowFocus:_,boxShadowActive:v,boxShadowHover:y,border:b,borderFocus:S,borderHover:C,borderActive:w,arrowColor:T,arrowColorDisabled:E,loadingColor:D,colorActiveWarning:O,boxShadowFocusWarning:k,boxShadowActiveWarning:A,boxShadowHoverWarning:ee,borderWarning:j,borderFocusWarning:M,borderHoverWarning:N,borderActiveWarning:P,colorActiveError:F,boxShadowFocusError:I,boxShadowActiveError:te,boxShadowHoverError:L,borderError:ne,borderFocusError:re,borderHoverError:R,borderActiveError:z,clearColor:B,clearColorHover:V,clearColorPressed:H,clearSize:U,arrowSize:W,[n(`height`,e)]:G,[n(`fontSize`,e)]:K}}=x.value,q=t(u),J=t(d);return{"--n-bezier":i,"--n-border":b,"--n-border-active":w,"--n-border-focus":S,"--n-border-hover":C,"--n-border-radius":o,"--n-box-shadow-active":v,"--n-box-shadow-focus":_,"--n-box-shadow-hover":y,"--n-caret-color":f,"--n-color":s,"--n-color-active":g,"--n-color-disabled":p,"--n-font-size":K,"--n-height":G,"--n-padding-single-top":q.top,"--n-padding-multiple-top":J.top,"--n-padding-single-right":q.right,"--n-padding-multiple-right":J.right,"--n-padding-single-left":q.left,"--n-padding-multiple-left":J.left,"--n-padding-single-bottom":q.bottom,"--n-padding-multiple-bottom":J.bottom,"--n-placeholder-color":c,"--n-placeholder-color-disabled":h,"--n-text-color":l,"--n-text-color-disabled":m,"--n-arrow-color":T,"--n-arrow-color-disabled":E,"--n-loading-color":D,"--n-color-active-warning":O,"--n-box-shadow-focus-warning":k,"--n-box-shadow-active-warning":A,"--n-box-shadow-hover-warning":ee,"--n-border-warning":j,"--n-border-focus-warning":M,"--n-border-hover-warning":N,"--n-border-active-warning":P,"--n-color-active-error":F,"--n-box-shadow-focus-error":I,"--n-box-shadow-active-error":te,"--n-box-shadow-hover-error":L,"--n-border-error":ne,"--n-border-focus-error":re,"--n-border-hover-error":R,"--n-border-active-error":z,"--n-clear-size":U,"--n-clear-color":B,"--n-clear-color-hover":V,"--n-clear-color-pressed":H,"--n-arrow-size":W,"--n-font-weight":a}}),xe=ye?te(`internal-selection`,S(()=>r.size[0]),be,r):void 0;return{mergedTheme:x,mergedClearable:C,mergedClsPrefix:i,rtlEnabled:s,patternInputFocused:y,filterablePlaceholder:w,label:T,selected:E,showTagsPanel:v,isComposing:K,counterRef:m,counterWrapperRef:h,patternInputMirrorRef:c,patternInputRef:l,selfRef:u,multipleElRef:d,singleElRef:f,patternInputWrapperRef:p,overflowRef:g,inputTagElRef:_,handleMouseDown:W,handleFocusin:ne,handleClear:B,handleMouseEnter:H,handleMouseLeave:U,handleDeleteOption:G,handlePatternKeyDown:q,handlePatternInputInput:ie,handlePatternInputBlur:ce,handlePatternInputFocus:se,handleMouseEnterCounter:ge,handleMouseLeaveCounter:_e,handleFocusout:z,handleCompositionEnd:oe,handleCompositionStart:ae,onPopoverUpdateShow:ve,focus:Y,focusInput:X,blur:le,blurInput:Q,updateCounter:ue,getCounter:de,getTail:fe,renderLabel:r.renderLabel,cssVars:ye?void 0:be,themeClass:xe?.themeClass,onRender:xe?.onRender}},render(){let{status:e,multiple:t,size:n,disabled:r,filterable:i,maxTagCount:a,bordered:o,clsPrefix:s,ellipsisTagPopoverProps:c,onRender:l,renderTag:u,renderLabel:d}=this;l?.();let f=a===`responsive`,p=typeof a==`number`,m=f||p,g=L(O,null,{default:()=>L(ae,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var e;return(e=this.$slots).arrow?.call(e)}})}),_;if(t){let{labelField:e}=this,t=t=>L(`div`,{class:`${s}-base-selection-tag-wrapper`,key:t.value},u?u({option:t,handleClose:()=>{this.handleDeleteOption(t)}}):L(se,{size:n,closable:!t.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>d?d(t,!0):Z(t[e],t,!0)})),o=()=>(p?this.selectedOptions.slice(0,a):this.selectedOptions).map(t),l=i?L(`div`,{class:`${s}-base-selection-input-tag`,ref:`inputTagElRef`,key:`__input-tag__`},L(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),L(`span`,{ref:`patternInputMirrorRef`,class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,v=f?()=>L(`div`,{class:`${s}-base-selection-tag-wrapper`,ref:`counterWrapperRef`},L(se,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0,y;if(p){let e=this.selectedOptions.length-a;e>0&&(y=L(`div`,{class:`${s}-base-selection-tag-wrapper`,key:`__counter__`},L(se,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${e}`})))}let b=f?i?L(Ne,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:v,tail:()=>l}):L(Ne,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:v}):p&&y?o().concat(y):o(),x=m?()=>L(`div`,{class:`${s}-base-selection-popover`},f?o():this.selectedOptions.map(t)):void 0,S=m?Object.assign({show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,C=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?L(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},L(`div`,{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):null,w=i?L(`div`,{ref:`patternInputWrapperRef`,class:`${s}-base-selection-tags`},b,f?null:l,g):L(`div`,{ref:`multipleElRef`,class:`${s}-base-selection-tags`,tabindex:r?void 0:0},b,g);_=L(h,null,m?L(be,Object.assign({},S,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>w,default:x}):w,C)}else if(i){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=!this.active&&this.selected;_=L(`div`,{ref:`patternInputWrapperRef`,class:`${s}-base-selection-label`,title:this.patternInputFocused?void 0:ue(this.label)},L(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,class:`${s}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),n?L(`div`,{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:`input`},L(`div`,{class:`${s}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):Z(this.label,this.selectedOption,!0))):null,t?L(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:`placeholder`},L(`div`,{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else _=L(`div`,{ref:`singleElRef`,class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label===void 0?L(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:`placeholder`},L(`div`,{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):L(`div`,{class:`${s}-base-selection-input`,title:ue(this.label),key:`input`},L(`div`,{class:`${s}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):Z(this.label,this.selectedOption,!0))),g);return L(`div`,{ref:`selfRef`,class:[`${s}-base-selection`,this.rtlEnabled&&`${s}-base-selection--rtl`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},_,o?L(`div`,{class:`${s}-base-selection__border`}):null,o?L(`div`,{class:`${s}-base-selection__state-border`}):null)}});function Je(e){return e.type===`group`}function Ye(e){return e.type===`ignored`}function Xe(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Ze(e,t){return{getIsGroup:Je,getIgnored:Ye,getKey(t){return Je(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function Qe(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(Je(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(Ye(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function $e(e,t,n){let r=new Map;return e.forEach(e=>{Je(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var et=f([i(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),i(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[me({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),tt=y({name:`Select`,props:Object.assign(Object.assign({},R.props),{to:_e.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a}=j(e),s=R(`Select`,`-select`,et,ve,e,t),c=o(e.defaultValue),l=q(F(e,`value`),c),d=o(!1),f=o(``),p=J(e,[`items`,`options`]),m=o([]),h=o([]),g=S(()=>h.value.concat(m.value).concat(p.value)),_=S(()=>{let{filter:t}=e;if(t)return t;let{labelField:n,valueField:r}=e;return(e,t)=>{if(!t)return!1;let i=t[n];if(typeof i==`string`)return Xe(e,i);let a=t[r];return typeof a==`string`?Xe(e,a):typeof a==`number`&&Xe(e,String(a))}}),y=S(()=>{if(e.remote)return p.value;{let{value:t}=g,{value:n}=f;return!n.length||!e.filterable?t:Qe(t,_.value,n,e.childrenField)}}),b=S(()=>{let{valueField:t,childrenField:n}=e,r=Ze(t,n);return de(y.value,r)}),w=S(()=>$e(g.value,e.valueField,e.childrenField)),T=o(!1),E=q(F(e,`show`),T),D=o(null),O=o(null),k=o(null),{localeRef:ee}=ie(`Select`),M=S(()=>e.placeholder??ee.value.placeholder),N=[],P=o(new Map),I=S(()=>{let{fallbackOption:t}=e;if(t===void 0){let{labelField:t,valueField:n}=e;return e=>({[t]:String(e),[n]:e})}return t===!1?!1:e=>Object.assign(t(e),{value:e})});function L(t){let n=e.remote,{value:r}=P,{value:i}=w,{value:a}=I,o=[];return t.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(n&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let ne=S(()=>{if(e.multiple){let{value:e}=l;return Array.isArray(e)?L(e):[]}return null}),re=S(()=>{let{value:t}=l;return!e.multiple&&!Array.isArray(t)?t===null?null:L([t])[0]||null:null}),z=C(e,{mergedSize:t=>{let{size:n}=e;if(n)return n;let{mergedSize:r}=t||{};return r?.value?r.value:a?.value?.Select?.size||`medium`}}),{mergedSizeRef:B,mergedDisabledRef:V,mergedStatusRef:H}=z;function W(t,n){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=e,{nTriggerFormChange:o,nTriggerFormInput:s}=z;r&&x(r,t,n),a&&x(a,t,n),i&&x(i,t,n),c.value=t,o(),s()}function G(t){let{onBlur:n}=e,{nTriggerFormBlur:r}=z;n&&x(n,t),r()}function K(){let{onClear:t}=e;t&&x(t)}function ae(t){let{onFocus:n,showOnFocus:r}=e,{nTriggerFormFocus:i}=z;n&&x(n,t),i(),r&&Y()}function oe(t){let{onSearch:n}=e;n&&x(n,t)}function se(t){let{onScroll:n}=e;n&&x(n,t)}function ce(){var t;let{remote:n,multiple:r}=e;if(n){let{value:n}=P;if(r){let{valueField:r}=e;(t=ne.value)==null||t.forEach(e=>{n.set(e[r],e)})}else{let t=re.value;t&&n.set(t[e.valueField],t)}}}function le(t){let{onUpdateShow:n,"onUpdate:show":r}=e;n&&x(n,t),r&&x(r,t),T.value=t}function Y(){V.value||(le(!0),T.value=!0,e.filterable&&Me())}function X(){le(!1)}function Z(){f.value=``,h.value=N}let Q=o(!1);function ue(){e.filterable&&(Q.value=!0)}function pe(){e.filterable&&(Q.value=!1,E.value||Z())}function me(){V.value||(E.value?e.filterable?Me():X():Y())}function he(e){(k.value?.selfRef)?.contains(e.relatedTarget)||(d.value=!1,G(e),X())}function ge(e){ae(e),d.value=!0}function ye(){d.value=!0}function be(e){D.value?.$el.contains(e.relatedTarget)||(d.value=!1,G(e),X())}function xe(){var e;(e=D.value)==null||e.focus(),X()}function Se(e){E.value&&(D.value?.$el.contains(u(e))||X())}function Ce(t){if(!Array.isArray(t))return[];if(I.value)return Array.from(t);{let{remote:n}=e,{value:r}=w;if(n){let{value:e}=P;return t.filter(t=>r.has(t)||e.has(t))}else return t.filter(e=>r.has(e))}}function we(e){Te(e.rawNode)}function Te(t){if(V.value)return;let{tag:n,remote:r,clearFilterAfterSelect:i,valueField:a}=e;if(n&&!r){let{value:e}=h,t=e[0]||null;if(t){let e=m.value;e.length?e.push(t):m.value=[t],h.value=N}}if(r&&P.value.set(t[a],t),e.multiple){let e=Ce(l.value),o=e.findIndex(e=>e===t[a]);if(~o){if(e.splice(o,1),n&&!r){let e=Ee(t[a]);~e&&(m.value.splice(e,1),i&&(f.value=``))}}else e.push(t[a]),i&&(f.value=``);W(e,L(e))}else{if(n&&!r){let e=Ee(t[a]);~e?m.value=[m.value[e]]:m.value=N}$(),X(),W(t[a],t)}}function Ee(t){return m.value.findIndex(n=>n[e.valueField]===t)}function De(t){E.value||Y();let{value:n}=t.target;f.value=n;let{tag:r,remote:i}=e;if(oe(n),r&&!i){if(!n){h.value=N;return}let{onCreate:t}=e,r=t?t(n):{[e.labelField]:n,[e.valueField]:n},{valueField:i,labelField:a}=e;p.value.some(e=>e[i]===r[i]||e[a]===r[a])||m.value.some(e=>e[i]===r[i]||e[a]===r[a])?h.value=N:h.value=[r]}}function Oe(t){t.stopPropagation();let{multiple:n,tag:r,remote:i,clearCreatedOptionsOnClear:a}=e;!n&&e.filterable&&X(),r&&!i&&a&&(m.value=N),K(),n?W([],[]):W(null,null)}function ke(e){!U(e,`action`)&&!U(e,`empty`)&&!U(e,`header`)&&e.preventDefault()}function Ae(e){se(e)}function je(t){var n,r,i;if(!e.keyboard){t.preventDefault();return}switch(t.key){case` `:if(e.filterable)break;t.preventDefault();case`Enter`:if(!D.value?.isComposing){if(E.value){let t=k.value?.getPendingTmNode();t?we(t):e.filterable||(X(),$())}else if(Y(),e.tag&&Q.value){let t=h.value[0];if(t){let n=t[e.valueField],{value:r}=l;e.multiple&&Array.isArray(r)&&r.includes(n)||Te(t)}}}t.preventDefault();break;case`ArrowUp`:if(t.preventDefault(),e.loading)return;E.value&&((n=k.value)==null||n.prev());break;case`ArrowDown`:if(t.preventDefault(),e.loading)return;E.value?(r=k.value)==null||r.next():Y();break;case`Escape`:E.value&&(fe(t),X()),(i=D.value)==null||i.focus();break}}function $(){var e;(e=D.value)==null||e.focus()}function Me(){var e;(e=D.value)==null||e.focusInput()}function Ne(){var e;E.value&&((e=O.value)==null||e.syncPosition())}ce(),A(F(e,`options`),ce);let Pe={focus:()=>{var e;(e=D.value)==null||e.focus()},focusInput:()=>{var e;(e=D.value)==null||e.focusInput()},blur:()=>{var e;(e=D.value)==null||e.blur()},blurInput:()=>{var e;(e=D.value)==null||e.blurInput()}},Fe=S(()=>{let{self:{menuBoxShadow:e}}=s.value;return{"--n-menu-box-shadow":e}}),Ie=i?te(`select`,void 0,Fe,e):void 0;return Object.assign(Object.assign({},Pe),{mergedStatus:H,mergedClsPrefix:t,mergedBordered:n,namespace:r,treeMate:b,isMounted:v(),triggerRef:D,menuRef:k,pattern:f,uncontrolledShow:T,mergedShow:E,adjustedTo:_e(e),uncontrolledValue:c,mergedValue:l,followerRef:O,localizedPlaceholder:M,selectedOption:re,selectedOptions:ne,mergedSize:B,mergedDisabled:V,focused:d,activeWithoutMenuOpen:Q,inlineThemeDisabled:i,onTriggerInputFocus:ue,onTriggerInputBlur:pe,handleTriggerOrMenuResize:Ne,handleMenuFocus:ye,handleMenuBlur:be,handleMenuTabOut:xe,handleTriggerClick:me,handleToggle:we,handleDeleteOption:Te,handlePatternInput:De,handleClear:Oe,handleTriggerBlur:he,handleTriggerFocus:ge,handleKeydown:je,handleMenuAfterLeave:Z,handleMenuClickOutside:Se,handleMenuScroll:Ae,handleMenuKeydown:je,handleMenuMousedown:ke,mergedTheme:s,cssVars:i?void 0:Fe,themeClass:Ie?.themeClass,onRender:Ie?.onRender})},render(){return L(`div`,{class:`${this.mergedClsPrefix}-select`},L(he,null,{default:()=>[L(X,null,{default:()=>L(qe,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e;return[(e=this.$slots).arrow?.call(e)]}})}),L(oe,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===_e.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{default:()=>L(a,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e;return this.mergedShow||this.displayDirective===`show`?((e=this.onRender)==null||e.call(this),l(L(Ge,Object.assign({},this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var e;return[(e=this.$slots).empty?.call(e)]},header:()=>{var e;return[(e=this.$slots).header?.call(e)]},action:()=>{var e;return[(e=this.$slots).action?.call(e)]}}),this.displayDirective===`show`?[[s,this.mergedShow],[ge,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ge,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{tt as t};