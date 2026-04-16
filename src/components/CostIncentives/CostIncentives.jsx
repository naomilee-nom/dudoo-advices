import React from 'react';
import { Dashboard } from '../Dashboard/Dashboard.jsx';
import { Proposals } from '../Proposals/Proposals.jsx';
import { DollarSign, Zap } from 'lucide-react';

export const CostIncentives = ({ state, handlers, dailyCost }) => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* 成本監控部分 */}
      <div className="p-10 bg-white border-b border-stone-100">
        <div className="flex items-center gap-3 mb-8 border-l-2 border-slate-900 pl-5">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">專案成本監控</h3>
          <span className="text-base font-medium text-stone-400">即時人力成本與延遲損失分析</span>
        </div>
        <Dashboard state={state} handlers={handlers} />
      </div>

      {/* 獎金提案部分 */}
      <div className="p-10 bg-white">
        <div className="flex items-center gap-3 mb-8 border-l-2 border-slate-900 pl-5">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">獎金優化提案</h3>
          <span className="text-base font-medium text-stone-400">階層式激勵與風險補償機制</span>
        </div>
        <Proposals dailyCost={dailyCost} />
      </div>
    </div>
  );
};
