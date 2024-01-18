import { Component } from "react";

// ogni componente parte defininendo le sue prop e state come {}
// dovremo andare a definire la nuova struttura per le nostre prop, che non sarà più un oggetto vuoto
// l'interfaccia per le prop dovrebbe mantenere una nomeclatura di questo tipo "[NomeComponente]Props"
interface ClassComponentProps {
  title: string;
  subtitle?: string;
}

type ClassComponentState = {
  counter: number;
};

class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
  state = {
    counter: 0
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.subtitle && <h2>{this.props.subtitle.toUpperCase()}</h2>}
        <p>{this.state.counter}</p>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
      </div>
    );
  }
}

export default ClassComponent;
