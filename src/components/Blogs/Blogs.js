import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";


function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blog </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few stories.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
