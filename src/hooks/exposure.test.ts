import { renderHook } from "@testing-library/react-hooks";
import { useSearchParams } from "react-router-dom";
import { ExposureApi } from "../api";

import { useExposure } from "./exposure.hook";

jest.mock("../api", () => ({
  ExposureApi: { getAll: jest.fn() },
}));
jest.mock("react-router-dom");

const getAll = ExposureApi.getAll as jest.MockedFunction<
  typeof ExposureApi.getAll
>;

describe("Hook: Use Exposure", () => {
  beforeEach(() => {
    getAll.mockClear();

    (
      useSearchParams as jest.MockedFunction<typeof useSearchParams>
    ).mockReturnValue([new URLSearchParams(""), jest.fn()]);
  });

  it("should handle being called.", () => {
    getAll.mockResolvedValue({ data: [], status: 200 });
    const { result } = renderHook(() => useExposure());

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.data).toEqual([]);
  });

  it("should handle resolving REST call.", () => {
    const user: any = {};

    getAll.mockResolvedValue({ data: [user], status: 200 });
    const { result } = renderHook(() => useExposure());

    expect(result.current.isLoading).toBeTruthy();
  });
});
