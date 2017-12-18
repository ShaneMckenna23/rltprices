import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from "./components/Home";
import Prices from './components/Prices'
import AddItem from './components/AddItem'

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/prices" component={Prices}/>
      <Route path="/addItem" component={AddItem}/>
    </Switch>
  </Router>
);

// export
export { router };


