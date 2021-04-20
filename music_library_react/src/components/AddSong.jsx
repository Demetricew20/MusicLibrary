import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newSong } from "../actions/actionCreators";

const AddSong = () => {
    const initialState = {

        id: null,
        title: '',
        artist: '',
        album: '',
        genre: '',
        releaseDate: null,
        
    };
    const [song, setSong] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setSong({ ...song, [name]: value });
    };

    const saveSong = () => {
        const { title, artist, album, genre, releaseDate } = song;

        dispatch(newSong(title, artist, album, genre, releaseDate))
            .then(data => {
            setSong({
                id: data.id,
                title: data.title,
                artist: data.artist,
                album: data.album,
                genre: data.genre,
                releaseDate: data.releaseDate,
            });
            setSubmitted(true);

            console.log(data);
            })
            .catch(error => {
            console.log(error);
            });
    };

    const addNewSong = () => {
        setSong(initialState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
            <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={addNewSong}>
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
                    value={song.title}
                    onChange={handleInputChange}
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
                    value={song.artist}
                    onChange={handleInputChange}
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
                    value={song.album}
                    onChange={handleInputChange}
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
                    value={song.genre}
                    onChange={handleInputChange}
                    name="genre"
                />
                </div>

                <div className="form-group">
                <label htmlFor="releaseDate">Release Date</label>
                <input
                    type="text"
                    className="form-control"
                    id="releaseDate"
                    required
                    value={song.releaseDate}
                    onChange={handleInputChange}
                    name="releaseDate"
                />
                </div>

                <button onClick={saveSong} className="btn btn-success">
                Submit
                </button>
            </div>
            )}
        </div>
    );
};

    export default AddSong;