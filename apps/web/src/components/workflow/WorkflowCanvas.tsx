import { useCallback } from 'react'
import {
  addEdge,
  Background,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'
import './WorkflowCanvas.css'

type WorkflowFlowNode = Node<{ label: string }>

const initialNodes: WorkflowFlowNode[] = [
  {
    id: 'trigger-1',
    type: 'input',
    position: { x: 100, y: 100 },
    data: { label: 'Trigger' },
  },
  {
    id: 'http-1',
    position: { x: 400, y: 100 },
    data: { label: 'HTTP Request' },
  },
  {
    id: 'transform-1',
    type: 'output',
    position: { x: 700, y: 100 },
    data: { label: 'Transform' },
  },
]

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

function WorkflowCanvas() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
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