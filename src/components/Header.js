import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
      <div className="inner-header">
        <Link to="/">
          <p className="header-nav-logo">Dotabeef</p>
        </Link>
        <p className="header-profile-link">My Profile</p>
      </div>
    </div>
  )
}

export default Header
