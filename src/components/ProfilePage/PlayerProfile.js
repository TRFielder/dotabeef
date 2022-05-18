import PropTypes from 'prop-types'

import PlayerBanner from './PlayerBanner'
import MostPlayedHeroes from './MostPlayedHeroes'
import LifetimeStats from './LifetimeStats'
import RecentFriends from './RecentFriends'
import RecentMatches from './RecentMatches'

import '../../styles/PlayerProfile.css'

function PlayerProfile(props) {
  PlayerProfile.propTypes = {
    Heroes: PropTypes.array,
  }
  return (
    <>
      <PlayerBanner />
      <div className="mainContentWrapper">
        <MostPlayedHeroes Heroes={props.Heroes} />
        <LifetimeStats />
        <RecentFriends />
        <RecentMatches Heroes={props.Heroes} />
      </div>
    </>
  )
}

export default PlayerProfile
