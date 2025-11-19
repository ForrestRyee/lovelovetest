import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-full py-8 text-center mt-auto opacity-60">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-800/50 border border-stone-700/50">
        <span className="w-2 h-2 rounded-full bg-stone-500"></span>
        <span className="text-xs text-stone-400 font-official tracking-widest">
          第二阶段 · 复兴路线规划（未解锁）
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-3 w-3 text-stone-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
    </div>
  );
};

export default Footer;