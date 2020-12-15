import React, { useState } from 'react';
import '../style/login.css';
import MdaLogo from '../image/logo-mda.png';
import { Redirect, Link } from 'react-router-dom';

const localhost = require('../component/config.json');

export default function Login (props) {
   const [ email, setEmail ] = useState(null);
   const [ password, setPassword ] = useState(null);
   const [ redirectToRef, setredirectToRef ] = useState(false);
    
    const connect = (e) => {
        e.preventDefault();
        fetch(`http://${ localhost.localhost }/api/users/login`,{
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        })
        .then(res => res.json())
        .then(data => {localStorage.setItem('x-xsrf-token', data.token)
        setredirectToRef(true)})
        .catch(data => localStorage.setItem('error', data))
    }

        if(redirectToRef){
            return(
                <Redirect to='/' />
            )
        }
        else{
            return(
                <div id='login'>
                    <form onSubmit={ connect } className="text-center border border-light p-5">
                        <img className='mb-4'src={ MdaLogo } alt='mda-logo' />

                        <div className="form__group field mb-4" >
                            <input type="input" onChange={(e) => setEmail(e.target.value)} className="form__field" placeholder="Email" name="Email" id='Email' required />
                            <label htmlFor="Email" className="form__label">Email</label>
                        </div>

                        <div className="form__group field mb-4" >
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form__field" placeholder="Mot de passe" name="password" id='password' required />
                            <label htmlFor="password" className="form__label">Mot de passe</label>
                        </div>
                        
                        <div className="d-flex justify-content-around">
                            <div>
                                <Link to='/password'>Mot de passe oublié?</Link>
                            </div>
                        </div>

                        <button className="btn btn-info btn-block my-4" type="submit">Se connecter</button>
                    </form>
                </div>
            )
        }
    
}