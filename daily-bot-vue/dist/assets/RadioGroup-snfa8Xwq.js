import{$t as e,Bn as t,Dn as n,F as r,Ft as i,Jt as a,M as o,Nt as s,Qt as c,St as l,Tn as u,Tt as d,Yt as f,Zt as p,_n as m,en as h,ft as g,kn as _,mt as v,nr as y,or as b,pt as x}from"./_plugin-vue_export-helper-BsiXA9v0.js";import{t as S}from"./use-merged-state-DTRBUz7X.js";import{t as C}from"./flatten-CX722JFU.js";import{t as w}from"./get-slot-6kXJmSMP.js";import{y as T}from"./index-Cou3F1PU.js";var E=f(`radio`,`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[c(`checked`,[p(`dot`,`
 background-color: var(--n-color-active);
 `)]),p(`dot-wrapper`,`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),f(`radio-input`,`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),p(`dot`,`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[a(`&::before`,`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),c(`checked`,{boxShadow:`var(--n-box-shadow-active)`},[a(`&::before`,`
 opacity: 1;
 transform: scale(1);
 `)])]),p(`label`,`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),e(`disabled`,`
 cursor: pointer;
 `,[a(`&:hover`,[p(`dot`,{boxShadow:`var(--n-box-shadow-hover)`})]),c(`focus`,[a(`&:not(:active)`,[p(`dot`,{boxShadow:`var(--n-box-shadow-focus)`})])])]),c(`disabled`,`
 cursor: not-allowed;
 `,[p(`dot`,{boxShadow:`var(--n-box-shadow-disabled)`,backgroundColor:`var(--n-color-disabled)`},[a(`&::before`,{backgroundColor:`var(--n-dot-color-disabled)`}),c(`checked`,`
 opacity: 1;
 `)]),p(`label`,{color:`var(--n-text-color-disabled)`}),f(`radio-input`,`
 cursor: not-allowed;
 `)])]),D={name:String,value:{type:[String,Number,Boolean],default:`on`},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},O=s(`n-radio-group`);function k(e){let t=_(O,null),{mergedClsPrefixRef:n,mergedComponentPropsRef:r}=v(e),a=g(e,{mergedSize(n){let{size:i}=e;if(i!==void 0)return i;if(t){let{mergedSizeRef:{value:e}}=t;if(e!==void 0)return e}return n?n.mergedSize.value:r?.value?.Radio?.size||`medium`},mergedDisabled(n){return!!(e.disabled||t?.disabledRef.value||n?.disabled.value)}}),{mergedSizeRef:o,mergedDisabledRef:s}=a,c=y(null),l=y(null),u=y(e.defaultChecked),f=S(b(e,`checked`),u),p=i(()=>t?t.valueRef.value===e.value:f.value),m=i(()=>{let{name:n}=e;if(n!==void 0)return n;if(t)return t.nameRef.value}),h=y(!1);function x(){if(t){let{doUpdateValue:n}=t,{value:r}=e;d(n,r)}else{let{onUpdateChecked:t,"onUpdate:checked":n}=e,{nTriggerFormInput:r,nTriggerFormChange:i}=a;t&&d(t,!0),n&&d(n,!0),r(),i(),u.value=!0}}function C(){s.value||p.value||x()}function w(){C(),c.value&&(c.value.checked=p.value)}function T(){h.value=!1}function E(){h.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:n,inputRef:c,labelRef:l,mergedName:m,mergedDisabled:s,renderSafeChecked:p,focus:h,mergedSize:o,handleRadioInputChange:w,handleRadioInputBlur:T,handleRadioInputFocus:E}}var A=u({name:`Radio`,props:Object.assign(Object.assign({},o.props),D),setup(e){let t=k(e),n=o(`Radio`,`-radio`,E,T,e,t.mergedClsPrefix),i=m(()=>{let{mergedSize:{value:e}}=t,{common:{cubicBezierEaseInOut:r},self:{boxShadow:i,boxShadowActive:a,boxShadowDisabled:o,boxShadowFocus:s,boxShadowHover:c,color:l,colorDisabled:u,colorActive:d,textColor:f,textColorDisabled:p,dotColorActive:m,dotColorDisabled:g,labelPadding:_,labelLineHeight:v,labelFontWeight:y,[h(`fontSize`,e)]:b,[h(`radioSize`,e)]:x}}=n.value;return{"--n-bezier":r,"--n-label-line-height":v,"--n-label-font-weight":y,"--n-box-shadow":i,"--n-box-shadow-active":a,"--n-box-shadow-disabled":o,"--n-box-shadow-focus":s,"--n-box-shadow-hover":c,"--n-color":l,"--n-color-active":d,"--n-color-disabled":u,"--n-dot-color-active":m,"--n-dot-color-disabled":g,"--n-font-size":b,"--n-radio-size":x,"--n-text-color":f,"--n-text-color-disabled":p,"--n-label-padding":_}}),{inlineThemeDisabled:a,mergedClsPrefixRef:s,mergedRtlRef:c}=v(e),l=r(`Radio`,c,s),u=a?x(`radio`,m(()=>t.mergedSize.value[0]),i,e):void 0;return Object.assign(t,{rtlEnabled:l,cssVars:a?void 0:i,themeClass:u?.themeClass,onRender:u?.onRender})},render(){let{$slots:e,mergedClsPrefix:t,onRender:r,label:i}=this;return r?.(),n(`label`,{class:[`${t}-radio`,this.themeClass,this.rtlEnabled&&`${t}-radio--rtl`,this.mergedDisabled&&`${t}-radio--disabled`,this.renderSafeChecked&&`${t}-radio--checked`,this.focus&&`${t}-radio--focus`],style:this.cssVars},n(`div`,{class:`${t}-radio__dot-wrapper`},`\xA0`,n(`div`,{class:[`${t}-radio__dot`,this.renderSafeChecked&&`${t}-radio__dot--checked`]}),n(`input`,{ref:`inputRef`,type:`radio`,class:`${t}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),l(e.default,e=>!e&&!i?null:n(`div`,{ref:`labelRef`,class:`${t}-radio__label`},e||i)))}}),j=f(`radio-group`,`
 display: inline-block;
 font-size: var(--n-font-size);
`,[p(`splitor`,`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[c(`checked`,{backgroundColor:`var(--n-button-border-color-active)`}),c(`disabled`,{opacity:`var(--n-opacity-disabled)`})]),c(`button-group`,`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[f(`radio-button`,{height:`var(--n-height)`,lineHeight:`var(--n-height)`}),p(`splitor`,{height:`var(--n-height)`})]),f(`radio-button`,`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[f(`radio-input`,`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),p(`state-border`,`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),a(`&:first-child`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[p(`state-border`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),a(`&:last-child`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[p(`state-border`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),e(`disabled`,`
 cursor: pointer;
 `,[a(`&:hover`,[p(`state-border`,`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),e(`checked`,{color:`var(--n-button-text-color-hover)`})]),c(`focus`,[a(`&:not(:active)`,[p(`state-border`,{boxShadow:`var(--n-button-box-shadow-focus)`})])])]),c(`checked`,`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),c(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function M(e,t,r){let i=[],a=!1;for(let o=0;o<e.length;++o){let s=e[o],c=s.type?.name;c===`RadioButton`&&(a=!0);let l=s.props;if(c!==`RadioButton`){i.push(s);continue}if(o===0)i.push(s);else{let e=i[i.length-1].props,a=t===e.value,o=e.disabled,c=t===l.value,u=l.disabled,d=(a?2:0)+ +!o,f=(c?2:0)+ +!u,p={[`${r}-radio-group__splitor--disabled`]:o,[`${r}-radio-group__splitor--checked`]:a},m={[`${r}-radio-group__splitor--disabled`]:u,[`${r}-radio-group__splitor--checked`]:c},h=d<f?m:p;i.push(n(`div`,{class:[`${r}-radio-group__splitor`,h]}),s)}}return{children:i,isButtonGroup:a}}var N=u({name:`RadioGroup`,props:Object.assign(Object.assign({},o.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(e){let n=y(null),{mergedSizeRef:i,mergedDisabledRef:a,nTriggerFormChange:s,nTriggerFormInput:c,nTriggerFormBlur:l,nTriggerFormFocus:u}=g(e),{mergedClsPrefixRef:f,inlineThemeDisabled:p,mergedRtlRef:_}=v(e),C=o(`Radio`,`-radio-group`,j,T,e,f),w=y(e.defaultValue),E=S(b(e,`value`),w);function D(t){let{onUpdateValue:n,"onUpdate:value":r}=e;n&&d(n,t),r&&d(r,t),w.value=t,s(),c()}function k(e){let{value:t}=n;t&&(t.contains(e.relatedTarget)||u())}function A(e){let{value:t}=n;t&&(t.contains(e.relatedTarget)||l())}t(O,{mergedClsPrefixRef:f,nameRef:b(e,`name`),valueRef:E,disabledRef:a,mergedSizeRef:i,doUpdateValue:D});let M=r(`Radio`,_,f),N=m(()=>{let{value:e}=i,{common:{cubicBezierEaseInOut:t},self:{buttonBorderColor:n,buttonBorderColorActive:r,buttonBorderRadius:a,buttonBoxShadow:o,buttonBoxShadowFocus:s,buttonBoxShadowHover:c,buttonColor:l,buttonColorActive:u,buttonTextColor:d,buttonTextColorActive:f,buttonTextColorHover:p,opacityDisabled:m,[h(`buttonHeight`,e)]:g,[h(`fontSize`,e)]:_}}=C.value;return{"--n-font-size":_,"--n-bezier":t,"--n-button-border-color":n,"--n-button-border-color-active":r,"--n-button-border-radius":a,"--n-button-box-shadow":o,"--n-button-box-shadow-focus":s,"--n-button-box-shadow-hover":c,"--n-button-color":l,"--n-button-color-active":u,"--n-button-text-color":d,"--n-button-text-color-hover":p,"--n-button-text-color-active":f,"--n-height":g,"--n-opacity-disabled":m}}),P=p?x(`radio-group`,m(()=>i.value[0]),N,e):void 0;return{selfElRef:n,rtlEnabled:M,mergedClsPrefix:f,mergedValue:E,handleFocusout:A,handleFocusin:k,cssVars:p?void 0:N,themeClass:P?.themeClass,onRender:P?.onRender}},render(){var e;let{mergedValue:t,mergedClsPrefix:r,handleFocusin:i,handleFocusout:a}=this,{children:o,isButtonGroup:s}=M(C(w(this)),t,r);return(e=this.onRender)==null||e.call(this),n(`div`,{onFocusin:i,onFocusout:a,ref:`selfElRef`,class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,s&&`${r}-radio-group--button-group`],style:this.cssVars},o)}});export{A as n,N as t};