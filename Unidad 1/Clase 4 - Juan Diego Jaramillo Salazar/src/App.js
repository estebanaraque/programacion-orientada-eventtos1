import './App.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  const [formulario, setFormulario] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const temporal = { ...formulario }
    temporal[event.target.name] = event.target.value
    setFormulario(temporal)
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col> <Button variant="primary" type="Suma">
            Suma
          </Button> </Col>

          <Col><Button variant="primary" type="Resta">
            Resta
          </Button></Col>
        </Row>
        <Row>
          <Col><Button variant="primary" type="Division">
            División
          </Button></Col>
        </Row>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Numero 1</Form.Label>
            <Form.Control onChange={handleChange} name="email" type="email" placeholder="Numero 1 " />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Numero 2</Form.Label>
            <Form.Control onChange={handleChange} name="password" type="password" placeholder="Numero 2" />
          </Form.Group>
          {formulario.email}
          {formulario.password}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>


          <Button variant="primary" type="Multiplicacion">
            Multiplicación
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
