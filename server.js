const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors");
const alumniRoutes = require('./routes/alumniRoutes');
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://KAPIL:BSG12345@bsgalumni.5yvsj.mongodb.net/').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

app.use('/api/alumni', alumniRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
