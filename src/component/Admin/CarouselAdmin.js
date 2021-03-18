import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import UploaderImage from '../UploaderImage/UploaderImage';
import { add } from 'date-fns';
import Navigation from './sidemenu/Navigation';
var localhost = require('../config.json');

export default function CarouselAdmin() {
    const [ data, setData ] = useState(null);
    const [ addedData, setAddedData ] = useState([])
    
    useEffect(() => {
       fetch(`http://${localhost.localhost}/api/carousel`,{
       method: "GET",
       headers:{
           'Content-Type': 'application/json'
       }
    })
    .then(res => res.json())
    .then(data => setData(data.carouselFound))
    },[])

    const deleteFile = (id) => {
        console.log('delete: ' + id)
    }

    const reload = (input) => {
        setAddedData([input])
    }

    return (
        <div className='row col-12 row p-0 m-0'>
            <Navigation/>
            <div className='col-5 col-lg-1'></div>
            <div className='row justify-content-around align-items-center col-7 col-lg-11  mt-4' style={{minHeight:'680px'}}>
                {data && data.map(item => 
                    <div className='col-12 col-lg-4 pb-4'>
                        <div className='text-right'>
                            <FontAwesomeIcon style={{ color:'red' }} icon={ faTimes } onClick={ () => deleteFile(item.id) }/>
                        </div>
                        <img src={ item.images } alt='carousel' width='100%'/>
                    </div>)
                }
                {addedData && addedData.map(item => 
                    <div className='col-12 col-lg-4 pb-4'>
                        <div className='text-right'>
                            <FontAwesomeIcon style={{ color:'red' }} icon={ faTimes } onClick={ () => deleteFile(item.id) }/>
                        </div>
                        <img src={ `http://localhost:4000/carousel/${item.images}` } alt='carousel' width='100%'/>
                    </div>)
                }
                {!data  && <p>Il n'y a aucune photo dans la carousel</p>}
                <div className='row justify-content-center align-items-center col-12 col-lg-4'>
                   {/* <UploaderImage 
                        setAddedData={ reload } 
                        file={ addedData }
                        url={ `http://${ localhost.localhost }/api/file/carousel/add` }
                   />*/}
                </div>
            </div>
        </div>
    )
}
