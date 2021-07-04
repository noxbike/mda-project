import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/article.css';
import SkeletonArticle from './skeleton/skeletonArticle';
import SkeletonArticle2 from './skeleton/SkeletonArticle2';
import SkeletonElement from './skeleton/SkeletonElement';
import Actu from './contenu/Actu';
import TopActu from './contenu/TopActu';
const localhost = require('./config.json');

export default function Article2(){

    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetch(`http://${ localhost.localhost }/api/articles`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setArticle({ topArticles:data.articleAccueil, firstArticle: data.firstArticle }))
    },[])

    return (
        <div className='articles p-0 col-md-12 col-lg-7'>
            <div className='container'>
                <div className='row d-flex justify-content-around'>
                    { article && article.firstArticle.map(item =>
                        <TopActu key={item.id} item={item}/>
                    )}
                    { !article && [1].map(item => <SkeletonArticle key={item} />) }

                    <div className='row col-lg-12 justify-content-between justify-content-md-between'>
                        {article && article.topArticles.map(item =>
                                <Actu key={item.id} item={item} />
                        )}
                        { !article && [1,2].map(item => <SkeletonArticle2 key={ item } />) }
                    </div>
                </div>
                <div className='autre-article'>
                    { !article ? <SkeletonElement type='title'/> : <Link to='/article'>+ Tous les articles</Link> }
                </div>
            </div>
        </div>
    )
}