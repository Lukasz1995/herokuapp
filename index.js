const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const shell = require('shelljs');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function(req, res){

    shell.exec(`java -jar helloword.jar /usr/local/bin/wn`);
    let jsonData = JSON.parse(fs.readFileSync('./dictionary.json', 'utf8'));

    res.send(jsonData)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))