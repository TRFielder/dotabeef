import '../styles/PlayerDetails.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as opendota from '../helpers/opendota'

function PlayerDetails() {
  const [Player, setPlayer] = useState(null)
  const [WinLoss, setWinLoss] = useState(null)
  const { ID } = useParams()

  useEffect(() => {
    opendota.getPlayerData(ID).then((result) => {
      setPlayer(result)
    })
    opendota.getPlayerWinLoss(ID).then((result) => {
      setWinLoss(result)
      console.log(result)
    })
  }, [])

  return (
    <div className="PlayerDetails">
      {Player !== null && WinLoss !== null ? (
        <div className="player-details-content">
          <div className="player-details-primary">
            <div className="player-details-avatar">
              <img
                className="player-image avatar"
                alt="Tom"
                src={Player.avatarfull}
              ></img>
            </div>
            <div className="player-details-name">{Player.name}</div>
          </div>
          <div className="player-details-secondary">
            <dl>
              <dd>{`${
                Math.round(
                  (WinLoss.win / (WinLoss.win + WinLoss.lose)) * 100 * 100,
                ) / 100
              }%`}</dd>
            </dl>
          </div>
          <div className="player-details-interactive">6</div>
        </div>
      ) : (
        'Loading'
      )}
    </div>
  )
}

export default PlayerDetails
