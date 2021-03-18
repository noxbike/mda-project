import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faChalkboardTeacher, faHeadset, faHandsHelping, faChild, faPrint, faUserTie, faBuilding, faFolderOpen, faChartPie} from '@fortawesome/free-solid-svg-icons'
const localhost = require('../component/config.json');


export default function Services() {
    const[ service, setService ] = useState([]);
    const tab = [ faChalkboardTeacher, faHeadset, faHandsHelping, faChild, faPrint, faUserTie, faBuilding, faFolderOpen, faChartPie ];
    useEffect(() => {
        fetch(`http://${ localhost.localhost }/api/services/`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((data) => setService(data.servicesFound))
    },[])

    const getSqlPresentation = (message) => {
        return{ __html: `${ message }` }
    };

    return (
        <div className='container row justify-content-center ml-auto mr-auto col-md-12 p-0 m-0' style={{ maxWidth:'1190px' }}>
            {
                service.map(item =>
                    <div className = 'card' key={ item.id }>
                        <div className='text-center mt-auto mb-auto'>
                            <FontAwesomeIcon icon={ tab[ item.icon ] } style={{ color:`${ item.color }` }}/>
                            <h6><strong>{ item.titre }</strong></h6>
                            <div className='presentation-services text-left' dangerouslySetInnerHTML={ getSqlPresentation(item.body) }></div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}