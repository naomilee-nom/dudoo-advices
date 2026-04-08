
const ProposalItem = ({ tag, title, items, colorClass }) => (
  <div className={`bg-white rounded-2xl border-l-8 p-6 shadow-sm border-slate-100 ${colorClass}`}>
    <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">{tag}</span>
    <h4 className="text-lg font-bold text-slate-800 mb-3">{title}</h4>
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
          <span className="text-blue-500 mt-1">●</span>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  </div>
);

export const Proposals = ({ dailyCost }) => (
  <div className="p-8 space-y-8 animate-in fade-in zoom-in-95 duration-500">
    <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl shadow-blue-200 relative overflow-hidden group">
      <div className="relative z-10">
        <div className="inline-block px-3 py-1 bg-blue-500/50 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-50 mb-4 border border-blue-400">效益分析提案</div>
        <h2 className="text-3xl font-black mb-3 leading-tight text-white drop-shadow-sm">🎯 準時結案獎金提案 (RD $10,000)</h2>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
          <p className="text-blue-50 text-base leading-relaxed">
            若 QA 完成測試且能準時結案，建議發放 RD <b>$10,000</b> 獎金。
            <br/>
            <span className="text-sm opacity-80 block mt-2">效益對照：獎金支出 $10,000 vs. 每日延遲人力成本 ${Math.round(dailyCost).toLocaleString()}</span>
          </p>
          <div className="mt-4 pt-4 border-t border-white/20 text-xl font-bold text-white flex items-center gap-2 animate-pulse">
            🚀 結論：每提早 1 天，公司即淨賺 ${Math.round(dailyCost - 10000).toLocaleString()}！
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 text-9xl -mr-10 -mt-10 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700 select-none pointer-events-none">💎</div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProposalItem 
        tag="人力與時程估計"
        title="📊 雙人估時與動態調整"
        colorClass="border-amber-400"
        items={[
          "<b>精準估時：</b> 拒絕單一 RD 估時，應由 2 位以上 RD 對功能估計並取平均值。",
          "<b>壓縮補償：</b> 若業務端壓縮開發時間，獎金應維持原比例，不得扣除。",
          "<b>成長監控：</b> 新進人員或重點對象，時程需以 <b>1.5x</b> 計算。",
          "<b>Mentor 激勵：</b> 新人之獎金 <b>25%</b> 應提撥給帶領的前後端 Mentor。"
        ]}
      />
      <ProposalItem 
        tag="品質流程規範"
        title="⚙️ 強制性 SOP 標準化"
        colorClass="border-blue-400"
        items={[
          "<b>Spec Confirm：</b> 所有人必須參與，會議中每人需提出 <b>1~3 個</b> 邏輯問題。",
          "<b>緩衝設計：</b> 甘特圖必須包含至少 <b>0.5 天</b> 的非重疊最終確認期。",
          "<b>品質保證：</b> Unit Test 與 PR 審核需各預留至少 <b>1 天</b>，且兩者時程不可重疊。"
        ]}
      />
    </div>

    <div className="bg-slate-800 text-white p-6 rounded-2xl flex items-start gap-4 shadow-lg shadow-slate-200">
      <div className="text-3xl">👨‍💻</div>
      <div>
        <h4 className="font-black text-slate-100 mb-1">Staff Engineer 的專業建議</h4>
        <p className="text-slate-400 text-sm italic">
          「這套提案的核心在於 **用小額獎金終結高額薪資燃燒**。流程標準化後，我們能更準確地預測結案時間，降低不可控的研發風險。」
        </p>
      </div>
    </div>
  </div>
);
