import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  AlertTriangle, 
  ShieldAlert, 
  MessageSquare,
  Users,
  Code2,
  FileText,
  Bug,
  Split,
  Layers,
  Search,
  Check,
  Zap,
  Target,
  ListTodo
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SectionHeader = ({ title, description }) => (
  <div className="space-y-1 mb-10 border-l-2 border-slate-900 pl-5">
    <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
    {description && <p className="text-base text-stone-500 font-medium">{description}</p>}
  </div>
);

const SystemicLoop = () => {
  const steps = [
    { label: "現狀：規劃脫節", title: "滿載排程 (8H Progress)", desc: "強行忽略 Spec 閱讀、API 對接、測試與修 Bug 的必要成本。" },
    { label: "影響：品質放水", title: "捨棄 PR/UT 保進度", desc: "為了領取個人獎金，RD 必然選擇『先求會動，不求品質』。", isRed: true },
    { label: "連鎖：救火循環", title: "100+ Bug 爆發", desc: "系統不穩定導致後期產能被修補工作佔據，新功能進度停滯。", isRed: true },
    { label: "結果：執行力崩潰", title: "制度養出消極文化", desc: "工程師不再對品質負責，轉而對時程表進行消極防禦。", isRed: true }
  ];

  return (
    <div className="mb-24 px-4">
      <SectionHeader title="制度導致的惡性循環" description="分析目前的管理模式如何一步步瓦解團隊產能" />
      <div className="flex flex-col gap-2">
        {steps.map((step, idx) => (
          <div key={idx} className="group relative">
            <div className={cn(
              "p-6 border-l-4 flex flex-col md:flex-row md:items-center gap-6",
              step.isRed ? "border-rose-600 bg-rose-50/30" : "border-slate-900 bg-stone-50/50"
            )}>
              <div className="shrink-0 w-32">
                <span className={cn("text-base font-black uppercase tracking-tighter", step.isRed ? "text-rose-400" : "text-slate-400")}>
                  {step.label}
                </span>
              </div>
              <div className="space-y-1">
                <h4 className={cn("font-bold text-base", step.isRed ? "text-rose-700" : "text-slate-900")}>
                  {step.title}
                </h4>
                <p className={cn("text-base leading-relaxed font-medium", step.isRed ? "text-rose-600" : "text-stone-500")}>
                  {step.desc}
                </p>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <div className="flex justify-center h-4">
                <div className="w-px h-full bg-stone-200"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ScheduleTruth = () => {
  const categories = [
    { key: "progress", label: "實質開發進度", color: "bg-slate-900", desc: "撰寫新功能邏輯、UI 組件實作" },
    { key: "spec", label: "需求確認與閱讀", color: "bg-stone-500", desc: "閱讀 Spec、釐清模糊需求、確認 UIUX 細節" },
    { key: "sync", label: "溝通與對接", color: "bg-stone-400", desc: "API 格式確認、前後端邏輯校準" },
    { key: "quality", label: "品質維護 (PR/UT)", color: "bg-stone-300", desc: "Code Review、撰寫單元測試" },
    { key: "issues", label: "修正 Issue / Bug", color: "bg-stone-200", desc: "處理測試回報、線上修補、技術債清理" },
    { key: "meeting", label: "會議與中斷", color: "bg-stone-100", desc: "行政會議、訊息回覆、任務切換損耗" },
  ];

  const currentData = [
    { key: "progress", value: 45 }, 
    { key: "spec", value: 15 },
    { key: "sync", value: 10 },
    { key: "quality", value: 5 },
    { key: "issues", value: 15 },
    { key: "meeting", value: 10 },
  ];

  return (
    <div className="mb-24 px-4 space-y-10">
      <SectionHeader title="開發工時的真實分配" description="實際上僅有 1/2 至 2/3 的時間能用於推進進度" />
      <div className="space-y-4">
        <div className="flex items-end justify-between">
          <h4 className="text-base font-bold text-slate-900 uppercase tracking-widest">工時比例實況</h4>
          <span className="text-xl font-black text-rose-600 tracking-tighter italic">約 1/2 (45%)</span>
        </div>
        <div className="h-10 w-full flex rounded-none border border-stone-200 overflow-hidden">
          {currentData.map((item) => {
            const cat = categories.find(c => c.key === item.key);
            return (
              <div key={item.key} className={cn(cat.color, "h-full transition-all")} style={{ width: `${item.value}%` }} />
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 shadow-sm">
        {categories.map(cat => (
          <div key={cat.key} className="p-5 bg-white">
            <div className="flex items-center gap-3 mb-2">
              <div className={cn("w-3 h-3 shrink-0 rounded-full", cat.color)} />
              <span className="text-base font-bold text-slate-900 uppercase tracking-tight">{cat.label}</span>
            </div>
            <p className="text-base text-stone-500 leading-normal font-medium">{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ReformChecklist = () => {
  const suggestions = [
    { title: "建立規劃緩衝", content: "甘特圖僅以 <b>每日 5-6 小時</b> 有效工時進行進度排程，剩餘時間保留給必要非開發成本。" },
    { title: "前置需求消化", content: "開發項公告後，應預留 <b>2 日 Spec 閱讀與 API 對接期</b>，方正式計入甘特圖開發進度。" },
    { title: "品質標準前移", content: "將 PR 審核與 UT 撰寫列為完成必要條件。若跳過品質流程，該項目不予計入個人獎金完成度。" },
    { title: "實施修正週 (Buffer Week)", content: "上線日前一週全面停止新功能開發。全體專注 Bug 修復與品質校準，確保獎金不被 90 天條款扣回。" },
    { title: "時程壓縮補償", content: "若要求縮短原定估時，獎金應隨壓縮比例反向提升。若縮短為 1/2 時間，則獎金應對等提升為 200%。" },
    { title: "導師激勵機制", content: "輔導案採 <b>50/25/25</b> 獎金分配，並增加 1-2 日護航審核期，由利益綁定強化 Mentor 審核動力。" }
  ];

  return (
    <div className="mb-24 px-4">
      <SectionHeader title="具體改進建議" description="針對制度漏洞提出的結構性優化方案" />
      <div className="space-y-4">
        {suggestions.map((item, idx) => (
          <div key={idx} className="bg-stone-50 border border-stone-200 p-6 flex items-start gap-6">
            <div className="shrink-0 mt-1">
              <Check className="w-5 h-5 text-slate-900" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 uppercase tracking-tight">{item.title}</h4>
              <p className="text-base text-stone-600 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ComparisonTable = () => {
  const data = [
    { category: "時程與預告", current: "每日公告兩天後的項目。項目須老闆同意後始公告 RD 團隊。", reform: "甘特圖以 5-6 小時排程。預留 2 日 Spec 閱讀期。" },
    { category: "獎金標準", current: "項目於預定時程內完成。判定原則僅計算個人負責部分。", reform: "將 PR/UT 列為完成條件。若跳過流程，不計入個人獎金。", isRed: true },
    { category: "維護與扣項", current: "實際上線 7~90 天內若客戶反應問題，則扣回團隊獎金。", reform: "實施 Buffer Week。專注修復以保障 90 天內不被扣款。", isRed: true },
    { category: "輔導制度", current: "目標獎金分為個人與團隊兩大指標，各佔 50%。", reform: "採 50/25/25 獎金分配。增加 1-2 日護航審核期。" }
  ];

  return (
    <div className="mb-24 px-4">
      <SectionHeader title="制度優化對比" description="現行規定原文與改革方案對照" />
      <div className="border border-stone-200 overflow-hidden">
        <div className="grid grid-cols-12 bg-slate-900 text-stone-400 text-base font-black uppercase tracking-widest py-3 px-6">
          <div className="col-span-2">類別</div>
          <div className="col-span-5 border-l border-slate-800 pl-6">現行制度原文</div>
          <div className="col-span-5 border-l border-slate-800 pl-6">改革建議方案</div>
        </div>
        <div className="divide-y divide-stone-200">
          {data.map((row, idx) => (
            <div key={idx} className="grid grid-cols-12 items-stretch min-h-[100px]">
              <div className="col-span-2 p-6 bg-stone-50 flex items-center font-bold text-base text-slate-900">{row.category}</div>
              <div className="col-span-5 p-6 text-base text-slate-500 leading-relaxed font-medium flex items-center">{row.current}</div>
              <div className={cn("col-span-5 p-6 text-base leading-relaxed font-bold flex items-center border-l border-stone-100", row.isRed ? "text-rose-700 bg-rose-50/20" : "text-slate-900")}>
                {row.reform}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const StrategicSkills = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-white font-sans text-slate-900 min-h-screen">
      <SystemicLoop />
      <ScheduleTruth />
      <ReformChecklist />
      <ComparisonTable />
      <div className="mx-4 p-10 border border-rose-200 bg-rose-50/50 rounded-sm">
        <div className="flex gap-6 items-start text-rose-600">
          <ShieldAlert className="w-6 h-6 shrink-0 mt-1" />
          <div className="space-y-2">
            <h4 className="text-lg font-bold uppercase tracking-tight text-rose-700">核心結論：是制度養出了這種產能</h4>
            <p className="text-base text-rose-600 leading-relaxed font-bold">
              當甘特圖忽略了 <span className="underline decoration-rose-300 underline-offset-4 text-rose-800">1/2～1/3</span> 的必要開發成本時，工程師不再對品質負責，而是對時程表負責。
              這不是個人能力的懈怠，而是規劃偏差導致的<span className="underline decoration-rose-300 underline-offset-4 text-rose-800">制度性必然</span>。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
