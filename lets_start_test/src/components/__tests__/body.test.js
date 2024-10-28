import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";

import Body from "../Body";
import RES_LIST from "../mocks/restaurantList.json";
import { BrowserRouter } from "react-router-dom";

//if we use update state in react we need to use act

//mock fetch

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_LIST);
    },
  });
});

it("should search work with input pizza", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const isSearchBarRendered = screen.getByTestId("searchInput");
  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.change(isSearchBarRendered, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("myCards");

  expect(cardsAfterSearch.length).toBe(2);
});
