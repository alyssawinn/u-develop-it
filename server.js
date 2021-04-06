//import mysql2 package
const mysql = require('mysql2');
//import express
const express = require('express');
//add port designation
const PORT = process.env.PORT || 3001;
//add app expression
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'Andy2599!',
        database: 'election'
    },
    console.log('Connected to the election database')
);

//get ALL candidates
/* db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
}); */

//get a SINGLE candidate
/* db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
}); */

//DELETE a candidate
/* db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
}); */

//CREATE a candidate
/* const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
            VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
}); */

//default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});