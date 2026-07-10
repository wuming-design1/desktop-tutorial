import{Bn as e,Ht as t,Jt as n,Kt as r,S as i,Ut as a,Yn as o,b as s,bn as c,k as l,lt as u,tn as d,un as f,ut as p,vn as m,x as h,zt as g}from"./_plugin-vue_export-helper-Dw8IhM_J.js";import{t as _}from"./use-compitable-DkvQ82Ix.js";import{u as v}from"./index-0WQr_tjR.js";var y=t([t(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),a(`spin-container`,`
 position: relative;
 `,[a(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[s()])]),a(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),a(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[r(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),a(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),a(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[r(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),b={small:20,medium:18,large:16},x=m({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},l.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),i),slots:Object,setup(t){let{mergedClsPrefixRef:r,inlineThemeDisabled:i}=p(t),a=l(`Spin`,`-spin`,y,v,t,r),s=f(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:r},self:i}=a.value,{opacitySpinning:o,color:s,textColor:c}=i;return{"--n-bezier":r,"--n-opacity-spinning":o,"--n-size":typeof e==`number`?g(e):i[n(`size`,e)],"--n-color":s,"--n-text-color":c}}),c=i?u(`spin`,f(()=>{let{size:e}=t;return typeof e==`number`?String(e):e[0]}),s,t):void 0,d=_(t,[`spinning`,`show`]),m=o(!1);return e(e=>{let n;if(d.value){let{delay:r}=t;if(r){n=window.setTimeout(()=>{m.value=!0},r),e(()=>{clearTimeout(n)});return}}m.value=d.value}),{mergedClsPrefix:r,active:m,mergedStrokeWidth:f(()=>{let{strokeWidth:e}=t;if(e!==void 0)return e;let{size:n}=t;return b[typeof n==`number`?`medium`:n]}),cssVars:i?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){var e;let{$slots:t,mergedClsPrefix:n,description:r}=this,i=t.icon&&this.rotate,a=(r||t.description)&&c(`div`,{class:`${n}-spin-description`},r||t.description?.call(t)),o=t.icon?c(`div`,{class:[`${n}-spin-body`,this.themeClass]},c(`div`,{class:[`${n}-spin`,i&&`${n}-spin--rotate`],style:t.default?``:this.cssVars},t.icon()),a):c(`div`,{class:[`${n}-spin-body`,this.themeClass]},c(h,{clsPrefix:n,style:t.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${n}-spin`}),a);return(e=this.onRender)==null||e.call(this),t.default?c(`div`,{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},c(`div`,{class:[`${n}-spin-content`,this.active&&`${n}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),c(d,{name:`fade-in-transition`},{default:()=>this.active?o:null})):o}});export{x as t};