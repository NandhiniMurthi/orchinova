export type NodeType = 'trigger' | 'httpRequest' | 'transform'

export interface TriggerNodeConfig {
  triggerType: 'manual'
}

export interface HttpRequestNodeConfig {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  url: string
}

export interface TransformNodeConfig {
  operation: 'map'
}

export type NodeConfig =
  | TriggerNodeConfig
  | HttpRequestNodeConfig
  | TransformNodeConfig

export interface WorkflowNode {
  id: string
  type: NodeType 
  name: string
  config: NodeConfig
}
        
export interface WorkflowEdge {
  id: string
  source: string
  target: string
}

export interface Workflow {
  id: string
  name: string
  nodes: WorkflowNode[]
  edges: WorkflowEdge[]
}