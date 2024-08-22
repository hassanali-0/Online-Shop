import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Container>
        <Row className='my-5'>
          <Col className='d-flex flex-column justify-content-center'>
            <h5 className="font-weight-bold" style={{ fontSize: "35px" }}>Welcome to Online Shop!</h5>
            <p className=" my-3" style={{ width: "80%" }}>
              Discover the best deals on fashion, electronics, and more. Our wide range of products ensures you find what you're looking for at unbeatable prices. Shop now and experience the convenience of online shopping like never before.
            </p>
            <Link to="/products">
              <Button variant="primary">Shop Now</Button>
            </Link>
          </Col>
          <Col>
            <img src="https://via.placeholder.com/600x400?text=Shop+Now" alt="Shop Now" className="img-fluid rounded" />
          </Col>
        </Row>
        <Row >
          <Col className='md={4}'>
            <Card className="text-center p-4">
              <Card.Title>Quality Products</Card.Title>
              <Card.Text>
                We offer a wide selection of high-quality products that meet your needs. Each item is carefully chosen to ensure satisfaction and durability.
              </Card.Text>
            </Card>
          </Col>
          <Col className='md={4}'>
            <Card className="text-center p-4">
              <Card.Title>Fast Shipping</Card.Title>
              <Card.Text>
                Enjoy fast and reliable shipping on all your orders. Our efficient delivery network ensures your purchases reach you quickly and safely. Order Now!
              </Card.Text>
            </Card>
          </Col>
          <Col className='md={4}'>
            <Card className="text-center p-4">
              <Card.Title>Excellent Support</Card.Title>
              <Card.Text>
                Our customer support team is here to help you with any questions or issues. We are committed to providing exceptional service and support.
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <Row className='my-5'>
          <Col className='md={4}'>
            <Card className="text-center p-4">
              <Card.Title>Quality Products</Card.Title>
              <Card.Text>
                We offer a wide selection of high-quality products that meet your needs. Each item is carefully chosen to ensure satisfaction and durability.
              </Card.Text>
            </Card>
          </Col>
          <Col className='md={4}'>
            <Card className="text-center p-4">
              <Card.Title>Fast Shipping</Card.Title>
              <Card.Text>
                Enjoy fast and reliable shipping on all your orders. Our efficient delivery network ensures your purchases reach you quickly and safely. Order Now!
              </Card.Text>
            </Card>
          </Col>
          <Col className='md={4}'>
            <Card className="text-center p-4">
              <Card.Title>Excellent Support</Card.Title>
              <Card.Text>
                Our customer support team is here to help you with any questions or issues. We are committed to providing exceptional service and support.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
