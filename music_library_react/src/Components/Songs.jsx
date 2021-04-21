import React from 'react';
import { Link } from 'react-router-dom'
import MusicLibraryServices from '../Services/requests'

const Song = (props) => {



    return (
        <tbody>
            <tr onClick={props.active}>
                <td>{props.song.title}</td>
                <td>{props.song.artist}</td>
                <td>{props.song.album}</td>
                <td>{props.song.genre}</td>
                <td>{props.song.release_date}</td>
                <td>
                <Link to={props.link}>
                <button>Edit</button>
                </Link>
                </td>
                <td><button onClick={props.deleteSong}>Delete</button></td>
            </tr>
        </tbody>
    )
}

export default Song;