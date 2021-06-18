import axios from "axios";
import { React } from "react";
import "./FPHomePageStyles.scss";

function FPHomePage(props) {
  //1. Get promise of releases
  //2 Loop through release object
  /* 3. Each object has a uniqueID,
  <div onCLick() = shows Album Review component>
    <Album Cover Image/>
    <Album Review component/> = hidden
  </div>
  */
  //Create hooks for properties and triggers
  //5. Pass down properties through props to Album Review component specific to uniqueID

  const token = localStorage.getItem("token");
  const baseURL =
    "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";
  const handleLibrarySuccess = (res) => {
    console.log(res);
  };

  const handleLibraryFailure = (err) => {
    console.log(err);
  };

  const handleBrowseSuccess = (res) => {
    console.log(res.data.releases[0].price);
  };

  const handleBrowseFailure = (err) => {
    console.log(err);
  };
  //Request for Library
  axios({
    method: "get",
    url: `${baseURL}/users/releases`,
    token: token,
    //need to get individual users ID through request to show unique library/purchases
    // data: { token: token },
  })
    .then((res) => {
      handleLibrarySuccess(res);
    })
    .catch((err) => {
      handleLibraryFailure(err);
    });

  //Request for Browse
  axios({
    method: "get",
    url: `${baseURL}/releases`,
    headers: {
      "x-access-token": token,
    },
    //need to get individual users ID through request to show unique library/purchases
    // data: { token: token },
  })
    .then((res) => {
      handleBrowseSuccess(res);
    })
    .catch((err) => {
      handleBrowseFailure(err);
    });

  return (
    <section id="fp-homepage">
      <div id="gallery"></div>
      <h1>Your Library</h1>

      <div className="library-select">
        <div onClick={() => props.setTrigger(true)}>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </div>
      {/* <Suspense>
        <LibrarySwiper />
      </Suspense> */}

      <h1>Browse</h1>

      <div className="browse-select">{}</div>
      {/* <Suspense>
        <LibrarySwiper />
      </Suspense> */}
    </section>
  );
}

export default FPHomePage;
