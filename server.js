const express = require('express');
const app = express();
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    const user_id = "john_doe_17091999";
    const email = "abhijairajawat@gmail.com";
    const roll_number = "21BCE2775";

    let numbers = [];
    let alphabets = [];
    let highest_lowercase_alphabet = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string' && /^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
            if (item === item.toLowerCase() && (!highest_lowercase_alphabet.length || item > highest_lowercase_alphabet[0])) {
                highest_lowercase_alphabet = [item];
            }
        }
    });

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

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
