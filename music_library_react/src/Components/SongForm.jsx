import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SongForm extends Component {
    constructor(props) {
        super(props);
        //Add onChange Values

        this.state = {
            submitted: false
        }

    }

    render() {
        return (
            <div className="submit-form">
            {this.state.submitted ? (
                <div>
                <h4>Success!</h4>
                <button className="btn btn-success" onClick={this.newSong}>
                    Add Song
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
                    {this.submitted = true}
                </button>
                </div>
            )}
            </div>
            );
            };
}
export default SongForm;