import React from 'react'
import IndexLayout from './layouts'
import { Card, ListGroup, Button } from "react-bootstrap";
import imagen from '../assets/descarga.png'

const Profile = ({ name, email, username }) => {

  
  const content = (
    <div>
      Profile
    </div>
  )
  return (
    <div>
       <IndexLayout render={content} />
       <Card style={{ width: "18rem", margin: "auto" }}>
       <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>Perfil de Usuario</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Nombre:</strong> {name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Correo:</strong> {email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Usuario:</strong> {username}
          </ListGroup.Item>
        </ListGroup>
        <Button variant="primary" className="mt-3">
          Editar
        </Button>
      </Card.Body>
    </Card>

    </div>
   
    
  )
}

export default Profile
