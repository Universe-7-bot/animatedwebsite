import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [theme, setTheme] = useState("light-theme");

    const toggleMode = () => {
        theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto"> {/* use 10 columns and make it center */}
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand fs-4" to="/">Navbar</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* ms-auto : to make it rightmost */}
                                        <li className="nav-item mx-4">
                                            <button onClick={toggleMode} className="btn btn-outline-info shadow">Switch</button>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;