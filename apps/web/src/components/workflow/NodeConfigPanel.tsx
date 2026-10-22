
import type { Node } from '@xyflow/react'
import type { WorkflowNode } from '../../types/workflow'

type WorkflowFlowNode = Node<{
  label: string
  workflowNode: WorkflowNode
}>

type NodeConfigPanelProps = {
  selectedNode: WorkflowFlowNode | undefined
  onConfigChange: (
    nodeId: string,
    config: WorkflowNode['config'],
  ) => void
}

function NodeConfigPanel({ selectedNode }: NodeConfigPanelProps) {
  if (!selectedNode) {
    return (
      <aside>
        <h3>Node Configuration</h3>
        <p>Select a node to configure it.</p>
      </aside>
    )
  }

  const workflowNode = selectedNode.data.workflowNode

  return (
    <aside>
      <h3>Node Configuration</h3>
      <p>{workflowNode.name}</p>

      {workflowNode.type === 'trigger' && (
        <section>
          <h4>Trigger Settings</h4>

          <label htmlFor="triggerType">Trigger Type</label>
          <select
            id="triggerType"
            value={workflowNode.config.triggerType}
            disabled
          >
            <option value="manual">Manual</option>
          </select>
        </section>
      )}
    </aside>
  )
}

export default NodeConfigPanel
