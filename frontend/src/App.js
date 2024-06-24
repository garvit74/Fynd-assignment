import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CreateBlog from './pages/CreateBlog';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs/:id" element={<Blog />} />
                    <Route path="/create" element={<CreateBlog />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
