import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'





const zeroFill  = n => {
    return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
    // Pega o horário atual
    const now = new Date();

    // Formata a data conforme dd/mm/aaaa hh:ii:ss
    const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    // Exibe na tela usando a div#data-hora
    document.getElementById('data-hora').innerHTML = dataHora;
}, 1000);






//html
const Footer = () => <footer role="contentinfo">



<div class="container" id="cont1">
        <nav class="row">

          <div class="col-xs-12 col-md-2">
            <div class="footer-logo">
              <Link to="/">Spotify</Link>
            </div>
          </div>

         

         

          <div class="col-xs-12 col-md-4 col-social">
            <ul class="nav">
              <li>
              <div id="data-hora"></div>
              </li>
              <li>
              <span role="img"  aria-label="Instagram" > <FontAwesomeIcon icon="coffee"/></span>
              </li>
              
              
                
              
            </ul>
          </div>
          <div class="col-xs-4 col-md-6 text-right">
           

            <small class="copyright">© 2017 Spotify AB</small>
          </div>
        </nav>

       
      </div>



    </footer>

    export default Footer;