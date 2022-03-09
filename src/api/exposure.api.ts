import axios from "axios";
import { FacilityType } from "../types";
import { ApiUtils } from "../utils";

export async function getAllExposure(searchZipCode: string) {
  const formatted = new URLSearchParams({ searchZipCode });
  const url = `http://emissions-service.dev.odos-tc.demoriva.com:8080/api/v1/facility?${formatted.toString()}`;

  try {
    const { data, status } = await axios.get<FacilityType[]>(url);

    return { data, status };
  } catch (error) {
    return ApiUtils.handle<FacilityType[]>(error, []);
  }
}

/**
 * REST exposure Api Resource
 */
export const api = {
  getAll: getAllExposure,
};
