// qui dentro mostreremo i dettagli di un piatto specifico
// ovvero quello su cui avremo cliccato dalla pagina /menu
// i link possibili saranno /menu/dettagli/0, /menu/dettagli/1, /menu/dettagli/2... ecc
// in App.jsx il valore dopo "/menu/dettagli/" verrà indicato con il nome "pastaId"
// questo vuol dire che il componente PastaDetails, ogni qualvolta verrà montato avrà l'informazione di
// un "pastaId" potenzialmente sempre diverso
// l'informazione contenuta dentro il parametro "pastaId" lo repereiremo sempre attraverso un hook dedicato
// che sarà useParams()

import { useEffect, useState } from "react";
import { Badge, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import menu from "../data/menu.json";
import DishComments from "./DishComments";

const PastaDetails = () => {
  const [pasta, setPasta] = useState(null);

  const navigate = useNavigate();

  const params = useParams();
  console.log("PARAMS", params);

  useEffect(() => {
    const pastaObj = menu.find(dish => dish.id.toString() === params.pastaId);
    console.log(pastaObj);

    // const numId = parseInt(params.pastaId)
    // const isValidId = numId >= 0 && numId < menu.length

    if (pastaObj) {
      setTimeout(() => {
        setPasta(pastaObj);
      }, 500);
    } else {
      console.log("PASTA NON ESISTENTE");
      setTimeout(() => {
        navigate("/notfound");
      }, 500);
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col md={10}>
          {pasta ? (
            <>
              <img src={pasta.image} height="300" width="100%" className="object-fit-cover" alt="random pic" />
              <h1>{pasta.name}</h1>
              <p>{pasta.description}</p>
              <Badge bg="danger">{pasta.label}</Badge>
              <Badge bg="info">{pasta.price}</Badge>

              <DishComments selectedPasta={pasta} />
            </>
          ) : (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 56px)" }}>
              <Spinner animation="border" variant="success" role="status">
                <span className="visually-hidden">Caricamento...</span>
              </Spinner>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default PastaDetails;
