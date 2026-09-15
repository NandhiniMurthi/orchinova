import { Link, NavLink, Outlet } from 'react-router-dom'
import './AppLayout.css'
import { navigationItems } from '../routes/navigation'
function AppLayout() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <Link className="app-brand" to="/">
          Orchinova
        </Link>

        <nav className="app-navigation" aria-label="Main navigation">
          {navigationItems.map((item) => (
  <NavLink key={item.path} to={item.path} end={item.path === '/'}>
    {item.label}
  </NavLink>
))}
        </nav>
      </aside>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}
 
export default AppLayout