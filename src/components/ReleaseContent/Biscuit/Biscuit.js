//react imports
import { useParams } from "react";
import useFetch from "../../../customHooks/Fetch/useAxiosFetch";

//component imports
import BiscuitContainer from "./BiscuitContainer/BiscuitContainer";

const Biscuit = () => {
  //!!!!!using urlParams to get id and sending it through api call and receiving single release object!!!
  // purchased release boolean

  //token
  let token = localStorage.getItem("token");

  //getting id from url parameter
  let { biscuitId } = useParams();

  //useFetch
  const {
    responseData: release,
    isLoading,
    errorMessage,
  } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/library`, {
    headers: { "x-access-token": token },
    //take in a release id
  });

  return (
    <>
      <FixedNavigationSpacer />
      <section>
        {isLoading && <ComponentLoading />}
        {errorMessage === null
          ? release && <BiscuitContainer release={release} />
          : errorMessage}
      </section>
    </>
  );
};
export default Biscuit;