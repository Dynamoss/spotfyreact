import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './components/Mid';
import Faq from './components/Mid2';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route path='/' exact={true} component={Main} />
        <Route path='/faq' component={Faq} />
    </Switch>
    </BrowserRouter>
);

export default Routes;