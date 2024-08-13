// src/components/StudentComponent.js
import React from 'react';
import PresenceButton from './PresenceButton';
const StudentComponent = () => {
    const students = [
        { id: 1, branch: 'CSE', year: '2nd' },
        { id: 2, branch: 'ECE', year: '3rd' },
        { id: 3, branch: 'ME', year: '1st' },
    ];

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        ID: {student.id}, Branch: {student.branch}, Year: {student.year}
                        <PresenceButton />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentComponent;
