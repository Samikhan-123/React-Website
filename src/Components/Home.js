import React from 'react'
import web from '../images/p1.png'
import { NavLink } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <section className="d-flex align-items-lg-center vh-80" id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>Grow your business with <strong>Sami Khan</strong> </h1>
                                    <h2 className='my-3' >We are the developers making fastest websites</h2>
                                    <div className="mt-3 header">
                                        <NavLink className='btn btn-primary get-started' to="/services">Get Started</NavLink>
                                    </div>
                                </div>
                                <div className="img-header col-lg-6 order-1 order-lg-2 mt-4">
                                    <img src={web} className='img-fluid animated ' alt="home img"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
