import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Homepage from './components/home-page/Homepage';
import Loader from './components/loader/Loader';
import About from './components/about-page/About';
import Projects from './components/projects-content/Projects';
import ContactPage from './components/contact-page/ContactPage';
import './App.scss';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='app'>
          <Sidebar />
          <Homepage />
          <About />
          <Projects />
          <ContactPage />
        </div>

      )}
    </>
  );
}

export default App;