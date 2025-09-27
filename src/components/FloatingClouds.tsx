const FloatingClouds = () => {
  return (
    <div className="clouds-container absolute w-full h-full pointer-events-none z-[1]">
      {/* Static clouds */}
      <div className="absolute bg-white/60 rounded-[50px] opacity-80 w-[100px] h-[40px] top-[20%] left-[-100px] animate-[cloudFloat_20s_infinite_linear]">
        <div className="absolute bg-white/60 rounded-[50px] w-[50px] h-[50px] -top-[25px] left-[10px]"></div>
        <div className="absolute bg-white/60 rounded-[50px] w-[60px] h-[40px] -top-[15px] right-[10px]"></div>
      </div>
      
      <div className="absolute bg-white/60 rounded-[50px] opacity-80 w-[80px] h-[30px] top-[40%] left-[-80px] animate-[cloudFloat_20s_infinite_linear] [animation-delay:-10s]">
        <div className="absolute bg-white/60 rounded-[50px] w-[40px] h-[40px] -top-[20px] left-[15px]"></div>
        <div className="absolute bg-white/60 rounded-[50px] w-[50px] h-[30px] -top-[10px] right-[15px]"></div>
      </div>
      
      <div className="absolute bg-white/60 rounded-[50px] opacity-80 w-[120px] h-[50px] top-[60%] left-[-120px] animate-[cloudFloat_20s_infinite_linear] [animation-delay:-5s]">
        <div className="absolute bg-white/60 rounded-[50px] w-[60px] h-[60px] -top-[30px] left-[20px]"></div>
        <div className="absolute bg-white/60 rounded-[50px] w-[70px] h-[50px] -top-[20px] right-[20px]"></div>
      </div>
    </div>
  );
};

export default FloatingClouds;