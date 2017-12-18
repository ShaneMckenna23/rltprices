import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class NavBar extends Component {
    render () {
        return (
            <nav className="navbar navbar-toggleable-md">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="nav-item nav-link" to="/">RLTPrices</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/prices">Price Checker</Link>
                        <Link className="nav-item nav-link" to="/addItem">Add Item</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar