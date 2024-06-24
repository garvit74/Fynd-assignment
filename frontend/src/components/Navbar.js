import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-blue-500 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="font-bold text-xl">Blog App</Link>
                <div>
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/create">Create Blog</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
