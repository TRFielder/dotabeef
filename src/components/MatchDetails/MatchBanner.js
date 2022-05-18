import PropTypes from 'prop-types'
import '../../styles/MatchBanner.css'
import * as utilities from '../../helpers/utilities'

function MatchBanner(props) {
  MatchBanner.propTypes = {
    matchData: PropTypes.object,
  }

  return props.matchData === null ? (
    <div className="MatchDetails">Still loading!</div>
  ) : (
    <div className="MatchDetails">
      <div className="MatchDetails-content">
        <div className="MatchDetails-content-primary">
          <div className="MatchDetails-content-title">
            <h1>{`Match ${props.matchData.match_id}`}</h1>
            <small>Overview</small>
          </div>
        </div>
        <div className="MatchDetails-content-secondary">
          <dl>
            <dd>{utilities.getGameMode(props.matchData.game_mode)}</dd>
            <dt>Game Mode</dt>
          </dl>
          <dl>
            <dd>{utilities.getDuration(props.matchData.duration)}</dd>
            <dt>Duration</dt>
          </dl>
          <dl>
            <dd>{utilities.dateFromUnixTime(props.matchData.start_time)}</dd>
            <dt>Match Ended</dt>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default MatchBanner
