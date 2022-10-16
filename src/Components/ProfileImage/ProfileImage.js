import React from "react";
import profilePic from "D:/dribble/src/Image/profilePic.png";
import "./ProfileImage.css";

const ProfileImage = () => {
  return (
    <>
      <img
        title="Eren ツ"
        src={profilePic}
        className="photo"
        alt="Eren ツ"
        width="48"
        height="48"
      />
    </>
  );
};

export default ProfileImage;
