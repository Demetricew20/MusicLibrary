import React, { useState } from 'react';
import './SongForm.css';
const  SongForm = (props) => {

    const state = {
        submitted: false
    }

    
    return (
            <div className="submit-form">
            {props.type === state.submitted ? (
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
                    placeholder={props.title}
                    required
                    value={props.title}
                    onChange={props.handleChangeTitle}
                    name="title"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="artist">Artist</label>
                    <input
                    type="text"
                    className="form-control"
                    id="artist"
                    placeholder={props.artist}
                    required
                    value={props.artist}
                    onChange={props.handleChangeArtist}
                    name="artist"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="album">Album</label>
                    <input
                    type="text"
                    className="form-control"
                    id="album"
                    placeholder={props.album}
                    required
                    value={props.album}
                    onChange={props.handleChangeAlbum}
                    name="album"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <input
                    type="text"
                    className="form-control"
                    id="genre"
                    placeholder={props.genre}
                    required
                    value={props.genre}
                    onChange={props.handleChangeGenre}
                    name="genre"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="release_date">Release Date</label>
                    <input
                    type="date"
                    className="form-control"
                    id="release_date"
                    placeholder={props.releaseDate}
                    required
                    value={props.releaseDate}
                    onChange={props.handleChangeReleaseDate}
                    name="release_date"
                    />
                </div>

                <button onClick={props.saveAction} className="btn btn-success">
                    Submit
                    {state.submitted = true}
                </button>
                </div>
            )}
            </div>
            );
};

export default SongForm;