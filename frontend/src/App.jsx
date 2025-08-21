import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BlogList from './components/BlogList';
import EditBlog from './components/EditBlog';
import CreateBlog from './components/createblog';
import { Menu, X } from 'lucide-react';
import Footer from './components/Footer';
import Feedback from './components/Feedback';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      {/* ✅ Background image applied here */}
      <div className="min-h-screen bg-[url('/blog.jpg')] bg-cover bg-center text-gray-800">
        <nav className="bg-red-400 text-white px-6 py-4 flex items-center justify-between shadow-md">
          <div className="text-xl font-bold">
            <Link to="/"> Oh My Blog</Link>
          </div>  
          <div className="md:hidden">
            <button onClick={toggleMenu} className="transition-transform duration-300 transform hover:scale-110">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition duration-300 hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/create" className="hover:text-yellow-300 transition duration-300 hover:underline">Create Blog</Link>
            </li>
          </ul>
        </nav>

        {isMenuOpen && (
          <ul className="md:hidden bg-red-400 text-white px-4 py-2 space-y-2 font-medium">
            <li>
              <Link to="/" onClick={toggleMenu} className="block py-1 hover:text-yellow-400 transition duration-300 hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/create" onClick={toggleMenu} className="block py-1 hover:text-yellow-400 transition duration-300 hover:underline">Create Blog</Link>
            </li>
          </ul>
        )}

         <main className="p-4 md:p-8">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/edit/:id" element={<EditBlog />} />
            <Route path="/create" element={<CreateBlog />} />
          </Routes>
        </main>
        <Feedback />
         {/* Footer component added here */}
      </div>
       {/* Feedback component added here */}
       <Footer />
    </Router>
  );
};

export default App;
