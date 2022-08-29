import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4">
                <div className="card shadow">
                    <div className="img_wrap">
                        <img src={props.imgSrc} className="card-img-top" alt="myPic" height="200" />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-semibold">{props.cardTitle}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" className="btn_style btn border-info text-info fw-bold">Join Now</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;