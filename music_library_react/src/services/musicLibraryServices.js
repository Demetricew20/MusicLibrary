import axios from "../services/axios";

const getAllSongs = () => {
    return axios.get("/music");
};

const getSongById = id => {
    return axios.get(`/music/${id}`);
};

const addNewSong = data => {
    return axios.post("/music", data);
};

const update = (id, data) => {
    return axios.put(`/music/${id}`, data);
};

const remove = id => {
    return axios.delete(`/music/${id}`);
};

const getSongByTitle = title => {
    return axios.get(`/music?title=${title}`);
};

const MusicLibraryService = {
    getAllSongs,
    getSongById,
    addNewSong,
    update,
    remove,
    getSongByTitle
};

export default MusicLibraryService;