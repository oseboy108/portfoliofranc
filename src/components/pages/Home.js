import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import VMC from  '../inc/Vmc';
import Service1 from '../images/img1.jpg'

const Home = () => {
    return (
        <div>
          <Slider />

                  <section className="section">
                      <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="main-heading text-center">Our company</h3>
                                <div className="underline mx-auto"></div>
                                <p>
                                Offset of the dropdown relative to its target.When a function is used to determine the offset, it is called with an object 
                                containing the offset data as its first argument. The function must return an object with the same structure. 
                                The triggering element DOM node is passed as the second argument.
                                </p>
                                <div className="text-center">
                                <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                            </div>
                            </div>
                        </div>
                      </div>
                      </section>  

                   <VMC />


                                        <section className="section border-top">
                                <div className="container">
                                <div className="row">
                                    <div className="col-md-12 mb-4">
                                        <h3 className="main-heading text-center">Our Services</h3>
                                        <div className="underline mx-auto"></div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="card shadow">
                                        <img src={Service1} className="w-100 border-bottom" alt="services" />
                                        <div className="card-body">
                                            <h6 className="ose">Service 1</h6>
                                            <div className="underline mx-auto"></div>
                                            <p>
                                            Offset of the dropdown relative to its target.When a function is used to determine the offse
                                            </p>
                                            <Link to="/services" className="oso">read more</Link>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="card shadow">
                                        <img src={Service1} className="w-100 border-bottom" alt="services" />
                                        <div className="card-body">
                                            <h6 className="ose">Service 1</h6>
                                            <div className="underline mx-auto"></div>
                                            <p>
                                            Offset of the dropdown relative to its target.When a function is used to determine the offse
                                            </p>
                                            <Link to="/services" className="oso">read more</Link>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="card shadow">
                                        <img src={Service1} className="w-100 border-bottom" alt="services" />
                                        <div className="card-body">
                                            <h6 className="ose">Service 1</h6>
                                            <div className="underline mx-auto"></div>
                                            <p>
                                            Offset of the dropdown relative to its target.When a function is used to determine the offse
                                            </p>
                                            <Link to="/services" className="oso">read more</Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </section>  
                                </div>
    );
}

export default Home;
