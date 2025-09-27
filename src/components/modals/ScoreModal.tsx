import ProgressRing from '../shared/ProgressRing';
import StatBox from '../shared/StatBox';
import ActionButton from '../shared/ActionButton';

const ScoreModal = () => {
  const trends = [
    { icon: '📊', title: 'Recycling: +15 points', description: 'Great improvement this week!' },
    { icon: '🚶', title: 'Transport: +8 points', description: 'More walking & cycling' },
    { icon: '💧', title: 'Water Saving: +5 points', description: 'Steady progress' }
  ];

  return (
    <>
      <div className="text-center py-10 px-[30px] bg-white/90 mx-5 mt-5 rounded-[20px] shadow-[0_8px_25px_rgba(0,0,0,0.1)]"
           style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <h1 className="text-[2.2rem] font-extrabold mb-[10px] text-white">🎯 Eco Score Dashboard</h1>
        <p className="text-[1.1rem] font-semibold text-white/90">Track Your Environmental Performance</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-[30px]">
        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
              📊
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Overall Eco Score</h3>
          </div>
          
          <ProgressRing value={85} label="Score" color="#667eea" />
          
          <div className="grid grid-cols-2 gap-[15px] my-5">
            <StatBox value="+12" label="This Week" color="#667eea" />
            <StatBox value="A-" label="Grade" color="#667eea" />
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #667eea, #764ba2)">
            Improve Score
          </ActionButton>
        </div>

        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #11998e, #38ef7d)' }}>
              🌱
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Activity Points</h3>
          </div>
          
          <ProgressRing value={60} label="Points" color="#11998e" />
          
          <div className="grid grid-cols-2 gap-[15px] my-5">
            <StatBox value={120} label="Today" color="#11998e" />
            <StatBox value="+25%" label="vs Yesterday" color="#11998e" />
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #11998e, #38ef7d)">
            Earn More Points
          </ActionButton>
        </div>

        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #ff6b6b, #ffa726)' }}>
              📈
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Weekly Trends</h3>
          </div>
          
          <div className="bg-white/80 rounded-[15px] p-5 my-5">
            {trends.map((trend, index) => (
              <div key={index} className="flex items-center p-[15px] mb-[10px] bg-white/70 rounded-[10px] transition-all duration-300 hover:bg-white/90 hover:translate-x-[5px]">
                <div className="text-[1.2rem] font-extrabold text-[#22C55E] mr-[15px] min-w-[30px]">{trend.icon}</div>
                <div>
                  <strong>{trend.title}</strong><br />
                  <small>{trend.description}</small>
                </div>
              </div>
            ))}
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #ff6b6b, #ffa726)">
            View Full Report
          </ActionButton>
        </div>
      </div>
    </>
  );
};

export default ScoreModal;