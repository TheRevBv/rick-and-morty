import "./App.css";
import { useState, useCallback, useEffect } from "react";
import imagenRickAndMorty from "./img/rick-morty.png";
import Characters from "./components/Characters";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const regApi = useCallback(async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=1`
    );
    const data = await response.json();
    const { results } = data;
    setCharacters(results);
  }, []);

  // useEffect(() => {
  //   regApi();
  // }, [regApi]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title mb-3">Rick and Morty</h1>
        {characters.length > 0 ? (
          <>
            <Characters characters={characters} setCharacters={setCharacters} />
          </>
        ) : (
          <>
            <img
              src={imagenRickAndMorty}
              alt="Rick and Morty"
              className="img-home"
            />
            <button onClick={regApi} className="btn-search">
              {" "}
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
};

export default App;
