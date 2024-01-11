import "./assets/css/style.min.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-darkgray">
              <Header />
              <Main />
              <Footer />
            </div>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/moviedetail/:id"
          element={
            <div className="bg-darkgray">
              <Header />
              <MovieDetail />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
