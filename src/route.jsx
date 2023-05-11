import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './pages/Mission';
import JoinUs from './pages/JoinUs';
import WhoWeAre from './pages/WhoWeAre';
import IntroPage from './pages/IntroPage';
import Footer from './components/Footer';
import Athentication from './Auth/Athentication';
import SignInForDoctor from './Auth/SignInForDoctor';
import PersonalDetailsDoctor from './Auth/PersonalDetailsDoctor';
import FeedForDoctor from './feed-component/FeedForDoctor';

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
          <Route path="/Auth" element={<Athentication />} />
          <Route path="/Auth/SignInForDoctor" element={<SignInForDoctor />} />
          <Route path="/Auth/SignInForDoctor/PersonalDetails" element={<PersonalDetailsDoctor />} />
          <Route path="/feedForDoctor" element={<FeedForDoctor />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
