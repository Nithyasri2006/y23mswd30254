// src/components/Timetable.js
import React from 'react';

const Timetable = () => {
    const timetable = [
        { day: 'Monday', hours: '9 AM - 10 AM', course: 'Math', room: '101' },
        { day: 'Tuesday', hours: '10 AM - 11 AM', course: 'Physics', room: '102' },
        { day: 'Wednesday', hours: '11 AM - 12 PM', course: 'Chemistry', room: '103' },
    ];

    return (
        <div>
            <h2>Timetable</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Hours</th>
                        <th>Course</th>
                        <th>Room</th>
                    </tr>
                </thead>
                <tbody>
                    {timetable.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.day}</td>
                            <td>{entry.hours}</td>
                            <td>{entry.course}</td>
                            <td>{entry.room}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Timetable;
