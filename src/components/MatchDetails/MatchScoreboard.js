import PropTypes from 'prop-types'
import * as utilities from '../../helpers/utilities'
import '../../styles/MatchScoreboard.css'

function MatchScoreboard(props) {
  MatchScoreboard.propTypes = {
    matchData: PropTypes.object,
  }

  return (
    <div className="MatchScoreboard">
      <div className="MatchScoreboard-result">
        {props.matchData.radiant_win ? (
          <div className="MatchScoreboard-result green">Radiant Victory</div>
        ) : (
          <div className="MatchScoreboard-result red">Dire Victory</div>
        )}
        <div className="MatchScoreboard-result-subtitle">
          <span className="radiant-score green">
            {props.matchData.radiant_score}
          </span>
          <span className="duration">
            {utilities.getDuration(props.matchData.duration)}
          </span>
          <span className="dire-score red">{props.matchData.dire_score}</span>
        </div>
      </div>
    </div>
  )
}

export default MatchScoreboard
