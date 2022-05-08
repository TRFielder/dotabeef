import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Home.css'
import * as opendota from '../helpers/opendota'

function Home() {
  const [ID, setID] = useState(null)

  opendota.getPlayersByName('Tom')
  const handleChangeInput = (e) => {
    setID(e.target.value)
  }
  return (
    <div className="Home">
      <input type="text" onChange={handleChangeInput}></input>
      <Link to={`/players/${ID}`}>
        <button type="submit">Search ID</button>
      </Link>
    </div>
  )
}

export default Home
