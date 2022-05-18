import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as opendota from '../../helpers/opendota'
import MatchBanner from './MatchBanner'
import MatchScoreboard from './MatchScoreboard'

function MatchResult() {
  const [matchData, setMatchData] = useState(null)
  const { MatchID } = useParams()

  useEffect(() => {
    opendota.getMatchData(MatchID).then((result) => {
      setMatchData(result)
    })
  }, [MatchID])

  return (
    <div className="MatchResult">
      {matchData === null ? (
        <p>Still loading match data!</p>
      ) : (
        <>
          <MatchBanner matchData={matchData} />
          <div className="match-results-full">
            <MatchScoreboard matchData={matchData} />
          </div>
        </>
      )}
    </div>
  )
}

export default MatchResult
