import { useState } from "react";

const useData = (allData) => {
  const [data, setData] = useState(allData.items);
  const [loading, useLoading] = useState(allData.loader);
  const [error, useError] = useState(allData.errorMessage);

  return {
    data,
    loading,
    error,
  };
};

export default useData;
