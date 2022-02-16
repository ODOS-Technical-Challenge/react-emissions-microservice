import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CountyApi } from "../../api";

import { HomePage } from "./home.page";
import userEvent from "@testing-library/user-event";

jest.mock("../../api", () => ({ CountyApi: { getAll: jest.fn() } }));

const getAll = CountyApi.getAll as jest.MockedFunction<typeof CountyApi.getAll>;

describe("Application Page: Search Page", () => {
  beforeEach(() => {
    getAll.mockResolvedValue({ data: [], status: 200 });
  });

  it("should handle rendering the component.", async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  it("should handle the 'on search' action.", async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const input = await screen.findByRole("textbox");

    userEvent.type(input, "20121");
    fireEvent.keyDown(input, { key: "Enter" });
  });
});
