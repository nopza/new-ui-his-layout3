import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../Page/Register/Register';
import login from '../Login/login';
import location from '../Login/location';
import SendPatient from '../Page/Sendpatient/SendPatient';
import Examination from '../Page/OPD/Examination';
import Home from '../Page/Home';



class Routing extends Component {

  render() { 
    return (
        <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/location" component={location} />
            <Route exact path="/home" component={Home} /> 
            <Route exact path="/register" component={Register} />
            <Route exact path="/sendpatient" component={SendPatient} />
            <Route exact path="/examination" component={Examination} />

        </Switch>

    );
  }
}

export default Routing;
