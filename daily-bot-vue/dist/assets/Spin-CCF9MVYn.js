import{Dn as e,E as t,Gt as n,Jt as r,M as i,Qt as a,T as o,Tn as s,Yt as c,_n as l,en as u,mt as d,nr as f,pt as p,qn as m,sn as h,w as g}from"./_plugin-vue_export-helper-BsiXA9v0.js";import{t as _}from"./use-compitable-BSvmeYLK.js";import{d as v}from"./index-Cou3F1PU.js";var y=r([r(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c(`spin-container`,`
 position: relative;
 `,[c(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[g()])]),c(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[a(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),c(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[a(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),b={small:20,medium:18,large:16},x=s({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},i.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),t),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:r}=d(e),a=i(`Spin`,`-spin`,y,v,e,t),o=l(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:r},self:i}=a.value,{opacitySpinning:o,color:s,textColor:c}=i;return{"--n-bezier":r,"--n-opacity-spinning":o,"--n-size":typeof t==`number`?n(t):i[u(`size`,t)],"--n-color":s,"--n-text-color":c}}),s=r?p(`spin`,l(()=>{let{size:t}=e;return typeof t==`number`?String(t):t[0]}),o,e):void 0,c=_(e,[`spinning`,`show`]),h=f(!1);return m(t=>{let n;if(c.value){let{delay:r}=e;if(r){n=window.setTimeout(()=>{h.value=!0},r),t(()=>{clearTimeout(n)});return}}h.value=c.value}),{mergedClsPrefix:t,active:h,mergedStrokeWidth:l(()=>{let{strokeWidth:t}=e;if(t!==void 0)return t;let{size:n}=e;return b[typeof n==`number`?`medium`:n]}),cssVars:r?void 0:o,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var t;let{$slots:n,mergedClsPrefix:r,description:i}=this,a=n.icon&&this.rotate,s=(i||n.description)&&e(`div`,{class:`${r}-spin-description`},i||n.description?.call(n)),c=n.icon?e(`div`,{class:[`${r}-spin-body`,this.themeClass]},e(`div`,{class:[`${r}-spin`,a&&`${r}-spin--rotate`],style:n.default?``:this.cssVars},n.icon()),s):e(`div`,{class:[`${r}-spin-body`,this.themeClass]},e(o,{clsPrefix:r,style:n.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${r}-spin`}),s);return(t=this.onRender)==null||t.call(this),n.default?e(`div`,{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},e(`div`,{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},n),e(h,{name:`fade-in-transition`},{default:()=>this.active?c:null})):c}});export{x as t};