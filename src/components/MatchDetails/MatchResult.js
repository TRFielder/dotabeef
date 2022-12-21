import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as opendota from '../../helpers/opendota'
import MatchBanner from './MatchBanner'
import MatchScoreboard from './MatchScoreboard'
import TeamScore from './TeamScore'
import AdvantagePlot from './AdvantagePlot'
import Comments from './Comments'
import CommentForm from './CommentForm'

function MatchResult(props) {
  MatchResult.propTypes = {
    Heroes: PropTypes.array,
    Items: PropTypes.object,
    ItemIds: PropTypes.object,
  }
  const [matchData, setMatchData] = useState(null)
  const { MatchID } = useParams()
  const [newComments, setNewComments] = useState(0)

  useEffect(() => {
    opendota.getMatchData(MatchID).then((result) => {
      setMatchData(result)
    })
  }, [MatchID])

  function updateComments() {
    setNewComments(newComments + 1)
  }

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
              Items={props.Items}
              ItemIds={props.ItemIds}
            />
            <TeamScore
              key="dire"
              matchData={matchData}
              team="The-Dire"
              Heroes={props.Heroes}
              Items={props.Items}
              ItemIds={props.ItemIds}
            />
            {matchData.radiant_xp_adv === null ||
            matchData.dire_xp_adv === null ? (
              <p>No Exp advantage data available for this match</p>
            ) : (
              <AdvantagePlot matchData={matchData} />
            )}
          </div>
          <Comments MatchID={MatchID} newComments={newComments} />
          <CommentForm
            MatchID={MatchID}
            updateComments={() => {
              updateComments()
            }}
          />
        </>
      )}
    </div>
  )
}

export default MatchResult
