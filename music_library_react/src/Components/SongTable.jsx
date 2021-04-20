import React from 'react'

const SongTable = (props) => {
    return (
        <table className="table table-dark table-sm table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            {props.mapSongs()}
        </table>
    );
}

export default SongTable;