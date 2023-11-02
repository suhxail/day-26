import React from 'react'
import { Link } from 'react-router-dom'

function HomePage({ userList }) {
    console.log(userList);
    return (
        <>
            <div className='container-fluid p-3 bg-dark text-white' id='adduser'>
                <div className='row'>
                    <div className="col col-sm-4 text-danger">
                        <span className="fs-3 fw-bold bg-white rounded-circle px-2">
                            Suhail
                        </span>
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

            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        {
                            userList && userList.map((user, index) => <div key={index} className="row text-start" >

                                <h4> {user.name}</h4>
                                {/* <h6> Email:{user.email} </h6> */}

                            </div>)
                        }
                    </div>

                </div>

            </div>
        </>

    )
}

export default HomePage