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

const setup = () => {
  const utils = render(
    <BrowserRouter>
      <EngineerPage />
    </BrowserRouter>
  );
  const input = utils.getByPlaceholderText("Search by zip");
  const options = utils.getByText("Exposure Type");
  return {
    input,
    options,
    ...utils,
  };
};

describe("Application Page: Search Page", () => {
  beforeEach(() => {
    getAll.mockResolvedValue({ data: [], status: 200 });
  });

  it("should handle rendering the component.", async () => {
    const screen = setup();
    const search = await screen.findByText("Exposure Type");
    expect(search).toBeInTheDocument();
  });

  it("calls setLocation", async () => {
    const screen = setup();
    userEvent.type(screen.input, "22031");
    userEvent.click(screen.options);
    expect(screen.input).toBeInTheDocument();
  });
});
