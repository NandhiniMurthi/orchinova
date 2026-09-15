import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import EmptyState from '../components/EmptyState'
function ExecutionsPage() {
  return (
    <main>
      <PageHeader
        title="Executions"
        description="Monitor and review workflow execution activity."
      />

      <Card>
        <EmptyState
  title="No executions yet"
  description="Workflow execution history will appear here once workflows are run."
/>
      </Card>
    </main>
  )
}

export default ExecutionsPage