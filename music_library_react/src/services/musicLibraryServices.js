import http from "../services/axios";

const getAllSongs = () => {
    return http.get("/music");
};

const getSongById = id => {
    return http.get(`/music/${id}`);
};

const addNewSong = data => {
    return http.post("/music", data);
};

const update = (id, data) => {
    return http.put(`/music/${id}`, data);
};

const remove = id => {
    return http.delete(`/music/${id}`);
};

const getSongByTitle = title => {
    return http.get(`/music?title=${title}`);
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