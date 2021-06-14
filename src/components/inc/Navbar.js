import React from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faIdCardAlt, faConciergeBell } from '@fortawesome/free-solid-svg-icons'
import Service1 from '../images/img1.jpg'

const Navbar = () => {
    return (
        
        <div className="navbar-dark bg-dark shadow">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">


        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
<Link to="/home" class="navbar-brand text-light"><img src={Service1} alt="" className="img"/>&nbsp;React</Link>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
    
      <li class="nav-item">
        <Link to="/home" class="nav-link active text-light"><FontAwesomeIcon icon={faHome} />&nbsp;Home</Link>
      </li>
      <li class="nav-item">
      <Link to="/about" class="nav-link active text-light"><FontAwesomeIcon icon={faAddressCard} />&nbsp;About</Link>
       </li>
            <li class="nav-item">
      <Link to="/contact" class="nav-link active text-light"><FontAwesomeIcon icon={faIdCardAlt} />&nbsp;Contact</Link>
            </li>
            <li class="nav-item">
      <Link to="/services" class="nav-link active text-light"><FontAwesomeIcon icon={faConciergeBell} />&nbsp;Services</Link>
            </li>
           </ul>
           </div>
         </div>
     </nav>

     </div>
     </div>
     </div>
     </div>
    );
}

export default Navbar;
