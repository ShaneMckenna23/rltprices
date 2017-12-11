import React, { Component } from 'react';
import ItemContainer from '../../components/ItemContainer/ItemContainer.js'
import itemData from '../../itemData.json';
import {FormControl} from 'react-bootstrap'

const filterItems = (searchText) => {
  return itemData.filter((item) => {
    if (item.data.name.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  })
}

class PriceChecker extends Component {

  constructor(){
    super();
    this.state = {
        filteredItems: filterItems('')
    }
  }

  onSearch = (event) => {
    this.setState({
        filteredItems: filterItems(event.target.value)
    });
  }

  render() {
    const noItems = <div className="no-items">No items available</div>
    return (
      <div className="container-fluid">
        <div className="offset-md-1 col-md-10">
          <div className="notification-alert">
            Hey there, don't forget to join our <b><a style={{"color": "white"}} href="https://discord.gg/gNBD8h8" target="_blank">Discord server</a></b>. Click <b><a style={{"color": "white"}} href="https://discord.gg/gNBD8h8" target="_blank">HERE</a></b> to join.
          </div>
          <div className="top-head-box" style={{"display": "block", "height" : "auto"}}>
            <img className="head-logo-image" src="images/long-logo.png" width="20%;"/>
          </div>
          <div className="price-box">
            <h2>PC Price List</h2>
            <div className="search-box">
              Type "Item Name" to search
              <div>
                <FormControl onChange={this.onSearch} placeholder="Item Name"/>
              </div>
            </div>
            {this.state.filteredItems.length > 0 ?
              <ItemContainer itemData={this.state.filteredItems}/> : noItems
            }
          </div>
        </div>
      </div>
    );
  }
}

export default PriceChecker;
