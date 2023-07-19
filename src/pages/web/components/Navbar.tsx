// components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <Link to="/">主页</Link>
            <Link to="/bebe-bili">贝贝BILI</Link>
            <Link to="/about">关于本站</Link>
            {/* Add more links as needed */}
        </nav>
    );
};

export default Navbar;