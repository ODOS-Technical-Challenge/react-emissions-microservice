import { useCallback, useEffect, useState } from "react";
import { CountyType } from "../types";

import { CountyApi } from "../api";

/**
 * Fetch All Users React Hook
 * @returns
 */
export const useCounties = () => {
  const [data, setData] = useState<CountyType[]>([] as CountyType[]);
  const [isLoading, setLoading] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    const result = await CountyApi.getAll();
    // if (result.data.length) {
    setData(result.data);
    // }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, fetch };
};
