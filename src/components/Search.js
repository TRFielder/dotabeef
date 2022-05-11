import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as opendota from '../helpers/opendota'

function Search() {
  const { Name } = useParams()
  const [SearchResult, SetSearchResult] = useState([])

  useEffect(() => {
    opendota.getPlayersByName(Name).then((result) => SetSearchResult(result))
  }, [Name])

  return (
    <div id="playerSearchResults">
      {SearchResult.length !== 0
        ? SearchResult.map((player) => (
            <div className="player-result" key={player.account_id}>
              <div
                className="inner"
                data-account-id={player.account_id}
                data-search-link={`/players/${player.account_id}`}
              >
                <div className="avatar">
                  <div className="image-container image-container-player">
                    <Link to={`/players/${player.account_id}`}>
                      <img
                        className="image-player image-player-avatar"
                        alt={`${player.personaname}`}
                        src={player.avatarfull}
                      ></img>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        : 'Not loaded yet'}
    </div>
  )
}

export default Search
