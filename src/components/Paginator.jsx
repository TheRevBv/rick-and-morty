import "../assets/styles/Paginator.css";

const Paginator = ({ page, setPage, pages }) => {
  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
      //   regApi();
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      //   regApi();
    }
  };

  return (
    <div className="paginator">
      {page > 1 ? (
        <button onClick={prevPage} className="btn-paginator">
          {"< "}
        </button>
      ) : (
        ""
      )}

      <span className="page">{page}</span>

      {page < pages ? (
        <button onClick={nextPage} className="btn-paginator">
          {"> "}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Paginator;
