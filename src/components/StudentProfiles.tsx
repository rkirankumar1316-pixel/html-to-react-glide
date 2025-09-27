const StudentProfiles = () => {
  const students = [
    {
      id: 1,
      initials: 'AK',
      name: 'Arjun Kumar',
      role: 'Tree Planting Specialist',
      points: '1,156',
      streak: '12'
    },
    {
      id: 2,
      initials: 'PS',
      name: 'Priya Sharma',
      role: 'Garden Maintenance Expert',
      points: '1,247',
      streak: '15'
    },
    {
      id: 3,
      initials: 'RS',
      name: 'Rahul Singh',
      role: 'Soil Conservation Leader',
      points: '1,089',
      streak: '10'
    }
  ];

  return (
    <div className="absolute bottom-5 left-5 right-5 flex gap-[15px] justify-center z-20">
      {students.map((student) => (
        <div
          key={student.id}
          className="glass-card backdrop-blur-[20px] rounded-[15px] p-5 min-w-[280px] border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(255,255,255,0.1)] transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer relative overflow-hidden
                     hover:bg-white/25 hover:transform hover:-translate-y-[10px] hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(255,255,255,0.4)]
                     before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-[left] before:duration-500 hover:before:left-full"
        >
          <div className="flex items-center mb-[10px]">
            <div className="w-[50px] h-[50px] bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full flex items-center justify-center text-white font-bold text-[1.2rem] mr-[15px] shadow-[0_4px_15px_rgba(34,197,94,0.3)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                         hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_8px_25px_rgba(34,197,94,0.5)]">
              {student.initials}
            </div>
            <div>
              <h3 className="text-[1.1rem] font-bold eco-text-primary mb-[2px]">
                {student.name}
              </h3>
              <div className="text-[0.85rem] eco-text-secondary font-medium">
                {student.role}
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-[10px]">
            <div className="text-center">
              <div className="text-[1rem] font-bold text-[hsl(var(--primary))]">
                {student.points}
              </div>
              <div className="text-[0.75rem] text-gray-600 font-medium">
                Points
              </div>
            </div>
            <div className="text-center">
              <div className="text-[1rem] font-bold text-[hsl(var(--primary))]">
                {student.streak}
              </div>
              <div className="text-[0.75rem] text-gray-600 font-medium">
                Day Streak
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentProfiles;