import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import DashboardFull from './containers/DashboardFull/'
import PriceChecker from './views/PriceChecker/'

ReactDOM.render((
  <Provider>
    <BrowserRouter >
      <Switch>
        <Route path="/dashboard" name="Home" component={DashboardFull}/>
        <Route path="/" name="Home" component={PriceChecker}/>
      </Switch>
    </BrowserRouter >
  </Provider>
), document.getElementById('root'));
