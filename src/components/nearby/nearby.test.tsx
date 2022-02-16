import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { NearbyApi } from "../../api";

import { NearbyPage } from "./nearby.page";

jest.mock("../../api");

const getAll = NearbyApi.getAll as jest.MockedFunction<typeof NearbyApi.getAll>;

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

    const inputs = await screen.findAllByRole("textbox");

    inputs.forEach((search) => {
      expect(search).toBeInTheDocument();
    });
  });

  it("should handle rendering the component.", async () => {
    getAll.mockResolvedValue({
      data: [
        {
          name: "Here",
          county: "Fairfax",
          state: "VA",
          city: "",
          street: "",
          zipCode: 20121,
          latitude: 1,
          longitude: 1,
          chemicals: [
            {
              name: "Iron",
              healthEffects: "none",
            },
          ],
        },
      ],
      status: 200,
    });
    render(
      <BrowserRouter>
        <NearbyPage />
      </BrowserRouter>
    );

    const inputs = await screen.findAllByRole("textbox");

    inputs.forEach((search) => {
      expect(search).toBeInTheDocument();
    });
  });

  it("should handle user interaction: 'search' action.", async () => {
    render(
      <BrowserRouter>
        <NearbyPage />
      </BrowserRouter>
    );

    const inputs = await screen.findAllByRole("textbox");

    inputs.forEach((search) => {
      userEvent.type(search, "query");
    });
  });

  it("should handle user interaction: 'search' action.", async () => {
    render(
      <BrowserRouter>
        <NearbyPage />
      </BrowserRouter>
    );

    const inputs = await screen.findAllByRole("textbox");
    const button = await screen.findByRole("button");

    inputs.forEach((search) => {
      userEvent.type(search, "query");
    });

    userEvent.click(button);
  });
});
