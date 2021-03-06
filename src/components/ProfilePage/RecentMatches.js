import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRecentMatches } from '../../helpers/opendota'
import * as utilities from '../../helpers/utilities'

import '../../styles/RecentMatches.css'

function RecentMatches(props) {
  RecentMatches.propTypes = {
    Heroes: PropTypes.array,
  }

  const [Matches, setMatches] = useState([])
  const { ID } = useParams()

  useEffect(() => {
    getRecentMatches(ID).then((result) => setMatches(result))
  }, [ID])

  const getHeroByID = (heroID) =>
    props.Heroes.find((hero) => hero.id === parseInt(heroID, 10))

  return (
    <div className="RecentMatches">
      <section>
        <header>Recent Matches</header>
        <article>
          <table className="r-table matches-overview">
            <tbody>
              <tr>
                <th>Hero</th>
                <th>Result</th>
                <th>Duration</th>
                <th>KDA</th>
              </tr>
              {Matches.length === 0 ? (
                <tr>
                  <td>Still</td>
                  <td>Waiting</td>
                  <td>For</td>
                  <td>Data</td>
                </tr>
              ) : (
                Matches.slice(0, 15).map((match) => (
                  <tr key={match.match_id}>
                    <td className="image-container image-container-hero image-container-icon">
                      <img
                        src={`http://cdn.dota2.com/apps/dota2/images/dota_react/heroes/${
                          getHeroByID(match.hero_id).name.split(
                            'npc_dota_hero_',
                          )[1]
                        }.png?`}
                        alt={getHeroByID(match.hero_id).localized_name}
                        className="scoreboard-size"
                      ></img>
                      <Link
                        to={`../../matches/${match.match_id}`}
                        className="green subtext minor match-overview-hero"
                      >
                        {getHeroByID(match.hero_id).localized_name}
                      </Link>
                    </td>

                    {utilities.checkPlayerWin(
                      utilities.getPlayerSlot(
                        utilities.to8BitUnsigned(match.player_slot),
                      ).playerTeam,
                      match.radiant_win,
                    ) ? (
                      <td className="subtext minor">
                        <Link
                          to={`../../matches/${match.match_id}`}
                          className="green"
                        >
                          Victory
                        </Link>
                        <p>{utilities.timeSinceMatch(match.start_time)}</p>
                      </td>
                    ) : (
                      <td className="subtext minor">
                        {' '}
                        <Link
                          to={`../../matches/${match.match_id}`}
                          className="red"
                        >
                          Defeat
                        </Link>
                        <p>{utilities.timeSinceMatch(match.start_time)}</p>
                      </td>
                    )}
                    <td>{utilities.getDuration(match.duration)}</td>
                    <td>
                      {match.kills}/{match.deaths}/{match.assists}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </article>
      </section>
    </div>
  )
}

export default RecentMatches
