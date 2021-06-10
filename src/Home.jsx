import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from '../src/images/1.png'

const Home = () => {
  return (
    <>
      <Common
        name="Hi ! Myself"
        imgsrc={ web }
        personal="I am a front-end Developer"
        visit="/projects"
        btname="Know More"
      />
    </>
  );
};
export default Home;
