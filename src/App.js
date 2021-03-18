import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from './component/Navbar';
import ScrollToTop from './component/ScrollToTop';
import NavbarMobile from './component/NavbarMobile';
import Authentification from './component/authentification/Authentification';
import Footer from './component/Footer';
import Routes from './routes/Index.js';
import './App.css';
var localhost = require('./component/config.json');

const RenderRoute = (route) => {
  if( route.needsAuth === true ){
    return(
      <Route 
      exact 
      path={route.path}
      render={(props) => (route.auth ? <route.component {...props} user={route.auth} /> : <Redirect to='/coming-soon' />)}></Route>
    );
  }
  return(
    <Route 
    exact
    path={route.path}
    render={(props) => <route.component {...props} token={route.token} setUser={route.setAuth} user={route.auth}/>}></Route>
  );
}

function App() {
    const token = localStorage.getItem('x-xsrf-token');
    const [ user, setUser ] = useState(null)

    useEffect(() => {
      fetch(`http://${localhost.localhost}/api/auth`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-xsrf-token': token,
          },
          credentials:'include'
        })
        .then(data => data.json())
        .then(res => setUser(res.user))
    },[])
    
    return (
      <div className={user ? 'App': 'disconnected'}>
        <BrowserRouter>
            <ScrollToTop/>
              {user ?
              <div>
                <NavbarMobile user={user}/>
                <Navbar user={user}/>
              </div>
              : ''}
            <div id='content'>
              {
                Routes.map((route, index) =>
                  <RenderRoute {...route} token={token} auth={user} setAuth={setUser} key={index} />
                )
              }
            </div>
            {user ?
            <Footer/>
            : ''}
        </BrowserRouter>
      </div>
    );
}

export default App;
