import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom' 
import { remove, update } from '../actions/actionCreators';
import musicLibraryServices from '../services/musicLibraryServices';

const Song = (props) => {
    const initialState = {
        id: null,
        title: '',
        artist: '',
        album: '',
        genre: '',
        releaseDate: null,
    }


    const [currentSong, setCurrentSong] = useState(initialState);
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(false);
    const history = useHistory();

    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentSong({ ...currentSong, [name]: value });
    };

    const getSong = id => {
        musicLibraryServices.getSongById(id)
        .then(response => {
            setCurrentSong(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        getSong(props.id);
    }, [props.id]);

    const updateStatus = status => {
        const data = {
            id: currentSong.id,
            title: currentSong.title,
            artist: currentSong.artist,
            album: currentSong.album,
            genre: currentSong.genre,
            releaseDate: currentSong.releaseDate,
        }

        status = setUpdated

        dispatch(update(currentSong.id, data))
        .then(response => {
            console.log(response);

            setCurrentSong({ ...currentSong});
            setMessage("Updated!")
            setUpdated(true)
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    const updateSong = () => {
        dispatch(update(currentSong.id, currentSong))
        .then(response => {
            console.log(response);
            setMessage('The song was updated successfully')
        })
        .catch(error => {
            console.log(error);
        })
    }

    const removeSong = () => {
        dispatch(remove(currentSong.id))
        .then(response => {
            console.log(response);
            history.push('/music/');
        })
        .catch(error => {
            console.log(error);
        })
    };

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
                    name="title"
                    value={currentSong.title}
                    onChange={handleInputChange}
                />
                </div>
                <div className="form-group">
                <label htmlFor="artist">Artist</label>
                <input
                    type="text"
                    className="form-control"
                    id="artist"
                    name="artist"
                    value={currentSong.artist}
                    onChange={handleInputChange}
                />
                </div>
                <div className="form-group">
                <label htmlFor="album">Album</label>
                <input
                    type="text"
                    className="form-control"
                    id="album"
                    name="album"
                    value={currentSong.album}
                    onChange={handleInputChange}
                />
                </div>
                <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <input
                    type="text"
                    className="form-control"
                    id="genre"
                    name="genre"
                    value={currentSong.genre}
                    onChange={handleInputChange}
                />
                </div>
                <div className="form-group">
                <label htmlFor="release_date">Release Date</label>
                <input
                    type="text"
                    className="form-control"
                    id="release_date"
                    name="release_date"
                    value={currentSong.release_date}
                    onChange={handleInputChange}
                />
                </div>

                <div className="form-group">
                <label>
                    <strong>Status:</strong>
                </label>
                {currentSong.updated ? "Updated" : "Pending"}
                </div>
            </form>

            <button className="badge badge-danger mr-2" onClick={removeSong}>
                Delete
            </button>

            <button
                type="submit"
                className="badge badge-success"
                onClick={updateSong}
            >
                Update
            </button>
            <p>{message}</p>
            </div>
        ) : (
            <div>
            <br />
            <p>Please click on a Song...</p>
            </div>
        )}
        </div>
    );
};

export default Song
