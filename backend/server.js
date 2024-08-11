const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ENTER YOUR PASSWORD', 
    database: 'ENTER YOUR DATABASE NAME'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('MySQL Connected...');
});

// Endpoint to create a new poll
app.post('/create-poll', (req, res) => {
    const { title, description, option1, option2 } = req.body;
    const sql = 'INSERT INTO polls (title, description, option1, option2) VALUES (?, ?, ?, ?)';
    db.query(sql, [title, description, option1, option2], (err, result) => {
        if (err) {
            console.error('Error inserting poll:', err.message);
            return res.status(500).send({ success: false, message: 'Error creating poll' });
        }
        res.send({ success: true });
    });
});

// Endpoint to get all polls
app.get('/polls', (req, res) => {
    db.query('SELECT * FROM polls', (err, results) => {
        if (err) {
            console.error('Error fetching polls:', err.message);
            return res.status(500).send({ success: false, message: 'Error fetching polls' });
        }
        res.send(results);
    });
});

// Endpoint to submit a vote
app.post('/submit-vote', (req, res) => {
    const { pollId, option } = req.body;
    const column = option === 'option1' ? 'votes1' : 'votes2';
    const sql = `UPDATE polls SET ${column} = ${column} + 1 WHERE id = ?`;
    db.query(sql, [pollId], (err, result) => {
        if (err) {
            console.error('Error submitting vote:', err.message);
            return res.status(500).send({ success: false, message: 'Error submitting vote' });
        }
        res.send({ success: true });
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
