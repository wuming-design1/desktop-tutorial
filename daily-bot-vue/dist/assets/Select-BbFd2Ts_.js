import{At as e,Bt as t,Ft as n,Gt as r,Jt as i,Kn as a,Lt as o,Mt as s,On as c,Ot as l,Pt as u,Rt as d,Sn as f,Vn as p,Xt as m,_n as h,_t as g,bt as _,ct as v,dn as y,dt as b,en as x,et as S,fn as C,gn as w,gt as T,ht as E,it as D,jn as O,jt as k,kn as A,ln as j,mn as ee,nt as M,ot as te,p as N,pn as P,s as ne,sn as F,tt as re,vn as I,w as ie,wn as L,x as R,xt as z,y as B,zt as V}from"./_plugin-vue_export-helper-CCvUJjhJ.js";import{n as H,t as U}from"./happens-in-Bbk4beju.js";import{n as W,t as G}from"./cssr-DofmJZ9f.js";import{t as K}from"./use-merged-state-CF77hr3s.js";import{t as q}from"./use-compitable-DWNDaUpo.js";import{r as ae,t as oe}from"./Suffix-Rm6tRivV.js";import{A as se,B as ce,D as le,E as ue,G as de,H as fe,J,K as pe,O as Y,R as X,T as Z,U as me,W as he,_ as ge,j as _e,k as ve,q as ye,w as be,z as xe}from"./index-OlDhySiI.js";function Se(e){return e&-e}var Ce=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=Se(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=Se(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}else if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},we;function Te(){return typeof document>`u`?!1:(we===void 0&&(we=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches),we)}var Q;function Ee(){return typeof document>`u`?1:(Q===void 0&&(Q=`chrome`in window?window.devicePixelRatio:1),Q)}var De=`VVirtualListXScroll`;function Oe({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let r=p(0),i=p(0),a=x(()=>{let t=e.value;if(t.length===0)return null;let n=new Ce(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n});return f(De,{startIndexRef:z(()=>{let e=a.value;return e===null?0:Math.max(e.getBound(i.value)-1,0)}),endIndexRef:z(()=>{let t=a.value;return t===null?0:Math.min(t.getBound(i.value+r.value)+1,e.value.length-1)}),columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:e=>{let t=a.value;return t===null?0:t.sum(e)}}),{listWidthRef:r,scrollLeftRef:i}}var ke=F({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=y(De);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),Ae=G(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[G(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[G(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),je=F({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){let t=g();Ae.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:W,ssr:t}),I(()=>{let{defaultScrollIndex:t,defaultScrollKey:n}=e;t==null?n!=null&&S({key:n}):S({index:t})});let n=!1,r=!1;ee(()=>{if(n=!1,!r){r=!0;return}S({top:v.value,left:s.value})}),h(()=>{n=!0,r||=!0});let i=z(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let t=0;return e.columns.forEach(e=>{t+=e.width}),t}),o=x(()=>{let t=new Map,{keyField:n}=e;return e.items.forEach((e,r)=>{t.set(e[n],r)}),t}),{scrollLeftRef:s,listWidthRef:c}=Oe({columnsRef:a(e,`columns`),renderColRef:a(e,`renderCol`),renderItemWithColsRef:a(e,`renderItemWithCols`)}),u=p(null),d=p(void 0),f=new Map,m=x(()=>{let{items:t,itemSize:n,keyField:r}=e,i=new Ce(t.length,n);return t.forEach((e,t)=>{let n=e[r],a=f.get(n);a!==void 0&&i.add(t,a)}),i}),_=p(0),v=p(0),y=z(()=>Math.max(m.value.getBound(v.value-l(e.paddingTop))-1,0)),b=x(()=>{let{value:t}=d;if(t===void 0)return[];let{items:n,itemSize:r}=e,i=y.value,a=Math.min(i+Math.ceil(t/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),S=(e,t)=>{if(typeof e==`number`){E(e,t,`auto`);return}let{left:n,top:r,index:i,key:a,position:s,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)E(n,r,c);else if(i!==void 0)T(i,c,l);else if(a!==void 0){let e=o.value.get(a);e!==void 0&&T(e,c,l)}else s===`bottom`?E(0,2**53-1,c):s===`top`&&E(0,0,c)},C,w=null;function T(t,n,r){let{value:i}=m,a=i.sum(t)+l(e.paddingTop);if(!r)u.value.scrollTo({left:0,top:a,behavior:n});else{C=t,w!==null&&window.clearTimeout(w),w=window.setTimeout(()=>{C=void 0,w=null},16);let{scrollTop:e,offsetHeight:r}=u.value;if(a>e){let o=i.get(t);a+o<=e+r||u.value.scrollTo({left:0,top:a+o-r,behavior:n})}else u.value.scrollTo({left:0,top:a,behavior:n})}}function E(e,t,n){u.value.scrollTo({left:e,top:t,behavior:n})}function D(t,r){if(n||e.ignoreItemResize||P(r.target))return;let{value:i}=m,a=o.value.get(t),s=i.get(a),c=r.borderBoxSize?.[0]?.blockSize??r.contentRect.height;if(c===s)return;c-e.itemSize===0?f.delete(t):f.set(t,c-e.itemSize);let l=c-s;if(l===0)return;i.add(a,l);let d=u.value;if(d!=null){if(C===void 0){let e=i.sum(a);d.scrollTop>e&&d.scrollBy(0,l)}else(a<C||a===C&&c+i.sum(a)>d.scrollTop+d.offsetHeight)&&d.scrollBy(0,l);N()}_.value++}let O=!Te(),A=!1;function j(t){var n;(n=e.onScroll)==null||n.call(e,t),(!O||!A)&&N()}function M(t){var n;if((n=e.onWheel)==null||n.call(e,t),O){let e=u.value;if(e!=null){if(t.deltaX===0&&(e.scrollTop===0&&t.deltaY<=0||e.scrollTop+e.offsetHeight>=e.scrollHeight&&t.deltaY>=0))return;t.preventDefault(),e.scrollTop+=t.deltaY/Ee(),e.scrollLeft+=t.deltaX/Ee(),N(),A=!0,H(()=>{A=!1})}}}function te(t){if(n||P(t.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(t.contentRect.height===d.value)return}else if(t.contentRect.height===d.value&&t.contentRect.width===c.value)return;d.value=t.contentRect.height,c.value=t.contentRect.width;let{onResize:r}=e;r!==void 0&&r(t)}function N(){let{value:e}=u;e!=null&&(v.value=e.scrollTop,s.value=e.scrollLeft)}function P(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:d,listStyle:{overflow:`auto`},keyToIndex:o,itemsStyle:x(()=>{let{itemResizable:t}=e,n=k(m.value.sum());return _.value,[e.itemsStyle,{boxSizing:`content-box`,width:k(i.value),height:t?``:n,minHeight:t?n:``,paddingTop:k(e.paddingTop),paddingBottom:k(e.paddingBottom)}]}),visibleItemsStyle:x(()=>(_.value,{transform:`translateY(${k(m.value.sum(y.value))})`})),viewportItems:b,listElRef:u,itemsElRef:p(null),scrollTo:S,handleListResize:te,handleListScroll:j,handleListWheel:M,handleItemResize:D}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return j(E,{onResize:this.handleListResize},{default:()=>{var i;return j(`div`,C(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(i=this.$slots).empty?.call(i):j(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[j(r,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:i}=this;return this.viewportItems.map(a=>{let o=a[t],s=n.get(o),c=r==null?void 0:j(ke,{index:s,item:a}),l=i==null?void 0:j(ke,{index:s,item:a}),u=this.$slots.default({item:a,renderedCols:c,renderedItemWithCols:l,index:s})[0];return e?j(E,{key:o,onResize:e=>this.handleItemResize(o,e)},{default:()=>u}):(u.key=o,u)})}})])])}})}}),$=`v-hidden`,Me=G(`[v-hidden]`,{display:`none!important`}),Ne=F({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=p(null),r=p(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute($)&&c.removeAttribute($);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute($)&&e.removeAttribute($);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute($)||n.setAttribute($,``);continue}else n.hasAttribute($)&&n.removeAttribute($);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute($,``))}let a=g();return Me.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:W,ssr:a}),I(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return P(()=>this.sync({showAllItemsBeforeCalculate:!1})),j(`div`,{class:`v-overflow`,ref:`selfRef`},[L(e,`default`),e.counter?e.counter():j(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function Pe(e,t){t&&(I(()=>{let{value:n}=e;n&&T.registerHandler(n,t)}),c(e,(e,t)=>{t&&T.unregisterHandler(t)},{deep:!1}),w(()=>{let{value:t}=e;t&&T.unregisterHandler(t)}))}function Fe(e){let t=e.filter(e=>e!==void 0);if(t.length!==0)return t.length===1?t[0]:t=>{e.forEach(e=>{e&&e(t)})}}var Ie=F({name:`Checkmark`,render(){return j(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},j(`g`,{fill:`none`},j(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})))}}),Le=F({name:`Empty`,render(){return j(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},j(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),j(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`}))}}),Re=F({props:{onFocus:Function,onBlur:Function},setup(e){return()=>j(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),ze=n(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[o(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[u(`+`,[o(`description`,`
 margin-top: 8px;
 `)])]),o(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),o(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Be=F({name:`Empty`,props:Object.assign(Object.assign({},R.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=M(e),a=R(`Empty`,`-empty`,ze,ve,e,n),{localeRef:o}=ae(`Empty`),s=x(()=>e.description??i?.value?.Empty?.description),c=x(()=>i?.value?.Empty?.renderIcon||(()=>j(Le,null))),l=x(()=>{let{size:n}=e,{common:{cubicBezierEaseInOut:r},self:{[t(`iconSize`,n)]:i,[t(`fontSize`,n)]:o,textColor:s,iconColor:c,extraTextColor:l}}=a.value;return{"--n-icon-size":i,"--n-font-size":o,"--n-bezier":r,"--n-text-color":s,"--n-icon-color":c,"--n-extra-text-color":l}}),u=r?re(`empty`,x(()=>{let t=``,{size:n}=e;return t+=n[0],t}),l,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:c,localizedDescription:x(()=>s.value||o.value.description),cssVars:r?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),j(`div`,{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?j(`div`,{class:`${t}-empty__icon`},e.icon?e.icon():j(B,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?j(`div`,{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?j(`div`,{class:`${t}-empty__extra`},e.extra()):null)}}),Ve=F({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=y(J);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):X(i[this.labelField],i,!1),s=j(`div`,Object.assign({},a,{class:[`${e}-base-select-group-header`,a?.class]}),o);return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}});function He(e,t){return j(r,{name:`fade-in-scale-up-transition`},{default:()=>e?j(B,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>j(Ie)}):null})}var Ue=F({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:i,renderLabelRef:a,renderOptionRef:o,labelFieldRef:s,valueFieldRef:c,showCheckmarkRef:l,nodePropsRef:u,handleOptionClick:d,handleOptionMouseEnter:f}=y(J),p=z(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function m(t){let{tmNode:n}=e;n.disabled||d(t,n)}function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e,{value:r}=p;n.disabled||r||f(t,n)}return{multiple:r,isGrouped:z(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:l,nodeProps:u,isPending:p,isSelected:z(()=>{let{value:n}=t,{value:a}=r;if(n===null)return!1;let o=e.tmNode.rawNode[c.value];if(a){let{value:e}=i;return e.has(o)}else return n===o}),labelField:s,renderLabel:a,renderOption:o,handleMouseMove:g,handleMouseEnter:h,handleClick:m}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:s,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,f=He(n,e),p=c?[c(t,n),a&&f]:[X(t[this.labelField],t,n),a&&f],m=o?.(t),h=j(`div`,Object.assign({},m,{class:[`${e}-base-select-option`,t.class,m?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[m?.style||``,t.style||``],onClick:Fe([l,m?.onClick]),onMouseenter:Fe([u,m?.onMouseenter]),onMousemove:Fe([d,m?.onMousemove])}),j(`div`,{class:`${e}-base-select-option__content`},p));return t.render?t.render({node:h,option:t,selected:n}):s?s({node:h,option:t,selected:n}):h}}),We=n(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[n(`scrollbar`,`
 max-height: var(--n-height);
 `),n(`virtual-list`,`
 max-height: var(--n-height);
 `),n(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[o(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),n(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),n(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),o(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),o(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),o(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),o(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),n(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),n(`base-select-option`,`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[d(`show-checkmark`,`
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
 `),d(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),d(`pending`,[u(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),d(`selected`,`
 color: var(--n-option-text-color-active);
 `,[u(`&::before`,`
 background-color: var(--n-option-color-active);
 `),d(`pending`,[u(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),d(`disabled`,`
 cursor: not-allowed;
 `,[V(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),d(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),o(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[le({enterScale:`0.5`})])])]),Ge=F({name:`InternalSelectMenu`,props:Object.assign(Object.assign({},R.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(n){let{mergedClsPrefixRef:r,mergedRtlRef:i,mergedComponentPropsRef:o}=M(n),s=ie(`InternalSelectMenu`,i,r),u=R(`InternalSelectMenu`,`-internal-select-menu`,We,Y,n,a(n,`clsPrefix`)),d=p(null),m=p(null),h=p(null),g=x(()=>n.treeMate.getFlattenedNodes()),_=x(()=>_e(g.value)),v=p(null);function y(){let{treeMate:e}=n,t=null,{value:r}=n;r===null?t=e.getFirstAvailableNode():(t=n.multiple?e.getNode((r||[])[(r||[]).length-1]):e.getNode(r),(!t||t.disabled)&&(t=e.getFirstAvailableNode())),H(t||null)}function b(){let{value:e}=v;e&&!n.treeMate.getNode(e.key)&&(v.value=null)}let S;c(()=>n.show,e=>{e?S=c(()=>n.treeMate,()=>{n.resetMenuOnOptionsChange?(n.autoPending?y():b(),P(W)):b()},{immediate:!0}):S?.()},{immediate:!0}),w(()=>{S?.()});let C=x(()=>l(u.value.self[t(`optionHeight`,n.size)])),T=x(()=>e(u.value.self[t(`padding`,n.size)])),E=x(()=>n.multiple&&Array.isArray(n.value)?new Set(n.value):new Set),D=x(()=>{let e=g.value;return e&&e.length===0}),O=x(()=>o?.value?.Select?.renderEmpty);function k(e){let{onToggle:t}=n;t&&t(e)}function A(e){let{onScroll:t}=n;t&&t(e)}function j(e){var t;(t=h.value)==null||t.sync(),A(e)}function ee(){var e;(e=h.value)==null||e.sync()}function te(){let{value:e}=v;return e||null}function N(e,t){t.disabled||H(t,!1)}function ne(e,t){t.disabled||k(t)}function F(e){var t;U(e,`action`)||(t=n.onKeyup)==null||t.call(n,e)}function L(e){var t;U(e,`action`)||(t=n.onKeydown)==null||t.call(n,e)}function z(e){var t;(t=n.onMousedown)==null||t.call(n,e),!n.focusable&&e.preventDefault()}function B(){let{value:e}=v;e&&H(e.getNext({loop:!0}),!0)}function V(){let{value:e}=v;e&&H(e.getPrev({loop:!0}),!0)}function H(e,t=!1){v.value=e,t&&W()}function W(){var e,t;let r=v.value;if(!r)return;let i=_.value(r.key);i!==null&&(n.virtualScroll?(e=m.value)==null||e.scrollTo({index:i}):(t=h.value)==null||t.scrollTo({index:i,elSize:C.value}))}function G(e){var t;d.value?.contains(e.target)&&((t=n.onFocus)==null||t.call(n,e))}function K(e){var t;d.value?.contains(e.relatedTarget)||(t=n.onBlur)==null||t.call(n,e)}f(J,{handleOptionMouseEnter:N,handleOptionClick:ne,valueSetRef:E,pendingTmNodeRef:v,nodePropsRef:a(n,`nodeProps`),showCheckmarkRef:a(n,`showCheckmark`),multipleRef:a(n,`multiple`),valueRef:a(n,`value`),renderLabelRef:a(n,`renderLabel`),renderOptionRef:a(n,`renderOption`),labelFieldRef:a(n,`labelField`),valueFieldRef:a(n,`valueField`)}),f(ye,d),I(()=>{let{value:e}=h;e&&e.sync()});let q=x(()=>{let{size:r}=n,{common:{cubicBezierEaseInOut:i},self:{height:a,borderRadius:o,color:s,groupHeaderTextColor:c,actionDividerColor:l,optionTextColorPressed:d,optionTextColor:f,optionTextColorDisabled:p,optionTextColorActive:m,optionOpacityDisabled:h,optionCheckColor:g,actionTextColor:_,optionColorPending:v,optionColorActive:y,loadingColor:b,loadingSize:x,optionColorActivePending:S,[t(`optionFontSize`,r)]:C,[t(`optionHeight`,r)]:w,[t(`optionPadding`,r)]:T}}=u.value;return{"--n-height":a,"--n-action-divider-color":l,"--n-action-text-color":_,"--n-bezier":i,"--n-border-radius":o,"--n-color":s,"--n-option-font-size":C,"--n-group-header-text-color":c,"--n-option-check-color":g,"--n-option-color-pending":v,"--n-option-color-active":y,"--n-option-color-active-pending":S,"--n-option-height":w,"--n-option-opacity-disabled":h,"--n-option-text-color":f,"--n-option-text-color-active":m,"--n-option-text-color-disabled":p,"--n-option-text-color-pressed":d,"--n-option-padding":T,"--n-option-padding-left":e(T,`left`),"--n-option-padding-right":e(T,`right`),"--n-loading-color":b,"--n-loading-size":x}}),{inlineThemeDisabled:ae}=n,oe=ae?re(`internal-select-menu`,x(()=>n.size[0]),q,n):void 0,se={selfRef:d,next:B,prev:V,getPendingTmNode:te};return Pe(d,n.onResize),Object.assign({mergedTheme:u,mergedClsPrefix:r,rtlEnabled:s,virtualListRef:m,scrollbarRef:h,itemSize:C,padding:T,flattenedNodes:g,empty:D,mergedRenderEmpty:O,virtualListContainer(){let{value:e}=m;return e?.listElRef},virtualListContent(){let{value:e}=m;return e?.itemsElRef},doScroll:A,handleFocusin:G,handleFocusout:K,handleKeyUp:F,handleKeyDown:L,handleMouseDown:z,handleVirtualListResize:ee,handleVirtualListScroll:j,cssVars:ae?void 0:q,themeClass:oe?.themeClass,onRender:oe?.onRender},se)},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:i,onRender:a}=this;return a?.(),j(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},v(e.header,e=>e&&j(`div`,{class:`${n}-base-select-menu__header`,"data-header":!0,key:`header`},e)),this.loading?j(`div`,{class:`${n}-base-select-menu__loading`},j(N,{clsPrefix:n,strokeWidth:20})):this.empty?j(`div`,{class:`${n}-base-select-menu__empty`,"data-empty":!0},te(e.empty,()=>[this.mergedRenderEmpty?.call(this)||j(Be,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):j(ne,Object.assign({ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?j(je,{ref:`virtualListRef`,class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?j(Ve,{key:e.key,clsPrefix:n,tmNode:e}):e.ignored?null:j(Ue,{clsPrefix:n,key:e.key,tmNode:e})}):j(`div`,{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(e=>e.isGroup?j(Ve,{key:e.key,clsPrefix:n,tmNode:e}):j(Ue,{clsPrefix:n,key:e.key,tmNode:e})))}),v(e.action,e=>e&&[j(`div`,{class:`${n}-base-select-menu__action`,"data-action":!0,key:`action`},e),j(Re,{onFocus:this.onTabOut,key:`focus-detector`})]))}}),Ke=u([n(`base-selection`,`
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
 `,[n(`base-loading`,`
 color: var(--n-loading-color);
 `),n(`base-selection-tags`,`min-height: var(--n-height);`),o(`border, state-border`,`
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
 `),o(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),n(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[o(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),n(`base-selection-overlay`,`
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
 `,[o(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),n(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[o(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),n(`base-selection-tags`,`
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
 `),n(`base-selection-label`,`
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
 `,[n(`base-selection-input`,`
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
 `,[o(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),o(`render-label`,`
 color: var(--n-text-color);
 `)]),V(`disabled`,[u(`&:hover`,[o(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),d(`focus`,[o(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),d(`active`,[o(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),n(`base-selection-label`,`background-color: var(--n-color-active);`),n(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),d(`disabled`,`cursor: not-allowed;`,[o(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),n(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[n(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),o(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),n(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),n(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),n(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[o(`input`,`
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
 `),o(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>d(`${e}-status`,[o(`state-border`,`border: var(--n-border-${e});`),V(`disabled`,[u(`&:hover`,[o(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),d(`active`,[o(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),n(`base-selection-label`,`background-color: var(--n-color-active-${e});`),n(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),d(`focus`,[o(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),n(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),n(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[u(`&:last-child`,`padding-right: 0;`),n(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[o(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),qe=F({name:`InternalSelection`,props:Object.assign(Object.assign({},R.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(n){let{mergedClsPrefixRef:r,mergedRtlRef:i}=M(n),o=ie(`InternalSelection`,i,r),s=p(null),l=p(null),u=p(null),d=p(null),f=p(null),m=p(null),h=p(null),g=p(null),_=p(null),v=p(null),y=p(!1),b=p(!1),S=p(!1),C=R(`InternalSelection`,`-internal-selection`,Ke,be,n,a(n,`clsPrefix`)),w=x(()=>n.clearable&&!n.disabled&&(S.value||n.active)),T=x(()=>n.selectedOption?n.renderTag?n.renderTag({option:n.selectedOption,handleClose:()=>{}}):n.renderLabel?n.renderLabel(n.selectedOption,!0):X(n.selectedOption[n.labelField],n.selectedOption,!0):n.placeholder),E=x(()=>{let e=n.selectedOption;if(e)return e[n.labelField]}),D=x(()=>n.multiple?!!(Array.isArray(n.selectedOptions)&&n.selectedOptions.length):n.selectedOption!==null);function O(){var e;let{value:t}=s;if(t){let{value:r}=l;r&&(r.style.width=`${t.offsetWidth}px`,n.maxTagCount!==`responsive`&&((e=_.value)==null||e.sync({showAllItemsBeforeCalculate:!1})))}}function k(){let{value:e}=v;e&&(e.style.display=`none`)}function j(){let{value:e}=v;e&&(e.style.display=`inline-block`)}c(a(n,`active`),e=>{e||k()}),c(a(n,`pattern`),()=>{n.multiple&&P(O)});function ee(e){let{onFocus:t}=n;t&&t(e)}function te(e){let{onBlur:t}=n;t&&t(e)}function N(e){let{onDeleteOption:t}=n;t&&t(e)}function ne(e){let{onClear:t}=n;t&&t(e)}function F(e){let{onPatternInput:t}=n;t&&t(e)}function L(e){(!e.relatedTarget||!u.value?.contains(e.relatedTarget))&&ee(e)}function z(e){u.value?.contains(e.relatedTarget)||te(e)}function B(e){ne(e)}function V(){S.value=!0}function H(){S.value=!1}function U(e){!n.active||!n.filterable||e.target!==l.value&&e.preventDefault()}function W(e){N(e)}let G=p(!1);function K(e){if(e.key===`Backspace`&&!G.value&&!n.pattern.length){let{selectedOptions:e}=n;e?.length&&W(e[e.length-1])}}let q=null;function ae(e){let{value:t}=s;t&&(t.textContent=e.target.value,O()),n.ignoreComposition&&G.value?q=e:F(e)}function oe(){G.value=!0}function se(){G.value=!1,n.ignoreComposition&&F(q),q=null}function ce(e){var t;b.value=!0,(t=n.onPatternFocus)==null||t.call(n,e)}function le(e){var t;b.value=!1,(t=n.onPatternBlur)==null||t.call(n,e)}function ue(){var e,t;if(n.filterable)b.value=!1,(e=m.value)==null||e.blur(),(t=l.value)==null||t.blur();else if(n.multiple){let{value:e}=d;e?.blur()}else{let{value:e}=f;e?.blur()}}function de(){var e,t,r;n.filterable?(b.value=!1,(e=m.value)==null||e.focus()):n.multiple?(t=d.value)==null||t.focus():(r=f.value)==null||r.focus()}function fe(){let{value:e}=l;e&&(j(),e.focus())}function J(){let{value:e}=l;e&&e.blur()}function pe(e){let{value:t}=h;t&&t.setTextContent(`+${e}`)}function Y(){let{value:e}=g;return e}function Z(){return l.value}let me=null;function he(){me!==null&&window.clearTimeout(me)}function ge(){n.active||(he(),me=window.setTimeout(()=>{D.value&&(y.value=!0)},100))}function _e(){he()}function ve(e){e||(he(),y.value=!1)}c(D,e=>{e||(y.value=!1)}),I(()=>{A(()=>{let e=m.value;e&&(n.disabled?e.removeAttribute(`tabindex`):e.tabIndex=b.value?-1:0)})}),Pe(u,n.onResize);let{inlineThemeDisabled:ye}=n,xe=x(()=>{let{size:r}=n,{common:{cubicBezierEaseInOut:i},self:{fontWeight:a,borderRadius:o,color:s,placeholderColor:c,textColor:l,paddingSingle:u,paddingMultiple:d,caretColor:f,colorDisabled:p,textColorDisabled:m,placeholderColorDisabled:h,colorActive:g,boxShadowFocus:_,boxShadowActive:v,boxShadowHover:y,border:b,borderFocus:x,borderHover:S,borderActive:w,arrowColor:T,arrowColorDisabled:E,loadingColor:D,colorActiveWarning:O,boxShadowFocusWarning:k,boxShadowActiveWarning:A,boxShadowHoverWarning:j,borderWarning:ee,borderFocusWarning:M,borderHoverWarning:te,borderActiveWarning:N,colorActiveError:P,boxShadowFocusError:ne,boxShadowActiveError:F,boxShadowHoverError:re,borderError:I,borderFocusError:ie,borderHoverError:L,borderActiveError:R,clearColor:z,clearColorHover:B,clearColorPressed:V,clearSize:H,arrowSize:U,[t(`height`,r)]:W,[t(`fontSize`,r)]:G}}=C.value,K=e(u),q=e(d);return{"--n-bezier":i,"--n-border":b,"--n-border-active":w,"--n-border-focus":x,"--n-border-hover":S,"--n-border-radius":o,"--n-box-shadow-active":v,"--n-box-shadow-focus":_,"--n-box-shadow-hover":y,"--n-caret-color":f,"--n-color":s,"--n-color-active":g,"--n-color-disabled":p,"--n-font-size":G,"--n-height":W,"--n-padding-single-top":K.top,"--n-padding-multiple-top":q.top,"--n-padding-single-right":K.right,"--n-padding-multiple-right":q.right,"--n-padding-single-left":K.left,"--n-padding-multiple-left":q.left,"--n-padding-single-bottom":K.bottom,"--n-padding-multiple-bottom":q.bottom,"--n-placeholder-color":c,"--n-placeholder-color-disabled":h,"--n-text-color":l,"--n-text-color-disabled":m,"--n-arrow-color":T,"--n-arrow-color-disabled":E,"--n-loading-color":D,"--n-color-active-warning":O,"--n-box-shadow-focus-warning":k,"--n-box-shadow-active-warning":A,"--n-box-shadow-hover-warning":j,"--n-border-warning":ee,"--n-border-focus-warning":M,"--n-border-hover-warning":te,"--n-border-active-warning":N,"--n-color-active-error":P,"--n-box-shadow-focus-error":ne,"--n-box-shadow-active-error":F,"--n-box-shadow-hover-error":re,"--n-border-error":I,"--n-border-focus-error":ie,"--n-border-hover-error":L,"--n-border-active-error":R,"--n-clear-size":H,"--n-clear-color":z,"--n-clear-color-hover":B,"--n-clear-color-pressed":V,"--n-arrow-size":U,"--n-font-weight":a}}),Se=ye?re(`internal-selection`,x(()=>n.size[0]),xe,n):void 0;return{mergedTheme:C,mergedClearable:w,mergedClsPrefix:r,rtlEnabled:o,patternInputFocused:b,filterablePlaceholder:T,label:E,selected:D,showTagsPanel:y,isComposing:G,counterRef:h,counterWrapperRef:g,patternInputMirrorRef:s,patternInputRef:l,selfRef:u,multipleElRef:d,singleElRef:f,patternInputWrapperRef:m,overflowRef:_,inputTagElRef:v,handleMouseDown:U,handleFocusin:L,handleClear:B,handleMouseEnter:V,handleMouseLeave:H,handleDeleteOption:W,handlePatternKeyDown:K,handlePatternInputInput:ae,handlePatternInputBlur:le,handlePatternInputFocus:ce,handleMouseEnterCounter:ge,handleMouseLeaveCounter:_e,handleFocusout:z,handleCompositionEnd:se,handleCompositionStart:oe,onPopoverUpdateShow:ve,focus:de,focusInput:fe,blur:ue,blurInput:J,updateCounter:pe,getCounter:Y,getTail:Z,renderLabel:n.renderLabel,cssVars:ye?void 0:xe,themeClass:Se?.themeClass,onRender:Se?.onRender}},render(){let{status:e,multiple:t,size:n,disabled:r,filterable:i,maxTagCount:a,bordered:o,clsPrefix:s,ellipsisTagPopoverProps:c,onRender:l,renderTag:u,renderLabel:d}=this;l?.();let f=a===`responsive`,p=typeof a==`number`,h=f||p,g=j(D,null,{default:()=>j(oe,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var e;return(e=this.$slots).arrow?.call(e)}})}),_;if(t){let{labelField:e}=this,t=t=>j(`div`,{class:`${s}-base-selection-tag-wrapper`,key:t.value},u?u({option:t,handleClose:()=>{this.handleDeleteOption(t)}}):j(Z,{size:n,closable:!t.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>d?d(t,!0):X(t[e],t,!0)})),o=()=>(p?this.selectedOptions.slice(0,a):this.selectedOptions).map(t),l=i?j(`div`,{class:`${s}-base-selection-input-tag`,ref:`inputTagElRef`,key:`__input-tag__`},j(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),j(`span`,{ref:`patternInputMirrorRef`,class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,v=f?()=>j(`div`,{class:`${s}-base-selection-tag-wrapper`,ref:`counterWrapperRef`},j(Z,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0,y;if(p){let e=this.selectedOptions.length-a;e>0&&(y=j(`div`,{class:`${s}-base-selection-tag-wrapper`,key:`__counter__`},j(Z,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${e}`})))}let b=f?i?j(Ne,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:v,tail:()=>l}):j(Ne,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:v}):p&&y?o().concat(y):o(),x=h?()=>j(`div`,{class:`${s}-base-selection-popover`},f?o():this.selectedOptions.map(t)):void 0,S=h?Object.assign({show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,C=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?j(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},j(`div`,{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):null,w=i?j(`div`,{ref:`patternInputWrapperRef`,class:`${s}-base-selection-tags`},b,f?null:l,g):j(`div`,{ref:`multipleElRef`,class:`${s}-base-selection-tags`,tabindex:r?void 0:0},b,g);_=j(m,null,h?j(ue,Object.assign({},S,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>w,default:x}):w,C)}else if(i){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=!this.active&&this.selected;_=j(`div`,{ref:`patternInputWrapperRef`,class:`${s}-base-selection-label`,title:this.patternInputFocused?void 0:xe(this.label)},j(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,class:`${s}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),n?j(`div`,{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:`input`},j(`div`,{class:`${s}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):X(this.label,this.selectedOption,!0))):null,t?j(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:`placeholder`},j(`div`,{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else _=j(`div`,{ref:`singleElRef`,class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label===void 0?j(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:`placeholder`},j(`div`,{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):j(`div`,{class:`${s}-base-selection-input`,title:xe(this.label),key:`input`},j(`div`,{class:`${s}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):X(this.label,this.selectedOption,!0))),g);return j(`div`,{ref:`selfRef`,class:[`${s}-base-selection`,this.rtlEnabled&&`${s}-base-selection--rtl`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},_,o?j(`div`,{class:`${s}-base-selection__border`}):null,o?j(`div`,{class:`${s}-base-selection__state-border`}):null)}});function Je(e){return e.type===`group`}function Ye(e){return e.type===`ignored`}function Xe(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Ze(e,t){return{getIsGroup:Je,getIgnored:Ye,getKey(t){return Je(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function Qe(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(Je(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(Ye(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function $e(e,t,n){let r=new Map;return e.forEach(e=>{Je(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var et=u([n(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),n(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[le({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),tt=F({name:`Select`,props:Object.assign(Object.assign({},R.props),{to:pe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:o}=M(e),l=R(`Select`,`-select`,et,ge,e,t),u=p(e.defaultValue),d=K(a(e,`value`),u),f=p(!1),m=p(``),h=q(e,[`items`,`options`]),g=p([]),v=p([]),y=x(()=>v.value.concat(g.value).concat(h.value)),C=x(()=>{let{filter:t}=e;if(t)return t;let{labelField:n,valueField:r}=e;return(e,t)=>{if(!t)return!1;let i=t[n];if(typeof i==`string`)return Xe(e,i);let a=t[r];return typeof a==`string`?Xe(e,a):typeof a==`number`&&Xe(e,String(a))}}),w=x(()=>{if(e.remote)return h.value;{let{value:t}=y,{value:n}=m;return!n.length||!e.filterable?t:Qe(t,C.value,n,e.childrenField)}}),T=x(()=>{let{valueField:t,childrenField:n}=e,r=Ze(t,n);return se(w.value,r)}),E=x(()=>$e(y.value,e.valueField,e.childrenField)),D=p(!1),O=K(a(e,`show`),D),k=p(null),A=p(null),j=p(null),{localeRef:ee}=ae(`Select`),te=x(()=>e.placeholder??ee.value.placeholder),N=[],P=p(new Map),ne=x(()=>{let{fallbackOption:t}=e;if(t===void 0){let{labelField:t,valueField:n}=e;return e=>({[t]:String(e),[n]:e})}return t===!1?!1:e=>Object.assign(t(e),{value:e})});function F(t){let n=e.remote,{value:r}=P,{value:i}=E,{value:a}=ne,o=[];return t.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(n&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let I=x(()=>{if(e.multiple){let{value:e}=d;return Array.isArray(e)?F(e):[]}return null}),ie=x(()=>{let{value:t}=d;return!e.multiple&&!Array.isArray(t)?t===null?null:F([t])[0]||null:null}),L=S(e,{mergedSize:t=>{let{size:n}=e;if(n)return n;let{mergedSize:r}=t||{};return r?.value?r.value:o?.value?.Select?.size||`medium`}}),{mergedSizeRef:z,mergedDisabledRef:B,mergedStatusRef:V}=L;function H(t,n){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=e,{nTriggerFormChange:o,nTriggerFormInput:s}=L;r&&b(r,t,n),a&&b(a,t,n),i&&b(i,t,n),u.value=t,o(),s()}function W(t){let{onBlur:n}=e,{nTriggerFormBlur:r}=L;n&&b(n,t),r()}function G(){let{onClear:t}=e;t&&b(t)}function oe(t){let{onFocus:n,showOnFocus:r}=e,{nTriggerFormFocus:i}=L;n&&b(n,t),i(),r&&J()}function le(t){let{onSearch:n}=e;n&&b(n,t)}function ue(t){let{onScroll:n}=e;n&&b(n,t)}function de(){var t;let{remote:n,multiple:r}=e;if(n){let{value:n}=P;if(r){let{valueField:r}=e;(t=I.value)==null||t.forEach(e=>{n.set(e[r],e)})}else{let t=ie.value;t&&n.set(t[e.valueField],t)}}}function fe(t){let{onUpdateShow:n,"onUpdate:show":r}=e;n&&b(n,t),r&&b(r,t),D.value=t}function J(){B.value||(fe(!0),D.value=!0,e.filterable&&Me())}function Y(){fe(!1)}function X(){m.value=``,v.value=N}let Z=p(!1);function me(){e.filterable&&(Z.value=!0)}function he(){e.filterable&&(Z.value=!1,O.value||X())}function _e(){B.value||(O.value?e.filterable?Me():Y():J())}function ve(e){(j.value?.selfRef)?.contains(e.relatedTarget)||(f.value=!1,W(e),Y())}function ye(e){oe(e),f.value=!0}function be(){f.value=!0}function xe(e){k.value?.$el.contains(e.relatedTarget)||(f.value=!1,W(e),Y())}function Se(){var e;(e=k.value)==null||e.focus(),Y()}function Ce(e){O.value&&(k.value?.$el.contains(s(e))||Y())}function we(t){if(!Array.isArray(t))return[];if(ne.value)return Array.from(t);{let{remote:n}=e,{value:r}=E;if(n){let{value:e}=P;return t.filter(t=>r.has(t)||e.has(t))}else return t.filter(e=>r.has(e))}}function Te(e){Q(e.rawNode)}function Q(t){if(B.value)return;let{tag:n,remote:r,clearFilterAfterSelect:i,valueField:a}=e;if(n&&!r){let{value:e}=v,t=e[0]||null;if(t){let e=g.value;e.length?e.push(t):g.value=[t],v.value=N}}if(r&&P.value.set(t[a],t),e.multiple){let e=we(d.value),o=e.findIndex(e=>e===t[a]);if(~o){if(e.splice(o,1),n&&!r){let e=Ee(t[a]);~e&&(g.value.splice(e,1),i&&(m.value=``))}}else e.push(t[a]),i&&(m.value=``);H(e,F(e))}else{if(n&&!r){let e=Ee(t[a]);~e?g.value=[g.value[e]]:g.value=N}$(),Y(),H(t[a],t)}}function Ee(t){return g.value.findIndex(n=>n[e.valueField]===t)}function De(t){O.value||J();let{value:n}=t.target;m.value=n;let{tag:r,remote:i}=e;if(le(n),r&&!i){if(!n){v.value=N;return}let{onCreate:t}=e,r=t?t(n):{[e.labelField]:n,[e.valueField]:n},{valueField:i,labelField:a}=e;h.value.some(e=>e[i]===r[i]||e[a]===r[a])||g.value.some(e=>e[i]===r[i]||e[a]===r[a])?v.value=N:v.value=[r]}}function Oe(t){t.stopPropagation();let{multiple:n,tag:r,remote:i,clearCreatedOptionsOnClear:a}=e;!n&&e.filterable&&Y(),r&&!i&&a&&(g.value=N),G(),n?H([],[]):H(null,null)}function ke(e){!U(e,`action`)&&!U(e,`empty`)&&!U(e,`header`)&&e.preventDefault()}function Ae(e){ue(e)}function je(t){var n,r,i;if(!e.keyboard){t.preventDefault();return}switch(t.key){case` `:if(e.filterable)break;t.preventDefault();case`Enter`:if(!k.value?.isComposing){if(O.value){let t=j.value?.getPendingTmNode();t?Te(t):e.filterable||(Y(),$())}else if(J(),e.tag&&Z.value){let t=v.value[0];if(t){let n=t[e.valueField],{value:r}=d;e.multiple&&Array.isArray(r)&&r.includes(n)||Q(t)}}}t.preventDefault();break;case`ArrowUp`:if(t.preventDefault(),e.loading)return;O.value&&((n=j.value)==null||n.prev());break;case`ArrowDown`:if(t.preventDefault(),e.loading)return;O.value?(r=j.value)==null||r.next():J();break;case`Escape`:O.value&&(ce(t),Y()),(i=k.value)==null||i.focus();break}}function $(){var e;(e=k.value)==null||e.focus()}function Me(){var e;(e=k.value)==null||e.focusInput()}function Ne(){var e;O.value&&((e=A.value)==null||e.syncPosition())}de(),c(a(e,`options`),de);let Pe={focus:()=>{var e;(e=k.value)==null||e.focus()},focusInput:()=>{var e;(e=k.value)==null||e.focusInput()},blur:()=>{var e;(e=k.value)==null||e.blur()},blurInput:()=>{var e;(e=k.value)==null||e.blurInput()}},Fe=x(()=>{let{self:{menuBoxShadow:e}}=l.value;return{"--n-menu-box-shadow":e}}),Ie=i?re(`select`,void 0,Fe,e):void 0;return Object.assign(Object.assign({},Pe),{mergedStatus:V,mergedClsPrefix:t,mergedBordered:n,namespace:r,treeMate:T,isMounted:_(),triggerRef:k,menuRef:j,pattern:m,uncontrolledShow:D,mergedShow:O,adjustedTo:pe(e),uncontrolledValue:u,mergedValue:d,followerRef:A,localizedPlaceholder:te,selectedOption:ie,selectedOptions:I,mergedSize:z,mergedDisabled:B,focused:f,activeWithoutMenuOpen:Z,inlineThemeDisabled:i,onTriggerInputFocus:me,onTriggerInputBlur:he,handleTriggerOrMenuResize:Ne,handleMenuFocus:be,handleMenuBlur:xe,handleMenuTabOut:Se,handleTriggerClick:_e,handleToggle:Te,handleDeleteOption:Q,handlePatternInput:De,handleClear:Oe,handleTriggerBlur:ve,handleTriggerFocus:ye,handleKeydown:je,handleMenuAfterLeave:X,handleMenuClickOutside:Ce,handleMenuScroll:Ae,handleMenuKeydown:je,handleMenuMousedown:ke,mergedTheme:l,cssVars:i?void 0:Fe,themeClass:Ie?.themeClass,onRender:Ie?.onRender})},render(){return j(`div`,{class:`${this.mergedClsPrefix}-select`},j(de,null,{default:()=>[j(he,null,{default:()=>j(qe,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e;return[(e=this.$slots).arrow?.call(e)]}})}),j(fe,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===pe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{default:()=>j(r,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e;return this.mergedShow||this.displayDirective===`show`?((e=this.onRender)==null||e.call(this),O(j(Ge,Object.assign({},this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var e;return[(e=this.$slots).empty?.call(e)]},header:()=>{var e;return[(e=this.$slots).header?.call(e)]},action:()=>{var e;return[(e=this.$slots).action?.call(e)]}}),this.displayDirective===`show`?[[i,this.mergedShow],[me,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[me,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{tt as t};