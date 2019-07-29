import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Pacient from '../pages/Pacient';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Pacient}/>
    </Switch>
  </BrowserRouter>
)

export default Routes;