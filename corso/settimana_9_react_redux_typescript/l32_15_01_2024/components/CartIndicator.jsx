import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartIndicator = () => {
  const navigate = useNavigate();

  const cartLength = useSelector(state => state.cart.content.length);
  // cartLength è inizialmente 0, ma rispecchierà in qualsiasi momento la lunghezza di state.cart.content

  return (
    <div className="text-end mt-3 mb-4">
      <Button
        className="d-inline-flex align-items-center py-2 px-3"
        variant="primary"
        onClick={() => navigate("/cart")}
      >
        <FaShoppingCart className="text-white" />
        <span className="ms-2">{cartLength}</span>
      </Button>
    </div>
  );
};

export default CartIndicator;
