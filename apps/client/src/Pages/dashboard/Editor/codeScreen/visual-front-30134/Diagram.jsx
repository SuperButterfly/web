import React, { useCallback, useState} from 'react';
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
  useReactFlow,
} from 'reactflow';
import { initialNodes, initialEdges } from './nodes.js';
import styles from './Diagram.module.css';
import 'reactflow/dist/style.css';
 import Workspace from './Workspace.jsx';

const getLayoutedElements = (nodes, edges) => {
  return { nodes, edges };
};

const nodeColor = (node) => {
  switch (node.type) {
    case 'input':
      return '#6ede87';
    case 'output':
      return '#6865A5';
    default:
      return '#ff0072';
  }
};
const nodeId = 0;
const proOptions = { hideAttribution: true };

const LayoutFlow = () => {
  const reactFlowInstance = useReactFlow();
  const { fitView} = useReactFlow();
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [selectedNodes, setSelectedNodes] = useState([]);

  const handleShapeClick = (nodes) => {
    setSelectedNodes((prevSelectedNodes) => [...prevSelectedNodes, ...nodes]);
  };


  const onLayout = useCallback(() => {
    const layouted = getLayoutedElements(nodes, edges);
   setNodes([...layouted.nodes]);
    setEdges([...layouted.edges]);

    window.requestAnimationFrame(() => {
      fitView();
    });
  }, [nodes, edges]);

  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onClick = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);

  return (
    <div className={styles.container}>
       <Workspace handleShapeClick={handleShapeClick} />
      <ReactFlow
        nodes={selectedNodes} 
        edges={edges} 
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        panOnDrag={true}
        selectionOnDrag={true}
        panOnScroll={true}
        proOptions={proOptions}
        nodesDraggable
      >
        <MiniMap 
          nodeColor={nodeColor} 
          nodeStrokeWidth={3} 
          zoomable pannable />
        <Controls />
        <Background />
        <ControlButton />
        <NodeToolbar />
        <NodeResizer />
        <NodeResizeControl />
        <Panel />
      </ReactFlow>
    </div>
  );
};

const Diagram = () => {
  return (
    <ReactFlowProvider>
      <LayoutFlow />
    </ReactFlowProvider>
  );
};

export default Diagram;
