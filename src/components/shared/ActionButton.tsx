interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  gradient?: string;
  className?: string;
}

const ActionButton = ({ 
  children, 
  onClick, 
  gradient = 'linear-gradient(135deg, #22C55E, #16A34A)',
  className = '' 
}: ActionButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = '';
    }, 150);
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`text-white border-none py-3 px-[25px] rounded-[25px] text-[1rem] font-semibold cursor-pointer transition-all duration-[0.4s] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_4px_15px_rgba(34,197,94,0.3)] w-full relative overflow-hidden
                 hover:transform hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(34,197,94,0.4)] ${className}`}
      style={{ background: gradient }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;