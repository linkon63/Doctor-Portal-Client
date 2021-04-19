import React from 'react';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h2>Appointment : {appointments.length}</h2>
            {
                appointments.map(appointment => <div>
                    <p>{appointment.name}</p>
                    <p><small>{appointment.service}</small></p>
                </div>)
            }
        </div>
    );
};

export default AppointmentByDate;