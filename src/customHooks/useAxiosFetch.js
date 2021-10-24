import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosFetch = (method = "", url = "", data = {}, headers = {}) => {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // let unmounted = false;
    // let source = axios.CancelToken.source().token;
    // if (method === "get") {
    getData();
    // }
    // if (method === "post") {
    //   console.log("post hit");
    // }

    // return function () {
    //   unmounted = true;
    //   axios.CancelToken.source().cancel("Cancelling in cleanup");
    // };
  }, []);

  const getData = async () => {
    const config = {
      method: method,
      data: data,
      headers: headers,
      // cancelToken: source,
    };

    await axios(url, config)
      .then((res) => {
        // if (!unmounted) {
        setResponseData(res.data);
        // console.log(res.data);
        setIsLoading(false);
        setErrorMessage(null);
        // }
      })
      .catch((err) => {
        // if (!unmounted) {
        console.log(err);
        setErrorMessage(err.message);
        // }
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          console.log("another error happened:" + err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { responseData, isLoading, errorMessage };
};

export default useAxiosFetch;
