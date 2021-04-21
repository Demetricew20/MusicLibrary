import http from './axios'

class MusicLibraryServices {
    getAll() {
        return http.get("/music/");
        }

        get(id) {
        return http.get(`/music/${id}`);
        }

        create(data) {
        return http.post("/music", data);
        }

        update(id, data) {
        return http.put(`/music/${id}`, data);
        }

        delete(id) {
        return http.delete(`/music/${id}`);
        }

        findByTitle(title) {
        return http.get(`/music?title=${title}`);
        }
}

export default new MusicLibraryServices