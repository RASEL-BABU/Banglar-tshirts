import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Order Review</Link>
            <Link to="/">help</Link>
        </nav>
    );
};

export default Header;