import { useCallback, } from 'react'
import {
  addEdge,
  Background,
  Controls,
  ReactFlow,
  useEdgesState,
  type OnNodesChange,
  type Connection,
  type Edge,
  type Node,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'
import './WorkflowCanvas.css'
type WorkflowFlowNode = Node<{ label: string }>
type WorkflowCanvasProps = {
  nodes: WorkflowFlowNode[]
  onNodesChange: OnNodesChange<WorkflowFlowNode>
}

     
const initialEdges: Edge[] = [
  {
    id: 'trigger-http',
    source: 'trigger-1',
    target: 'http-1',
  },
  {
    id: 'http-transform',
    source: 'http-1',
    target: 'transform-1',
  },
]

function WorkflowCanvas({
  nodes,
  onNodesChange,
}: WorkflowCanvasProps) {
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((currentEdges) => addEdge(connection, currentEdges))
    },
    [setEdges],
  )

  return (
    <div className="workflow-canvas">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default WorkflowCanvas