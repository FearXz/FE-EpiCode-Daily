import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import BookComponent from "./BookComponent";
import { IBook } from "../interfaces/IBook";

// interface IBook {
//     id: number;
//     title: string;
//     price: number;
//     imageUrl: string;
//     description: string;
//   }                      // ora importata da file esterno, anche in BookComponent!

const FetchComponent = () => {
  const URL = "https://striveschool-api.herokuapp.com/food-books";

  const [books, setBooks] = useState<IBook[]>([]);
  // la type inference qui sta facendo quel che può, ma è un pessimo lavoro..!
  // senza una struttura iniziale nell'array, assegnerà automaticamente ai libri il tipo never[]
  // type never --> un valore che non avverrà mai, che non esiste

  // allora, forniamo a TS una struttura per l'oggetto book! (IBook)

  const sayHello = (str: string) => {
    console.log("Hello, " + str);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const booksFromApi = await response.json();
        console.log(booksFromApi);
        setBooks(booksFromApi);
      } else {
        console.log("Error...");
      }
    } catch (error) {
      console.log("FATAL ERROR!", error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={5}>
          {books.map((book, i) => {
            return <BookComponent key={i} book={book} sayHello={sayHello} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default FetchComponent;
