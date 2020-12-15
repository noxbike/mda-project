import React, { Component } from 'react';

export default class Facebook extends Component {
    render(){
        return(
            <div className='col-12 col-md-4 col-lg-4 ml-auto mr-auto d-flex justify-content-around'>
                <iframe title='facebook-iframe' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2FMDAdeStBenoit%2Fposts%2F&tabs=timeline&width=320&height=525&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="320" height="525" style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        )
    }
}