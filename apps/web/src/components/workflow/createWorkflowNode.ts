import type { NodeType, WorkflowNode } from '../../types/workflow'

export function createWorkflowNode(
  type: NodeType,
  id: string,
): WorkflowNode {
  switch (type) {
    case 'trigger':
      return {
        id,
        type,
        name: 'Trigger',
        config: {
          triggerType: 'manual',
        },
      }

    case 'httpRequest':
      return {
        id,
        type,
        name: 'HTTP Request',
        config: {
          method: 'GET',
          url: '',
        },
      }

    case 'transform':
      return {
        id,
        type,
        name: 'Transform',
        config: {
          operation: 'map',
        },
      }
  }
}