import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/main-page/MainPage';
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
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;