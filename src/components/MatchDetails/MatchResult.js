import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as opendota from '../../helpers/opendota'
import MatchBanner from './MatchBanner'
import MatchScoreboard from './MatchScoreboard'
import TeamScore from './TeamScore'
import AdvantagePlot from './AdvantagePlot'

function MatchResult(props) {
  MatchResult.propTypes = {
    Heroes: PropTypes.array,
  }
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
            <TeamScore
              key="radiant"
              matchData={matchData}
              team="The-Radiant"
              Heroes={props.Heroes}
            />
            <TeamScore
              key="dire"
              matchData={matchData}
              team="The-Dire"
              Heroes={props.Heroes}
            />
            <AdvantagePlot matchData={matchData} />
          </div>
        </>
      )}
    </div>
  )
}

export default MatchResult
