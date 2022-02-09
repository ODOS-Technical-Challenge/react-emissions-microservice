import React from "react";
import { render, screen } from "@testing-library/react";
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
    render(
      <BrowserRouter>
        <EngineerPage />
      </BrowserRouter>
    );

    const search = await screen.findByText("Exposure Type");
    expect(search).toBeInTheDocument();
  });
});
