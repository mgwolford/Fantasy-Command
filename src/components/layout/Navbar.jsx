import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Fantasy Command HQ</h1>

      <div className="nav-links">
        <a href="/players">Players</a>
        <a href="/rankings">Rankings</a>
        <a href="/injuries">Injuries</a>
        <a href="/waivers">Waivers</a>
        <a href="/draft-projections">Draft Projections</a>
      </div>
    </nav>
  )
}

export default Navbar