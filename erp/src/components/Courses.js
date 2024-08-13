// src/components/Courses.js
import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h3>{course.name}</h3>
            <p>LTPS: {course.ltps}</p>
            <p>Course Code: {course.code}</p>
            <p>Credits: {course.credits}</p>
        </div>
    );
};

const Courses = () => {
    const courses = [
        { name: 'Mathematics', ltps: '3-1-0', code: 'MTH101', credits: 4 },
        { name: 'Physics', ltps: '3-1-2', code: 'PHY102', credits: 4 },
        { name: 'Chemistry', ltps: '3-0-2', code: 'CHM103', credits: 3 },
    ];

    return (
        <div>
            <h2>Courses</h2>
            <div>
                {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
