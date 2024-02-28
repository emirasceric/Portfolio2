import React, { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import Navbar from './components/NavBar';
import FirstPage from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import './App.css'; 
import ProjectPage from './components/Projectpage'; 
import Tech from './components/Tech';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // tajmer da se nakon 5 sekundi uvodna stranica skloni
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        // Očistit tajmer kad se komponenta unmount-a
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <div>
            
           < Navbar/>

            <section className="section">
                <FirstPage /> 
            </section>

            <div className="section">
                <About />
            </div>
            <div className="section">
                <ProjectPage/> 
            </div>
            <div className="section">
                <Tech/> 
            </div>

            
            <div className="section">
                <Contact/>
            </div>        

           
        </div>
    );
};

export default App;
