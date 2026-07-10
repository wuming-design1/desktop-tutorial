import{An as e,Qn as t,Vn as n,Yn as r,an as i,en as a,in as o,n as s,nn as c,on as l,rn as u,sn as d,t as f,tn as p,xn as m}from"./_plugin-vue_export-helper-CCvUJjhJ.js";import{t as h}from"./use-message-DUXOc--V.js";import{t as g}from"./Spin-BFoEh8EG.js";import{T as _,n as v,y}from"./index-OlDhySiI.js";import{t as b}from"./axios-BGmZl9Qd.js";var x={class:`ai-view`},S={class:`config-row`},C={class:`config-item`},w={class:`config-item`},T={class:`config-value`},E={class:`action-row`},D={class:`report-content`},O={key:1,class:`loading-hint`},k=f(d({__name:`AIView`,setup(d){let f=v(),k=h(),A=a(()=>f.getCred(`AI_API_KEY`)||``),j=a(()=>f.getCred(`AI_BASE_URL`)||``),M=a(()=>f.getCred(`AI_MODEL`)||``),N=a(()=>f.isConnected(`ai`)),P=n(!1),F=n(!1),I=n(``);async function L(){if(!A.value||!j.value){k.warning(`请先填写 API Key 和 Base URL`);return}P.value=!0;try{let e=j.value.replace(/\/$/,``)+`/models`;await b.get(e,{headers:{Authorization:`Bearer ${A.value}`}}),k.success(`连接成功`)}catch(e){k.error(`连接失败: ${e?.response?.data?.error?.message||e.message}`)}finally{P.value=!1}}async function R(){F.value=!0,I.value=``,await new Promise(e=>setTimeout(e,1500));let e=`╔══════════════════════════════════════════╗
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
`;I.value=e,F.value=!1,k.success(`报告生成完毕`)}return(n,a)=>(m(),o(`div`,x,[a[5]||=p(`h2`,{class:`page-title`},`🤖 AI 助手`,-1),l(r(s),{title:`AI 配置`,class:`config-card`},{default:e(()=>[p(`div`,S,[p(`div`,C,[a[0]||=p(`span`,{class:`config-label`},`连接状态`,-1),l(r(_),{type:N.value?`success`:`error`,size:`small`},{default:e(()=>[i(t(N.value?`已配置`:`未配置`),1)]),_:1},8,[`type`])]),p(`div`,w,[a[1]||=p(`span`,{class:`config-label`},`模型`,-1),p(`span`,T,t(M.value||`未设置`),1)]),l(r(y),{type:`primary`,loading:P.value,onClick:L,size:`small`},{default:e(()=>[...a[2]||=[i(` 测试连接 `,-1)]]),_:1},8,[`loading`])])]),_:1}),l(r(s),{class:`action-card`},{default:e(()=>[p(`div`,E,[a[3]||=p(`span`,{class:`action-desc`},`生成团队工作流智能分析报告`,-1),l(r(y),{type:`primary`,loading:F.value,onClick:R,size:`large`},{default:e(()=>[i(t(F.value?`生成中...`:`🚀 生成报告`),1)]),_:1},8,[`loading`])])]),_:1}),I.value?(m(),c(r(s),{key:0,title:`📄 分析报告`,class:`report-card`},{default:e(()=>[p(`pre`,D,t(I.value),1)]),_:1})):u(``,!0),F.value?(m(),o(`div`,O,[l(r(g),{show:!0}),a[4]||=p(`span`,null,`AI 正在分析团队数据，请稍候...`,-1)])):u(``,!0)]))}}),[[`__scopeId`,`data-v-fd8deadc`]]);export{k as default};