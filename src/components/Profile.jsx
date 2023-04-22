import React from 'react'
import IndexLayout from './layouts'
import { Card, ListGroup } from "react-bootstrap";


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
       <Card.Img variant="top" src="ruta-de-tu-imagen.jpg" />
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
      </Card.Body>
    </Card>

    </div>
   
    
  )
}

export default Profile
