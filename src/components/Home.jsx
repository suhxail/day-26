import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='container-fluid' id='landing_page'>
            <div className='row h-75'>
                <div className='col-11 my-auto'>
                    <h1>Welcome</h1>
                    <Link to='/dashboard'>
                        <button className='btn btn-success'>
                            Click here
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Home