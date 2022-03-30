import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Instructions from "../Instructions/Instructions";
import Spiners from "../Spiners/Spiners";

const Recipe = () => {
  const params = useParams();
  const [loding, setLoading] = useState(false);
  const id = params.id;
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals));
    setLoading(false);
  }, [id]);
  return (
    <>
      {loding ? (
        <Spiners />
      ) : (
        <section className="container" style={{ height: "100vh" }}>
          {recipe.map((ins) => (
            <Instructions key={ins.idMeal} ins={ins}></Instructions>
          ))}
        </section>
      )}
    </>
  );
};

export default Recipe;
