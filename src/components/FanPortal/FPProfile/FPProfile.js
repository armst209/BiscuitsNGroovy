import React from "react";
import "./FPProfileStyles.scss";

function FPProfile(props) {
  let token = localStorage.getItem("token");

  if (token) {
    console.log("is authenticated");
  } else {
    props.history.push("/login");
  }
  return (
    <section id="fp-profile">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        suscipit mollitia quis! Animi dolor asperiores corrupti tenetur? Est
        libero quo aliquam dolores quas quidem minima assumenda doloribus labore
        recusandae! Asperiores?
      </p>
    </section>
  );
}

export default FPProfile;
