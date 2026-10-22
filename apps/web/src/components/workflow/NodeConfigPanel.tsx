
import type { Node } from '@xyflow/react'
import type { WorkflowNode } from '../../types/workflow'

type WorkflowFlowNode = Node<{
  label: string
  workflowNode: WorkflowNode
}>

type NodeConfigPanelProps = {
  selectedNode: WorkflowFlowNode | undefined
}

function NodeConfigPanel({ selectedNode }: NodeConfigPanelProps) {
  if (!selectedNode) {
    return (
      <aside>
        <p>Select a node to configure it.</p>
      </aside>
    )
  }

  return (
    <aside>
      <h3>{selectedNode.data.label}</h3>
    </aside>
  )
}

export default NodeConfigPanel
