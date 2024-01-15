import { useSelector } from "react-redux";

const Footer = () => {
  const adminName = useSelector(state => state.admin.content);
  const cartLength = useSelector(state => state.cart.content.length);
  return (
    <footer className="epizon-footer">
      <span className="text-muted">
        Epizon {new Date().getFullYear()}©
        <p>
          {adminName} hai {cartLength} libri nel carrello
        </p>
      </span>
    </footer>
  );
};

export default Footer;
