const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/bcryptjs-DkgUyax-.js","assets/rolldown-runtime-QTnfLwEv.js"])))=>i.map(i=>d[i]);
import{$t as e,Cn as t,Dn as n,F as r,In as i,Jn as a,Jt as o,M as s,Qt as c,Tn as l,Yt as u,_n as d,en as f,fr as p,lr as m,mt as h,n as g,nn as _,nr as v,pt as y,t as b,tn as x,vn as S,wn as C,xn as w,zn as T}from"./_plugin-vue_export-helper-DbWEi0S_.js";import{t as E}from"./Card-DxKLbm7g.js";import{t as D}from"./Alert-XapcLP-h.js";import{D as O,N as k,g as A,h as j,k as M,l as N,m as P,n as F}from"./index-BnFmcgAY.js";var I=o([u(`table`,`
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
 `,[o(`th`,`
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
 `,[o(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o(`td`,`
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
 `,[o(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),c(`bordered`,`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[o(`tr`,[o(`&:last-child`,[o(`td`,`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),c(`single-line`,[o(`th`,`
 border-right: 0px solid var(--n-merged-border-color);
 `),o(`td`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),c(`single-column`,[o(`tr`,[o(`&:not(:last-child)`,[o(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),c(`striped`,[o(`tr:nth-of-type(even)`,[o(`td`,`background-color: var(--n-td-color-striped)`)])]),e(`bottom-bordered`,[o(`tr`,[o(`&:last-child`,[o(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),x(u(`table`,`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[o(`th`,`
 background-color: var(--n-th-color-modal);
 `),o(`td`,`
 background-color: var(--n-td-color-modal);
 `)])),_(u(`table`,`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[o(`th`,`
 background-color: var(--n-th-color-popover);
 `),o(`td`,`
 background-color: var(--n-td-color-popover);
 `)]))]),L=l({name:`Table`,props:Object.assign(Object.assign({},s.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:String}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:i,mergedComponentPropsRef:a}=h(e),o=d(()=>e.size||a?.value?.Table?.size||`medium`),c=s(`Table`,`-table`,I,N,e,t),l=r(`Table`,i,t),u=d(()=>{let e=o.value,{self:{borderColor:t,tdColor:n,tdColorModal:r,tdColorPopover:i,thColor:a,thColorModal:s,thColorPopover:l,thTextColor:u,tdTextColor:d,borderRadius:p,thFontWeight:m,lineHeight:h,borderColorModal:g,borderColorPopover:_,tdColorStriped:v,tdColorStripedModal:y,tdColorStripedPopover:b,[f(`fontSize`,e)]:x,[f(`tdPadding`,e)]:S,[f(`thPadding`,e)]:C},common:{cubicBezierEaseInOut:w}}=c.value;return{"--n-bezier":w,"--n-td-color":n,"--n-td-color-modal":r,"--n-td-color-popover":i,"--n-td-text-color":d,"--n-border-color":t,"--n-border-color-modal":g,"--n-border-color-popover":_,"--n-border-radius":p,"--n-font-size":x,"--n-th-color":a,"--n-th-color-modal":s,"--n-th-color-popover":l,"--n-th-font-weight":m,"--n-th-text-color":u,"--n-line-height":h,"--n-td-padding":S,"--n-th-padding":C,"--n-td-color-striped":v,"--n-td-color-striped-modal":y,"--n-td-color-striped-popover":b}}),p=n?y(`table`,d(()=>o.value[0]),u,e):void 0;return{rtlEnabled:l,mergedClsPrefix:t,cssVars:n?void 0:u,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),n(`table`,{class:[`${t}-table`,this.themeClass,{[`${t}-table--rtl`]:this.rtlEnabled,[`${t}-table--bottom-bordered`]:this.bottomBordered,[`${t}-table--bordered`]:this.bordered,[`${t}-table--single-line`]:this.singleLine,[`${t}-table--single-column`]:this.singleColumn,[`${t}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),R=`wfbot_registered_users`;function z(e){return btoa(unescape(encodeURIComponent(e)))}function B(){try{return JSON.parse(localStorage.getItem(R)||`{}`)}catch{return{}}}function V(e){localStorage.setItem(R,JSON.stringify(e))}async function H(){let e=B();if(!e[`admin@demo.com`]){let t=new Date().toISOString(),n=await U(`123456`);e[`admin@demo.com`]={user:{id:`admin_test_001`,username:`Admin`,email:`admin@demo.com`,role:`admin`,createdAt:t,lastLoginAt:t,settings:{theme:`system`,refreshInterval:60,cardLayout:[`metrics`,`summary`,`timeline`,`charts`,`health`],notifications:{email:!0,browser:!0,sound:!1}}},passwordHash:n},V(e)}}setTimeout(()=>H(),0);async function U(e){try{let{default:t}=await F(async()=>{let{default:e}=await import(`./bcryptjs-DkgUyax-.js`);return{default:e}},__vite__mapDeps([0,1]));return t.hashSync(e,8)}catch{return z(`hash:`+e+`:wfbot-demo-secret-key-2024`)}}async function W(){await new Promise(e=>setTimeout(e,300));let e=B();return Object.values(e).map(e=>({...e.user}))}async function G(e){await new Promise(e=>setTimeout(e,300));let t=B();if(!t[e])throw Error(`用户不存在`);if(t[e].user.role===`admin`&&Object.values(t).filter(e=>e.user.role===`admin`).length<=1)throw Error(`不能删除唯一的管理员账号`);return delete t[e],V(t),!0}async function K(e,t){await new Promise(e=>setTimeout(e,300));let n=B();if(!n[e])throw Error(`用户不存在`);let r=await U(t);return n[e].passwordHash=r,V(n),!0}var q={class:`users-view`},J={class:`reset-content`},Y={class:`reset-info`},X=b(l({__name:`UsersAdminView`,setup(e){let r=g(),o=j(),s=v(!1),c=v([]),l=v(!1),u=v(!1),d=v(null),f=v(null),h=v(``),_={admin:{label:`管理员`,type:`error`},member:{label:`成员`,type:`primary`},viewer:{label:`观察者`,type:`default`}},y=[{key:`id`,title:`ID`,width:120},{key:`username`,title:`用户名`,width:120},{key:`email`,title:`邮箱`,width:180},{key:`role`,title:`角色`,width:100,render(e){let t=_[e.role]||{label:e.role,type:`default`};return n(k,{type:t.type,size:`small`},()=>t.label)}},{key:`actions`,title:`操作`,width:200,render(e){return n(`div`,{class:`actions`},[n(O,{size:`small`,type:`default`,onClick:()=>{f.value=e,u.value=!0}},()=>`重置密码`),n(O,{size:`small`,type:`error`,style:{marginLeft:`8px`},onClick:()=>{d.value=e,l.value=!0}},()=>`删除`)])}}];async function b(){s.value=!0;try{c.value=await W()}catch(e){o.error(e.message)}finally{s.value=!1}}function x(){d.value&&N(d.value.email)}async function N(e){try{await G(e),o.success(`用户 ${e} 已删除`),await b()}catch(e){o.error(e.message)}finally{l.value=!1,d.value=null}}function F(){if(!f.value||!h.value.trim()){o.warning(`请填写新密码`);return}I(f.value.email,h.value)}async function I(e,t){try{await K(e,t),o.success(`用户 ${e} 密码已重置`),h.value=``,await b()}catch(e){o.error(e.message)}finally{u.value=!1,f.value=null}}return i(()=>{b()}),(e,n)=>(T(),w(`div`,q,[n[4]||=S(`h2`,{class:`page-title`},`👥 用户管理 (管理员)`,-1),C(m(D),{type:`info`,bordered:!1,style:{"margin-bottom":`20px`}},{header:a(()=>[t(` 当前登录：`+p(m(r).user?.username)+` (`+p(m(r).user?.role===`admin`?`管理员`:m(r).user?.role===`member`?`成员`:`观察者`)+`) `,1)]),_:1}),C(m(E),{class:`users-card`},{default:a(()=>[C(m(L),{columns:y,data:c.value,loading:s.value},null,8,[`data`,`loading`])]),_:1}),C(m(A),{show:l.value,"onUpdate:show":n[0]||=e=>l.value=e,preset:`confirm`,title:`确认删除用户`,content:`此操作不可撤销，请确认删除？`,onPositiveClick:x},null,8,[`show`]),C(m(A),{show:u.value,"onUpdate:show":n[2]||=e=>u.value=e,preset:`card`,title:`重置用户密码`},{footer:a(()=>[C(m(P),{justify:`end`},{default:a(()=>[C(m(O),{onClick:F,type:`primary`},{default:a(()=>[...n[3]||=[t(`确认重置`,-1)]]),_:1})]),_:1})]),default:a(()=>[S(`div`,J,[S(`div`,Y,[S(`b`,null,p(f.value?.email),1)]),C(m(M),{value:h.value,"onUpdate:value":n[1]||=e=>h.value=e,type:`password`,placeholder:`输入新密码`,"show-password-on":`click`},null,8,[`value`])])]),_:1},8,[`show`])]))}}),[[`__scopeId`,`data-v-b3791be7`]]);export{X as default};