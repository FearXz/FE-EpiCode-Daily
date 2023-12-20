import { Component } from "react";
import { Button } from "react-bootstrap";
// lo State di un componente può esistere SOLO ed esclusivamente in un componente a Classe
// occorrerà far un refactor del componente da funzione a classe eventualmente
class Counter extends Component {
  //si può ora creare lo Stato interno al componente, che funge da memoria interna, specifica per la singola istanza

  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  state = {
    counter: 0
  };

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <Button
          variant="success"
          onClick={() => {
            // console.log(this.state);
            // MAI MAI e poi MAI fare questo: this.state.counter += 1
            // lo stato di un componente NON VA MAI MUTATO direttamente
            // altrimenti usciremmo dalle logiche React, e non avremmo la possibilità di tenere aggiornata e in sincronia la nostra UI

            // BISOGNA usare il metodo dedicato setState:

            this.setState({ counter: this.state.counter + 1 });
            console.log("cambio di stato avvenuto");
          }}
        >
          +1
        </Button>
      </>
    );
  }
}

export default Counter;
