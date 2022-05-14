import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getFriends } from '../../helpers/opendota'
import '../../styles/RecentFriends.css'

function RecentFriends() {
  const { ID } = useParams()
  const [friends, setFriends] = useState([])

  useEffect(() => {
    getFriends(ID, 7).then((result) => setFriends(result))
  }, [ID])
  return (
    <div className="RecentFriends">
      <section>
        <header>
          Friends <small>Last 7 days</small>
        </header>
        <article>
          {friends !== 0 ? (
            <table className="r-table RecentFriends">
              <tbody>
                <tr className="r-row">
                  <th>Friend</th>
                  <th>Matches</th>
                  <th>Win Rate</th>
                </tr>

                {friends.map((friend) => (
                  <tr className="r-row" key={friend.account_id}>
                    <td className="friendInfo">
                      <img
                        src={friend.avatar}
                        alt={friend.account_id}
                        className="image-container"
                      ></img>
                      <Link
                        to={`../../players/${friend.account_id}`}
                        className="subtext minor"
                      >
                        {friend.personaname}
                      </Link>
                    </td>
                    <td className="friendInfo-gamesWithPlayer">
                      {friend.with_games}
                    </td>
                    <td>
                      {`${
                        Math.round(
                          (friend.with_win / friend.with_games) * 100 * 10,
                        ) / 10
                      }%`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            'Loading friends'
          )}
        </article>
      </section>
    </div>
  )
}

export default RecentFriends
