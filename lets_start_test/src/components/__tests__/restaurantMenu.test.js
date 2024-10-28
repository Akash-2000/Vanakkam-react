import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Provider } from "react-redux";

import Restaurant from "../Restaurant";
import RESTAURANT_MENU_LIST from "../mocks/restaurantmenu.json";
import reduxstore from "../../redux/store";
import Header from "../Header";
import Cart from "../Cart";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

//mock fetch
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU_LIST);
    },
  });
});

describe("Restaurant Component", () => {
  beforeEach(() => {
    // Set the mock restaurant ID
    useParams.mockReturnValue({ restaurantId: "388712" });
  });

  it("should render restaurant menu correctly", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={reduxstore}>
            <Header />
            <Restaurant />
            <Cart />
          </Provider>
        </BrowserRouter>,
      ),
    );

    // Find an element in the restaurant menu to confirm rendering
    const isRecommended = await screen.findByText("Recommended - (20)"); // adjust alt text to match expected

    fireEvent.click(isRecommended);
    //get all restaurantItemCard
    const isItemCardPresent = await screen.findAllByTestId(
      "myRestaurantItemCard",
    );

    console.log(isItemCardPresent.length);

    const addButton = screen.getAllByText("ADD +");

    const beforeCartUpdate = screen.getByText("cart - 0");

    fireEvent.click(addButton[0]);

    //is header updated
    const isCartUpdated = screen.getByText("cart - 1");

    console.log(screen.getAllByTestId("myRestaurantItemCard").length);

    expect(isCartUpdated).toBeInTheDocument(); // Ensure that menu items are rendered

    //cart-updated
    expect(screen.getAllByTestId("myRestaurantItemCard").length).toBe(21);

    //click the clear cart
    const clearCart = screen.getByTestId("clear-button");

    // Fire event
    fireEvent.click(clearCart);

    //after clear cart
    expect(screen.getAllByTestId("myRestaurantItemCard").length).toBe(20);
  });
});
