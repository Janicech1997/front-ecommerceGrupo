import React, { useContext } from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap'
import { ThemeContext } from '../../context/ThemeContext';

const IndexLayout = ({ render }) => {
  console.log(render)
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <>
      <Navbar bg={theme} variant={theme}>
        <Container>
          <Navbar.Brand href="#home">Arlequin Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Registrarse</Nav.Link>
            <Nav.Link href="/profile">Perfil de usuario</Nav.Link>
            <Nav.Link href="/listadeproductos">Productos</Nav.Link>
            <Nav.Link href="/checkout">Checkout</Nav.Link>
            <Nav.Link href="/regiter">Registrarse</Nav.Link>
            <Nav.Link href="/login">Iniciar sesion</Nav.Link>
          </Nav>
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              onChange={() => toggleTheme()}
            />
          </Form>
        </Container>
      </Navbar>
      {render}
    </>
  )
}

export default IndexLayout