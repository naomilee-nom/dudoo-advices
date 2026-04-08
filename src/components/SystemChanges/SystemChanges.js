
const ChangeCard = ({ title, desc, emoji, tag, tagColor }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-start justify-between mb-4">
      <div className={`text-3xl p-3 rounded-xl bg-slate-50`}>{emoji}</div>
      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${tagColor}`}>
        {tag}
      </span>
    </div>
    <h4 className="text-xl font-black text-slate-800 mb-2">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

export const SystemChanges = () => (
  <div className="p-8 space-y-8 animate-in fade-in slide-in-from-right-2 duration-500">
    <div className="text-center space-y-2">
      <h2 className="text-4xl font-black text-slate-800 tracking-tight">🛠️ 我希望的制度改變</h2>
      <p className="text-slate-500 font-medium">從管理面推動技術卓越，建立可持續發展的研發團隊</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ChangeCard 
        emoji="⚖️"
        title="獎勵大於懲罰"
        desc="取消對延遲開發的『責任追究』，改為建立『效率紅利』制度。當專案能依照估時或提前結案，節省的人力成本應提撥 20% 作為團隊開發公積金或專案獎金。"
        tag="核心價值"
        tagColor="bg-blue-100 text-blue-700"
      />
      <ChangeCard 
        emoji="📅"
        title="雙重估時校準"
        desc="拒絕『老闆拍腦袋』或『RD 趕鴨子上架』。採用雙人估時法：由一位資深、一位中堅 RD 獨立估計，若差異超過 20% 需開啟討論，取高者作為基準時程。"
        tag="估時流程"
        tagColor="bg-amber-100 text-amber-700"
      />
      <ChangeCard 
        emoji="🛡️"
        title="品質列入必備工期"
        desc="在 Jira 或 甘特圖中，單元測試 (UT) 與 代碼審查 (CR) 應獨立列出工項。若沒有這兩項時間，專案不予啟動。我們必須理解：『沒寫測試的時間，就是未來維護的利息』。"
        tag="研發品質"
        tagColor="bg-emerald-100 text-emerald-700"
      />
      <ChangeCard 
        emoji="🎓"
        title="師徒成長獎金"
        desc="資深人員有義務進行技術傳承。若其指導的新人 (Junior) 能獨立完成專案且品質達標，指導者應獲得額外的 Mentor 成長獎勵金，而非只是做功德。"
        tag="人才培育"
        tagColor="bg-indigo-100 text-indigo-700"
      />
      <ChangeCard 
        emoji="🛑"
        title="熔斷機制 (Cut-off)"
        desc="當專案延遲超過預期 50% 時，應啟動強制性『技術債審核會議』，而非盲目加班。找出是需求變更還是技術瓶頸，必要時進行功能砍單 (Scope Cut)，確保核心上線。"
        tag="風險控制"
        tagColor="bg-rose-100 text-rose-700"
      />
      <ChangeCard 
        emoji="💬"
        title="Spec 透明化會議"
        desc="規格會議不只是 RD 被通知，而是雙向挑戰。業務與產品經理必須回答 RD 提出的 3 個『如果...怎麼辦』情境。規格不清，開發不發，避免做白工。"
        tag="溝通機制"
        tagColor="bg-teal-100 text-teal-700"
      />
    </div>

    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-10 rounded-3xl border border-slate-200 text-center relative group">
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🏢</div>
        <h3 className="text-2xl font-black text-slate-800 italic">「好的制度，能讓平庸的員工也做出非凡的貢獻。」</h3>
        <p className="text-slate-500 leading-relaxed text-sm">
          身為資深前端工程師，我深知軟體開發不只是寫程式。透過制度的微調，我們能減少無效溝通、降低挫折感，最終為公司創造更高的商業價值。
        </p>
      </div>
    </div>
  </div>
);
