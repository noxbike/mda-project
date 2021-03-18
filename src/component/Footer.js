import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/footer.css';

export default class Footer extends Component{
    render(){
        return(
            <footer className="page-footer font-small indigo bt-0">

            <div className="container">
            <div className="row text-center d-flex justify-content-center pt-5 mb-3">

                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <Link to='/qui-somme-nous'>Qui sommes-nous</Link>
                    </h6>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <Link to='/faq'>FAQ</Link>
                    </h6>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <a href="#!">Mentions légales</a>
                    </h6>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <Link to='/contact'>Contact</Link>
                    </h6>
                  </div>

                </div>

              </div>

              <div className="footer-copyright text-center py-3">
                <a href="https://mdbootstrap.com/"> MDA Saint-Benoit | 6 rue Le Corbusier - Bras-Fusil - BP102 97470 Saint-Benoît | 02 62 41 34 04</a>
              </div>

            </footer>
        )
    }
}