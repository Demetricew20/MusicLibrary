import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import { Component } from 'react';

export default class EditSongModal extends Component {

    state = {
        show: false
    }

    handleClose = () => ({
        show: false
    })

    handleShow = () => ({
        show: true
    })
  
    
    render() {
        if (!this.props.show) {
            return null;
        }
    
        return (
            <>
      <Modal
        show={this.state.show}
        onHide={this.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>

        )
    }

}
