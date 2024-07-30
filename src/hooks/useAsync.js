import { useEffect, useState } from "react";
import {
  getLocalStorage,
  setLocalStorage,
} from "../utils/helpers/localStorage";

const useAsync = (url, key) => {
  const [data, setData] = useState(() => getLocalStorage(key));
  const [loading, useLoading] = useState(false);
  const [error, useError] = useState("");
  useEffect(() => {
    getData();
  }, [url, key, data]);

  const getData = async () => {
    try {
      useLoading(true);
      await url().then((res) => {
        setLocalStorage(key, JSON.stringify(res.data.data));
        useLoading(false);
      });
    } catch (err) {
      useError(err);
      useLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
  };
};

export default useAsync;
