# Web Blogging Application

This is a full-stack web blogging application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to create, view, and manage blog posts.

## Features

-   User authentication (Sign up, Login)
-   Create new blog posts
-   View all blog posts
-   View individual blog posts
-   Edit and delete own blog posts
-   Responsive design

## Technologies Used

### Backend

-   **Node.js**: JavaScript runtime environment
-   **Express.js**: Web application framework for Node.js
-   **MongoDB**: NoSQL database
-   **Mongoose**: MongoDB object data modeling (ODM) for Node.js
-   **dotenv**: Loads environment variables from a `.env` file
-   **cors**: Provides Express middleware to enable CORS

### Frontend

-   **React**: JavaScript library for building user interfaces
-   **Axios**: Promise-based HTTP client for the browser and Node.js
-   **HTML/CSS/JavaScript**

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   Node.js (LTS version recommended)
-   npm (Node Package Manager) or Yarn
-   MongoDB installed and running locally, or access to a MongoDB Atlas cluster.

## Installation

Follow these steps to set up and run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Omkys/Web-Blogging.git
    cd Web-Blogging
    ```

2.  **Backend Setup:**
    Navigate into the `backend` directory, install dependencies, and create a `.env` file.

    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file in the `backend` directory (`backend/.env`) and add your MongoDB connection URI:

    ```
    MONGO_URI=your_mongodb_connection_string_here
    ```
    Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string (e.g., from MongoDB Atlas or your local MongoDB instance).

3.  **Frontend Setup:**
    Navigate into the `frontend` directory and install dependencies.

    ```bash
    cd ../frontend # Go back to the root and then into frontend
    npm install
    ```

4.  **Run the Application:**

    **Start the Backend Server:**
    From the `backend` directory:
    ```bash
    npm start
    ```
    The backend server will typically run on `http://localhost:5000` (or another port if configured).

    **Start the Frontend Development Server:**
    From the `frontend` directory:
    ```bash
    npm start
    ```
    The frontend application will typically open in your browser at `http://localhost:3000`.

## Usage

-   Open your browser and navigate to `http://localhost:3000`.
-   Sign up for a new account or log in if you already have one.
-   Start creating and managing your blog posts.

## Project Structure

The project is divided into two main parts:

-   `backend/`: Contains the Node.js/Express.js server, MongoDB models, and API endpoints.
-   `frontend/`: Contains the React application for the user interface.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or want to contribute code, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the ISC License.
