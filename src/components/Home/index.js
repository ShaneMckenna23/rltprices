import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render () {
        return (
            <div>
                <h1>Welcome to HomePage</h1>
                <div>
                    <Link to="/prices">Prices</Link>
                </div>
                <div>
                    <Link to="/addItem">Add Item</Link>
                </div>
            </div>
        )
    }
}

export default Home