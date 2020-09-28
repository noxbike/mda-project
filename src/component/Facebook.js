import React, { Component } from 'react';

export default class Facebook extends Component {
    render(){
        return(
            <div>
                <iframe className='facebook facebook-320' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMDAdeStBenoit%2F&tabs=timeline&width=320&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width='310' height="700" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                <iframe className='facebook-480' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2FMDAdeStBenoit%2Fposts%2F&tabs=timeline&width=480&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="480" height="700" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                <iframe className ='facebook-380' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2FMDAdeStBenoit%2Fposts%2F&tabs=timeline&width=380&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="380" height="700" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </div>
        )
    }
}