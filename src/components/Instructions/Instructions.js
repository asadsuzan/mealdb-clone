import React from "react";
import { Card } from "react-bootstrap";

const Instructions = ({ ins }) => {
  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,

    strMealThumb,
  } = ins;

  return (
    <div className="my-5">
      <h3 className="text-center display-4 my-5">
        Panding Time for Cocking <span className="text-info">{strMeal}</span>
      </h3>
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={strMealThumb}
          style={{ height: "400px" }}
        />

        <Card.Body>
          <Card.Title className="d-flex justify-content-around text-uppercase text-info ">
            <h5 className="name">Name: {strMeal}</h5>
            <h5 className="name">Category: {strCategory}</h5>
            <h5 className="name">Area,: {strArea}</h5>
          </Card.Title>
          <hr />
          <Card.Text>{strInstructions}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Instructions;
