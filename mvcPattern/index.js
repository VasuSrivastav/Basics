const express = require('express');
const app = express();
const port = 3000;
const productRoutes = require('./routes/productRoutes')
const connectDB = require('./config/db');

// connect to database
connectDB();

// body parser
app.use(express.json());

// routes

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});