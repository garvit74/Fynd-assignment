import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// src/pages/CreateBlog.js

function CreateBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const createBlog = async (e) => {
        e.preventDefault();
        try {
            const newBlog = { title, body };
            await axios.post('http://localhost:3000/blogs', newBlog);
            setTitle('');
            setBody('');
            navigate('/');
        } catch (error) {
            console.error('Error creating blog', error);
        }
    };

    const generateBlogContent = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    prompt: `Write a detailed blog post about ${title}`,
                    max_tokens: 2000, // Increase the max_tokens value if needed
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    },
                }
            );
            setBody(response.data.choices[0].text.trim());
        } catch (error) {
            console.error('Error generating blog content', error);
            setError('Failed to generate blog content. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Blog</h1>
            <form onSubmit={createBlog} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Body</label>
                    <textarea
                        className="w-full p-2 border rounded"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button
                    type="button"
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={generateBlogContent}
                    disabled={loading}
                >
                    {loading ? 'Generating...' : 'Generate Content'}
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Create Blog
                </button>
            </form>
        </div>
    );
}

export default CreateBlog;
