import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 oredr-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h2>{props.heading_name}
                                     <strong className="brand_name" > IT solutions</strong></h2>
                                    <h4 className="my-3">
                                        We are believe in technology and understand it..
                                   </h4>
                                    <div className="mt-3 btn_get_started">
                                        <NavLink to={props.visit}>{props.btn_text}</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header_img">

                                    <img src={props.imgsrc} className="img-fluid animate" alt="Common image" />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    );
}

export default Common;