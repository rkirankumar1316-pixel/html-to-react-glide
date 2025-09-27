import ProgressRing from '../shared/ProgressRing';
import StatBox from '../shared/StatBox';
import ActionButton from '../shared/ActionButton';

const CarbonModal = () => {
  return (
    <>
      <div className="text-center py-10 px-[30px] bg-white/90 mx-5 mt-5 rounded-[20px] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden"
           style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', color: 'white' }}>
        <div className="absolute w-full h-full opacity-20">
          <div className="absolute w-5 h-5 bg-white rounded-full top-[15%] left-[15%] animate-[float_3s_infinite_ease-in-out]"></div>
          <div className="absolute w-[15px] h-[15px] bg-white rounded-full top-[60%] left-[70%] animate-[float_3s_infinite_ease-in-out_1s]"></div>
          <div className="absolute w-[25px] h-[25px] bg-white rounded-full top-[40%] left-[40%] animate-[float_3s_infinite_ease-in-out_0.5s]"></div>
        </div>
        <h1 className="text-[2.2rem] font-extrabold mb-[10px] text-white">🌍 Carbon Impact Tracker</h1>
        <p className="text-[1.1rem] font-semibold text-white/90">Monitor Your Environmental Impact</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-[30px]">
        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #11998e, #38ef7d)' }}>
              🌱
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Carbon Saved</h3>
          </div>
          
          <ProgressRing value={68} label="of Monthly Goal" color="#11998e" />
          
          <div className="grid grid-cols-2 gap-[15px] my-5">
            <StatBox value="142kg" label="This Month" color="#11998e" />
            <StatBox value="2.1 tons" label="Total Saved" color="#11998e" />
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #11998e, #38ef7d)">
            Track Carbon
          </ActionButton>
        </div>

        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #ff9a9e, #fecfef)' }}>
              🚗
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Transport Impact</h3>
          </div>
          
          <ProgressRing value={42} label="Eco-Friendly" color="#ff9a9e" />
          
          <div className="grid grid-cols-2 gap-[15px] my-5">
            <StatBox value="85km" label="Cycling" color="#ff9a9e" />
            <StatBox value="45km" label="Walking" color="#ff9a9e" />
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #ff9a9e, #fecfef)">
            Log Transport
          </ActionButton>
        </div>

        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
              🌳
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Trees Planted</h3>
          </div>
          
          <ProgressRing value={90} label="Goal Achieved" color="#667eea" />
          
          <div className="grid grid-cols-2 gap-[15px] my-5">
            <StatBox value={27} label="This Month" color="#667eea" />
            <StatBox value={156} label="Total" color="#667eea" />
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #667eea, #764ba2)">
            Plant More Trees
          </ActionButton>
        </div>
      </div>
    </>
  );
};

export default CarbonModal;