import React from 'react'
import parse from 'html-react-parser';

export default function Video(props) {
    return (
        <div>
            <div className="embed-responsive embed-responsive-16by9">
                {parse(props.item.url)}
            </div>
            <div className='mt-4'>
                <h5>{props.item.titre}</h5>
                <p>{props.item.auteur}</p>
            </div>
        </div>
    )
}
