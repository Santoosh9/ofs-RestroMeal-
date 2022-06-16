/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <> <div className="container-fluid">
            <div className="row">
            <div className="col-md-12">

            <nav className="navbar navbar-dark bg-dark" >
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                           
                                <Link className="nav-link active" aria-current="page" to="#"> <h3> Welcome To Our Restaurants</h3></Link>
                            </li>
                            </ul>
                    <div className="">
                        <ul className="d-flex">
                            <li className="list-unstyled">
                                <Link className="nav-link active px-2" aria-current="page" to="/login"><button type="button" className="btn btn-primary btn-lg" >Login</button></Link>
                            </li>
                            <li className="list-unstyled">
                                <Link className="nav-link" to="/Register"><button type="button" className="btn btn-primary btn-lg" >Register</button></Link>
                            </li>
                            
                        </ul>

                    </div>

                </div>

            </nav>

            </div>
            
            
            </div>

        </div>
            
            
        </>
    )
}

export default Navbar