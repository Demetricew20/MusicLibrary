import React from 'react';
import { Component } from 'react';
import MusicLibraryServices from '../Services/requests'

export default class DeleteSong extends Component {

    deleteSong = async(id) => {  
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
            <button className='btn btn-danger' onClick={() => this.deleteSong(this.props.id)}>Delete</button>
        )
    }
}
