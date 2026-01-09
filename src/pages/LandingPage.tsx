import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import RoadmapCanvas from '../components/RoadmapCanvas/RoadmapCanvas';
import TopicDetailPanel from '../components/TopicDetailPanel/TopicDetailPanel';
import { topicContentData } from '../data/topicContent';

const LandingPage: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  const handleTopicClick = (topicId: string) => {
    setSelectedTopicId(topicId);
  };

  const handleClosePanel = () => {
    setSelectedTopicId(null);
  };

  const selectedTopic = selectedTopicId ? topicContentData[selectedTopicId] : null;

  return (
    <Layout>
      <div className="w-full h-full relative">
        <div className="absolute top-10 left-10 z-10 pointer-events-none">
          <div className="bg-node-yellow/10 border border-node-yellow/20 p-4 rounded-lg backdrop-blur-sm max-w-xs">
            <h2 className="text-node-yellow font-bold mb-1 italic">Pro Tip</h2>
            <p className="text-gray-400 text-sm">
              Click on any roadmap node to explore detailed learning resources and guides!
            </p>
          </div>
        </div>
        <RoadmapCanvas onTopicClick={handleTopicClick} />
        
        {/* Topic Detail Panel */}
        <AnimatePresence>
          {selectedTopic && (
            <TopicDetailPanel topic={selectedTopic} onClose={handleClosePanel} />
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default LandingPage;
