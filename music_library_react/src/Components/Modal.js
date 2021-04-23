import Modal from "react-bootstrap/Modal";
import React, { useState } from 'react';

const ModalForm = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }
    
    const hideModal = () => {
        window.location.reload();
        setIsOpen(false);
    }

    return (
            <>
            <button onClick={showModal}>{props.action}</button>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.content}</Modal.Body>
                <Modal.Footer>
                <button onClick={hideModal}>Cancel</button>
                </Modal.Footer>
            </Modal>
            </>
        

    )
}

export default ModalForm;