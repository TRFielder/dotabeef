import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as opendota from '../helpers/opendota'
import '../styles/search.css'
import * as utilities from '../helpers/utilities'

function Search() {
  const { Name } = useParams()
  const [SearchResult, SetSearchResult] = useState([])

  useEffect(() => {
    opendota.getPlayersByName(Name).then((result) => SetSearchResult(result))
  }, [Name])

  return (
    <div className="playerSearchResults">
      <section>
        <header>{`Search results for: ${Name}`}</header>
      </section>
      <article>
        {SearchResult.length !== 0
          ? SearchResult.map((player) => (
              <Link
                to={`/players/${player.account_id}`}
                className="player-result"
                key={player.account_id}
              >
                <div className="avatar image-container image-container-player">
                  <img
                    className="image-player image-player-avatar"
                    alt={`${player.personaname}`}
                    src={player.avatarfull}
                  ></img>
                </div>
                <div className="player-result-details">
                  <p className="green">{player.personaname}</p>
                  <p>
                    {utilities.dateToReadableFormat(player.last_match_time)}
                  </p>
                </div>
              </Link>
            ))
          : 'Not loaded yet'}
      </article>
    </div>
  )
}

export default Search
