import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Industries from './components/Industries/Industries';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Careers from './components/Careers/Careers';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Industries />
        <Products />
        <Services />
        <Team />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
