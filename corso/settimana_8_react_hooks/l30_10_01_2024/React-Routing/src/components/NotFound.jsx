import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NotFound = props => {
  const navigate = useNavigate(); // useNavigate è un hook (una funzione) che torna una funzione

  // il contenuto di navigate è, di conseguenza, una funzione!
  // serve a redirezionare l'utente ad una nuova rotta in maniera PROGRAMMATICA e senza refreshare la pagina.
  console.log(navigate);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, []);

  return (
    <div className="text-center mt-5">
      <h1 className="display-3 text-primary">404 - Risorsa non trovata!</h1>
      <p className="lead">
        L'informazione che cercavi non è disponibile, <Link to="/">torna alla home</Link>.
      </p>
      <Link to="/" className="btn btn-primary">
        Torna alla Homepage
      </Link>

      <Button variant="secondary" onClick={() => navigate("/prenotazioni")}>
        Vai alle prenotazioni (useNavigate)
      </Button>
    </div>
  );
};
export default NotFound;
