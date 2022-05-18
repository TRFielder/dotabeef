import PropTypes from 'prop-types'
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
      </div>
    </div>
  )
}

export default MatchScoreboard
