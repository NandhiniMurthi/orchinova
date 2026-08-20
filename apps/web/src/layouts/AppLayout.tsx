import { Link, Outlet } from 'react-router-dom'
import './AppLayout.css'

function AppLayout() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <Link className="app-brand" to="/">
          Orchinova
        </Link>

        <nav className="app-navigation" aria-label="Main navigation">
          <Link to="/">Dashboard</Link>
          <Link to="/workflows">Workflows</Link>
          <Link to="/executions">Executions</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </aside>

      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout