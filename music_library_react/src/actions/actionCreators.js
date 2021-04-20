import {ADD_NEW_SONG, RETRIEVE_SONGS,UPDATE_SONG, DELETE_SONG, GET_SONG_BY_TITLE} from "./actionTypes";
import MusicLibraryService from "../services/musicLibraryServices";


export const newSong = (title, artist, album, genre, releaseDate) => async (dispatch) => {
    try {
        const response = await MusicLibraryService.addNewSong({ title, artist, album, genre, releaseDate });

        dispatch({
            type: ADD_NEW_SONG,
            payload: response.data,
        });

        return Promise.resolve(response.data);
    } catch (error) {
        console.log(error.response.data)
        return Promise.reject(error);
    }
};

export const retrieveSongs = () => async (dispatch) => {
    try {
        const response = await MusicLibraryService.getAllSongs();

        dispatch({
        type: RETRIEVE_SONGS,
        payload: response.data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const update = (id, data) => async (dispatch) => {
    try {
        const response = await MusicLibraryService.update(id, data);

        dispatch({
        type: UPDATE_SONG,
        payload: data,
        });

        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const remove = (id) => async (dispatch) => {
    try {
        await MusicLibraryService.remove(id);

        dispatch({
        type: DELETE_SONG,
        payload: { id },
        });
    } catch (error) {
        console.log(error);
    }
};

export const searchByTitle = (title) => async (dispatch) => {
    try {
        const response = await MusicLibraryService.getSongByTitle(title);

        dispatch({
        type: GET_SONG_BY_TITLE,
        payload: response.data,
        });
    } catch (error) {
        console.log(error);
    }
};