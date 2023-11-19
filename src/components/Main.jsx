import React from "react";
import programming from "../assets/img/programming.svg";
import bootstrap from "../assets/img/skills/bootstrap.svg";
import git from "../assets/img/skills/git.svg";
import javascript from "../assets/img/skills/javascript.svg";
import mern from "../assets/img/skills/mern.svg";
import mongo from "../assets/img/skills/mongo.svg";
import nodejs from "../assets/img/skills/nodejs.svg";
import react from "../assets/img/skills/react.svg";
import sass from "../assets/img/skills/sass.svg";
import typescript from "../assets/img/skills/typescript.svg";
import photo from "../assets/img/foto_personal.png";
import seated from "../assets/img/seated.svg";
import wavesquare from "../assets/img/wave-square.svg";

const Main = () => {
    return (
        <>
            <main>
                <div className="bg-square position-absolute z-n"></div>
                <div className="container head d-flex flex-wrap pt-2 pt-md-0 position-relative">
                    <div className="head-box text-center mt-auto pt-5 pt-md-0 position-relative">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div className="text-center px-5 px-md-0">
                                    <img className="programming-img" src={programming} alt="Programming image" />
                                </div>
                            </div>
                            <div className="col-12">
                                <h1 className="title-hi">
                                    Hi! I'm Mauricio, <strong>Fullstack developer</strong> with <strong>React</strong>{" "}
                                    and <strong>Node</strong>
                                </h1>
                            </div>
                            <div className="col-12">
                                <h2 className="title-welcome text-secondary">Welcome to my place on the internet</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container d-flex flex-wrap flex-column justify-content-end align-items-center pb-4 mb-4 position-relative">
                        <h4 className="fw-bold mb-4">My Skills</h4>
                        <div className="skills d-flex gap-2 justify-content-around align-items-center px-3 w-100">
                            <div className="icon-skill">
                                <img className="icon-skill-img javascript" src={javascript} alt="javascript" />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img typescript" src={typescript} alt="typescript" />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img sass" src={sass} alt="sass" />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img bootstrap" src={bootstrap} alt="bootstrap" />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img git" src={git} alt="git" />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img mongo" src={mongo} alt="mongo" />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img nodejs" src={nodejs} alt="nodejs" />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img react" src={react} alt="react" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ABOUT ME */}

                <div className="aboutme-container container-fluid text-center bg-body-tertiary position-relative p-0">
                    <div className="bg-circle position-absolute z-4"></div>
                    <div className="w-100">
                        <img className="wavesquare position-relative" src={wavesquare} alt="" />
                    </div>
                    <div className="container py-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12">
                                <h4 className="fw-bold mb-4 position-relative">About me</h4>
                            </div>
                            <div className="col-12 text-center aboutme-box px-0 pt-3 pb-1 py-sm-4 px-sm-4 position-relative mx-1">
                                <img
                                    className="photo position-absolute top-0 start-0 translate-middle z-1 d-none d-md-inline-block"
                                    src={photo}
                                    alt="personal picture"
                                />
                                <img
                                    className="seated position-absolute translate-middle z-1"
                                    src={seated}
                                    alt="seated"
                                />
                                <div className="container">
                                    <img
                                        className="rounded-pill w-25 z-1 d-inline-block d-md-none mb-3"
                                        src={photo}
                                        alt="personal picture"
                                    />

                                    <strong className="fs-2 ms-3">Hello world!</strong>

                                    <p className="fs-5 position-relative text-start text-sm-center">
                                        I consider myself an entrepreneurial and self-taught person. Thanks to my
                                        profile I obtained skills such as adapting easily to projects and businesses,
                                        quick learning, good organization and teamwork. I have solid knowledge of
                                        popular development tools since my career was influenced by prestigious programs
                                        such as Coderhouse and Henry. I am looking for a new job opportunity with which
                                        I can continue promoting my academic and professional career.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
