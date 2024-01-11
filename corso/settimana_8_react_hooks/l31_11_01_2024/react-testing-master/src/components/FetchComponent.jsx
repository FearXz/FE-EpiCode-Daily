import { useState, useEffect } from "react";
import { Form, ListGroup } from "react-bootstrap";
const FetchComponent = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getUsers = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await resp.json();
    setData(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ListGroup>
      <Form.Control placeholder="Cerca utente per nome" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
      {data
        .filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map(user => (
          <ListGroup.Item key={user.id} data-testid="listgroup-item">
            {user.name} — {user.email}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default FetchComponent;
