import { Badge, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Book = ({ book }) => {
  const bookSelected = useSelector(state => state.bookSelected.content);
  const dispatch = useDispatch();

  return (
    <Card
      className={`border border-2 mt-3 ${bookSelected?.id === book.id ? "border-primary" : ""}`}
      // onClick={() => changeBook(book)}
      onClick={() => dispatch({ type: "SELECT_BOOK", payload: book })}
      style={{ cursor: "pointer" }}
    >
      <Card.Body className="d-flex">
        <img className="book-image" src={book.imageUrl} alt="book cover" />
        <div>
          <Card.Text className="font-weight-bold">{book.title}</Card.Text>
          <Badge bg="primary">{book.price}€</Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Book;
