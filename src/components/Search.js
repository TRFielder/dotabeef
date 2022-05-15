import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as opendota from '../helpers/opendota'
import '../styles/search.css'

function Search() {
  const { Name } = useParams()
  const [SearchResult, SetSearchResult] = useState([])

  useEffect(() => {
    opendota.getPlayersByName(Name).then((result) => SetSearchResult(result))
  }, [Name])

  /* To get the date of their last match, do this
    {
      matchTimeUnix = Date.parse(player.last_match_time)
      lastMatchDate = new Date(matchTimeUnix)
      return `${lastMatchDate.getDate()}/${lastMatchDate.getMonth() + 1}/${lastMatchDate.getFullYear()}}`
    }
  */

  return (
    <div id="playerSearchResults">
      <section>
        <header>{`Search results for: ${Name}`}</header>
      </section>
      <article>
        <table className="r-table search-result">
          <tr>
            <th>Player</th>
            <th>Name</th>
          </tr>
          {SearchResult.length !== 0
            ? SearchResult.map((player) => (
                <tr className="player-result" key={player.account_id}>
                  <td className="avatar">
                    <div className="image-container image-container-player">
                      <Link to={`/players/${player.account_id}`}>
                        <img
                          className="image-player image-player-avatar"
                          alt={`${player.personaname}`}
                          src={player.avatarfull}
                        ></img>
                      </Link>
                    </div>
                  </td>
                  <td className="green">{player.personaname}</td>
                </tr>
              ))
            : 'Not loaded yet'}
        </table>
      </article>
    </div>
  )
}

export default Search
