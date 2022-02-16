import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { ExposureApi } from "../api";

/**
 * Fetch All Users React Hook
 * @returns
 */
export const useExposure = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  const [params] = useSearchParams();

  const fetch = useCallback(async () => {
    setLoading(true);
    const result = await ExposureApi.getAll(params);
    console.log(result.data);
    // setData(result.data);
    setData([
      {
        name: "testing",
        county: "county",
        state: "state",
        chemicals: [
          { name: "chemical", healthEffects: "death", exposure: "air" },
        ],
      },
    ]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, fetch };
};
