import React, {useState, useEffect} from 'react';
import Navigation from './sidemenu/Navigation';
import Moment from 'moment';
import SkeletonArticle from '../skeleton/SkeletonArticle2';
import ToutArticle from '../contenu/ToutArticle';
const localhost = require('../config.json');

export default function ArticlesAdmin() {
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
    },[])

    const time = (date) => {
        date= new Date(date);
        date = Moment(date).format("Do MMM YYYY");
        return date;
    }

    return (
        <div className='col-12 row p-0 m-0'>
            <Navigation/>
            <div className='col-5 col-lg-2'></div>
            <div className='row justify-content-around align-items-center col-7 col-lg-10 ml-auto mr-auto mt-4'>
                    <ToutArticle/>
            </div>
        </div>
    )
}

