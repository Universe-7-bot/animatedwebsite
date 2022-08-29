import React from "react";
import { NavLink } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import wave from "./wave.svg";

const Common = (props) => {
    return (
        <>
            <section className="main d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto"> {/* using 10 columns instead of 12 */}
                            <div className="row">
                                <div className="col-md-6 d-flex justify-content-center flex-column">
                                    <h2 className="fw-semibold">{props.name}<strong className="tech"><br /> TechnicalTalks</strong></h2>
                                    <h3 className="my-3 text-secondary">We provide <span className="text-danger fw-semibold">
                                        <Typewriter words={["Web Development", "App Development", "Marketing", "Communication Skills"]} loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
                                    </span> </h3>
                                    <h6 className="my-3 text-secondary">We are team of talented developers making websites</h6>
                                    <div className="mt-2">
                                        <NavLink className="btn  rounded-5 shadow-lg text-info border-info fw-semibold" to={props.visit}>{props.btnName}</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <img src={wave} alt="myPic" />
        </>
    );
};

export default Common;