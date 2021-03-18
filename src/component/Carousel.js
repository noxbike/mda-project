import React, { Component } from 'react';
import '../style/carousel.css';
import SkeletonCarousel from './skeleton/SkeletonCarousel';
import localhost from './config.json';
import parse from 'html-react-parser';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

export default class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount(){
        fetch(`http://${localhost.localhost}/api/carousel`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => this.setState({ data: data.carouselFound }))
    }
    render(){
        const { data } = this.state;
        return(
            <div id="video-carousel-example2" className="carousel slide carousel-fade" data-ride="carousel">
               <div className="carousel-inner" role="listbox">
                    { data && data.map(item =>
                        <div className={ `carousel-item ${ item.id === 1 ? 'active' : '' }` }>
                            <div className="view ml-auto mr-auto row justify-content-center" style={{ backgroundColor:'' }}>
                                <img src={ item.images } alt='carousel'/>
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
}