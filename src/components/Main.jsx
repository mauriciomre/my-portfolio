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

const Main = () => {
    return (
        <>
            <main>
                <div className="container head d-flex flex-wrap">
                    <div className="head-box text-center mt-auto">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div className="text-center ">
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

                    <div className="container d-flex flex-wrap flex-column justify-content-end align-items-center pb-4">
                        <h4 className="fw-bold mb-4">My Skills</h4>
                        <div className="skills d-flex justify-content-around align-items-center px-3 w-100">
                            <div className="icon-skill">
                                <img
                                    className="icon-skill-img javascript"
                                    src={javascript}
                                    alt="javascript"
                                    srcset=""
                                />
                            </div>
                            <div className="icon-skill">
                                <img
                                    className="icon-skill-img typescript"
                                    src={typescript}
                                    alt="typescript"
                                    srcset=""
                                />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img sass" src={sass} alt="sass" srcset="" />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img bootstrap" src={bootstrap} alt="bootstrap" srcset="" />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img git" src={git} alt="git" srcset="" />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img mongo" src={mongo} alt="mongo" srcset="" />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img nodejs" src={nodejs} alt="nodejs" srcset="" />
                            </div>
                            <div className="icon-skill">
                                <img className="icon-skill-img react" src={react} alt="react" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
