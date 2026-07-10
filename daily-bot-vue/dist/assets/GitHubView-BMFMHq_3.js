import{$t as e,Bn as t,Cn as n,En as r,F as i,Fn as a,Ft as o,Jt as s,Nt as c,On as l,Qt as u,R as d,Rn as f,Sn as p,St as m,Tt as h,Yt as g,Zt as _,_n as v,ar as y,bn as b,cr as x,dr as S,en as C,fn as w,g as T,gn as E,gt as D,h as O,ht as k,i as A,mt as j,qn as M,r as ee,t as N,tr as P,wn as F,yn as I,zn as L}from"./_plugin-vue_export-helper-D7edCcqi.js";import{t as R}from"./use-merged-state-BhhvU6px.js";import{t as z}from"./flatten-FRa1KaPK.js";import{t as B}from"./get-slot-6kXJmSMP.js";import{t as V}from"./Spin-CX5ts--m.js";import{T as H,g as U,m as te,r as ne,x as W,y as G}from"./index-1ii4vphs.js";var K=g(`radio`,`
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
`,[u(`checked`,[_(`dot`,`
 background-color: var(--n-color-active);
 `)]),_(`dot-wrapper`,`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),g(`radio-input`,`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),_(`dot`,`
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
 `,[s(`&::before`,`
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
 `),u(`checked`,{boxShadow:`var(--n-box-shadow-active)`},[s(`&::before`,`
 opacity: 1;
 transform: scale(1);
 `)])]),_(`label`,`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),e(`disabled`,`
 cursor: pointer;
 `,[s(`&:hover`,[_(`dot`,{boxShadow:`var(--n-box-shadow-hover)`})]),u(`focus`,[s(`&:not(:active)`,[_(`dot`,{boxShadow:`var(--n-box-shadow-focus)`})])])]),u(`disabled`,`
 cursor: not-allowed;
 `,[_(`dot`,{boxShadow:`var(--n-box-shadow-disabled)`,backgroundColor:`var(--n-color-disabled)`},[s(`&::before`,{backgroundColor:`var(--n-dot-color-disabled)`}),u(`checked`,`
 opacity: 1;
 `)]),_(`label`,{color:`var(--n-text-color-disabled)`}),g(`radio-input`,`
 cursor: not-allowed;
 `)])]),q={name:String,value:{type:[String,Number,Boolean],default:`on`},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},J=c(`n-radio-group`);function Y(e){let t=l(J,null),{mergedClsPrefixRef:n,mergedComponentPropsRef:r}=D(e),i=j(e,{mergedSize(n){let{size:i}=e;if(i!==void 0)return i;if(t){let{mergedSizeRef:{value:e}}=t;if(e!==void 0)return e}return n?n.mergedSize.value:r?.value?.Radio?.size||`medium`},mergedDisabled(n){return!!(e.disabled||t?.disabledRef.value||n?.disabled.value)}}),{mergedSizeRef:a,mergedDisabledRef:s}=i,c=P(null),u=P(null),d=P(e.defaultChecked),f=R(y(e,`checked`),d),p=o(()=>t?t.valueRef.value===e.value:f.value),m=o(()=>{let{name:n}=e;if(n!==void 0)return n;if(t)return t.nameRef.value}),g=P(!1);function _(){if(t){let{doUpdateValue:n}=t,{value:r}=e;h(n,r)}else{let{onUpdateChecked:t,"onUpdate:checked":n}=e,{nTriggerFormInput:r,nTriggerFormChange:a}=i;t&&h(t,!0),n&&h(n,!0),r(),a(),d.value=!0}}function v(){s.value||p.value||_()}function b(){v(),c.value&&(c.value.checked=p.value)}function x(){g.value=!1}function S(){g.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:n,inputRef:c,labelRef:u,mergedName:m,mergedDisabled:s,renderSafeChecked:p,focus:g,mergedSize:a,handleRadioInputChange:b,handleRadioInputBlur:x,handleRadioInputFocus:S}}var re=F({name:`Radio`,props:Object.assign(Object.assign({},i.props),q),setup(e){let t=Y(e),n=i(`Radio`,`-radio`,K,U,e,t.mergedClsPrefix),r=E(()=>{let{mergedSize:{value:e}}=t,{common:{cubicBezierEaseInOut:r},self:{boxShadow:i,boxShadowActive:a,boxShadowDisabled:o,boxShadowFocus:s,boxShadowHover:c,color:l,colorDisabled:u,colorActive:d,textColor:f,textColorDisabled:p,dotColorActive:m,dotColorDisabled:h,labelPadding:g,labelLineHeight:_,labelFontWeight:v,[C(`fontSize`,e)]:y,[C(`radioSize`,e)]:b}}=n.value;return{"--n-bezier":r,"--n-label-line-height":_,"--n-label-font-weight":v,"--n-box-shadow":i,"--n-box-shadow-active":a,"--n-box-shadow-disabled":o,"--n-box-shadow-focus":s,"--n-box-shadow-hover":c,"--n-color":l,"--n-color-active":d,"--n-color-disabled":u,"--n-dot-color-active":m,"--n-dot-color-disabled":h,"--n-font-size":y,"--n-radio-size":b,"--n-text-color":f,"--n-text-color-disabled":p,"--n-label-padding":g}}),{inlineThemeDisabled:a,mergedClsPrefixRef:o,mergedRtlRef:s}=D(e),c=d(`Radio`,s,o),l=a?k(`radio`,E(()=>t.mergedSize.value[0]),r,e):void 0;return Object.assign(t,{rtlEnabled:c,cssVars:a?void 0:r,themeClass:l?.themeClass,onRender:l?.onRender})},render(){let{$slots:e,mergedClsPrefix:t,onRender:n,label:i}=this;return n?.(),r(`label`,{class:[`${t}-radio`,this.themeClass,this.rtlEnabled&&`${t}-radio--rtl`,this.mergedDisabled&&`${t}-radio--disabled`,this.renderSafeChecked&&`${t}-radio--checked`,this.focus&&`${t}-radio--focus`],style:this.cssVars},r(`div`,{class:`${t}-radio__dot-wrapper`},`\xA0`,r(`div`,{class:[`${t}-radio__dot`,this.renderSafeChecked&&`${t}-radio__dot--checked`]}),r(`input`,{ref:`inputRef`,type:`radio`,class:`${t}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),m(e.default,e=>!e&&!i?null:r(`div`,{ref:`labelRef`,class:`${t}-radio__label`},e||i)))}}),X=g(`radio-group`,`
 display: inline-block;
 font-size: var(--n-font-size);
`,[_(`splitor`,`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[u(`checked`,{backgroundColor:`var(--n-button-border-color-active)`}),u(`disabled`,{opacity:`var(--n-opacity-disabled)`})]),u(`button-group`,`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[g(`radio-button`,{height:`var(--n-height)`,lineHeight:`var(--n-height)`}),_(`splitor`,{height:`var(--n-height)`})]),g(`radio-button`,`
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
 `,[g(`radio-input`,`
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
 `),_(`state-border`,`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),s(`&:first-child`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[_(`state-border`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),s(`&:last-child`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[_(`state-border`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),e(`disabled`,`
 cursor: pointer;
 `,[s(`&:hover`,[_(`state-border`,`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),e(`checked`,{color:`var(--n-button-text-color-hover)`})]),u(`focus`,[s(`&:not(:active)`,[_(`state-border`,{boxShadow:`var(--n-button-box-shadow-focus)`})])])]),u(`checked`,`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),u(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Z(e,t,n){let i=[],a=!1;for(let o=0;o<e.length;++o){let s=e[o],c=s.type?.name;c===`RadioButton`&&(a=!0);let l=s.props;if(c!==`RadioButton`){i.push(s);continue}if(o===0)i.push(s);else{let e=i[i.length-1].props,a=t===e.value,o=e.disabled,c=t===l.value,u=l.disabled,d=(a?2:0)+ +!o,f=(c?2:0)+ +!u,p={[`${n}-radio-group__splitor--disabled`]:o,[`${n}-radio-group__splitor--checked`]:a},m={[`${n}-radio-group__splitor--disabled`]:u,[`${n}-radio-group__splitor--checked`]:c},h=d<f?m:p;i.push(r(`div`,{class:[`${n}-radio-group__splitor`,h]}),s)}}return{children:i,isButtonGroup:a}}var ie=F({name:`RadioGroup`,props:Object.assign(Object.assign({},i.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(e){let t=P(null),{mergedSizeRef:n,mergedDisabledRef:r,nTriggerFormChange:a,nTriggerFormInput:o,nTriggerFormBlur:s,nTriggerFormFocus:c}=j(e),{mergedClsPrefixRef:l,inlineThemeDisabled:u,mergedRtlRef:f}=D(e),p=i(`Radio`,`-radio-group`,X,U,e,l),m=P(e.defaultValue),g=R(y(e,`value`),m);function _(t){let{onUpdateValue:n,"onUpdate:value":r}=e;n&&h(n,t),r&&h(r,t),m.value=t,a(),o()}function v(e){let{value:n}=t;n&&(n.contains(e.relatedTarget)||c())}function b(e){let{value:n}=t;n&&(n.contains(e.relatedTarget)||s())}L(J,{mergedClsPrefixRef:l,nameRef:y(e,`name`),valueRef:g,disabledRef:r,mergedSizeRef:n,doUpdateValue:_});let x=d(`Radio`,f,l),S=E(()=>{let{value:e}=n,{common:{cubicBezierEaseInOut:t},self:{buttonBorderColor:r,buttonBorderColorActive:i,buttonBorderRadius:a,buttonBoxShadow:o,buttonBoxShadowFocus:s,buttonBoxShadowHover:c,buttonColor:l,buttonColorActive:u,buttonTextColor:d,buttonTextColorActive:f,buttonTextColorHover:m,opacityDisabled:h,[C(`buttonHeight`,e)]:g,[C(`fontSize`,e)]:_}}=p.value;return{"--n-font-size":_,"--n-bezier":t,"--n-button-border-color":r,"--n-button-border-color-active":i,"--n-button-border-radius":a,"--n-button-box-shadow":o,"--n-button-box-shadow-focus":s,"--n-button-box-shadow-hover":c,"--n-button-color":l,"--n-button-color-active":u,"--n-button-text-color":d,"--n-button-text-color-hover":m,"--n-button-text-color-active":f,"--n-height":g,"--n-opacity-disabled":h}}),w=u?k(`radio-group`,E(()=>n.value[0]),S,e):void 0;return{selfElRef:t,rtlEnabled:x,mergedClsPrefix:l,mergedValue:g,handleFocusout:b,handleFocusin:v,cssVars:u?void 0:S,themeClass:w?.themeClass,onRender:w?.onRender}},render(){var e;let{mergedValue:t,mergedClsPrefix:n,handleFocusin:i,handleFocusout:a}=this,{children:o,isButtonGroup:s}=Z(z(B(this)),t,n);return(e=this.onRender)==null||e.call(this),r(`div`,{onFocusin:i,onFocusout:a,ref:`selfElRef`,class:[`${n}-radio-group`,this.rtlEnabled&&`${n}-radio-group--rtl`,this.themeClass,s&&`${n}-radio-group--button-group`],style:this.cssVars},o)}}),ae={class:`github-view`},oe={class:`config-row`},se={class:`config-item`},ce={class:`config-item`},le={class:`config-value`},ue={key:0,class:`empty-hint`},de={key:1,class:`empty-hint`},fe={key:2,class:`commit-list`},pe=[`src`],me={class:`commit-info`},he={class:`commit-message`},ge={class:`commit-meta`},_e={class:`commit-date`},ve={key:0,class:`empty-hint`},ye={key:1,class:`empty-hint`},be={key:2,class:`pr-list`},xe={class:`pr-info`},Se=[`href`],Q={class:`pr-meta`},Ce={key:0,class:`empty-hint`},we={key:1,class:`pr-create-form`},Te={class:`form-row`},Ee={key:0,class:`form-section`},De={class:`form-row`},Oe={class:`form-row`},ke={key:1,class:`form-section`},Ae={class:`form-row`},je={class:`form-row`},Me={class:`form-row`},Ne={class:`form-row`},Pe={class:`form-actions`},Fe={key:2,class:`pr-result`},Ie=[`href`],Le={class:`pr-result-branch`},Re={key:0,class:`pr-result-files`},ze={class:`gitee-list`},Be=[`onClick`],Ve={class:`gitee-rank`},He={class:`gitee-info`},Ue={class:`gitee-name`},We={class:`gitee-desc`},Ge={class:`gitee-meta`},Ke={class:`gitee-stars`},qe={key:0,class:`gitee-lang`},Je={class:`gitee-forks`},$=N(F({__name:`GitHubView`,setup(e){let r=ne(),i=te(),o=E(()=>r.getCred(`GITHUB_TOKEN`)||``),s=E(()=>r.getCred(`GITHUB_REPO`)||``),c=E(()=>r.isConnected(`github`)),l=P(!1),u=P(!1),d=P(!1),m=P([]),h=P([]),g=P(!1),_=P([]),y=P(!1),C=[{full_name:`mindspore/mindspore`,html_url:`https://gitee.com/mindspore/mindspore`,description:`MindSpore is a new open source deep learning training/inference framework that could be used for mobile, edge and cloud scenarios.`,stargazers_count:9078,language:`Python`,forks_count:1200},{full_name:`HimitZH/HOJ`,html_url:`https://gitee.com/HimitZH/HOJ`,description:`HOJ 是一个分布式、可扩展的在线评测系统。`,stargazers_count:1005,language:`Java`,forks_count:320},{full_name:`soloncode/solon`,html_url:`https://gitee.com/soloncode/solon`,description:`Solon 是一个高效的 Java 应用开发框架：更快、更小、更简单。`,stargazers_count:143,language:`Java`,forks_count:56}],D=[`🥇`,`🥈`,`🥉`],k=P(`upload`),j=P(``),N=P(``),F=P(``),L=P(``),R=P(``),z=P(``),B=P(!1),U=P(null),K=[{label:`上传文件`,value:`upload`},{label:`Git 暂存区`,value:`staging`}];async function q(){if(!o.value||!s.value){i.warning(`请先填写 Token 和仓库名称`);return}l.value=!0;try{let[e,t]=s.value.split(`/`);await O.get(`https://api.github.com/repos/${e}/${t}`,{headers:{Authorization:`Bearer ${o.value}`}}),i.success(`连接成功`)}catch(e){i.error(`连接失败: ${e?.response?.data?.message||e.message}`)}finally{l.value=!1}}async function J(){if(!(!o.value||!s.value)){u.value=!0;try{let[e,t]=s.value.split(`/`),n=new Date;n.setHours(0,0,0,0);let{data:r}=await O.get(`https://api.github.com/repos/${e}/${t}/commits`,{headers:{Authorization:`Bearer ${o.value}`},params:{since:n.toISOString(),per_page:20}});m.value=r.map(e=>({sha:e.sha?.slice(0,7),message:e.commit?.message?.split(`
`)[0]||``,author:e.commit?.author?.name||``,date:e.commit?.author?.date||``,avatar:e.author?.avatar_url||``}))}catch(e){i.error(`获取提交失败: ${e?.response?.data?.message||e.message}`)}finally{u.value=!1}}}async function Y(){if(!(!o.value||!s.value)){d.value=!0;try{let[e,t]=s.value.split(`/`),{data:n}=await O.get(`https://api.github.com/repos/${e}/${t}/pulls`,{headers:{Authorization:`Bearer ${o.value}`},params:{state:`all`,per_page:20,sort:`updated`,direction:`desc`}});h.value=n.map(e=>({number:e.number,title:e.title,state:e.state,user:e.user?.login||``,created_at:e.created_at,html_url:e.html_url}))}catch(e){i.error(`获取 PR 失败: ${e?.response?.data?.message||e.message}`)}finally{d.value=!1}}}async function X(){g.value=!0,y.value=!1;try{let{data:e}=await O.get(`https://gitee.com/api/v5/search/repositories`,{params:{q:`stars:>100`,sortby:`stars`,order:`desc`,per_page:3}});e&&Array.isArray(e)&&e.length>0?_.value=e.slice(0,3):_.value=C}catch{y.value=!0,_.value=C}finally{g.value=!1}}function Z(e){window.open(e,`_blank`)}async function $(){if(!j.value.trim()){i.warning(`请输入 PR 标题`);return}if(!c.value){i.warning(`请先配置 GitHub 凭证`);return}B.value=!0,U.value=null;try{if(k.value===`upload`){if(!R.value.trim()){i.warning(`请输入文件内容`),B.value=!1;return}let e=new FormData;e.append(`title`,j.value),e.append(`body`,N.value),e.append(`branch`,F.value),e.append(`filePath`,L.value||`file.txt`),e.append(`fileContent`,R.value);let t=await A(e);U.value=t,i.success(`PR #${t.number} 创建成功`)}else{if(!z.value.trim()){i.warning(`请输入本地仓库路径`),B.value=!1;return}let e=await ee({title:j.value,body:N.value,branch:F.value,repoPath:z.value});U.value=e,i.success(`PR #${e.number} 创建成功 (${e.files?.length||0} 个文件)`)}Y()}catch(e){i.error(`创建 PR 失败: ${e?.response?.data?.error||e.message}`)}finally{B.value=!1}}return a(()=>{c.value&&(J(),Y()),X()}),(e,r)=>(f(),b(`div`,ae,[r[19]||=v(`h2`,{class:`page-title`},`🔗 代码动态`,-1),n(x(T),{title:`仓库配置`,class:`config-card`},{default:M(()=>[v(`div`,oe,[v(`div`,se,[r[7]||=v(`span`,{class:`config-label`},`Token 状态`,-1),n(x(H),{type:c.value?`success`:`error`,size:`small`},{default:M(()=>[p(S(c.value?`已配置`:`未配置`),1)]),_:1},8,[`type`])]),v(`div`,ce,[r[8]||=v(`span`,{class:`config-label`},`仓库名称`,-1),v(`span`,le,S(s.value||`未设置`),1)]),n(x(G),{type:`primary`,loading:l.value,onClick:q,size:`small`},{default:M(()=>[...r[9]||=[p(` 测试连接 `,-1)]]),_:1},8,[`loading`])])]),_:1}),n(x(T),{title:`📝 今日提交`,class:`content-card`},{default:M(()=>[n(x(V),{show:u.value},{default:M(()=>[c.value?m.value.length===0?(f(),b(`div`,de,`暂无提交记录`)):(f(),b(`div`,fe,[(f(!0),b(w,null,t(m.value,e=>(f(),b(`div`,{key:e.sha,class:`commit-item`},[e.avatar?(f(),b(`img`,{key:0,src:e.avatar,class:`commit-avatar`,alt:``},null,8,pe)):I(``,!0),v(`div`,me,[v(`span`,he,S(e.message),1),v(`span`,ge,S(e.author)+` · `+S(e.sha),1)]),v(`span`,_e,S(e.date?.slice(0,10)),1)]))),128))])):(f(),b(`div`,ue,`请先配置 GitHub Token 和仓库名称`))]),_:1},8,[`show`])]),_:1}),n(x(T),{title:`🔀 拉取请求`,class:`content-card`},{default:M(()=>[n(x(V),{show:d.value},{default:M(()=>[c.value?h.value.length===0?(f(),b(`div`,ye,`暂无 PR 记录`)):(f(),b(`div`,be,[(f(!0),b(w,null,t(h.value,e=>(f(),b(`div`,{key:e.number,class:`pr-item`},[v(`div`,xe,[v(`a`,{href:e.html_url,target:`_blank`,class:`pr-title`},`#`+S(e.number)+` `+S(e.title),9,Se),v(`span`,Q,S(e.user),1)]),n(x(H),{type:e.state===`open`?`success`:`default`,size:`small`},{default:M(()=>[p(S(e.state===`open`?`Open`:`Closed`),1)]),_:2},1032,[`type`])]))),128))])):(f(),b(`div`,ve,`请先配置 GitHub Token 和仓库名称`))]),_:1},8,[`show`])]),_:1}),n(x(T),{title:`➕ 创建拉取请求`,class:`content-card`},{default:M(()=>[c.value?(f(),b(`div`,we,[v(`div`,Te,[r[10]||=v(`span`,{class:`form-label`},`创建方式`,-1),n(x(ie),{value:k.value,"onUpdate:value":r[0]||=e=>k.value=e,name:`pr-mode`},{default:M(()=>[(f(),b(w,null,t(K,e=>n(x(re),{key:e.value,value:e.value},{default:M(()=>[p(S(e.label),1)]),_:2},1032,[`value`])),64))]),_:1},8,[`value`])]),k.value===`upload`?(f(),b(`div`,Ee,[v(`div`,De,[r[11]||=v(`span`,{class:`form-label`},`文件路径`,-1),n(x(W),{value:L.value,"onUpdate:value":r[1]||=e=>L.value=e,placeholder:`src/example.ts`,style:{flex:`1`}},null,8,[`value`])]),v(`div`,Oe,[r[12]||=v(`span`,{class:`form-label`},`文件内容`,-1),n(x(W),{value:R.value,"onUpdate:value":r[2]||=e=>R.value=e,type:`textarea`,placeholder:`输入文件内容...`,autosize:{minRows:4,maxRows:12},style:{flex:`1`}},null,8,[`value`])])])):(f(),b(`div`,ke,[v(`div`,Ae,[r[13]||=v(`span`,{class:`form-label`},`仓库路径`,-1),n(x(W),{value:z.value,"onUpdate:value":r[3]||=e=>z.value=e,placeholder:`/path/to/your/git/repo`,style:{flex:`1`}},null,8,[`value`])]),r[14]||=v(`div`,{class:`form-hint`},` 后端服务器将读取该路径下 Git 暂存区（git add 后的文件），自动创建分支和 PR `,-1)])),v(`div`,je,[r[15]||=v(`span`,{class:`form-label`},`新分支名`,-1),n(x(W),{value:F.value,"onUpdate:value":r[4]||=e=>F.value=e,placeholder:`留空自动生成`,style:{flex:`1`}},null,8,[`value`])]),v(`div`,Me,[r[16]||=v(`span`,{class:`form-label`},`PR 标题`,-1),n(x(W),{value:j.value,"onUpdate:value":r[5]||=e=>j.value=e,placeholder:`PR 标题`,style:{flex:`1`}},null,8,[`value`])]),v(`div`,Ne,[r[17]||=v(`span`,{class:`form-label`},`PR 描述`,-1),n(x(W),{value:N.value,"onUpdate:value":r[6]||=e=>N.value=e,type:`textarea`,placeholder:`PR 描述（可选）`,autosize:{minRows:2,maxRows:6},style:{flex:`1`}},null,8,[`value`])]),v(`div`,Pe,[n(x(G),{type:`primary`,loading:B.value,onClick:$,size:`large`},{default:M(()=>[p(S(B.value?`创建中...`:`🚀 创建 PR`),1)]),_:1},8,[`loading`])]),U.value?(f(),b(`div`,Fe,[n(x(H),{type:`success`,size:`small`},{default:M(()=>[...r[18]||=[p(`PR 已创建`,-1)]]),_:1}),v(`a`,{href:U.value.html_url,target:`_blank`,class:`pr-result-link`},` #`+S(U.value.number)+` → `+S(U.value.html_url),9,Ie),v(`span`,Le,`分支: `+S(U.value.branch),1),U.value.files?(f(),b(`span`,Re,` 包含 `+S(U.value.files.length)+` 个文件: `+S(U.value.files.join(`, `)),1)):I(``,!0)])):I(``,!0)])):(f(),b(`div`,Ce,`请先配置 GitHub Token 和仓库名称`))]),_:1}),n(x(T),{title:`🔥 Gitee 热门仓库`,class:`content-card`},{default:M(()=>[n(x(V),{show:g.value},{default:M(()=>[v(`div`,ze,[(f(!0),b(w,null,t(_.value,(e,t)=>(f(),b(`div`,{key:e.full_name,class:`gitee-item`,onClick:t=>Z(e.html_url)},[v(`span`,Ve,S(D[t]||`#${t+1}`),1),v(`div`,He,[v(`span`,Ue,S(e.full_name),1),v(`span`,We,S(e.description),1),v(`div`,Ge,[v(`span`,Ke,`⭐ `+S(e.stargazers_count),1),e.language?(f(),b(`span`,qe,S(e.language),1)):I(``,!0),v(`span`,Je,`🍴 `+S(e.forks_count),1)])])],8,Be))),128))])]),_:1},8,[`show`])]),_:1})]))}}),[[`__scopeId`,`data-v-1fa07d02`]]);export{$ as default};