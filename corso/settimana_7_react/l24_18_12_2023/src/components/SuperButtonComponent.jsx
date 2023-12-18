import React from "react";

function SuperButtonComponent(props) {
  return <button className={props.className}>{props.buttonName}</button>;
}

export default SuperButtonComponent;
