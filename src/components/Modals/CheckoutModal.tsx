import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import Checkout from '../../pages/Checkout'
import { CheckoutModalProps } from '../../types/models'

const CheckoutModal = ({ show, onHide }: CheckoutModalProps) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Checkout
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Checkout />
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CheckoutModal
