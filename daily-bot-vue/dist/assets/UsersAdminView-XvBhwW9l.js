const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/bcryptjs-DkgUyax-.js","assets/rolldown-runtime-QTnfLwEv.js"])))=>i.map(i=>d[i]);
import{$n as e,$t as t,Gn as n,I as r,In as i,Kt as a,N as o,Nn as s,Qt as c,Sn as l,Xt as u,Zt as d,bn as f,en as p,hn as m,lr as h,m as g,mn as _,mt as v,n as y,or as b,pt as x,qt as S,t as C,vn as w,wn as T,xn as E}from"./_plugin-vue_export-helper-MsG4zd-3.js";import{t as D}from"./Alert-D6r-Wcoq.js";import{t as O}from"./use-message-BlH0_a41.js";import{T as k,h as A,l as j,n as M,p as N,x as P,y as F}from"./index-DfuKCr8-.js";var I=a([S(`table`,`
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
 `,[a(`th`,`
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
 `,[a(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),a(`td`,`
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
 `,[a(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),u(`bordered`,`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[a(`tr`,[a(`&:last-child`,[a(`td`,`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),u(`single-line`,[a(`th`,`
 border-right: 0px solid var(--n-merged-border-color);
 `),a(`td`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),u(`single-column`,[a(`tr`,[a(`&:not(:last-child)`,[a(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),u(`striped`,[a(`tr:nth-of-type(even)`,[a(`td`,`background-color: var(--n-td-color-striped)`)])]),d(`bottom-bordered`,[a(`tr`,[a(`&:last-child`,[a(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),t(S(`table`,`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[a(`th`,`
 background-color: var(--n-th-color-modal);
 `),a(`td`,`
 background-color: var(--n-td-color-modal);
 `)])),p(S(`table`,`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[a(`th`,`
 background-color: var(--n-th-color-popover);
 `),a(`td`,`
 background-color: var(--n-td-color-popover);
 `)]))]),L=l({name:`Table`,props:Object.assign(Object.assign({},o.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:String}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:i,mergedComponentPropsRef:a}=v(e),s=_(()=>e.size||a?.value?.Table?.size||`medium`),l=o(`Table`,`-table`,I,j,e,t),u=r(`Table`,i,t),d=_(()=>{let e=s.value,{self:{borderColor:t,tdColor:n,tdColorModal:r,tdColorPopover:i,thColor:a,thColorModal:o,thColorPopover:u,thTextColor:d,tdTextColor:f,borderRadius:p,thFontWeight:m,lineHeight:h,borderColorModal:g,borderColorPopover:_,tdColorStriped:v,tdColorStripedModal:y,tdColorStripedPopover:b,[c(`fontSize`,e)]:x,[c(`tdPadding`,e)]:S,[c(`thPadding`,e)]:C},common:{cubicBezierEaseInOut:w}}=l.value;return{"--n-bezier":w,"--n-td-color":n,"--n-td-color-modal":r,"--n-td-color-popover":i,"--n-td-text-color":f,"--n-border-color":t,"--n-border-color-modal":g,"--n-border-color-popover":_,"--n-border-radius":p,"--n-font-size":x,"--n-th-color":a,"--n-th-color-modal":o,"--n-th-color-popover":u,"--n-th-font-weight":m,"--n-th-text-color":d,"--n-line-height":h,"--n-td-padding":S,"--n-th-padding":C,"--n-td-color-striped":v,"--n-td-color-striped-modal":y,"--n-td-color-striped-popover":b}}),f=n?x(`table`,_(()=>s.value[0]),d,e):void 0;return{rtlEnabled:u,mergedClsPrefix:t,cssVars:n?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),T(`table`,{class:[`${t}-table`,this.themeClass,{[`${t}-table--rtl`]:this.rtlEnabled,[`${t}-table--bottom-bordered`]:this.bottomBordered,[`${t}-table--bordered`]:this.bordered,[`${t}-table--single-line`]:this.singleLine,[`${t}-table--single-column`]:this.singleColumn,[`${t}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),R=`wfbot_registered_users`;function z(e){return btoa(unescape(encodeURIComponent(e)))}function B(){try{return JSON.parse(localStorage.getItem(R)||`{}`)}catch{return{}}}function V(e){localStorage.setItem(R,JSON.stringify(e))}async function H(){let e=B();if(!e[`admin@demo.com`]){let t=new Date().toISOString(),n=await U(`123456`);e[`admin@demo.com`]={user:{id:`admin_test_001`,username:`Admin`,email:`admin@demo.com`,role:`admin`,createdAt:t,lastLoginAt:t,settings:{theme:`system`,refreshInterval:60,cardLayout:[`metrics`,`summary`,`timeline`,`charts`,`health`],notifications:{email:!0,browser:!0,sound:!1}}},passwordHash:n},V(e)}}setTimeout(()=>H(),0);async function U(e){try{let{default:t}=await M(async()=>{let{default:e}=await import(`./bcryptjs-DkgUyax-.js`);return{default:e}},__vite__mapDeps([0,1]));return t.hashSync(e,8)}catch{return z(`hash:`+e+`:wfbot-demo-secret-key-2024`)}}async function W(){await new Promise(e=>setTimeout(e,300));let e=B();return Object.values(e).map(e=>({...e.user}))}async function G(e){await new Promise(e=>setTimeout(e,300));let t=B();if(!t[e])throw Error(`用户不存在`);if(t[e].user.role===`admin`&&Object.values(t).filter(e=>e.user.role===`admin`).length<=1)throw Error(`不能删除唯一的管理员账号`);return delete t[e],V(t),!0}async function K(e,t){await new Promise(e=>setTimeout(e,300));let n=B();if(!n[e])throw Error(`用户不存在`);let r=await U(t);return n[e].passwordHash=r,V(n),!0}var q={class:`users-view`},J={class:`reset-content`},Y={class:`reset-info`},X=C(l({__name:`UsersAdminView`,setup(t){let r=y(),a=O(),o=e(!1),c=e([]),l=e(!1),u=e(!1),d=e(null),p=e(null),_=e(``),v={admin:{label:`管理员`,type:`error`},member:{label:`成员`,type:`primary`},viewer:{label:`观察者`,type:`default`}},x=[{key:`id`,title:`ID`,width:120},{key:`username`,title:`用户名`,width:120},{key:`email`,title:`邮箱`,width:180},{key:`role`,title:`角色`,width:100,render(e){let t=v[e.role]||{label:e.role,type:`default`};return T(k,{type:t.type,size:`small`},()=>t.label)}},{key:`actions`,title:`操作`,width:200,render(e){return T(`div`,{class:`actions`},[T(F,{size:`small`,type:`default`,onClick:()=>{p.value=e,u.value=!0}},()=>`重置密码`),T(F,{size:`small`,type:`error`,style:{marginLeft:`8px`},onClick:()=>{d.value=e,l.value=!0}},()=>`删除`)])}}];async function S(){o.value=!0;try{c.value=await W()}catch(e){a.error(e.message)}finally{o.value=!1}}function C(){d.value&&j(d.value.email)}async function j(e){try{await G(e),a.success(`用户 ${e} 已删除`),await S()}catch(e){a.error(e.message)}finally{l.value=!1,d.value=null}}function M(){if(!p.value||!_.value.trim()){a.warning(`请填写新密码`);return}I(p.value.email,_.value)}async function I(e,t){try{await K(e,t),a.success(`用户 ${e} 密码已重置`),_.value=``,await S()}catch(e){a.error(e.message)}finally{u.value=!1,p.value=null}}return s(()=>{S()}),(e,t)=>(i(),w(`div`,q,[t[4]||=m(`h2`,{class:`page-title`},`👥 用户管理 (管理员)`,-1),E(b(D),{type:`info`,bordered:!1,style:{"margin-bottom":`20px`}},{header:n(()=>[f(` 当前登录：`+h(b(r).user?.username)+` (`+h(b(r).user?.role===`admin`?`管理员`:b(r).user?.role===`member`?`成员`:`观察者`)+`) `,1)]),_:1}),E(b(g),{class:`users-card`},{default:n(()=>[E(b(L),{columns:x,data:c.value,loading:o.value},null,8,[`data`,`loading`])]),_:1}),E(b(A),{show:l.value,"onUpdate:show":t[0]||=e=>l.value=e,preset:`confirm`,title:`确认删除用户`,content:`此操作不可撤销，请确认删除？`,onPositiveClick:C},null,8,[`show`]),E(b(A),{show:u.value,"onUpdate:show":t[2]||=e=>u.value=e,preset:`card`,title:`重置用户密码`},{footer:n(()=>[E(b(N),{justify:`end`},{default:n(()=>[E(b(F),{onClick:M,type:`primary`},{default:n(()=>[...t[3]||=[f(`确认重置`,-1)]]),_:1})]),_:1})]),default:n(()=>[m(`div`,J,[m(`div`,Y,[m(`b`,null,h(p.value?.email),1)]),E(b(P),{value:_.value,"onUpdate:value":t[1]||=e=>_.value=e,type:`password`,placeholder:`输入新密码`,"show-password-on":`click`},null,8,[`value`])])]),_:1},8,[`show`])]))}}),[[`__scopeId`,`data-v-bcacc652`]]);export{X as default};