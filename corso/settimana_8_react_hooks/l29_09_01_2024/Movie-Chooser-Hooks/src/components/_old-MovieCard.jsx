import { Component } from "react";
import { Alert, Badge, Card, Placeholder, Spinner } from "react-bootstrap";

class MovieCard extends Component {
  state = {
    movieDetails: null, // dopo il componentDidMount questo null si trasformerà in un oggetto
    // avremo quindi una fetch che partirà dal componentDidMount, quindi dopo il primo render,
    // e si occuperà di reperire i dati e di salvarli nello stato attraverso un setState!
    // il setState scatena un nuovo render, e l'interfaccia reagirà di conseguenza: es. passerà dal visualizzare lo spinner al visualizzare la card
    // che a questo punto potrà leggersi i dati dallo stato...
    isLoading: true,
    isError: false
  };

  // siccome il nostro componente deve reperire le informazioni dinamicamente da una fetch
  // il metodo del ciclo di vita migliore per effettuare la chiamata di "fetchMovieDetails" è il "componentDidMount"
  // perché questo verrà eseguito una ed una volta sola, indipendentemente dal fatto che abbiamo un setState all'interno, perché entreremo nella fase di Update del componente,
  // non essendo mai più in una fase di Mounting componentDidMount non verrà MAI richiamato (proteggendoci da loop infiniti che avremmo avuto se avessimo chiamato fetchMovieDetails dentro a render)

  fetchMovieDetails = async () => {
    this.setState({ isLoading: true });
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=43a932c8&s=" + this.props.movieTitle);
      if (resp.ok) {
        const data = await resp.json();
        console.log("FETCH happened", data);

        this.setState({ movieDetails: data.Search[0] });
      } else {
        throw new Error("C'è stato un problema nel reperimento dei dati");
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    //componentDidUpdate viene invocato automaticamente da react (se specificato)
    // ogni volta che il componente entra in una fase di aggiornamento (update) ovvero quando avviene un cambio di stato o cambiano le props nel componente
    // essendo che fetchMovieDetails effettua un setState, noi arriveremo qui successivamente alla prima fetch.

    console.log("COMPONENTDIDUPDATE happend");
    // noi vogliamo lanciare un nuovo fetchMovieDetails SE E SOLO SE la prop è cambiata (che equivale ad una nuova selezione nella select dell'App)
    // quindi tutte le volte che componentDidUpdate viene chiamato a causa di un setState (vedi fetch) non partirà necessariamente un'altra fetch
    // che verrà effettuata SOLO al cambio della prop specifica => movieTitle
    if (prevProps.movieTitle !== this.props.movieTitle) {
      // se siamo qui dentro significa che è cambiata la selezione nel menu a tendina
      this.fetchMovieDetails();
      console.log("Prop diversa ==> nuova fetch");
    } else {
      console.log("Prop non è cambiata ==> no fetch");
    }
  }

  componentDidMount() {
    console.log("COMPONENTDIDMOUNT happend");
    this.fetchMovieDetails();
  }

  render() {
    console.log("RENDER happened!");
    //   this.fetchMovieDetails() // !!! NON CHIAMARE MAI UN METODO CON UNA FETCH DENTRO A RENDER!!!
    return (
      <>
        {/* caricamento iniziale */}
        {this.state.movieDetails === null && this.state.isLoading && <Spinner animation="border" variant="warning" />}

        {/* caricamento successivo al primo, dopo ogni update, visualizza il placeholder della card */}
        {this.state.isLoading && !this.state.isError && this.state.movieDetails !== null && (
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
        {this.state.movieDetails && !this.state.isLoading && !this.state.isError && (
          <Card>
            <Card.Img variant="top" src={this.state.movieDetails.Poster} />
            <Card.Body>
              <Card.Title>
                {this.state.movieDetails.Title} <Badge variant="dark">{this.state.movieDetails.type}</Badge>
              </Card.Title>
              <Card.Text>
                {this.state.movieDetails.imdbID} | {this.state.movieDetails.Year}
              </Card.Text>
            </Card.Body>
          </Card>
        )}

        {/* eventuale errore */}
        {this.state.isError && !this.state.isLoading && <Alert variant="danger">Errore nel reperimento dei dati</Alert>}
      </>
    );
  }
}

export default MovieCard;
