import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBackLoginHandler = () => {
    navigate("/init");
  };

  return (
    <div className="text-center mt-3">
      <h2> ¡Ups! La página solicitada no fue encontrada</h2>
      <button className="text-center" onClick={goBackLoginHandler}>
        Volver a la pagina principal
      </button>
    </div>
  );
};

export default NotFound;
