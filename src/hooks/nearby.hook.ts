import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FacilityType } from "../types";
import { NearbyApi } from "../api";

/**
 * Fetch All Nearby React Hook
 * @returns
 */
export const useNearby = () => {
  const [data, setData] = useState<FacilityType[]>([]);
  const [isLoading, setLoading] = useState(false);

  const [params] = useSearchParams();

  const fetch = useCallback(async () => {
    setLoading(true);
    const result = await NearbyApi.getAll(params);
    setData(result.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, fetch };
};
