import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ProfilePage({ user, viewUser, EditUser, index }) {
    console.log(viewUser)

    const navigate = useNavigate();

    const handleEditButton = () => {
        EditUser(user, index);
        navigate(`/edit-profile/${viewUser.id}`)
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

            <div className="container my-4">
                <div className="row">
                    <div className="col">

                        <div className="row">
                            <div className="col text-start">
                                <h5>Name:{viewUser.name}</h5>
                                <h5>Email:{viewUser.email}</h5>
                                <h5>Contact Number:{viewUser.contactNumber}</h5>
                                <h5>Address:{viewUser.address}</h5>
                            </div>
                            <div className="col my-auto">
                                <div className=" btn-group ">
                                    <button className="btn btn-warning" onClick={handleEditButton}>Edit</button>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfilePage