import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ExposureApi } from "../../api";

import { EngineerPage } from "./engineer.page";

jest.mock("../../api", () => ({ ExposureApi: { getAll: jest.fn() } }));

const getAll = ExposureApi.getAll as jest.MockedFunction<
  typeof ExposureApi.getAll
>;

describe("Application Page: Search Page", () => {
  beforeEach(() => {
    getAll.mockResolvedValue({ data: [], status: 200 });
  });

  it("should handle rendering the component.", async () => {
    const screen = render(
      <BrowserRouter>
        <EngineerPage />
      </BrowserRouter>
    );
    const search = await screen.findByText("Exposure Type");
    expect(search).toBeInTheDocument();
  });

  it("calls setLocation", async () => {
    const screen = render(
      <BrowserRouter>
        <EngineerPage />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Search by zip");
    const options = screen.getByText("Exposure Type");
    userEvent.type(input, "22031");
    userEvent.click(options);
    expect(input).toBeInTheDocument();
  });
});
