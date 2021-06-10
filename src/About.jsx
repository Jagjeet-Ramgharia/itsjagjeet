import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "../src/images/Jagjeet-Ramgharia.PNG";

const About = () => {
  return (
    <>
      <Common
        name="Know More about "
        imgsrc={web}
        visit="/contact"
        btname="Know More"
        pdata="I am a Web Developer with enthusiasmand focused front-end Development.I am passionate about building scalable software and creating effective solutions"

      />
    </>
  );
};
export default About;
