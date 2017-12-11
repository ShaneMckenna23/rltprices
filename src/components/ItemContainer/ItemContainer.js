import React from 'react'
import {TransitionMotion, spring, presets} from 'react-motion';
import RocketLeagueItem from '../RocketLeagueItem/RocketLeagueItem'
import {ListGroup} from 'react-bootstrap'

class ItemContainer extends React.Component {

    getDefaultStyles = () => {
        return this.props.itemData.map(item => ({...item, style: {opacity: 1}}));
    };

    getStyles = () => {
        const {itemData} = this.props

        return itemData.map((itemData, i) => {
        return {
            ...itemData,
            style: {
            }
        };
        });
    };

    willEnter() {
        return {
        };
    };

    willLeave() {
        return {
        };
    };

    render() {
        return (
            <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            styles={this.getStyles()}
            willLeave={this.willLeave}
            willEnter={this.willEnter}>
            {styles =>
               <div className="item-container">
                {styles.map(({key, style, data}) =>
                  <RocketLeagueItem key={key} style={style} item={data}/>
                )}
                </div> 
            }
          </TransitionMotion>
            
        );
    }
}

export default ItemContainer