import React from "react";
import maweLogo from "../assets/img/logo-mawe.png";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-bg">
                <div class="container-fluid">
                    <a class="navbar-brand text-dark" href="#">
                        <img className="logo-mawe" src={maweLogo} alt="Logo Mawe" />
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav text-dark">
                            <a class="nav-link active text-dark" aria-current="page" href="#">
                                HOME
                            </a>
                            <a class="nav-link text-dark" href="#">
                                ABOUT
                            </a>
                            <a class="nav-link text-dark" href="#">
                                PROJECTS
                            </a>
                            <a class="nav-link text-dark" href="#">
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
