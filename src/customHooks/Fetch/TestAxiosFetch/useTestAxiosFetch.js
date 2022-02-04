

//react imports
import axios from "axios";
import { useState, useEffect, useRef } from "react";

//component imports
import FetchError from "../FetchError/FetchError";

// interface AxiosConfigRequestObjectWithOptionalParameters {
//   method:undefined;
//   headers?: object;
// }


const useTestAxiosFetch = (_requestData) => {
  
  //state hooks
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMessageComponent, setErrorMessageComponent] = useState("");

  //useRef for creating component instanced mutable object
  const requestData = useRef(_requestData).current;

  //success & failure functions

  const handleSuccess = (res, stateToBeUsed)=>{

  };

   const handleFailure = (error, stateToBeUsed)=>{

    console.log(error);

   }

  useEffect(() => {

    //axios cancel token
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    //adding cancel token to config object
    let config = {...requestData, cancelToken:source.token};

    //status error handling, promise will only resolve if status is less than 500
    config = {...config, validateStatus:(status)=> status < 500}


    const fetchData = async () => {
      
      setIsLoading(true);

      //assigning uppercased request method to variable
      const methodToUpperCase = requestData.method.toUpperCase();

      switch(methodToUpperCase){

      case "GET":
      try {
        const response = await axios(config);

        if (response.statusText !== "OK") {
          throw new Error(`$Status: ${response.status} StatusText: ${response.statusText}`);
        }
       
        //assigning response data to variable
        const data = response.data;

        setIsLoading(false);
        setResponseData(data);
        setErrorMessage(null);

      } catch (error) {
        if (axios.isCancel(error)) {
          //for testing axios cancel token and component unmounts
          console.log("Axios request cancelled");
        } else {

          setIsLoading(false);
          setErrorMessageComponent(<FetchError errorMessage={error}/>);
          setErrorMessage(error);
          console.error(error);
        }
      }
        break;

        case "POST":
        try{
          const response = await axios(config);

          if (response.statusText !== "OK") {
            throw new Error(`$Status: ${response.status} StatusText: ${response.statusText}`);
          }

          setIsLoading(false);
          setIsSuccess(true);

          const data = response.data;
          setResponseData(data);
          
        }catch(error){
          setIsLoading(false);
          setIsSuccess(false);
          console.log(error);
        };
          break;

        default:
          break;
      }
     
    };

    fetchData();

    return () => {
      source.cancel("Axios request cancelled");
    };
  }, [requestData]);

  return { responseData, isLoading, errorMessage, errorMessageComponent, handleFailure, handleSuccess };
};

export default useTestAxiosFetch;
