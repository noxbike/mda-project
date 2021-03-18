import React from 'react'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navigationData from './navigationData';
import './navigation.css'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div  className='col-4 col-lg-2 col-xl-1 p-0 m-0 row justify-content-center align-items-center' style={{backgroundColor:'#3d3d3d', color:'white', position:'absolute', height:'695px', zIndex:'1000'}}>
            <div className='row justify-content-center col-12 pt-2'>
                <p><strong style={{color:'rgba(255, 255, 255, 0.4)'}}>Tableau de bord</strong></p>
            </div>
            <hr style={{border:'1px solid #545454', width:'90%'}}></hr>
            <div id="adminMenu" className='p-0 m-0 col-12'>
                <div className='col-12'>
                    { navigationData.map(item =>
                    <div className='nav row p-2'>
                        <Link to={item.path}>{item.name}</Link>
                    </div>
                    )}
                </div>
            </div>
            <div className='row justify-content-around align-items-center col-12 pt-2'>
                <FontAwesomeIcon icon={faSignOutAlt} />
                <a className='deconnexion' style={{color:'rgba(255, 255, 255)'}}>Déconnexion</a>
            </div>
        </div>
    )
}
