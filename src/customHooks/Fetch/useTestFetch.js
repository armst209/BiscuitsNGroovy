// import { useState, useEffect, useRef, useCallback } from "react";

// const useFetch = (url, _options) => {
//   const [responseData, setResponseData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const options = useRef(_options).current;
//   const abortController = new AbortController();

//   const optionsWithAbortSignal = {
//     ...options,
//     signal: abortController.signal,
//   };
//   const fetchData = async () => {
//     //adding abort controller signal to options object for second fetch parameter

//     setIsLoading(true);
//     try {
//       const response = await fetch(url, optionsWithAbortSignal);
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       const data = await response.json();
//       setIsLoading(false);
//       setResponseData(data);
//       setErrorMessage(null);
//     } catch (error) {
//       if (error.name === "AbortError") {
//         //for testing fetch abort and component unmounts
//         //console.log("fetch was aborted");
//       } else {
//         setIsLoading(false);
//         setErrorMessage("Can't fetch data");
//         console.log(error.messsage);
//       }
//     }

//     useEffect(() => {
//       fetchData();

//       return () => {
//         abortController.abort();
//       };
//     }, [url, options]);

//     return { responseData, isLoading, errorMessage };
//   };
// };
// // export default useFetch;
