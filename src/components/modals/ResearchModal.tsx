import ProgressRing from '../shared/ProgressRing';
import StatBox from '../shared/StatBox';
import ActionButton from '../shared/ActionButton';

const ResearchModal = () => {
  return (
    <>
      <div className="text-center py-10 px-[30px] bg-white/90 mx-5 mt-5 rounded-[20px] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden"
           style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div className="absolute w-full h-full opacity-30">
          <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[10%] animate-[twinkle_2s_infinite]"></div>
          <div className="absolute w-[3px] h-[3px] bg-white rounded-full top-[40%] left-[80%] animate-[twinkle_2s_infinite_0.5s]"></div>
          <div className="absolute w-[5px] h-[5px] bg-white rounded-full top-[70%] left-[30%] animate-[twinkle_2s_infinite_1s]"></div>
        </div>
        <h1 className="text-[2.2rem] font-extrabold mb-[10px] text-white">🔬 AI Scanner & Research</h1>
        <p className="text-[1.1rem] font-semibold text-white/90">Smart Environmental Analysis Tools</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-[30px]">
        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
              📱
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">AI Plant Scanner</h3>
          </div>
          
          <ProgressRing value={75} label="Accuracy" color="#667eea" />
          
          <div className="grid grid-cols-2 gap-[15px] my-5">
            <StatBox value={47} label="Plants Scanned" color="#667eea" />
            <StatBox value={12} label="Species Found" color="#667eea" />
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #667eea, #764ba2)">
            Start Scanning
          </ActionButton>
        </div>

        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}>
              🌱
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Plant Health Analysis</h3>
          </div>
          
          <ProgressRing value={60} label="Healthy Plants" color="#f093fb" />
          
          <div className="grid grid-cols-2 gap-[15px] my-5">
            <StatBox value={23} label="Healthy" color="#f093fb" />
            <StatBox value={8} label="Need Care" color="#f093fb" />
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #f093fb, #f5576c)">
            Analyze Health
          </ActionButton>
        </div>

        <div className="bg-white/90 backdrop-blur-[15px] border border-white/60 rounded-[20px] p-[25px] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer
                       hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:bg-white/95">
          <div className="flex items-center mb-5">
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-[2rem] mr-[15px] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)]"
                 style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}>
              📊
            </div>
            <h3 className="text-[1.3rem] font-bold eco-text-primary">Research Progress</h3>
          </div>
          
          <ProgressRing value={80} label="Complete" color="#4facfe" />
          
          <div className="grid grid-cols-2 gap-[15px] my-5">
            <StatBox value={15} label="Reports" color="#4facfe" />
            <StatBox value={3} label="Projects" color="#4facfe" />
          </div>
          
          <ActionButton gradient="linear-gradient(135deg, #4facfe, #00f2fe)">
            View Research
          </ActionButton>
        </div>
      </div>
    </>
  );
};

export default ResearchModal;