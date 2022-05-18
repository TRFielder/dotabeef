import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import MatchResult from './components/MatchDetails/MatchResult'
import PlayerProfile from './components/ProfilePage/PlayerProfile'
import Search from './components/Search'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players/:ID" element={<PlayerProfile />} />
        <Route path="/search/:Name" element={<Search />} />
        <Route path="/matches/:MatchID" element={<MatchResult />} />
      </Routes>
    </HashRouter>
  )
}

export default App
