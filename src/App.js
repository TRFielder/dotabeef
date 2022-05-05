import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import PlayerDetails from './components/PlayerDetails'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dotabeef</title>
      </Helmet>
      <Header />
      <PlayerDetails />
      <div className="App">Hello!</div>
    </HelmetProvider>
  )
}

export default App
