import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import BootstrapElements from "./components/BootstrapElements";
import FormComponent from "./components/FormComponent";
import Home from "./components/Home";
import FetchComponent from "./components/FetchComponent";
import ClassComponent from "./components/ClassComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/class"
            element={<ClassComponent title="Nuovo titolo" subtitle="Questo è un componente a classe" />}
          />
          <Route
            path="/functional/:id"
            element={<FunctionalComponent title="Nuovo titolo" subtitle="Questo è un componente a funzione" />}
          />
          <Route path="/bootstrap" element={<BootstrapElements />} />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/fetch" element={<FetchComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
