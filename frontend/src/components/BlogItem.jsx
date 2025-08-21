import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog, onDelete }) => {
  return (
    <li className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg rounded-xl p-6 mb-6 hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-blue-700 mb-3">{blog.title}</h3>

      <p className="text-gray-700 mb-5 leading-relaxed line-clamp-4">
        {blog.content}
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          to={`/edit/${blog._id}`}
          className="px-4 py-2 rounded-md bg-yellow-400 text-white hover:bg-yellow-500 transition-all duration-200 ease-in-out text-sm font-semibold shadow-sm"
        >
          ✏️ Edit
        </Link>

        <button
          onClick={() => onDelete(blog._id)}
          className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all duration-200 ease-in-out text-sm font-semibold shadow-sm"
        >
          🗑️ Delete
        </button>
      </div>
    </li>
  );
};

export default BlogItem;
