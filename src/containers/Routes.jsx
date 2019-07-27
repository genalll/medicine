import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from '../pages/Auth';
import Admin from '../pages/Admin';
import Doctor from '../pages/Doctor';
import Pacient from '../pages/Pacient';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Auth}/>
      <Route exact path='/admin' component={Admin}/>
      <Route exact path='/doctor' component={Doctor}/>
      <Route exact path='/pacient' component={Pacient}/>
    </Switch>
  </BrowserRouter>
)

export default Routes;