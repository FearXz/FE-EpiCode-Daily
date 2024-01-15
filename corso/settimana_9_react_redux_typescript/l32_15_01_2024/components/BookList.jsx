import Book from "./Book";

const BookList = ({ books }) => (
  <div className="mb-3">
    {books.map(book => (
      <Book key={book.id} book={book} />
    ))}
  </div>
);

export default BookList;
