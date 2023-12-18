import "./style.css";
import "./App.css";
import ImageComponent from "./components/ImageComponent";
import SuperButtonComponent from "./components/SuperButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent
          src="https://78.media.tumblr.com/5d0e7d39fe59d0f92da0201ee8739b52/tumblr_omfmpaLrny1w3p557o1_500.gif"
          alt="tizia che gira"
          className="App-logo rounded-circle object-fit-cover fix-h-200 fix-w-200"
        />
        <p className="z-3">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <SuperButtonComponent buttonName="KEBAB" className="btn btn-danger" />
        </a>
      </header>
    </div>
  );
}

export default App;
