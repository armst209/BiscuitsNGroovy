import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

const useAxiosFetch = (_options) => {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const options = useRef(_options).current;

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchData = async () => {
      //adding abort controller signal to options object for second fetch parameter
      setIsLoading(true);
      try {
        const response = await axios(options);

        //   const data = await response.json();
        setIsLoading(false);
        setResponseData(response.data);
        setErrorMessage(null);
      } catch (error) {
        if (axios.isCancel(error)) {
          //for testing fetch abort and component unmounts
          console.log("fetch was aborted");
          console.log("Request Canceled", error.message);
        } else {
          setIsLoading(false);
          setErrorMessage(error.message);
          console.log(error.messsage);
        }
      }

      // if (!response.statusText) {
      //     throw new Error(response.data);
      //   }
    };
    fetchData();

    return () => {
      source.cancel();
    };
  }, [options]);

  return { responseData, isLoading, errorMessage };
};
export default useAxiosFetch;
