import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Table extends Component {
  //   state = {
  //     selected: null
  //   };

  // Table riceve l'informazione "selected" dalle props!
  // "selected" è la proprietà dello stato ormai esistente in App.jsx ed è quindi passata all'interno di Table tramite prop.

  checkSelected = string => (string === this.props.selected ? "selected" : "");

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            //   onClick={() => this.setState({ selected: "First" })}

            // ora possiamo chiamare il setState nel contesto di App grazie al metodo setAppState che ci siamo passati come prop!
            // di fatto scateneremo il cambio di stato nel livello superiore da un livello più annidato (dal componente figlio di App)
            onClick={() => this.props.setAppState("First")}
            // onClick={() => console.log(this.props)}
            className={this.checkSelected("First")}
          >
            First
          </ListGroup.Item>
          <ListGroup.Item
            //   onClick={() => this.setState({ selected: "Second" })}
            onClick={() => this.props.setAppState("Second")}
            className={this.checkSelected("Second")}
          >
            Second
          </ListGroup.Item>
          <ListGroup.Item
            //   onClick={() => this.setState({ selected: "Third" })}
            onClick={() => this.props.setAppState("Third")}
            className={this.checkSelected("Third")}
          >
            Third
          </ListGroup.Item>
          <ListGroup.Item
            //   onClick={() => this.setState({ selected: "Fourth" })}
            onClick={() => this.props.setAppState("Fourth")}
            className={this.checkSelected("Fourth")}
          >
            Fourth
          </ListGroup.Item>
        </ListGroup>
        <p>Elemento selezionato: {this.props.selected || "Vuoto"}</p>
      </>
    );
  }
}

export default Table;
