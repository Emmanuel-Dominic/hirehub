import React from "react";
import { Outlet, Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/candidates"  className="nav-link">Candidates</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default NavBar;
