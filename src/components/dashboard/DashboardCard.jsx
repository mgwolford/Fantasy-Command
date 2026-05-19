import './DashboardCard.css'

function DashboardCard({ title, text }) {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default DashboardCard