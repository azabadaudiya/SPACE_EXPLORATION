import React from 'react';
import space from '../space.svg';
export default function Index() {
    return (
        <>
            <div className={"container mt-4 pt-5"} style={{ minHeight: "100vh" }}>
                <div className="rounded shadow p-5 pt-2 mb-5 mt-5">
                    <div className="row flex-row row-reverse mb-5 mt-5">
                        {/* About Us */}
                        <div className="col-12">
                            <p className="h1 text-center">
                                <span className="base-color">Space</span> Exploration
                            </p>
                            <hr />
                            <br />
                            <p className="h2 text-center">
                                About <span className="base-color">us</span>
                            </p>
                        </div>
                        <div className="col-12 col-md-10 col-lg-6 mt-3">
                            <img className="user-select-none" src={space} alt="Logo" />
                        </div>
                        <div className="col-12 col-md-10 col-lg-6 mt-md-3 d-flex align-items-center">
                            <p className="h5 text-justify lh-xl">
                                This is a place to research about space and this was made as a hackathon project and we
                                use <b>official</b> NASA API that we got from <a className="decoration-none" href={"https://api.nasa.gov"} target={"_blank"} rel="noreferrer">
                                    here</a>. We have added <b>personal account</b> for you to bookmark things in it and we have used <b>SAWO Labs</b> in it. We are even working on a <b>discord bot</b> for you to make easy to use it in <b>discord</b> without any problem.

                            </p>

                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

