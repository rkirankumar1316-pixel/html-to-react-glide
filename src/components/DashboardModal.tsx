import { useEffect } from 'react';
import ModalContent from './ModalContent';

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: string;
}

const DashboardModal = ({ isOpen, onClose, modalType }: DashboardModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-[5px] z-[1000] animate-[modalFadeIn_0.3s_ease]"
      onClick={onClose}
    >
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[900px] h-[85%] bg-white/95 backdrop-blur-[20px] rounded-[25px] overflow-y-auto animate-[modalSlideIn_0.4s_ease] shadow-[0_25px_50px_rgba(0,0,0,0.3)] border-2 border-white/80"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 bg-[#ff6b6b] text-white border-none w-10 h-10 rounded-full text-[1.5rem] cursor-pointer z-[1001] transition-all duration-300 shadow-[0_4px_15px_rgba(255,107,107,0.3)]
                     hover:scale-110 hover:shadow-[0_8px_25px_rgba(255,107,107,0.5)]"
          onClick={onClose}
        >
          ×
        </button>
        <ModalContent modalType={modalType} />
      </div>
    </div>
  );
};

export default DashboardModal;