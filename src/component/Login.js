import React, { Component } from 'react';
import MdaLogo from './logo/logo mda.png'
import './login.css';

export default class Login extends Component {
    render(){
        return(
            <div id='login'>
                <form class="text-center border border-light p-5" action="#!">

                    <img className='mb-4'src={ MdaLogo } alt='mda-logo' />

                    <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" />

                    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Mot de passe" />

                    <div class="d-flex justify-content-around">
                        <div>
                            <a href="">Mot de passe oublié?</a>
                        </div>
                    </div>

                    <button class="btn btn-info btn-block my-4" type="submit">Se connecter</button>
                </form>
            </div>
        )
    }
}