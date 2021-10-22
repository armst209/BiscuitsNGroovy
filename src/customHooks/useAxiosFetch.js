import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosFetch = (method = "", url = "", data = {}, headers = {}) => {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();
    const config = {
      method: method,
      url: url,
      data: data,
      headers: headers,
      cancelToken: source.token,
    };

    axios(config)
      .then((res) => {
        if (!unmounted) {
          setResponseData(res);
          setIsLoading(false);
          setErrorMessage(null);
        }
      })
      .catch((err) => {
        if (!unmounted) {
          console.log(err);
          setErrorMessage(err.message);
          setIsLoading(false);
        }
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          console.log("another error happened:" + err.message);
        }
      });

    return function () {
      unmounted = true;
      source.cancel("Cancelling in cleanup");
    };
  }, []);

  return { responseData, isLoading, errorMessage };
};

export default useAxiosFetch;
