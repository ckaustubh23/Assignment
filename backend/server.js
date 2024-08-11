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
    password: 'ENTER YOUR OWN MYSQL CONNECTION PASSWORD',
    database: 'ENTER YOUR OWN DATABASE NAME'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Create Polls table if it doesn't exist
const createPollsTable = `CREATE TABLE IF NOT EXISTS polls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    option1 VARCHAR(255),
    option2 VARCHAR(255),
    votes1 INT DEFAULT 0,
    votes2 INT DEFAULT 0
)`;
db.query(createPollsTable, (err, result) => {
    if (err) throw err;
    console.log('Polls table ready...');
});

// Endpoint to create a new poll
app.post('/create-poll', (req, res) => {
    const { title, description, option1, option2 } = req.body;
    const sql = 'INSERT INTO polls (title, description, option1, option2) VALUES (?, ?, ?, ?)';
    db.query(sql, [title, description, option1, option2], (err, result) => {
        if (err) throw err;
        res.send({ success: true });
    });
});

// Endpoint to get all polls
app.get('/polls', (req, res) => {
    db.query('SELECT * FROM polls', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Endpoint to submit a vote
app.post('/submit-vote', (req, res) => {
    const { pollId, option } = req.body;
    const column = option === 'option1' ? 'votes1' : 'votes2';
    const sql = `UPDATE polls SET ${column} = ${column} + 1 WHERE id = ?`;
    db.query(sql, [pollId], (err, result) => {
        if (err) throw err;
        res.send({ success: true });
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
