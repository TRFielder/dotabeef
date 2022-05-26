import { HashRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getHeroes, getItemIDs, getItems } from './helpers/opendota'
import Header from './components/Header'
import Home from './components/Home'
import MatchResult from './components/MatchDetails/MatchResult'
import PlayerProfile from './components/ProfilePage/PlayerProfile'
import Search from './components/Search'

function App() {
  const [heroes, setHeroes] = useState([])
  const [ItemIds, setItemIds] = useState(null)
  const [Items, setItems] = useState(null)

  useEffect(() => {
    getHeroes().then((result) => {
      setHeroes([...result])
    })

    getItemIDs().then((result) => setItemIds(result))
    getItems().then((result) => setItems(result))
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
          element={
            <MatchResult Heroes={heroes} ItemIds={ItemIds} Items={Items} />
          }
        />
      </Routes>
    </HashRouter>
  )
}

export default App
