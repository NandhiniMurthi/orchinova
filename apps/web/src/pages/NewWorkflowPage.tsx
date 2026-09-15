import { Link } from 'react-router-dom'
import Card from '../components/Card'

function NewWorkflowPage() {
  return (
    <main>
      <Card>
      <h2>Create a new workflow</h2>
<p>Define your workflow steps and configuration here.</p>
   </Card>
   <Link to="/workflows">Back to workflows</Link>
    </main>
  )
}

export default NewWorkflowPage
