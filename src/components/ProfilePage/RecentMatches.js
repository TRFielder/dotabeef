import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecentMatches } from '../../helpers/opendota'
import * as utilities from '../../helpers/utilities'

import '../../styles/RecentMatches.css'

function RecentMatches(props) {
  RecentMatches.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
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
                <th>Type</th>
                <th>Duration</th>
                <th>KDA</th>
              </tr>
              {Matches.length === 0 ? (
                <tr>
                  <td>Still</td>
                  <td>Waiting</td>
                  <td>For</td>
                  <td>Match</td>
                  <td>Data</td>
                </tr>
              ) : (
                Matches.slice(0, 15).map((match) => (
                  <tr>
                    <td className="green">
                      {getHeroByID(match.hero_id).localized_name}
                    </td>

                    {utilities.checkPlayerWin(
                      utilities.checkPlayerTeam(match.player_slot),
                      match.radiant_win,
                    ) ? (
                      <td className="green">Victory</td>
                    ) : (
                      <td className="red">Defeat</td>
                    )}
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
