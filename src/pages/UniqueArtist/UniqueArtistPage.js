import { useParams } from "react";
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import styles from "./UniqueArtist.module.scss";
import useFetch from "../../customHooks/Fetch/useAxiosFetch";
import UniqueArtistReleaseInfo from "./UniqueArtistReleaseInfo";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

const UniqueArtistPage = () => {
  // purchased release boolean
  //TOKEN
  let token = localStorage.getItem("token");
  // let { artistName } = useParams();
  const {
    responseData: releases,
    isLoading,
    errorMessage,
  } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/releases`, {
    headers: { "x-access-token": token },
  });

  return (
    <>
      <FixedNavigationSpacer />
      <section>
        {isLoading && <ComponentLoading />}
        {releases && <Loading />}
        {/* if purchased release or not - can buy button/no button */}
      </section>
    </>
  );
};

export default UniqueArtistPage;
