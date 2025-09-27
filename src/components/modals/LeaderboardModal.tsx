import ProgressRing from '../shared/ProgressRing';
import StatBox from '../shared/StatBox';
import ActionButton from '../shared/ActionButton';

const LeaderboardModal = () => {
  const leaders = [
    { rank: 1, name: 'Priya Sharma', points: '1,247', badge: '🥇' },
    { rank: 2, name: 'Arjun Kumar', points: '1,156', badge: '🥈' },
    { rank: 3, name: 'Rahul Singh', points: '1,089', badge: '🥉' },
    { rank: 4, name: 'Sneha Patel', points: '987', badge: '4️⃣' },
    { rank: 5, name: 'Vikram Gupta', points: '923', badge: '5️⃣' }
  ];

  const weeklyStats = [
    { icon: '🌱', title: 'Trees Planted: 156', description: 'Class total this month' },
    { icon: '♻️', title: 'Items Recycled: 2,340', description: 'School record!' },
    { icon: '🚴', title: 'Eco Miles: 450km', description: 'Bike & walk combined' }
  ];

  return (
    <>
      <div className="text-center py-10 px-[30px] bg-white/90 mx-5 mt-5 rounded-[20px] shadow-[0_8px_25px_rgba(0,0,0,0.1)]"
           style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
        <h1 className="text-[2.2rem] font-extrabold mb-[10px] text-white">📊 EcoVerse Leaderboard</h1>
        <p className="text-[1.1rem] font-semibold text-white/90">Compete and Celebrate Environmental Champions</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-[30px]">
        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}>
              🏆
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Top Performers</h3>
          </div>
          
          <div className="bg-white/80 rounded-[15px] p-5 my-5">
            {leaders.map((leader, index) => (
              <div key={index} className="flex items-center p-[15px] mb-[10px] bg-white/70 rounded-[10px] transition-all duration-300 hover:bg-white/90 hover:translate-x-[5px]">
                <div className="text-[1.2rem] font-extrabold text-[#22C55E] mr-[15px] min-w-[30px]">{leader.badge}</div>
                <div className="flex-1">
                  <strong>{leader.name}</strong><br />
                  <small>{leader.points} points</small>
                </div>
              </div>
            ))}
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #4facfe, #00f2fe)">
            View Full Rankings
          </ActionButton>
        </div>

        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #ff6b6b, #ffa726)' }}>
              🎯
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Your Ranking</h3>
          </div>
          
          <ProgressRing value={65} label="Position" color="#ff6b6b" />
          
          <div className="grid grid-cols-2 gap-[15px] my-5">
            <StatBox value={2} label="Current Rank" color="#ff6b6b" />
            <StatBox value="+3" label="This Week" color="#ff6b6b" />
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #ff6b6b, #ffa726)">
            Climb Higher!
          </ActionButton>
        </div>

        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #11998e, #38ef7d)' }}>
              📈
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Class Stats</h3>
          </div>
          
          <div className="bg-white/80 rounded-[15px] p-5 my-5">
            {weeklyStats.map((stat, index) => (
              <div key={index} className="flex items-center p-[15px] mb-[10px] bg-white/70 rounded-[10px] border-l-4 border-[#22C55E]">
                <div className="text-[1.5rem] mr-[15px]">{stat.icon}</div>
                <div>
                  <strong>{stat.title}</strong><br />
                  <small>{stat.description}</small>
                </div>
              </div>
            ))}
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #11998e, #38ef7d)">
            View Class Report
          </ActionButton>
        </div>
      </div>
    </>
  );
};

export default LeaderboardModal;