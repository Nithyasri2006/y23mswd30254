// src/components/Footer.js
import React from 'react';

const Footer = () => {
    const currentDate = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    return (
        <footer>
            <p>Current Date: {currentDate}</p>
        </footer>
    );
};

export default Footer;
