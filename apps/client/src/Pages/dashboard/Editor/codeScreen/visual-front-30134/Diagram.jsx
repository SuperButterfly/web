import React, { useCallback} from 'react';
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

const proOptions = { hideAttribution: true };

const LayoutFlow = () => {
  const { fitView } = useReactFlow();
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

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
      <Workspace />
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
        nodesDraggable
      >
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
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

export default function Diagram() {
  return (
    <ReactFlowProvider>
      <LayoutFlow />
    </ReactFlowProvider>
  );
}
