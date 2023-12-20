import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
// import Counter from "./components/Counter";

// import Alert from "react-bootstrap/Alert"; //import specifico
// import { Alert } from "react-bootstrap"; // named import su risorsa globale

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <TopBar brand="Pasta Restaurant" claim="Niente secondi piatti!" />
      <ReservationList />
      <ReservationForm />
      <Home className="mt-5" fontSize="fs-1" textSize="fs-5" />
    </div>
  );
}

export default App;
