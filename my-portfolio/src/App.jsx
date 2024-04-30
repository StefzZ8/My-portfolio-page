import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Homepage from './components/Home/Homepage';
import Loader from './components/Loader/Loader';
import About from './components/About/About';
import Projects from './components/ProjectsContent/Projects';
import ContactPage from './components/Contact/ContactPage';
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
        <div className="app">
          <div className="sections">
            <Sidebar />
            <Homepage />
            <About />
            <Projects />
            <ContactPage />
          </div>
        </div>
      )}
    </>
  );
}

export default App;