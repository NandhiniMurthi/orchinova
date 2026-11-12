
import type { Node } from '@xyflow/react'
import type { WorkflowNode, TriggerNodeConfig, TransformNodeConfig, HttpRequestNodeConfig, } from '../../types/workflow'
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

function NodeConfigPanel({
  selectedNode,
  onConfigChange,
}: NodeConfigPanelProps) {
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
            value={
  (workflowNode.config as TriggerNodeConfig).triggerType
}
            disabled
          >
            <option value="manual">Manual</option>
          </select>
        </section>
      )}


      {workflowNode.type === 'httpRequest' && (
        <section>
          <h4>HTTP Request Settings</h4>

          <label htmlFor="httpMethod">Method</label>
          <select
            id="httpMethod"
            value={
              (workflowNode.config as HttpRequestNodeConfig).method
            }
            onChange={(event) => {
              onConfigChange(selectedNode.id, {
                ...(workflowNode.config as HttpRequestNodeConfig),
                method: event.target.value as HttpRequestNodeConfig['method'],
              })
            }}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>

          <label htmlFor="httpUrl">URL</label>
          <input
            id="httpUrl"
            type="url"
            value={
              (workflowNode.config as HttpRequestNodeConfig).url
            }
            placeholder="https://example.com"
            onChange={(event) => {
              onConfigChange(selectedNode.id, {
                ...(workflowNode.config as HttpRequestNodeConfig),
                url: event.target.value,
              })
            }}
          />

          {!(workflowNode.config as HttpRequestNodeConfig).url.trim() && (
            <p role="alert">URL is required.</p>
          )}
        </section>
      )}


      
      {workflowNode.type === 'transform' && (
        <section>
          <h4>Transform Settings</h4>

          <label htmlFor="transformOperation">Operation</label>
          <select
            id="transformOperation"
            value={
              (workflowNode.config as TransformNodeConfig).operation
            }
            disabled
          >
            <option value="map">Map</option>
          </select>
        </section>
      )}



    </aside>
  )
}

export default NodeConfigPanel
