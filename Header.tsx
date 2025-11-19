import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center pt-12 pb-8 px-4"
    >
      <h1 className="text-4xl md:text-6xl font-ceremonial text-amber-500 tracking-widest drop-shadow-lg">
        蒲氏家族振兴大计
      </h1>
      <div className="mt-4 w-24 h-1 bg-gradient-to-r from-transparent via-red-800 to-transparent mx-auto opacity-60"></div>
      <p className="mt-2 text-xs text-stone-500 uppercase tracking-[0.3em]">The Pu Family Revitalization Plan</p>
    </motion.div>
  );
};

export default Header;