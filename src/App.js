import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StepsToOrganize from './components/StepsToOrganize';
import DocumentsSection from './components/DocumentsSection';
import SponsorContacts from './components/SponsorContacts';
import GetInvolvedSection from './components/GetInvolvedSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StepsToOrganize />
      <DocumentsSection />
      <SponsorContacts />
      <GetInvolvedSection />
    </div>
  );
}

export default App;

