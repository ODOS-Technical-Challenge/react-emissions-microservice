import axios from "axios";
import { FacilityType } from "../types";
import { ApiUtils } from "../utils";

async function getAll(params: URLSearchParams) {
  const searchZipCode = params.get("zip") || "";

  const formatted = new URLSearchParams({ searchZipCode });
  const url = `http://emissions-service.dev.odos-tc.demoriva.com:8080/api/v1/facility?${formatted.toString()}`;

  try {
    const { data, status } = await axios.get<FacilityType[]>(url);

    return { data, status };
  } catch (error) {
    return ApiUtils.handle<FacilityType[]>(error, []);
  }
}

export const api = {
  getAll,
};
