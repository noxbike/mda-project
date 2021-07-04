import React from 'react'
import { Link } from 'react-router-dom'
import time from '../utils/timeFormat'
var localhost = require('../config.json');

export default function TopActu(props) {
    return (
        <div className='article col-12 mb-4'>
                        <Link to={`/article/${props.item.url}`} className='row justify-content-between col-12 p-0 col-sm-10 col-md-12'>
                            <div className='paper-article'></div>

                            <div className='col-md-6 p-0 m-0'>
                                {console.log(`http://${localhost.localhost}/${props.item.photo}`)}
                                <div className='image-article' style={{ backgroundImage:`url(http://${localhost.localhost}/${props.item.photo})` }}>
                                    <div className='date'>
                                        <p className='col-sm'>{ time(props.item.createdAt) }</p>
                                    </div>
                                </div>
                            </div>

                            <div className='article-body d-flex flex-column justify-content-between col-md-6'>
                                <div className='mt-2'>
                                    <h4><strong>{ props.item.titre }</strong></h4>
                                </div>
                                    
                                <div className='article-bottom row'>
                                    <p className='col-sm'>{ props.item.auteur }</p>
                                    <p className='tag col-sm'>#Top actu</p>
                                </div>
                            </div>
                        </Link>
                    </div>
    )
}
