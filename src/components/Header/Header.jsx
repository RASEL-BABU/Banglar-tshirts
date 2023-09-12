import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/grandpa">Grandpa</Link>
            <Link to="/orders">Order Review</Link>
            <Link to="/help">help</Link>
        </nav>
    );
};

export default Header;