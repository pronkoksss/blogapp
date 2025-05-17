const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = 5000;

// Kết nối MongoDB
const mongoURI = 'mongodb://localhost:27017/blogdb';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log('MongoDB connection error:', err));

// Middleware parse JSON
app.use(express.json());

// Route gốc kiểm tra server
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Route liên hệ
app.use('/api/contacts', contactRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
