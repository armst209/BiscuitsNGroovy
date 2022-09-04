import axios from "axios";

export const getReleases = (url) => {
  const response = axios({
    method: "GET",
    url: `http://localhost:3000/${url}`,
  });

  return response;
};
