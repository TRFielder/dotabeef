import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Home.css'

function Home() {
  const [Name, setName] = useState('Dendi')

  const navigate = useNavigate()

  const handleChangeInput = (e) => {
    setName(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/${Name}`)
    }
  }
  return (
    <div className="Home">
      <input
        type="text"
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      ></input>
      <Link to={`/search/${Name}`}>
        <button type="submit">Search by name</button>
      </Link>
    </div>
  )
}

export default Home
