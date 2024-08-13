

import React from 'react';

const Counselor = ({ counselors }) => {
    return (
        <div>
            <h2>Counselor Information</h2>
            <div style={styles.cardContainer}>
                {counselors.map((counselor, index) => (
                    <div key={index} style={styles.counselorCard}>
                        <h3>ID: {counselor.id}</h3>
                        <p><strong>Student Count:</strong> {counselor.studentCount}</p>
                        <p><strong>Branch:</strong> {counselor.branch}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    counselorCard: {
        backgroundColor: '#fff',
        padding: '1rem',
        margin: '1rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: 'calc(33% - 2rem)',
    },
};

export default Counselor;
