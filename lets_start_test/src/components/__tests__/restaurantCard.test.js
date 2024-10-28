import { render, screen } from "@testing-library/react";

import MOCK_DATA from "../mocks/restaurant.json";
import HIGHER_ORDER_MOCK_DATA from "../mocks/restaurantHigherOrder.json";
import { Card, withPromotedLabel } from "../Card";

import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//instead of using props we use mock data
it("shoul render correctly", () => {
  render(
    <BrowserRouter>
      <Card data={MOCK_DATA} />
    </BrowserRouter>,
  );

  const isHeadingRendered = screen.getByText("Shri Ramanaas");

  //assertion
  expect(isHeadingRendered).toBeInTheDocument();
});

//test for higher order componsent
it("should render higher order components", () => {
  let HigherOrderComponent = withPromotedLabel(Card);
  render(
    <BrowserRouter>
      <HigherOrderComponent data={HIGHER_ORDER_MOCK_DATA} />
    </BrowserRouter>,
  );
  const isRendered = screen.getByText("Promoted");

  //assertion
  expect(isRendered).toBeInTheDocument();
});
