const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req,res) => {
    res.render('home', {name: "DevDoctor"});
    
});

app.get('/hobbies', (req,res) => {
    var data = {name: 'DevDoctor',
        hobbies:['coding', 'teaching', 'travel']
    };
    res.render('hobbies', {data:data});

});


app.listen(3000)