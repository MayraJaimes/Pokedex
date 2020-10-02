import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";

const Pokedex = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isModalOpen, setModalState] = useState(false);
  const [activePokemonUrl, setActivePokemonUrl] = useState("");
  const [activePokemon, setActivePokemon] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data) {
          setResults(response.data.results);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(activePokemonUrl);
      if (response.data) {
        setActivePokemon(response.data);
      }
    };
    getData();
  }, [activePokemonUrl]);

  const handleSearchQueryChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleModalOpen = (url) => {
    setModalState(true);
    setActivePokemonUrl(url);
  };

  const handleModalClose = () => {
    setModalState(false);
    setActivePokemonUrl("");
  };

  return (
    <React.Fragment>
      <div>
        <div className="header">
          <img
            src={
              "https://i.pinimg.com/originals/1b/18/75/1b18756c78e5eb768e2cebdd4ba28077.png"
            }
            alt={"pokeImage"}
            className="logo"
          />
          Pokedex
        </div>
        <div className="form-group">
          <input
            type="text"
            value={query}
            onChange={handleSearchQueryChange}
            className="form-control"
            placeholder="Find Pokemon by name"
          />
        </div>
        <div className="list">
          {results.length &&
            results
              .filter((v) => v.name.includes(query))
              .map((pokemon) => (
                <div
                  onClick={() => handleModalOpen(pokemon.url)}
                  key={pokemon.name}
                  className="list-item"
                >
                  {pokemon.name}
                </div>
              ))}
        </div>
      </div>
      <Modal
        data={activePokemon}
        handleModalClose={handleModalClose}
        open={isModalOpen}
      />
    </React.Fragment>
  );
};

export default Pokedex;
