import Card from '../components/Card'
import { Link } from 'react-router-dom'
import './DashboardPage.css'
function DashboardPage() {
  return (
    <main>
      <header>
        <h1>Dashboard</h1>
        <p>
          Create, manage, and monitor your workflow automations from one place.
        </p>
      </header>

      <Card>
        <h2>Get started</h2>
        <p>You have not created any workflows yet.</p>
        <Link to="/workflows/new" className="dashboard-action">
  Create workflow
</Link>
<div className="dashboard-stats">
  <Card>
    <h2>Workflows</h2>
    <p>No workflows yet</p>
  </Card>

  <Card>
    <h2>Executions</h2>
    <p>No executions yet</p>
  </Card>

  <Card>
    <h2>Activity</h2>
    <p>No recent activity</p>
  </Card>
</div>
      </Card>
    </main>
  )
}

export default DashboardPage