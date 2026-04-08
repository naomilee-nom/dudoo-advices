
import React, { useState } from 'react';
import { Header, Tabs } from './components/Layout/Header.js';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Proposals } from './components/Proposals/Proposals.js';
import { SystemChanges } from './components/SystemChanges/SystemChanges.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [rd, setRd] = useState({ n: 10, salary: 50000, bonus: 30000 });
  const [qa, setQa] = useState({ n: 6, salary: 50000 });
  const [bugs, setBugs] = useState({ s1: 8, s2: 35, s3: 44, s4: 15 });
  const [dates, setDates] = useState({ expected: "2026-03-27", actual: new Date().toISOString().split('T')[0] });

  const dailyCost = ((rd.salary / 30) * rd.n) + ((qa.salary / 30) * qa.n);

  const tabs = [
    { id: 'dashboard', label: '成本現況監控', icon: '📊' },
    { id: 'proposals', label: '流程優化提案', icon: '💡' },
    { id: 'changes', label: '制度變革提議', icon: '🛠️' }
  ];

  return (
    <div className="min-h-screen bg-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="bg-white rounded-[32px] shadow-2xl shadow-slate-400/50 overflow-hidden border border-white/50 backdrop-blur-sm">
          <Header 
            title="專案營運優化與成本對照表" 
            subtitle="資深前端工程師團隊治理提案 2.0 (React Refactor)" 
          />
          
          <Tabs 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
            tabs={tabs} 
          />

          <div className="min-h-[500px]">
            {activeTab === 'dashboard' && (
              <Dashboard 
                state={{ rd, qa, bugs, dates }} 
                handlers={{ setRd, setQa, setBugs, setDates }} 
              />
            )}
            {activeTab === 'proposals' && (
              <Proposals dailyCost={dailyCost} />
            )}
            {activeTab === 'changes' && (
              <SystemChanges />
            )}
          </div>

          <div className="bg-slate-50 border-t border-slate-100 p-6 text-center text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">
            © 2026 Bonus Salary Optimization Project • Built with React & Tailwind
          </div>
        </div>
      </div>
    </div>
  );
}
