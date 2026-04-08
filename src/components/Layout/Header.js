
export const Header = ({ title, subtitle }) => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white p-8 text-center rounded-t-3xl border-b border-slate-600 shadow-inner">
    <h1 className="text-3xl font-extrabold tracking-tight mb-2 flex items-center justify-center gap-3">
      <span>🚀</span> {title}
    </h1>
    <p className="text-slate-300 text-sm font-medium tracking-wide flex items-center justify-center gap-2">
      <span className="px-2 py-0.5 bg-slate-600 rounded-md text-[10px] uppercase font-bold text-slate-100">Staff Engineer</span>
      {subtitle}
    </p>
  </div>
);

export const Tabs = ({ activeTab, onTabChange, tabs }) => (
  <div className="flex bg-slate-50/50 border-b border-slate-200">
    {tabs.map(tab => (
      <button
        key={tab.id}
        onClick={() => onTabChange(tab.id)}
        className={`flex-1 py-4 px-6 text-sm font-bold transition-all duration-300 relative ${
          activeTab === tab.id 
            ? 'text-blue-600 bg-white' 
            : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100/50'
        }`}
      >
        <span className="flex items-center justify-center gap-2">
          {tab.icon} {tab.label}
        </span>
        {activeTab === tab.id && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full mx-4 shadow-[0_-2px_8px_rgba(37,99,235,0.4)]" />
        )}
      </button>
    ))}
  </div>
);
