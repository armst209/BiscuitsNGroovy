import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import useFetch from "../../customHooks/Fetch/useAxiosFetch";
import UniqueArtistReleaseInfo from "./UniqueArtistReleaseInfo";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";

const UniqueArtistPage = () => {
  // purchased release boolean
  //TOKEN
  let token = localStorage.getItem("token");
  // let { artistName } = useParams();
  const {
    responseData: releases,
    isLoading,
    errorMessage,
  } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/library`, {
    headers: { "x-access-token": token },
  });

  return (
    <>
      <FixedNavigationSpacer />

      <section>
        {isLoading && <ComponentLoading />}
        {releases && <UniqueArtistReleaseInfo releases={releases} />}
        {/* {errorMessage} */}
        {/* if purchased release or not - can buy button/no button */}
      </section>
    </>
  );
};

export default UniqueArtistPage;
