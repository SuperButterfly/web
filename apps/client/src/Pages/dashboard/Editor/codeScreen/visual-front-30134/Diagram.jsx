import React, { useCallback, useState} from 'react'
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  ControlButton,
  Controls,
  MiniMap,
  NodeResizer,
  NodeResizeControl,
  NodeToolbar,
  ReactFlowProvider,
  Panel,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from 'reactflow'
import { initialNodes, initialEdges } from './nodes.js'
import styles from './Diagram.module.css'
import 'reactflow/dist/style.css'
import Workspace from './Workspace.jsx'
import DiagramShape from './DiagramShape';


const getLayoutedElements = (nodes, edges) => {
  return { nodes, edges }
}
const nodeColor = (node) => {
  switch (node.type) {
    case 'input':
      return '#6ede87'
    case 'output':
      return '#6865A5'
    default:
      return '#ff0072'
  }
}

const proOptions = { hideAttribution: true }
    
const LayoutFlow = () => {
  const [shapes, setShapes] = useState([]);
  const { fitView } = useReactFlow();
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const [expandedRectangulos, setExpandedRectangulos] = useState({});
    
  const onLayout = useCallback(() => {
    const layouted = getLayoutedElements(nodes, edges)
    setNodes([...layouted.nodes])
    setEdges([...layouted.edges])

    window.requestAnimationFrame(() => {
      fitView()
    })
  }, [nodes, edges]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  const handleShapeClick = (shapeType) => {
    const position = { x: 100, y: 100 }
    const newNode = {
      id: Math.random().toString(),
      type: shapeType,
      position,
    }
    setNodes([...nodes, newNode])
  };
  const handleShapeDrag = (event, index) => {
    const newPosition = {
      x: event.clientX,
      y: event.clientY
    }
    const updatedShapes = [...shapes]
      updatedShapes[index].position = newPosition
      setShapes(updatedShapes)
  };
  const toggleExpand = (rectangulo) => {
    setExpandedRectangulos((prevExpandedRectangulos) => ({
      ...prevExpandedRectangulos,
      [rectangulo]: !prevExpandedRectangulos[rectangulo]
    }));
  };
  const handleCopyShape = (index) => {
    const shapeToCopy = shapes[index]
    const copiedShape = {
      ...shapeToCopy,
      position: { ...shapeToCopy.position }
    }
    setShapes([...shapes, copiedShape])
  };
  const handleDeleteShape = (index) => {
    const updatedShapes = shapes.filter((_, i) => i !== index)
    setShapes(updatedShapes)
  };
  const handleRenameShape = (index) => {
    setShapes((prevShapes) => {
      const updatedShapes = [...prevShapes]
        updatedShapes[index] = {
          ...updatedShapes[index],
          newText: updatedShapes[index].infoText,
          isEditing: true
        }
      return updatedShapes
    });
  };
  const handleInputChange = (event, index) => {
    const { value } = event.target
    setShapes((prevShapes) => {
      const updatedShapes = [...prevShapes]
      updatedShapes[index].newText = value
      return updatedShapes
    })
  };
  const handleConfirmRename = (index) => {
    setShapes((prevShapes) => {
      const updatedShapes = [...prevShapes]
      updatedShapes[index].infoText = updatedShapes[index].newText
      updatedShapes[index].isEditing = false
      return updatedShapes
    })
  };
  const handleCancelRename = (index) => {
    setShapes((prevShapes) => {
      const updatedShapes = [...prevShapes]
      updatedShapes[index].isEditing = false
      return updatedShapes
    })
  }
  
  return (
    <div className={styles.container}>
      <Workspace handleShapeClick={handleShapeClick} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        panOnDrag={true}
        selectionOnDrag={true}
        panOnScroll={true}
        proOptions={proOptions}
        nodesDraggable>
        {nodes.map((node, index) => (
          <DiagramShape
            key={node.id}
            shape={node}
            index={index}
            expandedRectangulos={expandedRectangulos}
            handleShapeDrag={handleShapeDrag}
            toggleExpand={toggleExpand}
            handleCopyShape={handleCopyShape}
            handleRenameShape={handleRenameShape}
            handleInputChange={handleInputChange}
            handleConfirmRename={handleConfirmRename}
            handleCancelRename={handleCancelRename}
            handleDeleteShape={handleDeleteShape}
          />
        ))}
        {' '}
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable   pannable />
        <Controls />
        <Background />
        <ControlButton />
        <NodeToolbar />
        <NodeResizer />
        <NodeResizeControl />
        <Panel />
      </ReactFlow>
    </div>
  )
}

export default function Diagram() {
  return (
    <ReactFlowProvider>
      <LayoutFlow />
    </ReactFlowProvider>
  )
}