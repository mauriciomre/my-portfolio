import React from "react";
import programming from "../assets/img/programming.svg";

const Main = () => {
    return (
        <>
            <main>
                <div className="container head d-flex flex-wrap">
                    <div className="head-box text-center mt-auto">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div className="text-center ">
                                    <img className="programming" src={programming} alt="Programming image" />
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

                    <div className="row w-100">
                        <div className="w-100 d-flex justify-content-center align-items-end">
                            <div className="skills"></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
