import React from 'react';
import { useNavigate } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col font-sans">
      <header className="p-6 border-b border-white/10 flex justify-between items-center backdrop-blur-md sticky top-0 z-50 bg-dark/80">
        <div>
          <h1 className="text-2xl font-bold tracking-tight cursor-pointer" onClick={() => navigate('/')}>
            Frontend Developer
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Step by step guide to becoming a modern frontend developer in 2026
          </p>
        </div>
        <nav className="flex gap-6">
          <button onClick={() => navigate('/')} className="hover:text-node-yellow transition-colors font-medium">Roadmap</button>
          <button className="text-gray-500 cursor-not-allowed">Guides</button>
          <button className="text-gray-500 cursor-not-allowed">Resources</button>
        </nav>
      </header>
      <main className="flex-1 overflow-hidden relative">
        {children}
      </main>
      <footer className="p-4 border-t border-white/5 text-center text-gray-600 text-xs">
        <p>&copy; 2026 Roadmap of Frontend. Inspired by roadmap.sh</p>
      </footer>
    </div>
  );
};

export default Layout;
