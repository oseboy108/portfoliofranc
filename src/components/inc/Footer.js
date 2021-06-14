import React from 'react'
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-left">
                        <h6>Company Information</h6>
                        <hr/>
                        <p>
                        Offset of the dropdown relative to its target.When a function is used to determine the offset, it is called with an object 
                                containing the offset data as its first argument. The function must return an object with the same structure. 
                                The triggering element DOM node is passed as the second argument.
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h6>Quick LInks</h6>
                        <hr/>
                        <div><Link to ="/">Home</Link></div>
                        <div><Link to ="/about">About</Link></div>
                        <div><Link to ="/">Contact</Link></div>
                        <div><Link to ="/">Services</Link></div>
                    </div>
                    <div className="col-md-4 text-right">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">plot 6 kehinde ajose street</p></div>
                        <div><p className="text-white mb-1"></p>+61 CCU88777VHV</div>
                        <div><p className="text-white mb-1"></p>+61 CCU88777VHV</div>
                        <div><p className="text-white mb-1"></p>+61 CCU88777VHV</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
