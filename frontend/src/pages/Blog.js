import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Blog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetchBlogById();
    });

    const fetchBlogById = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/blogs/${id}`);
            setBlog(response.data);
        } catch (error) {
            console.error('Error fetching blog by ID', error);
        }
    };

    if (!blog) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-800">{blog.body}</p>
        </div>
    );
}

export default Blog;
