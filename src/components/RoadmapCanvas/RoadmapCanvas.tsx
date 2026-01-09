import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
} from '@xyflow/react';
import type {
  Connection,
  Edge,
  Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import roadmapData from '../../data/roadmapData.json';

type CustomNode = Node & {
  route?: string;
};

const initialNodes: Node[] = roadmapData.filter(item => 'position' in item).map(node => ({
  ...node,
  dragHandle: '.custom-drag-handle',
})) as Node[];

const initialEdges: Edge[] = roadmapData.filter(item => !('position' in item)) as any as Edge[];

interface RoadmapCanvasProps {
  onTopicClick?: (topicId: string) => void;
}

const RoadmapCanvas: React.FC<RoadmapCanvasProps> = ({ onTopicClick }) => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: CustomNode) => {
    // Extract topic ID from route (e.g., "/html" -> "html")
    if (node.route && onTopicClick) {
      const topicId = node.route.replace('/', '');
      onTopicClick(topicId);
    }
  }, [onTopicClick]);

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 120px)' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
        snapToGrid
        snapGrid={[15, 15]}
        style={{ background: '#0a0a0a' }}
        colorMode="dark"
      >
        <Controls />
        <Background color="#1a1a1a" gap={12} />
      </ReactFlow>
    </div>
  );
};

export default RoadmapCanvas;
