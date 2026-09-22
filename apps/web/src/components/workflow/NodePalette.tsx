type NodePaletteProps = {
  onAddNode: (nodeType: 'trigger' | 'httpRequest' | 'transform') => void
}

function NodePalette({ onAddNode }: NodePaletteProps) {
  return (
    <aside>
      <h3>Nodes</h3>

      <button type="button" onClick={() => onAddNode('trigger')}>
        Trigger
      </button>

      <button type="button" onClick={() => onAddNode('httpRequest')}>
        HTTP Request
      </button>

      <button type="button" onClick={() => onAddNode('transform')}>
        Transform
      </button>
    </aside>
  )
}

export default NodePalette