import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, number, age, image }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px", textAlign: "center", boxShadow: "" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {team} <br />
          <strong>Nationalité :</strong> {nationality} <br />
          <strong>Numéro :</strong> {number} <br />
          <strong>Âge :</strong> {age} ans
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Props par défaut
Player.defaultProps = {
  name: "Joueur inconnu",
  team: "Équipe inconnue",
  nationality: "Nationalité inconnue",
  number: 0,
  age: 0,
  image: "https://via.placeholder.com/150",
};

export default Player;
