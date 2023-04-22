import React from 'react'
import classes from "../components/Listadeproductos.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Listadeproductos = () => {
  return (
    <>
    <div className={classes.listaproductos}>
<Card style={{ width: '18rem' }} className={classes.listaproductos}>
      <Card.Img variant="top" src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt232a8ff06bf93ebd/63eeb1546495981254659630/Valorant_2022_EP6-1_PlayVALORANT_ContentStackThumbnail_1200x625_MB01.png" />
      <Card.Body>
        <Card.Title>Valorant</Card.Title>
        <Card.Text>
        Videojuego de disparos en primera persona multijugador desarrollado por Riot Games. 
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className={classes.listaproductos}>
      <Card.Img variant="top" src="https://cdn.akamai.steamstatic.com/steam/apps/739630/capsule_616x353.jpg?t=1674232976" />
      <Card.Body>
        <Card.Title>Phasmophobia</Card.Title>
        <Card.Text>
        Videojuego de terror de supervivencia en primera persona desarrollado por Kinetic Games.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className={classes.listaproductos}>
      <Card.Img variant="top" src="https://i.ytimg.com/vi/9AQI5-E4Fa8/maxresdefault.jpg" />
      <Card.Body>
        <Card.Title>Mario Kart Tour | Nintendo</Card.Title>
        <Card.Text>
        Videojuego de carreras desarrollado por Nintendo para dispositivos móviles, como teléfonos inteligentes y tabletas.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className={classes.listaproductos}>
      <Card.Img variant="top" src="https://cdn1.epicgames.com/offer/50118b7f954e450f8823df1614b24e80/EGS_FallGuys_Mediatonic_S1_2560x1440-187aa50ffaa014885d6702a0b632f848" />
      <Card.Body>
        <Card.Title>Fall Guys</Card.Title>
        <Card.Text>
        Videojuego de tipo battle royale desarrollado por Mediatonic y publicado por Devolver Digital.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Listadeproductos
