import { useState, useEffect } from 'react';
import gameForest from '@/assets/game-forest.jpg';
import FloatingClouds from './FloatingClouds';
import ActivityStations from './ActivityStations';
import StudentProfiles from './StudentProfiles';
import DashboardModal from './DashboardModal';

const StudentDashboard = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Dynamic cloud generation
  useEffect(() => {
    const createCloud = () => {
      const cloud = document.createElement('div');
      cloud.className = 'absolute bg-white/60 rounded-[50px] opacity-80 pointer-events-none';
      cloud.style.width = Math.random() * 60 + 40 + 'px';
      cloud.style.height = Math.random() * 30 + 20 + 'px';
      cloud.style.top = Math.random() * 80 + '%';
      cloud.style.left = '-100px';
      cloud.style.animation = `cloudFloat ${Math.random() * 10 + 15}s infinite linear`;
      cloud.style.opacity = String(Math.random() * 0.3 + 0.5);
      
      // Create pseudo-elements for cloud shape
      const before = document.createElement('div');
      before.className = 'absolute bg-white/60 rounded-[50px]';
      before.style.width = Math.random() * 30 + 20 + 'px';
      before.style.height = Math.random() * 30 + 20 + 'px';
      before.style.top = '-' + (Math.random() * 15 + 10) + 'px';
      before.style.left = Math.random() * 20 + 10 + 'px';
      
      const after = document.createElement('div');
      after.className = 'absolute bg-white/60 rounded-[50px]';
      after.style.width = Math.random() * 40 + 30 + 'px';
      after.style.height = Math.random() * 25 + 15 + 'px';
      after.style.top = '-' + (Math.random() * 10 + 5) + 'px';
      after.style.right = Math.random() * 15 + 10 + 'px';
      
      cloud.appendChild(before);
      cloud.appendChild(after);
      
      const cloudsContainer = document.querySelector('.clouds-container');
      if (cloudsContainer) {
        cloudsContainer.appendChild(cloud);
        
        setTimeout(() => {
          if (cloud.parentNode) {
            cloud.remove();
          }
        }, 25000);
      }
    };
    
    // Create a new cloud every 8 seconds
    const interval = setInterval(createCloud, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const createSparkles = (element: HTMLElement) => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'absolute w-1 h-1 bg-white rounded-full pointer-events-none z-[100]';
        sparkle.style.animation = 'twinkle 1s ease-out forwards';
        
        const rect = element.getBoundingClientRect();
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
          if (sparkle.parentNode) {
            sparkle.remove();
          }
        }, 1000);
      }, i * 200);
    }
  };

  return (
    <div 
      className="h-screen relative"
      style={{
        background: `url(${gameForest}) no-repeat center center, linear-gradient(135deg, #87CEEB 0%, #98E4D6 25%, #A8F5C8 50%, #B8FFB8 75%, #C8FFA8 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
    >
      <FloatingClouds />
      <ActivityStations onOpenModal={openModal} onCreateSparkles={createSparkles} />
      <StudentProfiles />
      
      {activeModal && (
        <DashboardModal 
          isOpen={!!activeModal} 
          onClose={closeModal} 
          modalType={activeModal} 
        />
      )}
    </div>
  );
};

export default StudentDashboard;