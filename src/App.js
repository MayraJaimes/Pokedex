import React from "react";
import Pokedex from "./components/Pokedex";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
}

export default App;

//Resources: https://codepen.io/team/kylemcmullen/pen/bGVRegr

/*
Our task is create a pokedex in react app. 
You will be provided with API to get a list of pokemon.

Together we will try and make these features.

- Fetch the API and store the data in your component
- Make a datalist with the results
- The user needs to be able to search for a pokemon by name, you are given a input field. So we will have to make a controlled component.
- If a user clicks a item in the datalist, a modal should open with the details of the pokemon and a image.

Fetch https://pokeapi.co/api/v2/pokemon?limit=20 and store the response in the pokedex component below.
*/
