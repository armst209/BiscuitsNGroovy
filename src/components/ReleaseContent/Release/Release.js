//react imports
import { useParams } from "react-router-dom";
import useAxiosFetch from "../../../hooks/Fetch/TestAxiosFetch/useTestAxiosFetch";
import NotFound from "../../../pages/NotFound/NotFound";

//component imports
import ComponentLoading from "../../Loading/Component/ComponentLoading";
import ReleaseContainer from "./ReleaseContainer/ReleaseContainer";

const Release = () => {
  //token
  let token = localStorage.getItem("token");

  //getting id from url parameter
  let { releaseId } = useParams();

  //useFetch
  const {
    responseData: releases,
    isLoading,
    errorMessage,
  } = useAxiosFetch({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/releases/${releaseId}/release`,
    headers: { "x-access-token": token },
  });

  return (

    <section className="_main_section">
      {isLoading && <ComponentLoading />}
      {/* if release is null or not found, redirects to Not Found component */}
      {!errorMessage ? (
        releases && <ReleaseContainer release={releases.releases} />
      ) : (
        <NotFound />
      )}
    </section>

  );
};

export default Release;
