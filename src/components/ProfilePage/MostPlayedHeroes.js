import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as opendota from '../../helpers/opendota'
import * as utilities from '../../helpers/utilities'
import '../../styles/MostPlayedHeroes.css'

function MostPlayedHeroes(props) {
  const [MostPlayed, setMostPlayed] = useState([])
  const { ID } = useParams()

  MostPlayedHeroes.propTypes = {
    Heroes: PropTypes.array,
  }

  useEffect(() => {
    opendota.getMostPlayedHeroes(ID).then((result) => {
      setMostPlayed([...result])
    })
  }, [ID])

  const getHeroByID = (heroID) =>
    props.Heroes.find((hero) => hero.id === parseInt(heroID, 10))

  return (
    <div className="most-played-heroes">
      <section>
        <header>
          Most Played Heroes <small>All Time</small>
        </header>
        <article>
          <table className="r-table heroes-overview">
            <tbody>
              <tr>
                <th>Hero</th>
                <th>Matches</th>
                <th>Wins</th>
                <th>Win %</th>
              </tr>
              {MostPlayed.length && props.Heroes.length ? (
                MostPlayed.slice(0, 10).map((hero) => (
                  <tr className="r-row" key={hero.hero_id}>
                    <td className="image-container image-container-hero image-container-icon">
                      <img
                        src={`http://cdn.dota2.com/apps/dota2/images/dota_react/heroes/${
                          getHeroByID(hero.hero_id).name.split(
                            'npc_dota_hero_',
                          )[1]
                        }.png?`}
                        alt={getHeroByID(hero.hero_id).localized_name}
                        className="scoreboard-size"
                      ></img>
                      <div className="subtext minor">
                        <p className="green">
                          {getHeroByID(hero.hero_id).localized_name}
                        </p>
                        <p>{utilities.timeSinceMatch(hero.last_played)}</p>
                      </div>
                    </td>
                    <td className="gamesPlayedAsHero">{hero.games}</td>
                    <td className="winsAsHero">{hero.win}</td>
                    <td className="winrateAsHero">
                      {`${
                        Math.round((hero.win / hero.games) * 100 * 100) / 100
                      }%`}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>Still loading</tr>
              )}
            </tbody>
          </table>
        </article>
      </section>
    </div>
  )
}

export default MostPlayedHeroes
