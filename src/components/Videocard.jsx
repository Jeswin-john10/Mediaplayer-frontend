import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Videocard() {
  return (
    <div>

<Card style={{ width: '100%' }}>
      <Card.Img variant="top" style={{width:"100%",height:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIfjEO4bcHg9ZR8pj0fiKi7D-fh5xL-z-jQ&s" />
      <Card.Body className='d-flex justify-content-between align-items-center'>
        <Card.Title>crd tilrtt</Card.Title>
      
        <Button variant="danger"><FontAwesomeIcon icon={faTrash} style={{color:"white"}} /></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Videocard