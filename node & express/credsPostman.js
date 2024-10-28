const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    console.log("inside get request");
    res.send('Hello Alien World! get');
});
app.post('/items', (req, res) => {
    console.log("inside post request");
    res.send('Hello Alien World! post');
});
app.put('/items/:id', (req, res) => {
    console.log("inside put request");
    res.send('Hello Alien World! put');
});
app.delete('/items/:id', (req, res) => {
    console.log("inside delete request");
    res.send('Hello Alien World! delete');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});