// import axios from "axios";
import React from "react";
// import { useState, useEffect } from "react";

function FPHomePage() {
  // let [releases, setReleases] = useState("");
  // const API_KEY =
  //   "Authorization: 563492ad6f91700001000001a13e5fd97c1345dea9b26801e3f21c20";
  // const URL = "https://api.pexels.com/v1/";

  // useEffect(() => {
  //   getAllReleases();
  // }, []);

  // const getAllReleases = () => {
  //   axios
  //     .get(URL)
  //     .then((res) => {
  //       setReleases(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const displayReleases = () => {
  //   if (releases.length > 0) {
  //     return releases.map((release) => {
  //       console.log(release);
  //       return (
  //         <div>
  //           <h3>{release.title}</h3>
  //           <p>{release.body}</p>
  //         </div>
  //       );
  //     });
  //   } else {
  //     return <h3>No posts yet</h3>;
  //   }
  // };

  return (
    <div>
      <div id="gallery">{/* {displayReleases()} */}</div>
      <h1>Your Library</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste eos
        veritatis facilis debitis ex excepturi quibusdam nulla eum maxime
        corporis eaque quisquam ipsum, facere nesciunt incidunt ab vel alias
        molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa similique
        eligendi, eos quasi sed architecto, atque quibusdam aliquam ratione
        officiis ex porro quo at minus fugit distinctio voluptatum veritatis
        iste.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam id
        provident nesciunt! Earum, sapiente fugit et doloremque necessitatibus
        officiis odio impedit ipsum natus culpa a unde quisquam animi, ad
        dignissimos.
      </p>
    </div>
  );
}

export default FPHomePage;
