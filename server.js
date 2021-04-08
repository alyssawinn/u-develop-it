//import connection.js module
const db = require('./db/connection');
//import express
const express = require('express');
//add port designation
const PORT = process.env.PORT || 3001;
//add app expression
const app = express();
//import inputcheck module
const inputCheck = require('./utils/inputCheck');
//import apiRoutes.js
const apiRoutes = require('./routes/apiRoutes');

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);

//default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});