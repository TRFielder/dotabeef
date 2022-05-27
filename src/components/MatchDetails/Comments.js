import '../../styles/Comments.css'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getComments } from '../../helpers/firebaseFuncs'
import { dateFromUnixTime } from '../../helpers/utilities'

function Comments(props) {
  Comments.propTypes = {
    MatchID: PropTypes.string,
  }

  const [UserComments, setUserComments] = useState([])

  useEffect(() => {
    getComments(props.MatchID).then((result) => {
      setUserComments([...result])
    })
  }, [props.MatchID])

  return (
    <div className="Comments">
      <section>
        <header>
          Comments <small>most recent</small>
        </header>
        <article>
          {UserComments === [] ? (
            <div>No comments yet!</div>
          ) : (
            <table className="comment-table">
              <thead>
                <tr>
                  <th className="comment-user-name">User</th>
                  <th className="comment-text">Comment</th>
                </tr>
              </thead>
              <tbody>
                {UserComments.map((comment) => (
                  <tr key={comment.id} className="comment-wrapper">
                    <td className="comment-user-name">
                      {comment.name}
                      <div className="comment-timestamp">
                        {dateFromUnixTime(comment.time.seconds)}
                      </div>
                    </td>

                    <td className="comment-text">{comment.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </article>
      </section>
    </div>
  )
}

export default Comments
