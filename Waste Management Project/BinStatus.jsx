const BinStatusCard = ({ bin }) => {
  const fillPercentage = bin.fillLevel;
  const statusColors = {
    empty: '#4CAF50',
    medium: '#FFC107',
    full: '#F44336',
    critical: '#9C27B0'
  };

  return (
    <div className="bin-card">
      <h3>{bin.location}</h3>
      <div className="progress-bar">
        <div 
          className="fill-level" 
          style={{
            width: `${fillPercentage}%`,
            backgroundColor: statusColors[bin.status]
          }}
        />
      </div>
      <div className="bin-metrics">
        <span>Fill: {fillPercentage}%</span>
        <span>Last collected: {formatDate(bin.lastCollected)}</span>
      </div>
    </div>
  );
};