import { useEffect } from "react";
import Paginator from "./Paginator";

const Characters = ({
  characters,
  setCharacters,
  setPage,
  page,
  pages,
  regApi,
}) => {
  //Metodo para resetear el estado de characters
  const resetCharacters = () => {
    setCharacters([]);
  };

  useEffect(() => {
    regApi();
  }, [page]);

  return (
    <div>
      <h1>Characters</h1>
      <span className="back-home" onClick={resetCharacters}>
        {" "}
        Volver al inicio
      </span>
      <div className="container-characters">
        {characters.map((character) => {
          return (
            <div className="character-container" key={character.id}>
              <div>
                <img src={character.image} alt={character.name} />
              </div>
              <div>
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
                  Especie:{" "}
                  <span className="text-grey">{character.species}</span>
                </p>
                <p className="character-origin">{character.origin.name}</p>
                <p className="character-location">{character.location.name}</p>
                <p>
                  Episodes:
                  <span className="text-grey">{character.episode.length}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <span className="back-home" onClick={resetCharacters}>
        {" "}
        Volver al inicio
      </span>
      <Paginator page={page} setPage={setPage} pages={pages} />
    </div>
  );
};

export default Characters;
