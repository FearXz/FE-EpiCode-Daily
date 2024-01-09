import { useEffect, useState } from "react";
import { Alert, Badge, Card, Placeholder, Spinner } from "react-bootstrap";

const MovieCard = ({ movieTitle }) => {
  // state = {
  //   movieDetails: null, // dopo il componentDidMount questo null si trasformerà in un oggetto
  //   // avremo quindi una fetch che partirà dal componentDidMount, quindi dopo il primo render,
  //   // e si occuperà di reperire i dati e di salvarli nello stato attraverso un setState!
  //   // il setState scatena un nuovo render, e l'interfaccia reagirà di conseguenza: es. passerà dal visualizzare lo spinner al visualizzare la card
  //   // che a questo punto potrà leggersi i dati dallo stato...
  //   isLoading: true,
  //   isError: false
  // };

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // siccome il nostro componente deve reperire le informazioni dinamicamente da una fetch
  // il metodo del ciclo di vita migliore per effettuare la chiamata di "fetchMovieDetails" è il "componentDidMount"
  // perché questo verrà eseguito una ed una volta sola, indipendentemente dal fatto che abbiamo un setState all'interno, perché entreremo nella fase di Update del componente,
  // non essendo mai più in una fase di Mounting componentDidMount non verrà MAI richiamato (proteggendoci da loop infiniti che avremmo avuto se avessimo chiamato fetchMovieDetails dentro a render)

  const fetchMovieDetails = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=43a932c8&s=" + movieTitle);
      if (resp.ok) {
        const data = await resp.json();
        console.log("FETCH happened", data);

        setMovieDetails(data.Search[0]);
      } else {
        throw new Error("C'è stato un problema nel reperimento dei dati");
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieTitle]);

  console.log("RENDER happened!");
  //   this.fetchMovieDetails() // !!! NON CHIAMARE MAI UN METODO CON UNA FETCH DENTRO A RENDER!!!
  return (
    <>
      {/* caricamento iniziale */}
      {movieDetails === null && isLoading && <Spinner animation="border" variant="warning" />}

      {/* caricamento successivo al primo, dopo ogni update, visualizza il placeholder della card */}
      {isLoading && !isError && movieDetails !== null && (
        <Card>
          <Placeholder animation="glow">
            <Placeholder xs={12} style={{ aspectRatio: "2/3" }} />
          </Placeholder>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} />
            </Placeholder>
          </Card.Body>
        </Card>
      )}

      {/* card vera e propria */}
      {movieDetails && !isLoading && !isError && (
        <Card>
          <Card.Img variant="top" src={movieDetails.Poster} />
          <Card.Body>
            <Card.Title>
              {movieDetails.Title} <Badge variant="dark">{movieDetails.type}</Badge>
            </Card.Title>
            <Card.Text>
              {movieDetails.imdbID} | {movieDetails.Year}
            </Card.Text>
          </Card.Body>
        </Card>
      )}

      {/* eventuale errore */}
      {isError && !isLoading && <Alert variant="danger">Errore nel reperimento dei dati</Alert>}
    </>
  );
};

export default MovieCard;
