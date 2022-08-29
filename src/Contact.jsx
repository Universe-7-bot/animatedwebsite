import React, { useState } from "react";
import contact from "./contactUs.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [data, setData] = useState({
        fname: "",
        mobile: "",
        email: "",
        msg: ""
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return { ...preVal, [name]: value };
        });
    };

    const formSubmit = (event) => {
        event.preventDefault(); //page not refresh

        if (data.fname === "" || data.email === "" || data.mobile === "" || data.msg === "") {
            // alert("Please fill every field😥");
            toast.error("Please fill all the fields😥");
        }
        else {
            // alert(`${data.fname} ${data.mobile} ${data.email} ${data.msg}`);
            toast.success("form submitted successfully😃");
            setData({
                fname: "",
                mobile: "",
                email: "",
                msg: ""
            });
        }
    };

    return (
        <>
            <div className="my-5">
                <h2 className="text-center fw-bold">Contact US</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 my-3">
                                <form onSubmit={formSubmit}>
                                    <div className="form-floating p-2">
                                        <input type="name" name="fname" value={data.fname} onChange={inputEvent} className="form-control" id="floatingInput" placeholder="Enter full name" />
                                        <label for="floatingInput">Full Name</label>
                                    </div>
                                    <div className="form-floating p-2">
                                        <input type="number" name="mobile" value={data.mobile} onChange={inputEvent} className="form-control" id="floatingInput" placeholder="Enter mobile no" />
                                        <label for="floatingInput">Mobile No</label>
                                    </div>
                                    <div className="form-floating p-2">
                                        <input type="email" name="email" value={data.email} onChange={inputEvent} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating p-2">
                                        <textarea className="form-control" name="msg" value={data.msg} onChange={inputEvent} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </div>
                                    <div className="p-2">
                                        <button type="submit" className="btn btn-outline-info fw-semibold shadow">Submit</button>
                                    </div>
                                </form>
                                <ToastContainer />
                            </div>
                            <div className="col-md-6">
                                <img src={contact} className="img-fluid animated" alt="contact" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;