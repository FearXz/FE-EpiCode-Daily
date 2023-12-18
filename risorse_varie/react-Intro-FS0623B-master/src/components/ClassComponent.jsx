import { Component } from "react";

// Component è il costruttore
class ClassComponent extends Component {
  render() {
    console.log(this);
    // render() è il metodo fondamentale e obbligatorio di ogni componente a classe (non basta il solo return!!!)
    // il suo scopo è quello di venire chiamato in un momento preciso nel ciclo di vita del componente (dopo il suo montaggio)
    // e ritornare obbligatoriamente del JSX

    return <h2>{this.props.title ? this.props.title : "Default Title"}</h2>;
  }
}

export default ClassComponent;
