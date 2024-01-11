import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const ToggleSection = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button variant="primary" className="my-3" onClick={() => setShow(!show)}>
        Mostra card
      </Button>
      {show && (
        <Card>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1704790024545-d801eb3d3e2e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ToggleSection;
