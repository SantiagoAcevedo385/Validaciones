require('dotenv').config();

const hbs = require("hbs");
const path = require("path");

const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, '/public/views/partials'));

app.get('/', (req,res) => {
    res.render('login');
})

app.get('/main', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})
