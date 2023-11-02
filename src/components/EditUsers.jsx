import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EditUsers({ UpdateUser, currentUser, index }) {
    // console.log(currentUser);
    const navigate = useNavigate()
    const [user, setUser] = useState(currentUser ? currentUser : {
        id: '',
        name: '',
        email: '',
    })  

    const handleUpdateButton = (e) => {
        e.preventDefault();
        UpdateUser(user, index);
        navigate('/users')
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container-fluid p-3 bg-dark text-white" id="adduser">
                <div className="row">
                    <div className="col col-sm-4 text-danger">
                        <Link to="/users" className="btn btn-success">
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-3">
                    <div className="col">
                        <form className="row g-3" >                           

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

                            <div className="col-3 mx-auto btn-group">
                                <button className="btn btn-warning" onClick={handleUpdateButton}>
                                    Update
                                </button> : <></>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditUsers;
