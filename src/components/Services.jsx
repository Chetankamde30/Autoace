import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image1 from './images/Image1.jpg'
import { Navigationbar } from "./Navigationbar";

function Services() {
  return (
    <Container class="mt-5">
    <Navigationbar/>
    <div> 
        <CardGroup>
    <Card>
      <Card.Img variant="top" src={Image1} />
      <Card.Body>
        <Card.Title>Service title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"> <Button variant="success">Add To Services</Button>{' '}</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={Image1} />
      <Card.Body>
        <Card.Title>Service title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"><Button variant="success">Add To Services</Button>{' '}</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={Image1} />
      <Card.Body>
        <Card.Title>Service title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"><Button variant="success">Add To Services</Button>{' '}</small>
      </Card.Footer>
    </Card>
  </CardGroup></div>
  </Container>
  )
}

export default Services