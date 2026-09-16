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
       <div>
          <h2>New Workflow</h2>
          <p>Build your workflow by connecting nodes together.</p>
        </div>

        <div>
          <p>Workflow canvas will appear here.</p>
        </div>
      </Card>
      <Link to="/workflows">Back to workflows</Link>
    </main>
  )
}

export default WorkflowEditorPage