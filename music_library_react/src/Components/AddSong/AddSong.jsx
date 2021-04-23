import React, {Component} from 'react';
import MusicLibraryServices from '../../Services/requests'


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
            <div className="submit-form">
              {this.state.submitted ? (
                <div>
                  <h4> {`'${this.state.title}'`} added to your library!</h4>
                  <button className="btn btn-success" onClick={this.newSong}>
                    Add
                  </button>
                </div>
              ) : (
                <div>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      required
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      name="title"
                    />
                  </div>
      
                  <div className="form-group">
                    <label htmlFor="artist">Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      id="artist"
                      required
                      value={this.state.artist}
                      onChange={this.onChangeArtist}
                      name="artist"
                    />

                  </div>
                  <div className="form-group">
                    <label htmlFor="album">Album</label>
                    <input
                      type="text"
                      className="form-control"
                      id="album"
                      required
                      value={this.state.album}
                      onChange={this.onChangeAlbum}
                      name="album"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="genre"
                      required
                      value={this.state.genre}
                      onChange={this.onChangeGenre}
                      name="genre"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="release_date">Release Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="release_date"
                      required
                      value={this.state.release_date}
                      onChange={this.onChangeReleaseDate}
                      name="release_date"
                    />
                  </div>
      
                  <button onClick={this.saveSong} className="btn btn-success">
                    Submit
                  </button>
                </div>
              )}
            </div>
          );
    }
};

