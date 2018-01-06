import React, { Component } from 'react';
import './index.css';
import PriceChecker from '../PriceChecker'
import {FormControl, Button} from 'react-bootstrap'

class Prices extends Component {

  constructor(){
    super();
    this.state = {
        platform: 'pc',
        search: ""
    }
  }

  onSearch = (event) => {
    let search = event.target.value
    this.setState(state =>({
        ...state,
        search: search
    }))
  }

  changePlatformXbox = ()=>{
    this.setState(state => ({
        ...state,
        platform: 'xbox'
      }))
  }

  changePlatformPC = ()=>{
    this.setState(state => ({
        ...state,
        platform: 'pc'
      }))
  }

  changePlatformPS4 = ()=>{
    this.setState(state => ({
        ...state,
        platform: 'ps4'
      }))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-offset-1 col-md-10">
          <div className="notification-alert">
            Hey there, don't forget to join our <b><a style={{"color": "white"}} href="https://discord.gg/gNBD8h8" >Discord server</a></b>. Click <b><a style={{"color": "white"}} href="https://discord.gg/gNBD8h8">HERE</a></b> to join.
          </div>
          <div className="top-head-box" style={{"display": "block", "height" : "auto"}}>
            <img className="head-logo-image" src="/images/long-logo.png" width="20%;" alt="logo"/>
          </div>
          <div className="price-box">
            <h2>{this.state.platform.toLocaleUpperCase()} Price List</h2>
            <Button onClick={this.changePlatformPC}>PC</Button>
            <Button onClick={this.changePlatformPS4}>PS4</Button>
            <Button onClick={this.changePlatformXbox}>Xbox</Button>
            <div className="search-box">
              Type "Item Name" to search
              <div>
                <FormControl onChange={this.onSearch} placeholder="Item Name"/>
              </div>
            </div>
              <PriceChecker platform={this.state.platform} search={this.state.search}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Prices;
