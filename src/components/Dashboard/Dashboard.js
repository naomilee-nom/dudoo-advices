
const InputGroup = ({ label, children, className = "" }) => (
  <div className={`space-y-1.5 ${className}`}>
    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider pl-1">{label}</label>
    {children}
  </div>
);

const ResultCard = ({ label, value, colorClass, icon }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 text-center group">
    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-slate-500 transition-colors">{label}</div>
    <div className={`text-3xl font-black tabular-nums ${colorClass}`}>
      {icon && <span className="mr-1 text-xl opacity-70">{icon}</span>}
      {value}
    </div>
  </div>
);

export const Dashboard = ({ state, handlers }) => {
  const { rd, qa, bugs, dates } = state;
  const { setRd, setQa, setBugs, setDates } = handlers;

  const getDays = () => {
    const diff = Math.ceil((new Date(dates.actual) - new Date(dates.expected)) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };
  const days = getDays();
  const dailyCost = ((rd.salary / 30) * rd.n) + ((qa.salary / 30) * qa.n);
  const totalLoss = dailyCost * days;
  const qaBugBonus = (bugs.s1 * 1000) + (bugs.s2 * 500) + (bugs.s3 * 200) + (bugs.s4 * 100);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="bg-slate-50 p-6 border-b border-slate-200 flex flex-col md:flex-row justify-center items-center gap-6">
        <InputGroup label="📅 預計結案日">
          <input type="date" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 font-bold text-slate-700 shadow-sm focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" 
            value={dates.expected} onChange={e => setDates({ ...dates, expected: e.target.value })} />
        </InputGroup>
        <div className="text-slate-300 hidden md:block text-2xl animate-pulse">➜</div>
        <InputGroup label="🏁 實際/目前日期">
          <input type="date" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 font-bold text-slate-700 shadow-sm focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
            value={dates.actual} onChange={e => setDates({ ...dates, actual: e.target.value })} />
        </InputGroup>
        <div className="bg-rose-50 border border-rose-100 px-6 py-3 rounded-2xl text-center min-w-[140px]">
          <div className="text-[10px] font-black text-rose-400 uppercase tracking-tighter mb-0.5">目前累計延遲</div>
          <div className="text-2xl font-black text-rose-600 tabular-nums">{days} 天</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        <div className="bg-blue-50/40 p-6 rounded-3xl border-l-8 border-blue-500 space-y-6">
          <h3 className="text-blue-800 font-black text-xl flex items-center gap-2">💻 RD 研發團隊設定</h3>
          <div className="grid grid-cols-2 gap-4">
            <InputGroup label="團隊人數"><input type="number" className="w-full rounded-xl p-3 border border-blue-100 shadow-sm" value={rd.n} onChange={e => setRd({ ...rd, n: e.target.value })} /></InputGroup>
            <InputGroup label="平均月薪"><input type="number" className="w-full rounded-xl p-3 border border-blue-100 shadow-sm" value={rd.salary} onChange={e => setRd({ ...rd, salary: e.target.value })} /></InputGroup>
          </div>
          <InputGroup label="🎁 原定結案獎金 (單人)">
            <input type="number" className="w-full rounded-xl p-3 border-2 border-blue-500 bg-white font-bold text-blue-700 shadow-inner" 
              value={rd.bonus} onChange={e => setRd({ ...rd, bonus: e.target.value })} />
          </InputGroup>
        </div>

        <div className="bg-emerald-50/40 p-6 rounded-3xl border-l-8 border-emerald-500 space-y-6">
          <h3 className="text-emerald-800 font-black text-xl flex items-center gap-2">🔍 QA 與 Bug 統計</h3>
          <div className="grid grid-cols-2 gap-4">
            <InputGroup label="QA 人數"><input type="number" className="w-full rounded-xl p-3 border border-emerald-100 shadow-sm" value={qa.n} onChange={e => setQa({ ...qa, n: e.target.value })} /></InputGroup>
            <InputGroup label="QA 月薪"><input type="number" className="w-full rounded-xl p-3 border border-emerald-100 shadow-sm" value={qa.salary} onChange={e => setQa({ ...qa, salary: e.target.value })} /></InputGroup>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['s1', 's2', 's3', 's4'].map(lv => (
              <InputGroup label={lv.toUpperCase()} key={lv}>
                <input type="number" className="w-full rounded-xl p-2 border border-emerald-100 text-center font-bold" value={bugs[lv]} onChange={e => setBugs({ ...bugs, [lv]: parseInt(e.target.value)||0 })} />
              </InputGroup>
            ))}
          </div>
        </div>
      </div>

      <div className="px-8 pb-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ResultCard label="⌛ 每日團隊薪資支出" value={`$${Math.round(dailyCost).toLocaleString()}`} colorClass="text-slate-700" />
          <ResultCard label="📉 累計延遲薪資損失" value={`$${Math.round(totalLoss).toLocaleString()}`} colorClass="text-rose-600" icon="⚠️" />
          <ResultCard label="💰 目前 QA 激勵獎金" value={`$${Math.round(qaBugBonus).toLocaleString()}`} colorClass="text-emerald-600" icon="✅" />
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200 relative overflow-hidden">
          <div className="relative z-10 flex items-start gap-4">
            <div className="text-4xl text-emerald-500">💡</div>
            <div>
              <h4 className="font-black text-emerald-900 mb-1">老闆觀點：成本止損核心</h4>
              <p className="text-emerald-800 text-sm leading-relaxed">
                目前延遲已導致公司多支出 <span className="font-bold underline">${Math.round(totalLoss).toLocaleString()}</span>。<br/>
                每提早一天結案，即可直接為公司省下 <span className="font-bold text-emerald-600 text-lg">${Math.round(dailyCost).toLocaleString()}</span> 的人力成本。
                <span className="font-bold block mt-1">「速度就是金錢，準時即是利潤。」</span>
              </p>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 text-8xl opacity-5 grayscale select-none pointer-events-none">💰</div>
        </div>
      </div>
    </div>
  );
};
