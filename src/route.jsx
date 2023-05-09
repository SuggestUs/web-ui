import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import JoinUs from './components/JoinUs';
import WhoWeAre from './components/WhoWeAre';
import IntroPage from './components/IntroPage';

export default function MainRoute() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/WhoWeAre" element={<WhoWeAre />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/JoinUs" element={<JoinUs />} />
        </Routes>
      </main>
    </Router>
  );
}
