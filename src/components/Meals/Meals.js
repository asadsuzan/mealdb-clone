import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Meals = ({ meal }) => {
  const { strMealThumb, strMeal, idMeal, strCategory, strInstructions } = meal;
  const navigate = useNavigate();

  const detals = () => {
    let path = "/recipe/" + idMeal;
    navigate(path);
  };
  return (
    <div className="col-lg-4 my-4">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={strMealThumb} />
        <small className="text-info px-4">@{idMeal}</small>
        <Card.Body>
          <Card.Title>
            <h5 className="name">Name: {strMeal}</h5>
            <h5 className="name">Category: {strCategory}</h5>
          </Card.Title>
          <hr />
          <Card.Text>{strInstructions.slice(0, 100)}...</Card.Text>
          <Button onClick={detals} variant="info">
            Recipe
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Meals;
