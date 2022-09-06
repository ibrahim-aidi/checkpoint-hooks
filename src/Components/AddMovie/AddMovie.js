import React,{useState} from 'react'
import {Button, Modal, Form} from 'react-bootstrap'

const AddMovie = ({add}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // initialState
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState("");
    const [posterUrl, setPosterUrl] = useState("");

    // update state
    const handleTilte = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleRate = (e) => {
        setRate(e.target.value)
    }
    const handlePoster = (e) => {
        setPosterUrl(e.target.value)
    }

    // function add movie
    const handleMovie = (e) => {
        let newMovie = {title, description,rate, posterUrl}
        add(newMovie)
    }
    return (
        <div>
                <Button variant="primary" onClick={handleShow}>
                    Add Movie
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" vaule={title} onChange={ (e) => handleTilte(e)} />
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e) => handleDescription(e)} />
                        <Form.Label>Rate</Form.Label>
                        <Form.Control type="number" placeholder="Enter rate" value={rate} onChange={(e) => handleRate(e)} />
                        <Form.Label>PosterUrl</Form.Label>
                        <Form.Control type="url" placeholder="Enter potser url" value={posterUrl} onChange={(e) => handlePoster(e)} />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        close 
                    </Button>
                    <Button variant="primary" onClick={() => handleMovie()}>
                       
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

export default AddMovie