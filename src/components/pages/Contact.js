import React from 'react'
import {Link} from 'react-router-dom';
const Contact = () => {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>
                                Contact us
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

        <section className="section">
        <div className="container">
        <div className="shadow">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 border-right">
                         <h6>Contact Form</h6>
                         <hr />
                         <div className="form-group">
                             <label className="mb-1">Full Name</label>
                             <input type="text" className="form-control" placeholder="Enter Full Name" />
                         </div>
                         <div className="form-group">
                             <label className="mb-1">Phone Number</label>
                             <input type="text" className="form-control" placeholder="Enter Full Name" />
                         </div>
                         <div className="form-group">
                             <label className="mb-1">Email Address</label>
                             <input type="text" className="form-control" placeholder="Enter Full Name" />
                         </div>
                         <div className="form-group">
                             <label className="mb-1">Message</label>
                             <textarea rows="3" className="form-control"  placeholder="Type Your Message" ></textarea>
                         </div>
                         <div className="form-group py-3">
                         <Link to="/services" className="osi">read more</Link>
                    </div>
                    </div>
                <div className="col-md-6">
                        <h5 className="main-heading">Address Information</h5>
                        <div className="underline"></div>
                            <p>
                                xxx, brtaty bangalroe 
                            </p>
                            <p>
                                Phone: 08123456747
                            </p>
                            <p>
                                Email: ose106@gmail.com
                            </p>
                        </div>
                        </div>
            </div>
        </div>
        </div>
 </section>

        </div>
    );
}

export default Contact;
