import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import PastaDetails from "./components/PastaDetails";
// import Counter from "./components/Counter";

// import Alert from "react-bootstrap/Alert"; //import specifico
// import { Alert } from "react-bootstrap"; // named import su risorsa globale

// ROUTING IN REACT
// per fare in modo di poter avere un cambio pagina in una SPA (Single Page Application) mi dovrò avvalere di un sistema che mi renderizzi i componenti
// in maniera condizionale a partire da un indirizzo URL
// Per fare ciò abbiamo implementato il pacchetto react-router-dom

// a questo punto dovremo importare 3 componenti che arrivano da questo pacchetto: BrowserRouter, Routes, Route

// BroserRouter permette agli altri due di funzionare: lo inseriremo come cornice di TUTTO il contenuto di App.js

// Routes serve a contenere le singole Route. Routes può esistere solamente DENTRO un BrowserRouter.
// con Routes delimiteremo solamente il contenuto DINAMICO, quello che cambierà a seconda dell'indirizzo nella barra degli URL
// Route è un componente che può esistere solo dentro un componente Routes. Un blocco Routes deve contenere solamente delle Route.

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Counter /> */}
        <TopBar brand="Pasta Restaurant" claim="Niente secondi piatti!" />
        <Routes>
          <Route path="/" element={<Home className="mt-5" fontSize="fs-1" textSize="fs-5" />} />
          <Route path="/prenotazioni" element={<ReservationList />} />
          <Route path="/prenota" element={<ReservationForm />} />
          <Route path="/menu" element={<Menu />} />
          {/* i : servono ad indicare che per attivare il componente PastaDetails ci dovrà essere un indirizzo composto da 3 elementi:
          1) /menu 
          2) /dettagli 
          3) /:pastaId (che è un parametro dinamico)
          il parametro dinamico può avere un valore qualsiasi, purché esista
          */}
          <Route path="/menu/dettagli/:pastaId" element={<PastaDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
