import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const BookDetail = () => {
  const dispatch = useDispatch();
  const bookSelected = useSelector(state => state.bookSelected.content);
  // useDispatch ci ritorna la funzione che avvierà, quando chiamata (con l'action), avvierà il processo di modifica dello Store

  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1 className="display-3" style={{ lineHeight: 1, marginTop: "-6px" }}>
                {bookSelected.title}
              </h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-2">
                <img className="book-cover" src={bookSelected.imageUrl} alt="book selected" />
              </div>
            </Col>
            <Col sm={8}>
              <p className="lead">
                <span className="font-weight-bold">Description:</span>&nbsp;
                {bookSelected.description}
              </p>
              <div className="d-flex justify-content-between mt-5">
                <p className="mb-2">
                  <span className="font-weight-bold">Price:</span>&nbsp;
                  <span className="display-6 text-primary">{bookSelected.price}€</span>
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: bookSelected });
                  }}
                >
                  ADD TO CART
                </Button>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3 className="display-6">👈Start by clicking on a book!</h3>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default BookDetail;
