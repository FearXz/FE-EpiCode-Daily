const Footer = ({ selected }) => <footer style={{ backgroundColor: selected ? "palegreen" : "black", color: selected ? "black" : "white" }}>l'ultima selezione è stata: {selected || "vuota"}</footer>;

export default Footer;
