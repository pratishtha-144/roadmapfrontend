import React, { useState } from 'react';
import { X, BookOpen, ExternalLink, Lightbulb, TrendingUp, Bot, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TopicContent } from '../../data/topicContent';
import ResourceCard from './ResourceCard';

interface TopicDetailPanelProps {
  topic: TopicContent;
  onClose: () => void;
}

const TopicDetailPanel: React.FC<TopicDetailPanelProps> = ({ topic, onClose }) => {
  const [activeTab, setActiveTab] = useState<'roadmaps' | 'courses' | 'videos' | 'articles' | 'practice'>('courses');
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);

  const resourceTabs = [
    { id: 'roadmaps' as const, label: 'Roadmaps', count: topic.freeResources.roadmaps.length },
    { id: 'courses' as const, label: 'Courses', count: topic.freeResources.courses.length },
    { id: 'videos' as const, label: 'Videos', count: topic.freeResources.videos.length },
    { id: 'articles' as const, label: 'Articles', count: topic.freeResources.articles.length },
    { id: 'practice' as const, label: 'Practice', count: topic.freeResources.practice.length },
  ];

  const activeResources = topic.freeResources[activeTab];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
      />

      {/* Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed right-0 top-0 h-full w-full md:w-[600px] lg:w-[700px] bg-dark border-l border-white/10 z-50 overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-dark/95 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-3xl font-bold text-node-yellow">{topic.title}</h2>
            <p className="text-gray-400 text-sm mt-1">Interactive Learning Guide</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close panel"
          >
            <X size={24} className="text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Definition Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-node-yellow" size={20} />
              <h3 className="text-xl font-semibold text-white">What is {topic.title}?</h3>
            </div>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>{topic.definition}</p>
              <p className="text-sm"><strong className="text-white">Why it matters:</strong> {topic.importance}</p>
              <p className="text-sm"><strong className="text-white">Where it's used:</strong> {topic.usage}</p>
            </div>
          </section>

          {/* Key Concepts */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-node-yellow" size={20} />
              <h3 className="text-xl font-semibold text-white">Key Concepts to Learn</h3>
            </div>
            <div className="space-y-2">
              {topic.keyConcepts.map((concept) => (
                <div key={concept.id} className="border border-white/10 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedConcept(expandedConcept === concept.id ? null : concept.id)}
                    className="w-full p-4 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors text-left"
                  >
                    <span className="text-green-400 font-medium">{concept.title}</span>
                    {expandedConcept === concept.id ? (
                      <ChevronUp size={18} className="text-gray-400" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-400" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedConcept === concept.id && concept.description && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-white/5 border-t border-white/10 text-sm text-gray-300">
                          {concept.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* Free Resources */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded text-sm font-medium">
                ✓ Free Resources
              </div>
            </div>
            
            {/* Tabs */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {resourceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  disabled={tab.count === 0}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-node-yellow text-black'
                      : tab.count > 0
                      ? 'bg-white/5 text-gray-400 hover:bg-white/10'
                      : 'bg-white/5 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  {tab.label} {tab.count > 0 && `(${tab.count})`}
                </button>
              ))}
            </div>

            {/* Resource List */}
            <div className="space-y-3">
              {activeResources.length > 0 ? (
                activeResources.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No {activeTab} available yet. Check back soon!
                </div>
              )}
            </div>
          </section>

          {/* AI Tutor Section */}
          <section className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="text-blue-400" size="20" />
              <h3 className="text-xl font-semibold text-white">Your Personalized AI Tutor</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Get instant, context-aware explanations tailored to your learning level.
            </p>
            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-400 font-semibold uppercase">Example Questions:</p>
              {topic.aiTutorPrompts.map((prompt, index) => (
                <div key={index} className="text-sm text-blue-300 bg-blue-500/10 px-3 py-2 rounded border border-blue-500/20">
                  "{prompt}"
                </div>
              ))}
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Bot size={18} />
              Ask AI Tutor about {topic.title}
            </button>
          </section>

          {/* Study Path */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="text-node-yellow" size={20} />
              <h3 className="text-xl font-semibold text-white">Your Learning Path</h3>
            </div>
            <div className="space-y-4">
              {topic.studyPath.prerequisites.length > 0 && (
                <div>
                  <p className="text-sm text-gray-400 mb-2">Before learning {topic.title}:</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.studyPath.prerequisites.map((prereq, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded text-sm">
                        {prereq}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {topic.studyPath.nextTopics.length > 0 && (
                <div>
                  <p className="text-sm text-gray-400 mb-2">After mastering {topic.title}, move to:</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.studyPath.nextTopics.map((next, index) => (
                      <span key={index} className="px-3 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded text-sm">
                        {next}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Project Ideas */}
          {topic.projectIdeas.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <ExternalLink className="text-node-yellow" size={20} />
                <h3 className="text-xl font-semibold text-white">Build Real Projects</h3>
              </div>
              <div className="grid gap-4">
                {topic.projectIdeas.map((project, index) => (
                  <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-white font-semibold">{project.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        project.difficulty === 'Beginner' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : project.difficulty === 'Intermediate'
                          ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                          : 'bg-red-500/20 text-red-300 border border-red-500/30'
                      }`}>
                        {project.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default TopicDetailPanel;
