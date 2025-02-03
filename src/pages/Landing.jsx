import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

function Landing() {
  return (
    <>
   <Container fluid className='mt-5'>
      <Row className='mt-5 d-flex justify-content-center alin-items-center'>
        <Col md={1}></Col>
        <Col sm={12} md={5}>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto to
          tam harum, quis consequatur dignissimos libero ex dolorum excepturi nobis praesentium volupt
          ate provident molestias nesciunt suscipit officia incidunt aliquam. Dolorum, ipsam.</p>
          <Link to={'/Home'} className='btn btn-warning mt-3'>Get Started</Link>
        </Col>
        <Col md={1}></Col>

        <Col sm={12} md={4} className='d-flex justify-content-center'>
        <img className='mt-2' src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt=""style={{width:"250px",height:"250px"}} />
        </Col>
        <Col md={1}></Col>

      </Row>
    </Container>
    <div className='container-fluid'>
<div className='row mt-5'>
  <h3 className='text-center mb-3'>Features</h3>
<div className='col-md-2'></div>
<div className='col-md-8'>
  <div className='row'>
    <div className='col-md-4'>
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" />
      <Card.Body>
        <Card.Title  className='text-center'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='col-md-4'>
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/bc/f6/7b/bcf67b6246b68b1f43a98b219fabe105.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='col-md-4'> <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/4a/b5/a4/4ab5a441a00ac705c0e97a8897b49331.gif" />
      <Card.Body>
        <Card.Title  className='text-center'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></div>

  </div>
</div>


</div>
    </div>

    <div className='container-fluid mb-5'>
    <div className='row mt-5'>
    <div className='col-md-1'></div>

  <div className='col-md-6'>
  <h4 className='text-warning'>Simple fast and powerfull</h4>
<p className='mt-2'><span className='fs-4'>Play Everything</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit.
 Quibusdam obcaecati impedit vitae quas animi aliquam!</p>
 <p className='mt-2'><span className='fs-4'>Play Everything</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit.
 Quibusdam obcaecati impedit vitae quas animi aliquam!</p>
 <p className='mt-2'><span className='fs-4'>Play Everything</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit.
 Quibusdam obcaecati impedit vitae quas animi aliquam!</p>
  </div>
  <div className='col-md-4'>
<iframe  width="100%" height="270" src="https://www.youtube.com/embed/7h4FhEePjuU?si=x92nT8fwfi0B6aVC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div className='col-md-1'></div>
</div>
    </div>
    </>
  
  )
}

export default Landing