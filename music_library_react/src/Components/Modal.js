import Modal from "react-bootstrap/Modal";
import React, { useState } from 'react';

const ModalForm = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }
    
    const hideModal = () => {
        setIsOpen(false);
        window.location.reload();
    }

    return (
            <>
            <button onClick={showModal} type='button' className={props.buttonStyle}>{props.action}</button>
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