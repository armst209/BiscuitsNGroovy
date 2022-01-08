import { useParams } from "react";
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import styles from "./UniqueArtist.module.scss";
import useFetch from "../../customHooks/Fetch/useAxiosFetch";
import UniqueArtistReleaseInfo from "./UniqueArtistReleaseInfo";

const UniqueArtistPage = () => {
  // purchased release boolean
  //TOKEN
  let token = localStorage.getItem("token");
  // let { artistName } = useParams();
  const {
    responseData: release,
    isLoading,
    errorMessage,
  } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/releases`, {
    headers: { "x-access-token": token },
  });

  // let singleRelease = release.filter((release) => {
  //   return release.id === 29;
  // });
  console.log(release);

  return (
    <section>
      {isLoading && <ComponentLoading />}
      {release && <UniqueArtistReleaseInfo release={release} />}
      {/* if purchased release or not - can buy button/no button */}
    </section>
  );
};

export default UniqueArtistPage;
