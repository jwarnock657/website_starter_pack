import React from 'react';
import {Link} from 'react-router-dom';
import {Image} from 'react-bootstrap';

//shows if the page requested doesnt exist
export const NoMatch = () => {
    return (
        <div className="center">
            <p><Image src="404.svg" alt="error image" className="error-image" /></p>
            <p><strong className="error-text">This page doesn't exist!</strong></p>
            <p><Link to="/">Return to homepage</Link></p>
        </div>
    );
};