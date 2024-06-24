const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blog_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Blog model
const blogSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4 },
    title: String,
    body: String,
    created: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

// Routes
// Create a new blog post
app.post('/blogs', async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        newBlog.id = uuidv4();  // Set custom ID
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Retrieve all blog posts
app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Retrieve a single blog post by custom ID
app.get('/blogs/:id', async (req, res) => {
    try {
        const blog = await Blog.findOne({ id: req.params.id });
        if (!blog) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Blog App is running on port 3000');
});
