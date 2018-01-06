import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from "react-redux";
import  store  from "./store.js";
import './index.css'

import Home from "./components/Home";
import Prices from './components/Prices'
import AddItem from './components/AddItem'
import NavBar from './components/NavBar'



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/prices" component={Prices}/>
          <Route path="/addItem" component={AddItem}/>
          <Route path="/giveaway" component={Home} />
        </Switch>
      </div>
    </Router> 
  </Provider>,
  document.getElementById('root')
);
