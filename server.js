const path = require('path')
const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res){
    if(req.url === '/'){
        let filepath = path.join(__dirname, 'public', 'home.html')
        fs.readFile(filepath, 'utf8', (err, data) => {
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data)
        })
    };

    if(req.url === '/home'){
        res.writeHead(302, {location: "/"});
        res.end();
    };

    if(req.url === '/about'){
        let filepath = path.join(__dirname, 'public', 'about.html')
        fs.readFile(filepath, 'utf8', (err, data) => {
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    };

    if(req.url === '/contact'){
        let filepath = path.join(__dirname, 'public', 'contact.html')
        fs.readFile(filepath, 'utf8', (err, data) => {
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    };

});

server.listen(4000, '127.0.0.1');
console.log("Yes, you have created a server");