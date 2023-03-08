import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        try {
            fetch('https://doctor-portal-server-7qbf.onrender.com/doctors')
                .then(res => res.json())
                .then(data => {
                    console.log("data : ", data)
                    setDoctors(data)
                })
        } catch (error) {
            console.error(error)
        }
    }, []);


    return (
        <div>
            <Header />
            <Services />
            <FeaturedService />
            <FeaturedService />
            <MakeAppointment />
            <Testimonials />
            <Blogs />
            <Doctors doctors={doctors} />
            <Contact />
            <Footer />

        </div>
    );
};

export default Home;