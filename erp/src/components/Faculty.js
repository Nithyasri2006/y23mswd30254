// src/components/Faculty.js
import React from 'react';

const Faculty = () => {
    const faculty = [
        { id: 1, name: 'Dr. Smith', dept: 'CSE', designation: 'Professor' },
        { id: 2, name: 'Dr. Johnson', dept: 'ECE', designation: 'Associate Professor' },
        { id: 3, name: 'Dr. Williams', dept: 'ME', designation: 'Assistant Professor' },
    ];

    return (
        <div>
            <h2>Faculty List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {faculty.map((member) => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.name}</td>
                            <td>{member.dept}</td>
                            <td>{member.designation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Faculty;
