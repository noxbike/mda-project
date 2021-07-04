import React, { useState, useEffect } from 'react';
import '../style/carousel.css';
import SkeletonCarousel from './skeleton/SkeletonCarousel';
import localhost from './config.json';
import parse from 'html-react-parser';

export default function Carousel(){
    const [data, setData] = useState(null)
    
    useEffect(() => {
        fetch(`http://${localhost.localhost}/api/carousel`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setData(data.carouselFound))
    },[])

    return(
        <div id="video-carousel-example2" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
                { data && data.map((item, index) =>
                    <div className={ `carousel-item ${ index === 0 ? 'active' : '' }` }>
                        <div className="view ml-auto mr-auto row justify-content-center">
                            <div style={{boxShadow:'0px 0px 16px gray'}}>
                                <img src={`http://${localhost.localhost}/carousel/${item.images}`} alt='carousel'/>
                            </div>
                            <div className="full-bg-img flex-center">
                                <div className="carousel-caption masque">
                                    {parse(`${ item.caption }`)}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                { !data && <SkeletonCarousel /> }
            </div>
            <a className="carousel-control-prev" href="#video-carousel-example2" role="button" data-slide="prev">
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#video-carousel-example2" role="button" data-slide="next">
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}