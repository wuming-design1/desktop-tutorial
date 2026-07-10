import{An as e,Bt as t,Ft as n,Ht as r,Pt as i,Qn as a,Rt as o,Vn as s,Vt as c,Yn as l,an as u,en as d,in as f,ln as p,n as m,nt as h,on as g,sn as _,t as v,tn as y,tt as b,vn as x,w as S,x as C,xn as w,zt as T}from"./_plugin-vue_export-helper-CCvUJjhJ.js";import{t as E}from"./auth-D2LWN8vt.js";import{t as D}from"./Alert-Bt7NaasX.js";import{t as O}from"./use-message-DUXOc--V.js";import{T as k,c as A,g as j,p as M,x as N,y as P}from"./index-OlDhySiI.js";import{n as F,o as I,r as L}from"./auth-BUFRizX-.js";var R=i([n(`table`,`
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
 `,[i(`th`,`
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
 `,[i(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),i(`td`,`
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
 `,[i(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o(`bordered`,`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[i(`tr`,[i(`&:last-child`,[i(`td`,`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),o(`single-line`,[i(`th`,`
 border-right: 0px solid var(--n-merged-border-color);
 `),i(`td`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o(`single-column`,[i(`tr`,[i(`&:not(:last-child)`,[i(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),o(`striped`,[i(`tr:nth-of-type(even)`,[i(`td`,`background-color: var(--n-td-color-striped)`)])]),T(`bottom-bordered`,[i(`tr`,[i(`&:last-child`,[i(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),c(n(`table`,`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[i(`th`,`
 background-color: var(--n-th-color-modal);
 `),i(`td`,`
 background-color: var(--n-td-color-modal);
 `)])),r(n(`table`,`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[i(`th`,`
 background-color: var(--n-th-color-popover);
 `),i(`td`,`
 background-color: var(--n-td-color-popover);
 `)]))]),z=_({name:`Table`,props:Object.assign(Object.assign({},C.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:String}),setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i,mergedComponentPropsRef:a}=h(e),o=d(()=>e.size||a?.value?.Table?.size||`medium`),s=C(`Table`,`-table`,R,A,e,n),c=S(`Table`,i,n),l=d(()=>{let e=o.value,{self:{borderColor:n,tdColor:r,tdColorModal:i,tdColorPopover:a,thColor:c,thColorModal:l,thColorPopover:u,thTextColor:d,tdTextColor:f,borderRadius:p,thFontWeight:m,lineHeight:h,borderColorModal:g,borderColorPopover:_,tdColorStriped:v,tdColorStripedModal:y,tdColorStripedPopover:b,[t(`fontSize`,e)]:x,[t(`tdPadding`,e)]:S,[t(`thPadding`,e)]:C},common:{cubicBezierEaseInOut:w}}=s.value;return{"--n-bezier":w,"--n-td-color":r,"--n-td-color-modal":i,"--n-td-color-popover":a,"--n-td-text-color":f,"--n-border-color":n,"--n-border-color-modal":g,"--n-border-color-popover":_,"--n-border-radius":p,"--n-font-size":x,"--n-th-color":c,"--n-th-color-modal":l,"--n-th-color-popover":u,"--n-th-font-weight":m,"--n-th-text-color":d,"--n-line-height":h,"--n-td-padding":S,"--n-th-padding":C,"--n-td-color-striped":v,"--n-td-color-striped-modal":y,"--n-td-color-striped-popover":b}}),u=r?b(`table`,d(()=>o.value[0]),l,e):void 0;return{rtlEnabled:c,mergedClsPrefix:n,cssVars:r?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),p(`table`,{class:[`${t}-table`,this.themeClass,{[`${t}-table--rtl`]:this.rtlEnabled,[`${t}-table--bottom-bordered`]:this.bottomBordered,[`${t}-table--bordered`]:this.bordered,[`${t}-table--single-line`]:this.singleLine,[`${t}-table--single-column`]:this.singleColumn,[`${t}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),B={class:`users-view`},V={class:`reset-content`},H={class:`reset-info`},U=v(_({__name:`UsersAdminView`,setup(t){let n=E(),r=O(),i=s(!1),o=s([]),c=s(!1),d=s(!1),h=s(null),_=s(null),v=s(``),b={admin:{label:`管理员`,type:`error`},member:{label:`成员`,type:`primary`},viewer:{label:`观察者`,type:`default`}},S=[{key:`id`,title:`ID`,width:120},{key:`username`,title:`用户名`,width:120},{key:`email`,title:`邮箱`,width:180},{key:`role`,title:`角色`,width:100,render(e){let t=b[e.role]||{label:e.role,type:`default`};return p(k,{type:t.type,size:`small`},()=>t.label)}},{key:`actions`,title:`操作`,width:200,render(e){return p(`div`,{class:`actions`},[p(P,{size:`small`,type:`default`,onClick:()=>{_.value=e,d.value=!0}},()=>`重置密码`),p(P,{size:`small`,type:`error`,style:{marginLeft:`8px`},onClick:()=>{h.value=e,c.value=!0}},()=>`删除`)])}}];async function C(){i.value=!0;try{o.value=await L()}catch(e){r.error(e.message)}finally{i.value=!1}}function T(){h.value&&A(h.value.email)}async function A(e){try{await F(e),r.success(`用户 ${e} 已删除`),await C()}catch(e){r.error(e.message)}finally{c.value=!1,h.value=null}}function R(){if(!_.value||!v.value.trim()){r.warning(`请填写新密码`);return}U(_.value.email,v.value)}async function U(e,t){try{await I(e,t),r.success(`用户 ${e} 密码已重置`),v.value=``,await C()}catch(e){r.error(e.message)}finally{d.value=!1,_.value=null}}return x(()=>{C()}),(t,r)=>(w(),f(`div`,B,[r[4]||=y(`h2`,{class:`page-title`},`👥 用户管理 (管理员)`,-1),g(l(D),{type:`info`,bordered:!1,style:{"margin-bottom":`20px`}},{header:e(()=>[u(` 当前登录：`+a(l(n).user?.username)+` (`+a(l(n).user?.role===`admin`?`管理员`:l(n).user?.role===`member`?`成员`:`观察者`)+`) `,1)]),_:1}),g(l(m),{class:`users-card`},{default:e(()=>[g(l(z),{columns:S,data:o.value,loading:i.value},null,8,[`data`,`loading`])]),_:1}),g(l(j),{show:c.value,"onUpdate:show":r[0]||=e=>c.value=e,preset:`confirm`,title:`确认删除用户`,content:`此操作不可撤销，请确认删除？`,onPositiveClick:T},null,8,[`show`]),g(l(j),{show:d.value,"onUpdate:show":r[2]||=e=>d.value=e,preset:`card`,title:`重置用户密码`},{footer:e(()=>[g(l(M),{justify:`end`},{default:e(()=>[g(l(P),{onClick:R,type:`primary`},{default:e(()=>[...r[3]||=[u(`确认重置`,-1)]]),_:1})]),_:1})]),default:e(()=>[y(`div`,V,[y(`div`,H,[y(`b`,null,a(_.value?.email),1)]),g(l(N),{value:v.value,"onUpdate:value":r[1]||=e=>v.value=e,type:`password`,placeholder:`输入新密码`,"show-password-on":`click`},null,8,[`value`])])]),_:1},8,[`show`])]))}}),[[`__scopeId`,`data-v-bcacc652`]]);export{U as default};