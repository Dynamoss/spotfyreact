import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// arrumar  o  href  para  ficar  spa  
const Header = () => <header> 
    
    <nav class="navbar navbar-expand-sm">
    <div class="container">
<div class="navbar-header">
<Link to="/">
            <span class="navbar-logo">Spotify</span>
          </Link>
    </div>
  <ul class="navbar-nav navbar-right">
    <li class="nav-item">
      <Link class="nav-link"to="#">Premium</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/faq">Ajuda</Link>
    </li>
    
    <li class="nav-item">
      <Link class="nav-link"to="#">Baixar</Link>
    </li>

    <li role="separator" class="divider">
      
    </li>

    <li class="nav-item">
      <Link class="nav-link" to="#" id="header-sign-up">Inscrever-se</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="#" id="header-login-link">Entrar</Link>
    </li>
  </ul>

  </div>
</nav>


</header>

export default Header;