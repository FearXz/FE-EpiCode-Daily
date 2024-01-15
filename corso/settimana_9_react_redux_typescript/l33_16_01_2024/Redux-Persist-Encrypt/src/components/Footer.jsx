import { Component } from "react";
import { connect } from "react-redux";
import { setAdminNameAction } from "../redux/actions";
// ESEMPIO DI CONNESSIONE DI UN COMPONENTE A CLASSE ALLO STORE REDUX

// connect è la funzione che connette il nostro componente allo Store
// accetta due parametri: mapStateToProps e mapDispatchToProps

// come dice il nome stesso, mapperanno, cioè applicheranno delle prop al nostro componente a classe
// che avrà sia prop riguardanti la porzione di stato che vogliamo leggere,
// sia la funzione che sarà in grado di fare il dispatch della nostra azione

// const mapStateToProps = state => {
// seleziono la parte di stato che voglio applicare alla prop, lo stato mi viene fornito dalla funzione connect come parametro "state" ( vedi sopra )

//   return { cartLength: state.cart.content.length, adminName: state.admin.content };

// la prop prenderà il nome dalla proprietà dell'oggetto che ritorniamo
// sarà quindi this.props.cartLength
// };
const mapStateToProps = state => ({ cartLength: state.cart.content.length, adminName: state.admin.content });

const mapDispatchToProps = dispatch => {
  // in questa funzione la connect ci fornirà la funzione dispatch come parametro

  // ritneremo sempre un oggetto che rappresenta le prop che verranno applicate al componente, in questo caso ne avremo una chiamata this.props.changeAdminName,
  // che sarà una funzione, che aspetterà di essere chiamata per poi chiamare la dispatch internamente e fornire un'action al reducer.
  return {
    changeAdminName: data => {
      // data è il valore che passiamo da sotto nell'onClick
      // qui siamo dentro la funzione contenuta in changeAdminName, solo quando this.props.changeAdminName() verrà chiamata allora dispatch verrà eseguito, non prima.
      // quando dispatch viene eseguito, invierà effettivamente l'oggetto action al reducer.
      dispatch(setAdminNameAction(data));
    }
  };
};

class Footer extends Component {
  render() {
    return (
      <footer className="epizon-footer">
        <span className="text-muted">Epizon {new Date().getFullYear()}©</span>
        <p>
          {this.props.adminName} hai {this.props.cartLength} libri nel carrello
        </p>
        <button onClick={() => this.props.changeAdminName("Salvatore")}>Set Admin Name</button>
      </footer>
    );
  }
}
// questo passaggio è fondamentale, è qui che la funzione connect() aumenterà il nostro componente con le prop dello stato e di dispatch,
// così come abbiamo istruito le due funzioni mapStateToProps e mapDispatchToProps che gli passiamo
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
