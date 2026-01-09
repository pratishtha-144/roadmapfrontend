import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full p-20 text-center">
        <button 
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-node-yellow transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Roadmap
        </button>
        
        <div className="w-24 h-24 bg-node-yellow/10 rounded-full flex items-center justify-center mb-6 border border-node-yellow/20">
            <span className="text-node-yellow text-4xl">?</span>
        </div>
        
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <div className="max-w-md bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
          <p className="text-gray-400 text-lg mb-0 italic">
            "Content will be added here later"
          </p>
        </div>
        
        <div className="mt-12 w-full max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-4 opacity-50">
            <div className="h-32 bg-white/5 rounded-xl animate-pulse"></div>
            <div className="h-32 bg-white/5 rounded-xl animate-pulse"></div>
            <div className="h-32 bg-white/5 rounded-xl animate-pulse"></div>
        </div>
      </div>
    </Layout>
  );
};

export default PlaceholderPage;
