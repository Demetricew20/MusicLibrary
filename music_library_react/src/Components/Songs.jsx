import ModalForm from './Modal.js';
import React, { useState } from 'react';
import EditSong from './EditSong.jsx';

const Song = (props) => {

    
        return (
            
            <tbody>
                <tr className='table__row' id='table_row' name='table_row'>
                    <td >{props.song.title}</td>
                    <td >{props.song.artist}</td>
                    <td >{props.song.album}</td>
                    <td >{props.song.genre}</td>
                    <td >{props.song.release_date}</td>
                    <td>
                        <ModalForm action='Edit' title='Edit Song' content={<EditSong id={props.song.id}/>}/>
                    
                    </td>
                    <td><button onClick={props.deleteSong}>Delete</button></td>
                </tr>
            </tbody>
        )
}

export default Song;