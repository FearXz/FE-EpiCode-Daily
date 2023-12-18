// un componente DEVE essere chiamato con la prima lettera maiuscola, sia dentro al file che esternamente: vedi FormGroup.jsx

import React from "react";

// const FormGroup = () => {
//   // il componente DEVE ritornare almeno un elemento JSX (e uno soltanto!)
//   return (
//     <div>
//       {/* quando abbiamo più di un elemento da ritornare dobbiamo racchiuderlo all'interno di un genitore comune,
//       in modo da ritornare un elemento singolo */}
//       <label htmlFor="test">Test label</label>
//       <input type="text" id="test" placeholder="insert your text here" />
//     </div>
//   );
// };

const FormGroup = props => (
  // il componente DEVE ritornare almeno un elemento JSX (e uno soltanto!)
  // un tag vuoto rappresenta un React.Fragment,
  // ovvero un genitore che assolve alla funzione di contenere più di un tag,
  // ritornandone uno solo dal componente (così come ci richiede React)
  <>
    {/* quando abbiamo più di un elemento da ritornare dobbiamo racchiuderlo all'interno di un genitore comune, 
      in modo da ritornare un elemento singolo */}
    <label htmlFor={props.id}>{props.content}</label>
    <input type="text" id={props.id} placeholder={props.placeholder} />
  </>
);
// il componente DEVE anche essere esportato
export default FormGroup;
