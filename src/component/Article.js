import React, { Component } from 'react';
import '../style/article.css';
import Moment from 'moment';
import 'moment/locale/fr';
import SkeletonArticle from './skeleton/skeletonArticle';
import SkeletonArticle2 from './skeleton/SkeletonArticle2';
import SkeletonElement from './skeleton/SkeletonElement';
const localhost = require('./config.json');
Moment.locale('fr');

export default class Article2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstArticle: null,
            topArticles: null
        }
    }

    componentDidMount(){
        fetch(`http://${ localhost.localhost }/api/articles`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => this.setState({ topArticles:data.articleAccueil, firstArticle: data.firstArticle }))
    }

    time(date){
        date= new Date(date);
        date = Moment(date).format("Do MMM YYYY");
        return date;
    }

    render(){
        const { firstArticle, topArticles } = this.state;
        return (
            <div className='articles col-md-12 col-lg-7'>
          <div className='container'>
            
          <div className='row d-flex justify-content-around'>
                {firstArticle && firstArticle.map(item =>
                    <div key={item.id} className='article row col-12  col-sm-10 col-md-12 mb-4'>
                        
                        <div className='paper-article'></div>

                        <div className='col-md-6' style={{padding:'0px'}}>
                            <div className='image-article' style={{backgroundImage:`url(${item.photo})`}}>
                                <div className='date'>
                                    <p className='col-sm'>{this.time(item.createdAt)}</p>
                                </div>
                            </div>
                        </div>

                        <div className='article-body d-flex flex-column justify-content-between col-md-6'>
                            <div className='mt-2'>
                                <h4><strong>{item.titre}</strong></h4>
                            </div>
                                
                            <div className='article-bottom row'>
                                <p className='col-sm'>by {item.auteur}</p>
                                <p className='tag col-sm'>#categorie</p>
                            </div>
                        </div>

                    </div>
                )}
                {!firstArticle && [1].map(item => <SkeletonArticle key={item} />)}

                <div className='row col-lg-12 justify-content-around justify-content-md-between'>
                {topArticles && topArticles.map(item =>
                    <div key={item.id} className='article2 row col-12 col-sm-10 col-md-5 mb-4'>

                        <div className='paper-article'></div>

                        <div className='col-12 col-md-12' style={{padding:'0px'}}>
                            <div className='image-article' style={{backgroundImage:`url(${item.photo})`}}>
                                <div className='date'>
                                    <p className='col-sm'>{this.time(item.createdAt)}</p>
                                </div>
                            </div>
                        </div>

                        <div className='article-body col-12 col-md-12'>
                            <h4 className='pt-2 pb-2'><strong>{item.titre}</strong></h4>
                            <div className='article-bottom row'>
                                <p className='col-sm'>by {item.auteur}</p>
                                <p className='tag col-sm'>#categorie</p>
                            </div>
                        </div>

                    </div>
                )}
                {!topArticles && [1,2].map(item => <SkeletonArticle2 key={item} />)}
                </div>
            </div>
            <div className='autre-article'>
              {!topArticles ? <SkeletonElement type='title'/> : <a href='#'>+ Tout les articles</a>}
            </div>
          </div>
        </div>
        )
    }
}