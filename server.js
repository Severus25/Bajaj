const express = require('express');
const app = express();
app.use(express.json());

// POST method for /bfhl route
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    // Hardcoded user details
    const user_id = "john_doe_17091999";
    const email = "abhijairajawat@gmail.com";
    const roll_number = "21BCE2775";

    // Initialize arrays for numbers and alphabets
    let numbers = [];
    let alphabets = [];
    let highest_lowercase_alphabet = [];

    // Process the input data array
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item); // Push to numbers if it's a number
        } else if (typeof item === 'string' && /^[a-zA-Z]$/.test(item)) {
            alphabets.push(item); // Push to alphabets if it's a letter
            if (item === item.toLowerCase() && (!highest_lowercase_alphabet.length || item > highest_lowercase_alphabet[0])) {
                highest_lowercase_alphabet = [item]; // Find highest lowercase letter
            }
        }
    });

    // Send response
    res.status(200).json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highest_lowercase_alphabet
    });
});

// GET method for /bfhl route
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
