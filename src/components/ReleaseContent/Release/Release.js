//react imports
import { useParams } from "react";
import useFetch from "../../../customHooks/Fetch/useAxiosFetch";

//component imports
import FixedNavigationSpacer from "../../FixedNavigationSpacer/FixedNavigationSpacer";
import ComponentLoading from "../../Loading/Component/ComponentLoading";
import ReleaseContainer from "./ReleaseContainer/ReleaseContainer";

const Release = () => {
  //token
  let token = localStorage.getItem("token");

  //getting id from url parameter
  let { releaseId } = useParams();

  //useFetch
  const {
    responseData: release,
    isLoading,
    errorMessage,
  } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/${releaseId}`, {
    headers: { "x-access-token": token },
  });

  return (
    <>
      <FixedNavigationSpacer />
      <section>
        {isLoading && <ComponentLoading />}
        {errorMessage === null
          ? release && <ReleaseContainer release={release} />
          : errorMessage}
      </section>
    </>
  );
};

export default Release;
