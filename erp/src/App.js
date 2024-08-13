// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentComponent from './components/StudentComponent';
import Faculty from './components/Faculty';
import Timetable from './components/Timetable';
import Courses from './components/Courses';
import Feedback from './components/Feedback';
import Counselor from './components/Counselor';
import Cardlayout from  './components/Cardlayout';

function App() {

    const feedbacks = [
        { facultyId: 'F001', facultyName: 'Dr. John Doe', course: 'Mathematics', description: 'Excellent teaching.' },
        { facultyId: 'F002', facultyName: 'Dr. Jane Smith', course: 'Physics', description: 'Very engaging.' },
        { facultyId: 'F003', facultyName: 'Dr. Emily Davis', course: 'Chemistry', description: 'Clear explanations.' },
        { facultyId: 'F004', facultyName: 'Dr. Michael Brown', course: 'Biology', description: 'Great use of examples.' },
        { facultyId: 'F005', facultyName: 'Dr. Sarah Wilson', course: 'Computer Science', description: 'Very interactive sessions.' },
    ];
    const counselors = [
        { id: 'C001', studentCount: 25, branch: 'CSE' },
        { id: 'C002', studentCount: 30, branch: 'ECE' },
        { id: 'C003', studentCount: 20, branch: 'ME' },
        { id: 'C004', studentCount: 15, branch: 'CE' },
        { id: 'C005', studentCount: 28, branch: 'EE' },
    ];

    return (
        <div>
            <Header />
            <StudentComponent  />
            <Faculty />
            <Timetable  />
            <Courses  />
            <Feedback feedbacks={feedbacks} />
            <Counselor counselors={counselors} />
            <Footer />
            <Cardlayout />
        </div>
    );
}

export default App;
