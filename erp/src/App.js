// src/App.js
import React from 'react';
import Feedback from './Feedback';
import Counselor from './Counselor';
import './App.css';

function App() {
  const feedbackData = [
    {
      facultyId: 'F001',
      facultyName: 'Dr. John Doe',
      course: 'Physics',
      description: 'Excellent teaching methodology.',
    },
    {
      facultyId: 'F002',
      facultyName: 'Dr. Jane Smith',
      course: 'Mathematics',
      description: 'Clear and concise explanations.',
    },
    {
      facultyId: 'F003',
      facultyName: 'Dr. Alice Johnson',
      course: 'Chemistry',
      description: 'Engaging and interactive sessions.',
    },
    {
      facultyId: 'F004',
      facultyName: 'Dr. Robert Brown',
      course: 'Biology',
      description: 'Detailed and thorough lectures.',
    },
    {
      facultyId: 'F005',
      facultyName: 'Dr. Emily White',
      course: 'Computer Science',
      description: 'Great practical examples.',
    },
  ];

  const counselorData = {
    id: 'C001',
    stuCount: 150,
    branch: 'Computer Science',
  };

  return (
    <div className="App">
      <Feedback feedback={feedbackData} />
      <Counselor counselor={counselorData} />
    </div>
  );
}

export default App;
