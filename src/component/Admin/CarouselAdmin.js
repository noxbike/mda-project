import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Navigation from './sidemenu/Navigation';
var localhost = require('../config.json');

export default function CarouselAdmin() {
    const [ data, setData ] = useState(null);
    const [ charge, setCharge ] = useState(false)
    const [ scroll, setScroll ] = useState(false)
    
    const changelog = () => {
        if(window.scrollY > 0)
            setScroll(true);
        else
            setScroll(false);
    }

    window.addEventListener('scroll', changelog);
    
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

    const uploadCarousel = (input) => {
        let data = new FormData();
        data.append( 'file', input[0] )
        axios.post(`http://${localhost.localhost}/api/carousel/upload` , data,{
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(res => pushCarousel(res.data.file))
    }

    const pushCarousel = (input) => {

        axios.post(`http://${localhost.localhost}/api/carousel/add`, { 'photo': input },{
            method: "POST",
            mode:'no-cors',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        
        let tab = data ? data : []
        tab.splice(0, 0,{images: input})
        setCharge(!charge)
        setData(tab);
    }

    const deleteFile = (image) => {
        fetch(`http://${localhost.localhost}/api/carousel/delete/${image}`,{
            method: "DELETE",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data))

        let tab = data;
        for(let value of tab){
            if(value.images === image){
                tab.splice(value,1);
            }
        }
        setData(tab);
        setCharge(!charge);
    }

    const position = (index, action) => {
        let tab = data
        if(action ==='moin'){
            for(let value of tab){
                if(value.id === index - 1){
                    value.id++
                }
                else if(value.id === index){
                    value.id--
                }
            }
        }
        else{
            for(let value of tab){
                if(value.id === index + 1){
                    value.id--
                }
                else if(value.id === index){
                    value.id++
                }
            }
        }
        tab.sort(function (a, b) {
            return b.id - a.id;
        });
        setCharge(!charge)
        setData(tab)
        update(tab)
    }

    const update = (tab) =>{
        axios.put(`http://${ localhost.localhost }/api/carousel/reorder`, {"carousel": tab},{
            method: "PUT",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
    }

    return (
        <div className='row col-12 p-0 m-0'>
            <div style={{position:'fixed', minHeight:'695px', marginTop:`${scroll ?'65px': '0px'}`,zIndex:'1000'}}>
                <Navigation/>
            </div>
            <div className='row p-0 align-items-center col-12'>
                <div className='row col-11 ml-auto'>
                    {data && data.map((item, index) => 
                        <div key={item.id} className='col-sm-12 col-md-8 col-lg-4 ml-auto mr-auto mt-4'>
                            <div className='edition-carousel col-12 p-0 ml-auto mr-auto row justify-content-between align-items-center' style={{background:`rgb(46, 43, 43)`, color:'white', height:'30px', width: '100%'}}>
                                    <div className='row align-items-center col-6 col-md-6'>
                                        {index + 1 > 1 && 
                                            <div className='col-4'>
                                                <FontAwesomeIcon onClick={() => position(item.id, 'plus')} icon={faChevronLeft}/>
                                            </div>
                                        }
                                        <div className='col-4'>
                                            {index + 1}
                                        </div>
                                        {index + 1 < data.length &&
                                            <div className='col-4'>
                                                <FontAwesomeIcon onClick={() => position(item.id, 'moin')} icon={faChevronRight}/>
                                            </div>
                                        }
                                    </div>
                                    <div className='col-1'>
                                        <FontAwesomeIcon icon={faTimes} onClick={() => deleteFile(item.images)}/>
                                    </div>
                            </div>
                            <img src={`http://${localhost.localhost}/carousel/${item.images}`}  alt='carousel' height='285px' width='100%'/>
                        </div>
                    )}
                    {!data  && <p>Il n'y a aucune photo dans la carousel</p>}
                </div>
                <div className='text-right mt-4 col-lg-12'>
                    <input type='file' onChange={(e) => uploadCarousel(e.target.files)} style={{width:'134.7px'}}/>
                </div>
            </div>
        </div>
    )
}
