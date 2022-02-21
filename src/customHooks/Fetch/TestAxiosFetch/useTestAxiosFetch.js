

//react imports
import { useState, useEffect, useRef } from "react";

//axios import
import axios from "axios";

//component imports
import FetchError from "../FetchError/FetchError";


const useTestAxiosFetch = (_requestData) => {

  //state hooks
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMessageComponent, setErrorMessageComponent] = useState("");

  //useRef for creating component instanced mutable object
  const requestData = useRef(_requestData).current;

  useEffect(() => {

    //axios cancel token
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    //adding cancel token to config object
    const cancelTokenWithRequestData = { ...requestData, cancelToken: source.token };

    //status error handling, promise will only resolve if status is less than 500
    const config = { ...cancelTokenWithRequestData }


    const fetchDataWithAxios = async () => {

      //loader is visible
      setIsLoading(true);

      try {
        const response = await axios(config);

        if (response.statusText !== "OK") {
          throw new Error(`$Status: ${response.status} Message: ${response.statusText}`);
        }

        //assigning response data to variable
        const data = response.data;

        //setting states if resolved
        setIsLoading(false);
        setResponseData(data);
        setErrorMessage(null);

      } catch (error) {
        if (axios.isCancel(error)) {
          //for testing axios cancel token and component unmounts
          console.log("Axios request cancelled");
        } else {

          //setting states if rejected
          setIsLoading(false);
          setErrorMessageComponent(<FetchError errorMessage={error.message} />);
          setErrorMessage(error.message);
          // console.error(error);
        }
      }
    };

    fetchDataWithAxios();

    //cleanup
    return () => {
      source.cancel("Axios request cancelled");
    };
  }, [requestData]);

  return { responseData, isLoading, errorMessage, errorMessageComponent };
};

export default useTestAxiosFetch;
