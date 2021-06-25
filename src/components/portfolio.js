import React from 'react'


const portfolio = ({ portfolioLinks } ) => {
    return (
        <section className="page-section bg-light" id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">Here are some of my works</h3>
            </div>
            <div className="row">
                {
                     portfolioLinks && portfolioLinks.map(({ title, caption }, index) =>
                                <div className="col-lg-4 col-sm-6 mb-4">
                                    <div className="portfolio-item">
                                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i>
                                                </div>
                                            </div>
                                            <img className="img-fluid" src="https:/unsplash.it/350/200/?random" alt="..." />
                                        </a>
                                        <div className="portfolio-caption">
                                            <div className="portfolio-caption-heading">{ title }</div>
                                            <div className="portfolio-caption-subheading text-muted">{ caption }</div>
                                            </div>
                                            </div>
                                            </div>

                        )
             }
            </div>
            </div>
            </section>
                
              
                )
            }
                
export default portfolio;
