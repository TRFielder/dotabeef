import { useState } from 'react'
import '../../styles/CommentForm.css'

function CommentForm() {
  const [UserName, setUserName] = useState('')
  const [UserComment, setUserComment] = useState('')

  const handleChangeUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleChangeUserComment = (e) => {
    setUserComment(e.target.value)
  }

  const handleSubmitUserComment = () => {
    console.log({ name: UserName, comment: UserComment })
  }

  return (
    <div className="comment-form">
      <form>
        <label htmlFor="user-name">Name: </label>
        <input
          type="text"
          id="user-name"
          name="user-name"
          onChange={handleChangeUserName}
        ></input>
        <label htmlFor="user-comment">Comment: </label>
        <input
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
