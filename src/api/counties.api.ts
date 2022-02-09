import axios from "axios";
import { CountyType } from "../types";
import { ApiUtils } from "../utils";

async function getAll() {
  const url = "https://my.api.mockaroo.com/city_state.json?key=7d32a3f0";

  try {
    const { status, data } = await axios.get<CountyType[]>(url);

    return { data, status };
  } catch (error) {
    return ApiUtils.handle<any[]>(error, []);
  }
}

export const api = {
  getAll,
};
