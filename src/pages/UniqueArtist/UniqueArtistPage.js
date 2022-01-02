import { useParams } from "react";
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";

import useFetch from "../../customHooks/Fetch/useAxiosFetch";
import UniqueArtistReleaseInfo from "./UniqueArtistReleaseInfo";

const UniqueArtistPage = () => {
  // purchased release boolean
  //TOKEN
  let token = localStorage.getItem("token");
  let { artistName } = useParams();
  const {
    responseData: release,
    isLoading,
    errorMessage,
  } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/releases/${artistName}`, {
    headers: { "x-access-token": token },
  });

  return (
    <section>
      {isLoading && <ComponentLoading />}
      {release && <UniqueArtistReleaseInfo releaseData={release} />}
      {/* if purchased release or not - can buy button/no button */}
    </section>
  );
};

export default UniqueArtistPage;
