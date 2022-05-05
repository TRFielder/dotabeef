import '../styles/PlayerDetails.css'

function PlayerDetails() {
  return (
    <div className="PlayerDetails">
      <div className="player-details-content">
        <div className="player-details-primary">
          <div className="player-details-avatar">
            <img
              className="player-image avatar"
              alt="Tom"
              src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/db/db9b7b9b1909b313e961edc64915782bd13fd34d_full.jpg"
            ></img>
          </div>
          <div className="player-details-name">Tom</div>
        </div>
        <div className="player-details-secondary">45</div>
        <div className="player-details-interactive">6</div>
      </div>
    </div>
  )
}

export default PlayerDetails
