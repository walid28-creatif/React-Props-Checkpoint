import React from "react";
import "./Profile.css";
const Profile = ({ fullName, bio, profession, photop, handleName }) => {
  return (
    <div>
      <p onClick={() => handleName("walid")}> click her</p>
      <h1>{fullName}</h1>
      <h3>{profession}</h3>
      <h2>{bio}</h2>
      <img src={photop} alt="az" />
    </div>
  );
};
Profile.defaultProps = {
  fullName: "inconnue",
  bio: "nothing",
  profession: "notput",
};

export default Profile;
