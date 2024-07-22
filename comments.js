// Create web server
// Create API
// Create comments
// Read comments
// Update comments
// Delete comments
// Create a server
// Create a web server
const express = require('express');
const app = express();
const port = 3000;

// Create API
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// Create comments
app.post('/comments', (req, res) => {
    res.send('Create comments');
});

// Read comments
app.get('/comments/:id', (req, res) => {
    res.send('Read comments');
});

// Update comments
app.put('/comments/:id', (req, res) => {
    res.send('Update comments');
});

// Delete comments
app.delete('/comments/:id', (req, res) => {
    res.send('Delete comments');
});

// Create a server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// Run the server
// node comments.js
// Open the browser
// http://localhost:3000/comments