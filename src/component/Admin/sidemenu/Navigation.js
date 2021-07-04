import React, { useState } from 'react'
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navigationData from './navigationData';
import './navigation.css'
import { Link } from 'react-router-dom';
var localhost = require('../../config.json');

export default function Navigation() {
    const [ agrandir, setAgrandir ] = useState(true);

    const refreshPage = () => {
        localStorage.removeItem("x-xsrf-token");
        if(!localStorage.getItem("x-xsrf-token")){
            fetch(`http://${ localhost.localhost }/api/clearCookie`,{
                method: 'GET',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => console.log(data.message))

            window.location.reload(true);
        }
      }

    return (
        <div  className='p-0 m-0 row justify-content-center align-items-center' style={{backgroundColor:'#3d3d3d', color:'white', position:'absolute', transition:'1s',width:`${agrandir ? '80px' : '200px'}`, height:'121%', zIndex:'1000', left:'0'}}>
            <div className='row justify-content-around col-12 p-1'>
                <FontAwesomeIcon icon={faBars} onClick={() => setAgrandir(!agrandir) } style={{fontSize:'30px', color:'rgba(255, 255, 255, 0.4)'}}/>
                {agrandir ? '' : <h3 style={{fontWeight:'600'}}>Menu</h3>}
            </div>
            <div id="adminMenu" className='p-0 m-0 col-12'>
                <div className='col-12'>
                    { navigationData.map(item =>
                    <Link className='nav row align-items-center p-2' to={item.path} style={{color:'white'}}>
                        <span className={`${agrandir ? 'mr-auto ml-auto' : ''}`} style={{fontSize:`${'25px'}`,width:`${agrandir ? '' : '50px'}`}}>
                            {item.icon ? <FontAwesomeIcon icon={item.icon}/>:<img src={item.image} alt='carousel' style={{filter:'invert(1)'}} width={`${'35px'}`}/>}
                        </span>
                        {agrandir ? '': <span style={{position:'absolute', marginLeft:'50px'}}>{item.name}</span>}
                    </Link>
                    )}
                </div>
            </div>
            <div className='col-12'>
                <a onClick={() => refreshPage() } className='row align-items-center p-2' style={{color:'rgba(255, 255, 255)',cursor:'pointer'}}>
                    <span className={`${agrandir ? 'mr-auto ml-auto' : 'mr-2'}`} style={{fontSize:`${'25px'}`,width:`${agrandir ? '' : '50px'}`}}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </span>
                    <span style={{transition:'1s',opacity:`${agrandir ? '0':'1'}`, display:`${agrandir ? 'none':''}`}}>Déconnexion</span>
                </a>
            </div>
        </div>
    )
}
