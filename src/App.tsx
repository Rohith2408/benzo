import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section1 from './components/Section1';
import Memes from './components/Memes';
import About from './components/About';
import Buynow from './components/Buynow';


function App() {
  return (
    <div className="App">
      <div ><Section1/></div>
      <div><About/></div>
      <div><Memes/></div>
    </div>
  );
}

export default App;
