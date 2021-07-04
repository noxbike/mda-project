import React, { useState, useEffect} from 'react'
import Control from './Control'
import axios from 'axios'
var localhost = require('../../config.json')

export default function Photo(props) {
    const [ photos, setPhotos ] = useState(null)

    useEffect(() => {
        if(props.formulaire){
            if(props.formulaire.id){
                setPhotos(JSON.parse(props.formulaire.photos))
            }
            else{
                setPhotos(props.formulaire.photos)
            }
        }
    },[])
    
    const uploadPhoto = (image) => {
        if(props.formulaire.id){
            let data = new FormData();
            data.append( 'file', image )
            axios.post(`http://${localhost.localhost}/api/create/page/photo` , data,{
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
            })
            .then(res => {
                let tab = photos
                tab.push(res.data.file)
                setPhotos(tab)
            })

        }
        else{
            props.uploadPhoto(image)
        }
    }
    return (
        <div className='col-12'>
            <div className='col-12 text-center'>
                <h3>Photo:</h3>
                {console.log(photos)}
                <div className='col-12 mb-4 row justify-content-around' style={{minHeight:'200px'}}>
                    <div>
                        {photos ? photos.map(item => <img className='col-4' src={`http://${localhost.localhost}/${props.url}/${item}`} alt='vuephoto'/>) : <img src={`http://${localhost.localhost}/${props.formulaire.photo}`} alt='vuephoto' height='200px'/>}
                    </div>
                </div>
                <input type='file' onChange={(e) => uploadPhoto(e.target.files[0])}></input>
            </div>
            <div className='col-12 text-right mt-4'>
                <Control control={props.control} page={props.page} setPage={props.setPage} submit={props.submit} />
            </div>
        </div>
    )
}
