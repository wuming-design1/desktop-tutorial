import{An as e,Bt as t,Ft as n,Gt as r,Hn as i,Pt as a,Rt as o,cn as s,en as c,f as l,jt as u,m as d,nt as f,p,tt as m,un as h,x as g}from"./_plugin-vue_export-helper-Diu8tYPd.js";import{t as _}from"./use-compitable-C3wbvlY-.js";import{l as v}from"./index-CbVfxkmi.js";var y=a([a(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),n(`spin-container`,`
 position: relative;
 `,[n(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[l()])]),n(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),n(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[o(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),n(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),n(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[o(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),b={small:20,medium:18,large:16},x=s({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},g.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),d),slots:Object,setup(n){let{mergedClsPrefixRef:r,inlineThemeDisabled:a}=f(n),o=g(`Spin`,`-spin`,y,v,n,r),s=c(()=>{let{size:e}=n,{common:{cubicBezierEaseInOut:r},self:i}=o.value,{opacitySpinning:a,color:s,textColor:c}=i;return{"--n-bezier":r,"--n-opacity-spinning":a,"--n-size":typeof e==`number`?u(e):i[t(`size`,e)],"--n-color":s,"--n-text-color":c}}),l=a?m(`spin`,c(()=>{let{size:e}=n;return typeof e==`number`?String(e):e[0]}),s,n):void 0,d=_(n,[`spinning`,`show`]),p=i(!1);return e(e=>{let t;if(d.value){let{delay:r}=n;if(r){t=window.setTimeout(()=>{p.value=!0},r),e(()=>{clearTimeout(t)});return}}p.value=d.value}),{mergedClsPrefix:r,active:p,mergedStrokeWidth:c(()=>{let{strokeWidth:e}=n;if(e!==void 0)return e;let{size:t}=n;return b[typeof t==`number`?`medium`:t]}),cssVars:a?void 0:s,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e;let{$slots:t,mergedClsPrefix:n,description:i}=this,a=t.icon&&this.rotate,o=(i||t.description)&&h(`div`,{class:`${n}-spin-description`},i||t.description?.call(t)),s=t.icon?h(`div`,{class:[`${n}-spin-body`,this.themeClass]},h(`div`,{class:[`${n}-spin`,a&&`${n}-spin--rotate`],style:t.default?``:this.cssVars},t.icon()),o):h(`div`,{class:[`${n}-spin-body`,this.themeClass]},h(p,{clsPrefix:n,style:t.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${n}-spin`}),o);return(e=this.onRender)==null||e.call(this),t.default?h(`div`,{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},h(`div`,{class:[`${n}-spin-content`,this.active&&`${n}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),h(r,{name:`fade-in-transition`},{default:()=>this.active?s:null})):s}});export{x as t};