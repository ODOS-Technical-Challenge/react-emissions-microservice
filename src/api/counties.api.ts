// import axios from "axios";
import { CountyType } from "../types";
import { ApiUtils } from "../utils";

async function getAll() {
  // const url = "https://my.api.mockaroo.com/city_state.json?key=7d32a3f0";

  // try {
  // const { status, data } = await axios.get<CountyType[]>(url);

  const data: CountyType[] = [
    {
      county: "Camden",
      state: "New Jersey",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg05TlvXiUUiaDONlHKBGRRXK8sgoQ0Or9PQ&usqp=CAU",
    },
    {
      county: "Orange",
      state: "California",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCh0ZXewcSOLyfIRUj5pLhJS_RqatP-sc_g&usqp=CAU",
    },
    {
      county: "Fairbanks",
      state: "New Jersey",
      img: "https://img.marinas.com/v2/614a3a1b6025376643b98d14518fc881ab4eb6aeb5365c822d7261e47aa50231.jpg",
    },
    {
      county: "Prince George's",
      state: "Maryland",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmcuYyUl-17q8rUSstAjL-n88kmvQmYMZv5Q&usqp=CAU",
    },
    {
      county: "Kings",
      state: "New York",
      img: "",
    },
  ];

  return { data, status: 200 };
  // } catch (error) {
  //   return ApiUtils.handle<CountyType[]>(error, []);
  // }
}

export const api = {
  getAll,
};
