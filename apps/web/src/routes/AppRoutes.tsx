import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import WorkflowsPage from '../pages/WorkflowsPage'
import NewWorkflowPage from '../pages/NewWorkflowPage'
import WorkflowEditorPage from '../pages/WorkflowEditorPage'
import ExecutionsPage from '../pages/ExecutionsPage'
import SettingsPage from '../pages/SettingsPage'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/workflows" element={<WorkflowsPage />} />
          <Route path="/workflows/new" element={<NewWorkflowPage />} />
          <Route path="/workflows/:id" element={<WorkflowEditorPage />} />
          <Route path="/executions" element={<ExecutionsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes