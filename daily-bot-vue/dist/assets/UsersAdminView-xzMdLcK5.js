const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/bcryptjs-DkgUyax-.js","assets/rolldown-runtime-QTnfLwEv.js"])))=>i.map(i=>d[i]);
import{Ht as e,Jt as t,Kt as n,M as r,Mn as i,Ut as a,Vn as o,Xt as s,Yn as c,Yt as l,_n as u,ar as d,bn as f,dn as p,gn as m,k as h,kn as g,lt as _,mn as v,n as y,nr as b,qt as x,t as S,u as C,un as w,ut as T,vn as E}from"./_plugin-vue_export-helper-Dw8IhM_J.js";import{t as D}from"./Alert-DJF8lBas.js";import{t as O}from"./use-message-CCOe2Xnn.js";import{b as k,h as A,l as j,n as M,p as N,v as P,w as F}from"./index-0WQr_tjR.js";var I=e([a(`table`,`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[e(`th`,`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[e(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),e(`td`,`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[e(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),n(`bordered`,`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[e(`tr`,[e(`&:last-child`,[e(`td`,`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),n(`single-line`,[e(`th`,`
 border-right: 0px solid var(--n-merged-border-color);
 `),e(`td`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),n(`single-column`,[e(`tr`,[e(`&:not(:last-child)`,[e(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),n(`striped`,[e(`tr:nth-of-type(even)`,[e(`td`,`background-color: var(--n-td-color-striped)`)])]),x(`bottom-bordered`,[e(`tr`,[e(`&:last-child`,[e(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),l(a(`table`,`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[e(`th`,`
 background-color: var(--n-th-color-modal);
 `),e(`td`,`
 background-color: var(--n-td-color-modal);
 `)])),s(a(`table`,`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[e(`th`,`
 background-color: var(--n-th-color-popover);
 `),e(`td`,`
 background-color: var(--n-td-color-popover);
 `)]))]),L=E({name:`Table`,props:Object.assign(Object.assign({},h.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:String}),setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:i,mergedRtlRef:a,mergedComponentPropsRef:o}=T(e),s=w(()=>e.size||o?.value?.Table?.size||`medium`),c=h(`Table`,`-table`,I,j,e,n),l=r(`Table`,a,n),u=w(()=>{let e=s.value,{self:{borderColor:n,tdColor:r,tdColorModal:i,tdColorPopover:a,thColor:o,thColorModal:l,thColorPopover:u,thTextColor:d,tdTextColor:f,borderRadius:p,thFontWeight:m,lineHeight:h,borderColorModal:g,borderColorPopover:_,tdColorStriped:v,tdColorStripedModal:y,tdColorStripedPopover:b,[t(`fontSize`,e)]:x,[t(`tdPadding`,e)]:S,[t(`thPadding`,e)]:C},common:{cubicBezierEaseInOut:w}}=c.value;return{"--n-bezier":w,"--n-td-color":r,"--n-td-color-modal":i,"--n-td-color-popover":a,"--n-td-text-color":f,"--n-border-color":n,"--n-border-color-modal":g,"--n-border-color-popover":_,"--n-border-radius":p,"--n-font-size":x,"--n-th-color":o,"--n-th-color-modal":l,"--n-th-color-popover":u,"--n-th-font-weight":m,"--n-th-text-color":d,"--n-line-height":h,"--n-td-padding":S,"--n-th-padding":C,"--n-td-color-striped":v,"--n-td-color-striped-modal":y,"--n-td-color-striped-popover":b}}),d=i?_(`table`,w(()=>s.value[0]),u,e):void 0;return{rtlEnabled:l,mergedClsPrefix:n,cssVars:i?void 0:u,themeClass:d?.themeClass,onRender:d?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),f(`table`,{class:[`${t}-table`,this.themeClass,{[`${t}-table--rtl`]:this.rtlEnabled,[`${t}-table--bottom-bordered`]:this.bottomBordered,[`${t}-table--bordered`]:this.bordered,[`${t}-table--single-line`]:this.singleLine,[`${t}-table--single-column`]:this.singleColumn,[`${t}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),R=`wfbot_registered_users`;function z(e){return btoa(unescape(encodeURIComponent(e)))}function B(){try{return JSON.parse(localStorage.getItem(R)||`{}`)}catch{return{}}}function V(e){localStorage.setItem(R,JSON.stringify(e))}async function H(){let e=B();if(!e[`admin@demo.com`]){let t=new Date().toISOString(),n=await U(`123456`);e[`admin@demo.com`]={user:{id:`admin_test_001`,username:`Admin`,email:`admin@demo.com`,role:`admin`,createdAt:t,lastLoginAt:t,settings:{theme:`system`,refreshInterval:60,cardLayout:[`metrics`,`summary`,`timeline`,`charts`,`health`],notifications:{email:!0,browser:!0,sound:!1}}},passwordHash:n},V(e)}}setTimeout(()=>H(),0);async function U(e){try{let{default:t}=await M(async()=>{let{default:e}=await import(`./bcryptjs-DkgUyax-.js`);return{default:e}},__vite__mapDeps([0,1]));return t.hashSync(e,8)}catch{return z(`hash:`+e+`:wfbot-demo-secret-key-2024`)}}async function W(){await new Promise(e=>setTimeout(e,300));let e=B();return Object.values(e).map(e=>({...e.user}))}async function G(e){await new Promise(e=>setTimeout(e,300));let t=B();if(!t[e])throw Error(`用户不存在`);if(t[e].user.role===`admin`&&Object.values(t).filter(e=>e.user.role===`admin`).length<=1)throw Error(`不能删除唯一的管理员账号`);return delete t[e],V(t),!0}async function K(e,t){await new Promise(e=>setTimeout(e,300));let n=B();if(!n[e])throw Error(`用户不存在`);let r=await U(t);return n[e].passwordHash=r,V(n),!0}var q={class:`users-view`},J={class:`reset-content`},Y={class:`reset-info`},X=S(E({__name:`UsersAdminView`,setup(e){let t=y(),n=O(),r=c(!1),a=c([]),s=c(!1),l=c(!1),h=c(null),_=c(null),x=c(``),S={admin:{label:`管理员`,type:`error`},member:{label:`成员`,type:`primary`},viewer:{label:`观察者`,type:`default`}},w=[{key:`id`,title:`ID`,width:120},{key:`username`,title:`用户名`,width:120},{key:`email`,title:`邮箱`,width:180},{key:`role`,title:`角色`,width:100,render(e){let t=S[e.role]||{label:e.role,type:`default`};return f(F,{type:t.type,size:`small`},()=>t.label)}},{key:`actions`,title:`操作`,width:200,render(e){return f(`div`,{class:`actions`},[f(P,{size:`small`,type:`default`,onClick:()=>{_.value=e,l.value=!0}},()=>`重置密码`),f(P,{size:`small`,type:`error`,style:{marginLeft:`8px`},onClick:()=>{h.value=e,s.value=!0}},()=>`删除`)])}}];async function T(){r.value=!0;try{a.value=await W()}catch(e){n.error(e.message)}finally{r.value=!1}}function E(){h.value&&j(h.value.email)}async function j(e){try{await G(e),n.success(`用户 ${e} 已删除`),await T()}catch(e){n.error(e.message)}finally{s.value=!1,h.value=null}}function M(){if(!_.value||!x.value.trim()){n.warning(`请填写新密码`);return}I(_.value.email,x.value)}async function I(e,t){try{await K(e,t),n.success(`用户 ${e} 密码已重置`),x.value=``,await T()}catch(e){n.error(e.message)}finally{l.value=!1,_.value=null}}return g(()=>{T()}),(e,n)=>(i(),v(`div`,q,[n[4]||=p(`h2`,{class:`page-title`},`👥 用户管理 (管理员)`,-1),u(b(D),{type:`info`,bordered:!1,style:{"margin-bottom":`20px`}},{header:o(()=>[m(` 当前登录：`+d(b(t).user?.username)+` (`+d(b(t).user?.role===`admin`?`管理员`:b(t).user?.role===`member`?`成员`:`观察者`)+`) `,1)]),_:1}),u(b(C),{class:`users-card`},{default:o(()=>[u(b(L),{columns:w,data:a.value,loading:r.value},null,8,[`data`,`loading`])]),_:1}),u(b(A),{show:s.value,"onUpdate:show":n[0]||=e=>s.value=e,preset:`confirm`,title:`确认删除用户`,content:`此操作不可撤销，请确认删除？`,onPositiveClick:E},null,8,[`show`]),u(b(A),{show:l.value,"onUpdate:show":n[2]||=e=>l.value=e,preset:`card`,title:`重置用户密码`},{footer:o(()=>[u(b(N),{justify:`end`},{default:o(()=>[u(b(P),{onClick:M,type:`primary`},{default:o(()=>[...n[3]||=[m(`确认重置`,-1)]]),_:1})]),_:1})]),default:o(()=>[p(`div`,J,[p(`div`,Y,[p(`b`,null,d(_.value?.email),1)]),u(b(k),{value:x.value,"onUpdate:value":n[1]||=e=>x.value=e,type:`password`,placeholder:`输入新密码`,"show-password-on":`click`},null,8,[`value`])])]),_:1},8,[`show`])]))}}),[[`__scopeId`,`data-v-bcacc652`]]);export{X as default};