import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { UserApi } from "../../api";

import { NearbyPage } from "./nearby.page";

jest.mock("../../api", () => ({ UserApi: { getAll: jest.fn() } }));

const getAll = UserApi.getAll as jest.MockedFunction<typeof UserApi.getAll>;

describe("Application Page: Search Page", () => {
  beforeEach(() => {
    getAll.mockResolvedValue({ data: [], status: 200 });
  });

  it("should handle rendering the component.", async () => {
    render(
      <BrowserRouter>
        <NearbyPage />
      </BrowserRouter>
    );

    const search = await screen.findByRole("textbox");
    expect(search).toBeInTheDocument();
  });

  it("should handle user interaction: 'search' action.", async () => {
    render(
      <BrowserRouter>
        <NearbyPage />
      </BrowserRouter>
    );

    const search = await screen.findByRole("textbox");
    userEvent.type(search, "query");
  });

  it("should handle user interaction: 'search' action.", async () => {
    render(
      <BrowserRouter>
        <NearbyPage />
      </BrowserRouter>
    );

    const search = await screen.findByRole("textbox");
    userEvent.type(search, "query");
  });
});
