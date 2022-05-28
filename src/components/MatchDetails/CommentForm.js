import { useState } from 'react'
import PropTypes from 'prop-types'
import { postComment } from '../../helpers/firebaseFuncs'
import '../../styles/CommentForm.css'

function CommentForm(props) {
  CommentForm.propTypes = {
    MatchID: PropTypes.string,
    updateComments: PropTypes.func,
  }
  const [UserName, setUserName] = useState('')
  const [UserComment, setUserComment] = useState('')
  const [commentSubmitted, setCommentSubmitted] = useState(false)

  const handleChangeUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleChangeUserComment = (e) => {
    setUserComment(e.target.value)
  }

  const handleSubmitUserComment = () => {
    if (UserName !== '' && UserComment !== '') {
      postComment(props.MatchID, UserName, UserComment)
      props.updateComments()
      setCommentSubmitted(true)
    } else alert('Please fill our a user name AND comment in order to post')
  }

  return commentSubmitted ? (
    <div className="comment-form">
      Comment submitted! Refresh to see your words come to life
    </div>
  ) : (
    <div className="comment-form">
      <form>
        <label htmlFor="user-name">Name: </label>
        <input
          className="user-name"
          type="text"
          id="user-name"
          name="user-name"
          onChange={handleChangeUserName}
        ></input>
        <label htmlFor="user-comment">Comment: </label>
        <input
          className="user-comment"
          type="text"
          id="user-comment"
          name="user-comment"
          onChange={handleChangeUserComment}
        ></input>
      </form>
      <button type="submit" onClick={() => handleSubmitUserComment()}>
        Add comment
      </button>
    </div>
  )
}

export default CommentForm
