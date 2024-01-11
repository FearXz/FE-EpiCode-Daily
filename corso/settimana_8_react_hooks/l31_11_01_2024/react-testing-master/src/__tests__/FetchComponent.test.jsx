import { fireEvent, render, screen } from "@testing-library/react";
import FetchComponent from "../components/FetchComponent";
import userEvent from "@testing-library/user-event";

describe("Correctly mounted FetchComponent", () => {
  it("creates an empty list initially", () => {
    render(<FetchComponent />);

    const listItems = screen.queryAllByTestId("listgroup-item");

    expect(listItems).toHaveLength(0);
  });

  it("populates the list after the fetch with 10 elements", async () => {
    render(<FetchComponent />);

    const listItemsComingFromFetch = await screen.findAllByTestId("listgroup-item");

    expect(listItemsComingFromFetch).toHaveLength(10);
  });

  describe("Filter behaviour", () => {
    it("returns 1 element if 'patricia' is searched", async () => {
      render(<FetchComponent />);
      const user = userEvent.setup();

      const inputField = screen.getByPlaceholderText(/cerca utente per nome/i);

      //   fireEvent.change(inputField, { target: { value: "patricia" } });
      await user.type(inputField, "patricia");

      const filteredListItems = await screen.findAllByTestId("listgroup-item");

      expect(filteredListItems).toHaveLength(1);
    });
  });
});
