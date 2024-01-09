import { useState } from "react";
import "./App.css";
// import UseStateExample from "./components/UseStateExample";
import UseEffectExample from "./components/UseEffectExample";

function App() {
  const [showEffectExample, setShowEffectExample] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShowEffectExample(!showEffectExample)}>toggle showEffect</button>
        {/* <UseStateExample /> */}
        {showEffectExample && <UseEffectExample />}
      </header>
    </div>
  );
}

export default App;
