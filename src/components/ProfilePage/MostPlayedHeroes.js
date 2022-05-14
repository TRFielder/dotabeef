import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as opendota from '../../helpers/opendota'
import '../../styles/MostPlayedHeroes.css'

function MostPlayedHeroes() {
  const [Heroes, setHeroes] = useState([])
  const [MostPlayed, setMostPlayed] = useState([])
  const { ID } = useParams()

  useEffect(() => {
    opendota
      .getHeroes()
      .then((result) => {
        setHeroes([...result])
      })
      .then(() => {
        opendota.getMostPlayedHeroes(ID).then((result) => {
          setMostPlayed([...result])
        })
      })
  }, [ID])

  const getHeroByID = (heroID) =>
    Heroes.find((hero) => hero.id === parseInt(heroID, 10))

  const timeSinceLastMatch = (date) => {
    const lastMatchMs = date * 1000
    const lastMatch = new Date(lastMatchMs)
    const today = new Date()
    const dayDiff = Math.round((today - lastMatch) / (1000 * 3600 * 24))
    const hourDiff = Math.round((today - lastMatch) / (1000 * 3600))
    return dayDiff >= 1 ? `${dayDiff} days ago` : `${hourDiff} hours ago`
  }

  return (
    <div className="most-played-heroes">
      <section>
        <header>
          Most Played Heroes <small>All Time</small>
        </header>
        <article>
          <div className="r-table heroes-overview">
            {MostPlayed.length && Heroes.length
              ? MostPlayed.slice(0, 10).map((hero) => (
                  <div className="r-row" key={hero.hero_id}>
                    <div className="r-body">
                      <div className="image-container image-container-hero image-container-icon">
                        <img
                          src={`http://cdn.dota2.com/apps/dota2/images/heroes/${
                            getHeroByID(hero.hero_id).name.split(
                              'npc_dota_hero_',
                            )[1]
                          }_sb.png`}
                          alt={getHeroByID(hero.hero_id).localized_name}
                        ></img>
                        <div className="subtext minor">
                          <p>{getHeroByID(hero.hero_id).localized_name}</p>
                          <p>{timeSinceLastMatch(hero.last_played)}</p>
                        </div>
                      </div>
                      <div className="gamesPlayedAsHero">{hero.games}</div>
                      <div className="winrateAsHero">
                        {`${
                          Math.round((hero.win / hero.games) * 100 * 100) / 100
                        }%`}
                      </div>
                    </div>
                  </div>
                ))
              : 'Still loading'}
          </div>
        </article>
      </section>
    </div>
  )
}

export default MostPlayedHeroes
