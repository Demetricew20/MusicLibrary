import React from 'react';
import ModalForm from './Modal.js';
import AddSong from './AddSong';

const SongTable = (props) => {

    return (
        <div>
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
            <div>
            <ModalForm action='Add New Song' title='Add Song' content={<AddSong/>}/>
                
            </div>
        </div>
    );
}

export default SongTable;
