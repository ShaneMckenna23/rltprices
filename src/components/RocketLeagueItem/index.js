import React, { PureComponent } from 'react'
import './index.css'

class RocketLeagueItem extends PureComponent {

    render () {
        const {name, price, img} = this.props.item
        
        return (
            <div className="rocket-league-item">
                <img src={img} alt=""/>
                <div>{name}</div>
                <div>{price}</div>                
            </div>
        )
    }
}

export default RocketLeagueItem

