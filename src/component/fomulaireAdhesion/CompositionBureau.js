import React, { Component } from 'react'
import ScrollToTop from '../ScrollToTop';
import regexEmail from './Regex';

export default class CompositionBureau extends Component {

    constructor(props){
        super(props);
        this.state={
            message: '',
            emailMessage: ['', '', ''],
            data: this.props.value,
            choix: 'Vice-Président(e)'
        }
    }

    handleChange(e, position){
        let tab = this.state.data
        tab[position][e.target.name] = e.target.value;
        this.setState({data: tab});
    }

    ajouter(fonction){
        let tab = this.state.data;
        let emailMessage= this.state.emailMessage;
        tab.push({id: tab.length, fonction: fonction, NomPrenom: '', telephone: '', email: '' });
        emailMessage.push('')
        this.setState({data: tab, emailMessage: emailMessage})
    }

    verify = () =>{
        let tab = this.state.data;
        let tabEmailMessage = this.state.emailMessage; 
        let email = true;
        let valid = true;
        for(let value of tab){
            for(let key in value){
                valid=(value[key] === null || value[key] === '' ? false : valid);
                if(key === 'email'){
                    email = (regexEmail.test(value[key]) ? true : false);
                    tabEmailMessage[value['id']] = (regexEmail.test(value[key]) ? '' : 'Email invalide');
                }
            }
        }
        let message = (valid ? '': 'Tout les champs doit être rempli')
        this.setState({ emailMessage: tabEmailMessage, message: message})

        if(email && valid){
            this.props.next()
        }
    }

    
    render(){
        const style={
            color: 'red',
            fontSize:'0.8em'
        }
        const { data, choix, message, emailMessage } = this.state;
        return (
            <div>
                <ScrollToTop />
                <div className='bloc row col-md-8 ml-auto mr-auto justify-content-between mb-4'>
                    <div className='ml-auto mr-auto col-lg-8'>
                        <p className='text-center' style={{ ...style }}>{message}</p>
                    </div>
                    {
                        data.map(item =>
                            <div className='row justify-content-between col-lg-12'>
                                <div className='mb-4 col-lg-3'>
                                    <div className="form__group field" >
                                        <input type="input" className="form__field" placeholder="Fonction" name="fonction" id='fonction' value={item.fonction} onChange={(e) => this.handleChange(e, item.id)} required />
                                        <label htmlFor="fonction" className="form__label">Fonction</label>
                                    </div>
                                </div>

                                <div className='mb-4 col-lg-3'>
                                    <div className="form__group field" >
                                        <input type="input" className="form__field" placeholder="Nom Prénom" name="NomPrenom" id='nom-prenom' value={item.NomPrenom} onChange={(e) => this.handleChange(e, item.id)} required />
                                        <label htmlFor="nom-prenom" className="form__label">Nom Prénom</label>
                                    </div>
                                </div>

                                <div className='mb-4 col-lg-3'>
                                    <div className="form__group field" >
                                        <input type="input" className="form__field" placeholder="Téléphone" name="telephone" id='telephone' value={item.telephone} onChange={(e) => this.handleChange(e, item.id)} required />
                                        <label htmlFor="telephone" className="form__label">Téléphone</label>
                                    </div>
                                </div>

                                <div className='mb-4 col-lg-3'>
                                    <div className="form__group field" >
                                        <input type="input" className="form__field" placeholder="Email" name="email" id='email'value={item.email} onChange={(e) => this.handleChange(e, item.id)} required />
                                        <label htmlFor="email" className="form__label">Email</label>
                                    </div>
                                    <p className='text-center' style={{ ...style }}>{emailMessage[item.id]}</p>
                                </div>
                            </div>
                        )
                    }
                    <div className='row col-lg-6 justify-content-around pt-4'>
                        <div className="form__group field mb-4 col-7">
                            <select className="form__field" id="exampleFormControlSelect1" onChange={(e) => this.setState({choix: e.target.value})}>
                                <option value='Vice-Président(e)'>Vice-Président(e)</option>
                                <option value='Trésorier(ère)-Adjoint(e)'>Trésorier-Adjoint(e)</option>
                                <option value='Secrétaire-Adjoint(e)'>Secretaire-Adjoint(e)</option>
                                <option value='Membre/Administrateur'>Membre/Administrateur</option>
                            </select>
                            <label className="form__label" htmlFor="exampleFormControlSelect1">Fonction</label>
                        </div>
                        <button className='btn-ajouter-conseil-administration' onClick={() => this.ajouter(choix)}>Ajouter</button>
                    </div>
                </div>
                <div className='col-lg-10 row justify-content-end'>
                    <button onClick={ () => this.props.previous() }>Précédent</button>
                    <button onClick={ this.verify }>Suivant</button>
                </div>
            </div>
        )
    }
}
