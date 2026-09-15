import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import EmptyState from '../components/EmptyState'
import { Link } from 'react-router-dom'
function WorkflowsPage() {
  return (
    <main>
      <PageHeader
        title="Workflows"
        description="Create and manage your workflow automations."
      />
    <div className="page-actions">
  <Link to="/workflows/new">Create workflow</Link>
</div>
      <Card>
       <EmptyState
  title="No workflows yet"
  description="Create your first workflow to automate a process."
  action={<Link to="/workflows/new">Create workflow</Link>}
/></Card>
    </main>
  )
}

export default WorkflowsPage