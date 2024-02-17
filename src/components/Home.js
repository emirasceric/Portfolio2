import React from 'react';
import './Home.css';


function FirstPage() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>

      <div id="horizon"></div>
      <div className="glow"></div>
      <div className="earth2" id="earth"></div>
      

      <div id="title">Front-End Developer</div>
      <div id="subtitle">
        <span>DONT</span>
        <span>LET</span>
        <span>GO</span>
      </div>
    </div>
  );
}

export default FirstPage;