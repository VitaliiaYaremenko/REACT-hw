import Card from "./components/Card/index.js";
import {Container} from "react-bootstrap";
import React from "react";

function App() {

  return (
      <>
          <Container>
              <Card>
                  <Card.Body>
                      <Card.Title>Title</Card.Title>
                      <Card.Text>Text</Card.Text>
                  </Card.Body>
              </Card>
          </Container>
      </>
  )
}

export default App
