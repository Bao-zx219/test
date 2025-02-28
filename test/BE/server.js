const express = require('express');
const bodyParser = require('body-parser');
const ItemService = require('./src/services/index');

const app = express();
const itemService = new ItemService();

app.use(bodyParser.json());

app.get('/items', async (req, res) => {
    try {
        const items = await itemService.fetchItems();
        res.json(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/items', async (req, res) => {
    try {
        const newItem = req.body;
        await itemService.addItem(newItem);
        res.status(201).send('Item added successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});