import "./App.css";
import { useState } from "react";
import imagenRickAndMorty from "./img/rick-morty.png";
import Characters from "./components/Characters";
import SearchInput from "./components/SearchInput";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");

  const regApi = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`
    );
    console.log(response);
    const data = await response.json();
    setCharacters(data.results);
    setPages(data.info.pages);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="title">Rick and Morty</h1>
          {characters.length > 0 ? (
            <>
              <SearchInput setSearch={setSearch} regApi={regApi} />
              <Characters
                characters={characters}
                setCharacters={setCharacters}
                setPage={setPage}
                pages={pages}
                page={page}
                regApi={regApi}
              />
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
    </>
  );
};

export default App;
