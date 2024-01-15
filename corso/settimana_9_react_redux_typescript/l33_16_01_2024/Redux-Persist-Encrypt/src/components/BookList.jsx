import { useSelector } from "react-redux";
import Book from "./Book";
import { Alert } from "react-bootstrap";

const BookList = () => {
  const books = useSelector(state => state.books.content);
  const hasFetchError = useSelector(state => state.books.hasError);
  const hasErrorMessage = useSelector(state => state.books.errorMessage);
  return (
    <div className="mb-3">
      {hasFetchError ? (
        <Alert variant="danger">{hasErrorMessage ? hasErrorMessage : "Qualcosa è andato storto"}</Alert>
      ) : (
        <>
          {books.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </>
      )}
    </div>
  );
};

export default BookList;
