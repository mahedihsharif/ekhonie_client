import { useEffect, useState } from "react";

const useAsync = (apiFunction) => {
  const [data, setData] = useState(null);
  const [loading, useLoading] = useState(true);
  const [error, useError] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await apiFunction().then((res) => setData(res.data.data));
      useLoading(false);
    } catch (err) {
      useLoading(false);
      useError("something went to wrong!");
    }
  };

  return {
    data,
    loading,
    error,
  };
};

export default useAsync;
