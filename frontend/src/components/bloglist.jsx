import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogItem from './BlogItem';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
      } catch (err) {
        setError('Failed to load blogs.');
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await axios.delete(`http://localhost:5000/api/blogs/${id}`);
        setBlogs(blogs.filter((blog) => blog._id !== id));
        alert('Blog deleted successfully');
      } catch (err) {
        setError('Failed to delete blog.');
      }
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="max-w-md mx-auto md:mx-0 md:ml-8 mb-8">
  <div className="bg-white rounded-xl shadow-lg px-6 py-4 border border-gray-200 text-center md:text-left">
    <h2 className="text-3xl font-extrabold text-gray-900 border-b-4 border-indigo-600 pb-2">
      My Blogs
    </h2>
  </div>
</div>


        {/* 🔍 Enhanced Search Input */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition duration-200 bg-white/80 backdrop-blur-sm placeholder-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-500 pointer-events-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>
      </div>

      {error && (
        <p className="mb-6 text-red-600 font-semibold text-center">{error}</p>
      )}

      <ul className="grid gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogItem key={blog._id} blog={blog} onDelete={handleDelete} />
          ))
        ) : (
          <div className="max-w-md mx-auto bg-white/30 backdrop-blur-md rounded-xl shadow-lg px-6 py-8 border border-white/40">
  <p className="text-gray-500 text-center text-lg italic">No blogs found.</p>
</div>

        )}
      </ul>
    </div>
  );
};

export default BlogList;
