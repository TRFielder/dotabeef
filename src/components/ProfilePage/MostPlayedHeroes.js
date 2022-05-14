import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as opendota from '../../helpers/opendota'
import '../../styles/MostPlayedHeroes.css'

function MostPlayedHeroes() {
  const [Heroes, setHeroes] = useState([])
  const [MostPlayed, setMostPlayed] = useState([])
  // const [Table, setTable] = useState(['bane'])
  const { ID } = useParams()

  useEffect(() => {
    opendota
      .getHeroes()
      .then((result) => {
        setHeroes(result)
      })
      .then(() => {
        opendota.getMostPlayedHeroes(ID).then((result) => {
          setMostPlayed(result)
        })
      })
  }, [ID])

  const getHeroByID = (heroID) => {
    console.log(heroID)
    console.log(Heroes.find((hero) => hero.id === 1))
    console.log(Heroes.find((hero) => hero.id === `${heroID}`))
  }

  return (
    <div className="most-played-heroes">
      <section>
        <header>
          Most Played Heroes <small>All Time</small>
        </header>
        <article>
          <div className="r-table r-only-mobile-5 heroes-overview">
            {MostPlayed.length && Heroes.length
              ? MostPlayed.map((hero) => (
                  <div className="r-row" key={hero.hero_id}>
                    <div className="r-body">
                      <div className="image-container image-container-hero image-container-icon">
                        {getHeroByID(hero.hero_id)}
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
