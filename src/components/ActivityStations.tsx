interface ActivityStationsProps {
  onOpenModal: (modalType: string) => void;
  onCreateSparkles: (element: HTMLElement) => void;
}

const ActivityStations = ({ onOpenModal, onCreateSparkles }: ActivityStationsProps) => {
  const stations = [
    { id: 'research', icon: '🔬', label: 'AI Scanner', position: 'top-[25%] left-[15%]' },
    { id: 'carbon', icon: '🌍', label: 'Carbon Impact', position: 'top-[15%] left-[45%]' },
    { id: 'achievements', icon: '🏆', label: 'Achievements', position: 'top-[30%] right-[20%]' },
    { id: 'score', icon: '🎯', label: 'Eco Score', position: 'top-[50%] left-[25%]' },
    { id: 'recycling', icon: '♻️', label: 'Recycling Hub', position: 'bottom-[25%] left-[10%]' },
    { id: 'leaderboard', icon: '📊', label: 'Leaderboard', position: 'bottom-[15%] right-[15%]' }
  ];

  const handleStationClick = (stationId: string) => {
    onOpenModal(stationId);
  };

  const handleStationHover = (e: React.MouseEvent<HTMLDivElement>) => {
    onCreateSparkles(e.currentTarget);
  };

  return (
    <>
      {stations.map((station, index) => (
        <div
          key={station.id}
          className={`absolute cursor-pointer transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] z-10 ${station.position}`}
          style={{
            animation: `gentleFloat 4s ease-in-out infinite ${index % 2 === 0 ? '0s' : '2s'}`
          }}
          onClick={() => handleStationClick(station.id)}
          onMouseEnter={handleStationHover}
        >
          <div className="w-20 h-20 bg-white/15 rounded-[20px] flex items-center justify-center text-[2.5rem] mb-2 transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] relative overflow-hidden glass-card backdrop-blur-[20px] border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(255,255,255,0.1)]
                     hover:transform hover:-translate-y-5 hover:scale-110 hover:shadow-[0_25px_50px_rgba(0,0,0,0.3),0_0_40px_rgba(255,255,255,0.6),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(255,255,255,0.3)] hover:bg-white/35 hover:border-white/70">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 rounded-[20px] pointer-events-none"></div>
            {station.icon}
          </div>
          <div className="bg-white/20 px-[15px] py-2 rounded-[20px] text-[0.9rem] font-semibold eco-text-secondary text-center glass-card backdrop-blur-[15px] border border-white/25 shadow-[0_4px_15px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3)] whitespace-nowrap text-shadow-[0_1px_2px_rgba(255,255,255,0.5)] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                       hover:transform hover:-translate-y-3 hover:scale-105 hover:bg-white/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.7)] hover:border-white/60 hover:text-[hsl(var(--text-primary))]">
            {station.label}
          </div>
        </div>
      ))}
    </>
  );
};

export default ActivityStations;