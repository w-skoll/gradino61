import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StripeDivider from './components/StripeDivider';
import ChiSiamo from './components/ChiSiamo';
import Calendario from './components/Calendario';
import Galleria from './components/Galleria';
import News from './components/News';
import Shop from './components/Shop';
import Download from './components/Download';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StripeDivider />
      <ChiSiamo />
      <StripeDivider />
      <Calendario />
      <StripeDivider />
      <Galleria />
      <StripeDivider />
      <News />
      <StripeDivider />
      <Shop />
      <StripeDivider />
      <Download />
      <StripeDivider />
      <Contatti />
      <Footer />
    </>
  );
}

export default App;
