import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserApi } from "../../api";

import { HomePage } from "./home.page";

jest.mock("../../api", () => ({ UserApi: { getAll: jest.fn() } }));

const getAll = UserApi.getAll as jest.MockedFunction<typeof UserApi.getAll>;

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

    const search = await screen.findByText("Welcome to Demo App");
    expect(search).toBeInTheDocument();
  });
});
