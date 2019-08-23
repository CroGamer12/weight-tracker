const express = require('express');
const app = express();
const Datastore = require('nedb');

const db = new Datastore('server/database.db');
db.loadDatabase();

app.use(express.static('dist'));
app.use(express.json());

app.get('/weight', (req, res) => {
    db.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        res.json(data);
    })
});

app.post('/add', (req, res) => {
    console.log(req.body);
    db.insert(req.body);
    res.json(req.body);
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log('server up and running'));
