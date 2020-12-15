import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from './component/Navbar';
import ScrollToTop from './component/ScrollToTop';
import NavbarMobile from './component/NavbarMobile';
import Authentification from './component/authentification/Authentification';
import Footer from './component/Footer';
import Routes from './routes/Index.js';
import './App.css';

const RenderRoute = (route) => {
    if( route.needsAuth === true ){
      return(
        <Route 
        exact 
        path={route.path} 
        render={(props) => ( Authentification() ? <route.component {...props} /> : <Redirect to='/login' /> )}></Route>
      );
    }
    return(
      <Route 
      exact
      path={route.path}
      render={(props) => <route.component {...props} />}></Route>
    );
}

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop/>
          {Authentification() ?
            <div><NavbarMobile/>
            <Navbar/></div>: ''}
            <div id='content'>
                {
                  Routes.map((route, index) =>
                    <RenderRoute {...route} key={index} />
                  )
                }
            </div>
            {Authentification() ?
            <Footer/>: ''}
        </BrowserRouter>
      </div>
  );
}

export default App;
