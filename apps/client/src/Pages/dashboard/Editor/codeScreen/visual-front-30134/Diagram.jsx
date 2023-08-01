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
import { initialNodes, initialEdges } from './nodes';
import styles from './Diagram.module.css';
import 'reactflow/dist/style.css';
import Workspace from './Workspace';
import SidePanel from './SidePanel'; 


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
const proOptions = { hideAttribution: true };

const LayoutFlow = () => {
  const { fitView} = useReactFlow();
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [selectedNodes, setSelectedNodes] = useState([]);// nodos en diagram
  const [optionsNode, setOptionsNode] = useState(null); //panel laterall
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false); //panel lateral

  let nodeId = 0;

  const handleShapeClick = useCallback((type) => {
    const newNodes = initialNodes
      .filter((node) => node.type === type)
      .map((node) => {
        const id = `${++nodeId}`;
        return {
          ...node,
          id,
          position: {
            x: Math.random() * 500,
            y: Math.random() * 500,
          },
        };
      });

    setNodes((prevNodes) => [...prevNodes, ...newNodes]);
    setSelectedNodes((prevSelectedNodes) => [...prevSelectedNodes, ...newNodes]);
  }, []);



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
      <SidePanel/>
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
