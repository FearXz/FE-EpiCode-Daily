import FormGroup from "./FormGroup";

const MainComponent = props => (
  <div id={props.id} className={props.className}>
    {console.log("PROPS", props)}
    <img src={props.logo} className="App-logo" alt="logo" />
    <p>Ciao Epicoders!</p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      style={props.anchorStyle}
    >
      Learn React
    </a>

    <FormGroup
      id={props.formroupId}
      content={props.formGroupContent}
      placeholder={props.formGroupPlaceholder ? props.formGroupPlaceholder : "no placeholder"}
    />
  </div>
);

export default MainComponent;
