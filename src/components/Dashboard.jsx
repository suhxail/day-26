import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Dashboard({ userList, viewProfile }) {
   

    const navigate = useNavigate()

    const showProfile = (user) => {
        viewProfile(user)
        navigate(`/profile/${user.id}`)
    }

    return (
        <>
            <div className='container-fluid p-3 bg-dark text-white'>
                <div className='row'>
                    <div className="col col-sm-4 text-danger">
                        <Link to="/" className="btn btn-success">
                            Home
                        </Link>
                    </div>
                    <div className="col col-sm-3 btn-group">
                        <Link to="/create-user" className="btn btn-success">
                            Add user
                        </Link>
                        <Link to="/users" className="btn btn-info">
                            UserList
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container my-4'>
                <div className='row'>
                    <div className='col'>
                        {userList && userList.map((user, index) =>
                            <div key={index} className="row" >
                                <div className="col text-start" >
                                    <h3>Id:{user.id}</h3>                                    
                                    <h4>Name:{user.name}</h4>
                                    {/* <h6> Email:{user.email} </h6> */}
                                </div>
                                <div className="col my-auto">
                                    <div className=" btn-group ">
                                        <button className="btn btn-secondary" onClick={() => showProfile(user)}>View Profile</button>
                                        {/* <Link className="btn btn-secondary" onClick={() => showProfile(user)} >View Profile</Link> */}
                                    </div>

                                </div>


                            </div>)}
                    </div>



                </div>

            </div>
        </>
    )
}

export default Dashboard