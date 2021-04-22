import React, {useState} from 'react'
import Modal from "react-bootstrap/Modal";
import AddSong from './AddSong';

const SongTable = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }
    
    const hideModal = () => {
        setIsOpen(false);
    }




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
                {/* <button onClick={}>Add New Song</button>
                <Modal>
                    <Modal.Header>
                    <Modal.Title>Add Song</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                       
                    <AddSong/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={hideModal}>Cancel</button>
                    </Modal.Footer>
                </Modal> */}
                
            </div>
        </div>
    );
}

export default SongTable;
