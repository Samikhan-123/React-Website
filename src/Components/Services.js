import React from 'react'
import MyCard from './Card'
import SerData from '../Components/Sdata'
const Services = () => {
    return (
        <>
            <div>
                <h1 className="my-5 fw-bold text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gx-3 gy-4 align-items-center justify-content-center">
                            {
                                SerData.map((val, ind) => {
                                    return (
                                        <div key={ind} className="col-12 col-md-6 col-lg-4 card ">
                                          <MyCard imgsrc={val.imgsrc} title={val.title}
                                           />
                                        </div>
                                      )                   
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
