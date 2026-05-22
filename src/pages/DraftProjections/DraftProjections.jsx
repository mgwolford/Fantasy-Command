import { useEffect, useState } from "react";
import "./DraftProjections.css";

import Navbar from "../../components/layout/Navbar";
import { getDraftProjections } from "../../services/fantasyAPI";
import PlayerProjectionCard from "../../components/PlayerProjectionCard/PlayerProjectionCard";

function DraftProjections() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDraftProjections();

        console.log(data);

        setPlayers(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Unable to load draft projections.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="draft-projections-page">
      <Navbar />
<div className="page-header">
        <h1>Draft Projections</h1>
        <p>Projected fantasy football rankings and stats.</p>
      </div>

      {loading && <p>Loading projections...</p>}

      {error && <p className="error-message">{error}</p>}

      <div className="players-grid">
        {players.map((player, index) => (
          <PlayerProjectionCard
            key={index}
            player={player}
          />
        ))}
      </div>
    </div>
  );
}

export default DraftProjections;