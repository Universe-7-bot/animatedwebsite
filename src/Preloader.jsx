import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Preloader = () => {
    return (
        <>
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="col-md-12">
                        <ThreeCircles
                            height="100"
                            width="100"
                            color="#4fa94d"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="three-circles-rotating"
                            outerCircleColor=""
                            innerCircleColor="#3cc4df"
                            middleCircleColor="#c01cd6"
                        />
                        <p className="mt-2 text-secondary fw-semibold fs-4">Loading...</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preloader;