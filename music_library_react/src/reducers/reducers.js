import {
    ADD_NEW_SONG,
    RETRIEVE_SONGS,
    UPDATE_SONG,
    DELETE_SONG,
    GET_SONG_BY_TITLE,
} from "../actions/actionTypes";

const initialState = [];

function musicLibraryReducer(songs = initialState, action) {
const { type, payload } = action;

    switch (type) {

    case ADD_NEW_SONG:
        return [...songs, payload];

    case RETRIEVE_SONGS:
        return payload;

    case UPDATE_SONG:
        return songs.map((song) => {
            if (song.id === payload.id) {
            return {
                ...song,
                ...payload,
            };
            } else {
            return song;
            }
        });

    case DELETE_SONG:
        return songs.filter(({ id }) => id !== payload.id);

    case GET_SONG_BY_TITLE:
        return songs.filter(({ title }) => title === payload.title);

    default:
        return songs;
    }
    };

    export default musicLibraryReducer;