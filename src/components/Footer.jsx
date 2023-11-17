import React from "react";
import email from "../assets/icon/email-icon.svg";
import call from "../assets/icon/call-icon.svg";
import wp from "../assets/icon/wp-icon.svg";
import whatsapp from "../assets/icon/whatsapp-icon.svg";
import maweLogo from "../assets/img/logo-mawe.png";
import ig from "../assets/img/instagram.png";
import tiktok from "../assets/img/tik-tok.png";
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";
import ghRound from "../assets/img/github-round.png";
import inColor from "../assets/img/linkedin-color.png";
import igColor from "../assets/img/ig-color.png";

const Footer = () => {
    return (
        <>
            <footer className="bg-primary d-flex flex-wrap justify-content-center">
                <div className="row text-white mb-3 pt-5 pb-2 w-100 px-4">
                    <div className="col-12 col-md-4 mb-3 d-flex justify-content-center mb-5">
                        <div>
                            <div className="cindy-logo-container mb-4">
                                <a className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                                    <img className="cindy-logo-footer" src={maweLogo} alt="mawe logo" />
                                </a>
                            </div>
                            <div className="social-container d-flex gap-3 justify-content-center">
                                <a target="_blank" href="https://github.com/mauriciomre">
                                    <img className="github-icon-footer" src={github} alt="github" />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/mauricio-encina-dev">
                                    <img className="linkedin-icon-footer" src={linkedin} alt="linkedin" />
                                </a>
                                <a target="_blank" href="https://www.instagram.com/mawe.dev">
                                    <img className="instagram-icon-footer" src={ig} alt="instagram" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 mb-3 border-end border-1 border-white text-end px-4">
                        <h6>FOLLOW ME</h6>
                        <ul className="nav flex-column fs-6">
                            <li className="nav-item mb-2 d-flex gap-2 justify-content-end align-items-center">
                                <img className="github" src={ghRound} alt="github" />
                                <a
                                    target="_blank"
                                    href="https://github.com/mauriciomre"
                                    className="nav-link p-0 text-white"
                                >
                                    /mauriciomre
                                </a>
                            </li>
                            <li className="nav-item mb-2 d-flex gap-2 justify-content-end align-items-center">
                                <img className="linkedin" src={inColor} alt="linkedin" />
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/mauricio-encina-dev"
                                    className="nav-link p-0 text-white"
                                >
                                    /mauricio-encina-dev
                                </a>
                            </li>
                            <li className="nav-item mb-2 d-flex gap-2 justify-content-end align-items-center">
                                <img className="ig" src={igColor} alt="github" />
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/mawe.dev"
                                    className="nav-link p-0 text-white"
                                >
                                    /mawe.dev
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 mb-3 px-4 border-start border-1 border-white">
                        <h6>CONTACT ME</h6>
                        <ul className="nav flex-column fs-6">
                            <li className="nav-item mb-2 d-flex gap-2">
                                <img className="email-icon-footer" src={email} alt="email" />
                                <a href="mailto:maurixmre@gmail.com" className="nav-link p-0 text-white">
                                    maurixmre@gmail.com
                                </a>
                            </li>
                            <li className="nav-item mb-2 d-flex gap-2">
                                <img className="call-icon-footer" src={call} alt="call" />
                                <a href="tel:543534277226" className="nav-link p-0 text-white">
                                    +543534277226
                                </a>
                            </li>
                            <li className="nav-item mb-2 d-flex gap-2">
                                <img className="wp-icon-footer" src={wp} alt="whatsapp" />
                                <a
                                    target="_blank"
                                    href="https://api.whatsapp.com/send/?phone=543534277226&text&type=phone_number&app_absent=0"
                                    className="nav-link p-0 text-white"
                                >
                                    543534277226
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row px-4 pb-4 mb-3 w-100">
                    <p className="text-white text-center p-0 m-0">
                        Copyright Mauricio Encina<span id="showYear"></span>. All rights reserved.
                    </p>
                </div>
                <a
                    href="https://api.whatsapp.com/send/?phone=543534277226&text&type=phone_number&app_absent=0"
                    className="whatsapp p-0 m-0 d-flex justify-content-center align-items-center"
                    target="_blank"
                >
                    <img src={whatsapp} alt="whatsapp" className="whatsapp-icon" />
                </a>
            </footer>
        </>
    );
};

export default Footer;
