import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import WorkflowCanvas from '../components/workflow/WorkflowCanvas'
import { Link } from 'react-router-dom'
import { useNodesState, type Node } from '@xyflow/react'
import type { NodeType } from '../types/workflow'
import { createWorkflowNode } from '../components/workflow/createWorkflowNode'
import { createNodeId } from '../components/workflow/createNodeId'
import NodePalette from '../components/workflow/NodePalette'
type WorkflowFlowNode = Node<{ label: string }>

function WorkflowEditorPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState<WorkflowFlowNode>([])
  const onAddNode = (nodeType: NodeType) => {
  const id = createNodeId()
  const workflowNode = createWorkflowNode(nodeType, id)

  const newNode: WorkflowFlowNode = {
    id: workflowNode.id,
    position: {
  x: 100 + (nodes.length % 3) * 250,
  y: 100 + Math.floor(nodes.length / 3) * 150,
},
    data: {
      label: workflowNode.name,
    },
  }

  setNodes((currentNodes) => [...currentNodes, newNode])
}
  return (
    <main>
      <PageHeader
        title="Workflow Editor"
        description="Configure and manage your workflow."
      />

      <Card>
        <h2>New Workflow</h2>
        <p>Build your workflow by connecting nodes together.</p>
        <NodePalette onAddNode={onAddNode} />

        <WorkflowCanvas
          nodes={nodes}
          onNodesChange={onNodesChange}
        />

        <Link to="/workflows">Back to workflows</Link>
      </Card>
    </main>
  )
}

export default WorkflowEditorPage