import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Moment from 'moment';
import 'moment/locale/fr';
import '../../style/article.css';
const localhost = require('../config.json');

export default function ToutArticle() {
    const [ article, setArticle ] = useState(null);

    useEffect(() => {
        fetch(`http://${ localhost.localhost }/api/articles`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setArticle(data.articleFound))
    }, [])

    const time = (date) => {
        date= new Date(date);
        date = Moment(date).format("Do MMM YYYY");
        return date;
    }

    return (
        <div className='col-12 articles row justify-content-around pt-4'>
            <div className='col-12 col-lg-8 row justify-content-between'>
                {article && article.map((item, index)=> index !== 0 ?
                    <div key={ item.id } className='article col-12 col-lg-5 mb-4 p-0'>
                        <Link to={`/article/${item.url}`} className='row col-12  col-sm-10 col-md-12'>
                            <div className='paper-article'></div>

                            <div className='col-md-6' style={{ padding:'0px' }}>
                                <div className='image-article' style={{ backgroundImage:`url(http://${localhost.localhost}/${item.photo})` }}>
                                    <div className='date'>
                                        <p className='col-sm'>{ time(item.createdAt) }</p>
                                    </div>
                                </div>
                            </div>

                            <div className='article-body d-flex flex-column justify-content-between col-md-6'>
                                <div className='mt-2'>
                                    <h4><strong>{ item.titre }</strong></h4>
                                </div>
                                    
                                <div className='article-bottom row'>
                                    <p className='col-sm'>{ item.auteur }</p>
                                    <p className='tag col-sm'>#Top actu</p>
                                </div>
                            </div>
                        </Link>
                    </div>:
                    <div key={ item.id } className='article col-12 mb-4 p-0'>
                    <Link to={`/article/${item.url}`} className='row col-12  col-sm-10 col-md-12'>
                        <div className='paper-article'></div>

                        <div className='col-md-6' style={{ padding:'0px' }}>
                            <div className='image-article-top' style={{ backgroundImage:`url(http://${localhost.localhost}/${item.photo})` }}>
                                <div className='date col-lg-2'>
                                    <p className='col-sm'>{ time(item.createdAt) }</p>
                                </div>
                            </div>
                        </div>

                        <div className='article-body d-flex flex-column justify-content-between col-md-6'>
                            <div className='mt-2'>
                                <h2><strong>{ item.titre }</strong></h2>
                            </div>
                            <div>
                                <p className='paragraphe-top'>{item.description} ...</p>
                            </div>
                                
                            <div className='article-bottom row'>
                                <p className='col-sm'>{ item.auteur }</p>
                                <p className='tag col-sm'>#Top actu</p>
                            </div>
                        </div>
                    </Link>
                </div>)
                }
                {!article && <h2>Aucun article pour le moment!</h2>}
            </div>
        </div>
    )
}
