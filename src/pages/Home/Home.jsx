import Navbar from '../../components/layout/Navbar'
import DashboardCard from '../../components/dashboard/DashboardCard'

import './Home.css'

function Home() {
  return (
    <>
      <Navbar />

      <main className="home">

        <section className="hero">
          <h1>Draft Command</h1>

          <p>
            Take charge of your fantasy football team.
          </p>

          <input
            type="text"
            placeholder="Search NFL players..."
          />
        </section>

        <section className="dashboard-grid">

          <DashboardCard
            title="Player Rankings"
            text="View rankings by position."
          />

          <DashboardCard
            title="Injury Tracker"
            text="Track the latest NFL injuries."
          />

          <DashboardCard
            title="Bye Weeks"
            text="Plan ahead for upcoming byes."
          />

          <DashboardCard
            title="Waiver Wire"
            text="Find trending pickups."
          />

        </section>
      </main>
    </>
  )
}

export default Home