const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/view/home.html");
});

app.get('/ask', (req, res) => {
    res.sendFile(__dirname + "/view/ask.html");
});

app.get('/info', (req, res) => {
    res.sendFile(__dirname + "/view/info.html");
});

app.post('/addquestion', (req, res) => {
    const fileData = fs.readFileSync('questions.txt',{encoding: 'utf-8'});
    let questionList = [];
    if(fileData){
        questionList = JSON.parse(fileData);
    }
    const question = {
        id: questionList.length,
        yes: 0,
        no: 0,
        content: req.body.question,  
    };
    questionList.push(question);
    fs.writeFileSync('questions.txt', JSON.stringify(questionList));
    res.redirect('/');
});

app.use('/public', express.static('public'));

const port = 2504;
app.listen(port, function(err) {
    if (err) console.log(err);
    else console.log("server start success");
})