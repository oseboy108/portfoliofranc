import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './css/styles.css';
import './js/script.js'
import './components/images/map-image.png'
import francis1 from './components/images/francis1.jpg'
import tech from './components/images/tech.jpg'
import computer from './components/images/computer.svg'
import design from './components/images/design.svg'
import webpack from './components/images/webpack.svg'
import settings from './components/images/settings.svg'
import network from './components/images/network.svg'
import search from './components/images/search.svg'
import eve from './components/images/eve.jpg'
import igho from './components/images/igho.jpg'
import vinc from './components/images/vinc.jpg'
import josh from './components/images/josh.jpg'
import teko from './components/images/teko.jpg'
import converter2 from './components/images/converter2.PNG'

function App() {
   return (
  <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#home">FE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#testimonials">Testimonials</a></li>
                        <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
       
        
        <section class="site-banner" id="home">
            <div class="container">
            <div class="row">
      <div class="col-lg-6 col-md-12  col-sm-24 site-title">
        <div class="hero-content  pl-0 pr-5">
        <h3 class="title-text">Hello</h3>
        <h1 class="title-text text-uppercase uin">i am francis Ehis</h1>
          <h4 class="title-text text-uppercase hin">i am a Frontend Developer & UI/UX designer</h4>
          <div class="site-buttons">
            <div class="d-flex flex-row flex-wrap">
            </div>
          </div>
        </div>
      </div>
           <div class="col-lg-6 col-md-12">
            <img src={francis1} alt="" class="img-fluid3"/>
    </div>
  </div>
  </div>
  </section>




<br></br>
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Services Offers</h2>
                    <h3 class="section-subheading text-muted">I do more than just creating beautiful website; I create applications and website that brings customers to your business</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4 frank">
                    <img src={computer} alt="" class="ike"/>
                        <h4 class="my-3">Web development</h4>
                        <p class="text-muted">designing web interface for clients across the globe and platforms made with easy navigation</p>
                    </div>
                    <div class="col-md-4 frank">
                    <img src={design} alt="" class="ike"/>
                        <h4 class="my-3">UI/UX Design</h4>
                        <p class="text-muted">I design mobile and web interfaces and prototypes made with easy and flexible components</p>
                    </div>
                    <div class="col-md-4 frank">
                    <img src={webpack} alt="" class="ike"/>
                        <h4 class="my-3">Website Design</h4>
                        <p class="text-muted">I design your website to be as easy to use as
                                possible while converting traffic into paying
                                customers.</p>
                    </div>
                </div>
            

            <div class="row text-center">
                    <div class="col-md-4 frank">
                    <img src={settings} alt="" class="ike"/>
                        <h4 class="my-3">Business Strategy</h4>
                        <p class="text-muted"> We discuss what you are trying to achieve, and
                                create a website that aligns with your goals.</p>
                    </div>
                    <div class="col-md-4 frank">
                    <img src={network} alt="" class="ike"/>
                        <h4 class="my-3">Social media</h4>
                        <p class="text-muted">I create content for your business on social
                                media so you don't have to pay for any ads to
                                gain traffic.</p>
                    </div>
                    <div class="col-md-4 frank">
                    <img src={search} alt="" class="ike"/>
                        <h4 class="my-3">Seo optimize</h4>
                        <p class="text-muted">I optimize your entire website to make it easier
                                for your customers to find you, not the
                                opposite.</p>
                    </div>
                </div>
            </div>
        </section>
       
        
       
        <section class="page-section" id="about"></section>
  <div class="container">
  <h2 class="section-heading text-uppercase text-center pt-5">About Me</h2>
     <div class="row">
     
      <div class="col-lg-6 col-md-12 pt-5">
      
        <div class="about-image">
        <img src={tech} alt="about us" class="img-fluid3"/>
          </div>
      </div>
        <div class="col-lg-6 col-md-12 about-title pt-5">
          <h2 class="text-uppercase pt-5">
            <span>Let me</span>
            <span>introduce</span>
            <span>myself</span>
          </h2>
          <div class="paragraph py-4 w-75"></div>
          <h6 class="para">My name is francis ehis and i am a passionate frontend web developer and mobile designer based in Nigeria, I have a passion for coding and challenging 
          myself creatively. Using a mimalist asthetic, i create simple to advance responsive websites with a whimsical twist 
          using web technologies to build amazing products and focusing on solving problems using the power of technology</h6>
            <h6 class="para">
              I enjoy learning new skills daily, and staying connected, and involved with my fellow developers. 
            </h6>
        </div>
       </div>
  </div><br></br><br></br>

  <section className="page-section bg-light" id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">My Projects</h2>
                <h3 className="section-subheading text-muted">Here are some of my works</h3>
            </div>
            <div className="row">
                                <div className="col-lg-4 col-sm-6 mb-4">
                                    <div className="portfolio-item">
                                        
                                            <img className="img-fluid" src={josh} alt="..." />
                                        
                                        <div className="portfolio-caption">
                                            <div className="portfolio-caption-heading">Flooring Installation</div><br></br>
                                            <a href="https://ezefloorex.netlify.app"><button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Click to Open</button></a>
                                            </div>
                                            </div>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 mb-4">
                                    <div className="portfolio-item">
                                        
                                            <img className="img-fluid" src={teko} alt="..." />
                                        
                                        <div className="portfolio-caption">
                                            <div className="portfolio-caption-heading">Teko Services</div><br></br>
                                            <a href="https://tekoservices.netlify.app"><button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Click to Open</button></a>
                                            </div>
                                            </div>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 mb-4">
                                    <div className="portfolio-item">
                                       
                                            <img className="img-fluid" src={converter2} alt="..." />
                                        
                                        <div className="portfolio-caption">
                                            <div className="portfolio-caption-heading">Weight converter</div><br></br>
                                            <a href="https://oseboy108.github.io/converter-app/"><button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Click to Open</button></a>
                                            
                                            </div>
                                            </div>
                                            </div>
                                            

            </div>
            </div>
            </section>
                






<br></br>
       <section class="about-area" id="testimonials">
           <div class="container">
               <div class="row text-center">
                   <div class="col-lg-12">
                       <div class="about-title">
                           <h1 class="text-uppercase title-h1 mb-5">Testimonials</h1>
                       </div>
                       </div>
                <div class="text-center">
                    
                <div class="row text-center">
                    <div class="col-md-4 frank">
                    <img src={igho} alt="" class="ike1"/>
                        <h4 class="my-3">Joseph igho</h4>
                        <p class="text-muted">Nice work from francis, he delivers on time with a great style of working</p>
                    </div>
                    <div class="col-md-4 frank">
                    <img src={vinc} alt="" class="ike1"/>
                        <h4 class="my-3">Vincent Elejie</h4>
                        <p class="text-muted">good impression he made of our first time working together, a good team and working individual</p>
                    </div>
                    <div class="col-md-4 frank">
                    <img src={eve} alt="" class="ike1"/>
                        <h4 class="my-3">Evelyn izibili</h4>
                        <p class="text-muted">imaginative worker, he works well with good designing style and good approach with team management</p>
                    </div>
                       </div>
                       </div>
                       </div>
                       </div>
                       </section>
                   
          


        

        
       
        <section class="page-section " id="skills">
            <div class="container"> 
            <div class="text-center">
                    <h2 class="section-heading text-uppercase mb-5">My skills</h2>
                    </div>
                <div class="row">
                    
                    <div class="col-lg-6">
                    <div class="text-center">
                    <h4 class="section-heading text-uppercase mb-5">Web development</h4>
                </div>
                        <div class="skill mb-4">
                            <div class="justify-content-between text-center">
                            <h6 class="font-width-bold ">HTML</h6>
                            
                    
                        
                    </div>
                    </div>
                     <div class="skill mb-4">
                            <div class=" justify-content-between text-center">
                            <h6 class="font-width-bold">CSS/SASS</h6>
                            
                    </div>
                    </div>

                    <div class="skill mb-4">
                            <div class=" justify-content-between text-center">
                            <h6 class="font-width-bold">BOOSTRAP</h6>
                            
                    </div>
                    </div>
                

                    <div class="skill mb-4">
                            <div class=" justify-content-between text-center">
                            <h6 class="font-width-bold">JAVASCRIPT</h6>
                            
                    </div>
                    </div>

                    <div class="skill mb-4">
                            <div class=" justify-content-between text-center">
                            <h6 class="font-width-bold">REACT</h6>
                            
                    </div>
                    </div>
                    </div>
    
                    
                    <div class="col-lg-6">
                    <div class="text-center">
                    <h4 class="section-heading text-uppercase mb-5">UI/UX Design</h4>
                </div>
                        
                        

                    <div class="skill mb-4">
                            <div class=" justify-content-between text-center">
                            <h6 class="font-width-bold text-uppercase">Adobe XD</h6>
                           
                    </div>
                    </div>

                    <div class="skill mb-4">
                            <div class=" justify-content-between text-center">
                            <h6 class="font-width-bold text-uppercase">Figma</h6>
                          
                    </div>
                    </div>

                    <div class="skill mb-4">
                            <div class=" justify-content-between text-center">
                            <h6 class="font-width-bold text-uppercase">photoshop</h6>
                           
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
 </section>
       
        
       
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase mb-5">Contact Me</h2>
                    <h3 className="section-subheading text-muted">Submit the form below so i can get back to you as soon as posible</h3>
                </div>
                <form id="contactForm">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input class="form-control" id="name" type="text" placeholder="Name *" required="required" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="email" type="email" placeholder="Email *" required="required" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group mb-md-0">
                                <input class="form-control" id="phone" type="tel" placeholder="Phone *" required="required" />
                                <p class="help-block text-danger"></p>
                            </div><br></br>
                            <div class="form-group form-group-textarea mb-md-0">
                                <textarea class="form-control" id="message" placeholder="Message *" required="required"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                       <div class="col-md-6">
                        <div class="text-left">
                    <h4 class="section-heading text-uppercase">phone</h4><br></br>
                    <p class="text-light">Mobile1: (+234) 9029745861</p>
                    <p class="text-light">Mobile2:(+234) 8023138498</p>
                    </div><br></br>
                    <h4 class="section-heading text-uppercase">Email</h4><br></br>
                    <p class="text-light">ehiaguinaosesojie@gmail.com</p>
                    </div>
                    </div>
                    
                    <div class="text-center">
                        <div id="success"></div>
                           <a href="https://mail.google.com/mail/mu/mp/346/#co"><button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button></a>
                    </div>
                </form>
            </div>
        </section>
       
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">
                        Copyright &copy; 2021 Francis Ehis
                       
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                    </div>
                    <div class="col-lg-4 my-3 my-lg-0">
                    <div class="social-links social-media" align="center">
            <a href="https://twitter.com/oseboy11" class="icons-twitter"><svg viewBox="328 355 335 276" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 630, 425
                      A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523
                      A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455
                      A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370
                      A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380
                      A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401A 117, 117 0 0 0 662, 390
                      A  65,  65 0 0 1 630, 425 Z" fill="#2962FF"></path>
                </svg>
            </a>

            <a href="https://github.com/oseboy108" class="icons github"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
            </a>

           

            
        </div>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
       
        
  </div>
  );
}

export default App;
