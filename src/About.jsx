import React from "react";
import Common from "./Common";
// import img1 from "./img1.svg";
import about from "./AboutUs.svg";

const About = () => {
    return (
        <>
            <Common name="Welcome to About page" imgsrc={about} visit="/contact" btnName="Contact Now" />
        </>
    );
};

export default About;