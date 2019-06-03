const express = require('express');

const app = express();

//middleware
app.use('/about', express.static("myself"));


// Router
app.get('/', (request, respone) => {
    data = {
        name: "Dung",
        age: 18
    }
    console.log(__dirname);
    //respone.send("<h1>"+ data.name + " " + data.age +"</h1>");
    respone.sendFile(__dirname+ '/myself/index.html');
});

app.get('/about', (request, respone) => {
    console.log(__dirname);
    respone.sendFile(__dirname + "/myself/dungtuanha.html");
});

// app.get('/myself.css', (request, respone) => {
//     console.log(__dirname);
//     respone.sendFile(__dirname + "/myself.css");
// });



// http://localhost:6969
const port = 6969;
app.listen(port, function(err) {
    if(err) console.log(err);
    else console.log("server start success")
});