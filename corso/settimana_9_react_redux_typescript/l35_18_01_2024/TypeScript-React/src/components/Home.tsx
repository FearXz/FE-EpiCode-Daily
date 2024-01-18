import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
const Home = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Nav as="ul">
        <Nav.Item as="li">
          <Link className="nav-link " to="/class">
            Class Component
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link className="nav-link" to="/functional/48">
            Functional
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link className="nav-link" to="/bootstrap">
            Bootstrap Elements
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link className="nav-link" to="/form">
            Form
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link className="nav-link" to="/fetch">
            Fetch Component
          </Link>
        </Nav.Item>
      </Nav>
      {/* <ClassComponent title="Nuovo titolo" />
          <ClassComponent title="Nuovo titolo2" subtitle="Questo è un componente a classe" /> */}
    </header>
  );
};

export default Home;
