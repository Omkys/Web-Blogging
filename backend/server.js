const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const blogRoutes = require('./routes/routesblowww');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/blogs', blogRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
