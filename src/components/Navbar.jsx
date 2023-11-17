import React from "react";
import maweLogo from "../assets/img/logo-mawe.png";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-bg fixed-top">
                <div className="container-fluid max-container">
                    <a className="navbar-brand text-dark px-3 py-2" href="#">
                        <img className="logo-mawe" src={maweLogo} alt="Logo Mawe" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-dark text-center gap-1">
                            <a className="nav-link active text-dark bg-white rounded" aria-current="page" href="#">
                                HOME
                            </a>
                            <a className="nav-link text-dark bg-white rounded" href="#">
                                ABOUT
                            </a>
                            <a className="nav-link text-dark bg-white rounded" href="#">
                                PROJECTS
                            </a>
                            <a className="nav-link text-dark bg-white rounded" href="#">
                                CONTACT
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
