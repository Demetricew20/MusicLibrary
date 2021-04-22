import Modal from "react-bootstrap/Modal";
import React, { useState } from 'react';
import EditSong from './EditSong.jsx';

const Song = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }
    
    const hideModal = () => {
        setIsOpen(false);
    }


        return (
            
            <tbody>
                <tr className='table__row' id='table_row' name='table_row'>
                    <td >{props.song.title}</td>
                    <td >{props.song.artist}</td>
                    <td >{props.song.album}</td>
                    <td >{props.song.genre}</td>
                    <td >{props.song.release_date}</td>
                    <td>
                        <>
                        <button onClick={showModal}>Edit</button>
                        <Modal show={isOpen} onHide={hideModal}>
                            <Modal.Header>
                            <Modal.Title>Edit Song</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><EditSong id={props.song.id}/></Modal.Body>
                            <Modal.Footer>
                            <button onClick={hideModal}>Cancel</button>
                            </Modal.Footer>
                        </Modal>
                        </>
                    
                    </td>
                    <td><button onClick={props.deleteSong}>Delete</button></td>
                </tr>
            </tbody>
        )
}

export default Song;