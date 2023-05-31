import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {hacerPeticion} from './servicios/clienteaxios.js';


function App() {
  const [formulario, setFormulario] = useState({
    marcaComputador: '',
    modeloComputador: '',
    colorComputador: '',
  });

  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  };

  const guardarComputador = () => {
    hacerPeticion(formulario)
  }

  return (
    <div className="App">
      <Container>
        <Form>
          <Form.Text >Formulario con react-django</Form.Text>
            <Form.Group className="mb-3">
              <Form.Label>Marca Computador</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="marca Computador"
                placeholder="Ingrese la marca del computador."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Modelo Computador</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="modelo computador"
                placeholder="Ingrese el modelo del computador."
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>color computador</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="color computador"
                placeholder="ingrese el color del computador."
                  
              />
            </Form.Group>
            {formulario.marcaComputador}
            {formulario.modeloComputador}
            {formulario.colorComputador}


            
            <Button onClick={guardarComputador}>
              Guardar Computador
            </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
