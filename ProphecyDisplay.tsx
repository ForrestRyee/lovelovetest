import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProphecyDisplayProps {
  history: string[];
}

const ProphecyDisplay: React.FC<ProphecyDisplayProps> = ({ history }) => {
  const currentText = history[0];
  const previousTexts = history.slice(1);

  return (
    <div className="w-full flex flex-col items-center px-4 min-h-[200px]">
      {/* Current Prophecy */}
      <div className="min-h-[8rem] w-full flex items-center justify-center mb-6">
        <AnimatePresence mode="wait">
          {currentText ? (
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-center max-w-lg"
            >
              <div className="bg-gradient-to-r from-transparent via-amber-900/50 to-transparent h-px w-full mb-4"></div>
              <p className="text-xl md:text-2xl text-amber-300 font-medium font-official leading-relaxed drop-shadow-[0_2px_10px_rgba(251,191,36,0.2)]">
                “{currentText}”
              </p>
              <div className="bg-gradient-to-r from-transparent via-amber-900/50 to-transparent h-px w-full mt-4"></div>
            </motion.div>
          ) : (
             <div className="text-stone-600 text-sm font-official italic opacity-50">
                等待仪式启动...
             </div>
          )}
        </AnimatePresence>
      </div>

      {/* History Log */}
      {previousTexts.length > 0 && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-md mt-4 flex flex-col gap-3 p-4 bg-black/20 rounded-lg border border-white/5"
        >
            <div className="text-[10px] text-stone-500 text-center uppercase tracking-[0.2em] border-b border-stone-800 pb-2">
                家族史书记录
            </div>
            <div className="max-h-[150px] overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-stone-800 scrollbar-track-transparent">
                {previousTexts.map((text, index) => (
                    <motion.div 
                        key={`${text}-${index}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="text-sm text-stone-500 font-serif text-center leading-snug"
                    >
                        <span className="opacity-40 mr-2">#{previousTexts.length - index}</span>
                        {text}
                    </motion.div>
                ))}
            </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProphecyDisplay;