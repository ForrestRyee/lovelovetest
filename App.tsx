import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import StatusBoard from './components/StatusBoard';
import RitualButton from './components/RitualButton';
import ProphecyDisplay from './components/ProphecyDisplay';
import Footer from './components/Footer';
import { ANIMALS, TITLES, PROPHECIES } from './constants';
import { GuardianSpirit } from './types';

const App: React.FC = () => {
  const [luckIndex, setLuckIndex] = useState<string>("00.0");
  const [guardian, setGuardian] = useState<GuardianSpirit>({ emoji: "❓", title: "???" });
  const [history, setHistory] = useState<string[]>([]);

  // Function to generate random luck
  const generateLuck = useCallback(() => {
    const randomLuck = (Math.random() * 60 + 40).toFixed(1);
    setLuckIndex(randomLuck);
  }, []);

  // Function to generate random guardian
  const generateGuardian = useCallback(() => {
    const randomAnimal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
    const randomTitle = TITLES[Math.floor(Math.random() * TITLES.length)];
    
    let animalName = "祥瑞兽";
    if (randomAnimal === '🐔') animalName = "战斗鸡";
    else if (randomAnimal === '🐸') animalName = "玄青蛙";
    else if (randomAnimal === '🐦') animalName = "不明鸟";
    else if (randomAnimal === '🐗') animalName = "山野兽";
    else if (randomAnimal === '🐲') animalName = "真龙";
    
    const finalTitle = `${animalName}·${randomTitle}`;
    
    setGuardian({
      emoji: randomAnimal,
      title: finalTitle
    });
  }, []);

  // Initialize random stats on mount
  useEffect(() => {
    generateLuck();
    generateGuardian();
  }, [generateLuck, generateGuardian]);

  const handleRitualClick = useCallback(() => {
    let newProphecy = "";
    // Try to ensure we don't get the exact same text twice in a row
    do {
       const randomIndex = Math.floor(Math.random() * PROPHECIES.length);
       newProphecy = PROPHECIES[randomIndex];
    } while (history.length > 0 && newProphecy === history[0] && PROPHECIES.length > 1);

    // Add new prophecy to the beginning of history
    setHistory(prev => [newProphecy, ...prev]);
  }, [history]);

  return (
    <div className="min-h-screen w-full bg-[#1a1a1a] text-stone-200 flex flex-col items-center relative overflow-hidden selection:bg-amber-900 selection:text-amber-100">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800/30 via-[#1a1a1a] to-[#1a1a1a] pointer-events-none -z-10"></div>
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none -z-10"></div>
      
      <main className="flex-1 w-full max-w-3xl flex flex-col items-center gap-8 pb-12 relative z-10">
        <Header />
        
        <StatusBoard 
          luckIndex={luckIndex} 
          guardian={guardian} 
          onRefreshLuck={generateLuck}
          onRefreshGuardian={generateGuardian}
        />
        
        <div className="w-full flex flex-col items-center mt-8 gap-2">
          <RitualButton onClick={handleRitualClick} />
          <ProphecyDisplay history={history} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;