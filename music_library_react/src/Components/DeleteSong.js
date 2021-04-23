import React from 'react';
import { Component } from 'react';
import MusicLibraryServices from '../Services/requests'

export default class DeleteSong extends Component {

    deleteSong = async(id) => {  
        debugger;  
        try {
            await MusicLibraryServices.delete(id);
            window.location.reload();
        }
        catch(error) {
            console.log(error);
        }
    }


    render(){
        return (
            <button onClick={() => this.deleteSong(this.props.id)}>Delete</button>
        )
    }
}
