import React, { Component } from 'react'
import parse from 'html-react-parser';
import Moment from 'moment';
Moment.locale('fr');
const localhost = require('../config.json');

export default class contenuArticle extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            data: null,
            url: this.props.match.params.titre,
        }
    }
    
    componentDidMount = () => {
        const { url } = this.state;
        fetch(`http://${ localhost.localhost }/api/articles/${ url }`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => this.setState({data: res.articleFound}))
    }

    time(date){
        date= new Date(date);
        date = Moment(date).format("Do MMM YYYY");
        return date;
    }

    render(){
        const { data } = this.state;
        return (
            <div className='contenuArticle col-12 pt-4'>
                <div className='col-12 col-lg-8 ml-auto mr-auto'>
                    {data &&
                        <div>
                            <h1> { data.titre }</h1>
                            <div style={{color:'gray'}}>
                                <p>Publié le { this.time(data.createdAt) }</p>
                                <p>Par { data.auteur }</p>
                            </div>
                            <img className='mb-4' src={`http://${localhost.localhost}/${data.photo}`} width='100%' alt='top-photo'/>
                            {data.contenu ? parse(data.contenu): null}
                        </div>
                    }
                    {!data && <h4 className='mt-4'>Il n'y a aucun contenu pour le moment</h4>}
                </div>
            </div>
        )
    }
}
