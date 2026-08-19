import { BrowserRouter, Route, Routes } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/workflows" element={<div>Workflows</div>} />
        <Route path="/workflows/new" element={<div>New Workflow</div>} />
        <Route path="/workflows/:id" element={<div>Workflow Editor</div>} />
        <Route path="/executions" element={<div>Executions</div>} />
        <Route path="/settings" element={<div>Settings</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes