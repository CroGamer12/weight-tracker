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
            res.end();
            return;
        }
        res.json(data);
    })
});

app.put('/edit', (req, res) => {
    console.log(req.body);
    db.update(req.body.old, req.body.new, (err, num) => {
        if (err) {
            res.end();
            return;
        }
        res.json(req.body);
    });
});

app.delete('/remove', (req, res) => {
    console.log(req.body);
    db.remove(req.body, (err, num) => {
        if (err) {
            res.end();
            return;
        }
        res.json(req.body);
    });
});

app.post('/add', (req, res) => {
    console.log(req.body);
    db.insert(req.body, (err, num) => {
        if (err) {
            res.end();
            return;
        }
        res.json(req.body);
    });
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log('server up and running'));
