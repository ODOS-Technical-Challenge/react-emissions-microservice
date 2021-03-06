import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { ExposureApi } from "../../api";
import { EngineerPage } from "./engineer.page";

jest.mock("axios");
jest.mock("../../api", () => ({ ExposureApi: { getAll: jest.fn() } }));

const mockedAxios = axios as jest.Mocked<typeof axios>;

const getAll = ExposureApi.getAll as jest.MockedFunction<
  typeof ExposureApi.getAll
>;

const sleep = (ms: number): any => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

describe("Application Page: Engineer Page", () => {
  beforeEach(() => {
    getAll.mockResolvedValue({ data: [], status: 200 });
    mockedAxios.get.mockClear();
  });

  it("should handle rendering the component.", async () => {
    mockedAxios.get.mockResolvedValue({
      status: 200,
      data: [],
    });
    const screen = render(
      <BrowserRouter>
        <EngineerPage />
      </BrowserRouter>
    );
    const search = await screen.findByText("Exposure Type");
    expect(search).toBeInTheDocument();
  });

  it("calls setLocation", async () => {
    mockedAxios.get.mockResolvedValue({
      status: 200,
      data: [{ AQI: 33, Category: { Name: "Good" } }],
    });
    const screen = render(
      <BrowserRouter>
        <EngineerPage />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Search by zip");
    userEvent.type(input, "22031");
    userEvent.tab();
    expect(input).toBeInTheDocument();
  });

  it("calls setLocation", async () => {
    mockedAxios.get.mockResolvedValue({
      status: 200,
      data: [{ AQI: 33, Category: { Name: "Good" } }],
    });
    const screen = render(
      <BrowserRouter>
        <EngineerPage />
      </BrowserRouter>
    );
    await act(() => sleep(2500));
    const input = screen.getByPlaceholderText("Search by zip");
    userEvent.type(input, "22031");
    userEvent.tab();
    expect(input).toBeInTheDocument();
  });
});
