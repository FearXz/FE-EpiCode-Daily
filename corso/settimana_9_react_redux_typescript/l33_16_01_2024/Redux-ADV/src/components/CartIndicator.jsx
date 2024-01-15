import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setUserNameAction } from "../redux/actions";

const CartIndicator = () => {
  const [formValue, setFormValue] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartLength = useSelector(state => state.cart.content.length);
  const userName = useSelector(state => state.user.content);
  // cartLength è inizialmente 0, ma rispecchierà in qualsiasi momento la lunghezza di state.cart.content

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(setUserNameAction(formValue));
  };

  return (
    <div className="text-end mt-3 mb-4">
      {userName ? (
        <>
          <span className="me-2">
            Benvenuto, <strong>{userName}</strong>!
          </span>
          <Button
            className="d-inline-flex align-items-center py-2 px-3"
            variant="primary"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart className="text-white" />
            <span className="ms-2">{cartLength}</span>
          </Button>
        </>
      ) : (
        <Form className="w-25 ms-auto" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Inserisci il tuo nome"
              value={formValue}
              onChange={e => setFormValue(e.target.value)}
            />
          </Form.Group>
        </Form>
      )}
    </div>
  );
};

export default CartIndicator;
