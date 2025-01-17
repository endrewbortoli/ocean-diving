import React from 'react';
import '../../styles/MissionCards.css';

function InformativeSectionStage({children, nextStage, setStageIndex}) {
  const handleNextStage = () => {
    setStageIndex(nextStage);
  };

  return (
    <div className="informative-section">
        <div className="mission-card-content">
          {children}
          <button onClick={handleNextStage}>Próximo</button>
        </div>
    </div>
  );
}

export default InformativeSectionStage;
