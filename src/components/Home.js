import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Home.css'

function Home() {
  const [Name, setName] = useState('Dendi')

  const handleChangeInput = (e) => {
    setName(e.target.value)
  }
  return (
    <div className="Home">
      <input type="text" onChange={handleChangeInput}></input>
      <Link to={`/search/${Name}`}>
        <button type="submit">Search ID</button>
      </Link>
    </div>
  )
}

export default Home
