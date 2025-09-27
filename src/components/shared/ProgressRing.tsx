interface ProgressRingProps {
  value: number;
  label: string;
  color?: string;
  size?: number;
}

const ProgressRing = ({ value, label, color = '#22C55E', size = 120 }: ProgressRingProps) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div 
      className="relative mx-auto my-5 cursor-pointer hover:scale-105 transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]"
      style={{ width: size, height: size }}
    >
      <svg
        className="w-full h-full -rotate-90"
        viewBox="0 0 120 120"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={`${color}33`}
          strokeWidth="8"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            animation: 'ringFill 2s ease-out',
            transition: 'all 0.3s ease'
          }}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110">
        <div className="text-[2rem] font-black leading-none" style={{ color }}>
          {value}%
        </div>
        <div className="text-[0.8rem] text-gray-600 font-semibold">
          {label}
        </div>
      </div>
    </div>
  );
};

export default ProgressRing;