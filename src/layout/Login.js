import React, { useState } from 'react';
import '../style/login.css';
import MdaLogo from '../image/logo-mda-new.png';
import { Redirect, Link } from 'react-router-dom';
import ScrollToTop from '../component/utils/ScrollToTop';

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
                'Access-Control-Allow-Origin': '*',
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
                props.setUser({"email": email, "status": data.status})
                setredirectToRef(true)
            }
            else{
                setError({"message": data.error});
            } 
        })
    }

        if(redirectToRef){
            return(
                <Redirect to='/dashboard' />
            )
        }
        else{
            return(
                <div id='login'>
                    <ScrollToTop/>
                    <form onSubmit={ connect } className="text-center border border-light p-5" style={{backgroundColor:'white'}}>
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
                            <a onClick={() => setVisibilityPassword(!visibilityPassword)} style={{position:'absolute',right:'0',paddingTop:'13px'}}>{visibilityPassword ? 'Masquer' : 'Afficher'}</a>
                            <input type={visibilityPassword ? "text" : "password"} onChange={ (e) => setPassword(e.target.value) } className="form__field" placeholder="Mot de passe" name="password" id='password' required />
                            <label htmlFor="password" className="form__label">Mot de passe</label>
                        </div>
                        <div className="justify-content-around">
                            <div>
                                <Link to='/password'>Créer votre compte</Link>
                            </div>
                            <div>
                                <Link to='/password'>Mot de passe oublié ?</Link>
                            </div>
                        </div>

                        <button className="btn btn-info btn-block my-4" type="submit">Se connecter</button>
                    </form>
                </div>
            )
        }
    
}