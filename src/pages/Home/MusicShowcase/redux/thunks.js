import axios from "axios";
import { token } from "../../../../common/utils/UtilityVariables.js";

export const fetchMusicShowcaseReleases = ({url}) => {
  return axios({
    method: "GET",
    url: `${import.meta.env.VITE_BACKEND_URL}/${url}`,
    headers: { "x-access-token": token },
  });
};
