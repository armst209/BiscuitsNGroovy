import { useState, useEffect, useRef } from "react";
import FetchError from "./FetchError/FetchError";

const useFetch = (url, _options) => {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const options = useRef(_options).current;

  useEffect(() => {
    const abortController = new AbortController();
    //adding abort controller signal to options object for second fetch parameter
    const optionsWithAbortSignal = {
      ...options,
      signal: abortController.signal,
    };
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, optionsWithAbortSignal);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setIsLoading(false);
        setResponseData(data);
        setErrorMessage(null);
      } catch (error) {
        if (error.name === "AbortError") {
          //for testing fetch abort and component unmounts
          //console.log("fetch was aborted");
        } else {
          setIsLoading(false);
          setErrorMessage(<FetchError />);
          console.log(error.name);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, options]);

  return { responseData, isLoading, errorMessage };
};

export default useFetch;
