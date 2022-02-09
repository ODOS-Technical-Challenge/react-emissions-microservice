import axios from "axios";
import { ApiUtils } from "../utils";

export async function getAllExposure(params: URLSearchParams) {
  console.log("Parameters", params);
  //   const url = `${BACKEND_URL}/user/all/?${params.toString()}`;
  const url = "https://my.api.mockaroo.com/person.json?key=7d32a3f0";

  try {
    const { status, data } = await axios.get<any[]>(url);

    return { data, status };
  } catch (error) {
    return ApiUtils.handle<any[]>(error, []);
  }
}

/**
 * REST exposure Api Resource
 */
export const api = {
  getAll: getAllExposure,
};
