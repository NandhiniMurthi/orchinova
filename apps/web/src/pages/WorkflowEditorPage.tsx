import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
function WorkflowEditorPage() {
  return (
    <main>
      <PageHeader
        title="Workflow Editor"
        description="Configure and manage your workflow."
      />

      <Card>
        <h2>Workflow editor coming soon</h2>
        <p>Workflow configuration and editing will be available here.</p>
      </Card>
      <Link to="/workflows">Back to workflows</Link>
    </main>
  )
}

export default WorkflowEditorPage