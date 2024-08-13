// src/components/Feedback.js
import React from 'react';

const Feedback = ({ feedbacks }) => {
    return (
        <div>
            <h2>Faculty Feedback</h2>
            {feedbacks.map((feedback, index) => (
                <div key={index} style={styles.feedbackCard}>
                    <h3>{feedback.facultyName}</h3>
                    <p><strong>Faculty ID:</strong> {feedback.facultyId}</p>
                    <p><strong>Course:</strong> {feedback.course}</p>
                    <p><strong>Feedback:</strong> {feedback.description}</p>
                </div>
            ))}
        </div>
    );
};

const styles = {
    feedbackCard: {
        backgroundColor: '#fff',
        padding: '1rem',
        margin: '1rem 0',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
};

export default Feedback;
