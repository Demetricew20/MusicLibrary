import axios from 'axios';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';


function AddSong() {

    // Add Dispatch & Reducer

    const initialState = {
        id: null,
        title: '',
        artist: '',
        album: '',
        genre: '',
        release_date: null
    }

    const [song, setSong] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch()

    const handleInputChange = event => {
        const {name, value} = event.target;
        setSong({ ...song, [name]: value});
    };

    const addSong = (title, artist, album, genre, release_date) => async (dispatch) => {

        

        try {
            const response = axios.post('http://127.0.0.1:8000', ({title, artist, album, genre, release_date}));
            this.setState({
                songs: response.data
            });

            return Promise.resolve(response.data);
        }catch (error) {
            return Promise.reject(error)
        }
    }

    const saveSong = () => {
        const {title, artist, album, genre, release_date} = song;

        dispatch(addSong(title, artist, album, genre, release_date))
        .then(data => {
            setSong({
                id: data.id,
                title: data.title,
                artist: data.artist,
                album: data.album,
                genre: data.genre,
                release_date: data.release_date,
            });
            setSubmitted(true);

            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const resetState = () => {
        setSong(initialState);
        setSubmitted(false);
    }

    return (
        <div className="submit-form">
        {submitted ? (
            <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={resetState}>
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
                <label htmlFor="release_date">Release Date</label>
                <input
                type="date"
                className="form-control"
                id="release_date"
                required
                value={song.release_date}
                onChange={handleInputChange}
                name="release_date"
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



export default AddSong
