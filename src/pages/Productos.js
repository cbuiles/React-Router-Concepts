import { useHistory, useLocation } from "react-router";

const Productos = () => {
  let { search } = useLocation();
  // Objeto para serializar los parametros de la URL
  let query = new URLSearchParams(search);

  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;

  // console.log(start, end);

  let history = useHistory();

  const handlePrev = (e) => {
    history.push({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
  };
  const handleNext = (e) => {
    history.push({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Productos;
