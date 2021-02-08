import "./App.css";
import React from "react";
import Profile from "./Profile/Profile";
const handleName = (name) => {
  alert(` welcome ${name}`);
};
const App = () => {
  let image = "https://static.toiimg.com/photo/76729750.cms";
  return (
    <div>
      <Profile
        fullName="Azzouzi MOhamed WAlid"
        bio="fitness , football"
        profession="ingénieur mécatronique, j'ai fait une reconversion vers l'information en ce moment en train de faire une formation fullstack js chez gomycode"
        photop={image}
        handleName={handleName}
      />
    </div>
  );
};
export default App;
