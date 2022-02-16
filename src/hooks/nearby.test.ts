import { renderHook } from "@testing-library/react-hooks";
import { useSearchParams } from "react-router-dom";
import { NearbyApi } from "../api";

import { useNearby } from "./nearby.hook";

jest.mock("../api");
jest.mock("react-router-dom");

const getAll = NearbyApi.getAll as jest.MockedFunction<typeof NearbyApi.getAll>;

describe("Hook: Use Exposure", () => {
  beforeEach(() => {
    getAll.mockClear();

    (
      useSearchParams as jest.MockedFunction<typeof useSearchParams>
    ).mockReturnValue([new URLSearchParams(""), jest.fn()]);
  });

  it("should handle being called.", () => {
    getAll.mockResolvedValue({ data: [], status: 200 });
    const { result } = renderHook(() => useNearby());

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.data).toEqual([]);
  });

  it("should handle resolving REST call.", () => {
    const user: any = {};

    getAll.mockResolvedValue({ data: [user], status: 200 });
    const { result } = renderHook(() => useNearby());

    expect(result.current.isLoading).toBeTruthy();
  });
});
