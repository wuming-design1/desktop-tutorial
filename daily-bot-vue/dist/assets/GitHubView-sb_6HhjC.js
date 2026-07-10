import{$n as e,Ct as t,En as n,Gn as r,I as i,In as a,Kt as o,Ln as s,N as c,Nn as l,Nt as u,Qt as d,Rn as f,Sn as p,Xt as m,Yt as h,Zt as g,_n as _,bn as v,bt as y,ft as b,hn as x,i as S,jt as C,lr as w,m as T,mn as E,mt as D,or as O,p as k,pt as A,qt as j,r as ee,rr as M,t as N,un as P,vn as F,wn as I,xn as L}from"./_plugin-vue_export-helper-MsG4zd-3.js";import{t as R}from"./use-merged-state-cgcCleiG.js";import{t as z}from"./flatten-Dqm298s6.js";import{t as B}from"./get-slot-6kXJmSMP.js";import{t as te}from"./use-message-BlH0_a41.js";import{t as V}from"./Spin-BGpzGnkj.js";import{T as H,g as U,r as ne,x as W,y as G}from"./index-DfuKCr8-.js";var K=j(`radio`,`
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
`,[m(`checked`,[h(`dot`,`
 background-color: var(--n-color-active);
 `)]),h(`dot-wrapper`,`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),j(`radio-input`,`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),h(`dot`,`
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
 `,[o(`&::before`,`
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
 `),m(`checked`,{boxShadow:`var(--n-box-shadow-active)`},[o(`&::before`,`
 opacity: 1;
 transform: scale(1);
 `)])]),h(`label`,`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),g(`disabled`,`
 cursor: pointer;
 `,[o(`&:hover`,[h(`dot`,{boxShadow:`var(--n-box-shadow-hover)`})]),m(`focus`,[o(`&:not(:active)`,[h(`dot`,{boxShadow:`var(--n-box-shadow-focus)`})])])]),m(`disabled`,`
 cursor: not-allowed;
 `,[h(`dot`,{boxShadow:`var(--n-box-shadow-disabled)`,backgroundColor:`var(--n-color-disabled)`},[o(`&::before`,{backgroundColor:`var(--n-dot-color-disabled)`}),m(`checked`,`
 opacity: 1;
 `)]),h(`label`,{color:`var(--n-text-color-disabled)`}),j(`radio-input`,`
 cursor: not-allowed;
 `)])]),q={name:String,value:{type:[String,Number,Boolean],default:`on`},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},J=C(`n-radio-group`);function Y(r){let i=n(J,null),{mergedClsPrefixRef:a,mergedComponentPropsRef:o}=D(r),s=b(r,{mergedSize(e){let{size:t}=r;if(t!==void 0)return t;if(i){let{mergedSizeRef:{value:e}}=i;if(e!==void 0)return e}return e?e.mergedSize.value:o?.value?.Radio?.size||`medium`},mergedDisabled(e){return!!(r.disabled||i?.disabledRef.value||e?.disabled.value)}}),{mergedSizeRef:c,mergedDisabledRef:l}=s,d=e(null),f=e(null),p=e(r.defaultChecked),m=R(M(r,`checked`),p),h=u(()=>i?i.valueRef.value===r.value:m.value),g=u(()=>{let{name:e}=r;if(e!==void 0)return e;if(i)return i.nameRef.value}),_=e(!1);function v(){if(i){let{doUpdateValue:e}=i,{value:n}=r;t(e,n)}else{let{onUpdateChecked:e,"onUpdate:checked":n}=r,{nTriggerFormInput:i,nTriggerFormChange:a}=s;e&&t(e,!0),n&&t(n,!0),i(),a(),p.value=!0}}function y(){l.value||h.value||v()}function x(){y(),d.value&&(d.value.checked=h.value)}function S(){_.value=!1}function C(){_.value=!0}return{mergedClsPrefix:i?i.mergedClsPrefixRef:a,inputRef:d,labelRef:f,mergedName:g,mergedDisabled:l,renderSafeChecked:h,focus:_,mergedSize:c,handleRadioInputChange:x,handleRadioInputBlur:S,handleRadioInputFocus:C}}var re=p({name:`Radio`,props:Object.assign(Object.assign({},c.props),q),setup(e){let t=Y(e),n=c(`Radio`,`-radio`,K,U,e,t.mergedClsPrefix),r=E(()=>{let{mergedSize:{value:e}}=t,{common:{cubicBezierEaseInOut:r},self:{boxShadow:i,boxShadowActive:a,boxShadowDisabled:o,boxShadowFocus:s,boxShadowHover:c,color:l,colorDisabled:u,colorActive:f,textColor:p,textColorDisabled:m,dotColorActive:h,dotColorDisabled:g,labelPadding:_,labelLineHeight:v,labelFontWeight:y,[d(`fontSize`,e)]:b,[d(`radioSize`,e)]:x}}=n.value;return{"--n-bezier":r,"--n-label-line-height":v,"--n-label-font-weight":y,"--n-box-shadow":i,"--n-box-shadow-active":a,"--n-box-shadow-disabled":o,"--n-box-shadow-focus":s,"--n-box-shadow-hover":c,"--n-color":l,"--n-color-active":f,"--n-color-disabled":u,"--n-dot-color-active":h,"--n-dot-color-disabled":g,"--n-font-size":b,"--n-radio-size":x,"--n-text-color":p,"--n-text-color-disabled":m,"--n-label-padding":_}}),{inlineThemeDisabled:a,mergedClsPrefixRef:o,mergedRtlRef:s}=D(e),l=i(`Radio`,s,o),u=a?A(`radio`,E(()=>t.mergedSize.value[0]),r,e):void 0;return Object.assign(t,{rtlEnabled:l,cssVars:a?void 0:r,themeClass:u?.themeClass,onRender:u?.onRender})},render(){let{$slots:e,mergedClsPrefix:t,onRender:n,label:r}=this;return n?.(),I(`label`,{class:[`${t}-radio`,this.themeClass,this.rtlEnabled&&`${t}-radio--rtl`,this.mergedDisabled&&`${t}-radio--disabled`,this.renderSafeChecked&&`${t}-radio--checked`,this.focus&&`${t}-radio--focus`],style:this.cssVars},I(`div`,{class:`${t}-radio__dot-wrapper`},`\xA0`,I(`div`,{class:[`${t}-radio__dot`,this.renderSafeChecked&&`${t}-radio__dot--checked`]}),I(`input`,{ref:`inputRef`,type:`radio`,class:`${t}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),y(e.default,e=>!e&&!r?null:I(`div`,{ref:`labelRef`,class:`${t}-radio__label`},e||r)))}}),X=j(`radio-group`,`
 display: inline-block;
 font-size: var(--n-font-size);
`,[h(`splitor`,`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[m(`checked`,{backgroundColor:`var(--n-button-border-color-active)`}),m(`disabled`,{opacity:`var(--n-opacity-disabled)`})]),m(`button-group`,`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[j(`radio-button`,{height:`var(--n-height)`,lineHeight:`var(--n-height)`}),h(`splitor`,{height:`var(--n-height)`})]),j(`radio-button`,`
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
 `,[j(`radio-input`,`
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
 `),h(`state-border`,`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),o(`&:first-child`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[h(`state-border`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),o(`&:last-child`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[h(`state-border`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),g(`disabled`,`
 cursor: pointer;
 `,[o(`&:hover`,[h(`state-border`,`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),g(`checked`,{color:`var(--n-button-text-color-hover)`})]),m(`focus`,[o(`&:not(:active)`,[h(`state-border`,{boxShadow:`var(--n-button-box-shadow-focus)`})])])]),m(`checked`,`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),m(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Z(e,t,n){let r=[],i=!1;for(let a=0;a<e.length;++a){let o=e[a],s=o.type?.name;s===`RadioButton`&&(i=!0);let c=o.props;if(s!==`RadioButton`){r.push(o);continue}if(a===0)r.push(o);else{let e=r[r.length-1].props,i=t===e.value,a=e.disabled,s=t===c.value,l=c.disabled,u=(i?2:0)+ +!a,d=(s?2:0)+ +!l,f={[`${n}-radio-group__splitor--disabled`]:a,[`${n}-radio-group__splitor--checked`]:i},p={[`${n}-radio-group__splitor--disabled`]:l,[`${n}-radio-group__splitor--checked`]:s},m=u<d?p:f;r.push(I(`div`,{class:[`${n}-radio-group__splitor`,m]}),o)}}return{children:r,isButtonGroup:i}}var ie=p({name:`RadioGroup`,props:Object.assign(Object.assign({},c.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(n){let r=e(null),{mergedSizeRef:a,mergedDisabledRef:o,nTriggerFormChange:l,nTriggerFormInput:u,nTriggerFormBlur:f,nTriggerFormFocus:p}=b(n),{mergedClsPrefixRef:m,inlineThemeDisabled:h,mergedRtlRef:g}=D(n),_=c(`Radio`,`-radio-group`,X,U,n,m),v=e(n.defaultValue),y=R(M(n,`value`),v);function x(e){let{onUpdateValue:r,"onUpdate:value":i}=n;r&&t(r,e),i&&t(i,e),v.value=e,l(),u()}function S(e){let{value:t}=r;t&&(t.contains(e.relatedTarget)||p())}function C(e){let{value:t}=r;t&&(t.contains(e.relatedTarget)||f())}s(J,{mergedClsPrefixRef:m,nameRef:M(n,`name`),valueRef:y,disabledRef:o,mergedSizeRef:a,doUpdateValue:x});let w=i(`Radio`,g,m),T=E(()=>{let{value:e}=a,{common:{cubicBezierEaseInOut:t},self:{buttonBorderColor:n,buttonBorderColorActive:r,buttonBorderRadius:i,buttonBoxShadow:o,buttonBoxShadowFocus:s,buttonBoxShadowHover:c,buttonColor:l,buttonColorActive:u,buttonTextColor:f,buttonTextColorActive:p,buttonTextColorHover:m,opacityDisabled:h,[d(`buttonHeight`,e)]:g,[d(`fontSize`,e)]:v}}=_.value;return{"--n-font-size":v,"--n-bezier":t,"--n-button-border-color":n,"--n-button-border-color-active":r,"--n-button-border-radius":i,"--n-button-box-shadow":o,"--n-button-box-shadow-focus":s,"--n-button-box-shadow-hover":c,"--n-button-color":l,"--n-button-color-active":u,"--n-button-text-color":f,"--n-button-text-color-hover":m,"--n-button-text-color-active":p,"--n-height":g,"--n-opacity-disabled":h}}),O=h?A(`radio-group`,E(()=>a.value[0]),T,n):void 0;return{selfElRef:r,rtlEnabled:w,mergedClsPrefix:m,mergedValue:y,handleFocusout:C,handleFocusin:S,cssVars:h?void 0:T,themeClass:O?.themeClass,onRender:O?.onRender}},render(){var e;let{mergedValue:t,mergedClsPrefix:n,handleFocusin:r,handleFocusout:i}=this,{children:a,isButtonGroup:o}=Z(z(B(this)),t,n);return(e=this.onRender)==null||e.call(this),I(`div`,{onFocusin:r,onFocusout:i,ref:`selfElRef`,class:[`${n}-radio-group`,this.rtlEnabled&&`${n}-radio-group--rtl`,this.themeClass,o&&`${n}-radio-group--button-group`],style:this.cssVars},a)}}),ae={class:`github-view`},oe={class:`config-row`},se={class:`config-item`},ce={class:`config-item`},le={class:`config-value`},ue={key:0,class:`empty-hint`},de={key:1,class:`empty-hint`},fe={key:2,class:`commit-list`},pe=[`src`],me={class:`commit-info`},he={class:`commit-message`},ge={class:`commit-meta`},_e={class:`commit-date`},ve={key:0,class:`empty-hint`},ye={key:1,class:`empty-hint`},be={key:2,class:`pr-list`},xe={class:`pr-info`},Se=[`href`],Ce={class:`pr-meta`},we={key:0,class:`empty-hint`},Te={key:1,class:`pr-create-form`},Ee={class:`form-row`},De={key:0,class:`form-section`},Oe={class:`form-row`},ke={class:`form-row`},Ae={key:1,class:`form-section`},je={class:`form-row`},Me={class:`form-row`},Ne={class:`form-row`},Pe={class:`form-row`},Fe={class:`form-actions`},Ie={key:2,class:`pr-result`},Le=[`href`],Q={class:`pr-result-branch`},Re={key:0,class:`pr-result-files`},ze={class:`gitee-list`},Be=[`onClick`],Ve={class:`gitee-rank`},He={class:`gitee-info`},Ue={class:`gitee-name`},We={class:`gitee-desc`},Ge={class:`gitee-meta`},Ke={class:`gitee-stars`},qe={key:0,class:`gitee-lang`},Je={class:`gitee-forks`},$=N(p({__name:`GitHubView`,setup(t){let n=ne(),i=te(),o=E(()=>n.getCred(`GITHUB_TOKEN`)||``),s=E(()=>n.getCred(`GITHUB_REPO`)||``),c=E(()=>n.isConnected(`github`)),u=e(!1),d=e(!1),p=e(!1),m=e([]),h=e([]),g=e(!1),y=e([]),b=e(!1),C=[{full_name:`mindspore/mindspore`,html_url:`https://gitee.com/mindspore/mindspore`,description:`MindSpore is a new open source deep learning training/inference framework that could be used for mobile, edge and cloud scenarios.`,stargazers_count:9078,language:`Python`,forks_count:1200},{full_name:`HimitZH/HOJ`,html_url:`https://gitee.com/HimitZH/HOJ`,description:`HOJ 是一个分布式、可扩展的在线评测系统。`,stargazers_count:1005,language:`Java`,forks_count:320},{full_name:`soloncode/solon`,html_url:`https://gitee.com/soloncode/solon`,description:`Solon 是一个高效的 Java 应用开发框架：更快、更小、更简单。`,stargazers_count:143,language:`Java`,forks_count:56}],D=[`🥇`,`🥈`,`🥉`],A=e(`upload`),j=e(``),M=e(``),N=e(``),I=e(``),R=e(``),z=e(``),B=e(!1),U=e(null),K=[{label:`上传文件`,value:`upload`},{label:`Git 暂存区`,value:`staging`}];async function q(){if(!o.value||!s.value){i.warning(`请先填写 Token 和仓库名称`);return}u.value=!0;try{let[e,t]=s.value.split(`/`);await k.get(`https://api.github.com/repos/${e}/${t}`,{headers:{Authorization:`Bearer ${o.value}`}}),i.success(`连接成功`)}catch(e){i.error(`连接失败: ${e?.response?.data?.message||e.message}`)}finally{u.value=!1}}async function J(){if(!(!o.value||!s.value)){d.value=!0;try{let[e,t]=s.value.split(`/`),n=new Date;n.setHours(0,0,0,0);let{data:r}=await k.get(`https://api.github.com/repos/${e}/${t}/commits`,{headers:{Authorization:`Bearer ${o.value}`},params:{since:n.toISOString(),per_page:20}});m.value=r.map(e=>({sha:e.sha?.slice(0,7),message:e.commit?.message?.split(`
`)[0]||``,author:e.commit?.author?.name||``,date:e.commit?.author?.date||``,avatar:e.author?.avatar_url||``}))}catch(e){i.error(`获取提交失败: ${e?.response?.data?.message||e.message}`)}finally{d.value=!1}}}async function Y(){if(!(!o.value||!s.value)){p.value=!0;try{let[e,t]=s.value.split(`/`),{data:n}=await k.get(`https://api.github.com/repos/${e}/${t}/pulls`,{headers:{Authorization:`Bearer ${o.value}`},params:{state:`all`,per_page:20,sort:`updated`,direction:`desc`}});h.value=n.map(e=>({number:e.number,title:e.title,state:e.state,user:e.user?.login||``,created_at:e.created_at,html_url:e.html_url}))}catch(e){i.error(`获取 PR 失败: ${e?.response?.data?.message||e.message}`)}finally{p.value=!1}}}async function X(){g.value=!0,b.value=!1;try{let{data:e}=await k.get(`https://gitee.com/api/v5/search/repositories`,{params:{q:`stars:>100`,sortby:`stars`,order:`desc`,per_page:3}});e&&Array.isArray(e)&&e.length>0?y.value=e.slice(0,3):y.value=C}catch{b.value=!0,y.value=C}finally{g.value=!1}}function Z(e){window.open(e,`_blank`)}async function $(){if(!j.value.trim()){i.warning(`请输入 PR 标题`);return}if(!c.value){i.warning(`请先配置 GitHub 凭证`);return}B.value=!0,U.value=null;try{if(A.value===`upload`){if(!R.value.trim()){i.warning(`请输入文件内容`),B.value=!1;return}let e=new FormData;e.append(`title`,j.value),e.append(`body`,M.value),e.append(`branch`,N.value),e.append(`filePath`,I.value||`file.txt`),e.append(`fileContent`,R.value);let t=await S(e);U.value=t,i.success(`PR #${t.number} 创建成功`)}else{if(!z.value.trim()){i.warning(`请输入本地仓库路径`),B.value=!1;return}let e=await ee({title:j.value,body:M.value,branch:N.value,repoPath:z.value});U.value=e,i.success(`PR #${e.number} 创建成功 (${e.files?.length||0} 个文件)`)}Y()}catch(e){i.error(`创建 PR 失败: ${e?.response?.data?.error||e.message}`)}finally{B.value=!1}}return l(()=>{c.value&&(J(),Y()),X()}),(e,t)=>(a(),F(`div`,ae,[t[19]||=x(`h2`,{class:`page-title`},`🔗 代码动态`,-1),L(O(T),{title:`仓库配置`,class:`config-card`},{default:r(()=>[x(`div`,oe,[x(`div`,se,[t[7]||=x(`span`,{class:`config-label`},`Token 状态`,-1),L(O(H),{type:c.value?`success`:`error`,size:`small`},{default:r(()=>[v(w(c.value?`已配置`:`未配置`),1)]),_:1},8,[`type`])]),x(`div`,ce,[t[8]||=x(`span`,{class:`config-label`},`仓库名称`,-1),x(`span`,le,w(s.value||`未设置`),1)]),L(O(G),{type:`primary`,loading:u.value,onClick:q,size:`small`},{default:r(()=>[...t[9]||=[v(` 测试连接 `,-1)]]),_:1},8,[`loading`])])]),_:1}),L(O(T),{title:`📝 今日提交`,class:`content-card`},{default:r(()=>[L(O(V),{show:d.value},{default:r(()=>[c.value?m.value.length===0?(a(),F(`div`,de,`暂无提交记录`)):(a(),F(`div`,fe,[(a(!0),F(P,null,f(m.value,e=>(a(),F(`div`,{key:e.sha,class:`commit-item`},[e.avatar?(a(),F(`img`,{key:0,src:e.avatar,class:`commit-avatar`,alt:``},null,8,pe)):_(``,!0),x(`div`,me,[x(`span`,he,w(e.message),1),x(`span`,ge,w(e.author)+` · `+w(e.sha),1)]),x(`span`,_e,w(e.date?.slice(0,10)),1)]))),128))])):(a(),F(`div`,ue,`请先配置 GitHub Token 和仓库名称`))]),_:1},8,[`show`])]),_:1}),L(O(T),{title:`🔀 拉取请求`,class:`content-card`},{default:r(()=>[L(O(V),{show:p.value},{default:r(()=>[c.value?h.value.length===0?(a(),F(`div`,ye,`暂无 PR 记录`)):(a(),F(`div`,be,[(a(!0),F(P,null,f(h.value,e=>(a(),F(`div`,{key:e.number,class:`pr-item`},[x(`div`,xe,[x(`a`,{href:e.html_url,target:`_blank`,class:`pr-title`},`#`+w(e.number)+` `+w(e.title),9,Se),x(`span`,Ce,w(e.user),1)]),L(O(H),{type:e.state===`open`?`success`:`default`,size:`small`},{default:r(()=>[v(w(e.state===`open`?`Open`:`Closed`),1)]),_:2},1032,[`type`])]))),128))])):(a(),F(`div`,ve,`请先配置 GitHub Token 和仓库名称`))]),_:1},8,[`show`])]),_:1}),L(O(T),{title:`➕ 创建拉取请求`,class:`content-card`},{default:r(()=>[c.value?(a(),F(`div`,Te,[x(`div`,Ee,[t[10]||=x(`span`,{class:`form-label`},`创建方式`,-1),L(O(ie),{value:A.value,"onUpdate:value":t[0]||=e=>A.value=e,name:`pr-mode`},{default:r(()=>[(a(),F(P,null,f(K,e=>L(O(re),{key:e.value,value:e.value},{default:r(()=>[v(w(e.label),1)]),_:2},1032,[`value`])),64))]),_:1},8,[`value`])]),A.value===`upload`?(a(),F(`div`,De,[x(`div`,Oe,[t[11]||=x(`span`,{class:`form-label`},`文件路径`,-1),L(O(W),{value:I.value,"onUpdate:value":t[1]||=e=>I.value=e,placeholder:`src/example.ts`,style:{flex:`1`}},null,8,[`value`])]),x(`div`,ke,[t[12]||=x(`span`,{class:`form-label`},`文件内容`,-1),L(O(W),{value:R.value,"onUpdate:value":t[2]||=e=>R.value=e,type:`textarea`,placeholder:`输入文件内容...`,autosize:{minRows:4,maxRows:12},style:{flex:`1`}},null,8,[`value`])])])):(a(),F(`div`,Ae,[x(`div`,je,[t[13]||=x(`span`,{class:`form-label`},`仓库路径`,-1),L(O(W),{value:z.value,"onUpdate:value":t[3]||=e=>z.value=e,placeholder:`/path/to/your/git/repo`,style:{flex:`1`}},null,8,[`value`])]),t[14]||=x(`div`,{class:`form-hint`},` 后端服务器将读取该路径下 Git 暂存区（git add 后的文件），自动创建分支和 PR `,-1)])),x(`div`,Me,[t[15]||=x(`span`,{class:`form-label`},`新分支名`,-1),L(O(W),{value:N.value,"onUpdate:value":t[4]||=e=>N.value=e,placeholder:`留空自动生成`,style:{flex:`1`}},null,8,[`value`])]),x(`div`,Ne,[t[16]||=x(`span`,{class:`form-label`},`PR 标题`,-1),L(O(W),{value:j.value,"onUpdate:value":t[5]||=e=>j.value=e,placeholder:`PR 标题`,style:{flex:`1`}},null,8,[`value`])]),x(`div`,Pe,[t[17]||=x(`span`,{class:`form-label`},`PR 描述`,-1),L(O(W),{value:M.value,"onUpdate:value":t[6]||=e=>M.value=e,type:`textarea`,placeholder:`PR 描述（可选）`,autosize:{minRows:2,maxRows:6},style:{flex:`1`}},null,8,[`value`])]),x(`div`,Fe,[L(O(G),{type:`primary`,loading:B.value,onClick:$,size:`large`},{default:r(()=>[v(w(B.value?`创建中...`:`🚀 创建 PR`),1)]),_:1},8,[`loading`])]),U.value?(a(),F(`div`,Ie,[L(O(H),{type:`success`,size:`small`},{default:r(()=>[...t[18]||=[v(`PR 已创建`,-1)]]),_:1}),x(`a`,{href:U.value.html_url,target:`_blank`,class:`pr-result-link`},` #`+w(U.value.number)+` → `+w(U.value.html_url),9,Le),x(`span`,Q,`分支: `+w(U.value.branch),1),U.value.files?(a(),F(`span`,Re,` 包含 `+w(U.value.files.length)+` 个文件: `+w(U.value.files.join(`, `)),1)):_(``,!0)])):_(``,!0)])):(a(),F(`div`,we,`请先配置 GitHub Token 和仓库名称`))]),_:1}),L(O(T),{title:`🔥 Gitee 热门仓库`,class:`content-card`},{default:r(()=>[L(O(V),{show:g.value},{default:r(()=>[x(`div`,ze,[(a(!0),F(P,null,f(y.value,(e,t)=>(a(),F(`div`,{key:e.full_name,class:`gitee-item`,onClick:t=>Z(e.html_url)},[x(`span`,Ve,w(D[t]||`#${t+1}`),1),x(`div`,He,[x(`span`,Ue,w(e.full_name),1),x(`span`,We,w(e.description),1),x(`div`,Ge,[x(`span`,Ke,`⭐ `+w(e.stargazers_count),1),e.language?(a(),F(`span`,qe,w(e.language),1)):_(``,!0),x(`span`,Je,`🍴 `+w(e.forks_count),1)])])],8,Be))),128))])]),_:1},8,[`show`])]),_:1})]))}}),[[`__scopeId`,`data-v-1fa07d02`]]);export{$ as default};