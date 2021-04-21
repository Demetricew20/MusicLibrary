import http from './axios'

class MusicLibraryServices {
    getAll() {
        return http.get("/");
        }

        get(id) {
        return http.get(`/song/${id}`);
        }

        create(data) {
        return http.post("/", data);
        }

        update(id, data) {
        return http.put(`/song/${id}`, data);
        }

        delete(id) {
        return http.delete(`/song/${id}`);
        }

        findByTitle(title) {
        return http.get(`/?title=${title}`);
        }
}

export default new MusicLibraryServices();