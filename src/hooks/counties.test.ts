import { renderHook } from "@testing-library/react-hooks";
import { CountyApi } from "../api";
import { CountyType } from "../types";

import { useCounties } from "./counties.hook";

jest.mock("../api");

const getAll = CountyApi.getAll as jest.MockedFunction<typeof CountyApi.getAll>;

describe("Hook: Use Counties", () => {
  beforeEach(() => {
    getAll.mockClear();
  });

  it("should handle resolving REST call.", () => {
    getAll.mockResolvedValue({ data: [], status: 200 });
    const { result } = renderHook(() => useCounties());

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.data).toEqual([{}, {}, {}, {}, {}]);
  });

  // it("should handle resolving REST call.", () => {
  //   const mock = { state: "VA", county: "Frederick" };
  //   getAll.mockResolvedValue({
  //     data: [mock],
  //     status: 200,
  //   });
  //   const { result } = renderHook(() => useCounties());

  //   expect(result.current.isLoading).toBeTruthy();
  //   expect(result.current.data).toEqual([mock]);
  // });

  it("should handle resolving REST call.", () => {
    const user: CountyType = {
      state: "VA",
      county: "Frederick",
    };

    getAll.mockResolvedValue({ data: [user], status: 200 });
    const { result } = renderHook(() => useCounties());

    expect(result.current.isLoading).toBeTruthy();
    // expect(result.current.data).toEqual([user]);
  });
});
