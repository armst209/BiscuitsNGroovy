import axios from "axios";
import { token } from "@utils/UtilityVariables.js";

export const fetchMusicShowcaseReleases = () => {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/releases`,
    headers: { "x-access-token": token },
  });
};
