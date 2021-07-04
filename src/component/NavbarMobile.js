import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons'
import logoMda from '../image/logo-mda-new.png';
import titre from './image/mda-titre.jpg';
import facebook from './image/facebook.png';
import { Link } from 'react-router-dom';
import '../style/navbarMobile.css';
var localhost = require('./config.json');

export default function NavbarMobile (props){
    const [ fixed, setfixed ] = useState(false);
    const [ toggle, setToggle ] = useState(false);
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
        
        <nav className={fixed ? "fixed-top navMobile d-md-none navbar navbar-light light-blue lighten-4" : "navbar d-md-none navMobile navbar-light light-blue lighten-4"}>
            {/*logo navbar MDA */}
            <img src={titre} className={`${fixed ? 'hiddentext' : 'showtext'}  pt-2 img-fluid ml-auto mr-auto mb-4`}></img>
            
            {/*connection et bouton menu déroulant*/}
            <div className='menu row justify-content-between'>
                <Link to='/' onClick={ () => setToggle(toggle ? !toggle : toggle) } className='logo-mda'><img src={ logoMda } alt='logo-mda' className={ fixed ? 'logo-top' : 'logo-top-none' } /></Link>
                <a onClick={ () => setToggle(!toggle) } className="d-col-block d-sm-none navbar-toggler first-button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                    <div className={ toggle ? "open animated-icon1": "animated-icon1" } onClick={ () => setToggle(!toggle) }><span></span><span></span><span></span></div>
                </a>
                <div className='d-none d-sm-block'>
                    <ul className='row pr-2 mb-2 justify-content-end align-items-center text-center'>
                        <li className='pr-2'><Link to='/mon-espace'>{ props.user ? props.user : 'Se connecter' }<FontAwesomeIcon icon={faUser} /></Link></li>
                        <li className='text-center'><a href='https://www.facebook.com/pg/MDAdeStBenoit/posts/'><img src={ facebook } alt='facebook' width='20px' /></a></li>
                    </ul>
                </div>
            </div>

            {/* Menu pour tablette */}
            <div className='d-none d-sm-block' style={{ width:'100%' }}>
                <ul className='row pt-2 justify-content-around' style={{ width:'100%' }}>
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
            
            {/*Menu smartphone */}
            <div className={`col-12 collapse ${ toggle ? 'show collapsing' : 'collapsing' } navbar-collapse`} id="navbarSupportedContent1">

                <ul id='accordion' className="navbar-nav d-flex mr-auto ml-auto">
                    {   
                       navData && navData.map((item, index)=> index === 0 ?
                            <li key={ item.id } className={`${ item.class } mt-4`}>
                                    <div><a data-toggle="collapse" data-target={`#collapse${ item.id }`} aria-expanded="true" aria-controls="collapseOne">
                                        { item.label }
                                    </a>
                                    <FontAwesomeIcon className='arrow' icon={ faAngleDown }/></div>

                                    <ul id={`collapse${ item.id }`} className={`pl-4 ${ toggle ? 'collapse' : '' }`} data-parent="#accordion">
                                        {item.dropdown.map(item => 
                                            <li key={item.id}>
                                                <div className='m-1'>
                                                    <a  data-toggle="collapse" data-target={`#collapse${item.class}`} aria-expanded="true" aria-controls="collapseOne">{item.label}</a>
                                                </div>
                                                
                                                {association && 
                                                <ul id={`collapse${ item.class }`} className={`pl-4 collapse`} data-parent={`#collapse${item.class}`}>
                                                    {association.map( seconditem => item.class === seconditem.theme && seconditem.show ?
                                                        <li key={seconditem.id} className='m-1'>
                                                            <Link to={`/association/${seconditem.lien}`}>{seconditem.lien}</Link>
                                                        </li> : ''
                                                    )}
                                                </ul>}
                                            </li>
                                        )}
                                    </ul>
                            </li>:
                            <li key={ item.id } className={`mt-4 ${item.class} `}>

                                <div className='titre-collapse'>
                                    {item.dropdown ? <div><a data-toggle="collapse" data-target={`#collapse${ item.id }`} aria-expanded="true" aria-controls="collapseOne">
                                        { item.label }
                                    </a>
                                    <FontAwesomeIcon className='arrow' icon={ faAngleDown }/></div> :
                                     <Link onClick={ () => setToggle(!toggle) } to={ item.to }>{ item.label }</Link>}
                                </div>

                                {item.dropdown && 
                                <ul id={`collapse${ item.id }`} className={`pl-4 ${ toggle ? 'collapse' : '' }`} data-parent="#accordion">
                                    {item.dropdown.map(item => 
                                        <li key={item.id}>
                                            {item.secondropdown ? 
                                            <div>
                                                <a  data-toggle="collapse" data-target={`#collapse${item.class}`} aria-expanded="true" aria-controls="collapseOne">{item.label}</a>
                                                <FontAwesomeIcon className='arrow' icon={ faAngleDown }/>
                                            </div>
                                            : <Link onClick={ () => setToggle(!toggle) } to={ item.to }>{ item.label }</Link>}
                                            {item.secondropdown && 
                                            <ul id={`collapse${ item.class }`} className={`pl-4 collapse`} data-parent={`#collapse${item.class}`}>
                                                {item.secondropdown.map( item => 
                                                    <li key={item.id}>
                                                        <Link to={item.to}>{item.label}</Link>
                                                    </li>
                                                )}
                                            </ul>}
                                        </li>
                                    )}
                                </ul>
                                }
                            </li>)
                    }
                </ul>
            </div>
        </nav>
    )
}