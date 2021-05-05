import "./style.css";
import { v4 as uuidv4 } from "uuid";

export default function RecipeTile({ recipe }) {
    var cal=Math.round(recipe["recipe"]["calories"]);
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        className="recipeTile"
        onClick={() => window.open(recipe["recipe"]["url"])}
      >
        <img className="recipeTile__img" src={recipe["recipe"]["image"]} alt='' />
        <p className="recipeTile__name" key={uuidv4()}>
          {recipe["recipe"]["label"]}<br/>
          Calories=
          {cal}
        </p>
      </div>
    )
  );
    }