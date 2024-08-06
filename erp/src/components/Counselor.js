
import React from 'react';

const Counselor = ({ counselor }) => {
  return (
    <div className="counselor-card">
      <h2>Counselor Information</h2>
      <p><strong>ID:</strong> {counselor.id}</p>
      <p><strong>Student Count:</strong> {counselor.stuCount}</p>
      <p><strong>Branch:</strong> {counselor.branch}</p>
    </div>
  );
};

export default Counselor;
