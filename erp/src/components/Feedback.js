
import React from 'react';

const Feedback = ({ feedback }) => {
  return (
    <div>
      <h2>Faculty Feedback</h2>
      {feedback.map((fb, index) => (
        <div key={index} className="feedback-item">
          <h3>{fb.facultyName}</h3>
          <p><strong>Faculty ID:</strong> {fb.facultyId}</p>
          <p><strong>Course:</strong> {fb.course}</p>
          <p><strong>Feedback:</strong> {fb.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
