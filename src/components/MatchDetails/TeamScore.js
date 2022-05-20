import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/TeamScore.css'

function TeamScore(props) {
  TeamScore.propTypes = {
    matchData: PropTypes.object,
    team: PropTypes.string,
    Heroes: PropTypes.array,
  }
  const [players, setPlayers] = useState([])

  useEffect(() => {
    if (props.team === 'The Radiant') {
      setPlayers([...props.matchData.players.slice(0, 5)])
    } else {
      setPlayers([...props.matchData.players.slice(5, 10)])
    }
  }, [props.team, props.matchData])

  const getHeroByID = (heroID) =>
    props.Heroes.find((hero) => hero.id === parseInt(heroID, 10))

  return (
    <div className="TeamScore">
      {players !== [] ? (
        <section className={props.team}>
          <header>{props.team}</header>
          <article className="TeamScore-table">
            <table className={`teamscore-table ${props.team}`}>
              <thead>
                <tr>
                  <th>Hero</th>
                  <th>Player</th>
                  <th className="hide-mobile">Level</th>
                  <th>K</th>
                  <th>D</th>
                  <th>A</th>
                  <th>NET</th>
                  <th className="hide-mobile">LH / DN</th>
                  <th className="hide-mobile">GPM / XPM</th>
                  <th className="hide-mobile">DMG</th>
                  <th className="hide-mobile">HEAL</th>
                  <th className="hide-mobile">BLD</th>
                  <th className="hide-mobile">Wards</th>
                </tr>
              </thead>
              {players.map((player) => (
                <tr key={player.player_slot}>
                  <td>
                    <img
                      src={`http://cdn.dota2.com/apps/dota2/images/dota_react/heroes/${
                        getHeroByID(player.hero_id).name.split(
                          'npc_dota_hero_',
                        )[1]
                      }.png?`}
                      alt={getHeroByID(player.hero_id).localized_name}
                      className="scoreboard-size"
                    ></img>
                  </td>
                  <td>
                    {'personaname' in player ? (
                      <Link
                        to={`../../players/${player.account_id}`}
                        className={
                          props.team === 'The Radiant' ? 'green' : 'red'
                        }
                      >
                        {player.personaname}
                      </Link>
                    ) : (
                      'Anonymous'
                    )}
                  </td>
                </tr>
              ))}
            </table>
          </article>
        </section>
      ) : (
        'Loading match data'
      )}
    </div>
  )
}

export default TeamScore
