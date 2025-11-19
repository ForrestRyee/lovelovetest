import React from 'react';
import { motion } from 'framer-motion';

interface RitualButtonProps {
  onClick: () => void;
}

const RitualButton: React.FC<RitualButtonProps> = ({ onClick }) => {
  return (
    <div className="w-full flex justify-center py-8 relative z-10">
      <motion.button
        whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(180, 83, 9, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="
          relative overflow-hidden
          bg-gradient-to-br from-red-900 to-stone-900 
          border-2 border-amber-700/50 
          text-amber-100 
          font-ceremonial 
          text-2xl md:text-3xl 
          py-6 px-10 
          rounded-xl 
          shadow-xl shadow-red-900/20
          w-[80%] md:w-auto md:min-w-[300px]
          transition-colors
        "
      >
        {/* Inner decorative border */}
        <div className="absolute inset-1 border border-amber-500/20 rounded-lg pointer-events-none"></div>
        
        <span className="relative z-10 drop-shadow-md">启动家族振兴仪式</span>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] hover:animate-shine"></div>
      </motion.button>
    </div>
  );
};

export default RitualButton;