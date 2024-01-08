import { Alert } from "react-bootstrap";

const Detail = ({ selected }) => <Alert variant="success">{selected || "Nessun valore selezionato al momento"}</Alert>;

export default Detail;
