import{D as e,E as t,En as n,F as r,Gt as i,Jt as a,Kn as o,O as s,Qt as c,Yt as l,en as u,gn as d,gt as f,ht as p,sn as m,tr as h,wn as g}from"./_plugin-vue_export-helper-D7edCcqi.js";import{t as _}from"./use-compitable-Dr69dsK3.js";import{u as v}from"./index-1ii4vphs.js";var y=a([a(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),l(`spin-container`,`
 position: relative;
 `,[l(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[t()])]),l(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),l(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[c(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),l(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),l(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[c(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),b={small:20,medium:18,large:16},x=g({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},r.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),s),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=f(e),a=r(`Spin`,`-spin`,y,v,e,t),s=d(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:r}=a.value,{opacitySpinning:o,color:s,textColor:c}=r;return{"--n-bezier":n,"--n-opacity-spinning":o,"--n-size":typeof t==`number`?i(t):r[u(`size`,t)],"--n-color":s,"--n-text-color":c}}),c=n?p(`spin`,d(()=>{let{size:t}=e;return typeof t==`number`?String(t):t[0]}),s,e):void 0,l=_(e,[`spinning`,`show`]),m=h(!1);return o(t=>{let n;if(l.value){let{delay:r}=e;if(r){n=window.setTimeout(()=>{m.value=!0},r),t(()=>{clearTimeout(n)});return}}m.value=l.value}),{mergedClsPrefix:t,active:m,mergedStrokeWidth:d(()=>{let{strokeWidth:t}=e;if(t!==void 0)return t;let{size:n}=e;return b[typeof n==`number`?`medium`:n]}),cssVars:n?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){var t;let{$slots:r,mergedClsPrefix:i,description:a}=this,o=r.icon&&this.rotate,s=(a||r.description)&&n(`div`,{class:`${i}-spin-description`},a||r.description?.call(r)),c=r.icon?n(`div`,{class:[`${i}-spin-body`,this.themeClass]},n(`div`,{class:[`${i}-spin`,o&&`${i}-spin--rotate`],style:r.default?``:this.cssVars},r.icon()),s):n(`div`,{class:[`${i}-spin-body`,this.themeClass]},n(e,{clsPrefix:i,style:r.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${i}-spin`}),s);return(t=this.onRender)==null||t.call(this),r.default?n(`div`,{class:[`${i}-spin-container`,this.themeClass],style:this.cssVars},n(`div`,{class:[`${i}-spin-content`,this.active&&`${i}-spin-content--spinning`,this.contentClass],style:this.contentStyle},r),n(m,{name:`fade-in-transition`},{default:()=>this.active?c:null})):c}});export{x as t};