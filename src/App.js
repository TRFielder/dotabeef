import { HashRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getHeroes } from './helpers/opendota'
import Header from './components/Header'
import Home from './components/Home'
import MatchResult from './components/MatchDetails/MatchResult'
import PlayerProfile from './components/ProfilePage/PlayerProfile'
import Search from './components/Search'

function App() {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    getHeroes().then((result) => {
      setHeroes([...result])
    })
  }, [])

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/players/:ID"
          element={<PlayerProfile Heroes={heroes} />}
        />
        <Route path="/search/:Name" element={<Search />} />
        <Route
          path="/matches/:MatchID"
          element={<MatchResult Heroes={heroes} />}
        />
      </Routes>
    </HashRouter>
  )
}

export default App
