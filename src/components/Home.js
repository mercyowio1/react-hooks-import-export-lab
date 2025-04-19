import React from "react";
import { username, city, image } from "../data/user"; // Adjust the path accordingly

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
      <img src={image} alt="Profile" />
    </div>
  );
}

export default Home;
