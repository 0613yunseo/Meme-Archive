import React from 'react';

const ProgressBar = ({ percentage, label }) => {
  return (
    <div className="progress-bar-container">
      {label && <span className="progress-label">{label}</span>}
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="progress-percentage">{percentage}%</span>
    </div>
  );
};

export default ProgressBar;

