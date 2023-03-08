import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ doctors }) => {
    // const [doctors, setDoctors] = useState([]);

    // useEffect(() => {
    //     try {
    //         fetch('https://doctor-portal-server-7qbf.onrender.com/doctors')
    //             .then(res => res.json())
    //             .then(data => setDoctors(data))
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }, []);

    console.log(doctors);
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctors &&
                        doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;