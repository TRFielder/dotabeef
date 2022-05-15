import PropTypes from 'prop-types'

import '../../styles/RecentMatches.css'

function RecentMatches() {
  RecentMatches.propTypes = {
    Heroes: PropTypes.array,
  }

  return (
    <div className="RecentMatches">
      <div>Recent matches go here!</div>
    </div>
  )
}

export default RecentMatches
