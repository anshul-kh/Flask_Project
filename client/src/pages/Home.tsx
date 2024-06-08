import React from "react";
import { NavBar,Hero,Sect_1 } from "../components";

const Home = () => {
  return (
    <div className="w-screen min-h-screen bg-flash_white">
      <NavBar />
      <Hero/>
      <Sect_1/>
    </div>
  );
};

export default Home;
