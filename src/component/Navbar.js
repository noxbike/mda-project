import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoMda from './logo/logo mda.png';

export default class Navbar extends Component {
    render(){
        return(
            <div>
            <nav class="navbar navbar-expand-lg navbar-black">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-ellipsis-v fa"></i>
                </button>
                <a class="navbar-brand" href="/"><img src={ logoMda } alt='logo-mda'></img> Maison des associations</a>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <div className='mr-auto mt-2 mt-lg-0'></div>
                    <ul class="navbar-nav  my-2 my-lg-0">
                        <li class="nav-item">
                            <Link to='/' class="nav-link" href="#home">Accueil <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class='nav-item'>
                            <div class="container">
                                <div class="row">
                                    <div class="dropdown">
                                        <a className='nav-link' id="dropdownMenu1" data-toggle="dropdown" type='button' aria-haspopup="true" aria-expanded="false">
                                        Associations
                                        </a>
                                        <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                        <li class="dropdown-submenu">
                                            <a  class="dropdown-item" tabindex="-1" href="#">culture</a>
                                            <ul class="dropdown-menu">
                                                <li class="dropdown-item"><a tabindex="-1" href="#">Second level</a></li>
                                                <li class="dropdown-item"><a href="#">Second level</a></li>
                                                <li class="dropdown-item"><a href="#">Second level</a></li>
                                            </ul>
                                            </li>
                                            <li class="dropdown-submenu">
                                            <a  class="dropdown-item" tabindex="-1" href="#">Sport</a>
                                            <ul class="dropdown-menu">
                                                <li class="dropdown-item"><a tabindex="-1" href="#">Second level</a></li>
                                                <li class="dropdown-item"><a href="#">Second level</a></li>
                                                <li class="dropdown-item"><a href="#">Second level</a></li>
                                            </ul>
                                            </li>
                                            <li class="dropdown-submenu">
                                            <a  class="dropdown-item" tabindex="-1" href="#">Other</a>
                                            <ul class="dropdown-menu">
                                                <li class="dropdown-item"><a tabindex="-1" href="#">Second level</a></li>
                                                <li class="dropdown-item"><a href="#">Second level</a></li>
                                                <li class="dropdown-item"><a href="#">Second level</a></li>
                                            </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='nav-item'>
                            <div class="container">
                                <div class="row">
                                    <div class="dropdown">
                                        <a className='nav-link' id="dropdownMenu1" data-toggle="dropdown" type='button' aria-haspopup="true" aria-expanded="false">
                                        Service civique
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">C'est quoi ?</a>
                                            <a class="dropdown-item" href="#">Les missions</a>
                                            <a class="dropdown-item" href="#">Postuler</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item ">
                            <Link to='/services' class="nav-link" href="#services">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/contact' class="nav-link" href="#contact">Contact</Link>
                        </li>
                        <div class="dropdown">
                            <a className='nav-link' id="dropdownMenu1" data-toggle="dropdown" type='button' aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user fa" style={{fontSize: '1.2em'}}></i>
                            </a>
                            <div class="menu-login dropdown-menu dropdown-menu-right">
                                <form class="px-4 py-3">
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                                    </div>
                                    <div class="form-group">
                                    <label for="exampleDropdownFormPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                                    </div>
                                    <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                                    <label class="form-check-label" for="dropdownCheck">
                                        Remember me
                                    </label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Sign in</button>
                                </form>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Forgot password?</a>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
        );
    }
}