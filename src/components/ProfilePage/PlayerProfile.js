import PlayerBanner from './PlayerBanner'
import MostPlayedHeroes from './MostPlayedHeroes'
import LifetimeStats from '../LifetimeStats'

import '../../styles/PlayerProfile.css'

function PlayerProfile() {
  return (
    <>
      <PlayerBanner />
      <div className="mainContentWrapper">
        <MostPlayedHeroes />
        <LifetimeStats />
      </div>
    </>
  )
}

export default PlayerProfile
