import React, { Component } from 'react'

class RocketLeagueItem extends Component {
    render () {
        const {name, price, img} = this.props.item
        
        let style = this.props.style

        return (
            <div className="rocket-league-item" style={style}>
                <img src={img} />
                <div>{name}</div>
                <div>{price}</div>                
            </div>
        )
    }
}

export default RocketLeagueItem

