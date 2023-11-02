import React from "react";
import { Link, useNavigate } from "react-router-dom";

function UserList({ userList, DeleteUser, EditUser}) {

    const navigate=useNavigate()

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
                        {userList && userList.map((user, index) =>
                            <div key={index} className="row">
                                <div className="col text-start">
                                    <h6>Id:{user.id}</h6>
                                    <h6>Name:{user.name}</h6>
                                    <h6>Email:{user.email}</h6>
                                </div>
                                <div className="col my-auto">
                                    <div className=" btn-group ">
                                        
                                    <button className="btn btn-warning" onClick={() => {EditUser(user, index); navigate(`/edit-user/${user.id}`)}}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => DeleteUser(index)}>Delete</button>
                                    </div>
                                </div>

                            </div>)}
                    </div>
                </div>

            </div>
        </>)
}
export default UserList;