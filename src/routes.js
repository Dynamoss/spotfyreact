import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Faq from './pages/Faq';


//arrumar a  pagina 404

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/faq' component={Faq} />
        <Route component={Pagina404} />
    </Switch>
    </BrowserRouter>
);

const Pagina404 = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
       <h1> 404 </h1>
      <h1>Ops, quebrou tudo :O</h1>
     </div>
)

export default Routes;