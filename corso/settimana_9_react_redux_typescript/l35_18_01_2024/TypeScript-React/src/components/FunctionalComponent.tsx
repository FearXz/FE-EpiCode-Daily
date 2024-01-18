import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

interface FunctionalComponentProps {
  title: string;
  subtitle?: string;
}

interface myFutureObject {
  name: string;
  role: string;
}

const FunctionalComponent = ({ title, subtitle }: FunctionalComponentProps) => {
  const params = useParams();
  const location = useLocation();
  // Il location object è già perfettamente tipizzato

  console.log("LOCATION", location);
  const [counter, setCounter] = useState(0);
  //   const [myObj, setMyObj] = useState<null | { name: string, role: string }>(null);
  const [myObj, setMyObj] = useState<null | myFutureObject>(null);
  // TS si lamenterà del fatto che abbiamo inizializzato il valore di myObj a null,
  // quindi la type inference gli assegnerà sempre null come tipo e non sarà più in grado di riceverne uno diverso

  // la soluzione è informare useState che anche se inizializziamo myObj a null, questo non dovrà essere il suo unico tipo possibile

  // per farlo ci basterà passare un nuovo union type con <null | { name: string, role: string }>

  return (
    <>
      <h1>{title}</h1>
      <p>Let's see the value of params {params.id}</p>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {subtitle && <h2>{subtitle.toUpperCase()}</h2>}
      {myObj && <div>myObj is ready! Your name is: {myObj.name}</div>}
      <button onClick={() => setMyObj({ name: "Stefano", role: "Teacher" })}>Set new object</button>
    </>
  );
};

export default FunctionalComponent;
