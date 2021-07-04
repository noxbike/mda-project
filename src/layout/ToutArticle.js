import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Actu from '../component/contenu/Actu';
import time from '../component/utils/timeFormat';
import '../style/article.css';
const localhost = require('../component/config.json');

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

    return (
        <div className=' articles col-12 articles row justify-content-around pt-4'>
            <div className='col-12 col-lg-8 row'>
                {article && article.map(item =>
                    <div className='col-4'>
                        <Actu key={item.id} item={item} />
                    </div>
                )}
                {!article && <h2>Aucun article pour le moment!</h2>}
            </div>
        </div>
    )
}
