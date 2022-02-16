import axios from "axios";

import { api } from "./nearby.api";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Rest Api: Nearby Api - Get All", () => {
  const params = new URLSearchParams();
  beforeEach(() => {
    mockedAxios.get.mockClear();
  });

  it("should handle normal api call.", async () => {
    mockedAxios.get.mockResolvedValue({ status: 200, data: [] });

    const { data, status } = await api.getAll(params);

    expect(data).toBeDefined();
    expect(status).toEqual(200);
  });

  it("should handle invalid api call.", async () => {
    mockedAxios.get.mockRejectedValue({ status: 400, data: "error" });

    const { data, status } = await api.getAll(params);

    expect(data).toEqual([]);
    expect(status).toEqual(400);
  });
});