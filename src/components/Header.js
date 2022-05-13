import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
      <div className="inner-header">
        <Link to="/">
          <p className="header-nav-logo">Dotabeef</p>
        </Link>
      </div>
    </div>
  )
}

export default Header
