import React from 'react'
import VMC from  '../inc/Vmc';
const About = () => {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>
                                About us
                            </h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section  border-bottom">
                <div className="container">
                    <h5>
                        Our Company
                    </h5>
                    <div className="underline"></div>
                    <p>
                    Offset of the dropdown relative to its target.When a function is used to determine the offset, it is called with an object 
                                containing the offset data as its first argument. The
                    </p>
                </div>
            </section>

            <VMC />
        </div>
    );
}

export default About;
