import React from "react";
import Card from "./Card";
import Data from "./Sdata";

const Services = () => {
    return (
        <>
            <div className="my-5">
                <h2 className="fw-semibold text-center">Our Services</h2>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Data.map((value, index) => {
                                    return <Card key={index} imgSrc={value.imgsrc} cardTitle={value.title} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;