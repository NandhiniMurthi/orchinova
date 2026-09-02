import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
function ExecutionsPage() {
  return (
    <main>
      <PageHeader
        title="Executions"
        description="Monitor and review workflow execution activity."
      />

      <Card>
        <h2>No executions yet</h2>
        <p>Workflow execution history will appear here.</p>
      </Card>
    </main>
  )
}

export default ExecutionsPage