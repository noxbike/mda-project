import React from 'react'
import { Link } from 'react-router-dom';
import time from '../utils/timeFormat'
import cutText from '../utils/cutText'
const localhost = require('../config.json');

export default function Actu(props) {
    return (
        <div className='article2 p-0 row col-12 col-sm-10 col-md-2 mb-4' style={{maxWidth:'100px'}}>
            <Link to={`/article/${props.item.url}`} className='col-12 p-0 m-0'>
                <div className='paper-article'></div>

                <div className='col-12 col-md-12' style={{ padding:'0px' }}>
                    <div className='image-article' style={{ backgroundImage:`url(http://${localhost.localhost}/${props.item.photo})` }}>
                        <div className='date'>
                            <p className='col-sm'>{ time(props.item.createdAt) }</p>
                        </div>
                    </div>
                </div>

                <div className='article-body col-12 col-md-12'>
                    <h4 className='pt-2 pb-2'><strong>{ cutText(props.item.titre, 15) }</strong></h4>
                    <div className='article-bottom row'>
                        <p className='col-sm'>{ props.item.auteur }</p>
                        <p className='tag col-sm'>#Actu</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
