import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Draft Command</h1>

      <div className="nav-links">
        <a href="#">Players</a>
        <a href="#">Rankings</a>
        <a href="#">Injuries</a>
        <a href="#">Waivers</a>
      </div>
    </nav>
  )
}

export default Navbar