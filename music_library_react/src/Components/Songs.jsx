import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import MusicLibraryServices from '../Services/requests'

const Song = (props) => {

    
    let editing = false;

    function editTrue() {
        
        editing = true;
        return editing, console.log(editing);
    }

    function editFalse() {
        editing = false;
        return editing, console.log(editing);
    }

    /// Fix errors --- Try using function for table with conditional boolean statements ^^^^^

    if (editing) {
        return (
            <tbody>
                <tr className='table__row' id='table_row' name='table_row'>
                    <td contentEditable='true'>{props.song.title}</td>
                    <td contentEditable='true'>{props.song.artist}</td>
                    <td contentEditable='true'>{props.song.album}</td>
                    <td contentEditable='true'>{props.song.genre}</td>
                    <td contentEditable='true'>{props.song.release_date}</td>
                    <td>
                    {/* Hand Save */}
                    <button onClick={() => editFalse()}>Save</button>
                    </td>
                    <td><button onClick={props.deleteSong}>Delete</button></td>
                </tr>
            </tbody>
        )

        }
    if (!editing) {
        return (
        <tbody>
            <tr className='table__row' id='table_row' name='table_row'>
                <td>{props.song.title}</td>
                <td>{props.song.artist}</td>
                <td>{props.song.album}</td>
                <td>{props.song.genre}</td>
                <td>{props.song.release_date}</td>
                <td>
                {/* Hand Edit */}
                <form action='/library'>
                <button onClick={() => editTrue()}>Edit</button>
                </form>
                
                </td>
                <td><button onClick={props.deleteSong}>Delete</button></td>
            </tr>
        </tbody>
        )
    }

}

export default Song;