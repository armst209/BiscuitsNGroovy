import { useState, useEffect, useRef } from "react";

const useAxiosFetch = (url, _options) => {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const options = useRef(_options).current;
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setIsLoading(false);
        setResponseData(data);
        setErrorMessage(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch was aborted");
        } else {
          setIsLoading(false);
          setErrorMessage("Can't fetch data");
          console.log(error.messsage);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { responseData, isLoading, errorMessage };
};

export default useAxiosFetch;
