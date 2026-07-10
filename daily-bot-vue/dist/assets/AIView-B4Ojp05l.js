import{Mn as e,Vn as t,Yn as n,_n as r,ar as i,dn as a,fn as o,gn as s,l as c,mn as l,nr as u,pn as d,t as f,u as p,un as m,vn as h}from"./_plugin-vue_export-helper-Dw8IhM_J.js";import{t as g}from"./use-message-CCOe2Xnn.js";import{t as _}from"./Spin-IWOQoNI0.js";import{r as v,v as y,w as b}from"./index-0WQr_tjR.js";var x={class:`ai-view`},S={class:`config-row`},C={class:`config-item`},w={class:`config-item`},T={class:`config-value`},E={class:`action-row`},D={class:`report-content`},O={key:1,class:`loading-hint`},k=f(h({__name:`AIView`,setup(f){let h=v(),k=g(),A=m(()=>h.getCred(`AI_API_KEY`)||``),j=m(()=>h.getCred(`AI_BASE_URL`)||``),M=m(()=>h.getCred(`AI_MODEL`)||``),N=m(()=>h.isConnected(`ai`)),P=n(!1),F=n(!1),I=n(``);async function L(){if(!A.value||!j.value){k.warning(`请先填写 API Key 和 Base URL`);return}P.value=!0;try{let e=j.value.replace(/\/$/,``)+`/models`;await c.get(e,{headers:{Authorization:`Bearer ${A.value}`}}),k.success(`连接成功`)}catch(e){k.error(`连接失败: ${e?.response?.data?.error?.message||e.message}`)}finally{P.value=!1}}async function R(){F.value=!0,I.value=``,await new Promise(e=>setTimeout(e,1500));let e=`╔══════════════════════════════════════════╗
║        📊 团队工作流智能分析报告          ║
║          生成时间: ${new Date().toLocaleString(`zh-CN`)}  ║
╚══════════════════════════════════════════╝

【📈 总体概览】
• 今日代码提交: 24 次 (↑12% vs 昨日)
• 活跃仓库: 3 个
• Pull Request: 8 个 (4 open / 4 merged)
• 代码审查覆盖: 92%

【👥 成员贡献 TOP 3】
1. 张三 — 8 commits, 2 PRs merged
2. 李四 — 6 commits, 1 PR merged
3. 王五 — 5 commits, 3 reviews

【🔍 代码质量分析】
• 新增代码行数: 1,250 行
• 删除代码行数: 340 行
• 平均审查时间: 2.3 小时
• 测试覆盖率: 87.5%

【⚠️ 风险提示】
• 前端模块 dashboard 近期改动频繁，建议关注
• PR #128 已开放 3 天，建议优先审查
• 依赖库 @vueuse/core 有可用更新

【✅ 建议】
• 建议加强代码审查流程，缩短审查周期
• 考虑引入自动化测试提升覆盖率至 90%+
• 安排技术分享会，分享本周最佳实践
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           报告由 AI 自动生成
`;I.value=e,F.value=!1,k.success(`报告生成完毕`)}return(n,c)=>(e(),l(`div`,x,[c[5]||=a(`h2`,{class:`page-title`},`🤖 AI 助手`,-1),r(u(p),{title:`AI 配置`,class:`config-card`},{default:t(()=>[a(`div`,S,[a(`div`,C,[c[0]||=a(`span`,{class:`config-label`},`连接状态`,-1),r(u(b),{type:N.value?`success`:`error`,size:`small`},{default:t(()=>[s(i(N.value?`已配置`:`未配置`),1)]),_:1},8,[`type`])]),a(`div`,w,[c[1]||=a(`span`,{class:`config-label`},`模型`,-1),a(`span`,T,i(M.value||`未设置`),1)]),r(u(y),{type:`primary`,loading:P.value,onClick:L,size:`small`},{default:t(()=>[...c[2]||=[s(` 测试连接 `,-1)]]),_:1},8,[`loading`])])]),_:1}),r(u(p),{class:`action-card`},{default:t(()=>[a(`div`,E,[c[3]||=a(`span`,{class:`action-desc`},`生成团队工作流智能分析报告`,-1),r(u(y),{type:`primary`,loading:F.value,onClick:R,size:`large`},{default:t(()=>[s(i(F.value?`生成中...`:`🚀 生成报告`),1)]),_:1},8,[`loading`])])]),_:1}),I.value?(e(),o(u(p),{key:0,title:`📄 分析报告`,class:`report-card`},{default:t(()=>[a(`pre`,D,i(I.value),1)]),_:1})):d(``,!0),F.value?(e(),l(`div`,O,[r(u(_),{show:!0}),c[4]||=a(`span`,null,`AI 正在分析团队数据，请稍候...`,-1)])):d(``,!0)]))}}),[[`__scopeId`,`data-v-fd8deadc`]]);export{k as default};