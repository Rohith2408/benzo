import React from 'react';
import './App.css';
import Section1 from './components/Section1';
import Memes from './components/Memes';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div><Section1/></div>
      <div><About/></div>
      <div><Memes/></div>
      <div><Footer/></div>
    </div>
  );
}

export default App;
