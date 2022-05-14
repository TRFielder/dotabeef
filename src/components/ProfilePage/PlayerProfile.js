import PlayerBanner from './PlayerBanner'
import MostPlayedHeroes from './MostPlayedHeroes'
import LifetimeStats from './LifetimeStats'

import '../../styles/PlayerProfile.css'
import RecentFriends from './RecentFriends'

function PlayerProfile() {
  return (
    <>
      <PlayerBanner />
      <div className="mainContentWrapper">
        <MostPlayedHeroes />
        <LifetimeStats />
        <RecentFriends />
      </div>
    </>
  )
}

export default PlayerProfile
