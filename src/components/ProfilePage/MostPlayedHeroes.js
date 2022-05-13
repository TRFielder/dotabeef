import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as opendota from '../../helpers/opendota'
import '../../styles/MostPlayedHeroes.css'

function MostPlayedHeroes() {
  const [Heroes, SetHeroes] = useState([])
  const [MostPlayed, setMostPlayed] = useState([])
  const [MostPlayedTable, setMostPlayedTable] = useState([])
  const { ID } = useParams()

  useEffect(() => {
    opendota.getHeroes().then((result) => {
      SetHeroes(result)
    })
  }, [])

  useEffect(() => {
    opendota.getMostPlayedHeroes(ID).then((result) => {
      setMostPlayed(result)
    })
  }, [ID])

  useEffect(() => {
    MostPlayed.forEach((hero) => {
      setMostPlayedTable([...MostPlayedTable, getHeroByID(hero.hero_id)])
    })
  }, [MostPlayed])

  const getHeroByID = (heroID) => {
    console.log(`Searching for hero id: ${heroID}`)
    const result = Heroes[2]
    console.log(result)
    return result
  }

  return (
    <div className="most-played-heroes">
      <section>
        <header>
          Most Played Heroes <small>All Time</small>
        </header>
        <article>
          <div className="r-table r-only-mobile-5 heroes-overview">
            {MostPlayedTable.length !== 0
              ? MostPlayed.map((hero) => (
                  <div className="r-row" key={hero.hero_id}>
                    <div className="r-body">
                      <div className="image-container image-container-hero image-container-icon">
                        {`${getHeroByID(hero.hero_id).localized_name}`}
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
