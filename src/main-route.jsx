import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './common-component/Navbar';
import Mission from './common-component/Mission';
import JoinUs from './common-component/JoinUs';
import WhoWeAre from './common-component/WhoWeAre';
import IntroPage from './common-component/IntroPage';

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
