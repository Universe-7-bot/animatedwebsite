import React from "react";
import Common from "./Common";
// import img1 from "./img1.svg";
import landing from "./landing.svg";

const Home = () => {
    return (
        <>
            <Common name="Grow your business with" imgsrc={landing} visit="/services" btnName="Get Started" />
        </>
    );
};

export default Home;