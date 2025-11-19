import React from 'react';
import { motion } from 'framer-motion';
import { GuardianSpirit } from '../types';

interface StatusBoardProps {
  luckIndex: string;
  guardian: GuardianSpirit;
  onRefreshLuck: () => void;
  onRefreshGuardian: () => void;
}

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-stone-500 hover:text-amber-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const StatusBoard: React.FC<StatusBoardProps> = ({ luckIndex, guardian, onRefreshLuck, onRefreshGuardian }) => {
  return (
    <div className="w-full px-6 flex flex-col gap-4">
      {/* Luck Section */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-stone-800/40 border border-stone-700/50 rounded-lg p-4 flex items-center justify-between backdrop-blur-sm shadow-md"
      >
        <div className="flex flex-col">
            <span className="text-stone-400 text-xs uppercase tracking-wider mb-1 font-official">家族气运指数</span>
            <div className="flex items-baseline gap-2">
                <span className={`text-3xl md:text-4xl font-bold ${parseFloat(luckIndex) > 85 ? 'text-red-500' : 'text-amber-500'}`}>
                    {luckIndex}%
                </span>
            </div>
        </div>
        <motion.button 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            onClick={onRefreshLuck}
            className="p-3 rounded-full hover:bg-stone-700/50 transition-colors"
            aria-label="刷新气运"
        >
            <RefreshIcon />
        </motion.button>
      </motion.div>

      {/* Guardian Section */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-stone-800/40 border border-stone-700/50 rounded-lg p-4 flex items-center justify-between backdrop-blur-sm shadow-md"
      >
         <div className="flex flex-col">
            <span className="text-stone-400 text-xs uppercase tracking-wider mb-1 font-official">家族守护灵</span>
            <div className="flex items-center gap-3">
                <span className="text-3xl filter drop-shadow-lg">{guardian.emoji}</span>
                <span className="text-lg md:text-xl font-official text-stone-200 tracking-wide">{guardian.title}</span>
            </div>
        </div>
        <motion.button 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            onClick={onRefreshGuardian}
            className="p-3 rounded-full hover:bg-stone-700/50 transition-colors"
             aria-label="刷新守护灵"
        >
            <RefreshIcon />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default StatusBoard;