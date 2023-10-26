import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  let fetchedData = async () => {
    try {
      setIsLoading(true);
      let fetchRequest = await fetch(url);
      let fetchResponse = await fetchRequest.json();
      setData(fetchResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchedData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
