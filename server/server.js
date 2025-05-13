const express = require('express');
const cors = require('cors');
const { error } = require('console');
const app = express();

app.use(cors());
app.use(express.json());

// Import controllers
const staffController = require('./controllers/staffController');
const lessonsController = require('./controllers/lessonsController');
const registerantController = require('./controllers/registerantController');
// Define routes
app.use('/api/staff', staffController);
app.use('/api/lessons', lessonsController);
app.use('/api/registerant', registerantController);


app.listen(3000, () => {
    console.log('API server running at http://localhost:3000');
  });