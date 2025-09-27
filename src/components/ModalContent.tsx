import ResearchModal from './modals/ResearchModal';
import CarbonModal from './modals/CarbonModal';
import AchievementsModal from './modals/AchievementsModal';
import ScoreModal from './modals/ScoreModal';
import RecyclingModal from './modals/RecyclingModal';
import LeaderboardModal from './modals/LeaderboardModal';

interface ModalContentProps {
  modalType: string;
}

const ModalContent = ({ modalType }: ModalContentProps) => {
  switch (modalType) {
    case 'research':
      return <ResearchModal />;
    case 'carbon':
      return <CarbonModal />;
    case 'achievements':
      return <AchievementsModal />;
    case 'score':
      return <ScoreModal />;
    case 'recycling':
      return <RecyclingModal />;
    case 'leaderboard':
      return <LeaderboardModal />;
    default:
      return <div>Modal content not found</div>;
  }
};

export default ModalContent;