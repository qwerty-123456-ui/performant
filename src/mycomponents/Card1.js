import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Img1 from "../images/4.jpg";
import Img2 from "../images/2.jpg";
import Img3 from "../images/1.jpg";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Card1() {
  return (
    <div>
      <Card style={{ width: "50%", marginLeft: "25%", marginTop: "100px" }}>
        <Container fluid>
          <Row>
            <Col>
              <Card.Img variant="top" src={Img1} width="100%" />
            </Col>
            {/* <Col>
            <Card.Body style={{margintop: "25%"}}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Body>
            </Col> */}
          </Row>
          <Row>
            <Card.Body style={{ margintop: "25%" }}>
              <Card.Title>Digital Marketing</Card.Title>
              <Card.Text>
                Click on the below link to apply
              </Card.Text>
              <Card.Link href="https://forms.gle/7tp7CyX4PPobsyzT7">Register</Card.Link>
            </Card.Body>
          </Row>
        </Container>
      </Card>
      <Card style={{ width: "50%", marginLeft: "25%", marginTop: "100px" }}>
        <Container fluid>
          <Row>
            <Col>
              <Card.Img variant="top" src={Img1} width="100%" />
            </Col>
            {/* <Col>
            <Card.Body style={{margintop: "25%"}}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Body>
            </Col> */}
          </Row>
          <Row>
            <Card.Body style={{ margintop: "25%" }}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Row>
        </Container>
      </Card>
      <Card style={{ width: "50%", marginLeft: "25%", marginTop: "100px" }}>
        <Container fluid>
          <Row>
            <Col>
              <Card.Img variant="top" src={Img1} width="100%" />
            </Col>
            {/* <Col>
            <Card.Body style={{margintop: "25%"}}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Body>
            </Col> */}
          </Row>
          <Row>
            <Card.Body style={{ margintop: "25%" }}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Row>
        </Container>
      </Card>
      {/*  */}
      {/* </CardDeck> */}
    </div>
  );
}
