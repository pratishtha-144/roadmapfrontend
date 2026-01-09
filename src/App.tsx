import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PlaceholderPage from './pages/PlaceholderPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/html" element={<PlaceholderPage title="HTML" />} />
        <Route path="/css" element={<PlaceholderPage title="CSS" />} />
        <Route path="/javascript" element={<PlaceholderPage title="JavaScript" />} />
        <Route path="/version-control" element={<PlaceholderPage title="Version Control" />} />
        <Route path="/frameworks" element={<PlaceholderPage title="Frameworks & Libraries" />} />
        <Route path="/testing" element={<PlaceholderPage title="Testing" />} />
        <Route path="/performance" element={<PlaceholderPage title="Performance Optimization" />} />
        <Route path="/deployment" element={<PlaceholderPage title="Deployment" />} />
        {/* Fallback for unknown routes */}
        <Route path="*" element={<PlaceholderPage title="Coming Soon" />} />
      </Routes>
    </Router>
  );
};

export default App;
