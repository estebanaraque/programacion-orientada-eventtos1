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
          <Col> <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Numero 1</Form.Label>
            <Form.Control onChange={handleChange} name="email" type="email" placeholder="Numero 1 " />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group> </Col>

          <Col><Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Suma</Form.Label>
            <Form.Control onChange={handleChange} name="email" type="email" placeholder="Suma " />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group></Col>
        </Row>

        <Row>
          <Col> <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Numero 2</Form.Label>
            <Form.Control onChange={handleChange} name="email" type="email" placeholder="Numero 2 " />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group> </Col>

          <Col><Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Resta</Form.Label>
            <Form.Control onChange={handleChange} name="email" type="email" placeholder="Resta " />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Multiplicacion</Form.Label>
            <Form.Control onChange={handleChange} name="email" type="email" placeholder="Multiplicación " />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>División</Form.Label>
            <Form.Control onChange={handleChange} name="email" type="email" placeholder="División " />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group></Col>
        </Row>

        <Form>
        
        </Form>
      </Container>
    </div>
  );
}

export default App;
