import React from 'react';
import Fluoride from '../../../images/Fluoride.png';
import Cavity from '../../../images/Cavity.png';
import Whitening from '../../../images/Teeth Whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },
    {
        name: 'Cavity Filing',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        img: Whitening
    }
]
const Services = () => {
    return (
        <section className='services-container mt-5'> 
            <div className='text-center'>
                <h5 style={{color:'#1CC7C1'}}>Our Services</h5>
                <h2>Services We Provide</h2>
            </div>
                <div className='d-flex justify-content-center'>
                    <div className='row w-75 mt-5 pt-5'>
                        {
                            servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                        }
                    </div>
                </div>
        </section>
    );
};

export default Services;