import React, { Component } from 'react'
import {FormControl,Button} from 'react-bootstrap'
import firebase from 'firebase';
import base from '../../rebase'

class AddItem extends Component {

    constructor(){
        super()
        this.state = {
            item:{}
        }
    }

    addItem = () => {
        base.addToCollection('rocket-league-items', this.state.item)
        .then(() => {
          
        }).catch(err => {

      });
    }

    onChange = (e)=> {
        let newItem = this.state.item
        newItem[e.target.id] = e.target.value
        this.setState(state=>({
            ...state,
            item: newItem
        }))
    }

    uploadImage = (e) =>{
        e.preventDefault();
        
        let file = e.target.files[0];
        let fileName = file.name;
        
        var storageRef = firebase.storage().ref();
        var itemRef = storageRef.child('rocket-league-items/'+fileName);

        let _this = this;
        itemRef.put(file).then(function(snapshot) { 
            let newItem = _this.state.item
            newItem.img = snapshot.downloadURL
            _this.setState(state=>({
                ...state,
                item: newItem
            }))
        });
        console.log("File Uploaded")
    }

    render () {
        return (
            <div className="container-fluid">
                <div className="offset-md-1 col-md-10">
                    <div style={{backgroundColor: "white", marginTop: "200px"}}>
                        <h2>Add Items v1</h2>
                        <FormControl id="name" onChange={this.onChange} placeholder="Item Name"/>
                        <FormControl id="type" onChange={this.onChange} placeholder="Item Type"/>
                        <FormControl id="rarity" onChange={this.onChange} placeholder="Item Rarity"/>

                        <FormControl id="pcPrice" onChange={this.onChange} placeholder="pcPrice"/>
                        <FormControl id="ps4Price" onChange={this.onChange} placeholder="ps4Price"/>
                        <FormControl id="xboxPrice" onChange={this.onChange} placeholder="xboxPrice"/>

                        <input type="file" onChange={this.uploadImage}></input>

                        <Button onClick={this.addItem}>Add Item</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddItem