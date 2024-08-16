import React from 'react';
import rigoImage from "../../img/rigo-baby.jpg";

export const NavBar = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src={rigoImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                4geeks Academy
                </a>
            </div>
        </nav>
    );
}

