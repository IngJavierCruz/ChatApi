var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



io.on('connection', (socket) => {
    console.log('a user connected: ' + socket.connected);
    console.log('IdConection: ' + socket.id);

    socket.on('disconnect', () => {
       console.log('user disconnectted'); 
    });


    socket.broadcast.emit('Hola mi cielo');


    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });


    let counter = 0;
    setInterval(() => {
        socket.emit('hello', ++counter);
    }, 10000);


    socket.on('hey', data => {
        console.log('hey', data);
    });

});





http.listen(5000, () => {
    console.log('server on *:5000');
});

