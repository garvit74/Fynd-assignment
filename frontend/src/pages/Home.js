import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:3000/blogs');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
            <ul className="space-y-4">
                {blogs.map((blog) => (
                    <li key={blog.id} className="p-4 border rounded">
                        <Link to={`/blogs/${blog.id}`} className="text-xl font-semibold">{blog.title}</Link>
                        <p className="text-gray-600">{blog.body.substring(0, 100)}...</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
