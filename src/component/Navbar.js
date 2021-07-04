import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import '../style/navbar.css';
import logoMda from '../image/logo-mda-new.png';
import titre from './image/mda-titre.jpg';
import facebook from './image/facebook.png';
import { Link } from 'react-router-dom';
var localhost = require('./config.json');

export default function Navbar (props){
    const [ fixed, setfixed ] = useState(false)
    const [ association, setAssociation ] = useState(null)
    const [ navData, setNavData ] = useState(null)

    const changelog = () => {
        if(window.scrollY > 0)
            setfixed(true);
        else
            setfixed(false);
    }

    window.addEventListener('scroll', changelog);

    useEffect(() =>{
        fetch(`./texte/navData.json`)
        .then(res => res.json())
        .then(data => setNavData(data))

        fetch(`http://${localhost.localhost}/api/pages/list`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setAssociation(data.pageFound))
    },[])

    return(
        <nav className={`d-none d-md-block col-md-12 d-md-flex justify-content-between align-items-center ${ fixed ? 'fixed-top' : '' }`} >
            <div className='contain-logo mb-2'>
                <Link to='/' className='text-right'><img src={ logoMda } alt='logo-mda' className={ fixed ? 'logo-top' : 'logo-top-none' } /></Link>
            </div>
            <div className='middle-navbar'>
                <div className='d-flex justify-content-around col-lg-12 mb-4 '>
                    <img src={ titre } className={ fixed ? 'hiddentext' : 'showtext pt-2' }></img>
                </div>
                <ul className='row justify-content-around'>
                    <li><Link to='/'><FontAwesomeIcon icon={ faHome } /></Link></li>
                    {
                        navData && navData.map((item,index) => index === 0 ?
                        <li key={ item.id } className={ item.class }>
                            <a>{ item.label }</a>
                            <ul className={`dropdown dropdown-${ item.class }`}>
                                {item.dropdown.map(item => 
                                    <li key={ item.id } className={item.class}>
                                        <a>{ item.label }</a>
                                        {association && <ul className={`sousDropdown dropdown-${ item.class }`} style={{minHeight:'500px'}}>
                                            {association.map( seconditem => item.class === seconditem.theme && seconditem.show ?
                                                <li key={seconditem.id}>
                                                    <Link to={`/association/${seconditem.lien}`}>{seconditem.lien}</Link>
                                                </li>
                                                :''
                                            )}
                                        </ul>}
                                    </li>)
                                }
                            </ul>
                        </li>
                        :<li key={ item.id } className={ item.class }>
                            {item.dropdown ? <a>{ item.label }</a> :<Link to={item.to}>{item.label}</Link>}
                            {item.dropdown && <ul className={`dropdown dropdown-${ item.class }`}>
                                {item.dropdown.map(item => 
                                    <li key={ item.id } className={item.class}>
                                        <Link to={ item.to && item.to }>{ item.label }</Link>
                                        {item.secondropdown && <ul className={`sousDropdown dropdown-${ item.class }`}>
                                            {item.secondropdown.map( item =>
                                                <li key={item.id}>
                                                    <Link to={item.to}>{item.label}</Link>
                                                </li>
                                            )}
                                        </ul>}
                                    </li>)
                                }
                            </ul>}
                        </li>)
                    }
                </ul>
            </div>
            <div className='login-bar d-none d-md-block align-self-start'>
                <Link to='/dashboard'><span>{props.user ? props.user : 'Se connecter' } </span><FontAwesomeIcon icon={faUser}/></Link>
                <a href='https://www.facebook.com/pg/MDAdeStBenoit/posts/'><img src={facebook} className='nav-facebook'/></a>
            </div>
        </nav>
    )
}