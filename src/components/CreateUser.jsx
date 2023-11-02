import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateUser({ Adduser }) {
  
    const navigate = useNavigate()
    const [user, setUser] = useState([])

   

    const handleAddButton = (e) => {
        e.preventDefault();
        Adduser(user)
        navigate('/dashboard')
    }


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }


    return (
        <>
            <div className="container-fluid p-3 bg-dark text-white" id="adduser">
                <div className="row">
                    <div className="col col-sm-4 text-danger">
                        <Link to="/dashboard" className="btn btn-success">
                            Dashboard
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-3">
                    <div className="col">
                        <form className="row g-3" >
                            {/* <div className="col-md-6 d-flex gap-2 align-items-center">
                                <label htmlFor="inputName" className="form-label badge bg-secondary py-2 ">
                                    Id
                                </label>
                                <input type="number" className="form-control" id="inputId" placeholder="Enter id number"
                                    name="id" value={user.id} onChange={handleChange} required />
                            </div> */}

                            <div className="col-md-6 d-flex gap-2 align-items-center">
                                <label htmlFor="inputName" className="form-label badge bg-secondary py-2 ">
                                    Name
                                </label>
                                <input type="text" className="form-control" id="inputName" placeholder="Enter your name"
                                    name="name" value={user.name} onChange={handleChange} required />
                            </div>


                            <div className="col-md-6 d-flex gap-2">
                                <label htmlFor="inputEmail4" className="form-label badge bg-secondary py-2">
                                    Email
                                </label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your email"
                                    name="email" value={user.email} onChange={handleChange} required />
                            </div>

                            <div className="col-md-6 d-flex gap-2">
                                <label htmlFor="inputEmail4" className="form-label badge bg-secondary py-2">
                                    Contact Number
                                </label>
                                <input type="number" className="form-control" placeholder="Enter contact number"
                                    name="contactNumber" value={user.contactNumber} onChange={handleChange} required />
                            </div>

                            <div className="col-md-6 d-flex gap-2">
                                <label htmlFor="inputEmail4" className="form-label badge bg-secondary py-2">
                                    Address
                                </label>
                                <input type="text" className="form-control" placeholder="Enter your address"
                                    name="address" value={user.address} onChange={handleChange} required />
                            </div>

                            <div className="col-3 mx-auto btn-group">
                              
                                <button onClick={handleAddButton} className="btn btn-primary">
                                    ADD
                                </button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateUser;
