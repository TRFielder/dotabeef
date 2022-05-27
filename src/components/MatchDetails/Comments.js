import '../../styles/Comments.css'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getComments } from '../../helpers/firebaseFuncs'

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
            <div>Loading comments...</div>
          ) : (
            <>
              <div className="comment-wrapper">Hello there!</div>
              <div className="comment-wrapper">{`Comment ${props.MatchID} goes here!`}</div>
            </>
          )}
        </article>
      </section>
    </div>
  )
}

export default Comments
