import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Instructions from "../Instructions/Instructions";

const Recipe = () => {
  const params = useParams();
  const id = params.id;
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals));
  }, [id]);

  return (
    <section className="container" style={{ height: "100vh" }}>
      {recipe.map((ins) => (
        <Instructions key={ins.idMeal} ins={ins}></Instructions>
      ))}
    </section>
  );
};

export default Recipe;
