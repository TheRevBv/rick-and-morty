/* eslint-disable react/prop-types */
import "../assets/styles/InputSearch.css";

const SearchInput = ({ search, setSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar personaje..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
