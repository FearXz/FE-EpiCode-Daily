// Vogliamo testare in app la presenza di un titolo h1 con un certo testo all'interno

// cominciamo con l'importare due elementi fondamentali:
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

// normalmente i test li inseriremo in dei "raccoglitori" di test specifici, chiamati anche "suites"
// creiamo una suite di test con il metodo "describe" di jest , le daremo il titolo di "Correctly mounted h1"

// sequenza di passaggi per effettuare un test completo:
// 1) Renderizzazione del componente da testare (nel Virtual DOM)
// 2) L’individuazione degli elementi con cui interagire
// 3) L’esecuzione dell’interazione (se prevista)
// 4) Il controllo e l’analisi dei risultati ottenuti rispetto a quelli desiderati

describe("Is h1 mounting correctly h1", () => {
  // qui dentro andranno inseriti tutti i test di questa suite
  // noi vogliamo cominciare con un test che ci verifichi la presenza dell'h1

  // test() o it() fanno la stessa cosa, con it() abbiamo una sintassi più colloquiale che ci permette di avere un codice più leggibile e "umano"
  it("mounts the h1 correctly", () => {
    // qui dentro andremo ad eseguire gli step necessari a verificare questo funzionamento
    // 1) monto App nel virtual DOM
    render(<App />);
    // 2) vado a cercare il titolo tramite il suo contenuto testuale, così come farebbe un utente nel leggerlo.
    const heading = screen.getByText(/testing our react app/i);
    // 3) saltiamo questo step: l'interazione che non è necessaria
    // 4) verifica delle aspettative, ipotesi vs tesi
    expect(heading).toBeInTheDocument(); // mi aspetto che l'heading sia stato trovato nel virtual DOM
  });

  it("checks the unchecked status of checkbox by default", () => {
    // 1) monto App nel virtual DOM
    render(<App />);
    // 2) vado a cercare l'elemento
    const label = screen.getByLabelText(/check me/i);

    // 4) verifica delle aspettative
    expect(label).toBeInTheDocument();
    expect(label).not.toBeChecked();
  });

  it("checks wheather clicking the label activates the checkbox", () => {
    // 1) monto App nel virtual DOM
    render(<App />);
    // 2) vado a cercare l'elemento
    const label = screen.getByLabelText(/check me/i);
    const checkbox = screen.getByTestId("CHECKBOX_ID");

    // 3) interazione di tipo click
    fireEvent.click(label);

    // 4) verifica delle aspettative
    expect(checkbox).toBeInTheDocument();
  });
});
