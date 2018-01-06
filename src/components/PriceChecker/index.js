import React, { Component } from 'react'
import RocketLeagueItem from '../RocketLeagueItem'
import base from '../../lib/rebase.js'

class PriceChecker extends Component {
    
    constructor(){
        super()
        this.state = {
            loading: true,
            rarity: 'Rare',
            type: 'Topper',
            platform: 'pc'
        }
    }

    componentWillMount() {
        base.bindCollection('rocket-league-items', {
          context: this,
          state: 'items',
          withRefs: false,
          withIds: true,
          then() {
           this.filterItems(this.props.platform)
           this.setState(state => ({
             ...state,
             loading: false
           }))
          },
          onFailure(err) {
            //handle error
          }
      });
    }

    componentWillReceiveProps(nextProps){
        this.filterItems(nextProps.platform, nextProps.search);
    }

    filterItems(platform,search){
        let filterdItems = this.state.items.map((item)=>{
            let simpleItem = {
              name: item.name, 
              img: item.img,
              rarity: item.rarity,
              type: item.type,
            }
            switch(platform){
                case "pc":
                  simpleItem.price = item.pcPrice
                break;
                case "ps4":
                  simpleItem.price = item.ps4Price
                break;
                case "xbox":
                  simpleItem.price = item.xboxPrice
                break;
            }
            return simpleItem
          }); 
        
        if(search != null){
            console.log(search)
            filterdItems = filterdItems.filter((item) => {
                if (item.name.toLowerCase().includes(search.toLowerCase())) {
                    return true;
                }
                    return false;
            })
        }
        
       this.setState(state => ({
         ...state,
         filterdItems: filterdItems
       }))
    }
    
    render () {
        let platform = this.state.platform

        if(this.state.loading){
            return (
                <div style={{color: "white"}}>Price Checker Loading...</div>
            );
        }else{
            return (
                <div>
                    {this.state.filterdItems.map((item)=> <RocketLeagueItem item={item} platform={platform}/> )}
                </div>
            )
        }        
    }
}

export default PriceChecker