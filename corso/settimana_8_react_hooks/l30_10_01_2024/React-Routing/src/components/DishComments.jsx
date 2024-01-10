import { Alert, ListGroup } from "react-bootstrap";

const DishComments = ({ selectedPasta }) => (
  <ListGroup className="mt-4">
    {selectedPasta ? (
      <>
        {/* il fragment serve a raggruppare più di un elemento in un unico gruppo */}
        <h3>Recensioni per {selectedPasta.name}</h3>
        {selectedPasta.comments.map((review, index) => (
          <ListGroup.Item key={`comment-${index}`} className="d-flex">
            <span className="me-2">
              <strong>{new Date(review.date).toLocaleDateString()}</strong>
            </span>
            <span className="me-auto">{review.author}:</span>
            <span>{review.comment}</span>
          </ListGroup.Item>
        ))}
      </>
    ) : (
      <Alert variant="info">Clicca un'immagine per leggere le recensioni</Alert>
    )}
    {/* questo alert si visualizzerà SOLO quando selectedPasta è falsy */}
  </ListGroup>
);

export default DishComments;
