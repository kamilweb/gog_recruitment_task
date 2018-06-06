import React from "react";
import Games from "./Games";

const Main = () => {
  return (
    <div className="container">
      <h2 className="main__title">GAME OF THE WEEK</h2>
      <img className="main__bg" src="images/main_bg.jpg" alt="Witcher" />
      <Games />
    </div>
  );
};
export default Main;
