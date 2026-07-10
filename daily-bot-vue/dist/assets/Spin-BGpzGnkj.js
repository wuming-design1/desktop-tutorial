import{$n as e,E as t,Kt as n,N as r,Qt as i,Sn as a,T as o,Ut as s,Wn as c,Xt as l,an as u,mn as d,mt as f,pt as p,qt as m,w as h,wn as g}from"./_plugin-vue_export-helper-MsG4zd-3.js";import{t as _}from"./use-compitable-Defs-nss.js";import{u as v}from"./index-DfuKCr8-.js";var y=n([n(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),m(`spin-container`,`
 position: relative;
 `,[m(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[h()])]),m(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),m(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[l(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),m(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),m(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[l(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),b={small:20,medium:18,large:16},x=a({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},r.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),t),slots:Object,setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:a}=f(t),o=r(`Spin`,`-spin`,y,v,t,n),l=d(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:r}=o.value,{opacitySpinning:a,color:c,textColor:l}=r;return{"--n-bezier":n,"--n-opacity-spinning":a,"--n-size":typeof e==`number`?s(e):r[i(`size`,e)],"--n-color":c,"--n-text-color":l}}),u=a?p(`spin`,d(()=>{let{size:e}=t;return typeof e==`number`?String(e):e[0]}),l,t):void 0,m=_(t,[`spinning`,`show`]),h=e(!1);return c(e=>{let n;if(m.value){let{delay:r}=t;if(r){n=window.setTimeout(()=>{h.value=!0},r),e(()=>{clearTimeout(n)});return}}h.value=m.value}),{mergedClsPrefix:n,active:h,mergedStrokeWidth:d(()=>{let{strokeWidth:e}=t;if(e!==void 0)return e;let{size:n}=t;return b[typeof n==`number`?`medium`:n]}),cssVars:a?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){var e;let{$slots:t,mergedClsPrefix:n,description:r}=this,i=t.icon&&this.rotate,a=(r||t.description)&&g(`div`,{class:`${n}-spin-description`},r||t.description?.call(t)),s=t.icon?g(`div`,{class:[`${n}-spin-body`,this.themeClass]},g(`div`,{class:[`${n}-spin`,i&&`${n}-spin--rotate`],style:t.default?``:this.cssVars},t.icon()),a):g(`div`,{class:[`${n}-spin-body`,this.themeClass]},g(o,{clsPrefix:n,style:t.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${n}-spin`}),a);return(e=this.onRender)==null||e.call(this),t.default?g(`div`,{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},g(`div`,{class:[`${n}-spin-content`,this.active&&`${n}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),g(u,{name:`fade-in-transition`},{default:()=>this.active?s:null})):s}});export{x as t};