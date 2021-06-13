import Axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = `b63a836a`;
  const YOUR_APP_KEY = "3b8188c725e30ad12e6442e04d8e654d";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    // console.log(result.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      
      <div className="ss"style={{
        display:'flex', 
        alignItems:'center',
        justifyContent:'center', 
        paddingRight:'20vw',
        paddingLeft:'20vw'
      }}>
      <h1 onClick={getRecipeInfo} style={{
        marginRight:'10vh',
        fontSize:50,
        fontWeight:100
      }}>Food Recipe Book</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingredient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
          style={{
            width:'50vh'
          }}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>
      </div>

      <div className="app__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
      </div>
    
    </div>
  );
}

export default App;
