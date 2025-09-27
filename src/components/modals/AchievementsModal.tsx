import ProgressRing from '../shared/ProgressRing';
import StatBox from '../shared/StatBox';
import ActionButton from '../shared/ActionButton';

const AchievementsModal = () => {
  const badges = [
    { icon: '🌱', title: 'Green Thumb', description: 'Planted 10 trees' },
    { icon: '♻️', title: 'Recycling Hero', description: 'Recycled 50 items' },
    { icon: '🚴', title: 'Eco Commuter', description: 'Cycled 100km' }
  ];

  return (
    <>
      <div className="text-center py-10 px-[30px] bg-white/90 mx-5 mt-5 rounded-[20px] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden"
           style={{ background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }}>
        <div className="absolute w-full h-full opacity-30">
          <div className="absolute top-[20%] left-[20%] w-[30px] h-[30px] bg-[#ff6b6b] rounded-full animate-[bounce_2s_infinite]"></div>
          <div className="absolute top-[60%] right-[30%] w-[25px] h-[25px] bg-[#4ecdc4] rounded-full animate-[bounce_2s_infinite_0.5s]"></div>
          <div className="absolute bottom-[30%] left-[60%] w-[35px] h-[35px] bg-[#45b7d1] rounded-full animate-[bounce_2s_infinite_1s]"></div>
        </div>
        <h1 className="text-[2.2rem] font-extrabold mb-[10px] text-[#8B4513]">🏆 Achievement Center</h1>
        <p className="text-[1.1rem] font-semibold text-[#A0522D]">Celebrate Your Environmental Victories</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-[30px]">
        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #ffd89b, #19547b)' }}>
              🌟
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Latest Badges</h3>
          </div>
          
          <div className="bg-white/80 rounded-[15px] p-5 my-5">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center p-[15px] mb-[10px] bg-white/70 rounded-[10px] border-l-4 border-[#22C55E]">
                <div className="text-[1.5rem] mr-[15px]">{badge.icon}</div>
                <div>
                  <strong>{badge.title}</strong><br />
                  <small>{badge.description}</small>
                </div>
              </div>
            ))}
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #ffd89b, #19547b)">
            View All Badges
          </ActionButton>
        </div>

        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #a8edea, #fed6e3)' }}>
              🎯
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Progress Milestones</h3>
          </div>
          
          <ProgressRing value={75} label="to Next Level" color="#a8edea" />
          
          <div className="grid grid-cols-2 gap-[15px] my-5">
            <StatBox value={15} label="Achievements" color="#a8edea" />
            <StatBox value={5} label="Level" color="#a8edea" />
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #a8edea, #fed6e3)">
            Check Progress
          </ActionButton>
        </div>

        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #ff9a9e, #fecfef)' }}>
              🔥
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Streak Tracker</h3>
          </div>
          
          <ProgressRing value={40} label="Days" color="#ff9a9e" />
          
          <div className="grid grid-cols-2 gap-[15px] my-5">
            <StatBox value={28} label="Best Streak" color="#ff9a9e" />
            <StatBox value={18} label="This Month" color="#ff9a9e" />
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #ff9a9e, #fecfef)">
            Keep Streak Going!
          </ActionButton>
        </div>
      </div>
    </>
  );
};

export default AchievementsModal;