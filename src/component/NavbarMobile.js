import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons'
import logoMda from '../image/logo-mda.png';
import titre from './image/mda-titre.jpg';
import facebook from './image/facebook.png';
import { Link } from 'react-router-dom';
import navData from './navData';
import '../style/navbarMobile.css';

export default function NavbarMobile (){
    const [ fixed, setfixed ] = useState(false);
    const [ toggle, setToggle ] = useState(false);

    const changelog = () => {
        if(window.scrollY > 0)
            setfixed(true);
        else
            setfixed(false);
    }

    window.addEventListener('scroll', changelog);

    return(
        
        <nav className={fixed ? "fixed-top navMobile d-md-none navbar navbar-light light-blue lighten-4" : "navbar d-md-none navMobile navbar-light light-blue lighten-4"}>
            
            <img src={titre} className={fixed ? 'hiddentext' : 'showtext pt-2 img-fluid ml-auto mr-auto mb-4'}></img>
            <div className='menu row justify-content-between'>
                <Link to='/' onClick={() => setToggle(toggle ? !toggle : toggle)} className='logo-mda'><img src={logoMda} alt='logo-mda' className={fixed ? 'logo-top' : 'logo-top-none'} /></Link>
                <a onClick={() => setToggle(!toggle)} className="d-col-block d-sm-none navbar-toggler first-button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                    <div className={toggle ? "open animated-icon1": "animated-icon1"} onClick={() => setToggle(!toggle)}><span></span><span></span><span></span></div>
                </a>
                <div className='d-none d-sm-block'>
                    <ul className='row pr-2 mb-2 justify-content-end align-items-center text-center'>
                        <li className='pr-2'><Link to='/mon-espace'>Se connecter<FontAwesomeIcon icon={faUser} /></Link></li>
                        <li className='text-center'><a href='https://www.facebook.com/pg/MDAdeStBenoit/posts/'><img src={facebook} alt='facebook' width='20px' /></a></li>
                    </ul>
                </div>
            </div>
            <div className='d-none d-sm-block' style={{width:'100%'}}>
                <ul className='row pt-2 justify-content-around' style={{width:'100%'}}>
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
            <div className={`collapse ${toggle ? 'show collapsing' : 'collapsing' } navbar-collapse`} id="navbarSupportedContent1">

                <ul id='accordion' className="navbar-nav mr-auto d-flex">
                    {   
                        navData.map(item => item.to ?
                            <li key={item.id} className={item.class}>
                                <Link onClick={() => setToggle(!toggle)} to={item.to}>{item.label}</Link>
                            </li>:
                            <li key={item.id} className={item.class}>
                                <div className='titre-collapse'>
                                    <a data-toggle="collapse" data-target={`#collapse${item.id}`} aria-expanded="true" aria-controls="collapseOne">
                                        {item.label}
                                    </a>
                                    <FontAwesomeIcon className='arrow' icon={faAngleDown}/>
                                </div>

                                <ul id={`collapse${item.id}`} className={`pl-4 ${toggle ? 'collapse' : '' }`} data-parent="#accordion">
                                    {item.dropdown.map(item => 
                                        <li key={item.id}><Link onClick={() => setToggle(!toggle) } to={item.to}>{item.label}</Link></li>)}
                                </ul>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}