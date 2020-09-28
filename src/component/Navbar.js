import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logoMda from './logo/logo mda.png';

export default class Navbar extends Component {
    render(){
        return(
            <nav class="navbar fixed-top navbar-expand-lg navbar-black">
                <div className='container-logo'>
                    <Link to='/' class="navbar-brand" href="#">
                        <img src={logoMda} width="30" height="30" class="d-inline-block align-top" alt="" />
                        Maison des associations
                    </Link>
                    <button class="navbar-toggler d-block d-md-none" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-ellipsis-v fa"></i>
                    </button>
                </div>
                <button class="navbar-toggler d-none d-md-block d-lg-none" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-ellipsis-v fa"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <div className='mr-auto mt-2 mt-lg-0'></div>
                    <ul class="navbar-nav  my-2 my-lg-0">
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
                                            <Link class="dropdown-item" to='/c-est-quoi'>C'est quoi ?</Link>
                                            <Link to='/mission' class="dropdown-item" href="#">Les missions</Link>
                                            <Link to='/postuler' class="dropdown-item" href="#">Postuler</Link>
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
                        <div class="nav-item">
                            <Link to='/login' className='nav-link'>
                                <i className="fas fa-user fa" style={{fontSize: '1.2em'}}></i>
                            </Link>
                        </div>
                    </ul>
                </div>
            </nav>
        );
    }
}