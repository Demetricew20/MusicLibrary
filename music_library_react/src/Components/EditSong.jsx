import React, { useState, useEffect } from 'react';
import MusicLibraryServices from '../Services/requests';
import axios from '../Services/axios';
import SongForm from './SongForm';

const EditSong = props => {
    const initialState = {
        id: null,
        title: '',
        artist: '',
        album:  '',
        genre: '',
        releaseDate: '',
    };

    const [currentSong, setCurrentSong] = useState(initialState);
    
    const getSong = id => {
        MusicLibraryServices.get(id)
        .then(response => {
            setCurrentSong(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    };

    useEffect(() => {
        if (this.props.match && this.props.match.params.id) {
            const songId = this.props.match.params.id
              axios.get(`http://127.0.0.1:8000/api/${songId}`)
              .then(response => {
                currentSong(response.data);
                console.log(response.data);
              })
              .catch(error => {
                  console.log(error);
              }) 
            }
    })

    const handleInputChange = event => {
        const {name, value} = event.target;
        setCurrentSong({...currentSong, [name]: value})
    }

    return (
        <SongForm/>
    )

}

export default EditSong;