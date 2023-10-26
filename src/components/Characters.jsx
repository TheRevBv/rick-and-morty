import "../assets/styles/Characters.css";
import { useState, useEffect, useCallback } from "react";
import SearchInput from "./SearchInput";
import Paginator from "./Paginator";

const Characters = ({ characters, setCharacters }) => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState("");

  const regApi = useCallback(async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`
    );
    const data = await response.json();
    const { results, info } = data;
    setCharacters(results);
    setPages(info.pages);
  }, [page, search, setCharacters]);

  const resetCharacters = () => {
    setCharacters([]);
    setPage(1);
    setSearch("");
  };

  useEffect(() => {
    regApi();
  }, [regApi]);

  return (
    <>
      <p className="back-home" onClick={resetCharacters}>
        {" "}
        Volver al inicio
      </p>
      <SearchInput search={search} setSearch={setSearch} />
      <Paginator page={page} pages={pages} setPage={setPage} />
      <h3 className="title">Personajes</h3>
      <hr />
      <div className="container-characters mt-3">
        {characters.map((character) => (
          <div className="character-container" key={character.id}>
            <img
              src={character.image}
              alt={character.name}
              className="character-img "
            />
            <div className="character-info">
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive"></span>
                    {character.status}
                  </>
                ) : (
                  <>
                    <span className="dead"></span>
                    {character.status}
                  </>
                )}
              </h6>
              <p>
                Especie: <span className="text-grey">{character.species}</span>
              </p>
              <p className="character-origin">{character.origin.name}</p>
              <p className="character-location">{character.location.name}</p>
              <p>
                Episodes:
                <span className="text-grey">{character.episode.length}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <Paginator page={page} pages={pages} setPage={setPage} />
      <span className="back-home" onClick={resetCharacters}>
        {" "}
        Volver al inicio
      </span>
    </>
  );
};

export default Characters;
