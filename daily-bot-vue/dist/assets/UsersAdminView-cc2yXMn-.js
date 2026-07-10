import{$n as e,Bt as t,Ft as n,Hn as r,Ht as i,Pt as a,Rt as o,Sn as s,Vt as c,Xn as l,cn as u,en as d,in as f,jn as p,n as m,nt as h,on as g,sn as _,t as v,tn as y,tt as b,un as x,w as S,x as C,yn as w,zt as T}from"./_plugin-vue_export-helper-Diu8tYPd.js";import{t as E}from"./auth-BG0zYGeO.js";import{t as D}from"./Alert-CsgrRJk3.js";import{t as O}from"./use-message-h3aJY7_c.js";import{C as k,_ as A,c as j,f as M,m as N,y as P}from"./index-C_jFjfIR.js";import{n as F,o as I,r as L}from"./auth-BUFRizX-.js";var R=a([n(`table`,`
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
 `)]),o(`bordered`,`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[a(`tr`,[a(`&:last-child`,[a(`td`,`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),o(`single-line`,[a(`th`,`
 border-right: 0px solid var(--n-merged-border-color);
 `),a(`td`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o(`single-column`,[a(`tr`,[a(`&:not(:last-child)`,[a(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),o(`striped`,[a(`tr:nth-of-type(even)`,[a(`td`,`background-color: var(--n-td-color-striped)`)])]),T(`bottom-bordered`,[a(`tr`,[a(`&:last-child`,[a(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),c(n(`table`,`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[a(`th`,`
 background-color: var(--n-th-color-modal);
 `),a(`td`,`
 background-color: var(--n-td-color-modal);
 `)])),i(n(`table`,`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[a(`th`,`
 background-color: var(--n-th-color-popover);
 `),a(`td`,`
 background-color: var(--n-td-color-popover);
 `)]))]),z=u({name:`Table`,props:Object.assign(Object.assign({},C.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:String}),setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i,mergedComponentPropsRef:a}=h(e),o=d(()=>e.size||a?.value?.Table?.size||`medium`),s=C(`Table`,`-table`,R,j,e,n),c=S(`Table`,i,n),l=d(()=>{let e=o.value,{self:{borderColor:n,tdColor:r,tdColorModal:i,tdColorPopover:a,thColor:c,thColorModal:l,thColorPopover:u,thTextColor:d,tdTextColor:f,borderRadius:p,thFontWeight:m,lineHeight:h,borderColorModal:g,borderColorPopover:_,tdColorStriped:v,tdColorStripedModal:y,tdColorStripedPopover:b,[t(`fontSize`,e)]:x,[t(`tdPadding`,e)]:S,[t(`thPadding`,e)]:C},common:{cubicBezierEaseInOut:w}}=s.value;return{"--n-bezier":w,"--n-td-color":r,"--n-td-color-modal":i,"--n-td-color-popover":a,"--n-td-text-color":f,"--n-border-color":n,"--n-border-color-modal":g,"--n-border-color-popover":_,"--n-border-radius":p,"--n-font-size":x,"--n-th-color":c,"--n-th-color-modal":l,"--n-th-color-popover":u,"--n-th-font-weight":m,"--n-th-text-color":d,"--n-line-height":h,"--n-td-padding":S,"--n-th-padding":C,"--n-td-color-striped":v,"--n-td-color-striped-modal":y,"--n-td-color-striped-popover":b}}),u=r?b(`table`,d(()=>o.value[0]),l,e):void 0;return{rtlEnabled:c,mergedClsPrefix:n,cssVars:r?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),x(`table`,{class:[`${t}-table`,this.themeClass,{[`${t}-table--rtl`]:this.rtlEnabled,[`${t}-table--bottom-bordered`]:this.bottomBordered,[`${t}-table--bordered`]:this.bordered,[`${t}-table--single-line`]:this.singleLine,[`${t}-table--single-column`]:this.singleColumn,[`${t}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),B={class:`users-view`},V={class:`reset-content`},H={class:`reset-info`},U=v(u({__name:`UsersAdminView`,setup(t){let n=E(),i=O(),a=r(!1),o=r([]),c=r(!1),u=r(!1),d=r(null),h=r(null),v=r(``),b={admin:{label:`管理员`,type:`error`},member:{label:`成员`,type:`primary`},viewer:{label:`观察者`,type:`default`}},S=[{key:`id`,title:`ID`,width:120},{key:`username`,title:`用户名`,width:120},{key:`email`,title:`邮箱`,width:180},{key:`role`,title:`角色`,width:100,render(e){let t=b[e.role]||{label:e.role,type:`default`};return x(k,{type:t.type,size:`small`},()=>t.label)}},{key:`actions`,title:`操作`,width:200,render(e){return x(`div`,{class:`actions`},[x(A,{size:`small`,type:`default`,onClick:()=>{h.value=e,u.value=!0}},()=>`重置密码`),x(A,{size:`small`,type:`error`,style:{marginLeft:`8px`},onClick:()=>{d.value=e,c.value=!0}},()=>`删除`)])}}];async function C(){a.value=!0;try{o.value=await L()}catch(e){i.error(e.message)}finally{a.value=!1}}function T(){d.value&&j(d.value.email)}async function j(e){try{await F(e),i.success(`用户 ${e} 已删除`),await C()}catch(e){i.error(e.message)}finally{c.value=!1,d.value=null}}function R(){if(!h.value||!v.value.trim()){i.warning(`请填写新密码`);return}U(h.value.email,v.value)}async function U(e,t){try{await I(e,t),i.success(`用户 ${e} 密码已重置`),v.value=``,await C()}catch(e){i.error(e.message)}finally{u.value=!1,h.value=null}}return w(()=>{C()}),(t,r)=>(s(),f(`div`,B,[r[4]||=y(`h2`,{class:`page-title`},`👥 用户管理 (管理员)`,-1),_(l(D),{type:`info`,bordered:!1,style:{"margin-bottom":`20px`}},{header:p(()=>[g(` 当前登录：`+e(l(n).user?.username)+` (`+e(l(n).user?.role===`admin`?`管理员`:l(n).user?.role===`member`?`成员`:`观察者`)+`) `,1)]),_:1}),_(l(m),{class:`users-card`},{default:p(()=>[_(l(z),{columns:S,data:o.value,loading:a.value},null,8,[`data`,`loading`])]),_:1}),_(l(N),{show:c.value,"onUpdate:show":r[0]||=e=>c.value=e,preset:`confirm`,title:`确认删除用户`,content:`此操作不可撤销，请确认删除？`,onPositiveClick:T},null,8,[`show`]),_(l(N),{show:u.value,"onUpdate:show":r[2]||=e=>u.value=e,preset:`card`,title:`重置用户密码`},{footer:p(()=>[_(l(M),{justify:`end`},{default:p(()=>[_(l(A),{onClick:R,type:`primary`},{default:p(()=>[...r[3]||=[g(`确认重置`,-1)]]),_:1})]),_:1})]),default:p(()=>[y(`div`,V,[y(`div`,H,[y(`b`,null,e(h.value?.email),1)]),_(l(P),{value:v.value,"onUpdate:value":r[1]||=e=>v.value=e,type:`password`,placeholder:`输入新密码`,"show-password-on":`click`},null,8,[`value`])])]),_:1},8,[`show`])]))}}),[[`__scopeId`,`data-v-bcacc652`]]);export{U as default};