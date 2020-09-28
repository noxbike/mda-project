import React, { Component } from 'react';

export default class Video extends Component{
    render(){
        return(
            <div className='video'>
                <h2 className='label-video font-weight-bold'>Vidéo</h2>
                <div class="embed-responsive embed-responsive-4by3">
                    <iframe 
                        src="https://www.youtube.com/embed/CE22kRM3Tds" 
                        frameBorder="0" 
                        allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className='autre-video'>
                    <a href='#'><i class="fas fa-ellipsis-v fa"></i> <span>Autres vidéos</span></a>
                </div>
            </div>
        )
    }
}