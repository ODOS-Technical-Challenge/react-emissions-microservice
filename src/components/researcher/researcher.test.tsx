import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ExposureApi } from "../../api";

import { ResearcherPage } from "./researcher.page";
import userEvent from "@testing-library/user-event";

jest.mock("../../api", () => ({ ExposureApi: { getAll: jest.fn() } }));

const getAll = ExposureApi.getAll as jest.MockedFunction<
  typeof ExposureApi.getAll
>;

describe("Application Page: Search Page", () => {
  beforeEach(() => {
    getAll.mockResolvedValue({ data: [], status: 200 });
  });

  it("should handle rendering the component.", async () => {
    render(
      <BrowserRouter>
        <ResearcherPage />
      </BrowserRouter>
    );

    const search = await screen.findByText("Search by Chemicals");
    expect(search).toBeInTheDocument();
  });

  it("calls submit", async () => {
    const screen = render(
      <BrowserRouter>
        <ResearcherPage />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Search by chemical");
    userEvent.type(input, "22031");
    userEvent.tab();
    expect(input).toBeInTheDocument();
  });
});
