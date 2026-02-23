import React from 'react'
import toggle from '../../assets/images/toggle.png'
import { Link } from 'react-router-dom'

function Employeeheader() {

    let isLoggedIn = false;
  return (
    <>
        <header>
            <div className="container-fluid">
                <div className="row py-3 border-bottom">
        
                <div className="col-lg-4">
                    <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">
                        <li className="nav-item active">
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/attendance'>
                                Attendance
                            </Link>
                        </li>
                    </ul>
                </div>
                

                </div>
            </div>
        </header>
    </>
  )
}

export default Employeeheader