import { Link, NavLink, Outlet } from 'react-router-dom'
import './AppLayout.css'

function AppLayout() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <Link className="app-brand" to="/">
          Orchinova
        </Link>

        <nav className="app-navigation" aria-label="Main navigation">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/workflows" end={false}>Workflows</NavLink>
          <NavLink to="/executions">Executions</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </aside>

      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}
 
export default AppLayout