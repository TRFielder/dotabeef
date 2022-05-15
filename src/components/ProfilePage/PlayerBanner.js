import '../../styles/PlayerBanner.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as opendota from '../../helpers/opendota'

function PlayerBanner() {
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
    const dayDiff = Math.round((today - lastMatch) / (1000 * 3600 * 24))
    const hourDiff = Math.round((today - lastMatch) / (1000 * 3600))
    return dayDiff >= 1 ? `${dayDiff} days ago` : `${hourDiff} hours ago`
  }

  const getAbandons = () =>
    Object.entries(Counts.leaver_status)
      .slice(1)
      .reduce((prev, curr) => prev + curr[1].games, 0)

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
            <dl className="player-details-counts">
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
            <dl className="player-details-winrate">
              <dd>{`${
                Math.round(
                  (WinLoss.win / (WinLoss.win + WinLoss.lose)) * 100 * 100,
                ) / 100
              }%`}</dd>
              <dt>Win Rate</dt>
            </dl>
          </div>
          <div className="player-details-interactive"></div>
        </div>
      ) : (
        'Loading'
      )}
    </div>
  )
}

export default PlayerBanner
