import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Resource } from '../../data/topicContent';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const getTypeColor = (type: Resource['type']) => {
    const colors = {
      Roadmap: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      Course: 'bg-green-500/20 text-green-300 border-green-500/30',
      Video: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      Article: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      Practice: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    };
    return colors[type];
  };

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-node-yellow/50 transition-all group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-1 rounded border ${getTypeColor(resource.type)}`}>
              {resource.type}
            </span>
            {resource.isPremium && resource.discount && (
              <span className="text-xs px-2 py-1 rounded bg-node-yellow/20 text-node-yellow border border-node-yellow/30">
                {resource.discount}
              </span>
            )}
          </div>
          <p className="text-sm text-white group-hover:text-node-yellow transition-colors">
            {resource.title}
          </p>
        </div>
        <ExternalLink size={16} className="text-gray-400 group-hover:text-node-yellow transition-colors flex-shrink-0 mt-1" />
      </div>
    </a>
  );
};

export default ResourceCard;
