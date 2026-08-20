import PageHeader from '../components/PageHeader'

function ExecutionsPage() {
  return (
    <main>
      <PageHeader
        title="Executions"
        description="Monitor and review workflow execution activity."
      />

      <section>
        <h2>No executions yet</h2>
        <p>Workflow execution history will appear here.</p>
      </section>
    </main>
  )
}

export default ExecutionsPage