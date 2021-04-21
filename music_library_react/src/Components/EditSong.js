import React, { Component } from 'react';
import MusicLibraryServices from '../Services/requests'

export default class EditSong extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onChangeAlbum= this.onChangeAlbum.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
        this.getSong = this.getSong.bind(this);
        this.updateSong = this.updateSong.bind(this);
        this.deleteSong = this.deleteSong.bind(this);

        this.state = {
            currentSong: {
                id: null,
                title: '',
                artist: '',
                album: '',
                genre: '',
                release_date: '',
                submitted: false
            },
            message: ''
        };
    }

    componentDidMount() {
        this.getSong(this.props.match.params.id);
    }

    onChangeTitle(event) {
        const title = event.target.value;

        this.setState(function(previousState) {
            return {
                currentSong: {
                    ...previousState.currentSong,
                    title: title
                }
            };
        });
    }

    onChangeArtist(event) {
        const artist = event.target.value;

        this.setState(function(previousState) {
            return {
                currentSong: {
                    ...previousState.currentSong,
                    artist: artist
                }
            };
        });
    }

    onChangeAlbum(event) {
        const album = event.target.value;

        this.setState(function(previousState) {
            return {
                currentSong: {
                    ...previousState.currentSong,
                    album: album
                }
            };
        });
    }

    onChangeGenre(event) {
        const genre = event.target.value;

        this.setState(function(previousState) {
            return {
                currentSong: {
                    ...previousState.currentSong,
                    genre: genre
                }
            };
        });
    }

    onChangeReleaseDate(event) {
        const release_date = event.target.value;

        this.setState(function(previousState) {
            return {
                currentSong: {
                    ...previousState.currentSong,
                    release_date: release_date
                }
            };
        });
    }

    getSong(id) {
        MusicLibraryServices.get(id)
        .then(response => {
            this.setState({
                currentSong: response.data
            });
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.response.data);
        })
    }

    updateSong() {
        MusicLibraryServices.update(
            this.state.currentSong.id,
            this.state.currentSong
        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: 'Update!'
            })
        })
        .catch(error => {
            console.log(error.response.data);
        })
    }

    deleteSong(id){
        MusicLibraryServices.delete(this.state.currentSong.id)
        .then(response => {
            console.log(response.data);
            this.props.history.push('/')
        })
        .catch(error => {
            console.log(error.response.data);
        })
    }

    render() {
        const { currentSong } = this.state;
    
        return (
                <div>
                {currentSong ? (
                    <div className="edit-form">
                    <h4>Song</h4>
                    <form>
                        <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={currentSong.title}
                            onChange={this.onChangeTitle}
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="artist">Artist</label>
                        <input
                            type="text"
                            className="form-control"
                            id="artist"
                            value={currentSong.artist}
                            onChange={this.onChangeDescription}
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="album">Album</label>
                        <input
                            type="text"
                            className="form-control"
                            id="album"
                            value={currentSong.album}
                            onChange={this.onChangeAlbum}
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="genre">Genre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="genre"
                            value={currentSong.genre}
                            onChange={this.onChangeGenre}
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="release_date">Release Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="release_date"
                            value={currentSong.release_date}
                            onChange={this.onChangeReleaseDate}
                        />
                        </div>
                    </form> (
                    <button
                        className="badge badge-danger mr-2"
                        onClick={this.deleteSong}
                    >
                        Delete
                    </button>

                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={this.updateSong}
                    >
                        Update
                    </button>
                    <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                    <br />
                    <p>Please click on a Song...</p>
                    </div>
                )}
                </div>
            );
            }


}
