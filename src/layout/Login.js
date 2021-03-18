import React, { useState } from 'react';
import '../style/login.css';
import MdaLogo from '../image/logo-mda.png';
import { Redirect, Link } from 'react-router-dom';
import ScrollToTop from '../component/ScrollToTop';

const localhost = require('../component/config.json');

export default function Login (props) {
   const [ email, setEmail ] = useState(null);
   const [ password, setPassword ] = useState(null);
   const [ visibilityPassword, setVisibilityPassword] = useState(false)
   const [ redirectToRef, setredirectToRef ] = useState(false);
   const [ error, setError ] = useState(null);
    
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
        .then(data => { 
            if(data.token){
                localStorage.setItem('x-xsrf-token', data.token)
                props.setUser(email)
                setredirectToRef(true)
            }
            else{
                setError({"message": data.error});
            } 
        })
    }

        if(redirectToRef){
            return(
                <Redirect to='/admin' />
            )
        }
        else{
            return(
                <div id='login'>
                    <ScrollToTop/>
                    <form onSubmit={ connect } className="text-center border border-light p-5">
                        <img className='mb-4'src={ MdaLogo } alt='mda-logo' />
                        {
                           error && <div className='alert alert-danger' role='alert'>
                                <p>{error.message}</p>
                            </div>
                        }
                        <div className="form__group field mb-4" >
                            <input type="input" onChange={ (e) => setEmail(e.target.value) } className="form__field" placeholder="Email" name="Email" id='Email' required />
                            <label htmlFor="Email" className="form__label">Email</label>
                        </div>

                        <div className="form__group field mb-4" >
                            <input type={visibilityPassword ? "text" : "password"} onChange={ (e) => setPassword(e.target.value) } className="form__field" placeholder="Mot de passe" name="password" id='password' required />
                            <label htmlFor="password" className="form__label">Mot de passe</label>
                        </div>
                        
                        <div className="d-flex justify-content-around">
                            <div>
                                <div>
                                    <input type='checkbox' className='mr-1' onClick={() => setVisibilityPassword(!visibilityPassword)}/>
                                    <label><strong>Affiché votre mot de passe</strong></label>
                                </div>
                                <Link to='/password'>Mot de passe oublié ?</Link>
                            </div>
                        </div>

                        <button className="btn btn-info btn-block my-4" type="submit">Se connecter</button>
                    </form>
                </div>
            )
        }
    
}