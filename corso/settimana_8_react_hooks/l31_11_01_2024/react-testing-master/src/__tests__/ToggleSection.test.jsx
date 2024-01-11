import { fireEvent, render, screen } from "@testing-library/react";
import ToggleSection from "../components/ToggleSection";

describe("Correctly Mounted Toggle Section", () => {
  it("mounts the button correctly", () => {
    render(<ToggleSection />);

    const button = screen.getByText(/mostra card/i);
    expect(button).toBeInTheDocument();
  });

  it("has card image hidden by default", () => {
    render(<ToggleSection />);

    // const image = screen.getByRole("img");
    // getBy... non è il metodo adatto a verificare l'assenza di qualcosa

    const image = screen.queryByRole("img");
    expect(image).not.toBeInTheDocument();
  });

  it("checks image presence after button click", () => {
    render(<ToggleSection />);

    const button = screen.getByText(/mostra card/i);

    fireEvent.click(button);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });

  it("checks toggle functionality - image has disappeared", () => {
    render(<ToggleSection />);

    const button = screen.getByText(/mostra card/i);

    // fireEvent.click(button);
    // fireEvent.click(button);
    fireEvent.dblClick(button);

    const image = screen.queryByRole("img");

    expect(image).not.toBeInTheDocument();
  });
});
