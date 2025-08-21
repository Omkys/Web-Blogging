import React, { useState } from 'react';

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={toggleForm}
        className={`fixed bottom-6 left-6 z-50 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-500 
        animate-bounce`}
        aria-label="Give Feedback"
      >
        Feedback
      </button>

      {/* Feedback form popup */}
      {isOpen && (
        <div className="fixed bottom-20 left-6 z-50 bg-white shadow-lg rounded-lg p-4 w-80 max-w-xs">
          <form
            action="https://formspree.io/f/xpwpnekg" // MY FORM_ID formspree chi link ithe aahe
            method="POST"
          >
            <h3 className="text-lg font-semibold mb-3">Send us your feedback</h3>
            <label className="block mb-2">
              <span className="text-sm font-medium text-gray-700">Your Email</span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                placeholder="you@example.com"
              />
            </label>
            <label className="block mb-4">
              <span className="text-sm font-medium text-gray-700">Message</span>
              <textarea
                name="message"
                required
                rows="4"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                placeholder="Your feedback..."
              ></textarea>
            </label>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={toggleForm}
                className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1 rounded bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Feedback;
