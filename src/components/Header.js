import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
      <div className="inner-header">
        <Link to="/">Dotabeef</Link>
      </div>
    </div>
  )
}

export default Header
