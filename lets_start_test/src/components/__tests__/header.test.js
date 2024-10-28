import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../Header";
import { Provider } from "react-redux";
import reduxstore from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { userContext } from "../context/userContext";

describe("header component test cases", () => {
  it("should render correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={reduxstore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    //assertion
    expect(loginButton).toBeInTheDocument();
  });
  it("should change login to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={reduxstore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logOutButton = screen.getByRole("button", { name: "Logout" });

    expect(logOutButton).toBeInTheDocument();
  });
});
