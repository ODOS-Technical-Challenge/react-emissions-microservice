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

  const fetch = useCallback(async (value?: string) => {
    setLoading(true);
    const zip = value || params.get("zip") || "";
    const result = await ExposureApi.getAll(zip);
    setData(result.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, fetch };
};
