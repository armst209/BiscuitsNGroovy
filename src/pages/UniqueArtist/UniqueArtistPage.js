//component imports
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import UniqueArtistReleaseInfo from "./UniqueArtistReleaseInfo";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";
//react imports
import useFetch from "../../customHooks/Fetch/useAxiosFetch";
import { useParams } from "react-router-dom";

const UniqueArtistPage = () => {
  //!!!!!using urlParams to get id and sending it through api call and receiving single release object!!!
  // purchased release boolean
  //token
  let token = localStorage.getItem("token");

  //getting id from url parameter
  let { artistId } = useParams();

  //useFetch
  const {
    responseData: releases,
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
          ? releases && <UniqueArtistReleaseInfo releases={releases} />
          : errorMessage}
      </section>
    </>
  );
};

export default UniqueArtistPage;
