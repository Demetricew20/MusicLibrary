import React, { Component } from "react";
import MusicLibraryServices from "../Services/requests";
import { Link } from 'react-router-dom';

export default class EditSong extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeArtist = this.onChangeArtist.bind(this);
    this.onChangeAlbum = this.onChangeAlbum.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
    this.getSong = this.getSong.bind(this);
    this.updated = this.updated.bind(this);
    this.updateSong = this.updateSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);

    this.state = {
      currentSong: {
        id: null,
        title: "",
        artist: '',
        album: '',
        genre: '',
        releaseDate: null,
        updated: false
      },
      message: ""
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.getSong(this.props.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentSong: {
          ...prevState.currentSong,
          title: title
        }
      };
    });
  }

  onChangeArtist(e) {
    const artist = e.target.value;
    
    this.setState(prevState => ({
      currentSong: {
        ...prevState.currentSong,
        artist: artist
      }
    }));
  }

  onChangeAlbum(e) {
    const album = e.target.value;
    
    this.setState(prevState => ({
      currentSong: {
        ...prevState.currentSong,
        album: album
      }
    }));
  }

  onChangeGenre(e) {
    const genre = e.target.value;
    
    this.setState(prevState => ({
      currentSong: {
        ...prevState.currentSong,
        genre: genre
      }
    }));
  }

  onChangeReleaseDate(e) {
    const releaseDate = e.target.value;
    
    this.setState(prevState => ({
      currentSong: {
        ...prevState.currentSong,
        releaseDate: releaseDate
      }
    }));
  }

  getSong(id) {
    console.log(this.props);
    MusicLibraryServices.get(id)
      .then(response => {
        this.setState({
          currentSong: response.data
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  updated(status) {
    var data = {
      id: this.state.currentSong.id,
      title: this.state.currentSong.title,
      artist: this.state.currentSong.artist,
      album: this.state.currentSong.album,
      genre: this.state.currentSong.genre,
      releaseDate: this.state.currentSong.releaseDate,
      updated: status
    };

    MusicLibraryServices.update(this.state.currentSong.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentSong: {
            ...prevState.currentSong,
            updated: status
          }
        }));
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateSong() {
    MusicLibraryServices.update(
      this.state.currentSong.id,
      this.state.currentSong
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The song was updated successfully!"
        });
        
        this.refreshLibrary();
        
      })
      .catch(error => {
        console.log(error);
      });
  }

  refreshLibrary = () => {
    window.location.reload();
  }

  deleteSong() {    
    MusicLibraryServices.delete(this.state.currentSong.id)
      .then(response => {
        console.log(response.data);
        this.refreshLibrary();
      })
      .catch(error => {
        console.log(error);
      });
  }


    render() {
        const { currentSong } = this.state;

        return (
            <div>
            {currentSong ? (
                <div className="edit-form">
                
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
                        onChange={this.onChangeArtist}
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
                </form>

                <button
                    className="badge badge-danger mr-2"
                    onClick={this.deleteSong}
                >
                    <Link to='/library' />Delete
                </button>

                <button
                    type="submit"
                    className="badge badge-success"
                    onClick={this.updateSong}
                > <Link to='/library'/> Update
                </button>
                <p>{this.state.message}</p>
                </div>
            ) : (
                <div>
                <br />
                <p></p>
                </div>
            )}
            </div>
        );
        }

}
