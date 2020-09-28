import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import './App.css';
import Accueil from './component/Accueil';
import Contact from './component/Contact';
import Footer from './component/Footer';
import CestQuoi from './component/CestQuoi';
import Login from './component/Login';
import Services from './component/Services';
import Postulez from './component/postulez';
import Mission from './component/Mission';
import FormulaireServices from './component/FormulaireServices';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div id='content'>
          <Route exact path='/' component={ Accueil } />
          <Route path='/contact' component={ Contact } />
          <Route path='/services' component={ Services } />
          <Route path='/c-est-quoi' component={ CestQuoi } />
          <Route path='/login' component={ Login } />
          <Route path='/postuler' component={ Postulez } />
          <Route path='/mission' component={ Mission } />
          <Route path='/reservation' component={ FormulaireServices } />
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
