import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import '../style/navbar.css';
import logoMda from '../image/logo-mda.png';
import titre from './image/mda-titre.jpg';
import facebook from './image/facebook.png';
import { Link } from 'react-router-dom';
import navData from './navData';

export default function Navbar (){
    const [ fixed, setfixed ] = useState(false);

    const changelog = () => {
        if(window.scrollY > 0)
            setfixed(true);
        else
            setfixed(false);
    }

    window.addEventListener('scroll', changelog);

    return(
        <nav className={`d-none d-md-block col-md-12 d-md-flex justify-content-between align-items-center ${fixed ? 'fixed-top' : ''}`} >
            <div className='contain-logo mb-2'>
                <Link to='/' className='text-right'><img src={logoMda} alt='logo-mda' className={fixed ? 'logo-top' : 'logo-top-none'} /></Link>
            </div>
            <div className='middle-navbar'>
                <div className='d-flex justify-content-around col-lg-12 mb-4 '>
                    <img src={titre} className={fixed ? 'hiddentext' : 'showtext pt-2'}></img>
                </div>
                <ul className='row justify-content-around'>
                    <li><Link to='/'><FontAwesomeIcon icon={faHome} /></Link></li>
                    {
                        navData.map(item => item.to ?
                        <li key={item.id} className={item.label}>
                            <Link to={item.to}>{item.label}</Link>
                        </li>
                        :<li key={item.id} className={item.class}><a>{item.label}</a>
                            <ul className={`dropdown dropdown-${item.class}`}>
                            {item.dropdown.map(item => 
                                <li key={item.id}><Link to={item.to}>{item.label}</Link></li>)}
                            </ul>
                        </li>)
                    }
                </ul>
            </div>
            <div className='login-bar d-none d-md-block align-self-start'>
                <Link to='/mon-espace'><span>Se connecter </span><FontAwesomeIcon icon={faUser}/></Link>
                <a href='https://www.facebook.com/pg/MDAdeStBenoit/posts/'><img src={facebook} className='nav-facebook'/></a>
            </div>
        </nav>
    )
}