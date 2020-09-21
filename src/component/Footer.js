import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(
            <footer class="page-footer font-small indigo">

            <div class="container">
            <div class="row text-center d-flex justify-content-center pt-5 mb-3">

                  <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                      <a href="#!">Qui sommes-nous</a>
                    </h6>
                  </div>

                  <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                      <a href="#!">Associations</a>
                    </h6>
                  </div>

                  <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                      <a href="#!">FAQ</a>
                    </h6>
                  </div>

                  <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                      <a href="#!">Aide</a>
                    </h6>
                  </div>

                  <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                      <a href="#!">Contact</a>
                    </h6>
                  </div>

                </div>

              </div>

              <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDA Saint-Benoit</a>
              </div>

            </footer>
        )
    }
}