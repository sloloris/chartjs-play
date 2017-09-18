const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    app = express(),
    defaultPort = 4444;

app.use(bodyParser.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/index.html'))  
});


app.get('*', function(req, res) {
    res.json({
        "route": "404 route not found"
    });
});

var port = process.env.PORT || 4444;
app.listen(port);
console.log('Server is Up and Running at Port : ' + port);