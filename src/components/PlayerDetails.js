import '../styles/PlayerDetails.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as opendota from '../helpers/opendota'

function PlayerDetails() {
  const [Player, setPlayer] = useState(null)
  const [WinLoss, setWinLoss] = useState(null)
  const [Counts, setCounts] = useState(null)
  const [RecentMatches, setRecentMatches] = useState(null)
  const { ID } = useParams()

  useEffect(() => {
    opendota.getPlayerData(ID).then((result) => {
      setPlayer(result)
    })

    opendota.getPlayerWinLoss(ID).then((result) => {
      setWinLoss(result)
    })

    opendota.getPlayerCounts(ID).then((result) => {
      setCounts(result)
    })

    opendota.getRecentMatches(ID).then((result) => {
      setRecentMatches(result)
    })
  }, [ID])

  const timeSinceLastMatch = () => {
    const lastMatchUnix = RecentMatches[0].start_time
    const lastMatchMs = lastMatchUnix * 1000
    const lastMatch = new Date(lastMatchMs)
    const today = new Date()
    const timeDiff = Math.round((today - lastMatch) / (1000 * 3600 * 24))
    return timeDiff >= 1 ? `${timeDiff} days ago` : `Today`
  }

  const getAbandons = () =>
    Counts.leaver_status[2].games + Counts.leaver_status[3].games

  return (
    <div className="PlayerDetails">
      {Player !== null && WinLoss !== null && Counts !== null ? (
        <div className="player-details-content">
          <div className="player-details-primary">
            <div className="player-details-avatar">
              <img
                className="player-image avatar"
                alt="Tom"
                src={Player.avatarfull}
              ></img>
            </div>
            <div className="player-details-title">
              <h1>{Player.name}</h1>
              <small>Overview</small>
            </div>
          </div>
          <div className="player-details-secondary">
            <dl>
              <dd>
                <span className="lastMatch">{timeSinceLastMatch()}</span>
              </dd>
              <dt>Last Match</dt>
            </dl>
            <dl>
              <dd>
                <span className="game-record">
                  <span className="wins">{WinLoss.win}</span>
                  <span className="sep">-</span>
                  <span className="losses">{WinLoss.lose}</span>
                  <span className="sep">-</span>
                  <span className="abandons">{getAbandons()}</span>
                </span>
              </dd>
              <dt>Record</dt>
            </dl>
            <dl>
              <dd>{`${
                Math.round(
                  (WinLoss.win / (WinLoss.win + WinLoss.lose)) * 100 * 100,
                ) / 100
              }%`}</dd>
              <dt>Win Rate</dt>
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
