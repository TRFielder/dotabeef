import PropTypes from 'prop-types'
import '../../styles/TeamScore.css'

function TeamScore(props) {
  TeamScore.propTypes = {
    matchData: PropTypes.object,
    team: PropTypes.string,
  }
  return (
    <div className="TeamScore">
      <section className="radiant">
        <header>{props.team}</header>
        <article className="TeamScore-table">
          <table className="teamscore-table radiant">
            <thead>
              <tr>
                <th>Hero</th>
                <th>Player</th>
                <th className="hide-mobile">Level</th>
                <th>K</th>
                <th>D</th>
                <th>A</th>
                <th>NET</th>
                <th className="hide-mobile">LH / DN</th>
                <th className="hide-mobile">GPM / XPM</th>
                <th className="hide-mobile">DMG</th>
                <th className="hide-mobile">HEAL</th>
                <th className="hide-mobile">BLD</th>
                <th className="hide-mobile">Wards</th>
              </tr>
            </thead>
            <tr>
              <td>{props.matchData.players[0].hero_id}</td>
            </tr>
          </table>
        </article>
      </section>
    </div>
  )
}

export default TeamScore
