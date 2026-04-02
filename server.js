const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Store messages in memory (in production, use a database)
const messages = [];

// API endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: 'All fields are required'
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            error: 'Invalid email address'
        });
    }

    // Store the message
    const newMessage = {
        id: Date.now(),
        name,
        email,
        message,
        timestamp: new Date().toISOString()
    };

    messages.push(newMessage);

    // Log the message to console
    console.log('\n✓ New contact form submission:');
    console.log(`  Name: ${name}`);
    console.log(`  Email: ${email}`);
    console.log(`  Message: ${message}`);
    console.log(`  Time: ${newMessage.timestamp}\n`);

    // Save to JSON file (optional)
    const filePath = path.join(__dirname, 'messages.json');
    try {
        let allMessages = [];
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            allMessages = JSON.parse(data);
        }
        allMessages.push(newMessage);
        fs.writeFileSync(filePath, JSON.stringify(allMessages, null, 2));
    } catch (error) {
        console.error('Error saving message to file:', error);
    }

    // Return success response
    res.json({
        success: true,
        message: 'Your message has been received successfully!',
        data: newMessage
    });
});

// API endpoint to view all messages (for demo purposes)
app.get('/api/messages', (req, res) => {
    res.json({
        total: messages.length,
        messages: messages
    });
});

// Serve index.html for root and other routes (SPA support)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: 'Internal server error'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`\n🚀 Portfolio website is running on http://localhost:${PORT}`);
    console.log(`📧 Contact form submissions API: http://localhost:${PORT}/api/contact\n`);
});
