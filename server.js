const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/index')
const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes.setRoute(app);
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});