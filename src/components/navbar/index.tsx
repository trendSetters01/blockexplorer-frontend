// Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/accounts">Accounts</Link></li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    );
}

export default Navbar;
