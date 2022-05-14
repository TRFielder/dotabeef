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
        {friends !== 0 ? (
          <table className="r-table RecentFriends">
            <tbody>
              <th>
                <tr>
                  <th>Friend</th>
                  <th>Matches</th>
                  <th>Win Rate</th>
                </tr>
              </th>
              {friends.map((friend) => (
                <tr>
                  <td className="friendInfo">
                    <img src={friend.avatar} alt={friend.account_id}></img>
                    <Link to={`../../players/${friend.account_id}`}>
                      {friend.personaname}
                    </Link>
                  </td>
                  <td>{friend.with_games}</td>
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
      </section>
    </div>
  )
}

export default RecentFriends
