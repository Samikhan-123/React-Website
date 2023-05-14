import React from 'react'
import MyCard from './Card'
import SerData from '../Components/Sdata'
const Services = () => {
    return (
        <>

            <div className="container mb-5">
                <div className="row">
                    <div>
                        <h1 className="my-5 fw-bold text-center">Our Services</h1>
                    </div>
                    <div className="col-12 mx-auto">
                        <div className="row ">
                            {
                                SerData.map((val, ind) => {
                                    return (
                                            <MyCard key={ind} imgsrc={val.imgsrc} title={val.title}
                                            />
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
