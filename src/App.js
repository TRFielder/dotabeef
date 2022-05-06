import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import PlayerDetails from './components/PlayerDetails'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="players/:ID" element={<PlayerDetails />} />
      </Routes>
    </HashRouter>
  )
}

export default App
