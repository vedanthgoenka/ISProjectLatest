const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const dataFile = './data.json';

const readData = () => {
    if (fs.existsSync(dataFile)) {
        const data = fs.readFileSync(dataFile);
        return JSON.parse(data);
    }
    return [];
};

const writeData = (data) => {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

// Login endpoint
app.post('/login', async (req, res) => {
    const { accountNumber, password } = req.body;
    const users = readData();

    const user = users.find((user) => user.accountNumber === accountNumber);
    if (!user) {
        return res.status(404).json({ success: false, message: 'Account not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
        return res.status(200).json({ success: true, message: 'Login successful', user: user });
    } else {
        return res.status(401).json({ success: false, message: 'Incorrect password' });
    }
});


app.post('/register', async (req, res) => {
    console.log(req.body)
    const { name, accountNumber, password } = req.body;
    const users = readData();

    const existingUser = users.find((user) => user.accountNumber === accountNumber);
    if (existingUser) {
        return res.status(409).json({ success: false, message: 'Account number already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        name,
        accountNumber,
        password: hashedPassword,
    };

    users.push(newUser);
    writeData(users);

    return res.status(201).json({ success: true, message: 'User registered successfully' });
});




app.get('/user', (req, res) => {
    const { email } = req.query;
    const users = readData();

    const user = users.find((user) => user.email === email);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const userDetails = {
        fullname: user.fullname,
        type: user.type,
        number: user.number,
        balance: user.balance,
        transactions: user.transactions,
    };

    res.status(200).json(userDetails);
});

// app.get("/", (req, res) => {
//     res.json({ "msg": "help" })
// })

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
