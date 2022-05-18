import PropTypes from 'prop-types'
import '../../styles/MatchBanner.css'

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
          </div>
        </div>
        <div className="MatchDetails-content-secondary">
          <dl>
            <dd>Normal skill</dd>
            <dt>Skill Bracket</dt>
          </dl>
          <dl>
            <dd>All Pick</dd>
            <dt>Game Mode</dt>
          </dl>
          <dl>
            <dd>Europe</dd>
            <dt>Region</dt>
          </dl>
          <dl>
            <dd>26:13</dd>
            <dt>Duration</dt>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default MatchBanner
