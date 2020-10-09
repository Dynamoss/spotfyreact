import React from 'react';
import './styles.css';


const Header = () => <header> 
    
    <nav class="navbar navbar-expand-sm">
    <div class="container">
<div class="navbar-header">
<a href="/">
            <span class="navbar-logo">Spotify</span>
          </a>
    </div>
  <ul class="navbar-nav navbar-right">
    <li class="nav-item">
      <a class="nav-link" href="#">Premium</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/faq">Ajuda</a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link" href="#">Baixar</a>
    </li>

    <li role="separator" class="divider">
      
    </li>

    <li class="nav-item">
      <a class="nav-link" href="#" id="header-sign-up">Inscrever-se</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" id="header-login-link">Entrar</a>
    </li>
  </ul>

  </div>
</nav>


</header>

export default Header;