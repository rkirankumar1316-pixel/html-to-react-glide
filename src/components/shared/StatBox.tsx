interface StatBoxProps {
  value: string | number;
  label: string;
  color?: string;
}

const StatBox = ({ value, label, color = '#22C55E' }: StatBoxProps) => {
  return (
    <div 
      className="p-[15px] rounded-[15px] text-center border transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer relative overflow-hidden
                 hover:transform hover:-translate-y-[3px] hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(34,197,94,0.2)]"
      style={{
        backgroundColor: `${color}1A`,
        borderColor: `${color}4D`
      }}
    >
      <div className="text-[1.5rem] font-extrabold mb-[5px]" style={{ color }}>
        {value}
      </div>
      <div className="text-[0.8rem] text-gray-600 font-semibold">
        {label}
      </div>
    </div>
  );
};

export default StatBox;