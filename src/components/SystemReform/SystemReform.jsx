import React from 'react';
import { 
  FileText, 
  Check, 
  ShieldAlert, 
  Zap, 
  Users, 
  TrendingDown, 
  Timer,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Layers,
  GraduationCap,
  PenTool,
  Award
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SectionHeader = ({ title, description }) => (
  <div className="space-y-1 mb-10 border-l-2 border-slate-900 pl-5">
    <h3 className="text-xl font-bold text-slate-900 tracking-tight uppercase">{title}</h3>
    {description && <p className="text-base text-stone-500 font-medium">{description}</p>}
  </div>
);

const ComparisonTable = () => {
  const data = [
    {
      category: "時程估時邏輯",
      current: "項目時程須先取得老闆同意後，始向 RD 團隊正式公告。",
      reform: "<b>DRI 與 RD 共同估時：</b>由功能負責人與執行 RD 進行二次核實，以 5-6 小時有效工時排程。"
    },
    {
      category: "規格責任歸屬",
      current: "Spec 參與人員無明確簽署記錄，開發分工僅留於甘特圖標註。",
      reform: "<b>Spec 簽名與標註制：</b>確認需求人員需於 Spec 簽名存證；<b>開發者需於 Spec 標註負責模組</b>，確保權責一致。",
      isRed: true
    },
    {
      category: "個人獎金發放",
      current: "個人獎金佔 50%。條件為開發與 QA 測試皆於預定時程內完成。",
      reform: "<b>即時結算與隔離：</b>提早完成且通過測試者，領取 100% 個人獎金且不被團隊延遲或 Bug 扣項影響。"
    },
    {
      category: "輔導案護航制",
      current: "新人採相同獎金指標，未考量導師審核與教育成本。",
      reform: "<b>50/25/25 獎金結構：</b>目標獎金由新人(50%)、前後端導師(各25%)分配；Mentor 擁有 1-2 日法定審核期。"
    },
    {
      category: "貢獻與嘉獎",
      current: "獎金僅與項目 DRI 掛鉤，未記錄實際修正 Bug 的輔助人員。",
      reform: "<b>雙重貢獻記錄：</b>每月記錄 <b>DRI 與實際修正人員</b>；主動跨案協助解 Bug 之 RD 應列入績效嘉獎與獎金提撥。",
      isRed: true
    },
    {
      category: "維護與扣項",
      current: "上線 7~90 天若客戶反應問題，則扣回團隊獎金。",
      reform: "<b>Buffer Week 機制：</b>上線前一週全面停止新開發，專注 Bug 修正以確保 90 天內不被扣款。"
    }
  ];

  return (
    <div className="border border-stone-200 overflow-hidden shadow-sm bg-white">
      <div className="grid grid-cols-12 bg-slate-900 text-stone-400 text-base font-black uppercase tracking-widest py-4 px-6">
        <div className="col-span-2">制度類別</div>
        <div className="col-span-5 border-l border-slate-800 pl-6">現行制度原文 (Full Text)</div>
        <div className="col-span-5 border-l border-slate-800 pl-6">建議改革方案</div>
      </div>
      <div className="divide-y divide-stone-200">
        {data.map((row, idx) => (
          <div key={idx} className="grid grid-cols-12 items-stretch min-h-[140px]">
            <div className="col-span-2 p-6 bg-stone-50 flex items-center font-bold text-base text-slate-900 border-r border-stone-100 uppercase tracking-tighter">
              {row.category}
            </div>
            <div className="col-span-5 p-6 text-base text-slate-500 leading-relaxed font-medium flex items-center">
              <span dangerouslySetInnerHTML={{ __html: row.current }} />
            </div>
            <div className={cn(
              "col-span-5 p-6 text-base leading-relaxed font-bold flex items-center border-l border-stone-100",
              row.isRed ? "text-rose-700 bg-rose-50/20" : "text-slate-900 bg-stone-50/10"
            )}>
              <span dangerouslySetInnerHTML={{ __html: row.reform }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SystemReform = () => {
  return (
    <div className="p-10 space-y-16 bg-white animate-in fade-in duration-500">
      <div className="space-y-4">
        <SectionHeader 
          title="制度改進建議對照表" 
          description="建立『權責透明、互助獎勵』的研發體系，確保每一份貢獻都能被量化並認可"
        />
      </div>

      <ComparisonTable />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-stone-200 bg-stone-50 space-y-3">
          <PenTool className="w-5 h-5 text-slate-900" />
          <h4 className="font-bold text-slate-900 uppercase text-base tracking-widest">Spec 簽名制</h4>
          <p className="text-base text-stone-600 leading-relaxed font-medium">
            終結『誰說了算』的模糊地帶。所有參與 Spec Confirm 的人員皆須簽名，並在 Spec 檔案內標註該功能模組的開發負責人。
          </p>
        </div>
        <div className="p-6 border border-stone-200 bg-stone-50 space-y-3">
          <Award className="w-5 h-5 text-slate-900" />
          <h4 className="font-bold text-slate-900 uppercase text-base tracking-widest">解 Bug 嘉獎</h4>
          <p className="text-base text-stone-600 leading-relaxed font-medium">
            認可『跨案救援』的價值。系統性記錄 DRI 與實際修正人員，主動幫忙解 Bug 的工程師應獲得額外的獎金分配或績效加分。
          </p>
        </div>
        <div className="p-6 border border-rose-200 bg-rose-50/30 space-y-3">
          <ShieldAlert className="w-5 h-5 text-rose-600" />
          <h4 className="font-bold text-rose-900 uppercase text-base tracking-widest text-rose-700">權責對齊</h4>
          <p className="text-base text-rose-700 leading-relaxed font-bold">
            透過明確的記錄與簽名，減少事後的無效溝通與推諉。讓研發團隊能專注於『解決問題』而非『釐清責任』。
          </p>
        </div>
      </div>
    </div>
  );
};
