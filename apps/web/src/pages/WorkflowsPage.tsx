import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
function WorkflowsPage() {
  return (
    <main>
      <PageHeader
        title="Workflows"
        description="Create and manage your workflow automations."
      />

      <Card>
        <h2>No workflows yet</h2>
        <p>Create your first workflow to get started.</p>
      </Card>
    </main>
  )
}

export default WorkflowsPage