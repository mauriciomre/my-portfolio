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
            <footer class="bg-primary d-flex flex-wrap justify-content-center">
                <div class="row text-white mb-3 pt-5 pb-2 w-100 px-4">
                    <div class="col-12 col-md-4 mb-3 d-flex justify-content-center mb-5">
                        <div>
                            <div class="cindy-logo-container mb-4">
                                <a class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                                    <img class="cindy-logo-footer" src={maweLogo} alt="mawe logo" />
                                </a>
                            </div>
                            <div class="social-container d-flex gap-3 justify-content-center">
                                <a target="_blank" href="https://github.com/mauriciomre">
                                    <img class="github-icon-footer" src={github} alt="github" />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/mauricio-encina-dev">
                                    <img class="linkedin-icon-footer" src={linkedin} alt="linkedin" />
                                </a>
                                <a target="_blank" href="https://www.instagram.com/mawe.dev">
                                    <img class="instagram-icon-footer" src={ig} alt="instagram" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 mb-3 border-end border-1 border-white text-end px-4">
                        <h6>FOLLOW ME</h6>
                        <ul class="nav flex-column fs-6">
                            <li class="nav-item mb-2 d-flex gap-2 justify-content-end align-items-center">
                                <img class="github" src={ghRound} alt="github" />
                                <a
                                    target="_blank"
                                    href="https://github.com/mauriciomre"
                                    class="nav-link p-0 text-white"
                                >
                                    /mauriciomre
                                </a>
                            </li>
                            <li class="nav-item mb-2 d-flex gap-2 justify-content-end align-items-center">
                                <img class="linkedin" src={inColor} alt="linkedin" />
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/mauricio-encina-dev"
                                    class="nav-link p-0 text-white"
                                >
                                    /mauricio-encina-dev
                                </a>
                            </li>
                            <li class="nav-item mb-2 d-flex gap-2 justify-content-end align-items-center">
                                <img class="ig" src={igColor} alt="github" />
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/mawe.dev"
                                    class="nav-link p-0 text-white"
                                >
                                    /mawe.dev
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 mb-3 px-4 border-start border-1 border-white">
                        <h6>CONTACT ME</h6>
                        <ul class="nav flex-column fs-6">
                            <li class="nav-item mb-2 d-flex gap-2">
                                <img class="email-icon-footer" src={email} alt="email" />
                                <a href="mailto:maurixmre@gmail.com" class="nav-link p-0 text-white">
                                    maurixmre@gmail.com
                                </a>
                            </li>
                            <li class="nav-item mb-2 d-flex gap-2">
                                <img class="call-icon-footer" src={call} alt="call" />
                                <a href="tel:543534277226" class="nav-link p-0 text-white">
                                    +543534277226
                                </a>
                            </li>
                            <li class="nav-item mb-2 d-flex gap-2">
                                <img class="wp-icon-footer" src={wp} alt="whatsapp" />
                                <a
                                    target="_blank"
                                    href="https://api.whatsapp.com/send/?phone=543534277226&text&type=phone_number&app_absent=0"
                                    class="nav-link p-0 text-white"
                                >
                                    543534277226
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row px-4 pb-4 mb-3 w-100">
                    <p class="text-white text-center p-0 m-0">
                        Copyright Mauricio Encina<span id="showYear"></span>. All rights reserved.
                    </p>
                </div>
                <a
                    href="https://api.whatsapp.com/send/?phone=543534277226&text&type=phone_number&app_absent=0"
                    class="whatsapp p-0 m-0 d-flex justify-content-center align-items-center"
                    target="_blank"
                >
                    <img src={whatsapp} alt="whatsapp" class="whatsapp-icon" />
                </a>
            </footer>
        </>
    );
};

export default Footer;
