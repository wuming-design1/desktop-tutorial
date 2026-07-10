import{Bt as e,Ft as t,Gt as n,Pt as r,Rt as i,Vn as a,en as o,f as s,jt as c,kn as l,ln as u,m as d,nt as f,p,sn as m,tt as h,x as g}from"./_plugin-vue_export-helper-CCvUJjhJ.js";import{t as _}from"./use-compitable-DWNDaUpo.js";import{u as v}from"./index-OlDhySiI.js";var y=r([r(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),t(`spin-container`,`
 position: relative;
 `,[t(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[s()])]),t(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),t(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[i(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),t(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),t(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[i(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),b={small:20,medium:18,large:16},x=m({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},g.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),d),slots:Object,setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:r}=f(t),i=g(`Spin`,`-spin`,y,v,t,n),s=o(()=>{let{size:n}=t,{common:{cubicBezierEaseInOut:r},self:a}=i.value,{opacitySpinning:o,color:s,textColor:l}=a;return{"--n-bezier":r,"--n-opacity-spinning":o,"--n-size":typeof n==`number`?c(n):a[e(`size`,n)],"--n-color":s,"--n-text-color":l}}),u=r?h(`spin`,o(()=>{let{size:e}=t;return typeof e==`number`?String(e):e[0]}),s,t):void 0,d=_(t,[`spinning`,`show`]),p=a(!1);return l(e=>{let n;if(d.value){let{delay:r}=t;if(r){n=window.setTimeout(()=>{p.value=!0},r),e(()=>{clearTimeout(n)});return}}p.value=d.value}),{mergedClsPrefix:n,active:p,mergedStrokeWidth:o(()=>{let{strokeWidth:e}=t;if(e!==void 0)return e;let{size:n}=t;return b[typeof n==`number`?`medium`:n]}),cssVars:r?void 0:s,themeClass:u?.themeClass,onRender:u?.onRender}},render(){var e;let{$slots:t,mergedClsPrefix:r,description:i}=this,a=t.icon&&this.rotate,o=(i||t.description)&&u(`div`,{class:`${r}-spin-description`},i||t.description?.call(t)),s=t.icon?u(`div`,{class:[`${r}-spin-body`,this.themeClass]},u(`div`,{class:[`${r}-spin`,a&&`${r}-spin--rotate`],style:t.default?``:this.cssVars},t.icon()),o):u(`div`,{class:[`${r}-spin-body`,this.themeClass]},u(p,{clsPrefix:r,style:t.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${r}-spin`}),o);return(e=this.onRender)==null||e.call(this),t.default?u(`div`,{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},u(`div`,{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),u(n,{name:`fade-in-transition`},{default:()=>this.active?s:null})):s}});export{x as t};