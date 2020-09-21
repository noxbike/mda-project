import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import './App.css';
import Accueil from './component/Accueil';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div id='content'>
          <Route exact path='/' component={Accueil} />
          <Route path='/contact' component={Contact}/>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
