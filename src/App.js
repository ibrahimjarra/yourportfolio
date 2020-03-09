import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Masthead from './components/Masthead/Masthead';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ModelManger from './components/ModelManager/ModelManger';
import {configuration} from './config/config';
function App() {
  return (
    <React.Fragment>
      <Navbar navData={configuration.Navbar} />
      <Masthead mastData={configuration.Masthead} />
      <Portfolio portfolioData={configuration.Portfolio} />
      <About aboutData={configuration.About} />
      <Contact />
      <Footer />
      <ModelManger />
    </React.Fragment>
  );
}

export default App;
