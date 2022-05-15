import { useState, useEffect } from 'react'

import { getHeroes } from '../../helpers/opendota'

import PlayerBanner from './PlayerBanner'
import MostPlayedHeroes from './MostPlayedHeroes'
import LifetimeStats from './LifetimeStats'

import '../../styles/PlayerProfile.css'
import RecentFriends from './RecentFriends'
import RecentMatches from './RecentMatches'

function PlayerProfile() {
  const [Heroes, setHeroes] = useState([])

  useEffect(() => {
    getHeroes().then((result) => {
      setHeroes([...result])
    })
  })

  return (
    <>
      <PlayerBanner />
      <div className="mainContentWrapper">
        <MostPlayedHeroes Heroes={Heroes} />
        <LifetimeStats />
        <RecentFriends />
        <RecentMatches Heroes={Heroes} />
      </div>
    </>
  )
}

export default PlayerProfile
