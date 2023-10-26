/* eslint-disable react/prop-types */
import "../assets/styles/InputSearch.css";

const SearchInput = ({ setSearch, regApi }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar personaje"
        className="search-input"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-btn" onClick={regApi}>
        Buscar
      </button>
    </div>
  );
};

export default SearchInput;
