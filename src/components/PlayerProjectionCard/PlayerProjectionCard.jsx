import "./PlayerProjectionCard.css";

function PlayerProjectionCard({ player }) {
  return (
    <div className="player-card">
      <div className="player-rank">
        #{player.overallADP}
      </div>

      <div className="player-info">
        <h3>{player.longName}</h3>
    </div>
    <div className="player-adp">
        <p className="player-adp">{player.posADP}</p>
      </div>

      <div className="player-stats">
        <span>ID: {player.playerID}</span>
      </div>
    </div>
  );
}

export default PlayerProjectionCard;