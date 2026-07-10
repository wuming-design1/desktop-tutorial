import{$n as e,Bt as t,Ct as n,Dn as r,Dt as i,En as a,Ht as o,I as s,Kn as c,Kt as l,Ln as u,Mn as d,Mt as f,N as p,Nn as m,Nt as h,On as g,Ot as _,Qt as v,Sn as y,T as b,Un as x,Ut as S,Wn as C,Wt as w,Xt as T,Yt as E,Zt as D,an as O,bt as k,cn as A,ft as j,gt as ee,j as M,jn as N,kn as P,kt as F,mn as I,mt as te,pt as ne,qt as L,rr as R,un as z,vt as B,wn as V,y as H,zn as re}from"./_plugin-vue_export-helper-MsG4zd-3.js";import{n as U,r as W}from"./_common-DBAoCL-8.js";import{n as G,t as K}from"./cssr-DGHe03dc.js";import{t as q}from"./use-merged-state-cgcCleiG.js";import{t as J}from"./use-compitable-Defs-nss.js";import{r as ie,t as ae}from"./Suffix-pbKACVrC.js";import{A as oe,B as se,D as ce,E as le,G as ue,H as de,J as Y,K as fe,O as X,R as Z,T as Q,U as pe,W as me,_ as he,j as ge,k as _e,q as ve,w as ye,z as be}from"./index-DfuKCr8-.js";function xe(e){return e&-e}var Se=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=xe(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=xe(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}else if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},Ce;function we(){return typeof document>`u`?!1:(Ce===void 0&&(Ce=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches),Ce)}var Te;function Ee(){return typeof document>`u`?1:(Te===void 0&&(Te=`chrome`in window?window.devicePixelRatio:1),Te)}var De=`VVirtualListXScroll`;function Oe({columnsRef:t,renderColRef:n,renderItemWithColsRef:r}){let i=e(0),a=e(0),o=I(()=>{let e=t.value;if(e.length===0)return null;let n=new Se(e.length,0);return e.forEach((e,t)=>{n.add(t,e.width)}),n});return u(De,{startIndexRef:h(()=>{let e=o.value;return e===null?0:Math.max(e.getBound(a.value)-1,0)}),endIndexRef:h(()=>{let e=o.value;return e===null?0:Math.min(e.getBound(a.value+i.value)+1,t.value.length-1)}),columnsRef:t,renderColRef:n,renderItemWithColsRef:r,getLeft:e=>{let t=o.value;return t===null?0:t.sum(e)}}),{listWidthRef:i,scrollLeftRef:a}}var ke=y({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:o}=a(De);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:o,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),Ae=K(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[K(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[K(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),je=y({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(n){let r=F();Ae.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:G,ssr:r}),m(()=>{let{defaultScrollIndex:e,defaultScrollKey:t}=n;e==null?t!=null&&x({key:t}):x({index:e})});let i=!1,a=!1;P(()=>{if(i=!1,!a){a=!0;return}x({top:v.value,left:c.value})}),d(()=>{i=!0,a||=!0});let o=h(()=>{if(n.renderCol==null&&n.renderItemWithCols==null||n.columns.length===0)return;let e=0;return n.columns.forEach(t=>{e+=t.width}),e}),s=I(()=>{let e=new Map,{keyField:t}=n;return n.items.forEach((n,r)=>{e.set(n[t],r)}),e}),{scrollLeftRef:c,listWidthRef:l}=Oe({columnsRef:R(n,`columns`),renderColRef:R(n,`renderCol`),renderItemWithColsRef:R(n,`renderItemWithCols`)}),u=e(null),f=e(void 0),p=new Map,g=I(()=>{let{items:e,itemSize:t,keyField:r}=n,i=new Se(e.length,t);return e.forEach((e,t)=>{let n=e[r],a=p.get(n);a!==void 0&&i.add(t,a)}),i}),_=e(0),v=e(0),y=h(()=>Math.max(g.value.getBound(v.value-t(n.paddingTop))-1,0)),b=I(()=>{let{value:e}=f;if(e===void 0)return[];let{items:t,itemSize:r}=n,i=y.value,a=Math.min(i+Math.ceil(e/r+1),t.length-1),o=[];for(let e=i;e<=a;++e)o.push(t[e]);return o}),x=(e,t)=>{if(typeof e==`number`){E(e,t,`auto`);return}let{left:n,top:r,index:i,key:a,position:o,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)E(n,r,c);else if(i!==void 0)T(i,c,l);else if(a!==void 0){let e=s.value.get(a);e!==void 0&&T(e,c,l)}else o===`bottom`?E(0,2**53-1,c):o===`top`&&E(0,0,c)},C,w=null;function T(e,r,i){let{value:a}=g,o=a.sum(e)+t(n.paddingTop);if(!i)u.value.scrollTo({left:0,top:o,behavior:r});else{C=e,w!==null&&window.clearTimeout(w),w=window.setTimeout(()=>{C=void 0,w=null},16);let{scrollTop:t,offsetHeight:n}=u.value;if(o>t){let i=a.get(e);o+i<=t+n||u.value.scrollTo({left:0,top:o+i-n,behavior:r})}else u.value.scrollTo({left:0,top:o,behavior:r})}}function E(e,t,n){u.value.scrollTo({left:e,top:t,behavior:n})}function D(e,t){if(i||n.ignoreItemResize||N(t.target))return;let{value:r}=g,a=s.value.get(e),o=r.get(a),c=t.borderBoxSize?.[0]?.blockSize??t.contentRect.height;if(c===o)return;c-n.itemSize===0?p.delete(e):p.set(e,c-n.itemSize);let l=c-o;if(l===0)return;r.add(a,l);let d=u.value;if(d!=null){if(C===void 0){let e=r.sum(a);d.scrollTop>e&&d.scrollBy(0,l)}else(a<C||a===C&&c+r.sum(a)>d.scrollTop+d.offsetHeight)&&d.scrollBy(0,l);M()}_.value++}let O=!we(),k=!1;function A(e){var t;(t=n.onScroll)==null||t.call(n,e),(!O||!k)&&M()}function j(e){var t;if((t=n.onWheel)==null||t.call(n,e),O){let t=u.value;if(t!=null){if(e.deltaX===0&&(t.scrollTop===0&&e.deltaY<=0||t.scrollTop+t.offsetHeight>=t.scrollHeight&&e.deltaY>=0))return;e.preventDefault(),t.scrollTop+=e.deltaY/Ee(),t.scrollLeft+=e.deltaX/Ee(),M(),k=!0,W(()=>{k=!1})}}}function ee(e){if(i||N(e.target))return;if(n.renderCol==null&&n.renderItemWithCols==null){if(e.contentRect.height===f.value)return}else if(e.contentRect.height===f.value&&e.contentRect.width===l.value)return;f.value=e.contentRect.height,l.value=e.contentRect.width;let{onResize:t}=n;t!==void 0&&t(e)}function M(){let{value:e}=u;e!=null&&(v.value=e.scrollTop,c.value=e.scrollLeft)}function N(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:f,listStyle:{overflow:`auto`},keyToIndex:s,itemsStyle:I(()=>{let{itemResizable:e}=n,t=S(g.value.sum());return _.value,[n.itemsStyle,{boxSizing:`content-box`,width:S(o.value),height:e?``:t,minHeight:e?t:``,paddingTop:S(n.paddingTop),paddingBottom:S(n.paddingBottom)}]}),visibleItemsStyle:I(()=>(_.value,{transform:`translateY(${S(g.value.sum(y.value))})`})),viewportItems:b,listElRef:u,itemsElRef:e(null),scrollTo:x,handleListResize:ee,handleListScroll:A,handleListWheel:j,handleItemResize:D}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:a}=this;return V(i,{onResize:this.handleListResize},{default:()=>{var o;return V(`div`,r(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(o=this.$slots).empty?.call(o):V(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[V(a,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:a}=this;return this.viewportItems.map(o=>{let s=o[t],c=n.get(s),l=r==null?void 0:V(ke,{index:c,item:o}),u=a==null?void 0:V(ke,{index:c,item:o}),d=this.$slots.default({item:o,renderedCols:l,renderedItemWithCols:u,index:c})[0];return e?V(i,{key:s,onResize:e=>this.handleItemResize(s,e)},{default:()=>d}):(d.key=s,d)})}})])])}})}}),$=`v-hidden`,Me=K(`[v-hidden]`,{display:`none!important`}),Ne=y({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(t,{slots:n}){let r=e(null),i=e(null);function a(e){let{value:a}=r,{getCounter:o,getTail:s}=t,c;if(c=o===void 0?i.value:o(),!a||!c)return;c.hasAttribute($)&&c.removeAttribute($);let{children:l}=a;if(e.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute($)&&e.removeAttribute($);let u=a.offsetWidth,d=[],f=n.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!n.tail;for(let e=0;e<h-1;++e){if(e<0)continue;let n=l[e];if(m){n.hasAttribute($)||n.setAttribute($,``);continue}else n.hasAttribute($)&&n.removeAttribute($);let r=n.offsetWidth;if(p+=r,d[e]=r,p>u){let{updateCounter:n}=t;for(let r=e;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,e=r-1,f&&(e===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=t;n&&n(i);break}}}}let{onUpdateOverflow:g}=t;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute($,``))}let o=F();return Me.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:G,ssr:o}),m(()=>a({showAllItemsBeforeCalculate:!1})),{selfRef:r,counterRef:i,sync:a}},render(){let{$slots:e}=this;return g(()=>this.sync({showAllItemsBeforeCalculate:!1})),V(`div`,{class:`v-overflow`,ref:`selfRef`},[re(e,`default`),e.counter?e.counter():V(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function Pe(e,t){t&&(m(()=>{let{value:n}=e;n&&_.registerHandler(n,t)}),x(e,(e,t)=>{t&&_.unregisterHandler(t)},{deep:!1}),N(()=>{let{value:t}=e;t&&_.unregisterHandler(t)}))}function Fe(e){let t=e.filter(e=>e!==void 0);if(t.length!==0)return t.length===1?t[0]:t=>{e.forEach(e=>{e&&e(t)})}}var Ie=y({name:`Checkmark`,render(){return V(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},V(`g`,{fill:`none`},V(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})))}}),Le=y({name:`Empty`,render(){return V(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},V(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),V(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`}))}}),Re=y({props:{onFocus:Function,onBlur:Function},setup(e){return()=>V(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),ze=L(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[E(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[l(`+`,[E(`description`,`
 margin-top: 8px;
 `)])]),E(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),E(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Be=y({name:`Empty`,props:Object.assign(Object.assign({},p.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:r}=te(e),i=p(`Empty`,`-empty`,ze,_e,e,t),{localeRef:a}=ie(`Empty`),o=I(()=>e.description??r?.value?.Empty?.description),s=I(()=>r?.value?.Empty?.renderIcon||(()=>V(Le,null))),c=I(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{[v(`iconSize`,t)]:r,[v(`fontSize`,t)]:a,textColor:o,iconColor:s,extraTextColor:c}}=i.value;return{"--n-icon-size":r,"--n-font-size":a,"--n-bezier":n,"--n-text-color":o,"--n-icon-color":s,"--n-extra-text-color":c}}),l=n?ne(`empty`,I(()=>{let t=``,{size:n}=e;return t+=n[0],t}),c,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:s,localizedDescription:I(()=>o.value||a.value.description),cssVars:n?void 0:c,themeClass:l?.themeClass,onRender:l?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),V(`div`,{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?V(`div`,{class:`${t}-empty__icon`},e.icon?e.icon():V(M,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?V(`div`,{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?V(`div`,{class:`${t}-empty__extra`},e.extra()):null)}}),Ve=y({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=a(Y);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):Z(i[this.labelField],i,!1),s=V(`div`,Object.assign({},a,{class:[`${e}-base-select-group-header`,a?.class]}),o);return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}});function He(e,t){return V(O,{name:`fade-in-scale-up-transition`},{default:()=>e?V(M,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>V(Ie)}):null})}var Ue=y({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:i,renderLabelRef:o,renderOptionRef:s,labelFieldRef:c,valueFieldRef:l,showCheckmarkRef:u,nodePropsRef:d,handleOptionClick:f,handleOptionMouseEnter:p}=a(Y),m=h(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function g(t){let{tmNode:n}=e;n.disabled||f(t,n)}function _(t){let{tmNode:n}=e;n.disabled||p(t,n)}function v(t){let{tmNode:n}=e,{value:r}=m;n.disabled||r||p(t,n)}return{multiple:r,isGrouped:h(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:u,nodeProps:d,isPending:m,isSelected:h(()=>{let{value:n}=t,{value:a}=r;if(n===null)return!1;let o=e.tmNode.rawNode[l.value];if(a){let{value:e}=i;return e.has(o)}else return n===o}),labelField:c,renderLabel:o,renderOption:s,handleMouseMove:v,handleMouseEnter:_,handleClick:g}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:s,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,f=He(n,e),p=c?[c(t,n),a&&f]:[Z(t[this.labelField],t,n),a&&f],m=o?.(t),h=V(`div`,Object.assign({},m,{class:[`${e}-base-select-option`,t.class,m?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[m?.style||``,t.style||``],onClick:Fe([l,m?.onClick]),onMouseenter:Fe([u,m?.onMouseenter]),onMousemove:Fe([d,m?.onMousemove])}),V(`div`,{class:`${e}-base-select-option__content`},p));return t.render?t.render({node:h,option:t,selected:n}):s?s({node:h,option:t,selected:n}):h}}),We=L(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[L(`scrollbar`,`
 max-height: var(--n-height);
 `),L(`virtual-list`,`
 max-height: var(--n-height);
 `),L(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[E(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),L(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),L(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),E(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),E(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),E(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),E(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),L(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),L(`base-select-option`,`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[T(`show-checkmark`,`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),l(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),l(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),T(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),T(`pending`,[l(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),T(`selected`,`
 color: var(--n-option-text-color-active);
 `,[l(`&::before`,`
 background-color: var(--n-option-color-active);
 `),T(`pending`,[l(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),T(`disabled`,`
 cursor: not-allowed;
 `,[D(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),T(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),E(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[ce({enterScale:`0.5`})])])]),Ge=y({name:`InternalSelectMenu`,props:Object.assign(Object.assign({},p.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(n){let{mergedClsPrefixRef:r,mergedRtlRef:i,mergedComponentPropsRef:a}=te(n),c=s(`InternalSelectMenu`,i,r),l=p(`InternalSelectMenu`,`-internal-select-menu`,We,X,n,R(n,`clsPrefix`)),d=e(null),f=e(null),h=e(null),_=I(()=>n.treeMate.getFlattenedNodes()),y=I(()=>ge(_.value)),b=e(null);function S(){let{treeMate:e}=n,t=null,{value:r}=n;r===null?t=e.getFirstAvailableNode():(t=n.multiple?e.getNode((r||[])[(r||[]).length-1]):e.getNode(r),(!t||t.disabled)&&(t=e.getFirstAvailableNode())),W(t||null)}function C(){let{value:e}=b;e&&!n.treeMate.getNode(e.key)&&(b.value=null)}let w;x(()=>n.show,e=>{e?w=x(()=>n.treeMate,()=>{n.resetMenuOnOptionsChange?(n.autoPending?S():C(),g(G)):C()},{immediate:!0}):w?.()},{immediate:!0}),N(()=>{w?.()});let T=I(()=>t(l.value.self[v(`optionHeight`,n.size)])),E=I(()=>o(l.value.self[v(`padding`,n.size)])),D=I(()=>n.multiple&&Array.isArray(n.value)?new Set(n.value):new Set),O=I(()=>{let e=_.value;return e&&e.length===0}),k=I(()=>a?.value?.Select?.renderEmpty);function A(e){let{onToggle:t}=n;t&&t(e)}function j(e){let{onScroll:t}=n;t&&t(e)}function ee(e){var t;(t=h.value)==null||t.sync(),j(e)}function M(){var e;(e=h.value)==null||e.sync()}function P(){let{value:e}=b;return e||null}function F(e,t){t.disabled||W(t,!1)}function L(e,t){t.disabled||A(t)}function z(e){var t;U(e,`action`)||(t=n.onKeyup)==null||t.call(n,e)}function B(e){var t;U(e,`action`)||(t=n.onKeydown)==null||t.call(n,e)}function V(e){var t;(t=n.onMousedown)==null||t.call(n,e),!n.focusable&&e.preventDefault()}function H(){let{value:e}=b;e&&W(e.getNext({loop:!0}),!0)}function re(){let{value:e}=b;e&&W(e.getPrev({loop:!0}),!0)}function W(e,t=!1){b.value=e,t&&G()}function G(){var e,t;let r=b.value;if(!r)return;let i=y.value(r.key);i!==null&&(n.virtualScroll?(e=f.value)==null||e.scrollTo({index:i}):(t=h.value)==null||t.scrollTo({index:i,elSize:T.value}))}function K(e){var t;d.value?.contains(e.target)&&((t=n.onFocus)==null||t.call(n,e))}function q(e){var t;d.value?.contains(e.relatedTarget)||(t=n.onBlur)==null||t.call(n,e)}u(Y,{handleOptionMouseEnter:F,handleOptionClick:L,valueSetRef:D,pendingTmNodeRef:b,nodePropsRef:R(n,`nodeProps`),showCheckmarkRef:R(n,`showCheckmark`),multipleRef:R(n,`multiple`),valueRef:R(n,`value`),renderLabelRef:R(n,`renderLabel`),renderOptionRef:R(n,`renderOption`),labelFieldRef:R(n,`labelField`),valueFieldRef:R(n,`valueField`)}),u(ve,d),m(()=>{let{value:e}=h;e&&e.sync()});let J=I(()=>{let{size:e}=n,{common:{cubicBezierEaseInOut:t},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:s,actionDividerColor:c,optionTextColorPressed:u,optionTextColor:d,optionTextColorDisabled:f,optionTextColorActive:p,optionOpacityDisabled:m,optionCheckColor:h,actionTextColor:g,optionColorPending:_,optionColorActive:y,loadingColor:b,loadingSize:x,optionColorActivePending:S,[v(`optionFontSize`,e)]:C,[v(`optionHeight`,e)]:w,[v(`optionPadding`,e)]:T}}=l.value;return{"--n-height":r,"--n-action-divider-color":c,"--n-action-text-color":g,"--n-bezier":t,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":C,"--n-group-header-text-color":s,"--n-option-check-color":h,"--n-option-color-pending":_,"--n-option-color-active":y,"--n-option-color-active-pending":S,"--n-option-height":w,"--n-option-opacity-disabled":m,"--n-option-text-color":d,"--n-option-text-color-active":p,"--n-option-text-color-disabled":f,"--n-option-text-color-pressed":u,"--n-option-padding":T,"--n-option-padding-left":o(T,`left`),"--n-option-padding-right":o(T,`right`),"--n-loading-color":b,"--n-loading-size":x}}),{inlineThemeDisabled:ie}=n,ae=ie?ne(`internal-select-menu`,I(()=>n.size[0]),J,n):void 0,oe={selfRef:d,next:H,prev:re,getPendingTmNode:P};return Pe(d,n.onResize),Object.assign({mergedTheme:l,mergedClsPrefix:r,rtlEnabled:c,virtualListRef:f,scrollbarRef:h,itemSize:T,padding:E,flattenedNodes:_,empty:O,mergedRenderEmpty:k,virtualListContainer(){let{value:e}=f;return e?.listElRef},virtualListContent(){let{value:e}=f;return e?.itemsElRef},doScroll:j,handleFocusin:K,handleFocusout:q,handleKeyUp:z,handleKeyDown:B,handleMouseDown:V,handleVirtualListResize:M,handleVirtualListScroll:ee,cssVars:ie?void 0:J,themeClass:ae?.themeClass,onRender:ae?.onRender},oe)},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:i,onRender:a}=this;return a?.(),V(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},k(e.header,e=>e&&V(`div`,{class:`${n}-base-select-menu__header`,"data-header":!0,key:`header`},e)),this.loading?V(`div`,{class:`${n}-base-select-menu__loading`},V(b,{clsPrefix:n,strokeWidth:20})):this.empty?V(`div`,{class:`${n}-base-select-menu__empty`,"data-empty":!0},B(e.empty,()=>[this.mergedRenderEmpty?.call(this)||V(Be,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):V(H,Object.assign({ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?V(je,{ref:`virtualListRef`,class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?V(Ve,{key:e.key,clsPrefix:n,tmNode:e}):e.ignored?null:V(Ue,{clsPrefix:n,key:e.key,tmNode:e})}):V(`div`,{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(e=>e.isGroup?V(Ve,{key:e.key,clsPrefix:n,tmNode:e}):V(Ue,{clsPrefix:n,key:e.key,tmNode:e})))}),k(e.action,e=>e&&[V(`div`,{class:`${n}-base-select-menu__action`,"data-action":!0,key:`action`},e),V(Re,{onFocus:this.onTabOut,key:`focus-detector`})]))}}),Ke=l([L(`base-selection`,`
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
 `,[L(`base-loading`,`
 color: var(--n-loading-color);
 `),L(`base-selection-tags`,`min-height: var(--n-height);`),E(`border, state-border`,`
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
 `),E(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),L(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[E(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),L(`base-selection-overlay`,`
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
 `,[E(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),L(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[E(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),L(`base-selection-tags`,`
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
 `),L(`base-selection-label`,`
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
 `,[L(`base-selection-input`,`
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
 `,[E(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),E(`render-label`,`
 color: var(--n-text-color);
 `)]),D(`disabled`,[l(`&:hover`,[E(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),T(`focus`,[E(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),T(`active`,[E(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),L(`base-selection-label`,`background-color: var(--n-color-active);`),L(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),T(`disabled`,`cursor: not-allowed;`,[E(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),L(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[L(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),E(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),L(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),L(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),L(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[E(`input`,`
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
 `),E(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>T(`${e}-status`,[E(`state-border`,`border: var(--n-border-${e});`),D(`disabled`,[l(`&:hover`,[E(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),T(`active`,[E(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),L(`base-selection-label`,`background-color: var(--n-color-active-${e});`),L(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),T(`focus`,[E(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),L(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),L(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[l(`&:last-child`,`padding-right: 0;`),L(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[E(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),qe=y({name:`InternalSelection`,props:Object.assign(Object.assign({},p.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(t){let{mergedClsPrefixRef:n,mergedRtlRef:r}=te(t),i=s(`InternalSelection`,r,n),a=e(null),c=e(null),l=e(null),u=e(null),d=e(null),f=e(null),h=e(null),_=e(null),y=e(null),b=e(null),S=e(!1),w=e(!1),T=e(!1),E=p(`InternalSelection`,`-internal-selection`,Ke,ye,t,R(t,`clsPrefix`)),D=I(()=>t.clearable&&!t.disabled&&(T.value||t.active)),O=I(()=>t.selectedOption?t.renderTag?t.renderTag({option:t.selectedOption,handleClose:()=>{}}):t.renderLabel?t.renderLabel(t.selectedOption,!0):Z(t.selectedOption[t.labelField],t.selectedOption,!0):t.placeholder),k=I(()=>{let e=t.selectedOption;if(e)return e[t.labelField]}),A=I(()=>t.multiple?!!(Array.isArray(t.selectedOptions)&&t.selectedOptions.length):t.selectedOption!==null);function j(){var e;let{value:n}=a;if(n){let{value:r}=c;r&&(r.style.width=`${n.offsetWidth}px`,t.maxTagCount!==`responsive`&&((e=y.value)==null||e.sync({showAllItemsBeforeCalculate:!1})))}}function ee(){let{value:e}=b;e&&(e.style.display=`none`)}function M(){let{value:e}=b;e&&(e.style.display=`inline-block`)}x(R(t,`active`),e=>{e||ee()}),x(R(t,`pattern`),()=>{t.multiple&&g(j)});function N(e){let{onFocus:n}=t;n&&n(e)}function P(e){let{onBlur:n}=t;n&&n(e)}function F(e){let{onDeleteOption:n}=t;n&&n(e)}function L(e){let{onClear:n}=t;n&&n(e)}function z(e){let{onPatternInput:n}=t;n&&n(e)}function B(e){(!e.relatedTarget||!l.value?.contains(e.relatedTarget))&&N(e)}function V(e){l.value?.contains(e.relatedTarget)||P(e)}function H(e){L(e)}function re(){T.value=!0}function U(){T.value=!1}function W(e){!t.active||!t.filterable||e.target!==c.value&&e.preventDefault()}function G(e){F(e)}let K=e(!1);function q(e){if(e.key===`Backspace`&&!K.value&&!t.pattern.length){let{selectedOptions:e}=t;e?.length&&G(e[e.length-1])}}let J=null;function ie(e){let{value:n}=a;n&&(n.textContent=e.target.value,j()),t.ignoreComposition&&K.value?J=e:z(e)}function ae(){K.value=!0}function oe(){K.value=!1,t.ignoreComposition&&z(J),J=null}function se(e){var n;w.value=!0,(n=t.onPatternFocus)==null||n.call(t,e)}function ce(e){var n;w.value=!1,(n=t.onPatternBlur)==null||n.call(t,e)}function le(){var e,n;if(t.filterable)w.value=!1,(e=f.value)==null||e.blur(),(n=c.value)==null||n.blur();else if(t.multiple){let{value:e}=u;e?.blur()}else{let{value:e}=d;e?.blur()}}function ue(){var e,n,r;t.filterable?(w.value=!1,(e=f.value)==null||e.focus()):t.multiple?(n=u.value)==null||n.focus():(r=d.value)==null||r.focus()}function de(){let{value:e}=c;e&&(M(),e.focus())}function Y(){let{value:e}=c;e&&e.blur()}function fe(e){let{value:t}=h;t&&t.setTextContent(`+${e}`)}function X(){let{value:e}=_;return e}function Q(){return c.value}let pe=null;function me(){pe!==null&&window.clearTimeout(pe)}function he(){t.active||(me(),pe=window.setTimeout(()=>{A.value&&(S.value=!0)},100))}function ge(){me()}function _e(e){e||(me(),S.value=!1)}x(A,e=>{e||(S.value=!1)}),m(()=>{C(()=>{let e=f.value;e&&(t.disabled?e.removeAttribute(`tabindex`):e.tabIndex=w.value?-1:0)})}),Pe(l,t.onResize);let{inlineThemeDisabled:ve}=t,be=I(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:s,textColor:c,paddingSingle:l,paddingMultiple:u,caretColor:d,colorDisabled:f,textColorDisabled:p,placeholderColorDisabled:m,colorActive:h,boxShadowFocus:g,boxShadowActive:_,boxShadowHover:y,border:b,borderFocus:x,borderHover:S,borderActive:C,arrowColor:w,arrowColorDisabled:T,loadingColor:D,colorActiveWarning:O,boxShadowFocusWarning:k,boxShadowActiveWarning:A,boxShadowHoverWarning:j,borderWarning:ee,borderFocusWarning:M,borderHoverWarning:N,borderActiveWarning:P,colorActiveError:F,boxShadowFocusError:I,boxShadowActiveError:te,boxShadowHoverError:ne,borderError:L,borderFocusError:R,borderHoverError:z,borderActiveError:B,clearColor:V,clearColorHover:H,clearColorPressed:re,clearSize:U,arrowSize:W,[v(`height`,e)]:G,[v(`fontSize`,e)]:K}}=E.value,q=o(l),J=o(u);return{"--n-bezier":n,"--n-border":b,"--n-border-active":C,"--n-border-focus":x,"--n-border-hover":S,"--n-border-radius":i,"--n-box-shadow-active":_,"--n-box-shadow-focus":g,"--n-box-shadow-hover":y,"--n-caret-color":d,"--n-color":a,"--n-color-active":h,"--n-color-disabled":f,"--n-font-size":K,"--n-height":G,"--n-padding-single-top":q.top,"--n-padding-multiple-top":J.top,"--n-padding-single-right":q.right,"--n-padding-multiple-right":J.right,"--n-padding-single-left":q.left,"--n-padding-multiple-left":J.left,"--n-padding-single-bottom":q.bottom,"--n-padding-multiple-bottom":J.bottom,"--n-placeholder-color":s,"--n-placeholder-color-disabled":m,"--n-text-color":c,"--n-text-color-disabled":p,"--n-arrow-color":w,"--n-arrow-color-disabled":T,"--n-loading-color":D,"--n-color-active-warning":O,"--n-box-shadow-focus-warning":k,"--n-box-shadow-active-warning":A,"--n-box-shadow-hover-warning":j,"--n-border-warning":ee,"--n-border-focus-warning":M,"--n-border-hover-warning":N,"--n-border-active-warning":P,"--n-color-active-error":F,"--n-box-shadow-focus-error":I,"--n-box-shadow-active-error":te,"--n-box-shadow-hover-error":ne,"--n-border-error":L,"--n-border-focus-error":R,"--n-border-hover-error":z,"--n-border-active-error":B,"--n-clear-size":U,"--n-clear-color":V,"--n-clear-color-hover":H,"--n-clear-color-pressed":re,"--n-arrow-size":W,"--n-font-weight":r}}),xe=ve?ne(`internal-selection`,I(()=>t.size[0]),be,t):void 0;return{mergedTheme:E,mergedClearable:D,mergedClsPrefix:n,rtlEnabled:i,patternInputFocused:w,filterablePlaceholder:O,label:k,selected:A,showTagsPanel:S,isComposing:K,counterRef:h,counterWrapperRef:_,patternInputMirrorRef:a,patternInputRef:c,selfRef:l,multipleElRef:u,singleElRef:d,patternInputWrapperRef:f,overflowRef:y,inputTagElRef:b,handleMouseDown:W,handleFocusin:B,handleClear:H,handleMouseEnter:re,handleMouseLeave:U,handleDeleteOption:G,handlePatternKeyDown:q,handlePatternInputInput:ie,handlePatternInputBlur:ce,handlePatternInputFocus:se,handleMouseEnterCounter:he,handleMouseLeaveCounter:ge,handleFocusout:V,handleCompositionEnd:oe,handleCompositionStart:ae,onPopoverUpdateShow:_e,focus:ue,focusInput:de,blur:le,blurInput:Y,updateCounter:fe,getCounter:X,getTail:Q,renderLabel:t.renderLabel,cssVars:ve?void 0:be,themeClass:xe?.themeClass,onRender:xe?.onRender}},render(){let{status:e,multiple:t,size:n,disabled:r,filterable:i,maxTagCount:a,bordered:o,clsPrefix:s,ellipsisTagPopoverProps:c,onRender:l,renderTag:u,renderLabel:d}=this;l?.();let f=a===`responsive`,p=typeof a==`number`,m=f||p,h=V(ee,null,{default:()=>V(ae,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var e;return(e=this.$slots).arrow?.call(e)}})}),g;if(t){let{labelField:e}=this,t=t=>V(`div`,{class:`${s}-base-selection-tag-wrapper`,key:t.value},u?u({option:t,handleClose:()=>{this.handleDeleteOption(t)}}):V(Q,{size:n,closable:!t.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>d?d(t,!0):Z(t[e],t,!0)})),o=()=>(p?this.selectedOptions.slice(0,a):this.selectedOptions).map(t),l=i?V(`div`,{class:`${s}-base-selection-input-tag`,ref:`inputTagElRef`,key:`__input-tag__`},V(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),V(`span`,{ref:`patternInputMirrorRef`,class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,_=f?()=>V(`div`,{class:`${s}-base-selection-tag-wrapper`,ref:`counterWrapperRef`},V(Q,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0,v;if(p){let e=this.selectedOptions.length-a;e>0&&(v=V(`div`,{class:`${s}-base-selection-tag-wrapper`,key:`__counter__`},V(Q,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${e}`})))}let y=f?i?V(Ne,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:_,tail:()=>l}):V(Ne,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:_}):p&&v?o().concat(v):o(),b=m?()=>V(`div`,{class:`${s}-base-selection-popover`},f?o():this.selectedOptions.map(t)):void 0,x=m?Object.assign({show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,S=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?V(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},V(`div`,{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):null,C=i?V(`div`,{ref:`patternInputWrapperRef`,class:`${s}-base-selection-tags`},y,f?null:l,h):V(`div`,{ref:`multipleElRef`,class:`${s}-base-selection-tags`,tabindex:r?void 0:0},y,h);g=V(z,null,m?V(le,Object.assign({},x,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>C,default:b}):C,S)}else if(i){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=!this.active&&this.selected;g=V(`div`,{ref:`patternInputWrapperRef`,class:`${s}-base-selection-label`,title:this.patternInputFocused?void 0:be(this.label)},V(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,class:`${s}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),n?V(`div`,{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:`input`},V(`div`,{class:`${s}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):Z(this.label,this.selectedOption,!0))):null,t?V(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:`placeholder`},V(`div`,{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,h)}else g=V(`div`,{ref:`singleElRef`,class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label===void 0?V(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:`placeholder`},V(`div`,{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):V(`div`,{class:`${s}-base-selection-input`,title:be(this.label),key:`input`},V(`div`,{class:`${s}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):Z(this.label,this.selectedOption,!0))),h);return V(`div`,{ref:`selfRef`,class:[`${s}-base-selection`,this.rtlEnabled&&`${s}-base-selection--rtl`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},g,o?V(`div`,{class:`${s}-base-selection__border`}):null,o?V(`div`,{class:`${s}-base-selection__state-border`}):null)}});function Je(e){return e.type===`group`}function Ye(e){return e.type===`ignored`}function Xe(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Ze(e,t){return{getIsGroup:Je,getIgnored:Ye,getKey(t){return Je(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function Qe(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(Je(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(Ye(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function $e(e,t,n){let r=new Map;return e.forEach(e=>{Je(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var et=l([L(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),L(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[ce({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),tt=y({name:`Select`,props:Object.assign(Object.assign({},p.props),{to:fe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),slots:Object,setup(t){let{mergedClsPrefixRef:r,mergedBorderedRef:i,namespaceRef:a,inlineThemeDisabled:o,mergedComponentPropsRef:s}=te(t),c=p(`Select`,`-select`,et,he,t,r),l=e(t.defaultValue),u=q(R(t,`value`),l),d=e(!1),m=e(``),h=J(t,[`items`,`options`]),g=e([]),_=e([]),v=I(()=>_.value.concat(g.value).concat(h.value)),y=I(()=>{let{filter:e}=t;if(e)return e;let{labelField:n,valueField:r}=t;return(e,t)=>{if(!t)return!1;let i=t[n];if(typeof i==`string`)return Xe(e,i);let a=t[r];return typeof a==`string`?Xe(e,a):typeof a==`number`&&Xe(e,String(a))}}),b=I(()=>{if(t.remote)return h.value;{let{value:e}=v,{value:n}=m;return!n.length||!t.filterable?e:Qe(e,y.value,n,t.childrenField)}}),S=I(()=>{let{valueField:e,childrenField:n}=t,r=Ze(e,n);return oe(b.value,r)}),C=I(()=>$e(v.value,t.valueField,t.childrenField)),T=e(!1),E=q(R(t,`show`),T),D=e(null),O=e(null),k=e(null),{localeRef:A}=ie(`Select`),ee=I(()=>t.placeholder??A.value.placeholder),M=[],N=e(new Map),P=I(()=>{let{fallbackOption:e}=t;if(e===void 0){let{labelField:e,valueField:n}=t;return t=>({[e]:String(t),[n]:t})}return e===!1?!1:t=>Object.assign(e(t),{value:t})});function F(e){let n=t.remote,{value:r}=N,{value:i}=C,{value:a}=P,o=[];return e.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(n&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let L=I(()=>{if(t.multiple){let{value:e}=u;return Array.isArray(e)?F(e):[]}return null}),z=I(()=>{let{value:e}=u;return!t.multiple&&!Array.isArray(e)?e===null?null:F([e])[0]||null:null}),B=j(t,{mergedSize:e=>{let{size:n}=t;if(n)return n;let{mergedSize:r}=e||{};return r?.value?r.value:s?.value?.Select?.size||`medium`}}),{mergedSizeRef:V,mergedDisabledRef:H,mergedStatusRef:re}=B;function W(e,r){let{onChange:i,"onUpdate:value":a,onUpdateValue:o}=t,{nTriggerFormChange:s,nTriggerFormInput:c}=B;i&&n(i,e,r),o&&n(o,e,r),a&&n(a,e,r),l.value=e,s(),c()}function G(e){let{onBlur:r}=t,{nTriggerFormBlur:i}=B;r&&n(r,e),i()}function K(){let{onClear:e}=t;e&&n(e)}function ae(e){let{onFocus:r,showOnFocus:i}=t,{nTriggerFormFocus:a}=B;r&&n(r,e),a(),i&&Y()}function ce(e){let{onSearch:r}=t;r&&n(r,e)}function le(e){let{onScroll:r}=t;r&&n(r,e)}function ue(){var e;let{remote:n,multiple:r}=t;if(n){let{value:n}=N;if(r){let{valueField:r}=t;(e=L.value)==null||e.forEach(e=>{n.set(e[r],e)})}else{let e=z.value;e&&n.set(e[t.valueField],e)}}}function de(e){let{onUpdateShow:r,"onUpdate:show":i}=t;r&&n(r,e),i&&n(i,e),T.value=e}function Y(){H.value||(de(!0),T.value=!0,t.filterable&&Me())}function X(){de(!1)}function Z(){m.value=``,_.value=M}let Q=e(!1);function pe(){t.filterable&&(Q.value=!0)}function me(){t.filterable&&(Q.value=!1,E.value||Z())}function ge(){H.value||(E.value?t.filterable?Me():X():Y())}function _e(e){(k.value?.selfRef)?.contains(e.relatedTarget)||(d.value=!1,G(e),X())}function ve(e){ae(e),d.value=!0}function ye(){d.value=!0}function be(e){D.value?.$el.contains(e.relatedTarget)||(d.value=!1,G(e),X())}function xe(){var e;(e=D.value)==null||e.focus(),X()}function Se(e){E.value&&(D.value?.$el.contains(w(e))||X())}function Ce(e){if(!Array.isArray(e))return[];if(P.value)return Array.from(e);{let{remote:n}=t,{value:r}=C;if(n){let{value:t}=N;return e.filter(e=>r.has(e)||t.has(e))}else return e.filter(e=>r.has(e))}}function we(e){Te(e.rawNode)}function Te(e){if(H.value)return;let{tag:n,remote:r,clearFilterAfterSelect:i,valueField:a}=t;if(n&&!r){let{value:e}=_,t=e[0]||null;if(t){let e=g.value;e.length?e.push(t):g.value=[t],_.value=M}}if(r&&N.value.set(e[a],e),t.multiple){let t=Ce(u.value),o=t.findIndex(t=>t===e[a]);if(~o){if(t.splice(o,1),n&&!r){let t=Ee(e[a]);~t&&(g.value.splice(t,1),i&&(m.value=``))}}else t.push(e[a]),i&&(m.value=``);W(t,F(t))}else{if(n&&!r){let t=Ee(e[a]);~t?g.value=[g.value[t]]:g.value=M}$(),X(),W(e[a],e)}}function Ee(e){return g.value.findIndex(n=>n[t.valueField]===e)}function De(e){E.value||Y();let{value:n}=e.target;m.value=n;let{tag:r,remote:i}=t;if(ce(n),r&&!i){if(!n){_.value=M;return}let{onCreate:e}=t,r=e?e(n):{[t.labelField]:n,[t.valueField]:n},{valueField:i,labelField:a}=t;h.value.some(e=>e[i]===r[i]||e[a]===r[a])||g.value.some(e=>e[i]===r[i]||e[a]===r[a])?_.value=M:_.value=[r]}}function Oe(e){e.stopPropagation();let{multiple:n,tag:r,remote:i,clearCreatedOptionsOnClear:a}=t;!n&&t.filterable&&X(),r&&!i&&a&&(g.value=M),K(),n?W([],[]):W(null,null)}function ke(e){!U(e,`action`)&&!U(e,`empty`)&&!U(e,`header`)&&e.preventDefault()}function Ae(e){le(e)}function je(e){var n,r,i;if(!t.keyboard){e.preventDefault();return}switch(e.key){case` `:if(t.filterable)break;e.preventDefault();case`Enter`:if(!D.value?.isComposing){if(E.value){let e=k.value?.getPendingTmNode();e?we(e):t.filterable||(X(),$())}else if(Y(),t.tag&&Q.value){let e=_.value[0];if(e){let n=e[t.valueField],{value:r}=u;t.multiple&&Array.isArray(r)&&r.includes(n)||Te(e)}}}e.preventDefault();break;case`ArrowUp`:if(e.preventDefault(),t.loading)return;E.value&&((n=k.value)==null||n.prev());break;case`ArrowDown`:if(e.preventDefault(),t.loading)return;E.value?(r=k.value)==null||r.next():Y();break;case`Escape`:E.value&&(se(e),X()),(i=D.value)==null||i.focus();break}}function $(){var e;(e=D.value)==null||e.focus()}function Me(){var e;(e=D.value)==null||e.focusInput()}function Ne(){var e;E.value&&((e=O.value)==null||e.syncPosition())}ue(),x(R(t,`options`),ue);let Pe={focus:()=>{var e;(e=D.value)==null||e.focus()},focusInput:()=>{var e;(e=D.value)==null||e.focusInput()},blur:()=>{var e;(e=D.value)==null||e.blur()},blurInput:()=>{var e;(e=D.value)==null||e.blurInput()}},Fe=I(()=>{let{self:{menuBoxShadow:e}}=c.value;return{"--n-menu-box-shadow":e}}),Ie=o?ne(`select`,void 0,Fe,t):void 0;return Object.assign(Object.assign({},Pe),{mergedStatus:re,mergedClsPrefix:r,mergedBordered:i,namespace:a,treeMate:S,isMounted:f(),triggerRef:D,menuRef:k,pattern:m,uncontrolledShow:T,mergedShow:E,adjustedTo:fe(t),uncontrolledValue:l,mergedValue:u,followerRef:O,localizedPlaceholder:ee,selectedOption:z,selectedOptions:L,mergedSize:V,mergedDisabled:H,focused:d,activeWithoutMenuOpen:Q,inlineThemeDisabled:o,onTriggerInputFocus:pe,onTriggerInputBlur:me,handleTriggerOrMenuResize:Ne,handleMenuFocus:ye,handleMenuBlur:be,handleMenuTabOut:xe,handleTriggerClick:ge,handleToggle:we,handleDeleteOption:Te,handlePatternInput:De,handleClear:Oe,handleTriggerBlur:_e,handleTriggerFocus:ve,handleKeydown:je,handleMenuAfterLeave:Z,handleMenuClickOutside:Se,handleMenuScroll:Ae,handleMenuKeydown:je,handleMenuMousedown:ke,mergedTheme:c,cssVars:o?void 0:Fe,themeClass:Ie?.themeClass,onRender:Ie?.onRender})},render(){return V(`div`,{class:`${this.mergedClsPrefix}-select`},V(ue,null,{default:()=>[V(me,null,{default:()=>V(qe,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e;return[(e=this.$slots).arrow?.call(e)]}})}),V(de,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===fe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{default:()=>V(O,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e;return this.mergedShow||this.displayDirective===`show`?((e=this.onRender)==null||e.call(this),c(V(Ge,Object.assign({},this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var e;return[(e=this.$slots).empty?.call(e)]},header:()=>{var e;return[(e=this.$slots).header?.call(e)]},action:()=>{var e;return[(e=this.$slots).action?.call(e)]}}),this.displayDirective===`show`?[[A,this.mergedShow],[pe,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[pe,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{tt as t};