import React, {Component} from 'react';
import MusicLibraryServices from '../Services/requests'
import SongForm from './SongForm';


export default class AddSong extends Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onChangeAlbum= this.onChangeAlbum.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
        this.saveSong = this.saveSong.bind(this);
        this.newSong = this.newSong.bind(this);

        this.state = {
            id: null,
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
            submitted: false
        };
    }

    //Detects changes 

    onChangeTitle(event) {
        this.setState({
            title: event.target.value
        });
    }
    onChangeArtist(event) {
        this.setState({
            artist: event.target.value
        });
    }
    onChangeAlbum(event) {
        this.setState({
            album: event.target.value
        });
    }
    onChangeGenre(event) {
        this.setState({
            genre: event.target.value
        });
    }
    onChangeReleaseDate(event) {
        this.setState({
            release_date: event.target.value
        });
    }

    saveSong() {
        const data = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            genre: this.state.genre,
            release_date: this.state.release_date,
        };

        MusicLibraryServices.create(data)
        .then(response => {
            this.setState({
                id: response.data.id,
                title: response.data.title,
                artist: response.data.artist,
                album: response.data.album,
                genre: response.data.genre,
                release_date: response.data.release_date,

                submitted: true
            });
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.response.data);
        });
    }

    newSong() {
        this.setState({
            id: null,
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
            submitted: false
        })
    }

    
    render() {
        return (
            <SongForm/>

        )
    }
};

